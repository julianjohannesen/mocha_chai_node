Monday, Feb. 12th, 2018

Jon Foster led a tutorial recently on using Mocha and the Chai assertion library to perform testing.

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

NOTE: Jani Hartikainen's book and articles are used below.
[Unit Test Your JavaScript with Mocha and Chai](https://www.sitepoint.com/unit-test-javascript-mocha-chai/)
[What Are Unit Testing, Integration Testing, and Function Testing](https://codeutopia.net/blog/2015/04/11/what-are-unit-testing-integration-testing-and-functional-testing/)
[What’s the difference between Unit Testing, TDD and BDD?](http://www.tutorialsteacher.com/nodejs/nodejs-module-exports)

"A **unit test** focuses on a single “unit of code” – usually a function in an object or module. By making the test specific to a single function, the test should be simple, quick to write, and quick to run. This means you can have many unit tests, and more unit tests means more bugs caught. They are especially helpful if you need to change your code: When you have a set of unit tests verifying your code works, you can safely change the code and trust that other parts of your program will not break."

"Unit tests should be fairly simple to write. A unit tests should essentially just give the function that’s tested some inputs, and then check what the function outputs is correct."

Unit testing tools like Mocha, Jasmine, and Tape make unit testing easier.

**Unit testing** and **automated testing** are not the same thing. Here are three types of automated testing:

- **Unit tests**: A single piece of code (usually an object or a function) is tested, isolated from other pieces
- **Integration tests**: Multiple pieces are tested together, for example testing a database access code against a test database. 
- **Acceptance tests** (also called Functional tests, E2E testing, Browser tests): Automatic testing of the entire application, for example using a tool like Selenium (perhaps with WebDriver or Protractor) to automatically run a browser.

##What is Test-Driven Development (TDD)?

"**TDD** or **Test-Driven Development** is a process [that] makes it possible to have a very high test-coverage. Test-coverage refers to the percentage of your code that is tested automatically, so a higher number is better. TDD also reduces the likelihood of having bugs in your tests, which can otherwise be difficult to track down."

The point of TDD is to make maitaining code and adding new features easier.

##What is Behavior-Driven Development (BDD)?

"BDD is a set of best practices for writing great tests. BDD can, and should be, used together with TDD and unit testing methods."

BDD abstracts away from how the tested function is implemeneted and shifts focus from testing implementation to testing behavior. Consequently, making changes to your code will require fewer alterations to your tests for that code.

##What is an assertion library?

Chai is an assertion library. An assertion library is used to verify the results of the tests we define with Mocha.

##To code along with this example

If you'd like to code along and create your own version of the files here, please follow the steps below.

You may want to refer to the documentation here.

https://mochajs.org/#getting-started

**Step 1**. Create a project directory and sub-directory named "test." Create test/appTest.js. Mocha will expect a "test" directory, so the name isn't arbitrary.

```
mkdir mocha_chai_node
cd mocha_chai_node
mkdir test
cd test
touch appTest.js
```

**Step 2**. Run:
```
npm init
```
This will create a package.json file. You'll be asked some questions. When asked for a test command, resond with "mocha". If you already have a package.json file, edit it to add:
```
"scripts": {
    "test": "mocha"
  }
```

**Step 3**. In your project's top level, create an app.js file and define three simple functions for add(), subtract(), and positiveOrNegative(). (see the file)
```
cd ..
touch app.js
atom .
```
That final command will open the folder in Atom. 
When you've added the functions, make sure that you add the following code to the bottom of your file:
```
module.exports = {
  add,
  subtract,
  positiveOrNegative
}
```

**Step 4**. In Atom open appTest.js. At this point, switch over from the README to following the code comments in appTest.js to re-create that file.

**Step 5**. When you've finished with appTest.js, you can run your test from the command line with:
```
npm test
```
