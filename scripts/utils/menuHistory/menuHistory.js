export default function menuHistory() {
    const menuHistory = document.querySelector('#menu');

    menuHistory.addEventListener('click', () => {
        const history = document.querySelector('.caculator-nav-div');

        if (history.style.display == 'flex') {
            history.style.display = 'none';
        } else {
            history.style.display = 'flex';
            history.style.flexDirection = 'column';
            history.style.alignItems = 'center';
            history.style.position = 'absolute';
        }
    });
}