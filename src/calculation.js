/*
1-Criar uma classe com o nome de "calculations"
2-mover a função de soma de menores valores
3-exportar essa classe  
5-importa-la no index.js
6-criar uma instacia desta classe e chama esta função
*/


//Criando a classe
module.exports = class Calculation{

    sumTwoSmallestNumbers(numbers) {  
        //Code here
    
        numbers.sort((a, b) => {
            if(a > b) return 1;
            if(a < b) return -1;
            return 0;
        });
    
        let aux = numbers[0] + numbers[1];
        
        return aux;
        
    };

    sumTwoValues(number1, number2){

        if(isNaN(number1) || isNaN(number2))
            return 'invalid params'; 

            let soma = (number1 + number2);    
            return soma;

    };

    subTwoValues(number1, number2){

        if(isNaN(number1) || isNaN(number2))
            return 'invalid params';

            let subtract = (number1 - number2); 
            return subtract;
    };

    multTwoValues(number1, number2){
        if(isNaN(number1) || isNaN(number2)){
            return 'invalid params';
        }
        
        let mult = (number1 * number2); 
        console.log("resultado:", mult)
        return mult;
    };

    divTwoValues(number1, number2){
        if(isNaN(number1) || isNaN(number2))
            return 'invalid params';
             
            let division = (number1 / number2); 
            return division;
    };
}