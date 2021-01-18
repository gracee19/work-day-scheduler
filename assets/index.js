$(document).ready(function () {
    var events = [];

    //Set current date in the Jumbotron class
    var cDate = $('#currentDay');

    //Saving event in the local storage 
    var events = JSON.parse(localStorage.getItem("events")) || [];
    var checkStorage = localStorage.getItem("events");

    $(".saveBtn").on('click',function() {
        $('.time-block').each(function() {
        var term = $('.time-block').data('id');
        alert(term);
        });
        
    });
    //Creating a row inside a loop
    for (var i = 0; i < 24; i++) {



        // Check and apply local storage
        if (checkStorage == null) {

            events.push({ eventId: i });
            localStorage.setItem('events', JSON.stringify(events));

        };
        

        // Create Grid - Event
        var eventDescCol = $('<div class="description col-8">');
        eventDescCol.attr('data-time', clockIn);

        // Set Timeframe Class
        if (moment(clockIn).isBefore(now)) {
            eventDescCol.addClass('past');
        } else if (moment(clockIn).isSame(now)) {
            eventDescCol.addClass('present');
        } else if (moment(clockIn).isAfter(now)) {
            eventDescCol.addClass('future');
        };
    };

    //Display the current date in the screen
  cDate.text(moment().format("dddd, MMMM Do YYYY"));
});  
