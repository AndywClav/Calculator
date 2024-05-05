import { dataStore } from './variables.js';

export default function removeLocalStore() {
    localStorage.clear();
    dataStore.length = 0;
    console.log("delete ;)");
}