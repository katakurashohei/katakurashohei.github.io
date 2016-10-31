const strong_elem = document.getElementById('strong'),
      usual_elem = document.getElementById('usual'),
      week_elem = document.getElementById('week');

var milkcocoa = new MilkCocoa('postiujijvpd.mlkcca.com');
var ds = milkcocoa.dataStore('messages');

var flag_1 = true;

console.log("hey");

//onclick func
var onButtonClickStrong = function(){
  console.log("つよめ");
  console.log("hogehoge");
  ds.push({title : 'hoge', content : 1});
  flag_1 = true;
  //webmoRotate(1080);
}

var onButtonClickUsual = function(){
  console.log("ふつう");
  ds.push({title : 'hoge', content : 1});
  //flag_1 = true;
}

var onButtonClickWeek = function(){
  console.log("よわめ");
  ds.push({title : 'hoge', content : 1});
  //flag_1 = true;
}
var onButtonClickStop = function(){
  console.log("とめる");
  //webmoStop();
  if(flag_1){
    ds.push({title : 'hoge', content : 0});
    setTimeout(function(){
      ds.push({title : 'hoge', content : 1});
    },1000);
    setTimeout(function(){
      ds.push({title : 'hoge', content : 0});
    },2000);
    flag_1 = false;
  }
}
