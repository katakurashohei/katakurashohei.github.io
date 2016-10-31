var ac = null,
    ag = null,
    rt = null;

var webmo;

var stock_num = 0;

function init(){
	window.addEventListener("devicemotion", deviceMotion);
};

function deviceMotion(e) {
	e.preventDefault();
	ac = e.acceleration;
	ag = e.accelerationIncludingGravity;
	rt = e.rotationRate;
  totalNum();

	document.getElementById("ac0").innerHTML = "X: " + ac.x;
	document.getElementById("ac1").innerHTML = "Y: " + ac.y;
	document.getElementById("ac2").innerHTML = "Z: " + ac.z;

  //document.querySelector('#rotate-speed-slider').value = 50*stock_num;
/*
	document.getElementById("ag0").innerHTML = "X: " + ag.x;
	document.getElementById("ag1").innerHTML = "Y: " + ag.y;
	document.getElementById("ag2").innerHTML = "Z: " + ag.z;

	document.getElementById("rt0").innerHTML = "ALPHA: " + rt.alpha;
	document.getElementById("rt1").innerHTML = "BETA: " + rt.beta;
	document.getElementById("rt2").innerHTML = "GAMMA: " + rt.gamma;
  */
}

function totalNum(){
  document.getElementById("device").innerHTML = parseInt(ac.z);
  if(parseInt(ac.z) > stock_num){
    if(0 <= parseInt(ac.z) <= 10){
      stock_num = parseInt(ac.z);
    }else if(parseInt(ac.z)>10){
      stock_num == 10;
    }
    document.getElementById("stock").innerHTML = stock_num;
    document.getElementById('device').addEventListener('input', rotateSlider, false)
    if(stock_num>3){
      webmoRotate(50*stock_num);
    }
  }
}

var onButtonClickStop = function(){
  document.getElementById("on").innerHTML = "stop";
  console.log("とめる");
  webmoStop();
}

//webmo rotate
function webmoRotate(v){
  document.getElementById("on").innerHTML = "on";
  let webmo = new Webmo.ws("webmo.local");
  webmo.onopen = function () {
    webmo.rotate(v);
  }
}

function webmoStop(){
  let webmo = new Webmo.ws("webmo.local");

  webmo.onopen = function () {
    webmo.stopSoft();
  }
  stock_num = 0;
  document.getElementById("stock").innerHTML = stock_num;
}

function rotateSlider (e) {
  var dps = document.querySelector('#rotate-speed-slider').value // degree per sec
  if (Math.abs(dps) < 5) {
    dps = 0
  }
  webmo.rotate(dps)
  e.target.parentElement.querySelector('p').innerHTML = dps
  e.preventDefault()
}

document.addEventListener('DOMContentLoaded', function (event) {
  webmo = new Webmo.ws("webmo.local")
  document.getElementById('rotate-speed-slider').addEventListener(
  'input', rotateSlider, false
  )
})
