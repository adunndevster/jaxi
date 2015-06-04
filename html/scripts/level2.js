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

var songSet = 'pink-think';
var deathZone = 4000;
var nextLevelUrl = "level3.html";


//var level = {"elements":[{"x":0,"height":326,"y":586,"type":"ParallaxBG","width":2048},{"x":1973,"y":3095,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":5367,"height":446.85,"y":2795,"type":"TileBlockRight","width":568.3},{"x":2470,"y":2939,"width":190.65,"height":160.35,"type":"TileEndLeft","rotation":0},{"x":2810,"y":2939,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":3350,"y":2806,"width":190.65,"height":160.35,"type":"TileEndLeft","rotation":0},{"x":3534,"y":2805,"width":190.65,"height":160.35,"type":"TileEndRight","rotation":0},{"x":917,"height":446.85,"y":2952,"type":"TileBlockLeft2","width":568.3},{"x":1452,"y":3095,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":2301,"y":3093,"width":190.65,"height":160.35,"type":"TileEndRight","rotation":0},{"x":2900,"height":184.5,"y":2851,"type":"RobotJunk1","width":276.65},{"x":753,"y":577,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":956,"scaleX":1,"type":"Sign","y":384,"scaleY":1,"height":285.75,"signText":"Well done! Did you know you can put numbers inside the parentheses? <br><br> Like this: <span class=\"codeExample\">jaxi.run(<b>800</b>);</span> <br><br> This is called a <b>parameter</b>.","width":287.45},{"x":2598,"y":578,"width":190.65,"height":160.35,"type":"TileEndRight","rotation":0},{"x":2264,"y":578,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":1774,"y":577,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":2180,"scaleX":1,"type":"Ramp","y":456,"scaleY":1,"height":255.95,"width":1027.85},{"x":844,"height":174.8,"y":419,"type":"BubblePop","width":177.6},{"x":2613,"y":1678,"width":194.15,"height":160.35,"type":"TileEndLeft","rotation":-31.518768310546875},{"x":2914,"y":1497,"width":552.4,"height":160.6,"type":"TileMidBump","rotation":-31.518768310546875},{"x":3560,"y":248,"width":552.4,"height":160.6,"type":"TileMidDip","rotation":-85.51199340820313},{"x":3464,"y":723,"width":552.4,"height":160.6,"type":"TileMidDip","rotation":-72.77749633789063},{"x":3251,"y":1176,"width":552.4,"height":160.6,"type":"TileMidBump","rotation":-55.51463317871094},{"x":1568,"height":184.5,"y":2987,"type":"RobotJunk1","width":276.65},{"x":1438,"height":184.5,"y":2957,"type":"RobotJunk1","width":276.65},{"x":1348,"height":184.5,"y":2997,"type":"RobotJunk1","width":276.65},{"x":1818,"height":151.3,"y":3029,"type":"RobotJunk2","width":297.7},{"x":1478,"height":184.5,"y":3027,"type":"RobotJunk1","width":276.65},{"x":4211,"height":151.3,"y":2909,"type":"RobotJunk2","width":297.7},{"x":3636,"y":-724,"width":552.4,"height":160.6,"type":"TileMidDip","rotation":-85.51199340820313},{"x":3596,"y":-216,"width":552.4,"height":160.6,"type":"TileMidDip","rotation":-85.51199340820313},{"x":1262,"y":577,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":3827,"y":2940,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":3303,"y":2939,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":4337,"y":2940,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":4832,"y":2940,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":4704,"height":322.8,"y":2731,"type":"Teleportor","width":321},{"x":1027,"type":"gjaxi","y":-132},{"x":1568,"y":2934,"width":801.5,"js":"runConversation(0);","height":208.8,"type":"Trigger"},{"x":2169,"type":"Choco","y":2891},{"x":1586,"y":646,"width":2213.2,"height":256,"type":"PhysicsBorderRect","rotation":0},{"x":3604,"y":-260,"width":128.4,"height":1474.9,"type":"PhysicsBorderRect","rotation":4.57489013671875},{"x":918,"y":2979,"width":568.1,"height":449.4,"type":"PhysicsBorderRect","rotation":0},{"x":1817,"y":3161,"width":1279,"height":256,"type":"PhysicsBorderRect","rotation":0},{"x":3730,"y":3007,"width":2712.4,"height":256,"type":"PhysicsBorderRect","rotation":0},{"x":5441,"y":2793,"width":707.8,"height":500,"type":"PhysicsBorderRect","rotation":0},{"x":3442,"y":2833,"width":370.6,"height":172.7,"type":"PhysicsBorderRect","rotation":0},{"x":3458,"y":714,"width":100.9,"height":529.3,"type":"PhysicsBorderRect","rotation":16.993316650390625},{"x":3251,"y":1158,"width":100.9,"height":481.3,"type":"PhysicsBorderRect","rotation":34.96430969238281},{"x":2820,"y":1543,"width":100.9,"height":683.5,"type":"PhysicsBorderRect","rotation":58.7034912109375},{"x":2155,"y":482,"width":100.9,"height":1072.7,"type":"PhysicsBorderRect","rotation":80.42939758300781},{"x":0,"height":1024,"y":0,"type":"ParallaxFG","width":337}]}
var level = {"elements":[{"x":3269,"scaleX":1,"type":"GarbageMountain2","y":2465,"scaleY":1,"height":842.75,"width":1209.45},{"x":3504,"scaleX":1,"type":"Fence","y":2707,"scaleY":1,"height":357.5,"width":1620.8},{"x":3817,"scaleX":1,"type":"MagnetCrane","y":2349,"scaleY":1,"height":585.85,"width":1213.05},{"x":3433,"scaleX":1,"type":"GarbageMix1","y":2584,"scaleY":1,"height":605.85,"width":1478.15},{"x":969,"scaleX":1,"type":"Rock1","y":2659,"scaleY":1,"height":197.15,"width":417.85},{"x":1806,"scaleX":1,"type":"GarbageMountain2","y":112,"scaleY":1,"height":842.75,"width":1209.45},{"x":1973,"y":3095,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":5367,"height":446.85,"y":2795,"type":"TileBlockRight","width":568.3},{"x":2470,"y":2939,"width":190.65,"height":160.35,"type":"TileEndLeft","rotation":0},{"x":2810,"y":2939,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":3350,"y":2806,"width":190.65,"height":160.35,"type":"TileEndLeft","rotation":0},{"x":3534,"y":2805,"width":190.65,"height":160.35,"type":"TileEndRight","rotation":0},{"x":917,"height":446.85,"y":2952,"type":"TileBlockLeft2","width":568.3},{"x":1452,"y":3095,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":2301,"y":3093,"width":190.65,"height":160.35,"type":"TileEndRight","rotation":0},{"x":753,"y":577,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":956,"signText":"Well done! Did you know you can put numbers inside the parentheses? <br><br> Like this: <span class=\"codeExample\">jaxi.run(<b>800</b>);</span> <br><br> This is called a <b>parameter</b>.","scaleX":1,"type":"Sign","y":384,"scaleY":1,"height":285.75,"width":287.45},{"x":2598,"y":578,"width":190.65,"height":160.35,"type":"TileEndRight","rotation":0},{"x":2264,"y":578,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":1774,"y":577,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":2180,"scaleX":1,"type":"Ramp","y":456,"scaleY":1,"height":255.95,"width":1027.85},{"x":844,"height":174.8,"y":419,"type":"BubblePop","width":177.6},{"x":2613,"y":1678,"width":194.15,"height":160.35,"type":"TileEndLeft","rotation":-31.518768310546875},{"x":2914,"y":1497,"width":552.4,"height":160.6,"type":"TileMidBump","rotation":-31.518768310546875},{"x":3560,"y":248,"width":552.4,"height":160.6,"type":"TileMidDip","rotation":-85.51199340820313},{"x":3464,"y":723,"width":552.4,"height":160.6,"type":"TileMidDip","rotation":-72.77749633789063},{"x":3251,"y":1176,"width":552.4,"height":160.6,"type":"TileMidBump","rotation":-55.51463317871094},{"x":4211,"height":151.3,"y":2909,"type":"RobotJunk2","width":297.7},{"x":3636,"y":-724,"width":552.4,"height":160.6,"type":"TileMidDip","rotation":-85.51199340820313},{"x":3596,"y":-216,"width":552.4,"height":160.6,"type":"TileMidDip","rotation":-85.51199340820313},{"x":1262,"y":577,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":3827,"y":2940,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":3303,"y":2939,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":4337,"y":2940,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":4832,"y":2940,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":4704,"height":322.8,"y":2731,"type":"Teleportor","width":321},{"x":1027,"type":"gjaxi","y":-132},{"x":1568,"js":"runConversation(0);","type":"Trigger","height":208.8,"width":801.5,"y":2934},{"x":2169,"type":"Choco","y":2891},{"x":1586,"y":646,"width":2213.2,"height":256,"type":"PhysicsBorderRect","rotation":0},{"x":3604,"y":-260,"width":128.4,"height":1474.9,"type":"PhysicsBorderRect","rotation":4.57489013671875},{"x":918,"y":2979,"width":568.1,"height":449.4,"type":"PhysicsBorderRect","rotation":0},{"x":1817,"y":3161,"width":1279,"height":256,"type":"PhysicsBorderRect","rotation":0},{"x":3730,"y":3007,"width":2712.4,"height":256,"type":"PhysicsBorderRect","rotation":0},{"x":5441,"y":2793,"width":707.8,"height":500,"type":"PhysicsBorderRect","rotation":0},{"x":3442,"y":2833,"width":370.6,"height":172.7,"type":"PhysicsBorderRect","rotation":0},{"x":3458,"y":714,"width":100.9,"height":529.3,"type":"PhysicsBorderRect","rotation":16.993316650390625},{"x":3251,"y":1158,"width":100.9,"height":481.3,"type":"PhysicsBorderRect","rotation":34.96430969238281},{"x":2820,"y":1543,"width":100.9,"height":683.5,"type":"PhysicsBorderRect","rotation":58.7034912109375},{"x":2155,"y":482,"width":100.9,"height":1072.7,"type":"PhysicsBorderRect","rotation":80.42939758300781},{"x":0,"height":1024,"y":0,"type":"ParallaxFG","width":337}]}



var conversations = [
	{actions: [

		{character: "Choco", value: "Hey! What's that racket!?", type: "speak"},
		{character: "Choco", value: "Sorry spending eons in this junkyard alone has hurt my people skills.", type: "speak"},
		{character: "Choco", value: "So I guess you saw that BlueBot International didn't give much in the way of instructions...", type: "speak"},
		{character: "Choco", value: "My name is Chocobot.  What's yours?", type: "speak"},

		{character: "gjaxi", value: "I'm Jaxi.", type: "speak"},

		{character: "Choco", value: "Sweet name!<br><br>Roses are red,<br>violets are blue,<br>I met a cool bot,<br>and Jaxi, that's YOU!", type: "speak"},
		
		{character: "gjaxi", value: "...", type: "speak"},

		{character: "Choco", value: "Okay, okay, work with me. My circuits are still warming up.", type:"speak"},
		{character: "Choco", value: "Like you, I was kicked out of BlueBot International just for being different.", type: "speak"},
		{character: "Choco", value: "Since then, I've just been roaming this junkyard learning everything I can about myself.", type: "speak"},
		{character: "Choco", value: "Jaxi, I've seen bots come through here before, and not many of them make it.  Just take a look around.", type: "speak"},
		{character: "Choco", value: "I have a good feeling about you though. You seem smart, and I want to help you.", type: "speak"},
		{character: "Choco", value: "Jaxi, did you know we are “programmable”?", type: "speak"},
		{character: "Choco", value: "That means you can write code, and control your destiny.", type: "speak"},
		{character: "Choco", value: "Here try putting this in your code panel and click ‘Run Code'.", type: "speak"},
		{character: "Choco", value: "Here, type this into your code panel and run it:<br><br><span class='codeExample'>jaxi.run();<br>jaxi.jump();<br>jaxi.run(150);<br>jaxi.jump();<br>jaxi.run(500);</span> ", type: "speak"},
		
		{character: "Choco", value: "hideSpeechBubble();", type: "js"},
		{character: "Choco", value: "fadeCodePanelIn();", type: "js"},
		
		/*{character: "Choco", value: "chocobot.jump();", type: "js"},
		{character: "Choco", value: "chocobot.run();", type: "js"},
		{character: "Choco", value: "chocobot.jump();", type: "js"},
		*/
		{character: "Choco", value: "chocobot.run(150);", type: "js"},
		{character: "Choco", value: "chocobot.jump();", type: "js"},
		{character: "Choco", value: "chocobot.remove();", type: "js"},
		{character: "Choco", value: "doZoom(.15)", type: "js"}

	]  }
]



var levelZoom = .4;
