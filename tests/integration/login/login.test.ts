import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'

import mock from '../../mocks/login.mock'
import authJwt from '../../../src/utils/generateToken';
import bcrypt from 'bcryptjs'
import UserModel from '../../../src/database/models/user.model';
import loginService from '../../../src/services/login.service';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
  it ('Deve retornar 200, caso a requisição seja feita com sucesso', async function () {
    sinon.stub(bcrypt,'compare').resolves(true)


    const response = await chai.request(app)
      .post('/login')
      .send(mock.loginBody)

      // console.log(response);
      

    expect(response.status).to.be.equal(200)
  });

  it ('Deve retornar 200, caso a requisição seja feita com sucesso', async function () {
    sinon.stub(bcrypt, 'compare').resolves(true);
    sinon.stub(authJwt, 'generateToken').resolves({ username: 'ola' });
  
    const response = await chai
      .request(app)
      .post('/login')
      .send(mock.loginBody);
  
      

    expect(response.text).to.be.equal('{"token":{}}')
  });

  it ('Deve retornar 401, caso a requisição seja feita sem um corpo', async function () {  
    sinon.stub(bcrypt, 'compare').resolves(false);

    const response = await chai
      .request(app)
      .post('/login')
      .send(mock.loginBody);
  
      

    expect(response.status).to.be.equal(401)
  });
});


