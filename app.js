$('input[type="submit"]').on('click',function(event){
    event.preventDefault();
    $('#ratings').append(`<div>Movie:${$('input[type="text"]').val()} Rating:${$('input[type="text"]').val()} <input class="delete" type="button" value="Delete"/></div>`);
    $('.delete').last().on('click',function(){
        $(this).parent().remove();
    });
})