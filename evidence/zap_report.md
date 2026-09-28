# ZAP Scanning Report

ZAP by [Checkmarx](https://checkmarx.com/).


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 1 |
| Medium | 5 |
| Low | 8 |
| Informational | 9 |




## Insights

| Level | Reason | Site | Description | Statistic |
| --- | --- | --- | --- | --- |
| Low | Warning |  | ZAP warnings logged - see the zap.log file for details | 3    |
| Info | Informational | http://host.docker.internal:4000 | Percentage of responses with status code 2xx | 57 % |
| Info | Informational | http://host.docker.internal:4000 | Percentage of responses with status code 3xx | 17 % |
| Info | Informational | http://host.docker.internal:4000 | Percentage of responses with status code 4xx | 25 % |
| Info | Informational | http://host.docker.internal:4000 | Percentage of endpoints with content type application/javascript | 13 % |
| Info | Informational | http://host.docker.internal:4000 | Percentage of endpoints with content type image/png | 1 % |
| Info | Informational | http://host.docker.internal:4000 | Percentage of endpoints with content type text/css | 6 % |
| Info | Informational | http://host.docker.internal:4000 | Percentage of endpoints with content type text/html | 63 % |
| Info | Informational | http://host.docker.internal:4000 | Percentage of endpoints with content type text/plain | 14 % |
| Info | Informational | http://host.docker.internal:4000 | Percentage of endpoints with method GET | 91 % |
| Info | Informational | http://host.docker.internal:4000 | Percentage of endpoints with method POST | 8 % |
| Info | Informational | http://host.docker.internal:4000 | Count of total endpoints | 61    |







## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- |
| Off-site Redirect | High | 1 |
| CSP: Failure to Define Directive with No Fallback | Medium | Systemic |
| Content Security Policy (CSP) Header Not Set | Medium | 5 |
| Missing Anti-clickjacking Header | Medium | Systemic |
| Source Code Disclosure - SQL | Medium | 2 |
| Vulnerable JS Library | Medium | 2 |
| Cookie without SameSite Attribute | Low | Systemic |
| Cross-Origin-Embedder-Policy Header Missing or Invalid | Low | 5 |
| Cross-Origin-Opener-Policy Header Missing or Invalid | Low | 5 |
| Cross-Origin-Resource-Policy Header Missing or Invalid | Low | Systemic |
| Dangerous JS Functions | Low | 2 |
| Permissions Policy Header Not Set | Low | Systemic |
| Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s) | Low | Systemic |
| X-Content-Type-Options Header Missing | Low | Systemic |
| Authentication Request Identified | Informational | 1 |
| Content Security Policy (CSP) Report-Only Header Found | Informational | Systemic |
| Information Disclosure - Suspicious Comments | Informational | 12 |
| Modern Web Application | Informational | Systemic |
| Non-Storable Content | Informational | 2 |
| Session Management Response Identified | Informational | 9 |
| Storable and Cacheable Content | Informational | Systemic |
| Storable but Non-Cacheable Content | Informational | 5 |
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 2 |




## Alert Detail



### [ Off-site Redirect ](https://www.zaproxy.org/docs/alerts/10028/)



##### High (Medium)

### Description

Open redirects are one of the OWASP 2010 Top Ten vulnerabilities. This check looks at user-supplied input in query string parameters and POST data to identify where open redirects might be possible. Open redirects occur when an application allows user-supplied input (e.g. https://nottrusted.com) to control an off-site destination. This is generally a pretty accurate way to find where 301 or 302 redirects could be exploited by spammers or phishing attacks.

For example an attacker could supply a user with the following link: https://example.com/example.php?url=https://malicious.example.com.

NOTE: For the purposes of the passive check the authority portion of the origin and destination were compared. Manual testing may be required to validate the impact of this finding.

* URL: http://host.docker.internal:4000/learn%3Furl=https://www.khanacademy.org/economics-finance-domain/core-finance/investment-vehicles-tutorial/ira-401ks/v/traditional-iras
  * Node Name: `http://host.docker.internal:4000/learn (url)`
  * Method: `GET`
  * Parameter: `url`
  * Attack: ``
  * Evidence: ``
  * Other Info: `The 301 or 302 response to a request for the following URL appeared to contain user input in the location header:

http://host.docker.internal:4000/learn?url=https://www.khanacademy.org/economics-finance-domain/core-finance/investment-vehicles-tutorial/ira-401ks/v/traditional-iras

The user input found was:

url=https://www.khanacademy.org/economics-finance-domain/core-finance/investment-vehicles-tutorial/ira-401ks/v/traditional-iras

The context was:

https://www.khanacademy.org/economics-finance-domain/core-finance/investment-vehicles-tutorial/ira-401ks/v/traditional-iras`


Instances: 1

### Solution

To avoid the open redirect vulnerability, parameters of the application script/program must be validated before sending 302 HTTP code (redirect) to the client browser. Implement safe redirect functionality that only redirects to relative URI's, or a list of trusted domains.

### Reference


* [ https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html ](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html)
* [ https://cwe.mitre.org/data/definitions/601.html ](https://cwe.mitre.org/data/definitions/601.html)


#### CWE Id: [ 601 ](https://cwe.mitre.org/data/definitions/601.html)


#### WASC Id: 38

#### Source ID: 3

### [ CSP: Failure to Define Directive with No Fallback ](https://www.zaproxy.org/docs/alerts/10055/)



##### Medium (High)

### Description

The Content Security Policy fails to define one of the directives that has no fallback. Missing/excluding them is the same as allowing anything.

* URL: http://host.docker.internal:4000/allocations/
  * Node Name: `http://host.docker.internal:4000/allocations/`
  * Method: `GET`
  * Parameter: `Content-Security-Policy`
  * Attack: ``
  * Evidence: `default-src 'self'`
  * Other Info: `The directive(s): frame-ancestors, form-action is/are among the directives that do not fallback to default-src.`
* URL: http://host.docker.internal:4000/head
  * Node Name: `http://host.docker.internal:4000/head`
  * Method: `GET`
  * Parameter: `Content-Security-Policy`
  * Attack: ``
  * Evidence: `default-src 'self'`
  * Other Info: `The directive(s): frame-ancestors, form-action is/are among the directives that do not fallback to default-src.`
* URL: http://host.docker.internal:4000/robots.txt
  * Node Name: `http://host.docker.internal:4000/robots.txt`
  * Method: `GET`
  * Parameter: `Content-Security-Policy`
  * Attack: ``
  * Evidence: `default-src 'self'`
  * Other Info: `The directive(s): frame-ancestors, form-action is/are among the directives that do not fallback to default-src.`
* URL: http://host.docker.internal:4000/server.js
  * Node Name: `http://host.docker.internal:4000/server.js`
  * Method: `GET`
  * Parameter: `Content-Security-Policy`
  * Attack: ``
  * Evidence: `default-src 'self'`
  * Other Info: `The directive(s): frame-ancestors, form-action is/are among the directives that do not fallback to default-src.`
* URL: http://host.docker.internal:4000/sitemap.xml
  * Node Name: `http://host.docker.internal:4000/sitemap.xml`
  * Method: `GET`
  * Parameter: `Content-Security-Policy`
  * Attack: ``
  * Evidence: `default-src 'self'`
  * Other Info: `The directive(s): frame-ancestors, form-action is/are among the directives that do not fallback to default-src.`

Instances: Systemic


### Solution

Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.

### Reference


* [ https://www.w3.org/TR/CSP/ ](https://www.w3.org/TR/CSP/)
* [ https://caniuse.com/#search=content+security+policy ](https://caniuse.com/#search=content+security+policy)
* [ https://content-security-policy.com/ ](https://content-security-policy.com/)
* [ https://github.com/HtmlUnit/htmlunit-csp ](https://github.com/HtmlUnit/htmlunit-csp)
* [ https://web.dev/articles/csp#resource-options ](https://web.dev/articles/csp#resource-options)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ Content Security Policy (CSP) Header Not Set ](https://www.zaproxy.org/docs/alerts/10038/)



##### Medium (High)

### Description

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.

* URL: http://host.docker.internal:4000
  * Node Name: `http://host.docker.internal:4000`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/login
  * Node Name: `http://host.docker.internal:4000/login`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/signup
  * Node Name: `http://host.docker.internal:4000/signup`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/tutorial/a4
  * Node Name: `http://host.docker.internal:4000/tutorial/a4`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/tutorial/a5
  * Node Name: `http://host.docker.internal:4000/tutorial/a5`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``


Instances: 5

### Solution

Ensure that your web server, application server, load balancer, etc. is configured to set the Content-Security-Policy header.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CSP)
* [ https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html ](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html)
* [ https://www.w3.org/TR/CSP/ ](https://www.w3.org/TR/CSP/)
* [ https://w3c.github.io/webappsec-csp/ ](https://w3c.github.io/webappsec-csp/)
* [ https://web.dev/articles/csp ](https://web.dev/articles/csp)
* [ https://caniuse.com/#feat=contentsecuritypolicy ](https://caniuse.com/#feat=contentsecuritypolicy)
* [ https://content-security-policy.com/ ](https://content-security-policy.com/)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ Missing Anti-clickjacking Header ](https://www.zaproxy.org/docs/alerts/10020/)



##### Medium (Medium)

### Description

The response does not protect against 'ClickJacking' attacks. It should include either Content-Security-Policy with 'frame-ancestors' directive or X-Frame-Options.

* URL: http://host.docker.internal:4000
  * Node Name: `http://host.docker.internal:4000`
  * Method: `GET`
  * Parameter: `x-frame-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/login
  * Node Name: `http://host.docker.internal:4000/login`
  * Method: `GET`
  * Parameter: `x-frame-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/signup
  * Node Name: `http://host.docker.internal:4000/signup`
  * Method: `GET`
  * Parameter: `x-frame-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/tutorial/a4
  * Node Name: `http://host.docker.internal:4000/tutorial/a4`
  * Method: `GET`
  * Parameter: `x-frame-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/login
  * Node Name: `http://host.docker.internal:4000/login ()(_csrf,password,userName)`
  * Method: `POST`
  * Parameter: `x-frame-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: Systemic


### Solution

Modern Web browsers support the Content-Security-Policy and X-Frame-Options HTTP headers. Ensure one of them is set on all web pages returned by your site/app.
If you expect the page to be framed only by pages on your server (e.g. it's part of a FRAMESET) then you'll want to use SAMEORIGIN, otherwise if you never expect the page to be framed, you should use DENY. Alternatively consider implementing Content Security Policy's "frame-ancestors" directive.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Frame-Options ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Frame-Options)


#### CWE Id: [ 1021 ](https://cwe.mitre.org/data/definitions/1021.html)


#### WASC Id: 15

#### Source ID: 3

### [ Source Code Disclosure - SQL ](https://www.zaproxy.org/docs/alerts/10099/)



##### Medium (Medium)

### Description

Application Source Code was disclosed by the web server. - SQL

* URL: http://host.docker.internal:4000/tutorial
  * Node Name: `http://host.docker.internal:4000/tutorial`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `SELECT * FROM accounts WHERE username `
  * Other Info: ``
* URL: http://host.docker.internal:4000/tutorial/a1
  * Node Name: `http://host.docker.internal:4000/tutorial/a1`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `SELECT * FROM accounts WHERE username `
  * Other Info: ``


Instances: 2

### Solution

Ensure that application Source Code is not available with alternative extensions, and ensure that source code is not present within other files or data deployed to the web server, or served by the web server.

### Reference


* [ https://nhimg.org/twitter-breach ](https://nhimg.org/twitter-breach)


#### CWE Id: [ 540 ](https://cwe.mitre.org/data/definitions/540.html)


#### WASC Id: 13

#### Source ID: 3

### [ Vulnerable JS Library ](https://www.zaproxy.org/docs/alerts/10003/)



##### Medium (Medium)

### Description

The identified library appears to be vulnerable.

* URL: http://host.docker.internal:4000/vendor/bootstrap/bootstrap.js
  * Node Name: `http://host.docker.internal:4000/vendor/bootstrap/bootstrap.js`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `* Bootstrap v3.0.0`
  * Other Info: `The identified library bootstrap, version 3.0.0 is vulnerable.
CVE-2019-8331
CVE-2018-14040
CVE-2018-20677
CVE-2018-20676
CVE-2018-14042
CVE-2016-10735
CVE-2024-6485
https://github.com/twbs/bootstrap/issues/28236
https://nvd.nist.gov/vuln/detail/CVE-2024-6485
https://www.herodevs.com/vulnerability-directory/cve-2024-6485
https://github.com/twbs/bootstrap/issues/20184
https://github.com/advisories/GHSA-vxmc-5x29-h64v
https://github.com/advisories/GHSA-ph58-4vrj-w6hr
https://github.com/twbs/bootstrap
https://github.com/twbs/bootstrap/issues/20631
https://github.com/advisories/GHSA-4p24-vmcr-4gqj
https://github.com/advisories/GHSA-9v3m-8fp8-mj99
https://nvd.nist.gov/vuln/detail/CVE-2018-20676
`
* URL: http://host.docker.internal:4000/vendor/jquery.min.js
  * Node Name: `http://host.docker.internal:4000/vendor/jquery.min.js`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `/*! jQuery v1.10.2`
  * Other Info: `The identified library jquery, version 1.10.2 is vulnerable.
CVE-2020-11023
CVE-2015-9251
CVE-2019-11358
https://github.com/jquery/jquery/issues/2432
http://blog.jquery.com/2016/01/08/jquery-2-2-and-1-12-released/
http://research.insecurelabs.org/jquery/test/
https://blog.jquery.com/2019/04/10/jquery-3-4-0-released/
https://nvd.nist.gov/vuln/detail/CVE-2019-11358
https://github.com/advisories/GHSA-rmxg-73gg-4p98
https://nvd.nist.gov/vuln/detail/CVE-2015-9251
https://github.com/jquery/jquery/commit/753d591aea698e57d6db58c9f722cd0808619b1b
https://bugs.jquery.com/ticket/11974
https://github.com/jquery/jquery.com/issues/162
https://blog.jquery.com/2020/04/10/jquery-3-5-0-released/
`


Instances: 2

### Solution

Upgrade to the latest version of the affected library.

### Reference


* [ https://owasp.org/Top10/2021/A06_2021-Vulnerable_and_Outdated_Components/ ](https://owasp.org/Top10/2021/A06_2021-Vulnerable_and_Outdated_Components/)


#### CWE Id: [ 1395 ](https://cwe.mitre.org/data/definitions/1395.html)


#### Source ID: 3

### [ Cookie without SameSite Attribute ](https://www.zaproxy.org/docs/alerts/10054/)



##### Low (Medium)

### Description

A cookie has been set without the SameSite attribute, which means that the cookie can be sent as a result of a 'cross-site' request. The SameSite attribute is an effective counter measure to cross-site request forgery, cross-site script inclusion, and timing attacks.

* URL: http://host.docker.internal:4000
  * Node Name: `http://host.docker.internal:4000`
  * Method: `GET`
  * Parameter: `connect.sid`
  * Attack: ``
  * Evidence: `set-cookie: connect.sid`
  * Other Info: ``
* URL: http://host.docker.internal:4000/head
  * Node Name: `http://host.docker.internal:4000/head`
  * Method: `GET`
  * Parameter: `connect.sid`
  * Attack: ``
  * Evidence: `set-cookie: connect.sid`
  * Other Info: ``
* URL: http://host.docker.internal:4000/robots.txt
  * Node Name: `http://host.docker.internal:4000/robots.txt`
  * Method: `GET`
  * Parameter: `connect.sid`
  * Attack: ``
  * Evidence: `set-cookie: connect.sid`
  * Other Info: ``
* URL: http://host.docker.internal:4000/sitemap.xml
  * Node Name: `http://host.docker.internal:4000/sitemap.xml`
  * Method: `GET`
  * Parameter: `connect.sid`
  * Attack: ``
  * Evidence: `set-cookie: connect.sid`
  * Other Info: ``
* URL: http://host.docker.internal:4000/vendor/html5shiv.js
  * Node Name: `http://host.docker.internal:4000/vendor/html5shiv.js`
  * Method: `GET`
  * Parameter: `connect.sid`
  * Attack: ``
  * Evidence: `set-cookie: connect.sid`
  * Other Info: ``

Instances: Systemic


### Solution

Ensure that the SameSite attribute is set to either 'lax' or ideally 'strict' for all cookies.

### Reference


* [ https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-cookie-same-site ](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-cookie-same-site)


#### CWE Id: [ 1275 ](https://cwe.mitre.org/data/definitions/1275.html)


#### WASC Id: 13

#### Source ID: 3

### [ Cross-Origin-Embedder-Policy Header Missing or Invalid ](https://www.zaproxy.org/docs/alerts/90004/)



##### Low (Medium)

### Description

Cross-Origin-Embedder-Policy header is a response header that prevents a document from loading any cross-origin resources that don't explicitly grant the document permission (using CORP or CORS).

* URL: http://host.docker.internal:4000
  * Node Name: `http://host.docker.internal:4000`
  * Method: `GET`
  * Parameter: `Cross-Origin-Embedder-Policy`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/login
  * Node Name: `http://host.docker.internal:4000/login`
  * Method: `GET`
  * Parameter: `Cross-Origin-Embedder-Policy`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/signup
  * Node Name: `http://host.docker.internal:4000/signup`
  * Method: `GET`
  * Parameter: `Cross-Origin-Embedder-Policy`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/tutorial/a4
  * Node Name: `http://host.docker.internal:4000/tutorial/a4`
  * Method: `GET`
  * Parameter: `Cross-Origin-Embedder-Policy`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/login
  * Node Name: `http://host.docker.internal:4000/login ()(_csrf,password,userName)`
  * Method: `POST`
  * Parameter: `Cross-Origin-Embedder-Policy`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``


Instances: 5

### Solution

Ensure that the application/web server sets the Cross-Origin-Embedder-Policy header appropriately, and that it sets the Cross-Origin-Embedder-Policy header to 'require-corp' for documents.
If possible, ensure that the end user uses a standards-compliant and modern web browser that supports the Cross-Origin-Embedder-Policy header (https://caniuse.com/mdn-http_headers_cross-origin-embedder-policy).

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 14

#### Source ID: 3

### [ Cross-Origin-Opener-Policy Header Missing or Invalid ](https://www.zaproxy.org/docs/alerts/90004/)



##### Low (Medium)

### Description

Cross-Origin-Opener-Policy header is a response header that allows a site to control if others included documents share the same browsing context. Sharing the same browsing context with untrusted documents might lead to data leak.

* URL: http://host.docker.internal:4000
  * Node Name: `http://host.docker.internal:4000`
  * Method: `GET`
  * Parameter: `Cross-Origin-Opener-Policy`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/login
  * Node Name: `http://host.docker.internal:4000/login`
  * Method: `GET`
  * Parameter: `Cross-Origin-Opener-Policy`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/signup
  * Node Name: `http://host.docker.internal:4000/signup`
  * Method: `GET`
  * Parameter: `Cross-Origin-Opener-Policy`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/tutorial/a4
  * Node Name: `http://host.docker.internal:4000/tutorial/a4`
  * Method: `GET`
  * Parameter: `Cross-Origin-Opener-Policy`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/login
  * Node Name: `http://host.docker.internal:4000/login ()(_csrf,password,userName)`
  * Method: `POST`
  * Parameter: `Cross-Origin-Opener-Policy`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``


Instances: 5

### Solution

Ensure that the application/web server sets the Cross-Origin-Opener-Policy header appropriately, and that it sets the Cross-Origin-Opener-Policy header to 'same-origin' for documents.
'same-origin-allow-popups' is considered as less secured and should be avoided.
If possible, ensure that the end user uses a standards-compliant and modern web browser that supports the Cross-Origin-Opener-Policy header (https://caniuse.com/mdn-http_headers_cross-origin-opener-policy).

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Opener-Policy)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 14

#### Source ID: 3

### [ Cross-Origin-Resource-Policy Header Missing or Invalid ](https://www.zaproxy.org/docs/alerts/90004/)



##### Low (Medium)

### Description

Cross-Origin-Resource-Policy header is an opt-in header designed to counter side-channels attacks like Spectre. Resource should be specifically set as shareable amongst different origins.

* URL: http://host.docker.internal:4000
  * Node Name: `http://host.docker.internal:4000`
  * Method: `GET`
  * Parameter: `Cross-Origin-Resource-Policy`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/images/owasplogo.png
  * Node Name: `http://host.docker.internal:4000/images/owasplogo.png`
  * Method: `GET`
  * Parameter: `Cross-Origin-Resource-Policy`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/vendor/bootstrap/bootstrap.css
  * Node Name: `http://host.docker.internal:4000/vendor/bootstrap/bootstrap.css`
  * Method: `GET`
  * Parameter: `Cross-Origin-Resource-Policy`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/vendor/theme/font-awesome/css/font-awesome.min.css
  * Node Name: `http://host.docker.internal:4000/vendor/theme/font-awesome/css/font-awesome.min.css`
  * Method: `GET`
  * Parameter: `Cross-Origin-Resource-Policy`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/vendor/theme/sb-admin.css
  * Node Name: `http://host.docker.internal:4000/vendor/theme/sb-admin.css`
  * Method: `GET`
  * Parameter: `Cross-Origin-Resource-Policy`
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: Systemic


### Solution

Ensure that the application/web server sets the Cross-Origin-Resource-Policy header appropriately, and that it sets the Cross-Origin-Resource-Policy header to 'same-origin' for all web pages.
'same-site' is considered as less secured and should be avoided.
If resources must be shared, set the header to 'cross-origin'.
If possible, ensure that the end user uses a standards-compliant and modern web browser that supports the Cross-Origin-Resource-Policy header (https://caniuse.com/mdn-http_headers_cross-origin-resource-policy).

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Cross-Origin-Embedder-Policy)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 14

#### Source ID: 3

### [ Dangerous JS Functions ](https://www.zaproxy.org/docs/alerts/10110/)



##### Low (Low)

### Description

A dangerous JS function seems to be in use that would leave the site vulnerable.

* URL: http://host.docker.internal:4000/tutorial
  * Node Name: `http://host.docker.internal:4000/tutorial`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `eval(`
  * Other Info: ``
* URL: http://host.docker.internal:4000/tutorial/a1
  * Node Name: `http://host.docker.internal:4000/tutorial/a1`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `eval(`
  * Other Info: ``


Instances: 2

### Solution

See the references for security advice on the use of these functions.

### Reference


* [ https://v17.angular.io/guide/security ](https://v17.angular.io/guide/security)


#### CWE Id: [ 749 ](https://cwe.mitre.org/data/definitions/749.html)


#### Source ID: 3

### [ Permissions Policy Header Not Set ](https://www.zaproxy.org/docs/alerts/10063/)



##### Low (Medium)

### Description

Permissions Policy Header is an added layer of security that helps to restrict from unauthorized access or usage of browser/client features by web resources. This policy ensures the user privacy by limiting or specifying the features of the browsers can be used by the web resources. Permissions Policy provides a set of standard HTTP headers that allow website owners to limit which features of browsers can be used by the page such as camera, microphone, location, full screen etc.

* URL: http://host.docker.internal:4000
  * Node Name: `http://host.docker.internal:4000`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/login
  * Node Name: `http://host.docker.internal:4000/login`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/robots.txt
  * Node Name: `http://host.docker.internal:4000/robots.txt`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/sitemap.xml
  * Node Name: `http://host.docker.internal:4000/sitemap.xml`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/login
  * Node Name: `http://host.docker.internal:4000/login ()(_csrf,password,userName)`
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: Systemic


### Solution

Ensure that your web server, application server, load balancer, etc. is configured to set the Permissions-Policy header.

### Reference


* [ https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy ](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy)
* [ https://developer.chrome.com/blog/feature-policy/ ](https://developer.chrome.com/blog/feature-policy/)
* [ https://scotthelme.co.uk/a-new-security-header-feature-policy/ ](https://scotthelme.co.uk/a-new-security-header-feature-policy/)
* [ https://w3c.github.io/webappsec-feature-policy/ ](https://w3c.github.io/webappsec-feature-policy/)
* [ https://www.smashingmagazine.com/2018/12/feature-policy/ ](https://www.smashingmagazine.com/2018/12/feature-policy/)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ Server Leaks Information via "X-Powered-By" HTTP Response Header Field(s) ](https://www.zaproxy.org/docs/alerts/10037/)



##### Low (Medium)

### Description

The web/application server is leaking information via one or more "X-Powered-By" HTTP response headers. Access to such information may facilitate attackers identifying other frameworks/components your web application is reliant upon and the vulnerabilities such components may be subject to.

* URL: http://host.docker.internal:4000
  * Node Name: `http://host.docker.internal:4000`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `X-Powered-By: Express`
  * Other Info: ``
* URL: http://host.docker.internal:4000/images/owasplogo.png
  * Node Name: `http://host.docker.internal:4000/images/owasplogo.png`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `X-Powered-By: Express`
  * Other Info: ``
* URL: http://host.docker.internal:4000/robots.txt
  * Node Name: `http://host.docker.internal:4000/robots.txt`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `X-Powered-By: Express`
  * Other Info: ``
* URL: http://host.docker.internal:4000/sitemap.xml
  * Node Name: `http://host.docker.internal:4000/sitemap.xml`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `X-Powered-By: Express`
  * Other Info: ``
* URL: http://host.docker.internal:4000/vendor/theme/sb-admin.css
  * Node Name: `http://host.docker.internal:4000/vendor/theme/sb-admin.css`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `X-Powered-By: Express`
  * Other Info: ``

Instances: Systemic


### Solution

Ensure that your web server, application server, load balancer, etc. is configured to suppress "X-Powered-By" headers.

### Reference


* [ https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/01-Information_Gathering/08-Fingerprint_Web_Application_Framework ](https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/01-Information_Gathering/08-Fingerprint_Web_Application_Framework)
* [ https://www.troyhunt.com/shhh-dont-let-your-response-headers/ ](https://www.troyhunt.com/shhh-dont-let-your-response-headers/)


#### CWE Id: [ 497 ](https://cwe.mitre.org/data/definitions/497.html)


#### WASC Id: 13

#### Source ID: 3

### [ X-Content-Type-Options Header Missing ](https://www.zaproxy.org/docs/alerts/10021/)



##### Low (Medium)

### Description

The Anti-MIME-Sniffing header X-Content-Type-Options was not set to 'nosniff'. This allows older versions of Internet Explorer and Chrome to perform MIME-sniffing on the response body, potentially causing the response body to be interpreted and displayed as a content type other than the declared content type. Current (early 2014) and legacy versions of Firefox will use the declared content type (if one is set), rather than performing MIME-sniffing.

* URL: http://host.docker.internal:4000/images/owasplogo.png
  * Node Name: `http://host.docker.internal:4000/images/owasplogo.png`
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: http://host.docker.internal:4000/signup
  * Node Name: `http://host.docker.internal:4000/signup`
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: http://host.docker.internal:4000/vendor/bootstrap/bootstrap.css
  * Node Name: `http://host.docker.internal:4000/vendor/bootstrap/bootstrap.css`
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: http://host.docker.internal:4000/vendor/theme/font-awesome/css/font-awesome.min.css
  * Node Name: `http://host.docker.internal:4000/vendor/theme/font-awesome/css/font-awesome.min.css`
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`
* URL: http://host.docker.internal:4000/vendor/theme/sb-admin.css
  * Node Name: `http://host.docker.internal:4000/vendor/theme/sb-admin.css`
  * Method: `GET`
  * Parameter: `x-content-type-options`
  * Attack: ``
  * Evidence: ``
  * Other Info: `This issue still applies to error type pages (401, 403, 500, etc.) as those pages are often still affected by injection issues, in which case there is still concern for browsers sniffing pages away from their actual content type.
At "High" threshold this scan rule will not alert on client or server error responses.`

Instances: Systemic


### Solution

Ensure that the application/web server sets the Content-Type header appropriately, and that it sets the X-Content-Type-Options header to 'nosniff' for all web pages.
If possible, ensure that the end user uses a standards-compliant and modern web browser that does not perform MIME-sniffing at all, or that can be directed by the web application/web server to not perform MIME-sniffing.

### Reference


* [ https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/gg622941(v=vs.85) ](https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/compatibility/gg622941(v=vs.85))
* [ https://owasp.org/www-community/Security_Headers ](https://owasp.org/www-community/Security_Headers)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ Authentication Request Identified ](https://www.zaproxy.org/docs/alerts/10111/)



##### Informational (High)

### Description

The given request has been identified as an authentication request. The 'Other Info' field contains a set of key=value lines which identify any relevant fields. If the request is in a context which has an Authentication Method set to "Auto-Detect" then this rule will change the authentication to match the request identified.

* URL: http://host.docker.internal:4000/login
  * Node Name: `http://host.docker.internal:4000/login ()(_csrf,password,userName)`
  * Method: `POST`
  * Parameter: `userName`
  * Attack: ``
  * Evidence: `password`
  * Other Info: `userParam=userName
userValue=ZAP
passwordParam=password
referer=http://host.docker.internal:4000/login
csrfToken=_csrf`


Instances: 1

### Solution

This is an informational alert rather than a vulnerability and so there is nothing to fix.

### Reference


* [ https://www.zaproxy.org/docs/desktop/addons/authentication-helper/auth-req-id/ ](https://www.zaproxy.org/docs/desktop/addons/authentication-helper/auth-req-id/)



#### Source ID: 3

### [ Content Security Policy (CSP) Report-Only Header Found ](https://www.zaproxy.org/docs/alerts/10038/)



##### Informational (High)

### Description

The response contained a Content-Security-Policy-Report-Only header, this may indicate a work-in-progress implementation, or an oversight in promoting pre-Prod to Prod, etc.

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.

* URL: http://host.docker.internal:4000
  * Node Name: `http://host.docker.internal:4000`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/login
  * Node Name: `http://host.docker.internal:4000/login`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/robots.txt
  * Node Name: `http://host.docker.internal:4000/robots.txt`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/sitemap.xml
  * Node Name: `http://host.docker.internal:4000/sitemap.xml`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``
* URL: http://host.docker.internal:4000/tutorial/a4
  * Node Name: `http://host.docker.internal:4000/tutorial/a4`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: ``

Instances: Systemic


### Solution

Ensure that your web server, application server, load balancer, etc. is configured to set the Content-Security-Policy header.

### Reference


* [ https://www.w3.org/TR/CSP2/ ](https://www.w3.org/TR/CSP2/)
* [ https://w3c.github.io/webappsec-csp/ ](https://w3c.github.io/webappsec-csp/)
* [ https://caniuse.com/#feat=contentsecuritypolicy ](https://caniuse.com/#feat=contentsecuritypolicy)
* [ https://content-security-policy.com/ ](https://content-security-policy.com/)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ Information Disclosure - Suspicious Comments ](https://www.zaproxy.org/docs/alerts/10027/)



##### Informational (Medium)

### Description

The response appears to contain suspicious comments which may help an attacker.

* URL: http://host.docker.internal:4000/allocations/4
  * Node Name: `http://host.docker.internal:4000/allocations/4`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `   The attacker, or user should not be able `
  * Other Info: `The following pattern was used: \bUSER\b and was detected in likely comment: "<!--Fix for A1 - 2 NoSQL Injection - Provide validation for input.
                        Adhering to defence in depth, on the ", see evidence field for the suspicious comment/snippet.`
* URL: http://host.docker.internal:4000/profile
  * Node Name: `http://host.docker.internal:4000/profile`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<!-- @FIXME use a properly esca`
  * Other Info: `The following pattern was used: \bFIXME\b and was detected in likely comment: "<!-- @FIXME use a properly escaped variable that matches the URL context, for example
                    refer to a firstNameSa", see evidence field for the suspicious comment/snippet.`
* URL: http://host.docker.internal:4000/tutorial
  * Node Name: `http://host.docker.internal:4000/tutorial`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ` Step 2: Encode the user input that will be `
  * Other Info: `The following pattern was used: \bUSER\b and was detected in likely comment: "// - Step 2: Encode the user input that will be logged in the correct context", see evidence field for the suspicious comment/snippet.`
* URL: http://host.docker.internal:4000/tutorial
  * Node Name: `http://host.docker.internal:4000/tutorial`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<!-- DB Injection -->`
  * Other Info: `The following pattern was used: \bDB\b and was detected in likely comment: "<!-- DB Injection -->", see evidence field for the suspicious comment/snippet.`
* URL: http://host.docker.internal:4000/tutorial
  * Node Name: `http://host.docker.internal:4000/tutorial`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `gin -X POST --data 'userName=vyva%0aError: alex `
  * Other Info: `The following pattern was used: \bUSERNAME\b and was detected in likely comment: "//localhost:4000/login -X POST --data 'userName=vyva%0aError: alex moldovan failed $1,000,000 transaction&password=Admin_123&_cs", see evidence field for the suspicious comment/snippet.`
* URL: http://host.docker.internal:4000/tutorial/a1
  * Node Name: `http://host.docker.internal:4000/tutorial/a1`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ` Step 2: Encode the user input that will be `
  * Other Info: `The following pattern was used: \bUSER\b and was detected in likely comment: "// - Step 2: Encode the user input that will be logged in the correct context", see evidence field for the suspicious comment/snippet.`
* URL: http://host.docker.internal:4000/tutorial/a1
  * Node Name: `http://host.docker.internal:4000/tutorial/a1`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<!-- DB Injection -->`
  * Other Info: `The following pattern was used: \bDB\b and was detected in likely comment: "<!-- DB Injection -->", see evidence field for the suspicious comment/snippet.`
* URL: http://host.docker.internal:4000/tutorial/a1
  * Node Name: `http://host.docker.internal:4000/tutorial/a1`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `gin -X POST --data 'userName=vyva%0aError: alex `
  * Other Info: `The following pattern was used: \bUSERNAME\b and was detected in likely comment: "//localhost:4000/login -X POST --data 'userName=vyva%0aError: alex moldovan failed $1,000,000 transaction&password=Admin_123&_cs", see evidence field for the suspicious comment/snippet.`
* URL: http://host.docker.internal:4000/tutorial/a2
  * Node Name: `http://host.docker.internal:4000/tutorial/a2`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `// Create user document`
  * Other Info: `The following pattern was used: \bUSER\b and was detected 2 times, the first in likely comment: "// Create user document", see evidence field for the suspicious comment/snippet.`
* URL: http://host.docker.internal:4000/tutorial/a2
  * Node Name: `http://host.docker.internal:4000/tutorial/a2`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `//received from request param`
  * Other Info: `The following pattern was used: \bFROM\b and was detected in likely comment: "//received from request param", see evidence field for the suspicious comment/snippet.`
* URL: http://host.docker.internal:4000/tutorial/a5
  * Node Name: `http://host.docker.internal:4000/tutorial/a5`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `r iframe to protect from clickjacking`
  * Other Info: `The following pattern was used: \bFROM\b and was detected 4 times, the first in likely comment: "// Prevent opening page in frame or iframe to protect from clickjacking", see evidence field for the suspicious comment/snippet.`
* URL: http://host.docker.internal:4000/tutorial/a7
  * Node Name: `http://host.docker.internal:4000/tutorial/a7`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `o check if user has admin rights`
  * Other Info: `The following pattern was used: \bADMIN\b and was detected in likely comment: "//Middleware to check if user has admin rights", see evidence field for the suspicious comment/snippet.`


Instances: 12

### Solution

Remove all comments that return information that may help an attacker and fix any underlying problems they refer to.

### Reference



#### CWE Id: [ 615 ](https://cwe.mitre.org/data/definitions/615.html)


#### WASC Id: 13

#### Source ID: 3

### [ Modern Web Application ](https://www.zaproxy.org/docs/alerts/10109/)



##### Informational (Medium)

### Description

The application appears to be a modern web application. If you need to explore it automatically then the Client Spider may well be more effective than the standard one.

* URL: http://host.docker.internal:4000
  * Node Name: `http://host.docker.internal:4000`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<a href="#" class="dropdown-toggle" data-toggle="dropdown" style="font-size: larger"><i class="fa fa-info-circle"></i></a>`
  * Other Info: `Links have been found that do not have traditional href attributes, which is an indication that this is a modern web application.`
* URL: http://host.docker.internal:4000/login
  * Node Name: `http://host.docker.internal:4000/login`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<a href="#" class="dropdown-toggle" data-toggle="dropdown" style="font-size: larger"><i class="fa fa-info-circle"></i></a>`
  * Other Info: `Links have been found that do not have traditional href attributes, which is an indication that this is a modern web application.`
* URL: http://host.docker.internal:4000/tutorial/a4
  * Node Name: `http://host.docker.internal:4000/tutorial/a4`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<script src="../vendor/html5shiv.js"><![endif]-->
</head>

<body>

    <div id="wrapper">

        <!-- Sidebar -->
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/tutorial"><b>OWASP Node Goat Tutorial:</b> Fixing OWASP Top 10 </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav side-nav">
                    <li><a href="/tutorial/a1"><i class="fa fa-wrench"></i> A1 Injection</a>
                    </li>
                    <li><a href="/tutorial/a2"><i class="fa fa-wrench"></i> A2 Broken Auth</a>
                    </li>
                    <li><a href="/tutorial/a3"><i class="fa fa-wrench"></i> A3 XSS</a>
                    </li>
                    <li><a href="/tutorial/a4"><i class="fa fa-wrench"></i> A4 Insecure DOR</a>
                    </li>
                    <li><a href="/tutorial/a5"><i class="fa fa-wrench"></i> A5 Misconfig</a>
                    </li>
                    <li><a href="/tutorial/a6"><i class="fa fa-wrench"></i> A6 Sensitive Data</a>
                    </li>
                    <li><a href="/tutorial/a7"><i class="fa fa-wrench"></i> A7 Access Controls</a>
                    </li>
                    <li><a href="/tutorial/a8"><i class="fa fa-wrench"></i> A8 CSRF</a>
                    </li>
                    <li><a href="/tutorial/a9"><i class="fa fa-wrench"></i> A9 Insecure Components</a>
                    </li>
                    <li><a href="/tutorial/a10"><i class="fa fa-wrench"></i> A10 Redirects</a>
                    </li>
                    <li><a href="/tutorial/redos"><i class="fa"></i> ReDoS Attacks</a>
                    </li>
                    <li><a href="/tutorial/ssrf"><i class="fa"></i> SSRF</a>
                    </li>
                </ul>

                <ul class="nav navbar-nav navbar-right navbar-user">
                    <li><a href="/login"><i class="fa fa-power-off"></i> Exit</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>

        <div id="page-wrapper">

            <div class="row">
                <div class="col-lg-12">
                    <h1>A4-Insecure Direct Object References
                        <small></small>
                    </h1>
                </div>
            </div>
            <!-- /.row -->
            
<div class="row">
    <div class="col-lg-12">
        <div class="bs-example" style="margin-bottom: 40px;">
            <span class="label label-danger">Exploitability: EASY</span>
            <span class="label label-warning">Prevalence: COMMON</span>
            <span class="label label-danger">Detectability: EASY</span>
            <span class="label label-warning">Technical Impact: MODERATE</span>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-lg-12">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">Description</h3>
            </div>
            <div class="panel-body">
                A direct object reference occurs when a developer exposes a reference to an internal implementation object, such as a file, directory, or database key. Without an access control check or other protection, attackers can manipulate these references to access unauthorized data.</div>
        </div>
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">Attack Mechanics</h3>
            </div>
            <div class="panel-body">
                <p>
                    If an applications uses the actual name or key of an object when generating web pages, and doesn't verify if the user is authorized for the target object, this can result in an insecure direct object reference flaw. An attacker can exploit such flaws by manipulating parameter values. Unless object references are unpredictable, it is easy for an attacker to access all available data of that type.
                </p>
                <p>
                    For example, the insure demo application uses userid as part of the url to access the allocations (/allocations/{id}). An attacker can manipulate id value and access other user's allocation information.
                    <iframe width="560" height="315" src="//www.youtube.com/embed/KFTRMw5F_eg?rel=0" frameborder="0" allowfullscreen></iframe>
                </p>
            </div>
        </div>

        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">How Do I Prevent It?</h3>
            </div>
            <div class="panel-body">
                <ol>
                    <li>
                        <b>Check access: </b> Each use of a direct object reference from an untrusted source must include an access control check to ensure the user is authorized for the requested object.
                    </li>
                    <li>
                        <b>Use per user or session indirect object references:</b> Instead of exposing actual database keys as part of the access links, use temporary per-user indirect reference. For example, instead of using the resource’s database key, a drop down list of six resources authorized for the current user could use the numbers 1 to 6 or unique random numbers to indicate which value the user selected. The application has to map the per-user indirect reference back to the actual database key on the server.
                    </li>
                    <li> <b>Testing and code analysis:</b> Testers can easily manipulate parameter values to detect such flaws. In addition, code analysis can quickly show whether authorization is properly verified.
                    </li>
                </ol>
            </div>
        </div>
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">Source Code Example</h3>
            </div>
            <div class="panel-body">
                <p>
                    In
                    <code>routes/allocations.js</code>, the insecure application takes user id from url to fetch the allocations.
                    <pre>
    var userId = req.params.userId;
    allocationsDAO.getByUserId(userId, function(error, allocations) {

        if (error) return next(error);

        return res.render("allocations", allocations);
    });
                </pre>
                </p>
                <p>
                    A safer alternative is to always retrieve allocations for logged in user (using
                    <code>req.session.userId</code>)instead of taking it from url.
                </p>
            </div>
        </div>

    </div>
</div>

        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <script src="../vendor/jquery.min.js"></script>`
  * Other Info: `No links have been found while there are scripts, which is an indication that this is a modern web application.`
* URL: http://host.docker.internal:4000/tutorial/a6
  * Node Name: `http://host.docker.internal:4000/tutorial/a6`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<script src="../vendor/html5shiv.js"><![endif]-->
</head>

<body>

    <div id="wrapper">

        <!-- Sidebar -->
        <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/tutorial"><b>OWASP Node Goat Tutorial:</b> Fixing OWASP Top 10 </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
                <ul class="nav navbar-nav side-nav">
                    <li><a href="/tutorial/a1"><i class="fa fa-wrench"></i> A1 Injection</a>
                    </li>
                    <li><a href="/tutorial/a2"><i class="fa fa-wrench"></i> A2 Broken Auth</a>
                    </li>
                    <li><a href="/tutorial/a3"><i class="fa fa-wrench"></i> A3 XSS</a>
                    </li>
                    <li><a href="/tutorial/a4"><i class="fa fa-wrench"></i> A4 Insecure DOR</a>
                    </li>
                    <li><a href="/tutorial/a5"><i class="fa fa-wrench"></i> A5 Misconfig</a>
                    </li>
                    <li><a href="/tutorial/a6"><i class="fa fa-wrench"></i> A6 Sensitive Data</a>
                    </li>
                    <li><a href="/tutorial/a7"><i class="fa fa-wrench"></i> A7 Access Controls</a>
                    </li>
                    <li><a href="/tutorial/a8"><i class="fa fa-wrench"></i> A8 CSRF</a>
                    </li>
                    <li><a href="/tutorial/a9"><i class="fa fa-wrench"></i> A9 Insecure Components</a>
                    </li>
                    <li><a href="/tutorial/a10"><i class="fa fa-wrench"></i> A10 Redirects</a>
                    </li>
                    <li><a href="/tutorial/redos"><i class="fa"></i> ReDoS Attacks</a>
                    </li>
                    <li><a href="/tutorial/ssrf"><i class="fa"></i> SSRF</a>
                    </li>
                </ul>

                <ul class="nav navbar-nav navbar-right navbar-user">
                    <li><a href="/login"><i class="fa fa-power-off"></i> Exit</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </nav>

        <div id="page-wrapper">

            <div class="row">
                <div class="col-lg-12">
                    <h1>A6-Sensitive Data Exposure
                        <small></small>
                    </h1>
                </div>
            </div>
            <!-- /.row -->
            
<div class="row">
    <div class="col-lg-12">
        <div class="bs-example" style="margin-bottom: 40px;">
            <span class="label label-default">Exploitability: DIFFICULT</span>
            <span class="label label-warning">Prevalence: COMMON</span>
            <span class="label label-danger">Detectability: AVERAGE</span>
            <span class="label label-danger">Technical Impact: SEVERE</span>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-lg-12">
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">Description</h3>
            </div>
            <div class="panel-body">
                This vulnerability allows an attacker to access sensitive data such as credit cards, tax IDs, authentication credentials, etc to conduct credit card fraud, identity theft, or other crimes. Losing such data can cause severe business impact and damage to the reputation. Sensitive data deserves extra protection such as encryption at rest or in transit, as well as special precautions when exchanged with the browser.
            </div>
        </div>

        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">Attack Mechanics</h3>
            </div>
            <div class="panel-body">
                <p>If a site doesn’t use SSL/TLS for all authenticated pages, an attacker can monitor network traffic (such as on open wireless network), and steals user's session cookie. Attacker can then replay this cookie and hijacks the user's session, accessing the user's private data.</p>
                <p>If an attacker gets access the application database, he or she can steal the sensitive information not encrypted, or encrypted with weak encryption algorithm</p>

            </div>
        </div>
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">How Do I Prevent It?</h3>
            </div>
            <div class="panel-body">
                <ul>
                    <li>Use Secure HTTPS network protocol</li>
                    <li>Encrypt all sensitive data at rest and in transit</li>
                    <li>Don’t store sensitive data unnecessarily. Discard it as soon as possible.</li>
                    <li>Ensure strong standard algorithms and strong keys are used, and proper key management is in place.</li>
                    <li>Disable autocomplete on forms collecting sensitive data and disable caching for pages that contain sensitive data.</li>
                </ul>
            </div>
        </div>
        <div class="panel panel-info">
            <div class="panel-heading">
                <h3 class="panel-title">Source Code Example</h3>
            </div>
            <div class="panel-body">
                <p>1.The insecure demo application uses HTTP connection to communicate with server. A secure HTTPS sever can be set using https module. This would need a private key and certificate. Here are source code examples from
                    <code>/server.js</code>
                    <pre>
// Load keys for establishing secure HTTPS connection
var fs = require("fs");
var https = require("https");
var path = require("path");
var httpsOptions = {
    key: fs.readFileSync(path.resolve(__dirname, "./app/cert/key.pem")),
    cert: fs.readFileSync(path.resolve(__dirname, "./app/cert/cert.pem"))
};
               </pre>
                </p>
                <p>2. Start secure HTTPS sever
                    <pre>
// Start secure HTTPS server
https.createServer(httpsOptions, app).listen(config.port, function() {
    console.log("Express https server listening on port " + config.port);
});
                </pre>
                </p>
                <p>
                    3. The insecure demo application stores users personal sensitive information in plain text. To fix it, The
                    <code>data/profile-dao.js</code>can be modified to use crypto module to encrypt and decrypt sensitive information as below:
                    <pre>
// Include crypto module
var crypto = require("crypto");

//Set keys config object
var config = {
    cryptoKey: "a_secure_key_for_crypto_here",
    cryptoAlgo: "aes256", // or other secure encryption algo here
    iv: ""
};

// Helper method create initialization vector
// By default the initialization vector is not secure enough, so we create our own
var createIV = function() {
    // create a random salt for the PBKDF2 function - 16 bytes is the minimum length according to NIST
    var salt = crypto.randomBytes(16);
    return crypto.pbkdf2Sync(config.cryptoKey, salt, 100000, 512, "sha512");
};

// Helper methods to encryt / decrypt
var encrypt = function(toEncrypt) {
    config.iv = createIV();
    var cipher = crypto.createCipheriv(config.cryptoAlgo, config.cryptoKey, config.iv);
    return cipher.update(toEncrypt, "utf8", "hex") + cipher.final("hex");
};

var decrypt = function(toDecrypt) {
    var decipher = crypto.createDecipheriv(config.cryptoAlgo, config.cryptoKey, config.iv);
    return decipher.update(toDecrypt, "hex", "utf8") + decipher.final("utf8");
};

// Encrypt values before saving in database
user.ssn = encrypt(ssn);
user.dob = encrypt(dob);

// Decrypt values to show on view
user.ssn = decrypt(user.ssn);
user.dob = decrypt(user.dob);
</pre>

                </p>
            </div>
        </div>


    </div>
</div>

        </div>
        <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <script src="../vendor/jquery.min.js"></script>`
  * Other Info: `No links have been found while there are scripts, which is an indication that this is a modern web application.`
* URL: http://host.docker.internal:4000/login
  * Node Name: `http://host.docker.internal:4000/login ()(_csrf,password,userName)`
  * Method: `POST`
  * Parameter: ``
  * Attack: ``
  * Evidence: `<a href="#" class="dropdown-toggle" data-toggle="dropdown" style="font-size: larger"><i class="fa fa-info-circle"></i></a>`
  * Other Info: `Links have been found that do not have traditional href attributes, which is an indication that this is a modern web application.`

Instances: Systemic


### Solution

This is an informational alert and so no changes are required.

### Reference




#### Source ID: 3

### [ Non-Storable Content ](https://www.zaproxy.org/docs/alerts/10049/)



##### Informational (Medium)

### Description

The response contents are not storable by caching components such as proxy servers. If the response does not contain sensitive, personal or user-specific information, it may benefit from being stored and cached, to improve performance.

* URL: http://host.docker.internal:4000
  * Node Name: `http://host.docker.internal:4000`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `302`
  * Other Info: ``
* URL: http://host.docker.internal:4000/
  * Node Name: `http://host.docker.internal:4000/`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `302`
  * Other Info: ``


Instances: 2

### Solution

The content may be marked as storable by ensuring that the following conditions are satisfied:
The request method must be understood by the cache and defined as being cacheable ("GET", "HEAD", and "POST" are currently defined as cacheable)
The response status code must be understood by the cache (one of the 1XX, 2XX, 3XX, 4XX, or 5XX response classes are generally understood)
The "no-store" cache directive must not appear in the request or response header fields
For caching by "shared" caches such as "proxy" caches, the "private" response directive must not appear in the response
For caching by "shared" caches such as "proxy" caches, the "Authorization" header field must not appear in the request, unless the response explicitly allows it (using one of the "must-revalidate", "public", or "s-maxage" Cache-Control response directives)
In addition to the conditions above, at least one of the following conditions must also be satisfied by the response:
It must contain an "Expires" header field
It must contain a "max-age" response directive
For "shared" caches such as "proxy" caches, it must contain a "s-maxage" response directive
It must contain a "Cache Control Extension" that allows it to be cached
It must have a status code that is defined as cacheable by default (200, 203, 204, 206, 300, 301, 404, 405, 410, 414, 501).

### Reference


* [ https://datatracker.ietf.org/doc/html/rfc7234 ](https://datatracker.ietf.org/doc/html/rfc7234)
* [ https://datatracker.ietf.org/doc/html/rfc7231 ](https://datatracker.ietf.org/doc/html/rfc7231)
* [ https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html ](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)


#### CWE Id: [ 524 ](https://cwe.mitre.org/data/definitions/524.html)


#### WASC Id: 13

#### Source ID: 3

### [ Session Management Response Identified ](https://www.zaproxy.org/docs/alerts/10112/)



##### Informational (Medium)

### Description

The given response has been identified as containing a session management token. The 'Other Info' field contains a set of header tokens that can be used in the Header Based Session Management Method. If the request is in a context which has a Session Management Method set to "Auto-Detect" then this rule will change the session management to use the tokens identified.

* URL: http://host.docker.internal:4000
  * Node Name: `http://host.docker.internal:4000`
  * Method: `GET`
  * Parameter: `connect.sid`
  * Attack: ``
  * Evidence: `connect.sid`
  * Other Info: `cookie:connect.sid`
* URL: http://host.docker.internal:4000/head
  * Node Name: `http://host.docker.internal:4000/head`
  * Method: `GET`
  * Parameter: `connect.sid`
  * Attack: ``
  * Evidence: `connect.sid`
  * Other Info: `cookie:connect.sid`
* URL: http://host.docker.internal:4000/robots.txt
  * Node Name: `http://host.docker.internal:4000/robots.txt`
  * Method: `GET`
  * Parameter: `connect.sid`
  * Attack: ``
  * Evidence: `connect.sid`
  * Other Info: `cookie:connect.sid`
* URL: http://host.docker.internal:4000/sitemap.xml
  * Node Name: `http://host.docker.internal:4000/sitemap.xml`
  * Method: `GET`
  * Parameter: `connect.sid`
  * Attack: ``
  * Evidence: `connect.sid`
  * Other Info: `cookie:connect.sid`
* URL: http://host.docker.internal:4000/span
  * Node Name: `http://host.docker.internal:4000/span`
  * Method: `GET`
  * Parameter: `connect.sid`
  * Attack: ``
  * Evidence: `connect.sid`
  * Other Info: `cookie:connect.sid`
* URL: http://host.docker.internal:4000/signup
  * Node Name: `http://host.docker.internal:4000/signup ()(_csrf,email,firstName,lastName,password,userName,verify)`
  * Method: `POST`
  * Parameter: `connect.sid`
  * Attack: ``
  * Evidence: `connect.sid`
  * Other Info: `cookie:connect.sid`
* URL: http://host.docker.internal:4000/robots.txt
  * Node Name: `http://host.docker.internal:4000/robots.txt`
  * Method: `GET`
  * Parameter: `connect.sid`
  * Attack: ``
  * Evidence: `connect.sid`
  * Other Info: `cookie:connect.sid`
* URL: http://host.docker.internal:4000/vendor/bootstrap/bootstrap-tour.css
  * Node Name: `http://host.docker.internal:4000/vendor/bootstrap/bootstrap-tour.css`
  * Method: `GET`
  * Parameter: `connect.sid`
  * Attack: ``
  * Evidence: `connect.sid`
  * Other Info: `cookie:connect.sid`
* URL: http://host.docker.internal:4000/vendor/html5shiv.js
  * Node Name: `http://host.docker.internal:4000/vendor/html5shiv.js`
  * Method: `GET`
  * Parameter: `connect.sid`
  * Attack: ``
  * Evidence: `connect.sid`
  * Other Info: `cookie:connect.sid`


Instances: 9

### Solution

This is an informational alert rather than a vulnerability and so there is nothing to fix.

### Reference


* [ https://www.zaproxy.org/docs/desktop/addons/authentication-helper/session-mgmt-id/ ](https://www.zaproxy.org/docs/desktop/addons/authentication-helper/session-mgmt-id/)



#### Source ID: 3

### [ Storable and Cacheable Content ](https://www.zaproxy.org/docs/alerts/10049/)



##### Informational (Medium)

### Description

The response contents are storable by caching components such as proxy servers, and may be retrieved directly from the cache, rather than from the origin server by the caching servers, in response to similar requests from other users. If the response data is sensitive, personal or user-specific, this may result in sensitive information being leaked. In some cases, this may even result in a user gaining complete control of the session of another user, depending on the configuration of the caching components in use in their environment. This is primarily an issue where "shared" caching servers such as "proxy" caches are configured on the local network. This configuration is typically found in corporate or educational environments, for instance.

* URL: http://host.docker.internal:4000
  * Node Name: `http://host.docker.internal:4000`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: `In the absence of an explicitly specified caching lifetime directive in the response, a liberal lifetime heuristic of 1 year was assumed. This is permitted by rfc7234.`
* URL: http://host.docker.internal:4000/robots.txt
  * Node Name: `http://host.docker.internal:4000/robots.txt`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: `In the absence of an explicitly specified caching lifetime directive in the response, a liberal lifetime heuristic of 1 year was assumed. This is permitted by rfc7234.`
* URL: http://host.docker.internal:4000/signup
  * Node Name: `http://host.docker.internal:4000/signup`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: `In the absence of an explicitly specified caching lifetime directive in the response, a liberal lifetime heuristic of 1 year was assumed. This is permitted by rfc7234.`
* URL: http://host.docker.internal:4000/sitemap.xml
  * Node Name: `http://host.docker.internal:4000/sitemap.xml`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: `In the absence of an explicitly specified caching lifetime directive in the response, a liberal lifetime heuristic of 1 year was assumed. This is permitted by rfc7234.`
* URL: http://host.docker.internal:4000/tutorial/a4
  * Node Name: `http://host.docker.internal:4000/tutorial/a4`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: ``
  * Other Info: `In the absence of an explicitly specified caching lifetime directive in the response, a liberal lifetime heuristic of 1 year was assumed. This is permitted by rfc7234.`

Instances: Systemic


### Solution

Validate that the response does not contain sensitive, personal or user-specific information. If it does, consider the use of the following HTTP response headers, to limit, or prevent the content being stored and retrieved from the cache by another user:
Cache-Control: no-cache, no-store, must-revalidate, private
Pragma: no-cache
Expires: 0
This configuration directs both HTTP 1.0 and HTTP 1.1 compliant caching servers to not store the response, and to not retrieve the response (without validation) from the cache, in response to a similar request.

### Reference


* [ https://datatracker.ietf.org/doc/html/rfc7234 ](https://datatracker.ietf.org/doc/html/rfc7234)
* [ https://datatracker.ietf.org/doc/html/rfc7231 ](https://datatracker.ietf.org/doc/html/rfc7231)
* [ https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html ](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)


#### CWE Id: [ 524 ](https://cwe.mitre.org/data/definitions/524.html)


#### WASC Id: 13

#### Source ID: 3

### [ Storable but Non-Cacheable Content ](https://www.zaproxy.org/docs/alerts/10049/)



##### Informational (Medium)

### Description

The response contents are storable by caching components such as proxy servers, but will not be retrieved directly from the cache, without validating the request upstream, in response to similar requests from other users.

* URL: http://host.docker.internal:4000/images/owasplogo.png
  * Node Name: `http://host.docker.internal:4000/images/owasplogo.png`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `max-age=0`
  * Other Info: ``
* URL: http://host.docker.internal:4000/vendor/bootstrap/bootstrap.css
  * Node Name: `http://host.docker.internal:4000/vendor/bootstrap/bootstrap.css`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `max-age=0`
  * Other Info: ``
* URL: http://host.docker.internal:4000/vendor/jquery.min.js
  * Node Name: `http://host.docker.internal:4000/vendor/jquery.min.js`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `max-age=0`
  * Other Info: ``
* URL: http://host.docker.internal:4000/vendor/theme/font-awesome/css/font-awesome.min.css
  * Node Name: `http://host.docker.internal:4000/vendor/theme/font-awesome/css/font-awesome.min.css`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `max-age=0`
  * Other Info: ``
* URL: http://host.docker.internal:4000/vendor/theme/sb-admin.css
  * Node Name: `http://host.docker.internal:4000/vendor/theme/sb-admin.css`
  * Method: `GET`
  * Parameter: ``
  * Attack: ``
  * Evidence: `max-age=0`
  * Other Info: ``


Instances: 5

### Solution



### Reference


* [ https://datatracker.ietf.org/doc/html/rfc7234 ](https://datatracker.ietf.org/doc/html/rfc7234)
* [ https://datatracker.ietf.org/doc/html/rfc7231 ](https://datatracker.ietf.org/doc/html/rfc7231)
* [ https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html ](https://www.w3.org/Protocols/rfc2616/rfc2616-sec13.html)


#### CWE Id: [ 524 ](https://cwe.mitre.org/data/definitions/524.html)


#### WASC Id: 13

#### Source ID: 3

### [ User Controllable HTML Element Attribute (Potential XSS) ](https://www.zaproxy.org/docs/alerts/10031/)



##### Informational (Low)

### Description

This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.

* URL: http://host.docker.internal:4000/login
  * Node Name: `http://host.docker.internal:4000/login ()(_csrf,password,userName)`
  * Method: `POST`
  * Parameter: `password`
  * Attack: ``
  * Evidence: ``
  * Other Info: `User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:

http://host.docker.internal:4000/login

appears to include user input in:
a(n) [input] tag [value] attribute

The user input found was:
password=ZAP

The user-controlled value was:
zap`
* URL: http://host.docker.internal:4000/login
  * Node Name: `http://host.docker.internal:4000/login ()(_csrf,password,userName)`
  * Method: `POST`
  * Parameter: `userName`
  * Attack: ``
  * Evidence: ``
  * Other Info: `User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:

http://host.docker.internal:4000/login

appears to include user input in:
a(n) [input] tag [value] attribute

The user input found was:
userName=ZAP

The user-controlled value was:
zap`


Instances: 2

### Solution

Validate all input and sanitize output it before writing to any HTML attributes.

### Reference


* [ https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html ](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)


#### CWE Id: [ 20 ](https://cwe.mitre.org/data/definitions/20.html)


#### WASC Id: 20

#### Source ID: 3


