const { expect } = require('chai');
const { get } = require('request');

const URL = 'http://localhost:7865/';

describe('API integration test for /', () => {
  let number;
  it('GET on / should return', (done) => {
    get(URL, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET on /cart/id should return', (done) => {
    number = 12;
    get(`${URL}cart/${number}`, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal(`Payment methods for cart ${number}`);
      done();
    });
  });

  it('GET on /cart/id with the wrong id', (done) => {
    number = 'hello';
    get(`${URL}cart/${number}`, (_, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });
});

/* eslint-env mocha */
