const header = document.getElementById('header');
// target h1 from header
const h1 = header.children[0];

// set the text color to white
h1.style.color = 'white';

const h3 = document.getElementsByClassName('art-title')[0];

// target an element where the class name is "art-title"
const h3 = document.querySelector('.art-title');


h3.style['font-size'] = '50px';
console.log(h3.style);

// h3.style['font-size'] = '50px';