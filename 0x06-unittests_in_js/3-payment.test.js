const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('Tests Send Payment Request To Api', () => {
  it('sendPaymentRequestToApi', () => {
    const spy = sinon.spy(Utils);

    sendPaymentRequestToApi(130, 30);
    expect(spy.calculateNumber.calledWith('SUM', 130, 30)).to.be.true;
    expect(spy.calculateNumber.callCount).to.be.equal(1);
    spy.calculateNumber.restore();
  });
});

/* eslint-env mocha */
