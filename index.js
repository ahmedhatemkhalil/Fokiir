$(".our-portfolio li:nth-child(1)").click(function(){
    $(".grid-container>*").css("display","inline-block")
    $(" .our-portfolio button").css("color","#000000")
    $(".our-portfolio li:nth-child(1) button").css("color","#ff305b")

});

$(".our-portfolio li:nth-child(2)").click(function(){
    $(".grid-container>*").css("display","inline-block");
    $(".grid-container>.portfolio-image:nth-child(1)").css("display","none");
    $(".our-portfolio li button").css("color","#000000");
    $(".our-portfolio li:nth-child(2) button").css("color","#ff305b");

});
$(".our-portfolio li:nth-child(3)").click(function(){
    $(".grid-container *").css("display","inline-block");
  $(".portfolio-image:nth-child(3),.portfolio-image:nth-child(6),.portfolio-image:nth-child(2)").css("display","none");  
  $(" .our-portfolio li button ").css("color","#000000");
  $(".our-portfolio li:nth-child(3) button").css("color","#ff305b");
   
});
$(".our-portfolio li:nth-child(4)").click(function(){
    $(".grid-container>*").css("display","none");
    $(".grid-container> .portfolio-image:nth-child(2),.portfolio-image:nth-child(6)").css("display","inline-block");
    $(" .our-portfolio li button ").css("color","#000000");

    $(".our-portfolio li:nth-child(4) button").css("color","#ff305b");

});

