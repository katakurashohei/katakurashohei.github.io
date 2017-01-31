const strong_elem = document.getElementById('strong'),
  usual_elem = document.getElementById('usual'),
  week_elem = document.getElementById('week');

console.log("hey");
var socket_func = function(value) {
  var socket = io('http://192.168.100.63');
  socket.on('onoff', function(data) {
    console.log(data);
    socket.emit('onoff', value);
  });
}


//onclick func
var onButtonClickStrong = function() {
  console.log("つよめ");
  console.log("hogehoge")
  socket_func(1);
}

var onButtonClickStop = function() {
  console.log("とめる");
  socket_func(0);
}
