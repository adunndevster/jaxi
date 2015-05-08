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
	{src: "assets/images/mcTileEndLeft.png", id: "TileEndLeft"},
	{src: "assets/images/mcTileEndRight.png", id: "TileEndRight"},
	{src: "assets/images/junkyard/mcTileBlockLeft.png", id: "TileBlockLeft"},
	{src: "assets/images/mcTileBlockLeft2.png", id: "TileBlockLeft2"},
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
var level = {"elements":[{"type":"ParallaxBG","width":2048,"x":0,"height":326,"y":586},{"type":"Sign","x":956,"signText":"Hello bot.  Don't worry, you are just here because you have been rejected <b>&#9786;</b>. To help you make your way in this lonely world, we have provided some instructions. You can do things by accessing your code panel. Type this into the code panel on the right then click the \"Run Code\" button:<br><br> <span class=\"codeExample\">jaxi.run();</span>","height":285.75,"y":394,"width":287.45,"scaleX":1,"scaleY":1},{"type":"RobotJunk1","width":276.65,"x":640,"height":184.5,"y":325},{"type":"TileBlockLeft","width":709.1,"x":147,"height":488.5,"y":415},{"type":"RobotJunk2","width":297.7,"x":675,"height":151.3,"y":417},{"type":"RobotJunk1","width":276.65,"x":640,"height":184.5,"y":445},{"type":"RobotJunk2","width":297.7,"x":725,"height":151.3,"y":487},{"type":"RobotJunk2","width":297.7,"x":507,"height":151.3,"y":367},{"type":"TileBlockRight","width":709.1,"x":2381,"height":488.5,"y":415},{"type":"TileMidBump","x":754,"height":160.6,"y":580,"width":548.9,"rotation":0},{"type":"TileMidBump","x":1757,"height":160.6,"y":580,"width":548.9,"rotation":0},{"type":"TileMidBump","x":1236,"height":160.6,"y":580,"width":548.9,"rotation":0},{"type":"gjaxi","x":908,"y":-362},{"type":"Teleportor","width":321,"x":1731,"height":322.8,"y":393},{"type":"RobotJunk1","width":276.65,"x":497,"height":184.5,"y":445},{"type":"RobotJunk1","width":276.65,"x":535,"height":184.5,"y":405},{"type":"PhysicsBorderRect","x":206,"height":591.6,"y":412,"width":479.9,"rotation":89.99824523925781},{"type":"PhysicsBorderRect","x":2493,"height":591.6,"y":355,"width":941.7,"rotation":0},{"type":"PhysicsBorderRect","x":1257,"height":256,"y":648,"width":1554.5,"rotation":0},{"type":"Trigger","x":896,"height":47.3,"y":487,"width":319.8,"js":"doZoom(.4, 3000);"},{"type":"Trigger","x":1573,"height":47.3,"y":487,"width":319.8,"js":"doZoom(.8);"},{"type":"ParallaxFG","width":337,"x":0,"height":1024,"y":0}]}

var levelZoom = .25;
