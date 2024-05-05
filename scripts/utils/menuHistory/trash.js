import { removeLocalStore } from '../storage/local/index.js';

export default function trash() {
    const trash = document.querySelector('#trash');

    trash.addEventListener('click', () => {
        removeLocalStore();
    });
}