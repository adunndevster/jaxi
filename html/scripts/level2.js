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
var nextLevelUrl = "level3.html";

//var level = {"elements":[{"type":"ParallaxBG","width":2048,"x":0,"height":326,"y":586},{"type":"TileMidBump","x":1973,"height":160.6,"y":3095,"width":548.9,"rotation":0},{"type":"TileBlockRight","width":568.3,"x":5367,"height":446.85,"y":2795},{"type":"Teleportor","width":321,"x":4704,"height":322.8,"y":2731},{"type":"TileEndLeft","x":2470,"height":160.35,"y":2939,"width":190.65,"rotation":0},{"type":"TileMidBump","x":2810,"height":160.6,"y":2939,"width":548.9,"rotation":0},{"type":"TileEndLeft","x":3350,"height":160.35,"y":2806,"width":190.65,"rotation":0},{"type":"TileEndRight","x":3534,"height":160.35,"y":2805,"width":190.65,"rotation":0},{"type":"TileBlockLeft2","width":568.3,"x":917,"height":446.85,"y":2952},{"type":"TileMidBump","x":1452,"height":160.6,"y":3095,"width":548.9,"rotation":0},{"type":"TileEndRight","x":2301,"height":160.35,"y":3093,"width":190.65,"rotation":0},{"type":"RobotJunk1","width":276.65,"x":2900,"height":184.5,"y":2851},{"type":"TileMidBump","x":753,"height":160.6,"y":577,"width":548.9,"rotation":0},{"type":"Sign","x":956,"height":285.75,"y":384,"width":287.45,"signText":"Well done! Did you know you can put numbers inside the parentheses? <br><br> Like this: <span class=\"codeExample\">jaxi.run(<b>800</b>);</span> <br><br> This is called a <b>parameter</b>.","scaleX":1,"scaleY":1},{"type":"TileEndRight","x":2598,"height":160.35,"y":578,"width":190.65,"rotation":0},{"type":"TileMidBump","x":2264,"height":160.6,"y":578,"width":548.9,"rotation":0},{"type":"TileMidBump","x":1774,"height":160.6,"y":577,"width":548.9,"rotation":0},{"type":"Ramp","x":2180,"height":255.95,"y":456,"width":1027.85,"scaleX":1,"scaleY":1},{"type":"BubblePop","width":177.6,"x":844,"height":174.8,"y":419},{"type":"TileEndLeft","x":2613,"height":160.35,"y":1678,"width":194.15,"rotation":-31.518768310546875},{"type":"TileMidBump","x":2914,"height":160.6,"y":1497,"width":552.4,"rotation":-31.518768310546875},{"type":"TileMidDip","x":3560,"height":160.6,"y":248,"width":552.4,"rotation":-85.51199340820313},{"type":"TileMidDip","x":3464,"height":160.6,"y":723,"width":552.4,"rotation":-72.77749633789063},{"type":"TileMidBump","x":3251,"height":160.6,"y":1176,"width":552.4,"rotation":-55.51463317871094},{"type":"RobotJunk1","width":276.65,"x":1568,"height":184.5,"y":2987},{"type":"RobotJunk1","width":276.65,"x":1438,"height":184.5,"y":2957},{"type":"RobotJunk1","width":276.65,"x":1348,"height":184.5,"y":2997},{"type":"RobotJunk2","width":297.7,"x":1818,"height":151.3,"y":3029},{"type":"Choco","x":2169,"y":2904},{"type":"RobotJunk1","width":276.65,"x":1478,"height":184.5,"y":3027},{"type":"RobotJunk2","width":297.7,"x":4211,"height":151.3,"y":2909},{"type":"TileMidDip","x":3636,"height":160.6,"y":-724,"width":552.4,"rotation":-85.51199340820313},{"type":"TileMidDip","x":3596,"height":160.6,"y":-216,"width":552.4,"rotation":-85.51199340820313},{"type":"TileMidBump","x":1262,"height":160.6,"y":577,"width":548.9,"rotation":0},{"type":"TileMidBump","x":3827,"height":160.6,"y":2940,"width":548.9,"rotation":0},{"type":"TileMidBump","x":3303,"height":160.6,"y":2939,"width":548.9,"rotation":0},{"type":"TileMidBump","x":4337,"height":160.6,"y":2940,"width":548.9,"rotation":0},{"type":"TileMidBump","x":4832,"height":160.6,"y":2940,"width":548.9,"rotation":0},{"type":"Trigger","x":1607,"height":290.9,"y":2881,"width":801.5,"js":"runConversation(0);"},{"type":"gjaxi","x":1027,"y":-132},{"type":"PhysicsBorderRect","x":1586,"height":256,"y":646,"width":2213.2,"rotation":0},{"type":"PhysicsBorderRect","x":3604,"height":1474.9,"y":-260,"width":128.4,"rotation":4.57489013671875},{"type":"PhysicsBorderRect","x":918,"height":449.4,"y":2961,"width":568.1,"rotation":0},{"type":"PhysicsBorderRect","x":1817,"height":256,"y":3170,"width":1279,"rotation":0},{"type":"PhysicsBorderRect","x":3730,"height":256,"y":3016,"width":2712.4,"rotation":0},{"type":"PhysicsBorderRect","x":5441,"height":500,"y":2793,"width":707.8,"rotation":0},{"type":"PhysicsBorderRect","x":3442,"height":172.7,"y":2840,"width":370.6,"rotation":0},{"type":"PhysicsBorderRect","x":3458,"height":529.3,"y":714,"width":100.9,"rotation":16.993316650390625},{"type":"PhysicsBorderRect","x":3251,"height":481.3,"y":1158,"width":100.9,"rotation":34.96430969238281},{"type":"PhysicsBorderRect","x":2820,"height":683.5,"y":1543,"width":100.9,"rotation":58.7034912109375},{"type":"PhysicsBorderRect","x":2155,"height":1072.7,"y":482,"width":101,"rotation":80.43025207519531},{"type":"ParallaxFG","width":337,"x":0,"height":1024,"y":0}]}
var level = {"elements":[{"type":"ParallaxBG","width":2048,"x":0,"height":326,"y":586},{"type":"TileMidBump","x":1973,"height":160.6,"y":3095,"width":548.9,"rotation":0},{"type":"TileBlockRight","width":568.3,"x":5367,"height":446.85,"y":2795},{"type":"TileEndLeft","x":2470,"height":160.35,"y":2939,"width":190.65,"rotation":0},{"type":"TileMidBump","x":2810,"height":160.6,"y":2939,"width":548.9,"rotation":0},{"type":"TileEndLeft","x":3350,"height":160.35,"y":2806,"width":190.65,"rotation":0},{"type":"TileEndRight","x":3534,"height":160.35,"y":2805,"width":190.65,"rotation":0},{"type":"TileBlockLeft2","width":568.3,"x":917,"height":446.85,"y":2952},{"type":"TileMidBump","x":1452,"height":160.6,"y":3095,"width":548.9,"rotation":0},{"type":"TileEndRight","x":2301,"height":160.35,"y":3093,"width":190.65,"rotation":0},{"type":"RobotJunk1","width":276.65,"x":2900,"height":184.5,"y":2851},{"type":"TileMidBump","x":753,"height":160.6,"y":577,"width":548.9,"rotation":0},{"type":"Sign","x":956,"signText":"Okay! It looks like you are ready to take on the world! Okay, fine, just one last tip. You can run really fast by putting a <strong>parameter</strong> in your 'jaxi.run()' <strong>function</strong>. <br><br> Type the following into your code panel, and click 'Run Code':<br><br> <span class=\"codeExample\">jaxi.run(<b>800</b>);</span>","height":285.75,"y":384,"width":287.45,"scaleX":1,"scaleY":1},{"type":"TileEndRight","x":2598,"height":160.35,"y":578,"width":190.65,"rotation":0},{"type":"TileMidBump","x":2264,"height":160.6,"y":578,"width":548.9,"rotation":0},{"type":"TileMidBump","x":1774,"height":160.6,"y":577,"width":548.9,"rotation":0},{"type":"Ramp","x":2180,"height":255.95,"y":456,"width":1027.85,"scaleX":1,"scaleY":1},{"type":"BubblePop","width":177.6,"x":844,"height":174.8,"y":419},{"type":"TileEndLeft","x":2613,"height":160.35,"y":1678,"width":194.15,"rotation":-31.518768310546875},{"type":"TileMidBump","x":2914,"height":160.6,"y":1497,"width":552.4,"rotation":-31.518768310546875},{"type":"TileMidDip","x":3560,"height":160.6,"y":248,"width":552.4,"rotation":-85.51199340820313},{"type":"TileMidDip","x":3464,"height":160.6,"y":723,"width":552.4,"rotation":-72.77749633789063},{"type":"TileMidBump","x":3251,"height":160.6,"y":1176,"width":552.4,"rotation":-55.51463317871094},{"type":"RobotJunk1","width":276.65,"x":1568,"height":184.5,"y":2987},{"type":"RobotJunk1","width":276.65,"x":1438,"height":184.5,"y":2957},{"type":"RobotJunk1","width":276.65,"x":1348,"height":184.5,"y":2997},{"type":"RobotJunk2","width":297.7,"x":1818,"height":151.3,"y":3029},{"type":"RobotJunk1","width":276.65,"x":1478,"height":184.5,"y":3027},{"type":"RobotJunk2","width":297.7,"x":4211,"height":151.3,"y":2909},{"type":"TileMidDip","x":3636,"height":160.6,"y":-724,"width":552.4,"rotation":-85.51199340820313},{"type":"TileMidDip","x":3596,"height":160.6,"y":-216,"width":552.4,"rotation":-85.51199340820313},{"type":"TileMidBump","x":1262,"height":160.6,"y":577,"width":548.9,"rotation":0},{"type":"TileMidBump","x":3827,"height":160.6,"y":2940,"width":548.9,"rotation":0},{"type":"TileMidBump","x":3303,"height":160.6,"y":2939,"width":548.9,"rotation":0},{"type":"TileMidBump","x":4337,"height":160.6,"y":2940,"width":548.9,"rotation":0},{"type":"TileMidBump","x":4832,"height":160.6,"y":2940,"width":548.9,"rotation":0},{"type":"Trigger","x":1607,"height":290.9,"y":2881,"width":801.5,"js":"runConversation(0);"},{"type":"Choco","x":2169,"y":2904},{"type":"Teleportor","width":321,"x":4704,"height":322.8,"y":2731},{"type":"gjaxi","x":1027,"y":-132},{"type":"PhysicsBorderRect","x":1586,"height":256,"y":646,"width":2213.2,"rotation":0},{"type":"PhysicsBorderRect","x":3604,"height":1474.9,"y":-260,"width":128.4,"rotation":4.57489013671875},{"type":"PhysicsBorderRect","x":918,"height":449.4,"y":2961,"width":568.1,"rotation":0},{"type":"PhysicsBorderRect","x":1817,"height":256,"y":3170,"width":1279,"rotation":0},{"type":"PhysicsBorderRect","x":3730,"height":256,"y":3016,"width":2712.4,"rotation":0},{"type":"PhysicsBorderRect","x":5441,"height":500,"y":2793,"width":707.8,"rotation":0},{"type":"PhysicsBorderRect","x":3442,"height":172.7,"y":2840,"width":370.6,"rotation":0},{"type":"PhysicsBorderRect","x":3458,"height":529.3,"y":714,"width":100.9,"rotation":16.993316650390625},{"type":"PhysicsBorderRect","x":3251,"height":481.3,"y":1158,"width":100.9,"rotation":34.96430969238281},{"type":"PhysicsBorderRect","x":2820,"height":683.5,"y":1543,"width":100.9,"rotation":58.7034912109375},{"type":"PhysicsBorderRect","x":2155,"height":1072.7,"y":482,"width":100.9,"rotation":80.42939758300781},{"type":"ParallaxFG","width":337,"x":0,"height":1024,"y":0}]}


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
		{character: "Choco", value: "chocobot.jump();", type: "js"},
		{character: "Choco", value: "chocobot.run(500);", type: "js"},
		
		{character: "Choco", value: "chocobot.remove();", type: "js"},
		{character: "Choco", value: "doZoom(.15)", type: "js"}

	]  }
]



var levelZoom = .4;
