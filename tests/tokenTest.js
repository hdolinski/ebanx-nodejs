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

var creditcard = {
  payment_type_code : "visa",
  creditcard : {
    card_number : "4111111111111111",
    card_name : "Jose da Silva",
    card_due_date : "10/2018",
    card_cvv : "123"
  }
};

describe('Token Operation', function() {
  eb.token (creditcard, function(err, reply) {
    it('Should return object', function(done) {
      test.equal ("object", typeof(reply));
      done();   
    })
    
    it('Method should be POST', function(done) {
      test.equal (reply.method,"POST");
      done();
    })

    it('URI should point to ws/token', function(done) {
      test.equal (reply.uri,"ws/token");
      done();
    })

    it('Params should have payment_type_code', function(done) {
      test.equal (reply.params.payment_type_code, creditcard.payment_type_code);
      done();  
    })

    it('Params should have creditcard.card_number', function(done) {
      test.equal (reply.params.creditcard.card_number, creditcard.creditcard.card_number);
      done();  
    })

    it('Params should have creditcard.card_name', function(done) {
      test.equal (reply.params.creditcard.card_name, creditcard.creditcard.card_name);
      done();  
    })

    it('Params should have creditcard.card_due_date', function(done) {
      test.equal (reply.params.creditcard.card_due_date, creditcard.creditcard.card_due_date);
      done();  
    })

    it('Params should have creditcard.card_cvv', function(done) {
      test.equal (reply.params.creditcard.card_cvv, creditcard.creditcard.card_cvv);
      done();  
    })
  })
});