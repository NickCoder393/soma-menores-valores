var path = require('path');
var calculation = require('./calculation');
var calc = new calculation();

var express = require('express');
var app = new express();
var viewsPath = path.join(__dirname, 'views');

app.set('view engine', 'ejs');
app.set('views', viewsPath);

var arr = [
    3,100,20,10,4
];


app.get('/',function(req, res){
    res.render('calculadora');
});

app.get('/soma-menores-valores', function(req, res) {    
    // let ret = sumTwoSmallestNumbers(arr);
    let ret = calc.sumTwoSmallestNumbers(arr);
    res.send('Soma: ' + ret);
});

app.get('/soma-dois-valores', function(req, res) {    
   var valor1 = parseInt(req.query.numero1); 
   var valor2 = parseInt(req.query.numero2);
   var total = calc.sumTwoValues(valor1, valor2);
   res.send('Soma: ' + total);
});


app.listen(9000, () => console.log('express started at http://localhost:9000'));
