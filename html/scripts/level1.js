/**
 * Created with IntelliJ IDEA.
 * User: adunn
 * Date: 5/30/13
 * Time: 11:36 AM
 * To change this template use File | Settings | File Templates.
 */
var manifest = [
	{src: "assets/images/mcTileMidDip.png", id: "PhysicsBorderRect"},
	
	{src: "assets/images/junkyard/mcTileMidDip.png", id: "TileMidDip"},
	{src: "assets/images/junkyard/mcTileMidBump.png", id: "TileMidBump"},
	{src: "assets/images/junkyard/mcTileEndLeft.png", id: "TileEndLeft"},
	{src: "assets/images/junkyard/mcTileEndRight.png", id: "TileEndRight"},
	{src: "assets/images/junkyard/mcTileBlockLeft.png", id: "TileBlockLeft"},
	{src: "assets/images/junkyard/mcTileBlockLeft2.png", id: "TileBlockLeft2"},
	{src: "assets/images/junkyard/mcTileBlockRight.png", id: "TileBlockRight"},
	{src: "assets/images/junkyard/mcFence.png", id: "Fence"},
	
	{src: "assets/images/mcRobotJunk1.png", id: "RobotJunk1"},
	{src: "assets/images/mcRobotJunk2.png", id: "RobotJunk2"},
	{src: "assets/images/mcRobotJunk2.png", id: "Trigger"},
	{src: "assets/images/mcRamp.png", id: "Ramp"},
	{src: "assets/images/junkyard/gSign.png", id: "Sign"},
	{src: "assets/images/Teleportor.png", id: "Teleportor"},
	{src: "assets/images/junkyard/mcParallaxFactory.png", id: "ParallaxFactory"},
	{src: "assets/images/mcCables.png", id: "ParallaxFG"},
	{src: "assets/images/PinkSprites.png", id: "gjaxi"},

];

var songSet = 'pink-think';
var deathZone = 4000;
var nextLevelUrl = "level2.html";

//var level = {"elements":[{"x":0,"height":326,"y":586,"type":"ParallaxBG","width":2048},{"x":1243,"scaleX":1,"type":"Fence","y":321,"scaleY":1,"height":357.5,"width":1620.8},{"x":956,"scaleX":1,"type":"Sign","y":394,"scaleY":1,"signText":"Hello bot.  Don't worry, you are just here because you have been rejected <b>&#9786;</b>. To help you make your way in this lonely world, we have provided some instructions. You can do things by accessing your code panel. Type this into the code panel on the right then click the \"Run Code\" button:<br><br> <span class=\"codeExample\">jaxi.run();</span>","height":285.75,"width":287.45},{"x":2180,"y":579,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":1704,"y":579,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":708,"y":580,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":1226,"y":580,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":228,"height":446.85,"y":436,"type":"TileBlockLeft","width":568.3},{"x":2295,"height":446.85,"y":437,"type":"TileBlockRight","width":568.3},{"x":1731,"height":322.8,"y":393,"type":"Teleportor","width":321},{"x":908,"type":"gjaxi","y":-362},{"x":217,"y":420,"width":479.9,"height":591.6,"type":"PhysicsBorderRect","rotation":89.99824523925781},{"x":2483,"y":364,"width":941.7,"height":591.6,"type":"PhysicsBorderRect","rotation":0},{"x":1257,"y":630,"width":1554.5,"height":256,"type":"PhysicsBorderRect","rotation":0},{"x":896,"y":487,"type":"Trigger","height":47.3,"width":319.8,"js":"doZoom(.4, 3000);"},{"x":1573,"y":487,"type":"Trigger","height":47.3,"width":319.8,"js":"doZoom(.8);"}]}
var level = {"elements":[{"type":"ParallaxFactory","width":1643.75,"x":0,"height":1024,"y":586},{"type":"Sign","x":956,"height":285.75,"y":394,"signText":"Hello bot.  Don't worry, you are just here because you have been rejected <b>&#9786;</b>. To help you make your way in this lonely world, we have provided some instructions. You can do things by accessing your code panel. Type this into the code panel on the right then click the \"Run Code\" button:<br><br> <span class=\"codeExample\">jaxi.run();</span>","width":287.45,"scaleX":1,"scaleY":1},{"type":"TileMidBump","x":2180,"height":160.6,"y":579,"width":548.9,"rotation":0},{"type":"TileMidBump","x":1704,"height":160.6,"y":579,"width":548.9,"rotation":0},{"type":"TileMidBump","x":708,"height":160.6,"y":580,"width":548.9,"rotation":0},{"type":"TileMidBump","x":1226,"height":160.6,"y":580,"width":548.9,"rotation":0},{"type":"TileBlockLeft","width":568.3,"x":228,"height":446.85,"y":436},{"type":"TileBlockRight","width":568.3,"x":2295,"height":446.85,"y":437},{"type":"Teleportor","width":321,"x":1731,"height":322.8,"y":393},{"type":"gjaxi","x":908,"y":-362},{"type":"PhysicsBorderRect","x":217,"height":591.6,"y":420,"width":479.9,"rotation":89.99824523925781},{"type":"PhysicsBorderRect","x":2483,"height":591.6,"y":364,"width":941.7,"rotation":0},{"type":"PhysicsBorderRect","x":1257,"height":256,"y":630,"width":1554.5,"rotation":0},{"type":"Trigger","x":896,"height":47.3,"y":487,"width":319.8,"js":"doZoom(.4, 3000);"},{"type":"Trigger","x":1573,"height":47.3,"y":487,"width":319.8,"js":"doZoom(.8);"}]}



var levelZoom = .8;

//doZoom(.09);