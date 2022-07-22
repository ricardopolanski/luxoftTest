The project was developed using [Playwrigth](https://playwright.dev/ "Playwrigth") Framework and [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript "JavaScript").

This project follows the Page Object Model (POM) described on [Page Object Models](https://playwright.dev/docs/pom/ "Page Object Models").

Was writen the following tests:
  1. Click Dark Theme Button and check changes
  2. Fill required input fields to search a fligth from New York to Berlin
  3. After click on Search Button, check if the values provided before is the same on result search
  
<h3>Project Structure</h3>

<pre>
├───📂src
│   └───📂pages
│   │       ┗📜pageElements.js                  # Page Elements
│   │       ┗📜playwrigth-dev-page.js           # Tests Actions
│   │
│   └───📂specs                                 
│   │       ┗📜page.spec.js                     # Tests Definitions
│   │
│   └───📂support                                 
│   │    │
│   │    ┗📜flightInfo.js                       # Contains Flight info
│   │
│   └───📜playwright.config.js                  # Playwright config

</pre>