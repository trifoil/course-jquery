$(function(){

console.log("test");
 
//boucler 81 fois
for (let i=0; i<81; i++){
    //a chaque fois on prend un random entre 1 et 7 (inclus) et on le multiplie par un autre
    let j = (Math.floor((Math.random()*7)+1))*(Math.floor((Math.random()*7)+1));
    //on append une div à l'id grille pour chaque itération. la div a la classe case et le texte est la valeur entre 1 et 7
    $("#grille").append('<div class="case">'+j+'</div>');
    console.log(j);
}

// a chaque fois que la souris entre sur une case
$(".case").mouseenter(function(){
    // on stocke la valeur de la case
    let valeuractuelle = $(this).text();

    $('.case').filter(function() {
            return $(this).text() === valeuractuelle;
    }).addClass('moiaussi');
    // retirer tous les voyants allumés précédemment 
    $('.voyant').removeClass('vert');
    // initialisation du nb de voyants allumés
    let nombredevoyants=0;
    // allumer les bons voyants
    if((valeuractuelle%2)==0){
        $('#div2').addClass('vert');
        nombredevoyants+=1;
    }
    if((valeuractuelle%3)==0){
        $('#div3').addClass('vert');
        nombredevoyants+=1;
    }
    if((valeuractuelle%5)==0){
        $('#div5').addClass('vert');
        nombredevoyants+=1;
    }
    if((valeuractuelle%7)==0){
        $('#div7').addClass('vert');
        nombredevoyants+=1;
    }
    // afficher le nombre total de voyants
    $('#nb').text(nombredevoyants)
    $('#metre').stop(true, false)
    switch(nombredevoyants){
        case 0:
            //$('#metre').css('width','25%');
            $('#metre').animate({width:'0%'},500);
        break;
        case 1:
            //$('#metre').css('width','25%');
            $('#metre').animate({width:'25%'},500);
            break;
        case 2:
            //$('#metre').css('width','50%');
            $('#metre').animate({width:'50%'},500);            
            break;
        case 3: 
            //$('#metre').css('width','75%');    
            $('#metre').animate({width:'75%'},500);
            break;
    }
    // console.log(valeuractuelle);
})
// a chaque fois que la souris sort d'une case
$(".case").mouseleave(function(){
    // initialisation du nb de voyants allumés
    let nombredevoyants=0;
    // trucomètre sans animation
    //$('#metre').css('width','0%');
    // trucomètre avec animation
    $('#metre').animate({width:'0%'},500);
    $('#nb').text(nombredevoyants);
    $('.voyant').removeClass('vert');
    $('.case').removeClass('moiaussi');
})

})