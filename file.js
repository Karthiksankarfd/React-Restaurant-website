$(document).ready(function(){


    $("#smoothcontact").click(function(event){
        event.preventDefault();
        $("html,body").animate({
            scrollTop:$($.attr(this,"href")).offset().top
        },1500)
    }) 
    $("#smoothabout").click(function(event){
        event.preventDefault();
        $("html,body").animate({
            scrollTop:$($.attr(this,"href")).offset().top
        },1500)
    })

    $("#smoothmenu").click(function(event){
        event.preventDefault();
        $("html,body").animate({
            scrollTop:$($.attr(this,"href")).offset().top
        },1500)
    })

    $("#smoothrecipes").click(function(event){
        event.preventDefault();
        $("html,body").animate({
            scrollTop:$($.attr(this,"href")).offset().top
        },1500)
    })

    $("#smoothservice").click(function(event){
        event.preventDefault();
        $("html,body").animate({
            scrollTop:$($.attr(this,"href")).offset().top
        },1500)
    })

    
     
    })


    $(document).ready(function(){ 

        $("#styleletter").slideUp()
        $("#styleletter").slideDown(4000)
        // $("#about-bg").slideUp()
        // $("#about-bg").slideDown(1000)
        // $("#inner_bg_content").slideUp()
        // $("#inner_bg_content").slideDown(2000)
        // $("#logoslide").slideUp()
        // $("#logoslide").slideDown(1000)

    
     })