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

var songSet = 'Boss1';
var deathZone = 4000;
var nextLevelUrl = "level6.html";
var oneShotLevel = true;
var levelBGUrl = '../assets/images/junkyard/background.png';
var level = {"elements":[{"type":"TileMidBump","x":4651,"height":160.6,"y":-2099,"width":548.9,"rotation":0},{"type":"TileMidBump","x":6161,"height":160.6,"y":-2099,"width":548.9,"rotation":0},{"type":"TileMidBump","x":5671,"height":160.6,"y":-2099,"width":548.9,"rotation":0},{"type":"TileMidBump","x":5159,"height":160.6,"y":-2099,"width":548.9,"rotation":0},{"type":"TileMidBump","x":1079,"height":160.6,"y":1699,"width":548.9,"rotation":0},{"type":"RobotJunk1","width":276.65,"x":5577,"height":184.5,"y":-2197},{"type":"TileMidBump","x":6347,"height":160.6,"y":-2099,"width":548.9,"rotation":0},{"type":"TileMidBump","x":1427,"height":160.6,"y":1699,"width":548.9,"rotation":0},{"type":"TileMidBump","x":581,"height":160.6,"y":1700,"width":548.9,"rotation":0},{"type":"TileMidDip","x":1080,"height":160.6,"y":-1146,"width":548.9,"rotation":0},{"type":"TileMidDip","x":1580,"height":160.6,"y":-1146,"width":548.9,"rotation":0},{"type":"TileMidDip","x":1924,"height":160.6,"y":-1145,"width":548.9,"rotation":0},{"type":"Sign","x":6365,"height":285.75,"y":807,"signText":"Yipee!","width":287.45,"scaleX":1,"scaleY":1},{"type":"TileMidBump","x":1951,"height":160.6,"y":1700,"width":548.9,"rotation":0},{"type":"TileMidBump","x":2460,"height":160.6,"y":1700,"width":548.9,"rotation":0},{"type":"TileMidBump","x":2962,"height":160.6,"y":1701,"width":548.9,"rotation":0},{"type":"TileMidDip","x":582,"height":160.6,"y":373,"width":548.9,"rotation":0},{"type":"TileMidDip","x":1116,"height":160.6,"y":373,"width":548.9,"rotation":0},{"type":"TileMidDip","x":1422,"height":160.6,"y":373,"width":548.9,"rotation":0},{"type":"TileMidDip","x":1874,"height":160.6,"y":374,"width":548.9,"rotation":0},{"type":"TileMidDip","x":2408,"height":160.6,"y":374,"width":548.9,"rotation":0},{"type":"TileMidDip","x":2715,"height":160.6,"y":374,"width":548.9,"rotation":0},{"type":"TileBlockLeft2","width":568.3,"x":3942,"height":446.85,"y":2003},{"type":"TileBlockLeft2","width":568.3,"x":5059,"height":446.85,"y":1596},{"type":"TileBlockLeft2","width":568.3,"x":6337,"height":446.85,"y":-2384},{"type":"Teleportor","width":321,"x":5289,"height":322.8,"y":-2301},{"type":"TileMidDip","x":2442,"height":160.6,"y":-1146,"width":548.9,"rotation":0},{"type":"TileMidDip","x":2942,"height":160.6,"y":-1146,"width":548.9,"rotation":0},{"type":"TileMidDip","x":3286,"height":160.6,"y":-1146,"width":548.9,"rotation":0},{"type":"TileEndLeft","x":406,"height":160.35,"y":230,"width":190.65,"rotation":0},{"type":"TileEndRight","x":558,"height":160.35,"y":230,"width":190.65,"rotation":0},{"type":"TileBlockLeft2","width":568.3,"x":6393,"height":446.85,"y":1139},{"type":"TileMidDip","x":7516,"height":160.6,"y":201,"width":548.9,"rotation":0},{"type":"TileMidDip","x":8050,"height":160.6,"y":201,"width":548.9,"rotation":0},{"type":"TileMidDip","x":8357,"height":160.6,"y":201,"width":548.9,"rotation":0},{"type":"TileMidDip","x":5279,"height":160.6,"y":-544,"width":548.9,"rotation":0},{"type":"TileMidDip","x":5813,"height":160.6,"y":-544,"width":548.9,"rotation":0},{"type":"TileMidDip","x":6119,"height":160.6,"y":-544,"width":548.9,"rotation":0},{"type":"TileMidDip","x":3511,"height":160.6,"y":-119,"width":548.9,"rotation":0},{"type":"TileMidDip","x":4045,"height":160.6,"y":-119,"width":548.9,"rotation":0},{"type":"TileMidDip","x":4351,"height":160.6,"y":-119,"width":548.9,"rotation":0},{"type":"TileEndLeft","x":8384,"height":160.35,"y":58,"width":190.65,"rotation":0},{"type":"TileEndRight","x":8536,"height":160.35,"y":57,"width":190.65,"rotation":0},{"type":"TileEndLeft","x":-142,"height":160.35,"y":-543,"width":190.65,"rotation":0},{"type":"TileEndRight","x":10,"height":160.35,"y":-544,"width":190.65,"rotation":0},{"type":"TileEndLeft","x":3655,"height":160.35,"y":-1606,"width":190.65,"rotation":0},{"type":"TileEndRight","x":3807,"height":160.35,"y":-1607,"width":190.65,"rotation":0},{"type":"TileEndLeft","x":4106,"height":160.35,"y":-1920,"width":190.65,"rotation":0},{"type":"TileEndRight","x":4258,"height":160.35,"y":-1920,"width":190.65,"rotation":0},{"type":"BubblePop","width":177.6,"x":898,"height":174.8,"y":1350},{"type":"Choco","x":1526,"y":1504},{"type":"gjaxi","x":1008,"y":1471},{"type":"Trigger","x":1007,"height":300.5,"y":1499,"width":544.6,"js":"runConversation(0);"},{"type":"TileEndLeft","x":5862,"height":160.35,"y":1123,"width":190.65,"rotation":0},{"type":"TileEndRight","x":6014,"height":160.35,"y":1122,"width":190.65,"rotation":0},{"type":"Ramp2","x":3750,"height":255.95,"y":-259,"width":1027.85,"scaleX":1,"scaleY":1},{"type":"TileMidBump","x":4500,"height":160.6,"y":1726,"width":548.9,"rotation":0},{"type":"PhysicsBorderRect","x":1772,"height":140.9,"y":1709,"width":2929.8,"rotation":0},{"type":"PhysicsBorderRect","x":5699,"height":134.3,"y":-535,"width":1386.6,"rotation":0},{"type":"PhysicsBorderRect","x":5501,"height":135.9,"y":-2098,"width":2242.7,"rotation":0},{"type":"PhysicsBorderRect","x":1650,"height":134.3,"y":381,"width":2679.1,"rotation":0},{"type":"PhysicsBorderRect","x":3942,"height":417.8,"y":2017,"width":568.1,"rotation":0},{"type":"PhysicsBorderRect","x":6337,"height":421.6,"y":-2377,"width":568.1,"rotation":0},{"type":"PhysicsBorderRect","x":3930,"height":134.3,"y":-111,"width":1386.6,"rotation":0},{"type":"PhysicsBorderRect","x":482,"height":172.7,"y":255,"width":343.3,"rotation":0},{"type":"PhysicsBorderRect","x":3731,"height":141.3,"y":-1597,"width":343.3,"rotation":0},{"type":"PhysicsBorderRect","x":2184,"height":139.8,"y":-1135,"width":2750.8,"rotation":0},{"type":"PhysicsBorderRect","x":-67,"height":172.7,"y":-516,"width":343.3,"rotation":0},{"type":"PhysicsBorderRect","x":4182,"height":141.3,"y":-1910,"width":343.3,"rotation":0},{"type":"PhysicsBorderRect","x":5118,"height":417.8,"y":1669,"width":568.1,"rotation":0},{"type":"PhysicsBorderRect","x":6393,"height":417.8,"y":1153,"width":568.1,"rotation":0},{"type":"PhysicsBorderRect","x":7937,"height":134.3,"y":206,"width":1386.6,"rotation":0},{"type":"PhysicsBorderRect","x":8459,"height":172.7,"y":83,"width":343.3,"rotation":0},{"type":"PhysicsBorderRect","x":4530,"height":140.6,"y":1738,"width":607.6,"rotation":0},{"type":"PhysicsBorderRect","x":5938,"height":140.6,"y":1132,"width":343.3,"rotation":0},{"type":"PhysicsBorderRect","x":3817,"height":134.3,"y":-206,"width":1197,"rotation":-170.33761596679688}]}

var conversations = [
	{actions: [
		{character: "Choco", value: "//timeout", type: "js"},
		{character: "Choco", value: "//timeout", type: "js"},
		{character: "Choco", value: "doZoom(.7)", type: "js"},
		{character: "Choco", value: "You're really heating up! Try getting through this challenge...", type: "speak"},
		{character: "Choco", value: "I'm going to go explore a little bit on my own. Let's meet up in a little bit!", type: "speak"},
		{character: "Choco", value: "chocobot.run(1000);", type: "js"},
		{character: "Choco", value: "chocobot.remove();", type: "js"},
		{character: "Choco", value: "doZoom(.09)", type: "js"},
		{character: "Choco", value: "levelCamera = false;", type: "js"}

		/*
		{character: "Choco", value: "Oh cruddies!  It's Vinny...", type: "speak"},
		{character: "gjaxi", value: "Vinny?", type: "speak"},
		{character: "Choco", value: "Yeah, you know... the behemoth-like, big, bad, scary, not so good junkyard monster with serrated, razor sharp teeth; come to clean up the junk yard?", type: "speak"},
		{character: "gjaxi", value: "Huh?", type: "speak"},
		{character: "Choco", value: "Don't worry you have a little bit of time... remember to stack your functions. Look around with chopper, plan your escape, and start moving!", type: "speak"},
		{character: "Choco", value: "hideSpeechBubble();", type: "js"},
		{character: "Choco", value: "doZoom(.5)", type: "js"},
		{character: "Choco", value: "chocobot.jump(3000);", type: "js"},
		{character: "Choco", value: "chocobot.run(1000);", type: "js"},
		{character: "Choco", value: "chocobot.remove();", type: "js"}
		*/
	]  }
]
