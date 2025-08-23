
source :
https://www.w3schools.com/jquery/exercise_jq.asp?filename=exercise_jq_dom_add1

### events
* click
* dblclick
* mouseenter
* keypress
    ```js
    $("input").keypress(function(){
    ```
* click event handler 
    ```js
    $("").on(, function(){
        $(this).hide();
    });
    ```

### hide & show
* hide slow
    ```js
    $("p").click(function(){
        $(this).hide("slow");
    });
    ```
* show 
    ```js
    $("p").click(function(){
        $(this).show();
    });
    ```
* toggle
    ```js
    $("button").click(function(){
        $("p").toggle();
    });
    ```

### fade
* fadeout
    ```js
    $("div").fadeOut();
    ```
* fadeout slow
    ```js
    $("div").fadeOut("slow");
    ```

* fadeout slow
    ```js
    $(this).fadeTo("slow", 0.2);
    ```

* fade toggle 
    ```js
    $("div").fadeToggle(1000);
    ```

### slide
* slide up 
    ```js
    $("div").slideUp();
    ```

* slide up slow
    ```js
    $("div").slideUp("slow");
    ```

* slide down 
    ```js
    $("div").slideUp();
    ```

* slide toggle
    ```js
    $("div").slideToggle();
    ```

### animate

* move 250px right
    ```js
    $("div").animate({left: '250px'});
    ```

* move 250px right
    ```js
    $("div").animate({height: '500px'});
    ```
* opacity: 0.4, height: 500px, width: 500px
    ```js
    $("div").animate({
     opacity : '0.4',
     height : '500px',
     width : '500px'
    });
    ``` 

* animate set fontsize
    ```js
    $("div").animate({fontSize: '100px'}, "slow");
    ```

### stop

* stop the animation effect of a div element
    ```js
    $("div").stop();
    ```

### get

* return text content
    ```js
    $("div").text();
    ```

* return html content
    ```js
    $("div").html();
    ```

* return value of input field
    ```js
    $("input").val();
    ```

* method to return the URL address of a link.
    ```js
    $("a").("href");    
    ```

### set
* change text of div to "hello"
    ```js
    $("div").text("hello");
    ```

* change the value of an input field 
    ```js
    $("input").val("John Doe");
    ```

* change the value of an image's src attribute to "myimage.jpg"
    ```js
    $("img").attr("src", "myimage.jpg");
    ```
* change value of a links' attributes
    ```js
    $("#myLink").text("Demo");
    $("#myLink").attr("href", "https://www.demo.com");
    ```

### add

* append yes to the end of a p
    ```js
    $("p").append("YES!");
    ```

* at the beginning
    ```js
    $("p").prepend("YES!");
    ```

### remove

* remove a div element.
    ```js
    $("div").remove();
    ```

* only remove the child elements of a div element
    ```js
    $("div").empty();
    ```
* remove all div elements with class="test" and class="demo"
    ```js
    $("div").remove(".test, .demo");
    ```


$(function(){
    //console.log("hello");
    var formes = new Array("triangle", "cercle", "carré", "pentagone", "trapèze", "parallélogramme", "losange", "octogone");
    var randomFormeArrayNumber = Math.floor(Math.random() * 8);
    var className = formes[randomFormeArrayNumber]
    //console.log(randomFormeArrayNumber);
    //console.log(formes[randomFormeArrayNumber]);
    $("#laforme").text(formes[randomFormeArrayNumber] + "s");
    var randomRequiredForme = Math.floor(Math.random() * 8);
    console.log(randomRequiredForme)
    var nbreDeFormesATrouver = 1;
    var nbredeformesCorrectementCliquees = 0;
    for(i = 0; i<8; i++){
        if(i==randomRequiredForme){
            $(".ligne").append("<div class=\"forme " + formes[randomFormeArrayNumber] + "\"></div>");
            console.log("merde");
        } else{
            var randomFormArrayNumber2Display = Math.floor(Math.random() * 8);
            $(".ligne").append("<div class=\"forme " + formes[randomFormArrayNumber2Display] + "\"></div>");
            console.log("caca");
            if (formes[randomFormArrayNumber2Display] == formes[randomFormeArrayNumber]){
                nbreDeFormesATrouver +=1;
            };
        };
    };
    console.log(nbreDeFormesATrouver);
    $(".forme").click(function(){
        console.log("fuck u");
        if($(this).hasClass(className)){
            console.log("prout");
            $(this).addClass("goodjob");
            nbredeformesCorrectementCliquees += 1;
        }else{
            $(this).addClass("badjob");
        }
    });
    if (nbreDeFormesATrouver == nbredeformesCorrectementCliquees){
        
    }
        
});
