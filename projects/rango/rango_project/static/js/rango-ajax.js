$(document).ready(function(){
    // JQuery code to be added in here.
    $('#likes').click(function(){
    var catid;
    catid = $(this).attr("data-catid");
     $.get('/rango/like_category/', {category_id: catid}, function(data){
               $('#like_count').html(data);
               $('#likes').hide();
           });
    
});
});
