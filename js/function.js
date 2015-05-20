$(document).ready(function(){

/* Use enter to add an item */
    $('#add-items').keyup(function(event){
        if(event.keyCode == 13) {
            event.preventDefault();
            $('#Enter').click();
        };
    }); 

/* Add list items */
    $('#Enter').click(function(){
        var txtbox = document.getElementById('add-items');
        var txtval = txtbox.value;
        event.preventDefault();

        if(!$.trim($('#add-items').val())) {
            alert('You need to enter a text to add an item');
        } else {
            $('<li class="items"></li>').appendTo('#unordered-list').html('<div class="box"></div><span>' + txtval + '</span><img class="delete" src="images/delete.png"/>');

        document.getElementById('add-items').value = '';
        };
    });

/* Delete list items */
    $('#unordered-list').on('click', '.delete', function(e){e.preventDefault(); $(this).parent().remove()});

/* Cross off list items */
    $('#unordered-list').on('click', 'li', function(){$(this).toggleClass('strike'); $(this).children('.box').toggleClass('Checked');});
    
/* Show delete button on mouse hover */
    $('#unordered-list').on('mouseenter', 'li', function(){$(this).children('.delete').toggleClass('show');});
    $('#unordered-list').on('mouseleave', 'li', function(){$(this).children('.delete').toggleClass('show');});

});