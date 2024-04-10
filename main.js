// const buttons = document.querySelectorAll('button'); // Llamamos a todos los botones en forma de array.
// const spanJS = document.querySelectorAll('span'); // TRAIGO LOS SPAN ACA PERO DEBERIA IR ARRIBA AFUERA 

// let store = ''; // Almacenamos los datos 
// let result = 0; // Creamos una variable para el resultado. 

// buttons.forEach(button => { // Creamo un forEach para recorrer cada botón.
//     button.addEventListener('click', () => { // Cada vez que de un Click en el boton va a ejecutar el codigo 
//         const value = button.textContent; // Traemos el valor del botón. 

//         if (isNaN(parseInt(value))) {
//             if (store.length === 0) {
//                 console.log('El primer valor no puede ser un operador');
//                 return;
//             }

//             switch (value) {
//                 case '+':
//                     store = store.concat(value);
//                     console.log(store, 'estoy en el más +');
//                     break
//                 case '=':
//                     console.log(store, 'estoy en el igual =');
//                     console.log(result, 'este es el resultado');

//                     spanJS[1].innerHTML = result; // IMPRIME Y COLOCA EL RESULTADO

//                     result = parseInt(result) + parseInt(value);
//                     console.log({
//                         store,
//                         result
//                     })

//                     store = '', result = 0; // Reinicia y vuelve a empezar.
//                     break;
//             }
//         }
//         else {
//             store = store.concat(value);
//             console.log('ultimo valor: ', store.charAt(result -1 ))
//             result = parseInt(result) + parseInt(value);
//             console.log({
//                 store,
//                 result
//             })
//         }

//         spanJS[0].innerHTML = store;  // IMPRIME Y COLOCA EL STORE.
//     })
// })

const buttons = document.querySelectorAll('button'); // Llamamos a todos los botones en forma de array.
const spanJS = document.querySelectorAll('span');

let buttonValue;
let value;
let store = 0;
let result = 0
let keyCode = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];

function eventKeyboard(btn) {
    window.addEventListener('keyup', (e) => {
        buttonValue = btn.textContent;
        value = parseInt(buttonValue);

        for (let i = 0; i < keyCode.length; i++) {
            if (e.keyCode === keyCode[value]) {
                console.log('teclado');
                console.log(value, btn);
            }
        }
    })
}

function eventClick(btn, events) {
    window.addEventListener('click', (e) => {
        buttonValue = btn.textContent;
        value = parseInt(buttonValue);

        for (let i = 0; i < keyboard.length; i++) {
            if (e.onClick === keyboard[value]) {
                console.log('click');
                console.log(value, btn, events);
            }
        }
    });
}

buttons.forEach(button => {
    eventClick(button);
    eventKeyboard(button);
});

// Modulo de localStorages 
// ACA HACEMOS LA LOGICA PARA QUE EL DATO QUEDE GUARDADO EN EL LocalStorage

const dataStore = [];

console.log(dataStore);
function addLocalStore(value) {
    if (!value == "") {
        dataStore.push(value)
        localStorage.setItem("Result", JSON.stringify(dataStore)); 
    }
}

function removeLocalStore() {
    localStorage.clear();
    dataStore.length = 0;
}
// anotaciones colocar una variable de operadores aripmetic