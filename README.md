1. Introduction to Cypress and Cucumber:

1.1 Introduction to Cypress

- Cypress is a powerful end-to-end (E2E) testing framework designed to help developers and testers write and run tests for web applications easily and effectively. With Cypress, you can test your application from the user interface to API requests, ensuring that the application functions as expected from start to finish.

- Key Features of Cypress:
    - Real-Time Testing: Cypress provides an interactive interface where you can observe tests being executed in real-time and monitor the current state of the DOM, network requests, and application.
    - Fast and Easy Configuration: Built on a Node.js-based architecture, Cypress allows for fast and smooth testing with fewer configuration requirements than other tools.
    - Synchronous Testing: Unlike other testing tools, Cypress operates synchronously, automatically waiting for DOM elements and network requests, minimizing the need for manual wait() methods.
    - Native JavaScript Integration: Cypress enables you to write tests directly in JavaScript, with comprehensive support for modern ES6 syntax and seamless integration with popular frameworks like React, Angular, and Vue.js.
    - Robust API Testing: Cypress can perform and validate API requests quickly, allowing you to combine API and UI testing within the same scenario.
    - Run Tests on CI/CD Environments: Cypress integrates easily with Continuous Integration (CI) systems such as Jenkins, CircleCI, and GitHub Actions, simplifying continuous testing.

- Testing Structure in Cypress:
    - Test Runner: The main interface to view and interact with tests as they run. The Test Runner displays detailed test steps, the current DOM state, and network requests throughout the testing process.
    - Dashboard Service: Cypress offers an optional Dashboard service that allows you to store and monitor test results from CI servers, view test run history, and analyze detailed results.

- Types of Testing in Cypress:
    - End-to-End (E2E) Testing: Cypress is primarily used for E2E testing, ensuring that the entire system works well from the end user's perspective.
    - Unit Testing: Although not as popular as other unit tools, Cypress can perform unit tests for components in frameworks like React and Vue.
    - Integration Testing: Cypress can be used to test the interaction between modules and features within the system.

1.2 Introduction to Cucumber:
- Cucumber is a tool that facilitates Behavior Driven Development (BDD), a software development approach focused on collaboration between stakeholders by describing system behavior in natural language.

- Cucumber uses the Gherkin language to write test scenarios, making the tests easy to read and understand for both developers and non-technical individuals such as clients, analysts, and project managers.

- Key Features of Cucumber:
    - Natural Language (Gherkin): Cucumber uses the Gherkin syntax, an easy-to-understand language that allows stakeholders to describe software behavior without coding.
    - Integration with Other Tools: Cucumber integrates with various testing frameworks such as JUnit and TestNG for Java and supports multiple programming languages like Java, JavaScript, Ruby, Python, etc.
    - Behavior-Based Automation Testing: Cucumber enables behavior-based automation testing based on scenarios described in test scripts. This helps ensure the software behaves as expected from the end-user perspective.

- Collaboration: Cucumber encourages close collaboration between team members, including developers, testers, and other stakeholders, reducing the gap between business requirements and implementation.

- Clear Reporting: Cucumber provides detailed and easy-to-understand test reports, helping to track testing progress and ensure product quality.

- Gherkin Language:
    - Cucumber uses Gherkin syntax to describe system behavior in natural language. The scenarios are written in the following structure:
        - Feature: Describes the feature or behavior of the system.
        - Scenario: Describes a specific test case within the feature.
        - Given: Describes the initial state or context of the scenario.
        - When: Describes the main action or event that occurs.
        - Then: Describes the expected outcome after the action.
    - Step Definitions:
        - Gherkin scenarios are mapped to code (step definitions), where they are implemented by specific actions.
- Cypress Cucumber is a combination of Cypress, a powerful tool for end-to-end (E2E) testing, and Cucumber, a tool that allows you to write test scenarios in natural language. Cucumber uses Gherkin syntax, making test scenarios understandable for both developers and non-developers.

2. Functional Requirements:
Test a flow where a client books a plan > Checkout > Success Page > Verify Booking data in Admin based on the "Booking_ID" generated when the client successfully books a product.

2.1 Client-Side Testing Requirements:
- Home page: Search for plans based on city and celebration type.
- Search result: Display plans according to the selected city and celebration type.
- Plan detail: Display the correct plan details of the selected plan from the previous screen.
- Reservation Stage:
- Customer Information Stage: Select the number of people by type and calculate the correct unit price.
- Checkout: Successful checkout.
- Checkout Success: Output "Booking_ID" and correct information as entered in the previous screens.

2.2 Admin-Side Testing Requirements:
- Successfully log in and navigate to the "Bookings > List" tab on the dashboard.
- Compare Booking ID data in the BASIC and ACTIVITIES tabs within "Bookings > List" with the information entered on the client-side.

3. Test Case:

4. Implementation: 
4.1 Technologies used in the project:
- Programming Language: JavaScript
- Framework: Cypress, Cucumber
- Organizational Model: PageObject-Model (POM)

4.2 Directory Structure:
e2e-tests                                                                        
├─ cypress                                                                       
│  ├─ cucumber-json                     //folder containing reports in JSON format                                                             
│  │  ├─ PlanAndStripe.cucumber.json    //JSON report of the corresponding feature file                                          
│  │  ├─ test.json                                                     
│  │  └─ *.json                                                   
│  ├─ downloads                         //contains files downloaded during Cypress execution                                                                  
│  ├─ e2e                                                                        
│  │  ├─ PaymentFlow                    //contains test case groups                                      
│  │  └─ Test                           //contains test case groups                                         
│  │     ├─ PlanAndStripe.feature       //contains test cases                                                                                                
│  ├─ fixtures                                                                   
│  │  └─ example.json                   //contains data in JSON format for test cases                                         
│  └─ support                                                                    
│     ├─ elements                       //folder containing elements (XPath, selectors)                                        
│     │  ├─ Admin                       //folder containing elements (XPath, selectors) for the Admin page                                       
│     │  │  ├─ Dasboard.js              //file containing elements for the corresponding page on the interface                                       
│     │  │  ├─ InfoBookingActivities.js                                          
│     │  │  ├─ InfoBookingBasic.js                                               
│     │  │  └─ ListBooking.js                                                    
│     │  └─ Guest                       //folder containing elements (XPath, selectors) for the Client page                                       
│     │     ├─ Checkout.js              //file containing elements for the corresponding page on the interface                                       
│     │     ├─ CheckoutSuccess.js                                                
│     │     ├─ CustomerInfoStage.js                                              
│     │     ├─ HomePage.js                                                       
│     │     ├─ PlanDetailPage.js                                                 
│     │     ├─ ReservationStage.js                                               
│     │     └─ SearchResultPage.js                                               
│     ├─ step_definitions               //folder defining steps                                         
│     │  ├─ Admin                       //folder defining steps for the Admin page                                        
│     │  │  ├─ Dashboard.js             //file defining steps for the corresponding page                                        
│     │  │  ├─ InfoBookingActivities.js                                          
│     │  │  ├─ InfoBookingBasic.js                                               
│     │  │  └─ ListBooking.js                                                    
│     │  ├─ Guest                       //folder defining steps for the Client page                                         
│     │  │  ├─ Checkout.js              //file defining steps for the corresponding page                                        
│     │  │  ├─ CheckoutSuccess.js                                                 
│     │  │  ├─ CustomerInfoStage.js                                              
│     │  │  ├─ HomePage.js                                                       
│     │  │  ├─ PlanDetailPage.js                                                 
│     │  │  ├─ ReservationStage.js                                               
│     │  │  └─ SearchResultPage.js                                               
│     │  └─ Login                                                                
│     │     └─ LoginPage.js             //file defining steps for the corresponding page                                       
│     ├─ util                                                                    
│     │  ├─ action_common.js            //file containing common actions for interacting with the browser                                       
│     │  └─ assertion_common.js         //file containing assertion checks                                        
│     └─ e2e.js                                                                  
├─ node_modules                                                                  
├─ report
    ├─ cucumber-htmlreport.html  
├─ .env.staging                         //file containing environment variables for staging (URL, username, password, etc.)
├─ .env.prod                            //file containing environment variables for production
├─ .gitignore               
├─ cucumber-html-report.js              //gen html report                                         
├─ cypress.config.js                    //config for project                                         
├─ package-lock.json                                                             
├─ package.json                                                                  
└─ README.md 

4.3 Packages Used in the Project
4.3.1 cypress-cucumber-preprocessor
Version: ^4.3.1
Purpose: Supports Cucumber-Gherkin syntax
Documentation: https://www.npmjs.com/package/cypress-cucumber-preprocessor?ref=cypress-io.ghost.io
4.3.2 cypress-file-upload
Version: ^5.0.8
Purpose: Supports file upload in Cypress
Documentation: https://www.npmjs.com/package/cypress-file-upload
4.3.3 dotenv
Version: ^16.4.5
Purpose: Manages environment variables in the project
Documentation: https://www.npmjs.com/package/dotenv
4.3.4 multiple-cucumber-html-reporter
Version: ^3.8.0
Purpose: Generates reports in JSON format and converts them to HTML reports
Documentation: https://www.npmjs.com/package/multiple-cucumber-html-reporter
4.4 Commands to Run the Project
- npx cypress open: Runs in UI mode

- npx cypress run: Runs in headless mode

- npx cypress run --browser <browser> --env ENV_VARIABLE_1=Values_1, ENV_VARIABLE_2=Values_2 --spec "<path file>.feature": Commonly used in CI/CD

where:
--browser: Specifies the browser environment
--env ENV_VARIABLE_1=Values_1, ENV_VARIABLE_2=Values_2: Sets and assigns values to environment variables
--spec: Specifies the feature file to run

- Command to run the project in UI mode: ENVIRONMENT=staging npx cypress open