$(document).ready(function(){
    $("#box").scroll(function(){
        console.log("scroll");
    })
    $(window).resize(function(){
        console.log("resize");
    })

    
})