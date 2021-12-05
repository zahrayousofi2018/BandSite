
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
container.appendChild(row)

/*
var div = document.createElement('div');
div.className ="concert"

var header_date = document.createElement('header_date');
header_date.textContent = 'DATE';
div.appendChild(header_date);

let DATE =['Mon Sept 06 2021', 'Tue Sept 21 2021', 'Fri Oct 15, 2021', 'Sat Nov 06 2021', 'Fri Nov 26 2021', 'Wed Dec 15 2021'];

DATE.forEach((DATE)=> {
    let p = document.createElement('p');
    p.innerText=DATE;
    p.classList.add('date_list')
    div.appendChild(p)
})

console.log(div);

var container = document.getElementById('container');
container.appendChild(div);

/*---VENUE--*/
/*
var header_venue = document.createElement('header_venue');
header_venue.textContent = 'VENUE';
div.appendChild(header_venue);

let VENUE = ['Ronald Lane', 'Pier 3 East', 'View Lounge', 'Hyatt Agency', 'Moscow Center', 'Press Club'];

 VENUE.forEach((VENUE)=> {
     let p = document.createElement('p');
     p.innerText=VENUE;
     p.classList.add('venue_list')
     div.appendChild(p)
 })

 console.log(div);

 var container = document.getElementById('container');
 container.appendChild(div);

/*---Location---*/
/*
var header_location = document.createElement('header_location');
header_location.textContent = 'LOCATION';

let LOCATION = ['San Francisco, CA', 'San Francisco, CA', 'San Francisco, CA', 'San Francisco, CA', 'San Francisco, CA', 'San Francisco, CA'];
console.log(LOCATION);

LOCATION.forEach((LOCATION)=> {
    let p = document.createElement('p');
    p.classList.add('location_list')
    p.innerText=LOCATION;
    div.appendChild(p)
})

div.appendChild(p);
console.log(div);

var container = document.getElementById('container');
container.appendChild(div);

*/



