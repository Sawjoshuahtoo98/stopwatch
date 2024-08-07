window.onload= function(){
    var seconds= 0;
    var tens= 0;
//selector
    var appendTens=document.getElementById("tens");
    var appendSeconds=document.getElementById("seconds");
//selector btn
    var btnStart= document.getElementById("btn-start");
    var btnStop= document.getElementById("btn-stop");
    var btnReset= document.getElementById("btn-reset");
//interval 
    var interval;

    btnStart.onclick=function(){
        clearInterval(interval);
        interval= setInterval(startTimer, 10);
    }

    btnStop.onclick=function(){
        clearInterval(interval);
    }

    btnReset.onclick=function(){
        clearInterval(interval);
        tens="00";
        seconds="00";
        appendTens.innerHTML=tens;
        appendSeconds.innerHTML=seconds;
    }

    function startTimer(){
        tens++;
//plus 1 
        if(tens<=9){
            appendTens.innerHTML="0"+tens;
        }else{
            appendTens.innerHTML=tens;
        }

        if(tens>99){
            seconds++;
            appendSeconds.innerHTML="0"+seconds;
            tens=0;
            appendTens.innerHTML="0"+0;
        }
        if(seconds>9)
            appendSeconds.innerHTML=seconds;
    }
};