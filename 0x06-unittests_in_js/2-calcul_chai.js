module.exports = function calculateNumber (type, a, b) {
  [a, b] = [Math.round(a), Math.round(b)];

  switch (type) {
    case 'SUM':
      return a + b;

    case 'SUBTRACT':
      return a - b;

    case 'DIVIDE':
      return b > 0 ? a / b : 'Error';
  }
};
