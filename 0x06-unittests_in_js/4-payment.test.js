const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('Tests Send Payment Request To Api', () => {
  it('sendPaymentRequestToApi', () => {
    const spy = sinon.spy(console);
    const callback = sinon.stub(Utils, 'calculateNumber');
    callback.withArgs('SUM', 100, 20).returns(10);

    sendPaymentRequestToApi(100, 20);
    expect(callback.calledWith('SUM', 100, 20)).to.be.true;
    expect(callback.callCount).to.be.equal(1);
    expect(spy.log.calledWith('The total is: 10')).to.be.true;
    expect(spy.log.callCount).to.be.equal(1);
    callback.restore();
    spy.log.restore();
  });
});

/* eslint-env mocha */
