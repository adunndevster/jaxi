(function(window) {
mcPink_SpriteSheet = function() {
	this.initialize();
}
mcPink_SpriteSheet._SpriteSheet = new SpriteSheet({images: ["PinkSprites.png"], frames: [[0,0,112,284,0,0.7000000000000028,0],[112,0,124,280,0,9.700000000000003,4],[236,0,145,270,0,24.700000000000003,14],[381,0,162,260,0,30.700000000000003,18],[236,0,145,270,0,24.700000000000003,14],[112,0,124,280,0,9.700000000000003,4],[543,0,143,291,0,16.700000000000003,4],[686,0,189,287,0,29.700000000000003,18],[0,291,210,272,0,40.7,22],[686,0,189,287,0,29.700000000000003,18],[543,0,143,291,0,16.700000000000003,4],[543,0,143,291,0,16.700000000000003,4],[686,0,189,287,0,29.700000000000003,18],[0,291,210,272,0,40.7,22],[0,291,210,272,0,40.7,22],[0,291,210,272,0,40.7,22],[0,291,210,272,0,40.7,22],[0,291,210,272,0,40.7,22],[0,291,210,272,0,40.7,22],[686,0,189,287,0,29.700000000000003,18],[543,0,143,291,0,16.700000000000003,4],[543,0,143,291,0,16.700000000000003,4],[210,291,152,254,0,-17.299999999999997,-33],[362,291,177,224,0,-17.299999999999997,-63],[539,291,201,185,0,-17.299999999999997,-102],[539,291,201,185,0,-17.299999999999997,-102],[740,291,177,224,0,-17.299999999999997,-63],[0,563,148,257,0,-17.299999999999997,-30],[148,563,133,284,0,-5.299999999999997,0]],  animations: {idol:[0,0, true], run:[1,10, true], jump:[11,20, true], pickup:[21,28, true]}});
var mcPink_SpriteSheet_p = mcPink_SpriteSheet.prototype = new BitmapAnimation();
mcPink_SpriteSheet_p.BitmapAnimation_initialize = mcPink_SpriteSheet_p.initialize;
mcPink_SpriteSheet_p.initialize = function() {
	this.BitmapAnimation_initialize(mcPink_SpriteSheet._SpriteSheet);
	this.paused = false;
}
mcPink_SpriteSheet_p.idol = function(){
	this.gotoAndPlay("idol");
}
mcPink_SpriteSheet_p.run = function(){
	this.gotoAndPlay("run");
}
mcPink_SpriteSheet_p.jump = function(){
	this.gotoAndPlay("jump");
}
mcPink_SpriteSheet_p.pickup = function(){
	this.gotoAndPlay("pickup");
}
window.mcPink_SpriteSheet = mcPink_SpriteSheet;
}(window));

