var path = require('path');
var bodyParser = require('body-parser');
var calculation = require('./calculation');
var calc = new calculation();

var express = require('express');
var app = new express();

var viewsPath = path.join(__dirname, 'views');

app.set('view engine', 'ejs');
app.set('views', viewsPath);
app.use(bodyParser());

var arr = [
    3,100,20,10,4
];


app.get('/',function(req, res){
    res.render('calculadora');
});

app.get('/soma-menores-valores', function(req, res) {    
    // let ret = sumTwoSmallestNumbers(arr);
    let ret = calc.sumTwoSmallestNumbers(arr);
    res.send('Resultado: ' + ret);
});

app.post('/soma-dois-valores', function(req, res) {    
   var valor1 = Number(req.body.numero1); 
   var valor2 = Number(req.body.numero2);
   var operation = req.body.operator;
   var total = 0;

    if (operation== "soma"){
       total =calc.sumTwoValues(valor1, valor2);
    } else if(operation == "subtrair"){
        total =calc.subTwoValues(valor1, valor2);  
    } else if(operation == "multiplicar"){
        total =calc.multTwoValues(valor1, valor2);
    } else if(operation == "dividir"){
        total =calc.divTwoValues(valor1, valor2);
    }

    res.send('Result ' + total);
    console.log(operation);
    
});


app.listen(9000, () => console.log('express started at http://localhost:9000'));
