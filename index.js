// function f15() {
//    let out_15 = document.querySelector('.out-15');
//    let s_151 = document.querySelector('.s-151').value;
//    let s_152 = document.querySelector('.s-152').value;
//    let s_153 = document.querySelector('.s-153').value;
//    switch (s_153) {
//       case '&&':
//          out_15.textContent = +s_151 && +s_152;
//          break          
//       case '||':
//          out_15.textContent = +s_151 || +s_152;
//          break
//    }
// }

// document.querySelector('.b-15').onclick = f15;

function t1() {
  let out_1 = document.querySelector('.out-1');
  let output = '';
  for (let i = 1; i <= 16; i = i + 1) {
    output += i + '_';
    out_1.textContent = output;
  }
}
// output = output + i + '_';

document.querySelector('.b-1').onclick = t1;

document.querySelector('.b-1').addEventListener('click', ()=>{
  console.log(123123);
})

