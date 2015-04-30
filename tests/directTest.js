/**
 * Copyright (c) 2015, EBANX Tecnologia da Informação Ltda.
 *  All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * Neither the name of EBANX nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var utils = require('../lib/Config');
var ebanx = require('../lib/ebanx');
var test = require('assert');
var eb = ebanx();

eb.configure({
  integrationKey : "integration_key",
  testMode : true
});

utils.httpClient = "Mock";

var direct = {
  name : "carlos test",
  email : "carlos@test.com",
  birth_date : "12/04/1979",
  document : "853.513.468.93",
  address : "Rua e",
  street_number : "1040",
  city : "Curitiba",
  state : "PR",
  zipcode : "82530000",
  country : "br",
  phone_number : "32329913",
  payment_type_code : "itau",
  merchant_payment_code : "123141dafefesf",
  currency_code : "BRL",
  amount_total : 423.00
}

describe('Direct Operation', function() {
  eb.direct (direct, function(err, reply) {
    it('Should return object', function(done) {
      test.equal ("object", typeof(reply));
      done();   
    })
    
    it('Method should be POST', function(done) {
      test.equal (reply.method,"POST");
      done();
    })

    it('URI should point to ws/direct', function(done) {
      test.equal (reply.uri,"ws/direct");
      done();
    })

    it('Params should contain "direct"', function(done) {
      test.equal (reply.direct, true)
      done();  
    })

    it('Param "mode" should be "full"', function(done) {
      test.equal (reply.params.mode, "full")
      done();  
    })

    it('Param "currency_code" should be passed', function(done) {
      test.equal (reply.params.payment.currency_code, direct.currency_code)
      done();  
    })

    it('Param "merchant_payment_code" should be passed', function(done) {
      test.equal (reply.params.payment.merchant_payment_code, direct.merchant_payment_code)
      done();  
    })

    it('Param "phone_number" should be passed', function(done) {
      test.equal (reply.params.payment.phone_number, direct.phone_number)
      done();  
    })

    it('Param "country" should be passed', function(done) {
      test.equal (reply.params.payment.country, direct.country)
      done();  
    })

    it('Param "zipcode" should be passed', function(done) {
      test.equal (reply.params.payment.zipcode, direct.zipcode)
      done();  
    })

    it('Param "state" should be passed', function(done) {
      test.equal (reply.params.payment.state, direct.state)
      done();  
    })

    it('Param "city" should be passed', function(done) {
      test.equal (reply.params.payment.city, direct.city)
      done();  
    })

    it('Param "street_number" should be passed', function(done) {
      test.equal (reply.params.payment.street_number, direct.street_number)
      done();  
    })

    it('Param "address" should be passed', function(done) {
      test.equal (reply.params.payment.address, direct.address)
      done();  
    })

    it('Param "document" should be passed', function(done) {
      test.equal (reply.params.payment.document, direct.document)
      done();  
    })

    it('Param "birth_date" should be passed', function(done) {
      test.equal (reply.params.payment.birth_date, direct.birth_date)
      done();  
    })

    it('Param "email" should be passed', function(done) {
      test.equal (reply.params.payment.email, direct.email)
      done();  
    })

    it('Param "name" should be passed', function(done) {
      test.equal (reply.params.payment.name, direct.name)
      done();  
    })

    it('Param "payment_type_code" should be passed', function(done) {
      test.equal (reply.params.payment.payment_type_code, direct.payment_type_code)
      done();  
    })

    it('Param "amount_total" should be passed', function(done) {
      test.equal (reply.params.payment.amount_total, direct.amount_total)
      done();  
    })
  })
});