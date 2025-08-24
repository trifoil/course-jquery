$(function () {
    var contenances = new Array(8, 10, 12, 15, 20); // en m³
    var dechets = new Array('planches', 'bricaillons', 'briques', 'carrelages', 'poutres', 'sable', 'contreplaqués');


    $('.conteneur').each(function () {

        let randomizer1 = Math.floor(Math.random() * 5);
        let contenancealeatoire = contenances[randomizer1];
        $(this).next().find(".contenance").text(contenancealeatoire);
        let nombrealeatoirededechets = Math.floor(Math.random() * 5 + 1);
        console.log(nombrealeatoirededechets)
        let arrayleft = dechets;
        let valrandom = 7;
        let contenutot = 0;
        for (i = 0; i < nombrealeatoirededechets; i++) {
            //une fois qu'on prend un type, on le retire de arrayleft. ensuite on diminue la valeur random (pcq il y a moins d'elements dans le tableau)
            let dechetselectionne = arrayleft[Math.floor(Math.random() * valrandom)];
            console.log(dechetselectionne);
            arrayleft = arrayleft.filter(item => item !== dechetselectionne);
            console.log(arrayleft); // ["apple", "banana", "orange"];
            volumedechet = Math.floor(Math.random() * 7 + 1);
            $(this).append('<div class="dechet"><div class="titr"><b>\
                '+ dechetselectionne + '</b></div><div> <span class="cont">' + volumedechet + '</span> m³</div></div>');
            contenutot += volumedechet;
        }
        $(this).next().find(".contenu").text(contenutot)
        if (contenutot > contenancealeatoire) {
            $(this).next().find(".contenu").addClass("trop")
        }
    })

    $(".dechet").click(function () {
        let temp;
        $(this).parent().next().find(".contenu").text(($(this).parent().next().find(".contenu").text() - $(this).find(".cont").text()));
        temp = $(this).find(".cont").text()
        console.log(temp)
        console.log(($(this).parent().next().find(".contenu").text()))
        console.log(parseInt($(this).parent().next().find(".contenance").text()))
        if (parseInt($(this).parent().next().find(".contenu").text()) < parseInt($(this).parent().next().find(".contenance").text())) {
            console.log("caca");
            $(this).parent().next().find(".contenu").removeClass("trop");
        }
        $(this).remove()

    })

})