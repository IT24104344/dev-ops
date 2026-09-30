# Local Semgrep gate

Run from PowerShell in the project folder:

```powershell
node .\scripts\run-sast-gate.cjs
$LASTEXITCODE
```

This runs a fresh scan using the saved image digest and frozen local rules. Source is mounted read-only. Each run writes separate evidence under docs/evidence/gate-TIMESTAMP. Scan failure, unreadable reports, zero scanned files and non-warning scanner errors fail closed. Policy: ERROR findings fail with exit 1; no ERROR findings pass with exit 0; operational problems fail with exit 2. WARNING findings and the known partial-parsing warnings remain visible but are not blocking. This is a proposed local policy; M4 and the team must adopt their CI threshold explicitly.

The gate does not run a subsequent build itself. To enforce progression in a local script, check its exit code and stop before the build if it is nonzero. A separate successful image build is not evidence that the gate was enforced.

test-sast-report.cjs can also evaluate already saved scan reports. The before/after policy checks supplied with this work are tests against existing reports, not fresh scans or CI pipeline runs. Never pass a stale report to claim a current-code gate passed.

GitHub Actions has not been changed or run. The existing upstream e2e-test.yml is not the team's final pipeline. M4 can integrate the same threshold with the other security jobs later: SAST fails on ERROR findings, scan errors fail the job, and build/deploy jobs depend on successful required gates. Local work alone does not satisfy the assignment's GitHub Actions CI/CD demonstration. No new conflicting pipeline was created.

Requires host Node.js and Docker CLI on PATH with the Linux engine running. This does not alter PowerShell execution policy. The current source now includes these gate scripts; a fresh scan may select additional files compared with the 73-file historical V1 evidence scans. Do not replace the historical reports or assert that a fresh gate has the same counts without inspecting its output.
