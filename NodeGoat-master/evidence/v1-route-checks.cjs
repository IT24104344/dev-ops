const fs = require('fs');
const vm = require('vm');
const assert = require('assert');
const path = 'C:/Users/User/Desktop/devops/NodeGoat-master/app/routes/contributions.js';
const code = fs.readFileSync(path, 'utf8');
let updates = [], logs = [], rendered;
const sandbox = {
  module: {exports: {}}, console: {log: (...args) => logs.push(args)},
  require(name) {
    if (name.includes('contributions-dao')) return {ContributionsDAO: function () {
      this.update = (id, preTax, afterTax, roth, cb) => {
        updates.push({id, preTax, afterTax, roth}); cb(null, {preTax, afterTax, roth});
      };
    }};
    if (name.includes('config')) return {environmentalScripts: []};
    throw Error(name);
  }
};
vm.runInNewContext(code, sandbox, {filename: path});
const handler = new sandbox.module.exports({});
let count = 0;
function check(body, accepted, expected) {
  updates = []; logs = []; rendered = undefined;
  handler.handleContributionsUpdate({body, session: {userId: 2}}, {
    render(view, data) { rendered = data; }
  }, err => { throw err; });
  assert.equal(logs.length, 0, 'Untrusted code must never execute');
  assert.equal(updates.length, accepted ? 1 : 0, JSON.stringify(body));
  assert.ok(rendered);
  if (!accepted) assert.ok(rendered.updateError);
  if (expected) assert.deepStrictEqual(updates[0], expected);
  count++;
}
check({preTax: '5', afterTax: '0', roth: '0'}, true, {id: 2, preTax: 5, afterTax: 0, roth: 0});
check({preTax: '10', afterTax: '10', roth: '10'}, true);
check({preTax: '2.5', afterTax: '0.5', roth: '1'}, true);
check({preTax: '0', afterTax: '0', roth: '0'}, true);
check({preTax: '10', afterTax: '10', roth: '11'}, false);
for (const field of ['preTax', 'afterTax', 'roth']) {
  for (const value of ['(console.log("V1_BASELINE_PROOF"), 5)', '5abc', '1+4', '', ' ', '-1', 'Infinity', 'NaN', '1e1', '0x10', '1.2.3', '31', '9'.repeat(400), null, undefined, {}, [], 5]) {
    check({preTax: '0', afterTax: '0', roth: '0', [field]: value}, false);
  }
}
console.log(`PASS: ${count} route checks. Exact payload rejected in all three fields, no marker logged, no database update on invalid input. Valid numeric cases and total limit passed. DAO mocked; this is not the live Docker retest.`);
