const { expect } = require('chai');
const { get, post } = require('request');

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

  it('GET on /cart/id with the string as id', (done) => {
    number = 'hello';
    get(`${URL}cart/${number}`, (_, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET on /cart/id with the negative number as id', (done) => {
    number = -490;
    get(`${URL}cart/${number}`, (_, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET on /available_payments', (done) => {
    get(`${URL}available_payments`, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body)).to.be.deep.equal({ payment_methods: { credit_cards: true, paypal: false } });
      done();
    });
  });

  it('POST /login returns valid response', (done) => {
    post(`${URL}login`, {json: {userName: 'Udeme'}}, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Udeme');
      done();
    });
  });
});

/* eslint-env mocha */
