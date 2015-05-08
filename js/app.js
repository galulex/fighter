var stage;
function init() {
  stage = new createjs.Stage('canvas');
  var circle = new createjs.Shape();
  circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 50);
  circle.x = 100;
  circle.y = 100;
  createjs.Tween.get(leo, { loop: true })
  createjs.Ticker.addEventListener('tick', stage);
  leo.gotoAndPlay('stand');
  stage.addChild(leo);
  stage.update();
}

var leoData = {
    images: ['./images/leo.gif'],
    frames: [
      [204, 0, 25, 52],
      [235, 0, 25, 52],
      [262, 0, 25, 52]
    ],
    animations: {
        stand: { frames: [0,1,2,1], speed: 0.2 },
        run:[1,5],
        jump:[6,8,'run']
    }
};
var leoSheet = new createjs.SpriteSheet(leoData);
var leo = new createjs.Sprite(leoSheet);
var animation = new createjs.Sprite(leoSheet, 'run');
