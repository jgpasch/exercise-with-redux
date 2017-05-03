import mocha from 'mocha';
import chai from 'chai';
import request from 'supertest';
import app from '../tools/testServer';
chai.should();

const expect = chai.expect;

describe('logging into my application', () => {
  const user = {
    email: "test@@",
    password: "test"
  };

  it('is up and running', (done) => {
    request(app)
      .get('/')
      .end((err,res) => {
        res.status.should.be.equal(200);
        done();
      });
  });

  it('should log in successfully', (done) => {
    request(app)
      .post('/signin')
      .send(user)
      .end((err,res) => {
        if (err){
          throw err;
        } else {
          res.status.should.be.equal(200);
          done();
        }
      });
  });
});
