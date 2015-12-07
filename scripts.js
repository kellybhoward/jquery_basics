$(document).ready(function(){
    $(".addClass").click(function(){
        $("#unjustifiedDefault").addClass("redJustified");
    })
    $(".removeClass").click(function(){
        $("#unjustifiedDefault").removeClass();
    })
    $("#addClasswFunction").click(function(){
        $("#content ol li").addClass(function(index){
            return "item-" + index;
        })
    })
    $(".removeClasswFunction").click(function(){
        $("#classwFunction li").removeClass();
    })
    $(".afterBox").click(function(){
        $( "#afterBox" ).after( "<div class='newBox'></div>" );
    })
    $(".removeBox").click(function(){
        $( "div" ).remove( ".newBox:last-child" );
    })
    $(".appendP").click(function(){
        $( "#append p" ).append( "<span>This is an appended message!</span>" );
    })
    $(".removeAppend").click(function(){
        $( "#append p span" ).remove();
    })
    $(".biggerAttr").click(function(){
        $("img").attr("width", "200");
    });
    $(".smallerAttr").click(function(){
        $("img").attr("width", "100");
    });
    $("#before").click(function(){
        $(".beforeExample").before("<p class='removeParagraph'>This is a new paragraph!</p>");
    });
    $("#removeParagraph").click(function(){
        $( "p" ).remove( ".removeParagraph" );
    })
    $("#changeToImg").click(function(){
        $( ".secretAnimal" ).html( "<img src='https://c1.staticflickr.com/7/6020/5955648171_6b4e131134_b.jpg' alt='No Photo' width='300'>" );
    })
    $("#changeToText").click(function(){
        $( ".secretAnimal" ).html( '<h4>Hello World!</h4>' );
    })
    $("#changeTextFrench").click(function(){
        $( "#textChange h4" ).text( "Bonjour le Monde!" );
    })
    $("#changeTextEnglish").click(function(){
        $( "#textChange h4" ).text( "Hello World!" );
    })
    $("#changeToTurtle").click(function(){
        $( "#sampleValueChange" ).val( "Turtle" );
    })
    $("#changeToSkunk").click(function(){
        $( "#sampleValueChange" ).val( "Skunk" );
    })
    $("#toggleP").click(function(){
        $( ".toggleP" ).toggle();
    })
    $("#hideP").click(function(){
        $( ".hideShow" ).hide();
    })
    $("#showP").click(function(){
        $( ".hideShow" ).show();
    })
    $("#slideToggleP").click(function(){
        $( ".slideToggleP" ).slideToggle();
    })
    $("#slideUpP").click(function(){
        $( ".slideUpDown" ).slideUp();
    })
    $("#slideDownP").click(function(){
        $( ".slideUpDown" ).slideDown();
    })
    $("#fadeOutP").click(function(){
        $( ".fadeOutIn" ).fadeOut();
    })
    $("#fadeInP").click(function(){
        $( ".fadeOutIn" ).fadeIn();
    })
    $(".focus input").focus(function(){
        $( this ).next("span").css("display", "inline").fadeOut(1000);
    });
    $("#clickDemo").click(function(){
        alert("The Button Was Clicked!");
    });
});
