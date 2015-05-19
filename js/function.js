$(document).ready(function () {

    console.log('Welcome to console');
    var submissions = 0;
    var checkMark = '<span class="cross-off"></span>'
    var xMark = '<span class="delete"></span>'

    function getItem() {
        $('#add-items').keydown(function (enter) {
            if (enter.keyCode == 13) {
                postItem();
            }
        });
    }

    getItem();

    function postItem() {
        var item = $('#add-items').val();
        var work = '<p class="full-width no-strikethrough">'+ xMark + item + checkMark + '</p>';
        $('#list-area').prepend(work);
        $('#add-items').val('');
        $('#list-area p:first-child')
        .css("margin-top", "-10px")
        .animate(
            { queue: true, duration: 'slow' }
        )
        .animate(
            {marginTop: "0px"},
            { queue: false, duration: 'slow' }
        );
    }

    function crossOff(){
        $('.cross-off').toggle(function () {
            $(this).closest('p').addClass("strikethrough");
            console.log("Stricken")
        }, function () {
            $(this).closest('p').removeClass("active");
        });
    }
});

$(document).on("click", "#startover", function(){
    $("#list-area").empty();
    submissions = 0;
});

$(document).on("click", ".delete", function(){
    $(this).closest('p').fadeOut(500);
});

$(document).on("click", ".cross-off", function(){
    if (!$(this).closest('p').hasClass('strikethrough')) {
        console.log("I am going to add a strikethrough");
        $(this).closest('p').addClass("strikethrough");
        $(this).siblings('.delete').addClass("alt-delete");
        $(this).addClass("alt-cross-off");
   }
   else {
        console.log("I am going to remove a strikethrough");
        $(this).closest('p').removeClass("strikethrough");
        $(this).siblings('.delete').removeClass("alt-delete");
        $(this).removeClass("alt-cross-off");
   }
});