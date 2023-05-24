const { expect } = require('chai');
const calculateNumber = require('./2-calcul');

describe('calculateNumber Testing', () => {
  describe('when type is "SUM"', () => {
    describe('float calculation', () => {
      it('a 0 and b 0', () => {
        expect(calculateNumber('SUM', 0, 0)).to.equal(0);
      });
      it('a positive and b 0', () => {
        expect(calculateNumber('SUM', 2.0, 0)).to.equal(2);
      });
      it('a 0 and b positive', () => {
        expect(calculateNumber('SUM', 0, 2.0)).to.equal(2);
      });
      it('a positive and b positive', () => {
        expect(calculateNumber('SUM', 2.0, 3.0)).to.equal(5);
      });
      it('equal positive numbers', () => {
        expect(calculateNumber('SUM', 2.0, 2.0)).to.equal(4);
      });
      it('a negative and b 0', () => {
        expect(calculateNumber('SUM', -2.0, 0)).to.equal(-2);
      });
      it('a 0 and b negative', () => {
        expect(calculateNumber('SUM', 0, -2.0)).to.equal(-2);
      });
      it('a positive and b negative', () => {
        expect(calculateNumber('SUM', 2.0, -4.0)).to.equal(-2);
      });
      it('a negative and b positive', () => {
        expect(calculateNumber('SUM', -4.0, 2.0)).to.equal(-2);
      });
      it('a negative and b negative', () => {
        expect(calculateNumber('SUM', -4.0, -2.0)).to.equal(-6);
      });
    });

    describe('float rounding down calculation', () => {
      it('rounding down a and float b', () => {
        expect(calculateNumber('SUM', 2.4, 1)).to.equal(3);
      });
      it('float a and rounding down b', () => {
        expect(calculateNumber('SUM', 1.0, 2.4)).to.equal(3);
      });
      it('rounding down a and rounding down b', () => {
        expect(calculateNumber('SUM', 1.3, 2.4)).to.equal(3);
      });
      it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
        expect(calculateNumber('SUM', 2.499999, 3.499999)).to.equal(5);
      });
    });

    describe('float rounding up calculation', () => {
      it('rounding up a and float b', () => {
        expect(calculateNumber('SUM', 2.5, 1)).to.equal(4);
      });
      it('float a and rounding up b', () => {
        expect(calculateNumber('SUM', 1.0, 2.6)).to.equal(4);
      });
      it('rounding up a and rounding up b', () => {
        expect(calculateNumber('SUM', 1.7, 2.8)).to.equal(5);
      });
    });

    describe('float rounding up and down', () => {
      it('rounding up a and rounding down b', () => {
        expect(calculateNumber('SUM', 1.7, 2.4)).to.equal(4);
      });
      it('rounding up a and rounding down b', () => {
        expect(calculateNumber('SUM', 2.4, 1.8)).to.equal(4);
      });
    });
  });

  describe('when type is "SUBTRACT"', () => {
    describe('float calculation', () => {
      it('a 0 and b 0', () => {
        expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
      });
      it('a positive and b 0', () => {
        expect(calculateNumber('SUBTRACT', 2.0, 0)).to.equal(2);
      });
      it('a 0 and b positive', () => {
        expect(calculateNumber('SUBTRACT', 0, 2.0)).to.equal(-2);
      });
      it('a positive and b positive', () => {
        expect(calculateNumber('SUBTRACT', 2.0, 3.0)).to.equal(-1);
      });
      it('equal positive numbers', () => {
        expect(calculateNumber('SUBTRACT', 2.0, 2.0)).to.equal(0);
      });
      it('a negative and b 0', () => {
        expect(calculateNumber('SUBTRACT', -2.0, 0)).to.equal(-2);
      });
      it('a 0 and b negative', () => {
        expect(calculateNumber('SUBTRACT', 0, -2.0)).to.equal(2);
      });
      it('a positive and b negative', () => {
        expect(calculateNumber('SUBTRACT', 2.0, -4.0)).to.equal(6);
      });
      it('a negative and b positive', () => {
        expect(calculateNumber('SUBTRACT', -4.0, 2.0)).to.equal(-6);
      });
      it('a negative and b negative', () => {
        expect(calculateNumber('SUBTRACT', -4.0, -2.0)).to.equal(-2);
      });
    });

    describe('float rounding down calculation', () => {
      it('rounding down a and float b', () => {
        expect(calculateNumber('SUBTRACT', 2.4, 1)).to.equal(1);
      });
      it('float a and rounding down b', () => {
        expect(calculateNumber('SUBTRACT', 1.0, 2.4)).to.equal(-1);
      });
      it('rounding down a and rounding down b', () => {
        expect(calculateNumber('SUBTRACT', 1.3, 2.4)).to.equal(-1);
      });
      it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
        expect(calculateNumber('SUBTRACT', 2.499999, 3.499999)).to.equal(-1);
      });
    });

    describe('float rounding up calculation', () => {
      it('rounding up a and float b', () => {
        expect(calculateNumber('SUBTRACT', 2.5, 1)).to.equal(2);
      });
      it('float a and rounding up b', () => {
        expect(calculateNumber('SUBTRACT', 1.0, 2.6)).to.equal(-2);
      });
      it('rounding up a and rounding up b', () => {
        expect(calculateNumber('SUBTRACT', 1.7, 2.8)).to.equal(-1);
      });
    });

    describe('float rounding up and down', () => {
      it('rounding up a and rounding down b', () => {
        expect(calculateNumber('SUBTRACT', 1.7, 2.4)).to.equal(0);
      });
      it('rounding up a and rounding down b', () => {
        expect(calculateNumber('SUBTRACT', 2.4, 1.8)).to.equal(0);
      });
    });
  });

  describe('when type is "DIVIDE"', () => {
    describe('float calculation', () => {
      it('a 0 and b 0', () => {
        expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
      });
      it('a positive and b 0', () => {
        expect(calculateNumber('DIVIDE', 2.0, 0)).to.equal('Error');
      });
      it('a 0 and b positive', () => {
        expect(calculateNumber('DIVIDE', 0, 2.0)).to.equal(0);
      });
      it('a positive and b positive', () => {
        expect(calculateNumber('DIVIDE', 2.0, 4.0)).to.equal(0.5);
      });
      it('equal positive numbers', () => {
        expect(calculateNumber('DIVIDE', 2.0, 2.0)).to.equal(1);
      });
      it('a negative and b 0', () => {
        expect(calculateNumber('DIVIDE', -2.0, 0)).to.equal('Error');
      });
      it('a 0 and b negative', () => {
        expect(calculateNumber('DIVIDE', 0, -2.0)).to.equal('Error');
      });
      it('a positive and b negative', () => {
        expect(calculateNumber('DIVIDE', 2.0, -4.0)).to.equal('Error');
      });
      it('a negative and b positive', () => {
        expect(calculateNumber('DIVIDE', -4.0, 2.0)).to.equal(-2);
      });
      it('a negative and b negative', () => {
        expect(calculateNumber('DIVIDE', -4.0, -2.0)).to.equal('Error');
      });
    });

    describe('float rounding down calculation', () => {
      it('rounding down a and float b', () => {
        expect(calculateNumber('DIVIDE', 2.4, 1)).to.equal(2);
      });
      it('float a and rounding down b', () => {
        expect(calculateNumber('DIVIDE', 1.0, 2.4)).to.equal(0.5);
      });
      it('rounding down a and rounding down b', () => {
        expect(calculateNumber('DIVIDE', 1.3, 2.4)).to.equal(0.5);
      });
      it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
        expect(calculateNumber('DIVIDE', 2.499999, 4.499999)).to.equal(0.5);
      });
    });
    describe('float rounding up calculation', () => {
      it('rounding up a and float b', () => {
        expect(calculateNumber('DIVIDE', 2.5, 1)).to.equal(3);
      });
      it('float a and rounding up b', () => {
        expect(calculateNumber('DIVIDE', 2.0, 3.6)).to.equal(0.5);
      });
      it('rounding up a and rounding up b', () => {
        expect(calculateNumber('DIVIDE', 1.7, 3.8)).to.equal(0.5);
      });
    });
    describe('float rounding up and down', () => {
      it('rounding up a and rounding down b', () => {
        expect(calculateNumber('DIVIDE', 1.7, 2.4)).to.equal(1);
      });
      it('rounding up a and rounding down b', () => {
        expect(calculateNumber('DIVIDE', 2.4, 1.8)).to.equal(1);
      });
    });
  });
});

/* eslint-env mocha */
