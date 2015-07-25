(function(window) {
mcButtonSwitch = function() {
	this.initialize();
}
mcButtonSwitch._SpriteSheet = new createjs.SpriteSheet({images: ["Button.png"], frames: [[0,0,156,49,0,0,0],[0,0,156,49,0,0,0],[0,0,156,49,0,0,0],[0,0,156,49,0,0,0],[0,0,156,49,0,0,0],[0,0,156,49,0,0,0],[0,0,156,49,0,0,0],[0,0,156,49,0,0,0],[0,0,156,49,0,0,0],[0,49,156,41,0,0,-8]]});
var mcButtonSwitch_p = mcButtonSwitch.prototype = new createjs.Sprite();
mcButtonSwitch_p.Sprite_initialize = mcButtonSwitch_p.initialize;
mcButtonSwitch_p.initialize = function() {
	this.Sprite_initialize(mcButtonSwitch._SpriteSheet);
	this.paused = false;
}
window.mcButtonSwitch = mcButtonSwitch;
}(window));

