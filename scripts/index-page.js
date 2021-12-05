
/*const name = document.getElementById('name')
const comment = document.getElementById('comment')
const submit = document.getElementById('submit')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')


form.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.comment.value);
    console.log(event.target.submit.value);
}) */

const submitButton =document.querySelector('#submit');

// const form = document.querySelector('#form')
// const errorMessageElement = document.createElement('p');
// errorMessageElement.innerHTML ='your comment is too short';

submitButton.addEventListner('click', (event) => {
    event.preventDefault();
    const textFromInput = document.querySelector('#name').value;
    if (textFromInput.length <10) {
        const formElement = document.querySelector('#form');
         formElement.classList.add('error');
        formDiv.appendChild(errorMessageElement);
         return;
    }
     const commentElement = document.createElement('p');
     commentElement.innerText = textFromInput;
     const commentSection = document.querySelector('#comments');
     const textFromInput = document.querySelector('#submit').value;
     commentSection.appendChild(commentElement)
    form.removeChild(errorMessageElement)
    
})









