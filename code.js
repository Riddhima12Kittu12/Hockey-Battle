var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var theif = createSprite(50,350,20,20)
theif.shapeColor ='black'


laser1 = createSprite(110,280,280,10)
laser1.shapeColor ="red"
laser1.velocityX =15

laser2 = createSprite(280,90,280,10)
laser2.shapeColor ="red"
laser2.velocityX =15

function draw() {

  background("pink");
  
  shape(390,0,380,10,390,20,400,10)
  
  if(keyDown(UP_ARROW)){
  theif.velocityX=0 
  theif.velocityY=-4
 }
 if(keyDown(DOWN_ARROW)){
   theif.velocityX=0
   theif.velocityY=+4
 }
 if(keyDown(RIGHT_ARROW)){
  theif.velocityX=4 
  theif.velocityY=0
 }
if(keyDown(LEFT_ARROW)){
 theif.velocityX=-4
 theif.velocityY=0
}
if(laser1.isTouching(theif)|| laser2.isTouching(theif)){
  stroke("yellow")
  fill("blue")
  textSize(30)
  text("Theif Is Caught",120,200)
  laser1.setVelocity(0,0)
  laser2.setVelocity(0,0)
  theif.setVelocity(0,0)
}




 createEdgeSprites()
    theif.collide(laser1);
    theif.collide(laser2);
    laser1.bounceOff(rightEdge)
    laser2.bounceOff(rightEdge)
    laser1.bounceOff(leftEdge)
    laser2.bounceOff(leftEdge)
    theif.collide(topEdge);
    theif.collide(bottomEdge);
    theif.collide(rightEdge);
    theif.collide(leftEdge);

drawSprites();

}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
