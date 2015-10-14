function includeJS(incFile){
   document.write('<script type="text/javascript" src="'+ incFile+ '"></script>');
}

//Include all necessary files

includeJS('https://code.createjs.com/createjs-2015.05.21.min.js');
includeJS('libs/jquery-1.7.1.min.js');
includeJS('libs/acorn.js');
includeJS('scripts/game/sound-manager.js');
includeJS('scripts/parser.js');
includeJS('scripts/game/physics.js');
includeJS('scripts/presentation.js');
includeJS('scripts/game/tooltip.js');
includeJS('scripts/game/obstacle.js');
includeJS('scripts/game/settings.js');
includeJS('scripts/jaxi.js');
includeJS('scripts/choco.js');
includeJS('scripts/teddybot.js');


var stage, gameSprite, parallaxBGSprite, parallaxFGSprite;
var gjaxi, b2jaxi, Choco, b2choco;
var w, h;
var zoom = .5;
var assets;
var canvas, context, debugCanvas, debugContext;

var currentCheckPoint;
var checkPoints = [];
var urlVars;
var songManager, song, tracks;

var b2Vec2;
var b2BodyDef;
var b2Body;
var b2FixtureDef;
var b2Fixture;
var b2World;
var b2PolygonShape;
var b2CircleShape;
var b2DebugDraw;
var b2ContactListener;
var bodiesToRemove = [];

var isChopperUp = false;
var isCameraOn = true;
isFollowing = false;
var tooltip;

var obstacles = [];
var queue;
var soundManager;


function loadJS(file) {
    // DOM: Create the script element
    var jsElm = document.createElement("script");
    // set the type attribute
    jsElm.type = "application/javascript";
    // make the script element load file
    jsElm.src = file;
    // finally insert the element to the body element in order to load the script
    document.body.appendChild(jsElm);
}

function JaxiInit()
{
	
	
	b2Vec2 = Box2D.Common.Math.b2Vec2;
	b2BodyDef = Box2D.Dynamics.b2BodyDef;
	b2Body = Box2D.Dynamics.b2Body;
	b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
	b2Fixture = Box2D.Dynamics.b2Fixture;
	b2World = Box2D.Dynamics.b2World;
	b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
	b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
	b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
	b2ContactListener = Box2D.Dynamics.b2ContactListener;
	bodiesToRemove = [];
	
	soundManager = new SoundManager();
	soundManager.backgroundSound(Settings.sounds.junkyard);

	//get the url vars
	urlVars = getUrlVars();
	//example
	//alert(urlVars['cp']);

	actions = [];

	//setup styling
	$('#msgBox').fadeOut(0);

	document.getElementById("loader").className = "loader";


	canvas = document.getElementById("mainStage");
	context = canvas.getContext('2d');
	debugCanvas = document.getElementById("debugCanvas");
	debugContext = debugCanvas.getContext('2d');
	context = canvas.getContext('2d');
	stage = new createjs.Stage(canvas);

	parallaxBGSprite = new  createjs.Container();
	stage.addChild(parallaxBGSprite);
	gameSprite = new  createjs.Container();
	stage.addChild(gameSprite);
	parallaxFGSprite = new  createjs.Container();
	stage.addChild(parallaxFGSprite);
	stage.snapPixelsEnabled = true;
	
	//Enables mouse over (mouseover and mouseout) and roll over events 
	//(rollover and rollout) for this stage's display list. http://www.createjs.com/Docs/EaselJS/classes/Stage.html#method_enableMouseOver
	stage.enableMouseOver(10);

	//box2d setup
	box2d.setup();

	$('#debug').on('click', function() { $('#debugCanvas').toggle(); });  // toggle debug view

	//sprite sheet
	var ss = new createjs.SpriteSheet({images: ["assets/images/PinkSprites.png"], frames: [[0,0,112,284,0,0.5999999999999943,0],[112,0,124,280,0,9.599999999999994,4],[236,0,145,270,0,24.599999999999994,14],[381,0,162,260,0,30.599999999999994,18],[236,0,145,270,0,24.599999999999994,14],[112,0,124,280,0,9.599999999999994,4],[543,0,143,291,0,16.599999999999994,4],[686,0,189,287,0,29.599999999999994,18],[875,0,210,272,0,40.599999999999994,22],[686,0,189,287,0,29.599999999999994,18],[543,0,143,291,0,16.599999999999994,4],[543,0,143,291,0,16.599999999999994,4],[686,0,189,287,0,29.599999999999994,18],[875,0,210,272,0,40.599999999999994,22],[875,0,210,272,0,40.599999999999994,22],[875,0,210,272,0,40.599999999999994,22],[875,0,210,272,0,40.599999999999994,22],[875,0,210,272,0,40.599999999999994,22],[875,0,210,272,0,40.599999999999994,22],[686,0,189,287,0,29.599999999999994,18],[543,0,143,291,0,16.599999999999994,4],[543,0,143,291,0,16.599999999999994,4],[1085,0,152,254,0,-17.400000000000006,-33],[1237,0,177,224,0,-17.400000000000006,-63],[1414,0,201,185,0,-17.400000000000006,-102],[1414,0,201,185,0,-17.400000000000006,-102],[1414,0,201,185,0,-17.400000000000006,-102],[1414,0,201,185,0,-17.400000000000006,-102],[1615,0,177,224,0,-17.400000000000006,-63],[1615,0,177,224,0,-17.400000000000006,-63],[1792,0,148,257,0,-17.400000000000006,-30],[0,291,133,284,0,-5.400000000000006,0],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[424,291,291,108,0,147.6,-179],[424,291,291,108,0,147.6,-179],[715,291,291,108,0,147.6,-179],[715,291,291,108,0,147.6,-179],[424,291,291,108,0,147.6,-179],[424,291,291,108,0,147.6,-179],[715,291,291,108,0,147.6,-179],[715,291,291,108,0,147.6,-179],[424,291,291,108,0,147.6,-179],[424,291,291,108,0,147.6,-179],[715,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1297,291,281,134,0,137.6,-167],[1297,291,281,134,0,137.6,-167],[1578,291,290,134,0,137.6,-167],[1578,291,290,134,0,137.6,-167],[0,575,239,176,0,108.6,-131],[0,575,239,176,0,108.6,-131],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[437,575,121,257,0,23.599999999999994,-29],[437,575,121,257,0,23.599999999999994,-29],[558,575,126,275,0,28.599999999999994,-11],[684,575,115,280,0,16.599999999999994,-6],[0,0,112,284,0,0.5999999999999943,0],[0,0,112,284,0,0.5999999999999943,0],[0,0,112,284,0,0.5999999999999943,0],[799,575,112,284,0,0.5999999999999943,0],[911,575,112,284,0,0.5999999999999943,0],[911,575,112,284,0,0.5999999999999943,0],[911,575,112,284,0,0.5999999999999943,0],[911,575,112,284,0,0.5999999999999943,0],[911,575,112,284,0,0.5999999999999943,0],[911,575,112,284,0,0.5999999999999943,0],[911,575,112,284,0,0.5999999999999943,0],[911,575,112,284,0,0.5999999999999943,0],[911,575,112,284,0,0.5999999999999943,0],[1023,575,112,284,0,0.5999999999999943,0],[1135,575,112,284,0,0.5999999999999943,0],[1247,575,112,284,0,0.5999999999999943,0],[1359,575,112,284,0,0.5999999999999943,0],[1471,575,112,284,0,0.5999999999999943,0],[1471,575,112,284,0,0.5999999999999943,0],[1471,575,112,284,0,0.5999999999999943,0],[1023,575,112,284,0,0.5999999999999943,0],[1135,575,112,284,0,0.5999999999999943,0],[1247,575,112,284,0,0.5999999999999943,0],[1359,575,112,284,0,0.5999999999999943,0],[1471,575,112,284,0,0.5999999999999943,0],[1583,575,128,284,0,0.5999999999999943,0],[1583,575,128,284,0,0.5999999999999943,0],[1711,575,128,284,0,0.5999999999999943,0],[1839,575,134,284,0,0.5999999999999943,0],[0,859,134,284,0,0.5999999999999943,0],[134,859,134,284,0,0.5999999999999943,0],[268,859,134,284,0,0.5999999999999943,0],[402,859,134,284,0,4.599999999999994,0],[402,859,134,284,0,4.599999999999994,0],[402,859,134,284,0,4.599999999999994,0],[536,859,128,284,0,0.5999999999999943,0],[536,859,128,284,0,0.5999999999999943,0],[536,859,128,284,0,0.5999999999999943,0],[664,859,134,284,0,0.5999999999999943,0],[664,859,134,284,0,0.5999999999999943,0],[664,859,134,284,0,0.5999999999999943,0],[798,859,134,284,0,4.599999999999994,0],[932,859,134,284,0,4.599999999999994,0],[1066,859,134,284,0,4.599999999999994,0],[1200,859,134,284,0,4.599999999999994,0],[1334,859,112,284,0,0.5999999999999943,0],[1446,859,112,284,0,0.5999999999999943,0],[1558,859,112,284,0,0.5999999999999943,0],[1670,859,112,284,0,0.5999999999999943,0],[1782,859,112,284,0,0.5999999999999943,0],[1894,859,112,284,0,0.5999999999999943,0],[0,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[0,0,112,284,0,0.5999999999999943,0],[0,0,112,284,0,0.5999999999999943,0],[224,1143,112,284,0,0.5999999999999943,0],[224,1143,112,284,0,0.5999999999999943,0],[336,1143,112,282,0,0.5999999999999943,-2],[336,1143,112,282,0,0.5999999999999943,-2],[448,1143,112,278,0,0.5999999999999943,-6],[448,1143,112,278,0,0.5999999999999943,-6],[560,1143,120,268,0,-0.4000000000000057,-16],[560,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[800,1143,120,268,0,-0.4000000000000057,-16],[800,1143,120,268,0,-0.4000000000000057,-16],[920,1143,120,268,0,-0.4000000000000057,-16],[920,1143,120,268,0,-0.4000000000000057,-16],[1040,1143,182,251,0,24.599999999999994,-36],[1040,1143,182,251,0,24.599999999999994,-36],[1222,1143,210,218,0,27.599999999999994,-70],[1222,1143,210,218,0,27.599999999999994,-70],[1432,1143,203,180,0,27.599999999999994,-110],[1432,1143,203,180,0,27.599999999999994,-110],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1838,1143,203,118,0,27.599999999999994,-172],[1838,1143,203,118,0,27.599999999999994,-172],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192]],  animations: {idol:[0,0, true], run:[1,10, true], jump:[11,20, true], pickup:[21,31, true], wakeup:[32,152, true], teleport:[153,248, true], die:[249,319, true]}});

	gjaxi = new createjs.Sprite(ss);
	
	 // Set up looping
	ss.getAnimation("idol").next = "idol";
	ss.getAnimation("run").next = "run";
	ss.getAnimation("jump").next = "run"
	ss.getAnimation("pickup").next = "idol";
	ss.getAnimation("wakeup").next = "idol";
	ss.getAnimation("teleport").next = "";
	ss.getAnimation("die").next = "";
	gjaxi.gotoAndPlay("wakeup");
	currentAction = "wakeup";

	// grab canvas width and height for later calculations:
	w = canvas.width;
	h = canvas.height;

	stage.mouseEventsEnabled = true;

	assets = [];

	queue = new createjs.LoadQueue(true);
	queue.on("fileload", handleFileLoad, this);
	queue.on("complete", handleComplete, this);
	queue.loadManifest(manifest);

	stage.autoClear = true;

	$('#debugCanvas').toggle();

	//DATA
	//uid: 47525551

	var url = 'http://api.soundcloud.com/resolve.json?url=http://soundcloud.com/adam-dunn-11/sets/' + songSet + '&client_id=0cc96d96abb7a30d3850ba910d8efae4';
	$.getJSON(url, function(playlists) {
		tracks = playlists.tracks;
		//playSong()
	});

	$('#soundCloudTab').mouseenter(function() {
		$("#soundCloudTab").animate({left:'0px'});
	});

	$('#soundCloudTab').mouseleave(function() {
		$("#soundCloudTab").animate({left:'-200px'});
	});
	
	//set the game background
	$('#gameBackground').css('background-image', 'url("' + levelBGUrl + '")');

	//setup the sounds
	// set up our Sound to the default.  This will be WebAudioPlugin when available, otherwise HTMLAudioPlugin
	if (!createjs.Sound.initializeDefaultPlugins()) {
		//document.getElementById("error").style.display = "block";
		//document.getElementById("content").style.display = "none";
		return;
	}
	
	//levelZoom and levelCamera is set in the levelX.js file.
	levelZoom = typeof levelZoom !== 'undefined' ? levelZoom : .3;
	zoom = levelZoom;
	
	levelCamera = typeof levelCamera !== 'undefined' ? levelCamera : true;
	isCameraOn = levelCamera;


}


function playSong()
{
	//now play a random song...
	var randomNum = Math.floor(Math.random() * tracks.length)
	var track = tracks[randomNum];

	document.getElementById('txtTitle').innerHTML =  track.title;
	document.getElementById('txtArtist').innerHTML =  track.user.username;

	$("#soundCloudTab").animate({left:'0px'}).delay(3000).animate({left:'-200px'});

	SC.initialize({
		client_id: "0cc96d96abb7a30d3850ba910d8efae4"
	});

	songManager = SC.stream("/tracks/" + track.id,
		{autoPlay: true,
		onfinish: function()
		{
			playSong(tracks);
		},
		multiShotEvents: true,
		volume: 25
	});

}

function pauseSong()
{
	soundManager.pauseAll();
}


/* -------Keyboard -------- */
var Key = {
	_pressed: {},

	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,

	isDown: function(keyCode) {
		if(this._pressed.length > 8) alert(this._pressed)
		return this._pressed[keyCode];
	},

	onKeydown: function(event) {
		this._pressed[event.keyCode] = true;

		if(isChopperUp)
		{
			hideArrowKeys();
		}
	},

	onKeyup: function(event) {
		delete this._pressed[event.keyCode];
	}
};





function handleProgress(event)
{
	//use event.loaded to get the percentage of the loading
}

function handleFileLoad(event) {
	
	//console.log("Main::handleFileLoad");

	//triggered when an individual file completes loading
	if(event.item != undefined)
	{
		assets.push(event.item);
	}

}

function getAssetByType(type)
{
	for(var i = 0; i<assets.length; i++)
	{
		if(assets[i].id == type)
		{
			var newAsset = assets[i];
			return newAsset;
		}
	}
}

function getAssetById(id)
{
	
	for (var i = 0; i < gameSprite.children.length; i++)//or for(var i in c.children)
	{
		var child = gameSprite.children[i];
		if(child.id == id){
			return child;
		}
	}	
	
	return null;

}

function getObstaclesByType(type)
{
	
	console.log("type: " + type);
	
	var obstaclesFound = [];
	
	
	for (var i = 0; i < obstacles.length; i++)//or for(var i in c.children)
	{
		var child = obstacles[i];
		if(child.type == type){
			obstaclesFound.push(child);
		}
	}	
	
	
	return obstaclesFound;

}

function handleMouseOver(event) {
	var target = event.target;
	//console.log(target.type);
	
	var type = target.type !== undefined ? target.type : "Object";
		
	tooltip.showTooltip((target.x - target.regX), (target.y - target.regY - 10), type + ": " + target.id)
}

function handleMouseOut(event) {
    tooltip.hideTooltip();
}

function handleComplete(event) {

	//console.log("Main::handleComplete");
	//console.log(queue);


	//triggered when all loading is complete
	//setup the level

	//now go through the level JSON and build the level
	//level is defined in the level.js file
	for(var i=0; i<level.elements.length; i++)
	{
		var item = getAssetByType(level.elements[i].type);
		
		//console.log(item);
		
		var id = item.id;
		var result = queue.getResult(id);

		if (item.type == createjs.LoadQueue.IMAGE) {
			var bmp = new createjs.Bitmap(result);
		}

		var platformOffsetY = -80;

		switch (id) {

			case "gjaxi":
				gjaxi.snapToPixel = true;

				//if(urlVars['cp'] == undefined)
				//{
					gjaxi.x = level.elements[i].x;
					gjaxi.y = level.elements[i].y;
				//}  else {
				//	gjaxi.x = checkPoints[urlVars['cp']].x;
				//	gjaxi.y = checkPoints[urlVars['cp']].y;
				//}

				gjaxi.regX = (gjaxi.getBounds().width/2) - 80;
				gjaxi.regY = (gjaxi.getBounds().height/2) + 60;
				
				gameSprite.addChild(gjaxi);  //you can add multiple children here...
				box2d.createPink(gjaxi);
				break;
			case "sky":
				sky = new createjs.Shape(new createjs.Graphics().beginBitmapFill(result).drawRect(0, 0, w, h));
				break;
			case "TileEndLeft":
				var piece = new createjs.Shape();
				piece.id = id;
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.rotation = level.elements[i].rotation;
				piece.regX = piece.width / 2;
				piece.regY = (piece.height / 2) - 4;
				gameSprite.addChild(piece);
				break;
			case "TileEndRight":
				var piece = new createjs.Shape();
				piece.id = id;
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.rotation = level.elements[i].rotation;
				piece.regX = piece.width / 2;
				piece.regY = (piece.height / 2) - 4;
				gameSprite.addChild(piece);
				break;
			case "TileMidDip":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.rotation = level.elements[i].rotation;
				piece.regX = piece.width / 2;
				piece.regY = (piece.height / 2) - 20;
				gameSprite.addChild(piece);
				break;
			case "TileMidBump":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.rotation = level.elements[i].rotation;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				break;
			case "TileBlockLeft":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				piece.rotation = level.elements[i].rotation;
				gameSprite.addChild(piece);
				break;
			case "TileBlockLeft2":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				piece.rotation = level.elements[i].rotation;
				gameSprite.addChild(piece);
				break;
			case "TileBlockRight":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				piece.rotation = level.elements[i].rotation;
				gameSprite.addChild(piece);
				break;
			case "PhysicsBorderRect":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginFill("#000000").drawRect(0, 0, level.elements[i].width, level.elements[i].height);
				piece.width = level.elements[i].width;
				piece.alpha = 0;
				piece.height = level.elements[i].height;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y - 60;
				piece.angle = level.elements[i].rotation;
				gameSprite.addChild(piece);
				box2d.createPhysicsBorder(piece);
				break;
			case "ParallaxBG":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				var matrix = new createjs.Matrix2D();
				matrix.scale(2,2);
				g.beginBitmapFill(result, "repeat-x", matrix);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				parallaxBGSprite.addChild(piece);
				break;

			case "ParallaxFactory":




				var piece = new createjs.Shape();
				var g = piece.graphics;
				var matrix = new createjs.Matrix2D();
				matrix.scale(1,1);
				g.beginBitmapFill(result, "no-repeat", matrix);
				piece.width = 1233;
				piece.height = 768;
				piece.regX = piece.width;
				piece.regY = piece.height * .75;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x =  piece.width; //level.elements[i].x;
				piece.y = 560; //level.elements[i].y;
				parallaxBGSprite.addChild(piece);
				break;

			case "ParallaxFG":
				var numGraphics = 5;

				for(var j=0; j<numGraphics; j++)
				{
					var piece = new createjs.Shape();
					var g = piece.graphics;
					//var matrix = new createjs.Matrix2D();
					//matrix.scale(2,2);
					g.beginBitmapFill(result);
					piece.width = level.elements[i].width;
					piece.height = level.elements[i].height;
					g.drawRect(0, 0, piece.width, piece.height);
					var variance = Math.floor(Math.random() * 700) + 1400;
					piece.x = level.elements[i].x + (j*variance) - 300;
					piece.y = level.elements[i].y;
					parallaxFGSprite.addChild(piece);
				}
				break;
			case "Sign":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				piece.isSign = true;
				piece.signText =  level.elements[i].signText;
				gameSprite.addChild(piece);
				box2d.createSign(piece);
				break;
			case "Teleportor":
				var ss = new createjs.SpriteSheet({images: ["assets/images/Teleportor.png"], frames: [[0,0,321,325,0,0,0],[321,0,321,324,0,0,-1],[642,0,321,323,0,0,-2],[963,0,321,322,0,0,-3],[1284,0,321,321,0,0,-4],[1605,0,321,319,0,0,-6],[0,325,321,318,0,0,-7],[321,325,321,317,0,0,-8],[642,325,321,316,0,0,-9],[963,325,321,314,0,0,-11],[1284,325,321,313,0,0,-12],[1605,325,321,312,0,0,-13],[0,643,321,311,0,0,-14],[321,643,321,310,0,0,-15],[642,643,321,308,0,0,-17],[963,643,321,307,0,0,-18],[1284,643,321,306,0,0,-19],[1605,643,321,305,0,0,-20],[0,954,321,303,0,0,-22],[321,954,321,302,0,0,-23],[642,954,321,301,0,0,-24],[963,954,321,300,0,0,-25],[1284,954,321,299,0,0,-26],[1605,954,321,297,0,0,-28],[0,1257,321,296,0,0,-29],[321,1257,321,294,0,0,-31],[642,1257,321,291,0,0,-34],[963,1257,321,289,0,0,-36],[1284,1257,321,287,0,0,-38],[1605,1257,321,285,0,0,-40],[0,1553,321,283,0,0,-42],[321,1553,321,281,0,0,-44],[642,1553,321,280,0,0,-45],[963,1553,321,278,0,0,-47],[1284,1553,321,276,0,0,-49],[1605,1553,321,275,0,0,-50],[0,1836,321,274,0,0,-51],[321,1836,321,273,0,0,-52],[642,1836,321,271,0,0,-54],[963,1836,321,270,0,0,-55],[1284,1836,321,269,0,0,-56],[1284,1836,321,269,0,0,-56],[1605,1836,321,268,0,0,-57],[0,2110,321,267,0,0,-58],[0,2110,321,267,0,0,-58],[321,2110,321,266,0,0,-59],[321,2110,321,266,0,0,-59],[321,2110,321,266,0,0,-59],[642,2110,321,266,0,0,-59],[642,2110,321,266,0,0,-60],[642,2110,321,266,0,0,-59],[642,2110,321,266,0,0,-59],[642,2110,321,266,0,0,-59],[321,2110,321,266,0,0,-59],[321,2110,321,266,0,0,-58],[0,2110,321,267,0,0,-58],[0,2110,321,267,0,0,-57],[1605,1836,321,268,0,0,-56],[1284,1836,321,269,0,0,-56],[963,1836,321,270,0,0,-55],[642,1836,321,271,0,0,-54],[321,1836,321,273,0,0,-53],[963,2110,321,274,0,0,-51],[0,1836,321,274,0,0,-50],[1284,1553,321,276,0,0,-49],[1284,2110,321,278,0,0,-47],[1605,2110,321,279,0,0,-46],[321,1553,321,281,0,0,-44],[0,2389,321,283,0,0,-42],[321,2389,321,285,0,0,-40],[642,2389,321,287,0,0,-38],[963,2389,321,289,0,0,-36],[1284,2389,321,291,0,0,-34],[1605,2389,321,293,0,0,-32],[0,2682,321,295,0,0,-30],[1605,954,321,297,0,0,-27],[321,2682,321,300,0,0,-25],[321,954,321,302,0,0,-23],[1605,643,321,305,0,0,-21],[642,2682,321,306,0,0,-19],[642,643,321,308,0,0,-17],[321,643,321,310,0,0,-15],[963,2682,321,312,0,0,-13],[1284,325,321,313,0,0,-12],[963,325,321,314,0,0,-10],[321,325,321,317,0,0,-9],[1284,2682,321,317,0,0,-8],[0,325,321,318,0,0,-6],[1605,0,321,319,0,0,-5],[1284,0,321,321,0,0,-4],[963,0,321,322,0,0,-3],[1605,2682,321,322,0,0,-3],[642,0,321,323,0,0,-2],[642,0,321,323,0,0,-1],[321,0,321,324,0,0,-1],[321,0,321,324,0,0,0],[0,0,321,325,0,0,0],[0,0,321,325,0,0,0],[0,0,321,325,0,0,0],[0,0,321,325,0,0,0]]});

				piece = new createjs.Sprite(ss);

				// Set up looping
				piece.play();

				piece.snapToPixel = true;
				piece.x =  level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				piece.isTeleportor = true;
				gameSprite.addChild(piece);
				box2d.createTeleportor(piece);
				break;
			case "Trigger":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginFill("#000000").drawRect(0, 0, level.elements[i].width, level.elements[i].height);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.alpha = 0;
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				piece.isTrigger = true;
				piece.js =  level.elements[i].js;
				gameSprite.addChild(piece);
				box2d.createTrigger(piece);
				break;
			case "BubblePop":
				var ss = new createjs.SpriteSheet({images: ["assets/images/BubblePop.png"], frames: [[0,0,0,0,0,-0.5,-0.3499999999999943],[0,0,0,0,0,-0.5,-0.3499999999999943],[0,0,0,0,0,-0.5,-0.3499999999999943],[0,0,0,0,0,-0.5,-0.3499999999999943],[0,0,0,0,0,-0.5,-0.3499999999999943],[0,0,0,0,0,-0.5,-0.3499999999999943],[0,0,0,0,0,-0.5,-0.3499999999999943],[0,0,0,0,0,-0.5,-0.3499999999999943],[0,0,0,0,0,-0.5,-0.3499999999999943],[0,0,0,0,0,-0.5,-0.3499999999999943],[0,0,0,0,0,-0.5,-0.3499999999999943],[0,0,0,0,0,-0.5,-0.3499999999999943],[0,0,0,0,0,-0.5,-0.3499999999999943],[0,0,0,0,0,-0.5,-0.3499999999999943],[0,0,0,0,0,-0.5,-0.3499999999999943],[0,0,0,0,0,-0.5,-0.3499999999999943],[0,0,0,0,0,-0.5,-0.3499999999999943],[0,0,0,0,0,-0.5,-0.3499999999999943],[0,0,0,0,0,-0.5,-0.3499999999999943],[0,0,0,0,0,-0.5,-0.3499999999999943],[0,0,0,0,0,-0.5,-0.3499999999999943],[0,0,48,48,0,23.5,23.650000000000006],[0,0,48,48,0,23.5,23.650000000000006],[0,0,48,48,0,23.5,23.650000000000006],[0,0,48,48,0,23.5,23.650000000000006],[48,0,58,56,0,28.5,27.650000000000006],[106,0,66,64,0,32.5,31.650000000000006],[172,0,74,74,0,36.5,36.650000000000006],[246,0,84,82,0,41.5,40.650000000000006],[330,0,92,90,0,45.5,44.650000000000006],[422,0,100,99,0,49.5,49.650000000000006],[522,0,110,108,0,54.5,53.650000000000006],[632,0,118,116,0,58.5,57.650000000000006],[750,0,126,124,0,62.5,61.650000000000006],[876,0,136,134,0,67.5,66.65],[0,134,144,142,0,71.5,70.65],[144,134,152,150,0,75.5,74.65],[296,134,162,158,0,80.5,78.65],[458,134,170,168,0,84.5,83.65],[628,134,178,176,0,88.5,87.65],[0,310,244,240,0,121.5,119.65],[244,310,320,320,0,159.5,160.65],[244,310,320,320,0,159.5,160.65],[0,0,0,0,0,153.5,151.65],[0,0,0,0,0,153.5,151.65],[0,0,0,0,0,153.5,151.65],[0,0,0,0,0,153.5,151.65],[0,0,0,0,0,153.5,151.65],[0,0,0,0,0,153.5,151.65],[0,0,0,0,0,153.5,151.65],[0,0,0,0,0,153.5,151.65],[0,0,0,0,0,153.5,151.65],[0,0,0,0,0,153.5,151.65],[0,0,0,0,0,153.5,151.65],[0,0,0,0,0,153.5,151.65],[0,0,0,0,0,153.5,151.65],[0,0,0,0,0,153.5,151.65],[0,0,0,0,0,153.5,151.65],[0,0,0,0,0,153.5,151.65],[0,0,0,0,0,153.5,151.65]]});

				piece = new createjs.Sprite(ss);

				// Set up looping
				piece.play();

				piece.addEventListener("animationend", function(event)
				{
					gameSprite.removeChild(event.target)
				}) ;
				piece.type = id
				piece.snapToPixel = true;
				piece.x =  level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				break;
			case "chopperBot":
				var ss = new createjs.SpriteSheet({images: ["assets/images/ChopperBot.png"], frames: [[0,0,252,198,0,126,98],[252,0,252,198,0,126,100],[252,0,252,198,0,126,100],[504,0,254,198,0,128,101],[758,0,254,198,0,128,103],[758,0,254,198,0,128,103],[0,198,252,198,0,126,105],[252,198,252,198,0,126,107],[252,198,252,198,0,126,107],[504,198,253,198,0,127,111],[757,198,253,198,0,127,113],[757,198,253,198,0,127,113],[0,396,252,198,0,126,115],[252,396,252,198,0,126,117],[252,396,252,198,0,126,117],[504,396,253,198,0,127,117],[757,396,253,198,0,127,119],[757,396,253,198,0,127,119],[504,396,253,198,0,127,117],[757,396,253,198,0,127,115],[757,396,253,198,0,127,115],[0,594,252,198,0,126,115],[252,594,252,198,0,126,113],[252,594,252,198,0,126,113],[504,594,253,198,0,127,111],[757,594,253,198,0,127,109],[757,594,253,198,0,127,109],[0,792,252,198,0,126,105],[252,792,252,198,0,126,103],[252,792,252,198,0,126,103],[504,792,253,198,0,127,101],[757,792,253,198,0,127,99],[757,792,253,198,0,127,99],[0,0,252,198,0,126,98],[0,0,252,198,0,126,98],[0,0,252,198,0,126,98]]});
				chopperBot = new createjs.Sprite(ss);

				// Set up looping
				chopperBot.play();

				chopperBot.type = id
				chopperBot.snapToPixel = true;
				chopperBot.alpha = 0;
				chopperBot.x =  level.elements[i].x;
				chopperBot.y = level.elements[i].y;
				chopperBot.width = level.elements[i].width;
				chopperBot.height = level.elements[i].height;
				chopperBot.regX = chopperBot.width / 2;
				chopperBot.regY = chopperBot.height / 2;
				gameSprite.addChild(chopperBot);
				break;
			case "JunkYardMonster":
				var ss = new createjs.SpriteSheet({images: ["assets/images/JunkyardMonster_Sprites.png"], frames: [[0,0,813,464,0,1042.4,340.6],[0,0,813,464,0,1042.4,340.6],[813,0,813,463,0,1042.4,342.6],[813,0,813,463,0,1042.4,342.6],[1626,0,813,463,0,1042.4,346.6],[1626,0,813,463,0,1042.4,346.6],[2439,0,813,463,0,1042.4,350.6],[3252,0,813,463,0,1042.4,352.6],[3252,0,813,463,0,1042.4,352.6],[3252,0,813,463,0,1042.4,352.6],[3252,0,813,463,0,1042.4,352.6],[3252,0,813,463,0,1042.4,352.6],[3252,0,813,463,0,1042.4,352.6],[3252,0,813,463,0,1042.4,352.6],[3252,0,813,463,0,1042.4,352.6],[3252,0,813,463,0,1042.4,352.6],[3252,0,813,463,0,1042.4,352.6],[3252,0,813,463,0,1042.4,352.6],[3252,0,813,463,0,1042.4,352.6],[0,464,813,463,0,1042.4,352.6],[0,464,813,463,0,1042.4,352.6],[813,464,813,463,0,1042.4,350.6],[1626,464,813,463,0,1042.4,346.6],[1626,464,813,463,0,1042.4,346.6],[2439,464,813,463,0,1042.4,342.6],[2439,464,813,463,0,1042.4,342.6],[3252,464,813,464,0,1042.4,340.6],[3252,464,813,464,0,1042.4,340.6],[3252,464,813,464,0,1042.4,340.6],[3252,464,813,464,0,1042.4,340.6],[3252,464,813,464,0,1042.4,340.6],[3252,464,813,464,0,1042.4,340.6],[3252,464,813,464,0,1042.4,340.6],[3252,464,813,464,0,1042.4,340.6],[3252,464,813,464,0,1042.4,340.6],[3252,464,813,464,0,1042.4,340.6],[3252,464,813,464,0,1042.4,340.6],[3252,464,813,464,0,1042.4,340.6],[3252,464,813,464,0,1042.4,340.6],[0,928,813,464,0,1042.4,340.6],[813,928,801,419,0,1042.4,340.6],[1614,928,787,377,0,1042.4,340.6],[2401,928,787,376,0,1042.4,328.6],[3188,928,787,377,0,1042.4,340.6],[0,1392,787,376,0,1042.4,328.6],[787,1392,787,377,0,1042.4,340.6],[1574,1392,797,403,0,1042.4,340.6],[2371,1392,805,436,0,1042.4,340.6],[3176,1392,813,464,0,1042.4,340.6],[0,1856,813,464,0,1042.4,340.6],[813,1856,813,464,0,1042.4,340.6],[1626,1856,813,464,0,1042.4,340.6],[2439,1856,813,464,0,1042.4,340.6],[3252,1856,813,464,0,1042.4,340.6],[0,2320,813,464,0,1042.4,340.6],[813,928,801,419,0,1042.4,340.6],[813,2320,787,377,0,1042.4,340.6],[1600,2320,787,376,0,1042.4,328.6],[2387,2320,787,377,0,1042.4,340.6],[3174,2320,787,376,0,1042.4,328.6],[0,1392,787,376,0,1042.4,328.6],[0,2784,787,376,0,1042.4,328.6],[787,2784,787,376,0,1042.4,328.6],[1574,2784,787,376,0,1042.4,328.6],[2361,2784,787,376,0,1042.4,328.6],[3148,2784,787,376,0,1042.4,328.6],[0,3160,787,376,0,1042.4,328.6],[787,3160,787,381,0,1042.4,328.6],[1574,3160,787,388,0,1042.4,328.6],[2361,3160,787,408,0,1042.4,340.6],[3148,3160,797,418,0,1042.4,340.6],[0,3578,805,436,0,1042.4,340.6],[0,928,813,464,0,1042.4,340.6]]});
				monster = new createjs.Sprite(ss);

				// Set up looping
				monster.play();

				monster.type = id
				monster.snapToPixel = true;
				monster.alpha = 0;
				monster.x =  level.elements[i].x;
				monster.y = level.elements[i].y;
				//alert(level.elements[i].width);
				monster.scaleX = 3; //level.elements[i].width;
				monster.scaleY = 3; //level.elements[i].height;
				monster.regX = -800;
				monster.regY = -200;
				gameSprite.addChild(monster);
				break;
			case "Choco":

				var ss = new createjs.SpriteSheet({images: ["assets/images/ChocoSprites.png"], frames: [[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[168,0,168,284,0,1.25,-1.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[336,0,168,281,0,8.25,-4.65],[168,0,168,284,0,1.25,-1.65],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[504,0,168,285,0,-0.75,-0.6499999999999999],[504,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[504,0,168,285,0,-0.75,-0.6499999999999999],[504,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[0,0,168,285,0,-0.75,-0.6499999999999999],[672,0,169,285,0,8.25,1.35],[841,0,169,285,0,8.25,1.35],[0,285,168,281,0,11.25,0.3500000000000001],[168,285,169,278,0,14.25,0.3500000000000001],[337,285,185,278,0,14.25,0.3500000000000001],[522,285,198,278,0,19.25,0.3500000000000001],[720,285,198,282,0,19.25,1.35],[0,567,179,285,0,8.25,1.35],[179,567,179,293,0,8.25,1.35],[358,567,169,293,0,8.25,1.35],[527,567,169,293,0,8.25,1.35],[696,567,169,293,0,8.25,1.35],[0,860,168,287,0,11.25,0.3500000000000001],[168,860,169,287,0,14.25,0.3500000000000001],[337,860,169,287,0,14.25,0.3500000000000001],[506,860,168,292,0,11.25,0.3500000000000001],[674,860,169,293,0,8.25,1.35],[843,860,169,293,0,8.25,1.35],[0,1153,183,285,0,13.25,0.3500000000000001],[0,1153,183,285,0,13.25,0.3500000000000001],[183,1153,196,285,0,13.25,0.3500000000000001],[379,1153,186,287,0,13.25,0.3500000000000001],[379,1153,186,287,0,13.25,0.3500000000000001],[379,1153,186,287,0,13.25,0.3500000000000001],[379,1153,186,287,0,13.25,0.3500000000000001],[379,1153,186,287,0,13.25,0.3500000000000001],[379,1153,186,287,0,13.25,0.3500000000000001],[379,1153,186,287,0,13.25,0.3500000000000001],[379,1153,186,287,0,13.25,0.3500000000000001],[379,1153,186,287,0,13.25,0.3500000000000001],[379,1153,186,287,0,13.25,0.3500000000000001],[379,1153,186,287,0,13.25,0.3500000000000001],[379,1153,186,287,0,13.25,0.3500000000000001],[379,1153,186,287,0,13.25,0.3500000000000001],[379,1153,186,287,0,13.25,0.3500000000000001],[379,1153,186,287,0,13.25,0.3500000000000001],[379,1153,186,287,0,13.25,0.3500000000000001],[379,1153,186,287,0,13.25,0.3500000000000001],[379,1153,186,287,0,13.25,0.3500000000000001],[379,1153,186,287,0,13.25,0.3500000000000001],[379,1153,186,287,0,13.25,0.3500000000000001]],  animations: {idol:[0,163, true], run:[164,181, true], jump:[182,204, true]}});


				//ss = new createjs.SpriteSheet(spriteSheet);
				Choco = new createjs.Sprite(ss);
				// Set up looping
				ss.getAnimation("idol").next = "idol";
				ss.getAnimation("run").next = "run";
				ss.getAnimation("jump").next = "idol"
				Choco.gotoAndPlay("idol");


				Choco.type = id
				Choco.snapToPixel = true;
				Choco.x =  level.elements[i].x;
				Choco.y = level.elements[i].y;
				//Choco.regX = piece.width / 2;
				Choco.regY = (piece.height / 2);
				gameSprite.addChild(Choco);
				box2d.createChocoBot(Choco);
				break;
			case "TeddyBot":
				
				TeddyBot = new createjs.Shape();
				var g = TeddyBot.graphics;
				g.beginBitmapFill(result);
				TeddyBot.width = level.elements[i].width;
				TeddyBot.height = level.elements[i].height;
				g.drawRect(0, 0, TeddyBot.width, TeddyBot.height);
				TeddyBot.x = level.elements[i].x;
				TeddyBot.y = level.elements[i].y;
				TeddyBot.rotation = level.elements[i].rotation;
				//TeddyBot.regX = piece.width / 2;
				//TeddyBot.regY = (piece.height / 2) - 20;
				gameSprite.addChild(TeddyBot);
				
				break;
			case "BearDoor":
				
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.rotation = level.elements[i].rotation;
				//piece.regX = piece.width / 2;
				//piece.regY = (piece.height / 2) - 20;
				gameSprite.addChild(piece);
				
				break;
			case "Ramp":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = level.elements[i].scaleX > 0;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createRamp(piece);
				break;
			case "Ramp2":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createRamp2(piece);
				break;

			case "Fence":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createFence(piece);
				break;

			case "Factory":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createFactory(piece);
				break;				

			case "GarbageMix1":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createGarbageMix1(piece);
				break;				

			case "GarbageMix2":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createGarbageMix2(piece);
				break;				

			case "GarbageStorage":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createGarbageStorage(piece);
				break;				

			case "MagnetCrane":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createMagnetCrane(piece);
				break;				

			case "Rock1":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createRock1(piece);
				break;				

			case "Rock2":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createRock2(piece);
				break;				

			case "Rock3":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createRock3(piece);
				break;				

			case "ScrapCrane":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createScrapCrane(piece);
				break;				

			case "GarbageMountain1":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createGarbageMountain1(piece);
				break;				

			case "GarbageMountain2":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createGarbageMountain2(piece);
				break;				

			//----------------------------------------------------------------------------

			case "JunkyardItem1":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createJunkyardItem1(piece);
				break;

			case "JunkyardItem2":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createJunkyardItem2(piece);
				break;

			case "JunkyardItem3":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createJunkyardItem3(piece);
				break;

			case "JunkyardItem4":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createJunkyardItem4(piece);
				break;

			case "JunkyardItem5":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createJunkyardItem5(piece);
				break;

			case "JunkyardItem6":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createJunkyardItem6(piece);
				break;

			case "JunkyardSplash1":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createJunkyardSplash1(piece);
				break;

			case "JunkyardSplash2":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createJunkyardSplash2(piece);
				break;

			case "JunkyardSplash3":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createJunkyardSplash3(piece);
				break;

			case "JunkyardSplash4":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createJunkyardSplash4(piece);
				break;

			case "JunkyardSplash5":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createJunkyardSplash5(piece);
				break;

			case "JunkyardSplash6":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createJunkyardSplash6(piece);
				break;

			case "JunkyardSplash7":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createJunkyardSplash7(piece);
				break;

			case "JunkyardTileFloor1":
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.facingRight = false;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createJunkyardTileFloor1(piece);
				break;


			case "Button":

				var ss = new createjs.SpriteSheet({images: ["assets/images/items/Button.png"], frames: [[0,0,156,49,0,0,0],[0,0,156,49,0,0,0],[0,0,156,49,0,0,0],[0,0,156,49,0,0,0],[0,0,156,49,0,0,0],[0,0,156,49,0,0,0],[0,0,156,49,0,0,0],[0,0,156,49,0,0,0],[0,0,156,49,0,0,0],[0,49,156,41,0,0,-8]]});


				//ss = new createjs.SpriteSheet(spriteSheet);
				var piece = new createjs.Sprite(ss);
				piece.gotoAndStop(0); //up position
				piece.isButton = true;
				piece.js =  level.elements[i].js;
				piece.type = id
				piece.snapToPixel = true;
				piece.x =  level.elements[i].x;
				piece.y = level.elements[i].y;
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				piece.regX = piece.width / 2;
				piece.regY = -piece.height/2;
				gameSprite.addChild(piece);
				box2d.createButton(piece);
				break;

			//----------------------------------------------------------------------------

			default: //for general game art
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x - (piece.width/2);
				piece.y = level.elements[i].y - (piece.height/2);
				

				gameSprite.addChild(piece);
				
				//console.log(level.elements[i]);

		}

	}

	document.getElementById("loader").className = "";

	if (gjaxi == null) {
		alert('no jaxi');
		//console.log("Can not play. Jaxi sprite was not loaded.");
		return;
	}

	$('#handbookContent').load('assets/html/handbook.html #content', function() {
		//page was loaded.
	});
	
	
	
	$( "#handbook" ).draggable(
	 { 
		cancel: "#handbook_content"
	}); 
	 $( "#editorContainer" ).draggable({ 
	
		 cancel: ".ace_text-input, .ace_gutter, .ace_scroller, .ace_scrollbar"
	}); 
	gameSprite.scaleX = zoom;
	gameSprite.scaleY = zoom;

	createjs.Ticker.setFPS(30);
	createjs.Ticker.useRAF = true;
	createjs.Ticker.addEventListener("tick", tick);

	//Now show the page...
	$('#loadScreen').css("display", "none");
	
	//--------------------------------------
	/*
	var obstacleFactory = new ObstacleFactory();
	var tire = obstacleFactory.createObstacle("tire");
	var cone = obstacleFactory.createObstacle("cone");
	var box = obstacleFactory.createObstacle("box");
	
	obstacles.push(tire, cone, box);
	
	gameSprite.addChild(tire, cone, box);	

	tire.y = cone.y = box.y = 520;
	tire.scaleX = cone.scaleX = box.scaleX = tire.scaleY = cone.scaleY = box.scaleY = 4;
	
	tire.x = 2300;
	tire.onMouseOver = handleMouseOver;
	tire.onMouseOut = handleMouseOut;	

	cone.x = 1500;
	cone.onMouseOver = handleMouseOver;
	cone.onMouseOut = handleMouseOut;	
	
	createAssetsPhysicsBorder(cone);
	
	box.x = 1800;
	box.onMouseOver = handleMouseOver;
	box.onMouseOut = handleMouseOut;		
	*/
	
	tooltip = Tooltip.getInstance();

	$("#img_handbook").hover(function(){
			$('#img_handbook').attr('src','assets/images/funtions_sel.png');
			if($( "#img_handbook" ).hasClass( "active" )){
				$('#img_handbook').attr('src','assets/images/funtions.png');
			}
		}, function(){
			$('#img_handbook').attr('src','assets/images/funtions.png');
			if($( "#img_handbook" ).hasClass( "active" )){
				$('#img_handbook').attr('src','assets/images/funtions_sel.png');
			}
	});

	$("#img_guide").hover(function(){
			$('#img_guide').attr('src','assets/images/guide_sel.png');
			if($( "#img_guide" ).hasClass( "active" )){
				$('#img_guide').attr('src','assets/images/guide.png');
			}
		}, function(){
			$('#img_guide').attr('src','assets/images/guide.png');
			if($( "#img_guide" ).hasClass( "active" )){
				$('#img_guide').attr('src','assets/images/guide_sel.png');
			}
	});
	
	$("#img_samples").hover(function(){
			$('#img_samples').attr('src','assets/images/samples_sel.png');
			if($( "#img_samples" ).hasClass( "active" )){
				$('#img_samples').attr('src','assets/images/samples.png');
			}
		}, function(){
			$('#img_samples').attr('src','assets/images/samples.png');
			if($( "#img_samples" ).hasClass( "active" )){
				$('#img_samples').attr('src','assets/images/samples_sel.png');
			}
	});
	

	
	//--------------------------------------
}

function createAssetsPhysicsBorder(asset){

	asset.width = 80;
	asset.height = 60;
	
	var piece = new createjs.Shape();
	var g = piece.graphics;
	g.beginFill("#000000").drawRect(0, 0, asset.width, asset.height);
	piece.width = asset.width;
	piece.alpha = 1;
	piece.height = asset.height;
	g.drawRect(0, 0, piece.width, piece.height);
	piece.x = asset.x - (asset.width/2);
	piece.y = asset.y - 60;
	piece.angle = asset.rotation;
	
	//gameSprite.addChild(piece);
	box2d.createPhysicsBorder(piece);
}

function getCharacterPosition(skin)
{

	skin = eval(skin);
	var rect = new Object();

	//we know
	//1. the skin position
	//2. the zoom
	//3. the stage position

	var posX = gameSprite.x + (skin.x * zoom);
	var posY = gameSprite.y + (skin.y * zoom) - 200;

	rect.x = posX;
	rect.y = posY;

	return rect;
}

function reloadPage()
{
	if(jaxi.isAlive)
	{
		window.location = window.location.href.split('?')[0] + ((currentCheckPoint != undefined) ? '?cp=' + currentCheckPoint : '');
		jaxi.isAlive = false;
	}

}


function tick(event) {

	box2d.update();
	stage.update(event);
	
	if(typeof levelRunner !== 'undefined') levelRunner.update();
}


function changePanel(panel){
	$('#handbookContent').load('assets/html/'+panel+'.html #content', function() {
		//page was loaded.
	});
	
	if(panel == 'handbook'){
		$('#img_handbook').attr('src','assets/images/funtions_sel.png');
		$('#img_guide').attr('src','assets/images/guide.png');
		$('#img_samples').attr('src','assets/images/samples.png');
		
		$('#img_handbook').addClass('active');
		$('#img_guide').removeClass('active'); 
		$('#img_samples').removeClass('active'); 
	}
	else if(panel == 'guide'){
		$('#img_guide').attr('src','assets/images/guide_sel.png');
		$('#img_handbook').attr('src','assets/images/funtions.png');
		$('#img_samples').attr('src','assets/images/samples.png');
		
		$('#img_guide').addClass('active');
		$('#img_handbook').removeClass('active'); 
		$('#img_samples').removeClass('active'); 
	}
	else if(panel == 'samples'){
		$('#img_samples').attr('src','assets/images/samples_sel.png');
		$('#img_handbook').attr('src','assets/images/funtions.png');
		$('#img_guide').attr('src','assets/images/guide.png');
		
		$('#img_samples').addClass('active');   
		$('#img_handbook').removeClass('active'); 
		$('#img_guide').removeClass('active'); 
	}
	
}




