
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
     commentSection.prepend(commentElement);
     commentSection.prepend(nameElement);
    
     
     

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
  });
 
let myApiKey = ("8d6ce8f8-924a-4f80-bc0a-5cd301d742a7");

axios.get('https://project-1-api.herokuapp.com/comments?api_key='+ myApiKey.api_key)
.then(res => {
  console.log(res);
  // console.log(res.data[0].name)
 
  // let form__heading = document.querySelector('.form__heading');
  // form__heading.innerText = res.data[0].name;
  // let form__text = document.querySelector('.form__text');
  // form__text.innerText = res.data[0].comment;
  
  // let form__headings = document.querySelector('.form__headings');
  // form__headings.innerText = res.data[1].name;
  // let form__texts = document.querySelector('.form__texts');
  // form__texts.innerText = res.data[1].comment;

  // let forms__heading = document.querySelector('.forms__heading');
  // forms__heading.innerText = res.data[2].name;
  // let forms__text = document.querySelector('.forms__text');
  // forms__text.innerText = res.data[2].comment;
  
  let comments__container = document.querySelector('#comments');

  for (i=0; i< res.data.length; i++) {
    let profile__image = document.createElement('img');
    console.log(profile__image);
    profile__image.src = "Assets/Images/Grey.png";
    
    profile__image.classList.add('.profile__image');
    profile__image.style.width ="48px";
    profile__image.style.height ="48px";
    profile__image.style.borderRadius ="50%"
    

    let form__heading=document.createElement('h4');
    form__heading.classList.add('.form__heading');
    form__heading.innerText = res.data[i].name;
    form__heading.appendChild(profile__image);

    let form__text= document.createElement('p');
    form__text.classList.add('.form__text');
    form__text.innerText = res.data[i].comment;
    comments__container.appendChild(form__heading);
    comments__container.appendChild(form__text);
    form__text.style.fontFamily = 'Avenir';
    form__text.style.fontSize ='14px';
    form__text.style.padding= '16px';
    form__heading.style.padding= '16px';
     
  }
  

}); 



//posting new comment to axios 

function comments__container (Name, Comment) {
  const commentArray = axios.get('https://project-1-api.herokuapp.com/comments?api_key=api');
  commentArray.then(result => {
    console.log(results.data)
    return results.data 
  })
  .catch(error=> {
    console.log(error)
  })

  const newComment = axios.post('https://project-1-api.herokuapp.com/comments?api_key=api', {
    name: Name,
    comment: Comment
  });
   
  newComment.then(results => {
    console.log(results.data)
    
  })
  .catch(error => {
    console.log(error)
  })

}


axios.get('https://project-1-api.herokuapp.com/showdates?api_key='+ myApiKey.api_key)
  .then(res => console.log(res));

