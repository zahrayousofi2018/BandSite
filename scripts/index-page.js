const name = document.getElementById('name')
const comment = document.getElementById('comment')
const submit = document.getElementById('submit')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.comment.value);
    console.log(event.target.submit.value);
});
}




/*document.querySelector('shows');
const bodyElement =document.querySelector('shows');
const h1Element = document.createElement('h1')
bodyElement.appendChild(h1Element)
bodyElement.appendChild(document.createElement('h1'))
const textNode =document.createTextNode('Mon Sept 06 2021')

const text =document.querySelector(".shows")

for(let i=0; i<6; i++) {
    console.log('San Francisco, CA', 1);
}*/