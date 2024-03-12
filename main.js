const buttons = document.querySelectorAll('button'); // Llamamos a todos los botones en forma de array.
const spanJS = document.querySelectorAll('span'); // TRAIGO LOS SPAN ACA PERO DEBERIA IR ARRIBA AFUERA 

let store = ''; // Almacenamos los datos 
let result = 0; // Creamos una variable para el resultado. 

buttons.forEach(button => { // Creamo un forEach para recorrer cada botón.
    button.addEventListener('click', () => { // Cada vez que de un Click en el boton va a ejecutar el codigo 
        const value = button.textContent; // Traemos el valor del botón. 
        
        if (isNaN(parseInt(value))) {
            if (store.length === 0) {
                console.log('El primer valor no puede ser un operador');
                return;
            }
            switch (value) {
                case '+':
                    store = store.concat(value);
                    console.log(store, 'estoy en el más +');
                    break
                case '=':
                    console.log(store, 'estoy en el igual =');
                    result = eval(store);
                    console.log(result, 'este es el resultado');

                    spanJS[0].innerHTML = store;  // IMPRIME Y COLOCA EL STORE.
                    spanJS[1].innerHTML = result; // IMPRIME Y COLOCA EL RESULTADO

                    store = '', result = 0; // Reinicia y vuelve a empezar.
                    break;
            }
        }
        else {
            store = store.concat(button.textContent);
            console.log('ultimo valor: ', store.charAt(result -1 ))
            result = parseInt(result + value)
            console.log({
                store,
                result
            })
        }
    })
})
