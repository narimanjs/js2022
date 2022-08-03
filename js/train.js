const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('clicck!');
// };
// let i = 0;
const deleteElement = (btn) => {
    console.log(btn.target);
    console.log(btn.type);

    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
}

// btn.addEventListener('click', deleteElement);
// overlay.removeEventListener('click', deleteElement);
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement)
});

const link = document.querySelector('a');
link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});