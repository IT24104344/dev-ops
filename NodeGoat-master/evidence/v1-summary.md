# V1 evidence and SAST comparison

## Scope and source
OWASP NodeGoat, local package version 1.3.0, reported download source https://github.com/OWASP/NodeGoat. The exact upstream commit and byte-for-byte upstream equivalence have not been verified. The application runs locally at http://localhost:4000 with MongoDB 4.4. Ethical clearance was confirmed by the student in this conversation. Work is local; no repository, commit, PR, or CI run was published.

## Vulnerability Assessment & Secure Coding Evidence — V1
The Contributions update handler accepted request-body values and evaluated them as JavaScript before checking whether their results were valid percentages. The authenticated route is POST /contributions, registered in app/routes/index.js. In app/routes/contributions.js, handleContributionsUpdate passed req.body.preTax, req.body.afterTax and req.body.roth to eval(). The original calls occupied lines 32–34.

For the local demonstration, the Pre-Tax field contained `(console.log("V1_BASELINE_PROOF"), 5)`, while Roth and After Tax were both `0`. The server logged V1_BASELINE_PROOF, and the browser reported success with a Pre-Tax contribution of 5%. The comma expression first called console.log and then returned 5. This shows that server-side JavaScript ran before numeric validation. The demonstration only logged a marker; it did not demonstrate command execution, data theft, or access outside the local test application. The unsafe primitive could allow other JavaScript operations with the application's privileges.

[Insert Figure: V1 Before — v1-before.png and submitted server-log evidence]

The fix changes only app/routes/contributions.js among the originally fingerprinted source files. It removes all three eval() calls and the obsolete commented parseInt example. A small parser accepts string values consisting of digits with an optional decimal fraction, rejects surrounding whitespace and unexpected types, converts the complete validated string with Number(), and requires a finite result. The existing non-negative and combined-total-at-most-30 checks remain. Invalid values return the existing validation error before the database update. Number() does not execute the supplied text as JavaScript. A payload such as 5abc is rejected rather than partially accepted as 5.

The student repeated the same marker payload against the rebuilt application. The browser showed “Invalid contribution percentages”, and the supplied five-minute server-log capture contained no marker. This supports mitigation of the demonstrated test; the log capture alone is not proof against every possible attack. Separate valid input, Pre-Tax 5, Roth 4 and After Tax 3, succeeded. A direct MongoDB read of userId 2 returned {"preTax":5,"afterTax":3,"roth":4}, confirming persistence. The error page's displayed zeros are template defaults and are not evidence of database changes.

[Insert Figure: V1 After — v1-after.png and v1-after-logs.png]
[Insert Figure: Valid numeric input — v1-after-valid-input.png]

Syntax validation and 59 route-level checks passed. The route checks mocked the database and checked the exact payload in each of the three fields, malformed values, finite numbers, normal decimal values, the total boundary, and rejection without database updates. These checks are separate from the live browser evidence. The local test harness used the host Node runtime, not the container's Node 12 runtime.

## Verified SAST comparison — V1 only

| Metric | Before | After V1 |
|---|---:|---:|
| Semgrep version | 1.177.0 | 1.177.0 |
| Rules loaded | 563 | 563 |
| Rules run | 106 | 106 |
| Files scanned | 73 | 73 |
| Findings | 21 | 18 |
| ERROR severity | 3 | 0 |
| WARNING severity | 18 | 18 |
| V1 injection findings | 3 | 0 |
| Exit code | 0 | 0 |

The exact resolved rule ID is `docs.evidence.semgrep-rules.javascript.lang.security.audit.code-string-concat.code-string-concat`. Its three findings were in app/routes/contributions.js at original lines 32, 33 and 34. All 18 remaining findings have unchanged rule IDs, paths and locations. The scanner image digest is stored in semgrep-image.txt, frozen rules in semgrep-rules/, commands in sast-before-command.txt and sast-after-v1-command.txt, and complete reports in the corresponding TXT and JSON files. The docs.evidence.semgrep-rules prefix in IDs comes from the local configuration path; retain that path for comparable scans.

The remaining findings are six session-cookie configuration warnings, six mutable GitHub Actions references, five HTTP links in tutorials, and one open redirect. They require triage, not automatic classification as exploitable vulnerabilities. For example, a rule noticing an omitted cookie option does not establish its runtime value; middleware defaults must be checked.

Both scans partially parsed the same ten Swig/HTML templates. Default ignore patterns skipped vendor assets and tests, and docs was explicitly excluded. Coverage is incomplete. These reports contain no direct findings for the team's NoSQL injection, stored XSS, or password-storage vulnerabilities; this does not prove those vulnerabilities absent. SAST can miss flows or template semantics (false negatives), or flag patterns that are safe in their actual context (false positives).

The baseline and V1 scans returned zero despite text labels saying “blocking”; they were evidence scans, not enforced security gates. This is an intermediate V1 comparison. A final all-team comparison is pending the other three fixes and their evidence.

## Evidence limitations and next responsibilities
No all-team fixes, final SAST scan, GitHub Actions gate execution, PR reviews, or M1/M2/M4 exploit outcomes have been verified. Do not describe the local gate policy checks as CI runs. Screenshots are user-supplied originals; no screenshot content was generated or altered.

AI usage disclosure draft: OpenAI Codex assisted with local setup guidance, source inspection, the V1 validation fix, test preparation, SAST evidence analysis, and drafting this section. Review this wording and explain the implementation yourself before including it in the contribution statement.
