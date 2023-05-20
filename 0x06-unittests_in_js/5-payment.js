const Utils = require('./utils');

module.exports = function sendPaymentRequestToApi (totalAmount, totalShipping) {
  console.log(`The total is: ${Utils.calculateNumber('SUM', totalAmount, totalShipping)}`);
};
