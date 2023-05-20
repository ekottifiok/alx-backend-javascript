const { expect } = require('chai');
const { get } = require('request');

describe('API integration test for /', () => {
  const URL = 'http://localhost:7865/';
  it('GET on / should return', (done) => {
    get(URL, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
