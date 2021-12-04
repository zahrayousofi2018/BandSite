/*document.querySelector('body')
const bodyElement = document.querySelector('body')
const h1Element = document.createElement('h1')
bodyElement.appendChild(h1Element)
bodyElement.appendChild(document.createElement('h1'))
bodyElement.appendChild(document.createElement('h1'))
const textNode = document.createTextNode('DATE')
bodyElement.appendChild(textNode)
const textNode = document.createTextNode('VENUE')
bodyElement.appendChild(textNode)
const textNode = document.createTextNode('LOCATION')
bodyElement.appendChild(textNode)*/
// console.log(newDiv);
// var newDivText = document.createTextNode('DATE');
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');

// var h1 = document.querySelector('header h1');
// console.log(newDiv);
// container.insertBefore(newDiv, h1);



var div = document.createElement('div');
div.className ="concert"

var p = document.createElement('p');
p.textContent = 'San Francisco';

div.appendChild(p);
console.log(div);

var container = document.getElementById('container');
container.appendChild(div);


