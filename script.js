
const recorder = document.querySelector(".recorder") 
const startButton= document.querySelector(".start")
const resetButton= document.querySelector(".reset")
const icon = document.querySelector("#start-pause-button")
icon.className = "fa-regular fa-circle-play fa-6x text-success m-5 "
let[minutes,seconds,milliseconds] = [0,0,0];
let ms = 00
let s = 00
let m = 00
let interval ;
const lap = document.querySelector(".lap")
let number = 0

startButton.onclick=()=>{
    
    if(icon.className=="fa-regular fa-circle-play fa-6x text-success m-5"){
        icon.className="fa-regular fa-circle-pause fa-6x text-warning m-5"
        interval =  setInterval(counter,10)
        
    }else{
        icon.className="fa-regular fa-circle-play fa-6x text-success m-5";
        clearInterval(interval);
        number ++ 
        if(number>1){
        lap.innerHTML += 
        `
        <table class="table table-dark">

       <tbody>
            <tr>
                <th scope="row">Lap ${number-1}</th>
                <td>${m} : ${s} : ${ms} </td>
        </table>
        `
    }



        

    }
}

const counter=()=>{
    milliseconds ++

    if(milliseconds < 10){
    ms = "0" + milliseconds
    
}


    else if(milliseconds>9){
    ms = milliseconds
    
    if(milliseconds>99){
    seconds ++;
    milliseconds = 0;
    ms = "0" + 0;
    if(seconds<10){
        s = "0" + seconds;
    }else if(seconds>9){
    s = seconds
    
    if(seconds>59){
    minutes ++ ;
    m = "0" + minutes;
    seconds = 0;
    s = "0" + 0
    
    
}
}
    }   
}
   
    
    
updateScreen();

}

updateScreen=()=>{
    recorder.innerHTML=
    `
    ${m}:${s}:${ms}
    `
}

resetButton.onclick=()=>{
[minutes,seconds,milliseconds] = [0,0,0];
ms = 00
s = 00
m = 00

lap.innerHTML = ""

updateScreen();
}