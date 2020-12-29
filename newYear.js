let curYear=new Date().getFullYear();
console.log(curYear);

function refresh(){
    location.reload();
}

//Countdown + Timer
//why constants ? CONSTANTS DONT WORK!!!!
/* const seconds =document.getElementById('seconds');
const minutes =document.getElementById('minutes');
const hours =document.getElementById('hours');
const days =document.getElementById('days'); */
/* let container=document.getElementById('container'); 

let displaySeconds=document.getElementById('seconds');
let displayMinutes=document.getElementById('minutes');
let displayHours=document.getElementById('hours');
let displayDays=document.getElementById('days'); */

let currYear=new Date().getFullYear();//2020
let nextYear=new Date((`January 01 ${currYear +1} 00:00:00`));

//just get a new Date and add +1 year to it

//pridat funkci pro novej rok +counter

function getnewYear(){//Fri Jan 01 2021 00:00:00 GMT+0100
return new Date(`January 01 ${currYear +1} 00:00:00`)
}

//delete this? 
function newYear(){
    return currYear+1
}

//calculate the remaining seconds,minutes...
function timeRemaining(){ 
    let currentTime=new Date().getTime();//getTime()!!!
    let results=getnewYear()-currentTime;//its in miliseconds

    let second=Math.floor(results/1000)%60;   //seconds
    document.getElementById("seconds").innerHTML=second;

    let minute=Math.floor(results/1000/60)%60 //minutes
    document.getElementById("minutes").innerHTML=minute;

    let hour=Math.floor(results/1000/60/60)%24 //hours 
    document.getElementById("hours").innerHTML=hour;

    let day=Math.floor(results/1000/60/60/24)  //days
    document.getElementById("days").innerHTML=day;

}
setInterval(timeRemaining,1000); //updates the clock every second

function play(){ //Check  What Year is it? 
    let ask= prompt("What year is it?");
    if (ask==curYear)
    alert("Wait a bit more..")
    else if (ask==currYear+1)
    alert("Happy New Year! :)")
    else if (ask==2077) //easter egg
    alert("Waiting for Cyberpunk? xD")
    else if (ask>2021)
    alert("You're from the future?")
    else if (ask<2020)
    alert("You´re here too early :(")

    else 
    alert("Wrong date...")
}
function check(){ //Is it 2021 yet button?
    let today= new Date();
    today.getFullYear;
    document.getElementById("check")
    let d=document.createElement("div")
    d.setAttribute("id","newDiv");
    let p=document.createElement("p");
    p.setAttribute("id","newP");
    document.getElementById("check").appendChild(d);
    document.getElementById("newDiv").appendChild(p);
    let t=document.createTextNode("Today is: " +today)
    document.getElementById("newP").appendChild(t);
    let br=document.createElement("br")
    document.getElementById("newP").appendChild(br);
}
function displayTime(){
    
    let clock=new Date();
    let h=clock.getHours();
    let m=clock.getMinutes();
    let s=clock.getSeconds();
    document.getElementById("clock").innerHTML= " " +h+ "h"+":"+m +"m"+":" +s +"s"+" ";
    let i=document.createElement("i");
    i.setAttribute("class","far fa-clock");
    document.getElementById("clock").appendChild(i); //not good looking
}
setInterval(() => {
    displayTime()
}, 1000);
