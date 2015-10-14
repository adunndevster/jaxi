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
	
	{src: "assets/images/junkyard/mcJunkyardSplash6.png", id: "JunkyardSplash6"},
	{src: "assets/images/junkyard/mcJunkyardTileFloor1.png", id: "JunkyardTileFloor1"},
	
	{src: "assets/images/items/Button.png", id: "Button"},

	
	{src: "assets/images/TeddyBot_Sitting.png", id: "TeddyBot"},
	{src: "assets/images/mcBearDoor.png", id: "BearDoor"},
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
var nextLevelUrl = "level9.html";
var levelCamera = false;
var oneShotLevel = true;
var levelBGUrl = '../assets/images/junkyard/background_tummy.png';
//var level = {"elements":[{"type":"ParallaxBG","height":326,"x":0,"width":2048,"y":586},{"type":"TileMidBump","rotation":0,"width":516.55,"y":576,"height":183,"x":753},{"type":"Sign","x":956,"width":201.7,"scaleX":1,"height":278.6,"signText":"Hello bot.  Don't worry, you are just here because you have been rejected <b>&#9786;</b>. To help you make your way in this lonely world, we have provided some instructions. You can do things by accessing your code panel. Type this into the code panel on the right then click the \"Run Code\" button:<br><br> <span class=\"codeExample\">jaxi.run();</span>","scaleY":1,"y":394},{"type":"RobotJunk1","height":184.5,"x":640,"width":276.65,"y":325},{"type":"TileBlockLeft","height":436.15,"x":146,"width":712.35,"y":450},{"type":"RobotJunk1","height":184.5,"x":420,"width":276.65,"y":405},{"type":"RobotJunk2","height":151.3,"x":675,"width":297.7,"y":417},{"type":"RobotJunk1","height":184.5,"x":540,"width":276.65,"y":405},{"type":"RobotJunk1","height":184.5,"x":640,"width":276.65,"y":445},{"type":"RobotJunk2","height":151.3,"x":725,"width":297.7,"y":487},{"type":"RobotJunk2","height":151.3,"x":425,"width":297.7,"y":327},{"type":"TileMidDip","rotation":0,"width":514.8,"y":1786,"height":163,"x":2650},{"type":"TileEndRight","rotation":0,"width":192.85,"y":1793,"height":176.55,"x":3504},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":2009,"height":176.55,"x":3671},{"type":"TileEndRight","rotation":0,"width":192.85,"y":2009,"height":176.55,"x":3860},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":2225,"height":176.55,"x":3995},{"type":"TileEndRight","rotation":0,"width":192.85,"y":2225,"height":176.55,"x":4184},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":2404,"height":176.55,"x":4338},{"type":"TileMidBump","rotation":0,"width":516.55,"y":2408,"height":183,"x":4689},{"type":"RobotJunk1","height":184.5,"x":5322,"width":276.65,"y":2309},{"type":"TileMidDip","rotation":0,"width":514.8,"y":2398,"height":163,"x":5199},{"type":"TileEndRight","rotation":0,"width":192.85,"y":2406,"height":176.55,"x":5551},{"type":"Ramp","x":5155,"width":944.9,"scaleX":1,"height":207.5,"scaleY":1,"y":2309},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":2420,"height":176.55,"x":6891},{"type":"TileMidBump","rotation":0,"width":516.55,"y":2423,"height":183,"x":7239},{"type":"TileMidDip","rotation":0,"width":514.8,"y":2413,"height":163,"x":7749},{"type":"TileEndRight","rotation":0,"width":192.85,"y":2421,"height":176.55,"x":8098},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":2296,"height":176.55,"x":8261},{"type":"TileMidDip","rotation":0,"width":514.8,"y":2288,"height":163,"x":8612},{"type":"Teleportor","height":322.8,"x":8686,"width":321,"y":2126},{"type":"TileBlockRight","height":513.7,"x":9219,"width":718.7,"y":2133},{"type":"TileMidBump","rotation":0,"width":516.55,"y":1796,"height":183,"x":3161},{"type":"TileMidBump","rotation":0,"width":516.55,"y":1796,"height":183,"x":2140},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":1657,"height":176.55,"x":2416},{"type":"TileEndRight","rotation":0,"width":192.85,"y":1657,"height":176.55,"x":2605},{"type":"Sign","x":2551,"width":201.7,"scaleX":1,"height":278.6,"signText":"Looks like you know how to get around! See if you can get to that tele-porter ahead.","scaleY":1,"y":1458},{"type":"RobotJunk1","height":184.5,"x":2522,"width":276.65,"y":1526},{"type":"Sign","x":2159,"width":201.7,"scaleX":1,"height":278.6,"signText":"Whew close!  Who designed this junkyard?  Try jumping!  Change your code to:<br><br> <span class=\"codeExample\">jaxi.jump();</span> <br><br><b>Remember to take the number out of the function&#9786;</b>","scaleY":1,"y":1616},{"type":"TileBlockLeft2","height":520.05,"x":1536,"width":718.7,"y":1627},{"type":"TileMidDip","rotation":0,"width":514.8,"y":567,"height":163,"x":1264},{"type":"TileMidDip","rotation":0,"width":514.8,"y":567,"height":163,"x":1774},{"type":"Sign","x":1482,"width":201.7,"scaleX":1,"height":278.6,"signText":"Good. Now you can tell your bot to run faster by putting a bigger number in the <b>function</b>.<br><br>Change it to: <br><br><span class=\"codeExample\">jaxi.run(300);</span>","scaleY":1,"y":394},{"type":"TileMidBump","rotation":0,"width":516.55,"y":577,"height":183,"x":2275},{"type":"TileMidDip","rotation":0,"width":514.8,"y":568,"height":163,"x":2786},{"type":"Sign","x":2922,"width":201.7,"scaleX":1,"height":278.6,"signText":"Hmmm... a ramp.  Let's fly off this thing and make over the little canyon coming up.  What speed do you think you need?  Maybe 800?","scaleY":1,"y":394},{"type":"TileMidBump","rotation":0,"width":516.55,"y":577,"height":183,"x":3280},{"type":"TileEndRight","rotation":0,"width":192.85,"y":574,"height":176.55,"x":3630},{"type":"TileBlockRight","height":513.7,"x":6130,"width":718.7,"y":671},{"type":"TileMidDip","rotation":0,"width":514.8,"y":826,"height":163,"x":5524},{"type":"Sign","x":5564,"width":201.7,"scaleX":1,"height":278.6,"signText":"Made it!  Okay, okay... breath.  Did you know you can run the other direction?  Just put in a negative number. Like this:<br><br> <span class=\"codeExample\">jaxi.run(-800);</span>","scaleY":1,"y":645},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":834,"height":176.55,"x":5174},{"type":"Ramp","x":3181,"width":944.9,"scaleX":1,"height":207.5,"scaleY":1,"y":497},{"type":"RobotJunk2","height":151.3,"x":3506,"width":297.7,"y":541},{"type":"gjaxi","x":908,"y":-362},{"type":"RobotJunk1","height":184.5,"x":2426,"width":276.65,"y":515},{"type":"RobotJunk2","height":151.3,"x":5617,"width":297.7,"y":767},{"type":"ParallaxFG","height":1024,"x":0,"width":337,"y":0}]}

var level = {"elements":[{"type":"Teleportor","width":321,"x":5052,"height":322.8,"y":2551},{"type":"Trigger","x":8899,"js":"runConversation(0);","height":300.5,"y":-689,"width":544.6},{"type":"Trigger","x":465,"js":"runConversation(0);","height":300.5,"y":1699,"width":544.6},{"type":"JunkyardTileFloor1","width":764.25,"x":462,"height":153.95,"y":1927},{"type":"JunkyardTileFloor1","width":764.25,"x":1223,"height":153.95,"y":1928},{"type":"JunkyardTileFloor1","width":764.25,"x":1986,"height":153.95,"y":1928},{"type":"JunkyardTileFloor1","width":764.25,"x":2729,"height":153.95,"y":1564},{"type":"JunkyardTileFloor1","width":764.25,"x":1734,"height":153.95,"y":1081},{"type":"JunkyardTileFloor1","width":764.25,"x":970,"height":153.95,"y":1081},{"type":"JunkyardTileFloor1","width":764.25,"x":1735,"height":153.95,"y":150},{"type":"JunkyardTileFloor1","width":764.25,"x":2738,"height":153.95,"y":1928},{"type":"JunkyardTileFloor1","width":764.25,"x":3499,"height":153.95,"y":1929},{"type":"JunkyardTileFloor1","width":764.25,"x":4262,"height":153.95,"y":1929},{"type":"JunkyardTileFloor1","width":764.25,"x":-1825,"height":153.95,"y":1926},{"type":"JunkyardTileFloor1","width":764.25,"x":-1064,"height":153.95,"y":1927},{"type":"JunkyardTileFloor1","width":764.25,"x":-301,"height":153.95,"y":1927},{"type":"Choco","x":1489,"y":773},{"type":"gjaxi","x":380,"y":1488},{"type":"Button","x":1889,"js":"window.location = nextLevelUrl;","height":48.35,"y":27,"width":155.55},{"type":"JunkyardSplash6","width":449.25,"x":1683,"height":221.95,"y":1902},{"type":"JunkyardSplash6","width":449.25,"x":843,"height":221.95,"y":1071},{"type":"JunkyardSplash6","width":449.25,"x":1576,"height":221.95,"y":138},{"type":"PhysicsBorderRect","x":1218,"height":140.9,"y":1912,"width":6851.1,"rotation":0},{"type":"TileMidBump","x":4865,"height":160.6,"y":907,"width":548.9,"rotation":-90},{"type":"PhysicsBorderRect","x":4876,"height":140.9,"y":906,"width":549.3,"rotation":-90},{"type":"PhysicsBorderRect","x":2729,"height":140.9,"y":1545,"width":764.2,"rotation":0},{"type":"PhysicsBorderRect","x":1352,"height":140.9,"y":1061,"width":1527,"rotation":0},{"type":"PhysicsBorderRect","x":1735,"height":140.9,"y":131,"width":765.6,"rotation":0}]}


var conversations = [
	{actions: [
		{character: "Choco", value: "doPan(20,90)", type: "js"},
		{character: "Choco", value: "//timeout", type: "js"},
		{character: "Choco", value: "Jaxi! Jaxi! Over here!", type: "speak"},
		{character: "gjaxi", value: "Choco!? What are you doing in here?", type: "speak"},
		{character: "Choco", value: "This giant bear-robot thing grabbed me and gobbled me up... Said something about, \"a yummy shiny chocolate robot...\"", type: "speak"},
		{character: "gjaxi", value: "Yikes! Let me help get you out of here...", type: "speak"},
		{character: "Choco", value: "Right, I think you just need to step on that switch over there...", type: "speak"},
		{character: "gjaxi", value: "I'm on it! Well... not yet, but I will be!", type: "speak"},
		{character: "Choco", value: "I know you can do it! Oh and Jaxi, be careful! That chocolate is sticky.", type: "speak"},
		{character: "Choco", value: "hideSpeechBubble();", type: "js"}
	]  }
]

levelZoom = .3;

