let[seconds, minutes, hours]=[0,0,0];
let displytime = document.getElementById("displytime");
let timer=null;

function stopwatch() {
    seconds++;
    if(seconds == 60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    let h=hours<10?"0"+hours:hours;
    let m=minutes<10?"0"+minutes:minutes;
    let s=seconds<10?"0"+seconds:seconds;

    displytime.innerHTML=h+":"+m+":"+s;
}
function watchStart(){
    if(timer!==null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatch,1000);
}

function watchStop(){
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours]=[0,0,0];
    displytime.innerHTML="000:00:00";
}