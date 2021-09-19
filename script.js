let slime = document.querySelector('.slime');
let moveBy = 10;


window.addEventListener('load', () => {
    slime.style.position = 'absolute';
    slime.style.left = 0;
    slime.style.top = 0;
});


window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            slime.style.left = parseInt(slime.style.left) - moveBy + 'px';
            break;
        case 'ArrowRight':
            slime.style.left = parseInt(slime.style.left) + moveBy + 'px';
            break;
        case 'ArrowUp':
            slime.style.top = parseInt(slime.style.top) - moveBy + 'px';
            break;
        case 'ArrowDown':
            slime.style.top = parseInt(slime.style.top) + moveBy + 'px';
            break;
    }
});