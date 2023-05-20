const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('Testing using Hooks', () => {
  let spy;

  beforeEach(() => (spy = spy || sinon.spy(console)));
  afterEach(() => spy.log.resetHistory());

  it('sendPaymentRequestToAPI with 100, and 20 and total 120', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spy.log.calledWith('The total is: 120')).to.be.true;
    expect(spy.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToAPI with 10, and 10 and total 20', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spy.log.calledWith('The total is: 20')).to.be.true;
    expect(spy.log.calledOnce).to.be.true;
  });
});

/* eslint-env mocha */
