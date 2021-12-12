
const formElement =document.querySelector('#form');
const formContainerDiv =document.querySelector('#formContainer');
const errorMessageElement = document.createElement('p');
// errorMessageElement.innerHTML ='your comment is too short';
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const commentSection = document.querySelector('#comments');

    const textFromInput = event.target.input.value;
    const textFromOpinion = event.target.opinion.value;
    if (textFromInput.length < 10) {
        // const formElement = document.querySelector('#form');
        formElement.classList.add('error');
        formContainerDiv.appendChild(errorMessageElement);
        return;
    }
     const commentElement = document.createElement('p');
     const nameElement = document.createElement('h4');
     nameElement.classList.add('form__heading');
     commentElement.classList.add('form__text');
    //commentElement.getElementByID.add('form__comment__image');
     commentElement.innerText = textFromOpinion;
     nameElement.innerText = textFromInput;
     commentSection.appendChild(nameElement);
     commentSection.appendChild(commentElement);
     


    //  const textFromOpinion = document.querySelector('#opinion').value;
    if(textFromOpinion.length <20) {
        // const formElement = document.querySelector('#form');
        formElement.classList.add('error');
        formContainerDiv.appendChild(errorMessageElement);
}
    // const commentElement = document.createElement('p');
    // commentElement.innerText = textFromOpinion; 
    // commentSection.appendChild(commentElement);
})

axios
    .get('https://project-1-api.herokuapp.com/')
    .then((result) => {
    console.log(result.data);
});









