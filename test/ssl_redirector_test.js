var chai, expect, should, sinon, sinonChai, exports;

chai = require('chai');
expect = chai.expect;
should = chai.should();
sinon = require('sinon');
sinonChai = require('sinon-chai');
chai.use(sinonChai);

exports = require('../lib/ssl_redirector.js');

describe("SSL Redirector", function() {
  var req, res, headerSpy, sendSpy, nextSpy;
  var nextWasCalled = false;

  beforeEach(function(done){
    req = {
      headers: {
        host: "somehost"
      },
      url: "/somepath"
    };

    res = {
      header: function() {},
      send: function() {}
    }

    headerSpy = sinon.spy(res, "header");
    sendSpy = sinon.spy(res, "send");
    nextSpy = sinon.spy();
    return done();
  });
  
  describe("HTTP redirection", function() {
    it("should redirect non-secure request to the HTTPS url", function () {
      exports.forceSSLRedirect(req, res, nextSpy);

      headerSpy.withArgs('Location', "https://somehost/somepath").calledOnce.should.be.true;
      sendSpy.withArgs(301).calledOnce.should.be.true;

      nextSpy.called.should.be.false;
    });
    it("should not redirect a secure request", function () {
      req.headers['x-forwarded-proto'] = "https";

      exports.forceSSLRedirect(req, res, nextSpy);

      headerSpy.called.should.be.false;
      sendSpy.called.should.be.false;
      
      nextSpy.calledOnce.should.be.true;
    });

  });

});