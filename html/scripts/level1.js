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
	{src: "assets/images/gSign.png", id: "Sign"},
	{src: "assets/images/Teleportor.png", id: "Teleportor"},
	{src: "assets/images/mcParalaxBG_JunkYard.png", id: "ParallaxBG"},
	{src: "assets/images/mcCables.png", id: "ParallaxFG"},
	{src: "assets/images/PinkSprites.png", id: "gjaxi"},
];

var songSet = 'pink-think';
var deathZone = 4000;
var nextLevelUrl = "level2.html";
var level = {"elements":[{"type":"ParallaxBG","x":0,"height":326,"y":586,"width":2048},{"x":753,"rotation":0,"y":580,"type":"TileMidBump","height":183,"width":516.55},{"x":956,"y":394,"type":"Sign","scaleX":1,"height":278.6,"signText":"Hello bot.  Don't worry, you are just here because you have been rejected <b>&#9786;</b>. To help you make your way in this lonely world, we have provided some instructions. You can do things by accessing your code panel. Type this into the code panel on the right then click the \"Run Code\" button:<br><br> <span class=\"codeExample\">jaxi.run();</span>","scaleY":1,"width":201.7},{"type":"RobotJunk1","x":640,"height":184.5,"y":325,"width":276.65},{"type":"TileBlockLeft","x":146,"height":436.15,"y":454,"width":712.35},{"type":"RobotJunk1","x":420,"height":184.5,"y":405,"width":276.65},{"type":"RobotJunk2","x":675,"height":151.3,"y":417,"width":297.7},{"type":"RobotJunk1","x":540,"height":184.5,"y":405,"width":276.65},{"type":"RobotJunk1","x":640,"height":184.5,"y":445,"width":276.65},{"type":"RobotJunk2","x":725,"height":151.3,"y":487,"width":297.7},{"type":"RobotJunk2","x":425,"height":151.3,"y":327,"width":297.7},{"type":"TileMidDip","x":1522,"height":163,"y":569,"width":1028.2},{"type":"TileBlockRight","x":2381,"height":513.7,"y":410,"width":718.7},{"type":"Teleportor","x":1731,"height":322.8,"y":393,"width":321},{"x":908,"y":-362,"type":"gjaxi"},{"x":207,"rotation":14.998931884765625,"y":673,"type":"PhysicsBorderRect","height":591.6,"width":941.7},{"x":2493,"rotation":0,"y":355,"type":"PhysicsBorderRect","height":591.6,"width":941.7},{"x":1386,"rotation":0,"y":659,"type":"PhysicsBorderRect","height":256,"width":1295.5},{"x":896,"js":"doZoom(.4, 3000);","y":487,"type":"Trigger","height":47.3,"width":319.8},{"x":1573,"js":"doZoom(.8);","y":487,"type":"Trigger","height":47.3,"width":319.8},{"type":"ParallaxFG","x":0,"height":1024,"y":0,"width":337}]}
//var level = {"elements":[{"type":"ParallaxBG","width":2048,"x":0,"height":326,"y":586},{"type":"TileMidBump","x":753,"height":183,"y":580,"width":516.55,"rotation":0},{"type":"Sign","x":956,"signText":"Hello bot.  Don't worry, you are just here because you have been rejected <b>&#9786;</b>. To help you make your way in this lonely world, we have provided some instructions. You can do things by accessing your code panel. Type this into the code panel on the right then click the \"Run Code\" button:<br><br> <span class=\"codeExample\">jaxi.run();</span>","height":278.6,"y":394,"width":201.7,"scaleX":1,"scaleY":1},{"type":"RobotJunk1","width":276.65,"x":640,"height":184.5,"y":325},{"type":"TileBlockLeft","width":712.35,"x":146,"height":436.15,"y":454},{"type":"RobotJunk1","width":276.65,"x":420,"height":184.5,"y":405},{"type":"RobotJunk2","width":297.7,"x":675,"height":151.3,"y":417},{"type":"RobotJunk1","width":276.65,"x":540,"height":184.5,"y":405},{"type":"RobotJunk1","width":276.65,"x":640,"height":184.5,"y":445},{"type":"RobotJunk2","width":297.7,"x":725,"height":151.3,"y":487},{"type":"RobotJunk2","width":297.7,"x":425,"height":151.3,"y":327},{"type":"TileMidDip","x":1522,"height":163,"y":569,"width":1028.2,"rotation":0},{"type":"TileBlockRight","width":718.7,"x":2381,"height":513.7,"y":410},{"type":"Teleportor","width":321,"x":1731,"height":322.8,"y":393},{"type":"gjaxi","x":908,"y":-362},{"type":"PhysicsBorderRect","x":207,"height":591.6,"y":673,"width":941.7,"rotation":14.998931884765625},{"type":"PhysicsBorderRect","x":2493,"height":591.6,"y":355,"width":941.7,"rotation":0},{"type":"PhysicsBorderRect","x":1386,"height":256,"y":659,"width":1295.5,"rotation":0},{"type":"Trigger","x":896,"height":47.3,"y":487,"width":319.8,"js":"doZoom(.4, 3000);"},{"type":"Trigger","x":1573,"height":47.3,"y":487,"width":319.8,"js":"doZoom(.8);"},{"type":"ParallaxFG","width":337,"x":0,"height":1024,"y":0}]}
//var level = {"elements":[{"type":"ParallaxBG","width":2048,"x":0,"height":326,"y":586},{"type":"TileMidDip","x":4336,"height":163,"y":2929,"width":514.8,"rotation":0},{"type":"TileBlockRight","width":718.7,"x":5441,"height":513.7,"y":2775},{"type":"TileMidDip","x":4836,"height":163,"y":2929,"width":514.8,"rotation":0},{"type":"Teleportor","width":321,"x":4704,"height":322.8,"y":2731},{"type":"TileEndLeft","x":2459,"height":176.55,"y":2933,"width":192.75,"rotation":0},{"type":"TileMidBump","x":2810,"height":183,"y":2939,"width":516.55,"rotation":0},{"type":"TileMidDip","x":3319,"height":163,"y":2929,"width":514.8,"rotation":0},{"type":"TileMidBump","x":3827,"height":183,"y":2939,"width":516.55,"rotation":0},{"type":"TileEndLeft","x":3350,"height":176.55,"y":2818,"width":192.75,"rotation":0},{"type":"TileEndRight","x":3534,"height":176.55,"y":2817,"width":192.85,"rotation":0},{"type":"TileMidBump","x":1452,"height":183,"y":3095,"width":516.55,"rotation":0},{"type":"TileMidDip","x":1961,"height":163,"y":3086,"width":514.8,"rotation":0},{"type":"TileEndRight","x":2301,"height":176.55,"y":3092,"width":192.85,"rotation":0},{"type":"RobotJunk1","width":276.65,"x":2900,"height":184.5,"y":2851},{"type":"TileEndLeft","x":403,"height":176.55,"y":574,"width":192.75,"rotation":0},{"type":"TileMidBump","x":753,"height":183,"y":577,"width":516.55,"rotation":0},{"type":"TileMidDip","x":1262,"height":163,"y":567,"width":514.8,"rotation":0},{"type":"Sign","x":956,"height":278.6,"y":384,"signText":"Well done! Did you know you can put numbers inside the parentheses? <br><br> Like this: <span class=\"codeExample\">jaxi.run(<b>800</b>);</span> <br><br> This is called a <b>parameter</b>.","width":201.7,"scaleX":1,"scaleY":1},{"type":"TileEndRight","x":2598,"height":176.55,"y":578,"width":192.85,"rotation":0},{"type":"TileMidBump","x":2264,"height":183,"y":578,"width":516.55,"rotation":0},{"type":"TileMidBump","x":1774,"height":183,"y":578,"width":516.55,"rotation":0},{"type":"Ramp","x":2181,"height":207.5,"y":480,"width":944.9,"scaleX":1,"scaleY":1},{"type":"BubblePop","width":177.6,"x":844,"height":174.8,"y":419},{"type":"TileEndLeft","x":2613,"height":176.55,"y":1678,"width":196.6,"rotation":-31.518768310546875},{"type":"TileMidBump","x":2914,"height":183,"y":1497,"width":520.55,"rotation":-31.518768310546875},{"type":"TileMidDip","x":3557,"height":163,"y":302,"width":518.35,"rotation":-85.51199340820313},{"type":"TileEndRight","x":3685,"height":176.55,"y":-1017,"width":192.85,"rotation":-74.99945068359375},{"type":"TileMidDip","x":3464,"height":163,"y":749,"width":518.35,"rotation":-70.51361083984375},{"type":"TileMidBump","x":3252,"height":183,"y":1178,"width":520.55,"rotation":-55.51463317871094},{"type":"TileBlockLeft2","width":718.7,"x":856,"height":520.05,"y":2925},{"type":"RobotJunk1","width":276.65,"x":1568,"height":184.5,"y":2987},{"type":"RobotJunk1","width":276.65,"x":1438,"height":184.5,"y":2957},{"type":"RobotJunk1","width":276.65,"x":1348,"height":184.5,"y":2997},{"type":"RobotJunk2","width":297.7,"x":1818,"height":151.3,"y":3029},{"type":"gjaxi","x":1027,"y":-132},{"type":"Choco","x":2169,"y":2904},{"type":"RobotJunk1","width":276.65,"x":1478,"height":184.5,"y":3027},{"type":"Trigger","x":1609,"height":47.3,"y":3009,"width":801.5,"js":"runConversation(0);"},{"type":"RobotJunk2","width":297.7,"x":4211,"height":151.3,"y":2909},{"type":"TileMidDip","x":3636,"height":163,"y":-689,"width":518.35,"rotation":-85.51199340820313},{"type":"TileMidDip","x":3596,"height":163,"y":-181,"width":518.35,"rotation":-85.51199340820313},{"type":"PhysicsBorderRect","x":1486,"height":256,"y":666,"width":2332,"rotation":0},{"type":"PhysicsBorderRect","x":3626,"height":1751,"y":-209,"width":128.4,"rotation":4.9647216796875},{"type":"PhysicsBorderRect","x":887,"height":500,"y":2937,"width":643.5,"rotation":0},{"type":"PhysicsBorderRect","x":1815,"height":256,"y":3195,"width":1279,"rotation":0},{"type":"PhysicsBorderRect","x":3746,"height":256,"y":3050,"width":2681.5,"rotation":0},{"type":"PhysicsBorderRect","x":5446,"height":500,"y":2785,"width":707.8,"rotation":0},{"type":"PhysicsBorderRect","x":3439,"height":172.7,"y":2867,"width":271,"rotation":0},{"type":"PhysicsBorderRect","x":3497,"height":344.8,"y":809,"width":100.9,"rotation":19.96435546875},{"type":"PhysicsBorderRect","x":3304,"height":481.3,"y":1164,"width":100.9,"rotation":34.96430969238281},{"type":"PhysicsBorderRect","x":2888,"height":683.5,"y":1534,"width":100.9,"rotation":58.7034912109375},{"type":"ParallaxFG","width":337,"x":0,"height":1024,"y":0}]}	

var levelZoom = .25;
