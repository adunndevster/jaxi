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
var level = {"elements":[{"type":"TileMidDip","x":2994,"height":160.6,"y":1241,"width":548.9,"rotation":0},{"type":"TileMidDip","x":3528,"height":160.6,"y":1241,"width":548.9,"rotation":0},{"type":"TileMidBump","x":1395,"height":160.6,"y":2329,"width":548.9,"rotation":0},{"type":"TileMidBump","x":847,"height":160.6,"y":2330,"width":548.9,"rotation":0},{"type":"TileMidBump","x":357,"height":160.6,"y":2330,"width":548.9,"rotation":0},{"type":"TileMidBump","x":1904,"height":160.6,"y":2329,"width":548.9,"rotation":0},{"type":"TileMidBump","x":4274,"height":160.6,"y":2328,"width":548.9,"rotation":0},{"type":"RobotJunk1","width":276.65,"x":263,"height":184.5,"y":2232},{"type":"TileEndLeft","x":127,"height":160.35,"y":206,"width":190.65,"rotation":0},{"type":"TileEndRight","x":279,"height":160.35,"y":205,"width":190.65,"rotation":0},{"type":"TileMidBump","x":1159,"height":160.6,"y":759,"width":548.9,"rotation":0},{"type":"TileBlockLeft2","width":568.3,"x":284,"height":446.85,"y":475},{"type":"TileMidBump","x":274,"height":160.6,"y":759,"width":548.9,"rotation":0},{"type":"TileMidBump","x":811,"height":160.6,"y":759,"width":548.9,"rotation":0},{"type":"TileMidBump","x":1033,"height":160.6,"y":2330,"width":548.9,"rotation":0},{"type":"TileMidBump","x":4613,"height":160.6,"y":2328,"width":548.9,"rotation":0},{"type":"TileEndLeft","x":4609,"height":160.35,"y":2221,"width":190.65,"rotation":0},{"type":"TileEndRight","x":4793,"height":160.35,"y":2220,"width":190.65,"rotation":0},{"type":"TileMidBump","x":3771,"height":160.6,"y":2328,"width":548.9,"rotation":0},{"type":"TileMidDip","x":3834,"height":160.6,"y":1241,"width":548.9,"rotation":0},{"type":"RobotJunk1","width":276.65,"x":3931,"height":184.5,"y":2209},{"type":"TileMidDip","x":2062,"height":160.6,"y":329,"width":548.9,"rotation":0},{"type":"TileMidDip","x":2562,"height":160.6,"y":329,"width":548.9,"rotation":0},{"type":"TileMidDip","x":2906,"height":160.6,"y":329,"width":548.9,"rotation":0},{"type":"Sign","x":2226,"signText":"Well done!","height":285.75,"y":147,"width":287.45,"scaleX":1,"scaleY":1},{"type":"TileMidBump","x":2374,"height":160.6,"y":2329,"width":548.9,"rotation":0},{"type":"Ramp","x":2135,"height":255.95,"y":2185,"width":1027.85,"scaleX":1,"scaleY":1},{"type":"PhysicsBorderRect","x":717,"height":139.8,"y":768,"width":1434,"rotation":0},{"type":"PhysicsBorderRect","x":4193,"height":140.9,"y":2339,"width":1391.1,"rotation":0},{"type":"PhysicsBorderRect","x":3410,"height":134.3,"y":1248,"width":1386.6,"rotation":0},{"type":"PhysicsBorderRect","x":1365,"height":138.7,"y":2340,"width":2563.9,"rotation":0},{"type":"PhysicsBorderRect","x":4701,"height":172.7,"y":2254,"width":370.6,"rotation":0},{"type":"RobotJunk1","width":276.65,"x":2903,"height":184.5,"y":1088},{"type":"PhysicsBorderRect","x":2484,"height":139.8,"y":339,"width":1391.9,"rotation":0},{"type":"PhysicsBorderRect","x":217,"height":172.7,"y":231,"width":370.6,"rotation":0},{"type":"Teleportor","width":321,"x":1240,"height":322.8,"y":531},{"type":"PhysicsBorderRect","x":284,"height":449.4,"y":507,"width":568.1,"rotation":0},{"type":"PhysicsBorderRect","x":2026,"height":134.3,"y":2243,"width":1307.3,"rotation":-9.409011840820313},{"type":"BubblePop","width":177.6,"x":953,"height":174.8,"y":2161},{"type":"Choco","x":1142,"y":2128},{"type":"gjaxi","x":808,"y":1941},{"type":"Trigger","x":757,"height":142,"y":2231,"width":544.6,"js":"runConversation(0);"}]}


var conversations = [
	{actions: [
		{character: "Choco", value: "//timeout", type: "js"},
		{character: "Choco", value: "//timeout", type: "js"},
		{character: "Choco", value: "//timeout", type: "js"},
		{character: "Choco", value: "doZoom(.6)", type: "js"},
		{character: "Choco", value: "Whew! Those teleporters do a number on the circuits!", type: "speak"},
		{character: "Choco", value: "Okay, next lesson. You can run or jump backwards by putting a negative number in your function.:<br><br><span class='codeExample'>jaxi.run(-600);</span>", type: "speak"},
		{character: "Choco", value: "hideSpeechBubble();", type: "js"},
		{character: "Choco", value: "chocobot.run(600);", type: "js"},
		{character: "Choco", value: "chocobot.jump(250);", type: "js"},
		{character: "Choco", value: "chocobot.remove();", type: "js"},
		{character: "Choco", value: "doZoom(.20)", type: "js"},
		{character: "Choco", value: "doPan(0,30)", type: "js"}

	]  }
]
var levelZoom = .29;
var levelCamera = true;

