const btn = document.querySelector('.btn');
const items = document.querySelectorAll('.item');
items.forEach(i => {
    i.addEventListener('click', (e) => {
        console.log(e);

    })
})
// btn.onclick = sayHay; // -

// btn.addEventListener('click', sayHay);

// function sayHay(e) {
//     if(e.target.textContent === "PRESS"){
//         e.target.classList.toggle('btn-info');
//     }
//     if(e.target.textContent === "TAP"){
//         console.log('it is TAP');
//     }
//     // if (window.screen.width < 768) {
//     //     alert('mobile');
//     // }
//     // if(window.screen.width > 768){
//     //     alert('desktop');
//     // }
// // console.log(e.target.classList)
// }
// sayHay()
// alert('press');



// //declaration -> hoisting
// function get() {
//     console.log(this);
// }
// get();



// //expression - > not has hoisting
// const getName = function() {
//     console.log(window)
// }
// getName();


