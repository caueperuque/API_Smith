import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it ('Deve retornar 200, caso a requisição seja feita com sucesso', async function () {
    const response = await chai.request(app)
      .get('/products')
      .send();

    expect(response.status).to.be.equal(200)
  })
});
