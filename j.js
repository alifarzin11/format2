//back-to-top
var mybutton = document.getElementById("back-to-top");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




//jquery
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);



$(document).ready(function(){
    $("#shoe").mouseover(function(){
      $("#shoe").html("بزن بریم تمامی محصولات رو ببینیم")
    })

    $("#shoe").mouseleave(function(){
      $("#shoe").html("نمونه هایی از کفش")
    })


    $("#sneakers").mouseover(function(){
      $("#sneakers").html("بزن بریم تمامی محصولات رو ببینیم")
    })

    $("#sneakers").mouseleave(function(){
      $("#sneakers").html("نمونه هایی از کتونی")
    })


    $("#Dress").mouseover(function(){
      $("#Dress").html("بزن بریم تمامی محصولات رو ببینیم")
    })

    $("#Dress").mouseleave(function(){
      $("#Dress").html("نمونه هایی از لباس")
    })


    $("#Bag").mouseover(function(){
      $("#Bag").html("بزن بریم تمامی محصولات رو ببینیم")
    })

    $("#Bag").mouseleave(function(){
      $("#Bag").html("نمونه هایی از کیف")
    })


    $("#Pants").mouseover(function(){
      $("#Pants").html("بزن بریم تمامی محصولات رو ببینیم")
    })

    $("#Pants").mouseleave(function(){
      $("#Pants").html("نمونه هایی از  شلوار ")
    })

    $("#start").click(function(){
      $("body").css("background-color" , "#000000")
      $("#start").click(function(){
        $("body").css("background-color" , "#45b649")
      })
    })

    $("#about-us-t").mouseover(function(){
        $("#about-us-t").html("  بیا تا با هم دیگه بیشتر آشنا بشیم ")
      })
    
      $("#about-us-t").mouseleave(function(){
        $("#about-us-t").html(" درباره ما  ")
    })
    
})






navigator.getBattery()
.then(function (battery){
    var batterylevel= battery.level *100 + "%";
});



window.addEventListener("load",function(){
    if(navigator.onLine){
        console.log(" اتصال برقرار است ");    
    }
    else{
        console.log("اتصال قطع است ");
    }
});
window.addEventListener("offline",function(){
    console.log("اتصال برقرار است ");
});
window.addEventListener("online",function(){
    console.log("اتصال برقرار است ");
});





