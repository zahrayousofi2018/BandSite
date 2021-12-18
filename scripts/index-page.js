
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


// const getData =() => { 
// axios.get('https://project-1-api.herokuapp.com/register')
// .then(response => {
//   console.log(response);
// }
// );
// };


axios.get('https://project-1-api.herokuapp.com/register')
.then(response => {
 console.log(response);
  }
  );
 

// const api_key = ("8d6ce8f8-924a-4f80-bc0a-5cd301d742a7");
let myApiKey = ("8d6ce8f8-924a-4f80-bc0a-5cd301d742a7");

axios.get('https://project-1-api.herokuapp.com/comments?api_key='+ myApiKey.api_key)
.then(res => {
  console.log(res.data[0].name)
  console.log(res.data[0].comment)
  console.log(res.data[1].name)
  console.log(res.data[1].comment)
  
}); 


axios.get('https://project-1-api.herokuapp.com/showdates?api_key='+ myApiKey.api_key)
  .then(res => console.log(res));


