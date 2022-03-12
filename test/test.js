var assert = require("chai").assert;
var calculation = require('../src/calculation');
var calc = new calculation();


describe("test calculadora", function(){
    describe("testes positivos", function(){
        it("Soma 2+2 espero como retorno 4", function(){
            var resultado = calc.sumTwoValues(2, 2);
            assert.equal(resultado, 4);
        });
        it("Soma 22+22 espero como retorno 44", function(){
            var resultado = calc.sumTwoValues(22, 22);
            assert.equal(resultado, 44);
        });
        it("Soma 2+3 espero como retorno 5", function(){
            var resultado = calc.sumTwoValues(2, 3);
            assert.equal(resultado, 5);
        });

    });

});


describe("test calculadora", function(){
    describe("testes negativos", function(){
        it("Soma de b + c espero como retorno 'invalid params' ", function(){
            var resultado = calc.sumTwoValues('b', 'c');
            assert.equal(resultado, "invalid params");
        });

        it("Soma 22+xxx espero como retorno 'invalid params'", function(){
            var resultado = calc.sumTwoValues(22, 'xxx');
            assert.equal(resultado, "invalid params");
        });

    });
});

describe("test calculadora", function(){
    describe("teste valores quebrados", function(){
        it("Soma de 1.5 + 1.5 espero como retorno '3' ", function(){
            var resultado = calc.sumTwoValues(1.5, 1.5);
            assert.equal(resultado, "3");
        });
        
        it("Soma 2.2+2.2 espero como retorno '4.4'", function(){
            var resultado = calc.sumTwoValues(2.2, 2.2);
            assert.equal(resultado, "4.4");
        });

    });
});