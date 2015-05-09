var stage;
function init() {
  stage = new createjs.Stage('canvas');
  var circle = new createjs.Shape();
  circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 50);
  circle.x = 100;
  circle.y = 100;
  createjs.Ticker.addEventListener('tick', stage);
  leo.gotoAndPlay('stand');
  stage.addChild(leo);
}

var leoData = {
    images: ['./images/leo.gif'],
    frames: [
      [204, 0, 25, 52],
      [235, 0, 25, 52],
      [262, 0, 25, 52],
      [202, 423, 25, 52],
      [228, 423, 25, 52],
      [254, 423, 28, 52],
    ],
    animations: {
        stand: { frames: [0,1,2,1], speed: 0.2 },
        walk: { frames: [3,4,5], speed: 0.3 }
    }
};
var leoSheet = new createjs.SpriteSheet(leoData);
var leo = new createjs.Sprite(leoSheet);
var animation = new createjs.Sprite(leoSheet, 'run');

window.addEventListener('keydown', handleKeyPress)
window.addEventListener('keyup', function(){ goTo('stand') })

function handleKeyPress(e) {
  if (move[e.keyCode]) move[e.keyCode]();
}

var move = {
  39: function(){ goTo('walk') }
}

function goTo(state){
  if (leo.state != state) leo.gotoAndPlay(state);
  leo.state = state;
}
