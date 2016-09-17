
var elem = document.getElementById('range'),
    target = document.getElementById('output'),
    button_text = document.getElementById('button'),
    minute = null,
    second = null,
    num = null,
    button_flag = true,
    interval_timer,
    audioElem;


//count timer interval per 1 second
var interval = function(){
  interval_timer = setInterval(function(){
    countTimer();
    if(minute ==0 && second==0){
      onButtonClick();
    }
  },1000);
}

function PlaySound(){
  audioElem = new Audio();
  audioElem.src = "sounds/bell_ring.mp3";
  audioElem.play();
}

//slider bar
var rangeValue = function(){
  var newValue = elem.value;
  num = Number(newValue);
  minute = parseInt(num/60);
  second = parseInt(num%60);
  if(second == 0){
    target.innerHTML = "0"+minute + " : " + "0"+second;
  }else{
  target.innerHTML = "0"+minute + " : " + second;
  }
}
elem.addEventListener("input", rangeValue);

//count timer
function countTimer(){
  if(num%60==0) minute--;
  if(second==0) second = 60;
  second--;
  num--;
  if(num%10==0) elem.value = num;
  console.log(num + " : "+minute+ " : " + second);

  if((second<10)){
    target.innerHTML = "0"+minute + " : " + "0"+second;
  }else{
    target.innerHTML = "0"+minute + " : " + second;
  }
}

//button click event
var onButtonClick = function(){
  console.log(num + " : "+minute+ " : " + second + " : " + button_flag);
  if(elem.value!=0 && button_flag){
    button.innerHTML = "RESET";
    interval();
    webmoRotate(elem.value);
    elem.setAttribute("readonly","");
    button_flag = !button_flag;
  }else if(!button_flag){
    clearInterval(interval_timer);
    elem.value = 0;
    target.innerHTML = "00"+ " : " + "00";
    webmoStop();
    PlaySound();
    button.innerHTML = "START";
    elem.removeAttribute("readonly","");
    button_flag = !button_flag;
  }

  //var target2 = document.getElementById('output2');
  //target2.innerHTML = "Yes!!";
}

//webmo
function webmoRotate(a){
  let webmo = new Webmo.ws("192.168.100.39");
  webmo.onopen = function () {
    webmo.rotate(90);
    setTimeout(function () {
        webmo.stop();
    }, a*1000);
  }
}

function webmoStop(){
  let webmo = new Webmo.ws("192.168.100.39");
  webmo.onopen = function () {
    webmo.stop();
  }
}
