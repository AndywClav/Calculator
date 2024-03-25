//const numeros = ['2', '+', '5'];
//Hasta no encontrar un operador concatenaremos los valores numericos hasta llegar al operador

//let numeros = ['1','2','2','3','+','3','3', '+', '2', '3', '4'].join('').split('+');

const sumados = numeros.reduce((a, b) => Number(a) + Number(b));
console.log(sumados,' sumados')
console.log(numeros, 'numeros array');
numeros = [];
console.log(numeros, 'numeros array');
console.log(sumados, 'sumados linea 9');

function suma(n1,n2) {
    return n1 + n2
}

/* 
let numsCleared = numeros[0];

let result = 0;
for (let i = 0; i < numeros.length; i++) {
    console.log('indice,', i)

    if (numeros[i] == '+') {
        console.log('Es igual a +')
        if (!isNaN(parseInt(numeros[i - 1])) && !isNaN(parseInt(numeros[i + 1]))) {
            result = suma(parseInt(numeros[i-1]), parseInt(numeros[i+1]));
            i = i + 1;
            console.log(i)
            console.log('result', result)

            if (i >= numeros.length) {
                console.error('Error')
            }
        }
    }else{
        numsCleared = numsCleared.concat(numeros[i])
    }
}
console.log(numsCleared)
console.log(result)
 */