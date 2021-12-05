
const submitButton =document.querySelector('#submit');
const formContainerDiv =document.querySelector('#formContainer');
const errorMessageElement = document.createElement('p');
errorMessageElement.innerHTML ='your comment is too short';
submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const textFromInput = document.querySelector('#input').value;
    // const textFromInput =document.querySelector('#opinion').value;
    if (textFromInput.length < 10) {
        const formElement = document.querySelector('#form');
        formElement.classList.add('error');
        formContainerDiv.appendChild(errorMessageElement);
        return;
    }
     const commentElement = document.createElement('p');
     commentElement.innerText = textFromInput;
    //  commentElement.innerText = textFromOpinion;
     const commentSection = document.querySelector('#comments');
     commentSection.appendChild(commentElement);
    //  formContainerDiv.removeChild(errorMessageElement)
    
})

     const textFromOpinion = document.querySelector('#opinion').value;
    if(textFromOpinion.length <20) {
        const formElement = document.querySelector('#form');
        formElement.classList.add('error');
        formContainerDiv.appendChild(errorMessageElement);
        // return;
}
    const commentElement = document.createElement('p');
    commentElement.innerText =textFromOpinion;
    const commentSection =document.querySelector('#comments');
    commentSection.appendChild(commentElement);










