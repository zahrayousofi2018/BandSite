
const submitButton =document.querySelector('#submit');
const formContainerDiv =document.querySelector('#formContainer');
const errorMessageElement = document.createElement('p');
// errorMessageElement.innerHTML ='your comment is too short';
submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const textFromInput = document.querySelector('#input').value;
    if (textFromInput.length < 10) {
        const formElement = document.querySelector('#form');
        formElement.classList.add('error');
        formContainerDiv.appendChild(errorMessageElement);
        return;
    }
     const commentElement = document.createElement('p');
     commentElement.innerText = textFromInput;
     const commentSection = document.querySelector('#comments');
     commentSection.appendChild(commentElement);
    
})

     const textFromOpinion = document.querySelector('#opinion').value;
    if(textFromOpinion.length <20) {
        const formElement = document.querySelector('#form');
        formElement.classList.add('error');
        formContainerDiv.appendChild(errorMessageElement);
}
    const commentElement = document.createElement('p');
    commentElement.innerText =textFromOpinion;
    const commentSection =document.querySelector('#comments');
    commentSection.appendChild(commentElement);










