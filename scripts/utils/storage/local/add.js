import { dataStore } from './variables.js';

export default function addLocalStore(value) {
    if (!value == "") {
        dataStore.push(value);
        localStorage.setItem("Result", JSON.stringify(dataStore)); 
    }
}