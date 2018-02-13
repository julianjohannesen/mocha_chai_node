const expect = require('chai').expect;
const app = require('../app');
const add = app.add;
const subtract = app.subtract;
const positiveOrNegative = app.positiveOrNegative;

describe('testing file', () => {
  it('is hooked up correctly', () => {
    expect(true).to.equal(true);
  });

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
