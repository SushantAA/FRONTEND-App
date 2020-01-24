var game = true;
var com = false;
var hum = false;
var tie = false;

var arr = []; 

// box click +++++++++++++++++++++++++++++++++++++++++++

var box = document.querySelectorAll(".box");
for(var i=0;i<9;i++)
{
    box[i].addEventListener("click",function(){
        if(this.style.backgroundColor==""  &&  game===true ){
                game_check();
                this.style.backgroundColor="yellow";
                this.innerHTML="0";
                computer_turn();
        }
        if(this.style.backgroundColor=="rgb(50, 222, 44)"  && game===true)
        {
            game_check();
            this.style.backgroundColor="yellow";
            this.innerHTML="0";
            computer_turn();
        }
    }
        );
}


// computer turn ++++++++++++++++++++++++++++++++++++++++++
function computer_turn(){

    game_check();
    game_over();
    if(game===false){
        return ;
    }

    for(var i=0;i<9;i++){
    var x = Math.floor(Math.random()*9);
    if(arr.indexOf(x)==-1 && box[x].style.backgroundColor!="yellow" ){
        box[x].style.backgroundColor="red";
        box[x].innerHTML="X";
        arr.push(x);
        game_check();
        break;
    }}
console.log(x);
}

// game win check +++++++++++++++++++++++++++++++++++++++++++++

function game_check(){

// if human win ********
for(var i=0;i<3;i++)
{
    if(box[3*i].style.backgroundColor=="yellow" && box[3*i+1].style.backgroundColor=="yellow" &&  box[3*i+2].style.backgroundColor=="yellow")
    {
        game = false;
        hum = true;
    }
    if(box[i].style.backgroundColor=="yellow" && box[3+i].style.backgroundColor=="yellow" &&  box[6+i].style.backgroundColor=="yellow")
    {
        game = false;
        hum = true;
    }
}
if(box[0].style.backgroundColor=="yellow" && box[4].style.backgroundColor=="yellow" &&  box[8].style.backgroundColor=="yellow")
{
    game = false;
    hum = true;
} 
if(box[2].style.backgroundColor=="yellow" && box[4].style.backgroundColor=="yellow" &&  box[6].style.backgroundColor=="yellow")
{
    game = false;
    hum = true;
}

 
// if computer win  *********

for(var i=0;i<3;i++)
{
    if(arr.indexOf(3*i)!=-1 && arr.indexOf(3*i+1)!=-1 && arr.indexOf(3*i+2)!=-1){
        game = false;
        com=true;
    }
    if(arr.indexOf(i)!=-1 && arr.indexOf(3+i)!=-1 && arr.indexOf(6+i)!=-1){
        game = false;
        com=true;
    }
}
if(arr.indexOf(0)!=-1 && arr.indexOf(4)!=-1 && arr.indexOf(8)!=-1)
{
    game = false;
    com=true;
} 
if(arr.indexOf(2)!=-1 && arr.indexOf(4)!=-1 && arr.indexOf(6)!=-1)
{
    game = false;
    com=true;
}


// winner diclaration *********

if(hum===true)
{
    game=false;

    document.querySelector(".jumbotron").style.backgroundColor="yellow";

    document.querySelector("#comment").innerHTML=" You Win ";
    document.querySelectorAll("#rip").innerHTML="Play Again";

    return ;
}
if(com===true)
{
    game=false;

    document.querySelector(".jumbotron").style.backgroundColor="red";

    document.querySelector("#comment").innerHTML=" You Lose ";
    document.querySelectorAll("#rip").innerHTML="Play Again";
}

}


// Game termination +++++++++++++++++++++++
function game_over()
{
    var temp =[];
    for(var i=0;i<arr.length;i++)
    {
        temp.push(arr[i]);
    }
    for(var i=0;i<9;i++)
    {
        if(box[i].style.backgroundColor=="yellow")
        {
            temp.push(i);
        }
    }

    for(var i=0;i<9;i++){
        if(temp.indexOf(i)==-1)
        {
            return ;
        }
    }
    game=false;
    tie=true;
    if(tie===true)
    {
        document.querySelector("#comment").innerHTML=" Tie ";
        document.querySelectorAll("#rip").innerHTML="Play Again";
    }
}

if(tie===true)
    {
        document.querySelector("#comment").innerHTML=" Tie ";
        document.querySelectorAll("#rip").innerHTML="Play Again";
    }


// play again ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var play_again = document.querySelector("#rip");
play_again.addEventListener("click",function(){
    game = true;
    com = false;
    hum = false;
    tie = false;
    document.querySelector(".jumbotron").style.backgroundColor="#b319ff";
    document.querySelector("#comment").innerHTML="";
    for(var i=0;i<=arr.length;i++)
    {
        arr.pop();
    }
    for(var i=0;i<9;i++)
    {
        box[i].style.backgroundColor="#32de2c";
        box[i].innerHTML="";
    }
    console.log(game);
});

