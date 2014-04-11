global.chai = require('chai');
global.expect = chai.expect;
global.should = chai.should();
global.sinon = require('sinon');
sinonChai = require('sinon-chai');
chai.use(sinonChai);

process.env.PORT = 8081;
global.server = require('../lib/server').createServer();
global.request = require('supertest');
global.restify = require('restify');
