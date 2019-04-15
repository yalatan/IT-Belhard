(function ($) {
    $(document).ready(function () {
$('.links').on('click', function(res){
    res.preventDefault();
    console.log($(this).attr('href'));

});
////////////////////////////////////////
$( document ).mousemove(function( event){ 
   
  var x =  event.pageX;
  var y =  event.pageY;
    $('.move').animate({
        
        top: `${y}px`,
        left: `${x}px`
    }, 10);

});     
/////////////////////////////////////////
$(".scroll").click(function(){
    console.log($(this).attr('href'));
    var a = $(this).attr('href').slice(1);
    console.log(a);
    $(`.${a}`).scrollTop(50);
    
    });
    

///////////////////////////////////////////
    });
})(jQuery);