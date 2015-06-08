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
	{src: "assets/images/junkyard/mcRamp.png", id: "Ramp"},
	{src: "assets/images/junkyard/mcRamp2.png", id: "Ramp2"},

	{src: "assets/images/junkyard/mcFence.png", id: "Fence"},
	{src: "assets/images/junkyard/mcFactory.png", id: "Factory"},
	{src: "assets/images/junkyard/mcGarbageMix1.png", id: "GarbageMix1"},
	{src: "assets/images/junkyard/mcGarbageMix2.png", id: "GarbageMix2"},
	{src: "assets/images/junkyard/mcGarbageStorage.png", id: "GarbageStorage"},
	{src: "assets/images/junkyard/mcMagnetCrane.png", id: "MagnetCrane"},
	{src: "assets/images/junkyard/mcRock1.png", id: "Rock1"},
	{src: "assets/images/junkyard/mcRock2.png", id: "Rock2"},
	{src: "assets/images/junkyard/mcRock3.png", id: "Rock3"},
	{src: "assets/images/junkyard/mcScrapCrane.png", id: "ScrapCrane"},
	{src: "assets/images/junkyard/mcGarbageMountain1.png", id: "GarbageMountain1"},
	{src: "assets/images/junkyard/mcGarbageMountain2.png", id: "GarbageMountain2"},
	{src: "assets/images/junkyard/mcParallaxFactory.png", id: "ParallaxFactory"},	
	
	
	{src: "assets/images/mcRobotJunk1.png", id: "RobotJunk1"},
	{src: "assets/images/mcRobotJunk2.png", id: "RobotJunk2"},
	{src: "assets/images/gSign.png", id: "Sign"},
	{src: "assets/images/Teleportor.png", id: "Teleportor"},
	{src: "assets/images/mcTileMidDip.png", id: "Trigger"},
	{src: "assets/images/BubblePop.png", id: "BubblePop"},
	{src: "assets/images/mcParalaxBG_JunkYard.png", id: "ParallaxBG"},
	{src: "assets/images/mcCables.png", id: "ParallaxFG"},
	{src: "assets/images/ChocoSprites.png", id: "Choco"},
	{src: "assets/images/PinkSprites.png", id: "gjaxi"}
];

var songSet = 'pink-think';
var deathZone = 4000;
var nextLevelUrl = "level4.html";
var oneShotLevel = true;

//var level = {"elements":[{"type":"ParallaxBG","x":0,"height":326,"y":586,"width":2048},{"x":1424,"rotation":0,"y":2119,"type":"TileMidDip","height":163,"width":514.8},{"x":1924,"rotation":0,"y":2119,"type":"TileMidDip","height":163,"width":514.8},{"x":57,"rotation":0,"y":2123,"type":"TileEndLeft","height":176.55,"width":192.75},{"x":408,"rotation":0,"y":2129,"type":"TileMidBump","height":183,"width":516.55},{"x":915,"rotation":0,"y":2129,"type":"TileMidBump","height":183,"width":516.55},{"type":"RobotJunk1","x":498,"height":184.5,"y":2041,"width":276.65},{"type":"BubblePop","x":1953,"height":174.8,"y":1967,"width":177.6},{"x":2450,"rotation":-85.51199340820313,"y":1688,"type":"TileMidDip","height":163,"width":518.35},{"x":2579,"rotation":-74.99945068359375,"y":368,"type":"TileEndRight","height":176.55,"width":192.85},{"type":"RobotJunk2","x":1299,"height":151.3,"y":2099,"width":297.7},{"x":2529,"rotation":-85.51199340820313,"y":697,"type":"TileMidDip","height":163,"width":518.35},{"x":2489,"rotation":-85.51199340820313,"y":1205,"type":"TileMidDip","height":163,"width":518.35},{"x":2275,"rotation":0,"y":2129,"type":"TileEndRight","height":176.55,"width":192.85},{"x":2416,"rotation":-76.51884460449219,"y":2020,"type":"TileEndLeft","height":176.55,"width":196.6},{"x":1424,"rotation":0,"y":1459,"type":"TileMidDip","height":163,"width":514.8},{"x":1924,"rotation":0,"y":1459,"type":"TileMidDip","height":163,"width":514.8},{"x":1074,"rotation":0,"y":1468,"type":"TileEndLeft","height":176.55,"width":192.75},{"x":2275,"rotation":0,"y":1469,"type":"TileEndRight","height":176.55,"width":192.85},{"x":28,"rotation":-85.51199340820313,"y":1689,"type":"TileMidDip","height":163,"width":518.35},{"x":156,"rotation":-74.99945068359375,"y":369,"type":"TileEndRight","height":176.55,"width":192.85},{"x":106,"rotation":-85.51199340820313,"y":697,"type":"TileMidDip","height":163,"width":518.35},{"x":66,"rotation":-85.51199340820313,"y":1205,"type":"TileMidDip","height":163,"width":518.35},{"x":-5,"rotation":-76.51884460449219,"y":2020,"type":"TileEndLeft","height":176.55,"width":196.6},{"x":631,"rotation":0,"y":868,"type":"TileMidDip","height":163,"width":514.8},{"x":1131,"rotation":0,"y":868,"type":"TileMidDip","height":163,"width":514.8},{"x":281,"rotation":0,"y":877,"type":"TileEndLeft","height":176.55,"width":192.75},{"x":1482,"rotation":0,"y":878,"type":"TileEndRight","height":176.55,"width":192.85},{"x":1611,"rotation":0,"y":283,"type":"TileMidDip","height":163,"width":514.8},{"x":2111,"rotation":0,"y":283,"type":"TileMidDip","height":163,"width":514.8},{"x":1261,"rotation":0,"y":292,"type":"TileEndLeft","height":176.55,"width":192.75},{"x":2462,"rotation":0,"y":293,"type":"TileEndRight","height":176.55,"width":192.85},{"type":"Teleportor","x":2330,"height":322.8,"y":105,"width":321},{"x":2097,"y":1967,"type":"Choco"},{"x":1807,"y":1737,"type":"gjaxi"},{"type":"RobotJunk1","x":2105,"height":184.5,"y":1372,"width":276.65},{"x":1218,"rotation":0,"y":2187,"type":"PhysicsBorderRect","height":166.1,"width":2332},{"x":2525,"rotation":4.9647216796875,"y":1230,"type":"PhysicsBorderRect","height":1751,"width":128.4},{"x":72,"rotation":4.9647216796875,"y":1231,"type":"PhysicsBorderRect","height":1751,"width":128.4},{"x":1668,"rotation":0,"y":1500,"type":"PhysicsBorderRect","height":114,"width":1352.3},{"x":855,"rotation":0,"y":890,"type":"PhysicsBorderRect","height":114,"width":1352.3},{"x":1866,"rotation":0,"y":309,"type":"PhysicsBorderRect","height":114,"width":1352.3},{"x":1953,"y":2038,"type":"Trigger","js":"runConversation(0);","height":47.3,"width":544.6},{"type":"ParallaxFG","x":0,"height":1024,"y":0,"width":337}]}
var level = {"elements":[{"x":0,"height":1024,"y":586,"type":"ParallaxFactory","width":1643.75},{"x":2911,"y":79,"width":548.9,"height":160.6,"type":"TileMidDip","rotation":0},{"x":3445,"y":79,"width":548.9,"height":160.6,"type":"TileMidDip","rotation":0},{"x":1313,"y":1167,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":765,"y":1167,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":275,"y":1167,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":1821,"y":1167,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":4192,"y":1165,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":181,"height":184.5,"y":1070,"type":"RobotJunk1","width":276.65},{"x":44,"y":-956,"width":190.65,"height":160.35,"type":"TileEndLeft","rotation":0},{"x":196,"y":-957,"width":190.65,"height":160.35,"type":"TileEndRight","rotation":0},{"x":1076,"y":-403,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":201,"height":446.85,"y":-687,"type":"TileBlockLeft2","width":568.3},{"x":191,"y":-403,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":728,"y":-403,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":951,"y":1167,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":4531,"y":1165,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":4526,"y":1058,"width":190.65,"height":160.35,"type":"TileEndLeft","rotation":0},{"x":4710,"y":1057,"width":190.65,"height":160.35,"type":"TileEndRight","rotation":0},{"x":3688,"y":1165,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":3752,"y":79,"width":548.9,"height":160.6,"type":"TileMidDip","rotation":0},{"x":3849,"height":184.5,"y":1046,"type":"RobotJunk1","width":276.65},{"x":1980,"y":-833,"width":548.9,"height":160.6,"type":"TileMidDip","rotation":0},{"x":2480,"y":-833,"width":548.9,"height":160.6,"type":"TileMidDip","rotation":0},{"x":2824,"y":-833,"width":548.9,"height":160.6,"type":"TileMidDip","rotation":0},{"x":2144,"signText":"Well done!","scaleX":1,"type":"Sign","y":-1015,"scaleY":1,"height":285.75,"width":287.45},{"x":2291,"y":1167,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":2052,"scaleX":1,"type":"Ramp","y":1023,"scaleY":1,"height":255.95,"width":1027.85},{"x":634,"y":-394,"width":1434,"height":139.8,"type":"PhysicsBorderRect","rotation":0},{"x":4110,"y":1176,"width":1391.1,"height":140.9,"type":"PhysicsBorderRect","rotation":0},{"x":3327,"y":85,"width":1386.6,"height":134.3,"type":"PhysicsBorderRect","rotation":0},{"x":1282,"y":1177,"width":2563.9,"height":138.7,"type":"PhysicsBorderRect","rotation":0},{"x":4619,"y":1091,"width":370.6,"height":172.7,"type":"PhysicsBorderRect","rotation":0},{"x":2821,"height":184.5,"y":-74,"type":"RobotJunk1","width":276.65},{"x":2401,"y":-823,"width":1391.9,"height":139.8,"type":"PhysicsBorderRect","rotation":0},{"x":134,"y":-930,"width":370.6,"height":172.7,"type":"PhysicsBorderRect","rotation":0},{"x":1157,"height":322.8,"y":-630,"type":"Teleportor","width":321},{"x":201,"y":-655,"width":568.1,"height":449.4,"type":"PhysicsBorderRect","rotation":0},{"x":1943,"y":1081,"width":1307.3,"height":134.3,"type":"PhysicsBorderRect","rotation":-9.409011840820313},{"x":871,"height":174.8,"y":998,"type":"BubblePop","width":177.6},{"x":1059,"type":"Choco","y":965},{"x":725,"type":"gjaxi","y":778},{"js":"runConversation(0);","x":675,"y":1069,"width":544.6,"height":142,"type":"Trigger"}]}


var conversations = [
	{actions: [
		{character: "Choco", value: "//timeout", type: "js"},
		{character: "Choco", value: "//timeout", type: "js"},
		{character: "Choco", value: "//timeout", type: "js"},
		{character: "Choco", value: "doZoom(.7)", type: "js"},
		{character: "Choco", value: "Whew! Those teleporters do a number on the circuits!", type: "speak"},
		{character: "Choco", value: "Okay, next lesson. You can run or jump backwards by putting a negative number in your function.:<br><br><span class='codeExample'>jaxi.run(-600);</span>", type: "speak"},
		{character: "Choco", value: "hideSpeechBubble();", type: "js"},
		{character: "Choco", value: "chocobot.run(600);", type: "js"},
		{character: "Choco", value: "chocobot.jump(250);", type: "js"},
		{character: "Choco", value: "chocobot.remove();", type: "js"},
		{character: "Choco", value: "doZoom(.16)", type: "js"},
		{character: "Choco", value: "levelCamera = false;", type: "js"}

	]  }
]
var levelZoom = .28;
var levelCamera = false;

