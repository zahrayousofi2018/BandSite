
var div = document.createElement('div');
div.className ="concert"

const dataFromServer = [
     {date:'Mon Sept 06 2021', venue: 'Ronald Lane', location:'San Francisco, CA'},
     {date:'Tue Sept 21 2021', venue: 'Pier 3 East', location:'San Francisco, CA'},
     {date:'Fri Oct 15 2021', venue: 'View Lounge', location:'San Francisco, CA'},
     {date:'Sat Nov 06 2021', venue: 'Hyatt Agency', location:'San Francisco, CA'},
     {date:'Fri Nov 26 2021', venue: 'Moscow Center', location:'San Francisco, CA'},
     {date:'Wed Dep 15 2021', venue: 'Press Club', location:'San Francisco, CA'},
]

const columnFirst = document.querySelector('#column-first');
const columnSecond = document.querySelector('#column-second');
const columnThird = document.querySelector('#column-third');
const columnFourth = document.querySelector('#column-fourth')


dataFromServer.forEach((object)=> { 
    let row = document.createElement('div');
    row.classList.add('dataRow')
    let dateData = document.createElement('p');
    dateData.innerText= object.date;
    dateData.classList.add('date_list')
    row.appendChild(dateData)
    columnFirst.appendChild(dateData);


    let venueData = document.createElement('p');
    venueData.innerText=object.venue;
    venueData.classList.add('venue_list')
    row.appendChild(venueData)
    columnSecond.appendChild(venueData);

    let locationData = document.createElement('p');
    locationData.innerText=object.location;
    locationData.classList.add('location_list')
    row.appendChild(locationData)
    columnThird.appendChild(locationData);

    let ticketButton = document.createElement('button');
    ticketButton.innerText='Buy Ticket';
    ticketButton.classList.add('ticket_button')
    columnFourth.appendChild(ticketButton);
})

var container = document.getElementById('container');
container.appendChild(div);
container.appendChild(row);





axios.get('https://project-1-api.herokuapp.com/showdates?api_key='+ myApiKey.api_key)
  .then(res => console.log(res));



