// test/capitalizeFirst.test.js
const assert = require('assert');
const Rectangle = require('../Rectangle');

// give the test suite a label using describe
describe('rectangle', () => {
  // give the test a label using it
  it('is square', () => {
    let rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.isSquare(), false);
    let rectangle2 = new Rectangle(5, 5);
    assert.strictEqual(rectangle2.isSquare(), true);
  });
  it('surface equal', () => {
    let rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getArea(), 91);
  });
  it('perimeter equal', () => {
    let rectangle = new Rectangle(13, 7);
    assert.strictEqual(rectangle.getPerimeter(), 40);
  });
});