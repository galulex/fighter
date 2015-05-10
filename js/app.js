var stage, key;
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
      // stand
      [204, 0, 27, 52],
      [234, 0, 25, 52],
      [263, 0, 25, 52],
      // straight
      [203, 423, 25, 52, 0, -4],
      [228, 423, 25, 52, 0, -5],
      [254, 423, 28, 52],
      // back
      [204, 475, 25, 52],
      [232, 475, 25, 52],
      [258, 475, 25, 52],
      [284, 475, 25, 52],
      // sidekick
      [204, 54, 28, 52],
      [236, 54, 39, 52],
      [276, 54, 39, 52],
    ],
    animations: {
        stand: { frames: [0,1,2,1], speed: 0.2 },
        straight: { frames: [3,4,5], next: 'stright', speed: 0.3 },
        back: { frames: [6,7,8,9], next: 'back', speed: 0.3 },
        sidekick: { frames: [12,11,12], next: 'stand', speed: 0.2 }
    }
};
var leoSheet = new createjs.SpriteSheet(leoData);
var leo = new createjs.Sprite(leoSheet);
var animation = new createjs.Sprite(leoSheet, 'run');

window.addEventListener('keydown', handleKeyPress)
window.addEventListener('keyup', function(e){ if ([37,39].indexOf(e.keyCode) >= 0) goTo('stand'); key = null; })

function handleKeyPress(e) {
  if (move[e.keyCode] && key != e.keyCode) move[e.keyCode]();
  key = e.keyCode;
}

var move = {
  39: function(){ goTo('straight') },
  37: function(){ goTo('back') },
  65: function(){ goTo('sidekick') }
}

function goTo(state){
  leo.gotoAndPlay(state);
}
