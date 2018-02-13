Monday, Feb. 12th, 2018

Jon Foster led a tutorial recently on using Mocha and the Chai assertion library to peform testing.

Jon quickly walked us through the installation of Mocha and Chai. You can learn more about that here:

https://mochajs.org/#installation

and

http://chaijs.com/

Note that you will need to have Node and NPM installed.

##What is Mocha?

"Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases."

##What is Chai?

"Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework."

##What is unit testing?

From: Jani Hartikainen's [What’s the difference between Unit Testing, TDD and BDD?](http://www.tutorialsteacher.com/nodejs/nodejs-module-exports)

"A **unit test** focuses on a single “unit of code” – usually a function in an object or module. By making the test specific to a single function, the test should be simple, quick to write, and quick to run. This means you can have many unit tests, and more unit tests means more bugs caught. They are especially helpful if you need to change your code: When you have a set of unit tests verifying your code works, you can safely change the code and trust that other parts of your program will not break."

Unit testing tools like Mocha and Jasmine make unit testing easier.

**Unit testing** and **automated testing** are not the same thing. Here are three types of automated testing:

- **Unit tests**: A single piece of code (usually an object or a function) is tested, isolated from other pieces
- **Integration tests**: Multiple pieces are tested together, for example testing database access code against a test database
- **Acceptance tests** (also called Functional tests): Automatic testing of the entire application, for example using a tool like Selenium to automatically run a browser.

##What is Test-Driven Development (TDD)?

"**TDD** or **Test-Driven Development** is a process [that] makes it possible to have a very high test-coverage. Test-coverage refers to the percentage of your code that is tested automatically, so a higher number is better. TDD also reduces the likelihood of having bugs in your tests, which can otherwise be difficult to track down."

The point of TDD is to make maitaining code and adding new features easier.

##What is Behavior-Drive Development (BDD)?

"BDD is a set of best practices for writing great tests. BDD can, and should be, used together with TDD and unit testing methods."

BDD abstracts away from how the tested function is implemeneted and shifts focus from testing implementation to testing behavior. Consequently, making changes to your code will require fewer alterations to your tests for that code.

##Getting Started

https://mochajs.org/#getting-started

Create a directory named "test" in your project and create test.js inside it. The directory must be called "test".

In package.json add:
```
"scripts": {
    "test": "mocha"
  }
```
Then run tests with:
```
npm test
```
