global.chai = require('chai');
global.expect = chai.expect;
global.should = chai.should();
global.sinon = require('sinon');
sinonChai = require('sinon-chai');
chai.use(sinonChai);