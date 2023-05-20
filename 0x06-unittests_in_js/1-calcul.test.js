const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber Testing', () => {
  describe('when type is "SUM"', () => {
    describe('float calculation', () => {
      it('a 0 and b 0', () => {
        assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
      });
      it('a positive and b 0', () => {
        assert.strictEqual(calculateNumber('SUM', 2.0, 0), 2);
      });
      it('a 0 and b positive', () => {
        assert.strictEqual(calculateNumber('SUM', 0, 2.0), 2);
      });
      it('a positive and b positive', () => {
        assert.strictEqual(calculateNumber('SUM', 2.0, 3.0), 5);
      });
      it('equal positive numbers', () => {
        assert.strictEqual(calculateNumber('SUM', 2.0, 2.0), 4);
      });
      it('a negative and b 0', () => {
        assert.strictEqual(calculateNumber('SUM', -2.0, 0), -2);
      });
      it('a 0 and b negative', () => {
        assert.strictEqual(calculateNumber('SUM', 0, -2.0), -2);
      });
      it('a positive and b negative', () => {
        assert.strictEqual(calculateNumber('SUM', 2.0, -4.0), -2);
      });
      it('a negative and b positive', () => {
        assert.strictEqual(calculateNumber('SUM', -4.0, 2.0), -2);
      });
      it('a negative and b negative', () => {
        assert.strictEqual(calculateNumber('SUM', -4.0, -2.0), -6);
      });
    });

    describe('float rounding down calculation', () => {
      it('rounding down a and float b', () => {
        assert.strictEqual(calculateNumber('SUM', 2.4, 1), 3);
      });
      it('float a and rounding down b', () => {
        assert.strictEqual(calculateNumber('SUM', 1.0, 2.4), 3);
      });
      it('rounding down a and rounding down b', () => {
        assert.strictEqual(calculateNumber('SUM', 1.3, 2.4), 3);
      });
      it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
        assert.strictEqual(calculateNumber('SUM', 2.499999, 3.499999), 5);
      });
    });

    describe('float rounding up calculation', () => {
      it('rounding up a and float b', () => {
        assert.strictEqual(calculateNumber('SUM', 2.5, 1), 4);
      });
      it('float a and rounding up b', () => {
        assert.strictEqual(calculateNumber('SUM', 1.0, 2.6), 4);
      });
      it('rounding up a and rounding up b', () => {
        assert.strictEqual(calculateNumber('SUM', 1.7, 2.8), 5);
      });
    });

    describe('float rounding up and down', () => {
      it('rounding up a and rounding down b', () => {
        assert.strictEqual(calculateNumber('SUM', 1.7, 2.4), 4);
      });
      it('rounding up a and rounding down b', () => {
        assert.strictEqual(calculateNumber('SUM', 2.4, 1.8), 4);
      });
    });
  });

  describe('when type is "SUBTRACT"', () => {
    describe('float calculation', () => {
      it('a 0 and b 0', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
      });
      it('a positive and b 0', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 0), 2);
      });
      it('a 0 and b positive', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 0, 2.0), -2);
      });
      it('a positive and b positive', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 3.0), -1);
      });
      it('equal positive numbers', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
      });
      it('a negative and b 0', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 0), -2);
      });
      it('a 0 and b negative', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 0, -2.0), 2);
      });
      it('a positive and b negative', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -4.0), 6);
      });
      it('a negative and b positive', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -4.0, 2.0), -6);
      });
      it('a negative and b negative', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', -4.0, -2.0), -2);
      });
    });

    describe('float rounding down calculation', () => {
      it('rounding down a and float b', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 2.4, 1), 1);
      });
      it('float a and rounding down b', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.0, 2.4), -1);
      });
      it('rounding down a and rounding down b', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.3, 2.4), -1);
      });
      it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 2.499999, 3.499999), -1);
      });
    });

    describe('float rounding up calculation', () => {
      it('rounding up a and float b', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 1), 2);
      });
      it('float a and rounding up b', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.0, 2.6), -2);
      });
      it('rounding up a and rounding up b', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.7, 2.8), -1);
      });
    });

    describe('float rounding up and down', () => {
      it('rounding up a and rounding down b', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.7, 2.4), 0);
      });
      it('rounding up a and rounding down b', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 2.4, 1.8), 0);
      });
    });
  });

  describe('when type is "DIVIDE"', () => {
    describe('float calculation', () => {
      it('a 0 and b 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
      });
      it('a positive and b 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 2.0, 0), 'Error');
      });
      it('a 0 and b positive', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 0, 2.0), 0);
      });
      it('a positive and b positive', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 2.0, 4.0), 0.5);
      });
      it('equal positive numbers', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 2.0, 2.0), 1);
      });
      it('a negative and b 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -2.0, 0), 'Error');
      });
      it('a 0 and b negative', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 0, -2.0), 'Error');
      });
      it('a positive and b negative', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 2.0, -4.0), 'Error');
      });
      it('a negative and b positive', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -4.0, 2.0), -2);
      });
      it('a negative and b negative', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -4.0, -2.0), 'Error');
      });
    });

    describe('float rounding down calculation', () => {
      it('rounding down a and float b', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 2.4, 1), 2);
      });
      it('float a and rounding down b', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.0, 2.4), 0.5);
      });
      it('rounding down a and rounding down b', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.3, 2.4), 0.5);
      });
      it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 2.499999, 4.499999), 0.5);
      });
    });
    describe('float rounding up calculation', () => {
      it('rounding up a and float b', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 2.5, 1), 3);
      });
      it('float a and rounding up b', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 2.0, 3.6), 0.5);
      });
      it('rounding up a and rounding up b', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.7, 3.8), 0.5);
      });
    });
    describe('float rounding up and down', () => {
      it('rounding up a and rounding down b', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.7, 2.4), 1);
      });
      it('rounding up a and rounding down b', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 2.4, 1.8), 1);
      });
    });
  });
});

/* eslint-env mocha */
