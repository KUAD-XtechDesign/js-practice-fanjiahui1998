$(function(){
    
   let txt1 ="zaoshanghao!";
   let txt2 ="ogennkidesuka?";
   let num1 =20;
   let num2= 32;


    $("#button01").on("click",function(){
      $("#content").text("HELLO!");

    })

    $("#button02").on("click",function(){
      $("#content").text(txt1);

    })

   
    $("#button03").on("click",function(){
       $("#content").text(txt1+txt2);

    })

    $("#button04").on("click",function(){
        $("#content").text("answer"+num1+num2);
 
    })

    
    $("#button05").on("click",function(){
       $("#content").append(num1+"+"+num2+"="+(num1+num2)+".");


    })
   


});