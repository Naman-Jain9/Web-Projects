window.onload = function(){


let buttonstart= document.querySelector('#butstart');
let buttonstop= document.querySelector('#butstop');
let buttonreset= document.querySelector('#butreset');

let appendSeconds= document.querySelector('#seconds');
let appendTens= document.querySelector('#tens');

let interval;
let seconds=0;  //global variable
let tens=0;

buttonstart.onclick = ()=>{
    interval = setInterval(startTimer , 10);
}

buttonstop.onclick = ()=>{
    this.clearInterval(interval);
}

buttonreset.onclick =() =>{
    this.clearInterval(interval);
    tens=0;
    seconds=0;
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML=seconds;
}

function startTimer(){
    tens++;

    tens < 9 ? appendTens.innerHTML= '0' +tens: appendTens.innerHTML= tens;

    if(tens>99){
        seconds++;
        appendSeconds.innerHTML = '0'+ seconds;
        tens=0;
        appendTens.innerHTML='0'+ 0 ;
    }
    if(seconds > 9)
    {
        appendSeconds.innerHTML= seconds;
    }
   
}

}