$(".saveBtn").on("click", function() {
    var descrip = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id");

    localStorage.setItem(hour, descrip);
});

function hourColorChange() {
    var currentHour = moment().hours();

    if (currentHour > momentHour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if (currentHour === momentHour) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
    }
    else if (currentHour < momentHour) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
};

// get the id of each time-block