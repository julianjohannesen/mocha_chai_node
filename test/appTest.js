// Create variables to refer to the required components of our test.
// "require" is a Node method to load libraries and files
// "expect" is a Chai method exposing part of Chai's BDD API
const expect = require('chai').expect;
// Here we require the file containing the fuctions we'll test
const app = require('../app');
// The fuctions we will test are add(), substract(), and positiveOrNegative()
const add = app.add;
const subtract = app.subtract;
const positiveOrNegative = app.positiveOrNegative;

//Refer to Brandon Morelli's article "How to Test JavaScript with Mocha - Basics" https://codeburst.io/how-to-test-javascript-with-mocha-the-basics-80132324752e

// describe() is a way to group our tests in Mocha. We can also nest our tests as deeply as is necessary. describe() takes two arguments, the first is the name of the test group, and the second is a callback function.
describe('testing file', () => {
  //it() is used for an individual test case. it() should be written as if you were saying it out loud: “It should equal zero”, “It should log the user in”, etc. it() takes two arguments, a string explaining what the test should do, and a callback function which contains our actual test
  it('is hooked up correctly', () => {
    expect(true).to.equal(true);
  });
  // Here we're nesting another describe() within 'testing file'
  describe('#add function', () => {
    it('adds two numbers correctly', () => {
      const results = add(5, 10);
      expect(results).to.equal(15);
    })
  })

  describe('#subtract function', () => {
    it('subtracts two numbers correctly', () => {
      const results = subtract(5, 10);
      expect(results).to.equal(-5)
    })
  })

  describe('#positiveOrNegative function', () => {
    it('returns the right answer when positive', () => {
        const results = positiveOrNegative(5);
        expect(results).to.equal("positive");
    });
    it('returns the right answer when negative', () => {
      const results = positiveOrNegative(-5);
      expect(results).not.to.equal("positive");
    })
  });
});
