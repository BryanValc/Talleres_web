$(document).ready(function(){
    $("#btn1").click(function(){
        $("#div1").hide(700);
    });
    $("#btn2").click(function(){
        $("#div1").show(700);
    });

    $("#btn3").click(function(){
        $("#div1").fadeOut(900);
    });
    $("#btn4").click(function(){
        $("#div1").fadeIn(900);
    });
 
});