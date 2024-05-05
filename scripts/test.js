const operation = document.getElementById('operation');
const result = document.getElementById('result');
const defaultTextOperation = 'OPERATION';

const buttonTest = document.querySelector('.container-buttons');


//useless, the below function don't have sense, is just for experiment
const getStyles = (iter) =>{
    let pairs = new Map();

    for (const key in iter) {
        if (Object.hasOwnProperty.call(iter, key)) {
            const newProperty = iter[key];
            const newValue = iter[newProperty];
            pairs.set(newProperty,newValue);
        }
    }
    return Object.fromEntries(pairs);
}

//What i want achieve is the button pressing effect tipic from others pages, the issue is that i don't understand
//the transition, when you click the effect is hold and don't get back, well, is task to tomorrow and add meaning
//to every button or at least avoid that the 'operation' or don't log the 'del' 'ac' keys
const pressEffect = (element) => {

    const buttonStyles = getStyles(element.style);
    console.log(buttonStyles)

    element.style['box-shadow'] = buttonStyles['box-shadow'] === 'none' ? '2px 1px #454545' : 'none';
    element.style['box-shadow'] = buttonStyles['box-shadow'] === '2px 1px #454545' ? 'none' : '2px 1px #454545';
}
buttonTest.addEventListener('click', e => {
    if(e.target.type == 'button'){
        if(e.target.style.length >= 1){
            pressEffect(e.target)
        }
        console.log(e.target.textContent)
        refreshOperation(e.target.textContent);
    }
});

function refreshOperation(text){
    let operating = operation.innerText;
    if(operating === defaultTextOperation){
        operation.innerText = text;
        return;
    }

    if(isNaN(Number(text))){
        if(isNaN(Number(operating.charAt(operating.length - 1)))){
            return;
        }
        operating = operating + text;
        operation.innerText = operating;
        return;
    }

    operation.innerText = operating + text;
    return;
}

const deleteChar = () => {
    let operating = operation.innerText;
    
    if(operating.length != 0 && operating != defaultTextOperation){
        operating = operating.slice(0, -1)
        operation.innerText = operating;

        if(operating.length === 0){
            operating = defaultTextOperation;
            operation.innerText = operating;
        }
        return;
    }
}

/**
 * The main fn, operation must be carried out there
 * 
 * @param {string} calcs - String of operations that user entered
*/
function resolve(calcs){

    if(calcs == defaultTextOperation) return;
    /* 
    The most important part is missing, an idea that occurs to me is that perhaps we can do the math
    with the split method and the reduce method, arrangements of additions, subtractions, divisions and multiplications would be made
    then once we have those arrangements we would only have to solve those operations    
    */
}

function isValidLastChar(){
    return isNaN(Number(operation.charAt(-1))) ? false : true;
}


window.addEventListener(
    "keydown",
    (event) => {
        if (event.defaultPrevented) {
            return; // Do nothing if event already handled
        }

        switch (event.code) {
            case "Digit0":
                if(event.shiftKey){
                    //Equality
                    console.log(event.key)
                    if(isValidLastChar){
                        resolve(operation)
                    }
                }
                if(event.key === '0'){
                    console.log(event.key);
                    refreshOperation(event.key)
                }
                break;
            case "Digit1":
                if(event.key === '1'){
                    console.log(event.key);
                    refreshOperation(event.key)
                }
                break;
            case "Digit2":
                if(event.key === '2'){
                    console.log(event.key);
                    refreshOperation(event.key)
                }
                break;
            case "Digit3":
                if(event.key === '3'){
                    console.log(event.key);
                    refreshOperation(event.key)
                }
                break;
            case "Digit4":
                if(event.key === '4'){
                    console.log(event.key);
                    refreshOperation(event.key)
                }
                break;
            case "Digit5":
                if(event.key === '5'){
                    console.log(event.key);
                    refreshOperation(event.key)
                }
                break;
            case "Digit6":
                if(event.key === '6'){
                    console.log(event.key);
                    refreshOperation(event.key)
                }
                break;
            case "Digit7":
                if(event.shiftKey){
                    //Division
                    console.log(event.key)
                    refreshOperation(event.key)
                }
                if(event.key === '7'){
                    console.log(event.key);
                    refreshOperation(event.key)
                }
                break;
            case "Digit8":
                if(event.key === '8'){
                    console.log(event.key);
                    refreshOperation(event.key)
                }
                break;
            case "Digit9":
                if(event.key === '9'){
                    console.log(event.key);
                    refreshOperation(event.key)
                }
                break;
            case "BracketRight":
                if(event.shiftKey){
                    //Multiply
                    console.log(event.key)
                }
                if(event.key === '+'){
                    console.log(event.key);
                }
                break;
            case "Backspace":
                if(event.key == 'Backspace'){
                    console.log(event.key)
                }
                deleteChar();
                break;
        }

       /*  if (event.code !== "Tab") {
            // Consume the event so it doesn't get handled twice,
            // as long as the user isn't trying to move focus away
            event.preventDefault();
        } */
    },
    true,
);


//DRAFT


/* const sumados = numeros.reduce((a, b) => Number(a) + Number(b));

function suma(n1,n2) {
    return n1 + n2
} */

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