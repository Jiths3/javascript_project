document.addEventListener('DOMContentLoaded', function() {
    // Initialize the calendar
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // Start with month view
        height: 'auto',
        dateClick: function(info) {
            alert('Date: ' + info.dateStr); // Display the selected date
            // Here you can add logic to display tasks for the selected date
        }
    });
    calendar.render(); // Render the calendar
});