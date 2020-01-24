
// alert("connectdfsdfdsfsdfsded");

var level = 6;

var easy =document.querySelector("#easy");
var hard =document.querySelector("#hard");

easy.addEventListener("click",
function()
{
    this.style.backgroundColor="#a2f525";
    this.style.color="black";
    hard.style.backgroundColor="transparent";
    level=3;
    new_game();
}
);

hard.addEventListener("click",
function()
{
    this.style.backgroundColor="#a2f525";
    this.style.color="black";
    easy.style.backgroundColor="transparent";
    level=6;
    new_game();
}
);


var game_end = false ;

var colors = [];
for(var i=0;i<level;i++)
{
    colors.push(color_string());
}

var try_correct = document.querySelector("#try");
var boxes = document.querySelectorAll(".tab");

// initial color assign -------------------------

for(var i=0;i<boxes.length;i++)
{
    boxes[i].style.backgroundColor=colors[i];
}

// -----------------------------------------------

win_color = random_color();
document.querySelector("#color_display").textContent=win_color;

// new button click ++++++++++++++++++++++++++++++++++++++

var new_button = document.querySelector("#new_color");
new_button.addEventListener("click",new_game);

if(game_end===true)
{
 new_button.textContent="Play again";   
}

function new_game()
{
    colors=[];
    for(var i=0;i<level;i++)
    {
    colors.push(color_string());
    }

    new_button.textContent="New colors";

    if(level==3)
    {
        for(var i=3;i<6;i++)
        {
            boxes[i].style.backgroundColor="black";
        }
    }

    win_color = random_color();
    document.querySelector("#color_display").textContent=win_color;
    document.querySelector("#h").style.backgroundColor="#a2f525";
    var x="";

    try_correct.textContent="";

    for(var i=0;i<level;i++){
        boxes[i].style.backgroundColor=colors[i];
    }
    game_end=false;
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// choosing color *****************************************
var x="";
for(var i=0;i<boxes.length;i++)
{
    if(game_end===false)
    {
        boxes[i].addEventListener("click",
        function()
        {
            x= this.style.backgroundColor;
            if(x === win_color ){
            try_correct.textContent="Correct!!";
            changecolor(x);
            game_end=true;
            new_button.innerHTML="Play again";
            }
            else{
                this.style.backgroundColor="black";
                try_correct.textContent="Try again"
            }
        }
        );
    }
}

//  ****************************************************

// end of the game color change -----------------------

function changecolor (win)
{
    for(var i=0;i<level;i++)
    {
        boxes[i].style.backgroundColor=win;
    }
    document.querySelector("#h").style.backgroundColor = win;
}  

//  ----------------------------------------------------------

// random color picker +++++++++++++++++++++++++++++++++++++++++

function random_color()
{
    var i = Math.floor( Math.random()*colors.length);
    return colors[i];
}

//  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// grenration of random color ***************************

function color_string()
{
    var r = Math.floor(Math.random()*(256));
    var g = Math.floor(Math.random()*(256));
    var b = Math.floor(Math.random()*(256));
                    // "rgb(255, 0, 0)"
    return  "rgb(" + r +", " + g + ", " + b+ ")" ;
}

//  ******************************************************
