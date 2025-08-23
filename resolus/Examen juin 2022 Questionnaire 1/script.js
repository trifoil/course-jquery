$(function(){
    let total = 0;
    $('.bouton').each(function(){   // cycle through all .bouton elements
        let valeatoire = Math.floor(Math.random()*3+1);
        if ($(this).find('.prix').hasClass('cher')){  //on cherche ce qui est a l'intérieur, avec la classe prix, et on check si il a la classe cher.
            valeatoire+=3;
        }
        $(this).find('.prix span').text(valeatoire);


    })
    $(".bouton").click(function(){
        console.log($(this).find(".nom").html());
        $("#main").append('<div class="article"><img src="png/'+$(this).find(".nom").text()+'.png" style="width: 32px;" alt="" ></div>');
    
        console.log($(this).find(".prix").text());
        
        total += parseInt($(this).find(".prix").text().slice(0,-2))
        console.log(total)
        $('footer').text(total+' €')
    })

    $('.boutonOK').click(function(){
        console.log("ntm")
        $('footer').addClass("off")
        $(".bouton").off('click')
    })

})
