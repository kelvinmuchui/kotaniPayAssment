process.env.NODE_ENV = 'test';

const User = require("./config");

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

describe('Books', () => {
    beforeEach((done) => {
        User.remove({}, (err) => { 
           done();           
        });        
    });
  describe('/GET User', () => {
      it('it should GET all user', (done) => {
        chai.request(server)
            .get('/book')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });
  /*
  * Test the /POST route
  */
  describe('/create user', () => {
      it('it should not POST a username field', (done) => {
          let user = {
              username: "kevin",
              email: "kelvin@gmail.com",
              password: "1954"
          }
        chai.request(server)
            .post('/api/user/create')
            .send(user)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('errors');
                  res.body.errors.should.have.property('password');
                  res.body.errors.password.should.have.property('kind').eql('required');
              done();
            });
      });

  });
});

