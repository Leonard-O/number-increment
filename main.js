const body = document.body;

// // document.body.style.backgroundColor = 'red';

// const div = document.createElement('div');
// body.appendChild(div);
// div.innerText = 'innerText';

// const p = document.createElement('p');
// div.appendChild(p);
// p.innerHTML = 'Paragraph';

const div = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanBye = document.querySelector('#bye');
let num = document.querySelector('#num');
const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
const reset = document.querySelector('#reset');
//

// spanBye.remove();
// div.append(spanBye);
// // div.removeChild(spanHi);

// div.addEventListener('mouseover', function() {
//     spanHi.toggle(false);
// });

// div.addEventListener('mouseout', function() {
//     div.appendChild(spanHi);
// });

let value = 0;

num.style.color = 'red';
num.style.fontSize = '5rem';

btn2.addEventListener('click', function() {
    value += 1;
    num.innerHTML = value;
});

btn.addEventListener('click', function() {
    value -= 1;
    num.innerHTML = value;
});

reset.addEventListener('click', function() {
    value = 0;
    num.innerHTML = value;
});