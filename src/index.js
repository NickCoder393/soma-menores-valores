/*
1-no arquivo criar uma api na porta 9000;
2-criar um metodo get para (/) para raiz;
3-criar edevolver um "hello word"(usando express);
4-executar uma api usando browser;



var express = require ('express');
var app = express( );

app.get('/', function(req, res){
    let ret = {'retorno':'Hello Word'};
    res.send(ret);
});


app.listen(9000, () => console.log('Express started at http://localhost:9000'));

*/

var express = require('express');
var app = new express();
var params = [
    3,100,20,10,4
];

app.get('/soma-menores-valores', function(req, res) {    
    let ret = sumTwoSmallestNumbers(params);    
    res.send('Soma: ' + ret);
});

app.listen(9000, () => console.log('express started at http://localhost:9000'));

function sumTwoSmallestNumbers(numbers) {  
    //Code here

    numbers.sort((a, b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });

    let aux = numbers[0] + numbers[1];
    
    return aux;
}

