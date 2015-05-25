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
	
	{src: "assets/images/mcRobotJunk1.png", id: "RobotJunk1"},
	{src: "assets/images/mcRobotJunk2.png", id: "RobotJunk2"},
	{src: "assets/images/mcRobotJunk2.png", id: "Trigger"},
	{src: "assets/images/mcRamp.png", id: "Ramp"},
	{src: "assets/images/junkyard/gSign.png", id: "Sign"},
	{src: "assets/images/Teleportor.png", id: "Teleportor"},
	{src: "assets/images/mcParalaxBG_JunkYard.png", id: "ParallaxBG"},
	{src: "assets/images/mcCables.png", id: "ParallaxFG"},
	{src: "assets/images/PinkSprites.png", id: "gjaxi"},
];

var songSet = 'pink-think';
var deathZone = 4000;
var nextLevelUrl = "level2.html";
//var level = {"elements":[{"type":"ParallaxBG","x":0,"height":326,"y":586,"width":2048},{"x":753,"rotation":0,"y":580,"type":"TileMidBump","height":183,"width":516.55},{"x":956,"y":394,"type":"Sign","scaleX":1,"height":278.6,"signText":"Hello bot.  Don't worry, you are just here because you have been rejected <b>&#9786;</b>. To help you make your way in this lonely world, we have provided some instructions. You can do things by accessing your code panel. Type this into the code panel on the right then click the \"Run Code\" button:<br><br> <span class=\"codeExample\">jaxi.run();</span>","scaleY":1,"width":201.7},{"type":"RobotJunk1","x":640,"height":184.5,"y":325,"width":276.65},{"type":"TileBlockLeft","x":146,"height":436.15,"y":454,"width":712.35},{"type":"RobotJunk1","x":420,"height":184.5,"y":405,"width":276.65},{"type":"RobotJunk2","x":675,"height":151.3,"y":417,"width":297.7},{"type":"RobotJunk1","x":540,"height":184.5,"y":405,"width":276.65},{"type":"RobotJunk1","x":640,"height":184.5,"y":445,"width":276.65},{"type":"RobotJunk2","x":725,"height":151.3,"y":487,"width":297.7},{"type":"RobotJunk2","x":425,"height":151.3,"y":327,"width":297.7},{"type":"TileMidDip","x":1522,"height":163,"y":569,"width":1028.2},{"type":"TileBlockRight","x":2381,"height":513.7,"y":410,"width":718.7},{"type":"Teleportor","x":1731,"height":322.8,"y":393,"width":321},{"x":908,"y":-362,"type":"gjaxi"},{"x":207,"rotation":14.998931884765625,"y":673,"type":"PhysicsBorderRect","height":591.6,"width":941.7},{"x":2493,"rotation":0,"y":355,"type":"PhysicsBorderRect","height":591.6,"width":941.7},{"x":1386,"rotation":0,"y":659,"type":"PhysicsBorderRect","height":256,"width":1295.5},{"x":896,"js":"doZoom(.4, 3000);","y":487,"type":"Trigger","height":47.3,"width":319.8},{"x":1573,"js":"doZoom(.8);","y":487,"type":"Trigger","height":47.3,"width":319.8},{"type":"ParallaxFG","x":0,"height":1024,"y":0,"width":337}]}
var level = {"elements":[{"type":"ParallaxBG","width":2048,"x":0,"height":326,"y":586},{"type":"Sign","x":956,"height":285.75,"y":394,"signText":"Hello bot. Don't worry, you are just here because you have been rejected <b>&#9786;</b>. To help you make your way in this lonely world, we have provided some instructions. To start, type the following into your code panel, and click the \"Run Code\" button:<br><br> <span class=\"codeExample\">jaxi.run();</span>","width":287.45,"scaleX":1,"scaleY":1},{"type":"TileMidBump","x":2180,"height":160.6,"y":579,"width":548.9,"rotation":0},{"type":"TileMidBump","x":1704,"height":160.6,"y":579,"width":548.9,"rotation":0},{"type":"TileMidBump","x":708,"height":160.6,"y":580,"width":548.9,"rotation":0},{"type":"TileMidBump","x":1226,"height":160.6,"y":580,"width":548.9,"rotation":0},{"type":"TileBlockLeft","width":568.3,"x":228,"height":446.85,"y":436},{"type":"TileBlockRight","width":568.3,"x":2295,"height":446.85,"y":437},{"type":"Teleportor","width":321,"x":1731,"height":322.8,"y":393},{"type":"gjaxi","x":908,"y":-362},{"type":"PhysicsBorderRect","x":217,"height":591.6,"y":420,"width":479.9,"rotation":89.99824523925781},{"type":"PhysicsBorderRect","x":2483,"height":591.6,"y":364,"width":941.7,"rotation":0},{"type":"PhysicsBorderRect","x":1257,"height":256,"y":630,"width":1554.5,"rotation":0},{"type":"Trigger","x":896,"height":47.3,"y":487,"width":319.8,"js":"doZoom(.4, 3000);"},{"type":"Trigger","x":1573,"height":47.3,"y":487,"width":319.8,"js":"doZoom(.8);"}]}

var levelZoom = .25;

//doZoom(.09);