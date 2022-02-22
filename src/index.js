var express = require('express');
var app = new express();
var arr = [
    3,100,20,10,4
];

app.get('/soma-menores-valores', function(req, res) {    
    let ret = sumTwoSmallestNumbers(arr);    
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

