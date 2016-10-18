/**
 * Created by lianghongpeng on 2016/10/18.
 */


import  request from '../../request';

var should = require('chai').should();

describe('homeControllerTest', function () {
  describe('index', function () {
    it('test!', function (done) {

      request
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {

          if (err) throw err;
          var body = JSON.parse(res.text);
          body.should.have.deep.property('status').equal(true);
          body.should.have.deep.property('code').equal(200);

          done();
        });


    });
  });

  describe('webhook', function () {
    it('test!', function (done) {

      request
        .post('/webhook')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {

          if (err) throw err;
          var body = JSON.parse(res.text);
          body.should.have.deep.property('status').equal(true);
          body.should.have.deep.property('code').equal(200);
          body.should.have.deep.property('data').be.a('String');

          done();
        });
    });
  });
});
