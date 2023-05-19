const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  
  describe('float calculation', () => {
    it('a 0 and b 0', () => {
      assert.strictEqual(calculateNumber(0, 0), 0)
    })
    it('a positive and b 0', () => {
      assert.strictEqual(calculateNumber(2.0, 0), 2)
    })
    it('a 0 and b positive', () => {
      assert.strictEqual(calculateNumber(0, 2.0), 2)
    })
    it('a positive and b positive', () => {
      assert.strictEqual(calculateNumber(2.0, 3.0), 5)
    })
    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber(2.0, 2.0), 4)
    })
    it('a negative and b 0', () => {
      assert.strictEqual(calculateNumber(-2.0, 0), -2)
    })
    it('a 0 and b negative', () => {
      assert.strictEqual(calculateNumber(0, -2.0), -2)
    })
    it('a positive and b negative', () => {
      assert.strictEqual(calculateNumber(2.0, -4.0), -2)
    })
    it('a negative and b positive', () => {
      assert.strictEqual(calculateNumber(-4.0, 2.0), -2)
    })
    it('a negative and b negative', () => {
      assert.strictEqual(calculateNumber(-4.0, -2.0), -6)
    })
  })

  describe('float rounding down calculation', () => {
    it('rounding down a and float b', () => {
      assert.strictEqual(calculateNumber(2.4, 1), 3)
    })
    it('float a and rounding down b', () => {
      assert.strictEqual(calculateNumber(1.0, 2.4), 3);
    });
    it('rounding down a and rounding down b', () => {
      assert.strictEqual(calculateNumber(1.3, 2.4), 3);
    });
  })

  describe('float rounding up calculation', () => {
    it('rounding up a and float b', () => {
      assert.strictEqual(calculateNumber(2.5, 1), 4)
    })
    it('float a and rounding up b', () => {
      assert.strictEqual(calculateNumber(1.0, 2.6), 4);
    });
    it('rounding up a and rounding up b', () => {
      assert.strictEqual(calculateNumber(1.7, 2.8), 5);
    });
  })

  describe('float rounding up and down', () => {
    it('rounding up a and rounding down b', () => {
      assert.strictEqual(calculateNumber(1.7, 2.4), 4)
    })
    it('rounding up a and rounding down b', () => {
      assert.strictEqual(calculateNumber(2.4, 1.8), 4)
    })
  })

  it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
    assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
  });
});

/* eslint-env mocha */
