const { calculateNumber } = require('./utils');

module.exports = function sendPaymentRequestToApi (totalAmount, totalShipping) {
  console.log(`The total is: ${calculateNumber('SUM', totalAmount, totalShipping)}`);
};
