var assert = require('assert');
var prog = require('../src/routes/metodos');

describe('Electro Centro', function(){
    describe('Monto a  Pagar Recibo de Luz', function(){
        
        it('Comprobar la funcionalidad de la funcion ', function(){
            assert.deepEqual(prog.suma(3,5), 15);
        });

        

        
    });
});