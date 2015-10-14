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
	{src: "assets/images/mcCables.png", id: "ParallaxFG"},
	{src: "assets/images/ChocoSprites.png", id: "Choco"},
	{src: "assets/images/PinkSprites.png", id: "gjaxi"}
];

var songSet = 'Boss1';
var deathZone = 4000;
var nextLevelUrl = "level7.html";
oneShotLevel = true;
//var level = {"elements":[{"type":"ParallaxBG","height":326,"x":0,"width":2048,"y":586},{"type":"TileMidBump","rotation":0,"width":516.55,"y":576,"height":183,"x":753},{"type":"Sign","x":956,"width":201.7,"scaleX":1,"height":278.6,"signText":"Hello bot.  Don't worry, you are just here because you have been rejected <b>&#9786;</b>. To help you make your way in this lonely world, we have provided some instructions. You can do things by accessing your code panel. Type this into the code panel on the right then click the \"Run Code\" button:<br><br> <span class=\"codeExample\">jaxi.run();</span>","scaleY":1,"y":394},{"type":"RobotJunk1","height":184.5,"x":640,"width":276.65,"y":325},{"type":"TileBlockLeft","height":436.15,"x":146,"width":712.35,"y":450},{"type":"RobotJunk1","height":184.5,"x":420,"width":276.65,"y":405},{"type":"RobotJunk2","height":151.3,"x":675,"width":297.7,"y":417},{"type":"RobotJunk1","height":184.5,"x":540,"width":276.65,"y":405},{"type":"RobotJunk1","height":184.5,"x":640,"width":276.65,"y":445},{"type":"RobotJunk2","height":151.3,"x":725,"width":297.7,"y":487},{"type":"RobotJunk2","height":151.3,"x":425,"width":297.7,"y":327},{"type":"TileMidDip","rotation":0,"width":514.8,"y":1786,"height":163,"x":2650},{"type":"TileEndRight","rotation":0,"width":192.85,"y":1793,"height":176.55,"x":3504},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":2009,"height":176.55,"x":3671},{"type":"TileEndRight","rotation":0,"width":192.85,"y":2009,"height":176.55,"x":3860},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":2225,"height":176.55,"x":3995},{"type":"TileEndRight","rotation":0,"width":192.85,"y":2225,"height":176.55,"x":4184},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":2404,"height":176.55,"x":4338},{"type":"TileMidBump","rotation":0,"width":516.55,"y":2408,"height":183,"x":4689},{"type":"RobotJunk1","height":184.5,"x":5322,"width":276.65,"y":2309},{"type":"TileMidDip","rotation":0,"width":514.8,"y":2398,"height":163,"x":5199},{"type":"TileEndRight","rotation":0,"width":192.85,"y":2406,"height":176.55,"x":5551},{"type":"Ramp","x":5155,"width":944.9,"scaleX":1,"height":207.5,"scaleY":1,"y":2309},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":2420,"height":176.55,"x":6891},{"type":"TileMidBump","rotation":0,"width":516.55,"y":2423,"height":183,"x":7239},{"type":"TileMidDip","rotation":0,"width":514.8,"y":2413,"height":163,"x":7749},{"type":"TileEndRight","rotation":0,"width":192.85,"y":2421,"height":176.55,"x":8098},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":2296,"height":176.55,"x":8261},{"type":"TileMidDip","rotation":0,"width":514.8,"y":2288,"height":163,"x":8612},{"type":"Teleportor","height":322.8,"x":8686,"width":321,"y":2126},{"type":"TileBlockRight","height":513.7,"x":9219,"width":718.7,"y":2133},{"type":"TileMidBump","rotation":0,"width":516.55,"y":1796,"height":183,"x":3161},{"type":"TileMidBump","rotation":0,"width":516.55,"y":1796,"height":183,"x":2140},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":1657,"height":176.55,"x":2416},{"type":"TileEndRight","rotation":0,"width":192.85,"y":1657,"height":176.55,"x":2605},{"type":"Sign","x":2551,"width":201.7,"scaleX":1,"height":278.6,"signText":"Looks like you know how to get around! See if you can get to that tele-porter ahead.","scaleY":1,"y":1458},{"type":"RobotJunk1","height":184.5,"x":2522,"width":276.65,"y":1526},{"type":"Sign","x":2159,"width":201.7,"scaleX":1,"height":278.6,"signText":"Whew close!  Who designed this junkyard?  Try jumping!  Change your code to:<br><br> <span class=\"codeExample\">jaxi.jump();</span> <br><br><b>Remember to take the number out of the function&#9786;</b>","scaleY":1,"y":1616},{"type":"TileBlockLeft2","height":520.05,"x":1536,"width":718.7,"y":1627},{"type":"TileMidDip","rotation":0,"width":514.8,"y":567,"height":163,"x":1264},{"type":"TileMidDip","rotation":0,"width":514.8,"y":567,"height":163,"x":1774},{"type":"Sign","x":1482,"width":201.7,"scaleX":1,"height":278.6,"signText":"Good. Now you can tell your bot to run faster by putting a bigger number in the <b>function</b>.<br><br>Change it to: <br><br><span class=\"codeExample\">jaxi.run(300);</span>","scaleY":1,"y":394},{"type":"TileMidBump","rotation":0,"width":516.55,"y":577,"height":183,"x":2275},{"type":"TileMidDip","rotation":0,"width":514.8,"y":568,"height":163,"x":2786},{"type":"Sign","x":2922,"width":201.7,"scaleX":1,"height":278.6,"signText":"Hmmm... a ramp.  Let's fly off this thing and make over the little canyon coming up.  What speed do you think you need?  Maybe 800?","scaleY":1,"y":394},{"type":"TileMidBump","rotation":0,"width":516.55,"y":577,"height":183,"x":3280},{"type":"TileEndRight","rotation":0,"width":192.85,"y":574,"height":176.55,"x":3630},{"type":"TileBlockRight","height":513.7,"x":6130,"width":718.7,"y":671},{"type":"TileMidDip","rotation":0,"width":514.8,"y":826,"height":163,"x":5524},{"type":"Sign","x":5564,"width":201.7,"scaleX":1,"height":278.6,"signText":"Made it!  Okay, okay... breath.  Did you know you can run the other direction?  Just put in a negative number. Like this:<br><br> <span class=\"codeExample\">jaxi.run(-800);</span>","scaleY":1,"y":645},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":834,"height":176.55,"x":5174},{"type":"Ramp","x":3181,"width":944.9,"scaleX":1,"height":207.5,"scaleY":1,"y":497},{"type":"RobotJunk2","height":151.3,"x":3506,"width":297.7,"y":541},{"type":"gjaxi","x":908,"y":-362},{"type":"RobotJunk1","height":184.5,"x":2426,"width":276.65,"y":515},{"type":"RobotJunk2","height":151.3,"x":5617,"width":297.7,"y":767},{"type":"ParallaxFG","height":1024,"x":0,"width":337,"y":0}]}
var levelZoom = .17;
var levelCamera = false;
var levelBGUrl = '../assets/images/junkyard/background.png';
//doPan(0, 90);

var level = {"elements":[{"type":"RobotJunk1","width":276.65,"x":3567,"height":184.5,"y":231},{"type":"TileEndLeft","x":368,"height":160.35,"y":2182,"width":190.65,"rotation":0},{"type":"TileEndRight","x":520,"height":160.35,"y":2181,"width":190.65,"rotation":0},{"type":"BubblePop","width":177.6,"x":346,"height":174.8,"y":1804},{"type":"gjaxi","x":456,"y":1925},{"type":"TileEndLeft","x":1038,"height":160.35,"y":2182,"width":190.65,"rotation":0},{"type":"TileEndRight","x":1190,"height":160.35,"y":2181,"width":190.65,"rotation":0},{"type":"TileEndLeft","x":1773,"height":160.35,"y":2182,"width":190.65,"rotation":0},{"type":"TileEndRight","x":1925,"height":160.35,"y":2181,"width":190.65,"rotation":0},{"type":"TileEndLeft","x":2612,"height":160.35,"y":2182,"width":190.65,"rotation":0},{"type":"TileEndRight","x":2764,"height":160.35,"y":2181,"width":190.65,"rotation":0},{"type":"TileEndLeft","x":3619,"height":160.35,"y":2182,"width":190.65,"rotation":0},{"type":"TileEndRight","x":3771,"height":160.35,"y":2181,"width":190.65,"rotation":0},{"type":"TileEndLeft","x":3956,"height":160.35,"y":2182,"width":190.65,"rotation":0},{"type":"TileEndRight","x":4108,"height":160.35,"y":2181,"width":190.65,"rotation":0},{"type":"TileEndLeft","x":4695,"height":160.35,"y":1204,"width":190.65,"rotation":0},{"type":"TileEndRight","x":4847,"height":160.35,"y":1204,"width":190.65,"rotation":0},{"type":"TileEndLeft","x":5032,"height":160.35,"y":1205,"width":190.65,"rotation":0},{"type":"TileEndRight","x":5184,"height":160.35,"y":1204,"width":190.65,"rotation":0},{"type":"Rock1","x":5070,"height":197.15,"y":1059,"width":417.85,"scaleX":1,"scaleY":1},{"type":"Sign","x":4910,"height":285.75,"y":997,"width":287.45,"signText":"Doing great!","scaleX":1,"scaleY":1},{"type":"TileEndLeft","x":3315,"height":160.35,"y":373,"width":190.65,"rotation":0},{"type":"TileEndRight","x":3467,"height":160.35,"y":372,"width":190.65,"rotation":0},{"type":"TileEndLeft","x":3652,"height":160.35,"y":373,"width":190.65,"rotation":0},{"type":"TileEndRight","x":3804,"height":160.35,"y":372,"width":190.65,"rotation":0},{"type":"TileEndLeft","x":2064,"height":160.35,"y":373,"width":190.65,"rotation":0},{"type":"TileEndRight","x":2216,"height":160.35,"y":372,"width":190.65,"rotation":0},{"type":"TileEndLeft","x":102,"height":160.35,"y":373,"width":190.65,"rotation":0},{"type":"TileEndRight","x":254,"height":160.35,"y":372,"width":190.65,"rotation":0},{"type":"TileEndLeft","x":438,"height":160.35,"y":373,"width":190.65,"rotation":0},{"type":"TileEndRight","x":591,"height":160.35,"y":372,"width":190.65,"rotation":0},{"type":"Teleportor","width":321,"x":197,"height":322.8,"y":160},{"type":"Trigger","x":456,"height":142,"y":2026,"width":544.6,"js":"doPan(50, 190, 2200);"},{"type":"PhysicsBorderRect","x":443,"height":172.7,"y":2176,"width":343.3,"rotation":0},{"type":"PhysicsBorderRect","x":1113,"height":172.7,"y":2176,"width":343.3,"rotation":0},{"type":"PhysicsBorderRect","x":1848,"height":172.7,"y":2176,"width":343.3,"rotation":0},{"type":"PhysicsBorderRect","x":2687,"height":172.7,"y":2176,"width":343.3,"rotation":0},{"type":"PhysicsBorderRect","x":3865,"height":172.7,"y":2176,"width":686.2,"rotation":0},{"type":"PhysicsBorderRect","x":4944,"height":172.7,"y":1220,"width":686.2,"rotation":0},{"type":"PhysicsBorderRect","x":3555,"height":172.7,"y":379,"width":686.2,"rotation":0},{"type":"PhysicsBorderRect","x":2140,"height":172.7,"y":379,"width":343.3,"rotation":0},{"type":"PhysicsBorderRect","x":343,"height":172.7,"y":391,"width":686.2,"rotation":0}]}

/*
var cameraInitGame = {
	zoomInSpeed: 1000, //First zoom in to Jaxi in milliseconds
	zoomInAmount: .17, //How close will be the camera from Jaxi
	walkDistance: 1000, //Panning stage
	walkSpeed: 4000,	//Speed of the panning (amount of time it takes to do the panning)
	zoomOutAmount: .5,
	zoomOutSpeed: 1000,
};


var conversations = [
	{actions: [
		{character: "Choco", value: "//timeout", type: "js"},
		{character: "Choco", value: "//timeout", type: "js"},
		{character: "Choco", value: "doZoom(.7)", type: "js"},
		{character: "Choco", value: "You're really heating up! Try getting through this challenge...", type: "speak"},
		{character: "Choco", value: "I'm going to go explore a little bit on my own. Let's meet up in a little bit", type: "speak"},
		{character: "Choco", value: "hideSpeechBubble();", type: "js"},
		//{character: "Choco", value: "showStage(cameraInitGame)", type: "js"},
		{character: "Choco", value: "chocobot.jump(1000);", type: "js"},
		{character: "Choco", value: "chocobot.remove();", type: "js"}

	]  }
]*/