"use strict";
const fs = require("fs");
function evaluate(file) {
    const report = JSON.parse(fs.readFileSync(file, "utf8").replace(/^\uFEFF/, ""));
    if (!report || typeof report.version !== "string" || !Array.isArray(report.results) ||
        !report.paths || !Array.isArray(report.paths.scanned) || !report.paths.scanned.length ||
        !Array.isArray(report.errors)) throw new Error("Incomplete report or no scanned files");
    if (report.errors.some(e => e.level !== "warn")) throw new Error("Non-warning scanner errors");
    if (report.results.some(f => !f.extra || !["ERROR", "WARNING", "INFO", "INVENTORY", "EXPERIMENT"].includes(f.extra.severity))) {
        throw new Error("Invalid or unrecognized finding severity");
    }
    const blocking = report.results.filter(f => f.extra.severity === "ERROR");
    const lines = [
        "Policy: ERROR findings block; WARNING and INFO findings remain for review.",
        `Semgrep ${report.version}; files ${report.paths.scanned.length}; findings ${report.results.length}; ERROR findings ${blocking.length}; parsing/scan warnings ${report.errors.length}.`
    ];
    if (report.errors.length) lines.push("Coverage warnings are permitted by this local policy and must remain documented.");
    blocking.forEach(f => lines.push(`${f.path}:${f.start.line} ${f.check_id}`));
    lines.push(blocking.length ? "FAIL: security threshold exceeded. Exit 1." : "PASS: no ERROR findings. Exit 0; this is not a claim of complete security.");
    return {code: blocking.length ? 1 : 0, text: lines.join("\n") + "\n"};
}
module.exports = evaluate;
if (require.main === module) {
    try {
        const result = evaluate(process.argv[2]);
        process.stdout.write(result.text);
        process.exitCode = result.code;
    } catch (err) {
        console.error("FAIL: invalid or unavailable scan report: " + err.message);
        process.exitCode = 2;
    }
}
