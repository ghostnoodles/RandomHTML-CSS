const redId = document.querySelector('#red');

const red = document.createElement('p');
red.textContent = 'Hey I’m red!';
red.style.cssText = 'color: red';   

redId.appendChild(red);

const blueId = document.querySelector('#blue');

const blue = document.createElement('h3');
blue.textContent = 'I’m a blue h3!';
blue.style.cssText = 'color: blue';   

blueId.appendChild(blue);

const divId = document.querySelector('#div');
divId.style.cssText = 'background-color: pink;border: solid black';  

const h1 = document.createElement('h1');
h1.textContent = 'I’m in a div';
divId.appendChild(h1);

const p = document.createElement('p');
p.textContent = 'ME TOO!';
divId.appendChild(p);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    console.log(e.target);
  });