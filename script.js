// Render the calendar

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the calendar
    var calendarEl = document.getElementById('calendar');
    
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // Start with month view
        height: 'auto',
        dateClick: function(info) {
            alert('Date: ' + info.dateStr); // Display the selected date
            // Here you can add logic to display tasks for the selected date
        },
        myCustomButton: {
            text: 'custom!',
            click: function() {
              alert('clicked the custom button!');
            }
          },
          headerToolbar: {
            
            center: '  myCustomButton',
            
          }
        
        
    });
    
    calendar.render(); 
});
    


// storing the habits 

var habitsarray = [];


document.addEventListener('DOMContentLoaded', function() {
var habitsarray = [];
     
let habitform = document.getElementById("habit-form");



habitform.addEventListener('submit', function(event){

event.preventDefault();

let habit1 = document.getElementById("habit1").value; 
let habit2 = document.getElementById("habit2").value; 
let habit3 = document.getElementById("habit3").value;
let habit4 = document.getElementById("habit4").value; 
let habit5 = document.getElementById("habit5").value; 

habitsarray.push(habit1);
habitsarray.push(habit2);
habitsarray.push(habit3);
habitsarray.push(habit4);
habitsarray.push(habit5);

let habitstring = JSON.stringify(habitsarray);

localStorage.setItem('habits',habitstring);

localStorage.getItem('habits');

console.log(localStorage.getItem('habits'));


// let habitsunstring = JSON.parse(localStorage.getItem("habits"));
// const retrievedHabits = [];
// retrievedHabits.push(habitsunstring);
// console.log(retrievedHabits);
// let habitone = retrievedHabits[0] ;

// let main = document.getElementById("firsthabit");

// main.innerHTML = habitone;
// // console.log(habitsarray);
})});



      

// let habitsunstring = JSON.parse(localStorage.getItem("habits"));
// let retrievedHabits = [];
// retrievedHabits.push(habitsunstring);
// firsthabit.innerHTML += retrievedHabits;