"use strict";
const fs = require("fs");
const path = require("path");
const {spawnSync} = require("child_process");
const evaluate = require("./test-sast-report.cjs");
const repo = path.resolve(__dirname, "..");
const evidence = path.join(repo, "docs", "evidence");
const runDir = path.join(evidence, "gate-" + new Date().toISOString().replace(/[:.]/g, "-"));
fs.mkdirSync(runDir, {recursive: true});
try {
    const image = fs.readFileSync(path.join(evidence, "semgrep-image.txt"), "utf8").trim();
    if (!/^semgrep\/semgrep@sha256:[a-f0-9]{64}$/.test(image)) throw new Error("Expected pinned Semgrep digest");
    const scan = "semgrep scan --config /src/docs/evidence/semgrep-rules --metrics off --disable-version-check --verbose --text --json-output /evidence/scan.json --exclude docs --exclude node_modules --exclude .git .";
    fs.writeFileSync(path.join(runDir, "command.txt"), scan + "\n");
    fs.writeFileSync(path.join(runDir, "image.txt"), image + "\n");
    // shell:false: host paths are separate arguments, never interpolated into shell code.
    const result = spawnSync("docker", ["run", "--rm", "-v", repo + ":/src:ro", "-v", runDir + ":/evidence", "-w", "/src", image, "sh", "-c", scan + " 2>&1"], {
        cwd: repo, encoding: "utf8", maxBuffer: 64 * 1024 * 1024, windowsHide: true
    });
    const output = (result.stdout || "") + (result.stderr || "");
    fs.writeFileSync(path.join(runDir, "scan.txt"), output);
    process.stdout.write(output);
    if (result.error) throw result.error;
    if (result.status !== 0) throw new Error("Docker/Semgrep exited " + result.status);
    const gate = evaluate(path.join(runDir, "scan.json"));
    fs.writeFileSync(path.join(runDir, "policy.txt"), gate.text);
    fs.writeFileSync(path.join(runDir, "exit-code.txt"), String(gate.code) + "\n");
    process.stdout.write(gate.text);
    process.exitCode = gate.code;
} catch (err) {
    const message = "FAIL: " + err.message + "\n";
    fs.writeFileSync(path.join(runDir, "failure.txt"), message);
    fs.writeFileSync(path.join(runDir, "exit-code.txt"), "2\n");
    console.error(message);
    process.exitCode = 2;
}
console.log("Gate evidence: " + runDir);
