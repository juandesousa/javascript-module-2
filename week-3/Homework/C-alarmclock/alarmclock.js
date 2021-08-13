let intervalID;

function setAlarm() {
  let alarmSet = document.getElementById('alarmSet').value;
  const timeRemaining = document.getElementById('timeRemaining');
  const body = document.querySelector('body');

  clearInterval(intervalID)
  body.style.background = 'white';
  pauseAlarm();

  intervalID = setInterval(()=>{
  
    if(alarmSet===0){
      timeRemaining.innerText = `Time Remaining: 00:0${alarmSet}`;
      body.style.background = 'tomato';
      playAlarm();
      clearInterval(intervalID)
    }else if(alarmSet>9){
      alarmSet = 9;
      timeRemaining.innerText = `Time Remaining: 00:0${alarmSet}`;
      alarmSet --
    }else{
      timeRemaining.innerText = `Time Remaining: 00:0${alarmSet}`;
      alarmSet --
    }

  },1000)

}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
