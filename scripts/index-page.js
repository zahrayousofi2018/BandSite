
const formElement =document.querySelector('#form');
const formContainerDiv =document.querySelector('#formContainer');
const errorMessageElement = document.createElement('p');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const commentSection = document.querySelector('#comments');

    const textFromInput = event.target.input.value;
    const textFromOpinion = event.target.opinion.value;
    if (textFromInput.length < 10) {
        formElement.classList.add('error');
        formContainerDiv.appendChild(errorMessageElement);
        return;
    }
     const commentElement = document.createElement('p');
     const nameElement = document.createElement('h4');
     nameElement.classList.add('form__heading');
     commentElement.classList.add('form__text');
     commentElement.innerText = textFromOpinion;
     nameElement.innerText = textFromInput;
     commentSection.appendChild(nameElement);
     commentSection.appendChild(commentElement);
     

    if(textFromOpinion.length <20) {

        formElement.classList.add('error');
        formContainerDiv.appendChild(errorMessageElement);
}
});


axios.get('https://project-1-api.herokuapp.com/').then(response => {
  console.log(response.data);
}
);

const Http = new XMLHttpRequest();
const url='/register';
Http.responseXML("GET", url);
Http.send();

Http.onreadystatechange =(e)=> {
    console.log(Http.responseText)
}
