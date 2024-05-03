const { describe, it } = require('mocha');
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('async testing with done callback', () => new Promise((done) => {
    getPaymentTokenFromAPI(true)
	    .then((data) => {
        expect(data).to.have.property('data');
        done();
	    });
  }));
});
