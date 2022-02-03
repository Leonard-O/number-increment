// const btn = document.getElementById('btn');
// const body = document.querySelectorAll('body');
// const demo = document.getElementById('demo');

// btn.addEventListener('click', function() {
//     demo.innerHTML = 'Hello world';
//     document.body.style.backgroundColor = 'red';
// });

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

// spanBye.remove();
div.append(spanBye);
// div.removeChild(spanHi);

div.addEventListener('mouseover', function() {
    spanHi.remove();
});

div.addEventListener('mouseout', function() {
    div.appendChild(spanHi);
});