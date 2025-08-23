$(function () {
    console.log("negro");
    let sum = 0;
    $('.bouton span').each(function () {
        const randomNumber = Math.floor((Math.random() * 4) + 1);
        $(this).text(randomNumber);
        sum += randomNumber;
    });

    $('#total span').text(sum);

    $('.bouton').click(function () {
        compteurTemp = $(this).text();
        if (compteurTemp > 0) {
            $(this).find("span").text(compteurTemp - 1)
            $('#total span').text($('#total span').text() - 1)
        }
        compteurTemp = $(this).text();
        console.log(compteurTemp);
        if (compteurTemp == 0) {
            $(this).attr("class", "vide");
        }
        if ($('#total span').text()==0){
            console.log("negronegro")
            $('#total').attr("class", "vide");
        }
    });
})

