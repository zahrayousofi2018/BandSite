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
p.textContent = 'DATE';
let DATE =['Mon Sept 06 2021', 'Tue Sept 21 2021', 'Fri Oct 15, 2021', 'Sat Nov 06 2021', 'Fri Nov 26 2021', 'Wed Dec 15 2021'];

DATE.forEach((DATE)=> {
    let p = document.createElement('p');
    p.innerText=DATE;
    div.appendChild(p)
})

div.appendChild(p);
console.log(div);

var container = document.getElementById('container');
container.appendChild(div);
/*----------*/

var p = document.createElement('p');
p.textContent = 'VENUE';
let VENUE = ['Ronald Lane', 'Pier 3 East', 'View Lounge', 'Hyatt Agency', 'Moscow Center', 'Press Club'];
console.log(VENUE);

VENUE.forEach((VENUE)=> {
    let p = document.createElement('p');
    p.innerText=VENUE;
    div.appendChild(p)
})

div.appendChild(p);
console.log(div);

var container = document.getElementById('container');
container.appendChild(div);

/*-----------*/
var p = document.createElement('p');
p.textContent = 'LOCATION';

let LOCATION = ['San Francisco, CA', 'San Francisco, CA', 'San Francisco, CA', 'San Francisco, CA', 'San Francisco, CA', 'San Francisco, CA'];
console.log(LOCATION);

LOCATION.forEach((LOCATION)=> {
    let p = document.createElement('p');
    p.innerText=LOCATION;
    div.appendChild(p)
})

div.appendChild(p);
console.log(div);

var container = document.getElementById('container');
container.appendChild(div);







