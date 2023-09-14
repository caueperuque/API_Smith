import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app'
import { productsBody } from '../../mocks/products.mock';
import productService from '../../../src/services/product.service';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it ('Deve retornar 201, caso a requisição seja feita com sucesso', async function () {
    const response = await chai.request(app)
      .post('/products')
      .send(productsBody)

      expect(response.status).to.be.equal(201)
  })

  // it ('Deve retornar 201, caso a requisição seja feita com sucesso', async function () {
  //   const response = await chai.request(app)
  //     .post('/products')
  //     .send()

  //     expect(response.status).to.be.equal(201)
  // })
});
