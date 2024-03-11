
const buttons = document.querySelectorAll('button');
console.log(buttons)
let store = '';
let result = 0;
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if(isNaN(parseInt(value))){
            if(store.length == 0){
                console.log('El primer valor no puede ser un operador');
                return;
            }
            switch(value){
                case '+':
                    store = store.concat(value);
                    //store = parseInt(store + store);
                    console.log(store);

                    break
                case '=':

                    return result;
                    break;
            }
        }
        else{
            store = store.concat(button.textContent);
            console.log('ultimo valor: ', store.charAt(-1))
            result = parseInt(result + value)
            console.log({
                store,
                result
            })
        }
        console.log({
            store,
            result
        })
    })
})
