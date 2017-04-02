var topPosition = 0;
var leftPosition = 0;
var randomDelay = 0;
var starSize = 0;
for (var i = 0; i < 150; i++){
  var div = document.createElement('div');
  div.id = i;
  div.className = "pulse"
  document.body.appendChild(div);
  var elementStyle = document.getElementById(i).style;
  starSize = (Math.floor(Math.random() * 3) + 1) + 'px';
  elementStyle.height = starSize;
  elementStyle.width = starSize;
  elementStyle.position = "absolute";
  elementStyle.top = topPosition + "px";
  elementStyle.left = leftPosition + "px";
  randomDelay = (Math.floor(Math.random() * 20.0) + 0.1);
  elementStyle.setProperty('animation-delay', randomDelay + 's');
  topPosition = (Math.floor(Math.random() * 400) + 1);
  leftPosition += (Math.floor(Math.random() * 20) + 1);
}

var button = document.createElement('div');
button.className = 'button';
button.addEventListener('click', fire);
document.body.appendChild(button);

function fire(){
  for (var i = 0; i < 150; i++){
  var elementStyle = document.getElementById(i).style;
  topPosition = (Math.floor(Math.random() * 400) + 1);
  elementStyle.top = topPosition + "px";
}
  
}