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

var b2Vec2 = Box2D.Common.Math.b2Vec2;
var b2BodyDef = Box2D.Dynamics.b2BodyDef;
var b2Body = Box2D.Dynamics.b2Body;
var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
var b2Fixture = Box2D.Dynamics.b2Fixture;
var b2World = Box2D.Dynamics.b2World;
var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;
var b2ContactListener = Box2D.Dynamics.b2ContactListener;
var bodiesToRemove = [];

var isChopperUp = false;

isFollowing = false;


function Main()
{
	
	
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
	//var spriteSheet ={"animations": {"idol": [0,0], "run": [1, 11], "jump": [12, 22]}, "images": ["assets/images/PinkSprites.png"], "frames": {"regX": -50, "height": 308, "count": 21, "regY": -79, "width": 210}};
	var ss = new createjs.SpriteSheet({images: ["assets/images/PinkSprites.png"], frames: [[0,0,112,284,0,0.5999999999999943,0],[112,0,124,280,0,9.599999999999994,4],[236,0,145,270,0,24.599999999999994,14],[381,0,162,260,0,30.599999999999994,18],[236,0,145,270,0,24.599999999999994,14],[112,0,124,280,0,9.599999999999994,4],[543,0,143,291,0,16.599999999999994,4],[686,0,189,287,0,29.599999999999994,18],[875,0,210,272,0,40.599999999999994,22],[686,0,189,287,0,29.599999999999994,18],[543,0,143,291,0,16.599999999999994,4],[543,0,143,291,0,16.599999999999994,4],[686,0,189,287,0,29.599999999999994,18],[875,0,210,272,0,40.599999999999994,22],[875,0,210,272,0,40.599999999999994,22],[875,0,210,272,0,40.599999999999994,22],[875,0,210,272,0,40.599999999999994,22],[875,0,210,272,0,40.599999999999994,22],[875,0,210,272,0,40.599999999999994,22],[686,0,189,287,0,29.599999999999994,18],[543,0,143,291,0,16.599999999999994,4],[543,0,143,291,0,16.599999999999994,4],[1085,0,152,254,0,-17.400000000000006,-33],[1237,0,177,224,0,-17.400000000000006,-63],[1414,0,201,185,0,-17.400000000000006,-102],[1414,0,201,185,0,-17.400000000000006,-102],[1414,0,201,185,0,-17.400000000000006,-102],[1414,0,201,185,0,-17.400000000000006,-102],[1615,0,177,224,0,-17.400000000000006,-63],[1615,0,177,224,0,-17.400000000000006,-63],[1792,0,148,257,0,-17.400000000000006,-30],[0,291,133,284,0,-5.400000000000006,0],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[133,291,291,108,0,147.6,-179],[424,291,291,108,0,147.6,-179],[424,291,291,108,0,147.6,-179],[715,291,291,108,0,147.6,-179],[715,291,291,108,0,147.6,-179],[424,291,291,108,0,147.6,-179],[424,291,291,108,0,147.6,-179],[715,291,291,108,0,147.6,-179],[715,291,291,108,0,147.6,-179],[424,291,291,108,0,147.6,-179],[424,291,291,108,0,147.6,-179],[715,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1006,291,291,108,0,147.6,-179],[1297,291,281,134,0,137.6,-167],[1297,291,281,134,0,137.6,-167],[1578,291,290,134,0,137.6,-167],[1578,291,290,134,0,137.6,-167],[0,575,239,176,0,108.6,-131],[0,575,239,176,0,108.6,-131],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[239,575,198,216,0,67.6,-91],[437,575,121,257,0,23.599999999999994,-29],[437,575,121,257,0,23.599999999999994,-29],[558,575,126,275,0,28.599999999999994,-11],[684,575,115,280,0,16.599999999999994,-6],[0,0,112,284,0,0.5999999999999943,0],[0,0,112,284,0,0.5999999999999943,0],[0,0,112,284,0,0.5999999999999943,0],[799,575,112,284,0,0.5999999999999943,0],[911,575,112,284,0,0.5999999999999943,0],[911,575,112,284,0,0.5999999999999943,0],[911,575,112,284,0,0.5999999999999943,0],[911,575,112,284,0,0.5999999999999943,0],[911,575,112,284,0,0.5999999999999943,0],[911,575,112,284,0,0.5999999999999943,0],[911,575,112,284,0,0.5999999999999943,0],[911,575,112,284,0,0.5999999999999943,0],[911,575,112,284,0,0.5999999999999943,0],[1023,575,112,284,0,0.5999999999999943,0],[1135,575,112,284,0,0.5999999999999943,0],[1247,575,112,284,0,0.5999999999999943,0],[1359,575,112,284,0,0.5999999999999943,0],[1471,575,112,284,0,0.5999999999999943,0],[1471,575,112,284,0,0.5999999999999943,0],[1471,575,112,284,0,0.5999999999999943,0],[1023,575,112,284,0,0.5999999999999943,0],[1135,575,112,284,0,0.5999999999999943,0],[1247,575,112,284,0,0.5999999999999943,0],[1359,575,112,284,0,0.5999999999999943,0],[1471,575,112,284,0,0.5999999999999943,0],[1583,575,128,284,0,0.5999999999999943,0],[1583,575,128,284,0,0.5999999999999943,0],[1711,575,128,284,0,0.5999999999999943,0],[1839,575,134,284,0,0.5999999999999943,0],[0,859,134,284,0,0.5999999999999943,0],[134,859,134,284,0,0.5999999999999943,0],[268,859,134,284,0,0.5999999999999943,0],[402,859,134,284,0,4.599999999999994,0],[402,859,134,284,0,4.599999999999994,0],[402,859,134,284,0,4.599999999999994,0],[536,859,128,284,0,0.5999999999999943,0],[536,859,128,284,0,0.5999999999999943,0],[536,859,128,284,0,0.5999999999999943,0],[664,859,134,284,0,0.5999999999999943,0],[664,859,134,284,0,0.5999999999999943,0],[664,859,134,284,0,0.5999999999999943,0],[798,859,134,284,0,4.599999999999994,0],[932,859,134,284,0,4.599999999999994,0],[1066,859,134,284,0,4.599999999999994,0],[1200,859,134,284,0,4.599999999999994,0],[1334,859,112,284,0,0.5999999999999943,0],[1446,859,112,284,0,0.5999999999999943,0],[1558,859,112,284,0,0.5999999999999943,0],[1670,859,112,284,0,0.5999999999999943,0],[1782,859,112,284,0,0.5999999999999943,0],[1894,859,112,284,0,0.5999999999999943,0],[0,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[112,1143,112,284,0,0.5999999999999943,0],[0,0,112,284,0,0.5999999999999943,0],[0,0,112,284,0,0.5999999999999943,0],[224,1143,112,284,0,0.5999999999999943,0],[224,1143,112,284,0,0.5999999999999943,0],[336,1143,112,282,0,0.5999999999999943,-2],[336,1143,112,282,0,0.5999999999999943,-2],[448,1143,112,278,0,0.5999999999999943,-6],[448,1143,112,278,0,0.5999999999999943,-6],[560,1143,120,268,0,-0.4000000000000057,-16],[560,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[680,1143,120,268,0,-0.4000000000000057,-16],[800,1143,120,268,0,-0.4000000000000057,-16],[800,1143,120,268,0,-0.4000000000000057,-16],[920,1143,120,268,0,-0.4000000000000057,-16],[920,1143,120,268,0,-0.4000000000000057,-16],[1040,1143,182,251,0,24.599999999999994,-36],[1040,1143,182,251,0,24.599999999999994,-36],[1222,1143,210,218,0,27.599999999999994,-70],[1222,1143,210,218,0,27.599999999999994,-70],[1432,1143,203,180,0,27.599999999999994,-110],[1432,1143,203,180,0,27.599999999999994,-110],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1838,1143,203,118,0,27.599999999999994,-172],[1838,1143,203,118,0,27.599999999999994,-172],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192],[1635,1143,203,98,0,27.599999999999994,-192]],  animations: {idol:[0,0, true], run:[1,10, true], jump:[11,20, true], pickup:[21,31, true], wakeup:[32,152, true], teleport:[153,248, true], die:[249,319, true]}});

	//ss = new createjs.SpriteSheet(spriteSheet);
	gjaxi = new createjs.BitmapAnimation(ss);

	 // Set up looping
	ss.getAnimation("idol").next = "idol";
	ss.getAnimation("run").next = "run";
	ss.getAnimation("jump").next = "jump"
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

	loader = new createjs.LoadQueue(false);
	loader.installPlugin(createjs.Sound);
	loader.onFileLoad = handleFileLoad;
	loader.onProgress = handleFileLoad;
	loader.onComplete = handleComplete;
	loader.loadManifest(manifest);      //manifest is defined in the level.js file
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

	//setup the sounds
	// set up our Sound to the default.  This will be WebAudioPlugin when available, otherwise HTMLAudioPlugin
	if (!createjs.Sound.initializeDefaultPlugins()) {
		//document.getElementById("error").style.display = "block";
		//document.getElementById("content").style.display = "none";
		return;
	}

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

/* ------- Box2D --------- */
// handles all physics movement


var box2d = (function() {

	// important box2d scale and speed vars
	var SCALE = 30, STEP = 20, TIMESTEP = 1/STEP;

	var world;
	var lastTimestamp = Date.now();
	var fixedTimestepAccumulator = 0;
	var actors = [];
	var bodies = [];

	// box2d world setup and boundaries
	var setup = function () {
		world = new b2World(new b2Vec2(0, 10), true);
		this.setupContactListener();
		addDebug();
	};

	var setupContactListener = function()
	{
		var contactListener = new b2ContactListener;

		contactListener.BeginContact = function(contact)
		{ 
			var fixtureA = contact.GetFixtureA();
			var fixtureB = contact.GetFixtureB();
			if(fixtureB.GetBody().GetUserData().skin.isSign)
			{

				currentCheckPoint = fixtureB.GetBody().GetUserData().skin.checkPoint;
				showMessage(fixtureB.GetBody().GetUserData().skin.signText);
			}

			if(fixtureB.GetBody().GetUserData().skin.isTeleportor && (fixtureA.GetBody().GetUserData().skin == gjaxi))
			{
				gjaxi.gotoAndPlay("teleport");
				gjaxi.addEventListener("animationend", function()
				{
					window.location = nextLevelUrl;
				}) ;

				b2jaxi.SetAwake(false);
			}

			if(fixtureB.GetBody().GetUserData().skin.isTrigger)
			{
				eval(fixtureB.GetBody().GetUserData().skin.js);
				fixtureB.GetBody().GetUserData().skin.isTrigger = false;
				world.DestroyBody(fixtureB.GetBody());
				gameSprite.removeChild(fixtureB.GetBody().GetUserData().skin);
				world.DestroyFixture(fixtureB);

			}

		}

		contactListener.EndContact = function(contact)
		{ 
			var fixtureA = contact.GetFixtureA();
			var fixtureB = contact.GetFixtureB();

			if(fixtureB.IsSensor())
			{
				hideMessage();
			}
		}              
		world.SetContactListener(contactListener);
	}



	// box2d debugger
	var addDebug = function() {
		var debugDraw = new b2DebugDraw();
		debugDraw.SetSprite(debugContext);
		debugDraw.SetDrawScale(SCALE);
		debugDraw.SetFillAlpha(0.7);
		debugDraw.SetLineThickness(1.0);
		debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
		world.SetDebugDraw(debugDraw);
	}

	// actor object - this is responsible for taking the body's position and translating it to your easel display object
	var actorObject = function(body, skin) {
		this.body = body;
		this.skin = skin;
		this.update = function() {  // translate box2d positions to pixels
			this.skin.rotation = this.body.GetAngle() * (180 / Math.PI);
			this.skin.x = this.body.GetWorldCenter().x * SCALE;
			this.skin.y = this.body.GetWorldCenter().y * SCALE;
		}
		actors.push(this);
	}

	// create jaxi body shape and assign actor object
	var createPink = function(skin) {
		var jaxiFixture = new b2FixtureDef;
		jaxiFixture.density = 1;
		jaxiFixture.restitution = 0.1;
		jaxiFixture.shape = new b2PolygonShape;

		var jaxiWidth =  ((skin.getBounds().width - 200) / SCALE)/2;
		var jaxiHeight = ((skin.getBounds().height/2)/SCALE)/2;
		var cornerFudge = 8/SCALE;


		var p1 = new b2Vec2(-jaxiWidth + cornerFudge, jaxiHeight);
		var p2 = new b2Vec2(-jaxiWidth, jaxiHeight - cornerFudge);
		var p3 = new b2Vec2(-jaxiWidth, -(jaxiHeight * 6) + cornerFudge);
		var p4 = new b2Vec2(-jaxiWidth + cornerFudge, -jaxiHeight * 6);
		var p5 = new b2Vec2(jaxiWidth - cornerFudge, -jaxiHeight * 6);
		var p6 = new b2Vec2(jaxiWidth, -(jaxiHeight * 6) + cornerFudge);
		var p7 = new b2Vec2(jaxiWidth, jaxiHeight - cornerFudge);
		var p8 = new b2Vec2(jaxiWidth - cornerFudge, jaxiHeight);

		jaxiFixture.shape.SetAsArray([p1,p2,p3,p4,p5, p6, p7, p8]);

		//jaxiFixture.shape.SetAsBox((skin.getBounds().width - 200) / SCALE, (skin.getBounds().height/2) / SCALE);


		var jaxiBodyDef = new b2BodyDef;
		jaxiBodyDef.type = b2Body.b2_dynamicBody;
		jaxiBodyDef.position.x = skin.x / SCALE;
		jaxiBodyDef.position.y = skin.y / SCALE;
		jaxiBodyDef.fixedRotation = true;
		b2jaxi = world.CreateBody(jaxiBodyDef);
		b2jaxi.CreateFixture(jaxiFixture);

		// assign actor
		var actor = new actorObject(b2jaxi, skin);
		actor.isCharacter = true;
		b2jaxi.SetUserData(actor);  // set the actor as user data of the body so we can use it later: body.GetUserData()
		bodies.push(b2jaxi);
	}

	// create chocobot body shape and assign actor object
	var createChocoBot = function(skin) {
		var chocoFixture = new b2FixtureDef;
		chocoFixture.density = .5;
		chocoFixture.restitution = 0.1;
		chocoFixture.shape = new b2PolygonShape;

		var chocoWidth =  ((skin.getBounds().width) / SCALE)/2;
		var chocoHeight = ((skin.getBounds().height/4)/SCALE)/2;
		var cornerFudge = 8/SCALE;


		var p1 = new b2Vec2(-chocoWidth + cornerFudge, chocoHeight);
		var p2 = new b2Vec2(-chocoWidth, chocoHeight - cornerFudge);
		var p3 = new b2Vec2(-chocoWidth, -(chocoHeight * 6) + cornerFudge);
		var p4 = new b2Vec2(-chocoWidth + cornerFudge, -chocoHeight * 6);
		var p5 = new b2Vec2(chocoWidth - cornerFudge, -chocoHeight * 6);
		var p6 = new b2Vec2(chocoWidth, -(chocoHeight * 6) + cornerFudge);
		var p7 = new b2Vec2(chocoWidth, chocoHeight - cornerFudge);
		var p8 = new b2Vec2(chocoWidth - cornerFudge, chocoHeight);

		chocoFixture.shape.SetAsArray([p1,p2,p3,p4,p5, p6, p7, p8]);

		//chocoFixture.shape.SetAsBox((skin.getBounds().width/2) / SCALE, (skin.getBounds().height/2) / SCALE);

		var chocoBodyDef = new b2BodyDef;
		chocoBodyDef.type = b2Body.b2_dynamicBody;
		chocoBodyDef.position.x = skin.x / SCALE;
		chocoBodyDef.position.y = skin.y / SCALE;
		chocoBodyDef.fixedRotation = true;
		b2choco = world.CreateBody(chocoBodyDef);
		b2choco.CreateFixture(chocoFixture);

		// assign actor
		var actor = new actorObject(b2choco, skin);
		actor.isCharacter = true;
		b2choco.SetUserData(actor);  // set the actor as user data of the body so we can use it later: body.GetUserData()
		bodies.push(b2choco);
	}

	var createSolidPiece = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		switch(skin.id)
		{
			case "TileEndLeft":
				var tileWidth = (skin.width/2)/SCALE;
				var tileHeight =  (skin.height/2)/SCALE;
				var dipPos = 20/SCALE;
				var p1 = new b2Vec2(-tileWidth, tileHeight);
				var p2 = new b2Vec2(-tileWidth, dipPos);
				var p3 = new b2Vec2(0, -tileHeight);
				var p4 = new b2Vec2(tileWidth, -tileHeight);
				var p5 = new b2Vec2(tileWidth, tileHeight);

				pieceFixture.shape.SetAsArray([p1,p2,p3, p4, p5]);

				break;
			case "TileEndRight":
				var tileWidth = (skin.width/2)/SCALE;
				var tileHeight =  (skin.height/2)/SCALE;
				var dipPos = 20/SCALE;
				var p1 = new b2Vec2(-tileWidth, tileWidth);
				var p2 = new b2Vec2(-tileWidth, -tileWidth);
				var p3 = new b2Vec2(0, -tileWidth);
				var p4 = new b2Vec2(tileWidth, dipPos);
				var p5 = new b2Vec2(tileWidth, tileWidth);

				pieceFixture.shape.SetAsArray([p1,p2,p3, p4, p5]);

				break;
			default:
				pieceFixture.shape.SetAsBox((skin.width/2) / SCALE, (skin.height/2) / SCALE);
				break;
		}

		var pieceBodyDef = new b2BodyDef;
		pieceBodyDef.type = b2Body.b2_staticBody;
		pieceBodyDef.position.x = (skin.x)  / SCALE;
		pieceBodyDef.position.y = (skin.y) / SCALE;
		if(skin.angle != undefined)
		{
			pieceBodyDef.angle = skin.angle * (Math.PI / 180);
		}
		var piece = world.CreateBody(pieceBodyDef);
		piece.CreateFixture(pieceFixture);

		// assign actor
		var actor = new actorObject(piece, skin);
		piece.SetUserData(actor);  // set the actor as user data of the body so we can use it later: body.GetUserData()
		bodies.push(piece);



	}

	var createSign = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.isSensor = true;
		pieceFixture.shape = new b2PolygonShape;
		pieceFixture.shape.SetAsBox((skin.width/2) / SCALE, (skin.height/2) / SCALE);
		var pieceBodyDef = new b2BodyDef;
		pieceBodyDef.type = b2Body.b2_staticBody;
		pieceBodyDef.position.x = (skin.x)  / SCALE;
		pieceBodyDef.position.y = (skin.y) / SCALE;
		var piece = world.CreateBody(pieceBodyDef);
		piece.CreateFixture(pieceFixture);

		// assign actor
		var actor = new actorObject(piece, skin);
		piece.SetUserData(actor);  // set the actor as user data of the body so we can use it later: body.GetUserData()
		bodies.push(piece);

		//add the checkpoint
		var checkPoint = {x: skin.x, y: skin.y};
		checkPoints.push(checkPoint);
		piece.GetUserData().skin.checkPoint = checkPoints.length - 1;
	}

	var createTeleportor = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.isSensor = true;
		pieceFixture.shape = new b2PolygonShape;
		pieceFixture.shape.SetAsBox((skin.width/4) / SCALE, (skin.height/10) / SCALE);
		var pieceBodyDef = new b2BodyDef;
		pieceBodyDef.type = b2Body.b2_staticBody;
		pieceBodyDef.position.x = (skin.x)  / SCALE;
		pieceBodyDef.position.y = (skin.y) / SCALE;
		//TODO skin.width not defined
		var piece = world.CreateBody(pieceBodyDef);
		piece.CreateFixture(pieceFixture);

		// assign actor
		var actor = new actorObject(piece, skin);
		piece.SetUserData(actor);  // set the actor as user data of the body so we can use it later: body.GetUserData()
		bodies.push(piece);
	}

	var createTrigger = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.isSensor = true;
		pieceFixture.shape = new b2PolygonShape;
		pieceFixture.shape.SetAsBox((skin.width/2) / SCALE, (skin.height/2) / SCALE);
		var pieceBodyDef = new b2BodyDef;
		pieceBodyDef.type = b2Body.b2_staticBody;
		pieceBodyDef.position.x = (skin.x)  / SCALE;
		pieceBodyDef.position.y = (skin.y) / SCALE;
		var piece = world.CreateBody(pieceBodyDef);
		piece.CreateFixture(pieceFixture);

		// assign actor
		var actor = new actorObject(piece, skin);
		piece.SetUserData(actor);  // set the actor as user data of the body so we can use it later: body.GetUserData()
		bodies.push(piece);

	}

	var createRamp = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
		var p2 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p3 = new b2Vec2((skin.width/2)/SCALE, (skin.height/2)/SCALE);

		pieceFixture.shape.SetAsArray([p1,p2,p3]);
		var pieceBodyDef = new b2BodyDef;
		pieceBodyDef.type = b2Body.b2_staticBody;
		pieceBodyDef.position.x = (skin.x)  / SCALE;
		pieceBodyDef.position.y = (skin.y) / SCALE;
		var piece = world.CreateBody(pieceBodyDef);
		piece.CreateFixture(pieceFixture);

		// assign actor
		var actor = new actorObject(piece, skin);
		piece.SetUserData(actor);  // set the actor as user data of the body so we can use it later: body.GetUserData()
		bodies.push(piece);
	}

	// remove actor and it's skin object
	var removeActor = function(actor) {
		gameSprite.removeChild(actor.skin);
		actors.splice(actors.indexOf(actor),1);
	}

	// box2d update function. delta time is used to avoid differences in simulation if frame rate drops
	var update = function() {
		var now = Date.now();
		var dt = now - lastTimestamp;
		fixedTimestepAccumulator += dt;
		lastTimestamp = now;
		while(fixedTimestepAccumulator >= STEP) {
			// remove bodies before world timestep
			for(var i=0, l=bodiesToRemove.length; i<l; i++) {
				removeActor(bodiesToRemove[i].GetUserData());
				bodiesToRemove[i].SetUserData(null);
				world.DestroyBody(bodiesToRemove[i]);
			}
			bodiesToRemove = [];

			// update active actors
//
//			//determine jaxi's animation, and also, if an action has ended...
			if(b2jaxi.GetLinearVelocity().x == 0 &&
				gjaxi.currentAnimation != "pickup" &&
				gjaxi.currentAnimation != "wakeup" &&
				gjaxi.currentAnimation != "die" &&
				gjaxi.currentAnimation != "teleport")
			{
				gjaxi.gotoAndStop("idol");
				showCodePanel();

			}

			if(currentAction != gjaxi.currentAnimation) //the state has changed...
			{
				if(actions.length > 0)
				{
					jaxi.doActions();
				}

				if(isFollowing)
				{
					jaxi.follow(thingToFollow);
				}
			}

			currentAction = gjaxi.currentAnimation;

			for(var i=0, l=actors.length; i<l; i++) {
				if(actors[i].isCharacter)
				{
					//determine actor's face direction
					if(actors[i].body.GetLinearVelocity().x < -.2)
					{
						actors[i].skin.scaleX = -1;

					}
					if(actors[i].body.GetLinearVelocity().x > 0)
					{
						actors[i].skin.scaleX = 1;

					}
				}


				actors[i].update();
			}

			world.Step(TIMESTEP, 10, 10);

			fixedTimestepAccumulator -= STEP;
			world.ClearForces();
			world.m_debugDraw.m_sprite.graphics.clear();
			world.DrawDebugData();

			//update the camera
			if(gjaxi.y < deathZone)
			{
				if(!isChopperUp)
				{
					window.removeEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
					window.removeEventListener('keydown', function(event) { Key.onKeydown(event); }, false);

					if(!createjs.Tween.hasActiveTweens(gameSprite))
					{
						gameSprite.x = -(gjaxi.x * zoom) + 300;
						gameSprite.y = -(gjaxi.y * zoom) + 480;

						parallaxBGSprite.x = -(b2jaxi.GetWorldCenter().x * (SCALE *.25));
						//parallaxBGSprite.y = -(b2jaxi.GetWorldCenter().y * (SCALE * zoom)) + 480;

						parallaxFGSprite.x = -(b2jaxi.GetWorldCenter().x * (SCALE *.9)) + 1024;

						parallaxFGSprite.visible = true;

					}

				}   else {
					//use the keyboard to move the stage...

					window.addEventListener('keyup', function(event) { Key.onKeyup(event); }, false);
					window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);

					if (Key.isDown(Key.UP))
					{
						chopperBot.y -= 25;
					}
					if (Key.isDown(Key.LEFT))
					{
						chopperBot.x -= 25;
					}
					if (Key.isDown(Key.DOWN))
					{
						chopperBot.y += 25;
					}
					if (Key.isDown(Key.RIGHT))
					{
						chopperBot.x += 25;
					}

					if(!createjs.Tween.hasActiveTweens(gameSprite))
					{
						gameSprite.x = -(chopperBot.x * zoom) + 160;
						gameSprite.y = -(chopperBot.y * zoom) + 160;

						//parallaxBGSprite.x = -(chopperBot.x * (SCALE *.25));
						//parallaxBGSprite.y = -(b2jaxi.GetWorldCenter().y * (SCALE * zoom)) + 480;

						//parallaxFGSprite.x = -(chopperBot.x * (SCALE *.9)) + 1024;
						parallaxFGSprite.visible = false;
					}

				}

				gameSprite.scaleX = zoom;
				gameSprite.scaleY = zoom;

			} else {
				if(gjaxi.y > deathZone + 2500)
				{
					reloadPage();
				}
			}

		}
	}

	var pauseResume = function(p) {
		if(p) { TIMESTEP = 0;
		} else { TIMESTEP = 1/STEP; }
		lastTimestamp = Date.now();
	}

	return {
		setup: setup,
		update: update,
		setupContactListener: setupContactListener,
		createPink: createPink,
		createChocoBot: createChocoBot,
		createSign: createSign,
		createTeleportor: createTeleportor,
		createTrigger: createTrigger,
		createSolidPiece: createSolidPiece,
		createRamp: createRamp,
		pauseResume: pauseResume
	}
})();

function handleProgress(event)
{
	//use event.loaded to get the percentage of the loading
}

function handleFileLoad(event) {
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

var tooltipContainer;
var tooltip;


function createTooltip(x, y, text){
	
	var width = 200, height = 50;
	
	tooltipContainer = new createjs.Container();
	tooltipContainer.x = x;
	tooltipContainer.y = y;
	//tooltipContainer.setBounds(0, 0, width, height);	
	
	var rect = new createjs.Shape();
	rect.graphics.setStrokeStyle(1,"square").beginStroke("#000000");
	rect.graphics.beginFill('#FFFFFF').drawRect(0, 0, width, height);
	
	tooltipContainer.addChild(rect);
	
	var tooltipText = new createjs.Text();
	tooltipText.set({
		text: 'hello: ' + text,
		font: "26px Arial",
		color: "#000000",
		textAlign: "center"
	});	
	
	tooltipText.name = "tooltipText";
	
	tooltipText.x = rect.x + (width / 2);
	tooltipText.y = rect.y + (height / 2) - 10;
		
	/*
	var b = tooltipText.getBounds();
	tooltipText.x = width - b.width/2; 
	tooltipText.y = height - b.height/2;	
	* */
	
	tooltipContainer.alpha = 0;
	tooltipContainer.addChild(tooltipText);
	gameSprite.addChild(tooltipContainer);	
	
}

function showTooltip(x, y, text){
	
	tooltipContainer.x = x;
	tooltipContainer.y = y;

	var tooltipText = tooltipContainer.getChildByName("tooltipText");
	tooltipText.text = text;
	
	tooltipContainer.alpha = 0;
	createjs.Tween.get(tooltipContainer, {override:true})
         .wait(0)
         .to({alpha:1, visible:true}, 700);	
	
}

function hideTooltip(){
	
	createjs.Tween.removeTweens(tooltipContainer);
	
	//tooltipContainer.visible = false;
	tooltipContainer.alpha = 0;
}

function handleMouseOver(event) {
	var target = event.target;
	//console.log(target.type);
	
	var type = target.type !== undefined ? target.type : "Object";
		
	showTooltip((target.x - target.regX), (target.y - target.regY - 10), type + ": " + target.id)
}

function handleMouseOut(event) {
    hideTooltip();
}

function handleComplete(event) {
	//triggered when all loading is complete
	//setup the level

	//now go through the level JSON and build the level
	//level is defined in the level.js file
	for(var i=0; i<level.elements.length; i++)
	{
		var item = getAssetByType(level.elements[i].type);
		var id = item.id;
		var result = loader.getResult(id);

		if (item.type == createjs.LoadQueue.IMAGE) {
			var bmp = new createjs.Bitmap(result);
		}

		var platformOffsetY = -80;

		switch (id) {

			case "gjaxi":
				gjaxi.snapToPixel = true;

				if(urlVars['cp'] == undefined)
				{
					gjaxi.x = level.elements[i].x;
					gjaxi.y = level.elements[i].y;
				}  else {
					gjaxi.x = checkPoints[urlVars['cp']].x;
					gjaxi.y = checkPoints[urlVars['cp']].y;
				}

				gjaxi.regX = (gjaxi.getBounds().width/2) - 80;
				gjaxi.regY = (gjaxi.getBounds().height/2) + 50;
				
				gjaxi.onMouseOver = handleMouseOver;
				gjaxi.onMouseOut = handleMouseOut;
				
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
				piece.angle = level.elements[i].rotation;
				piece.regX = piece.width / 2;
				piece.regY = (piece.height / 2) - 4;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createSolidPiece(piece);
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
				piece.angle = level.elements[i].rotation;
				piece.regX = piece.width / 2;
				piece.regY = (piece.height / 2) - 4;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createSolidPiece(piece);
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
				piece.angle = level.elements[i].rotation;
				piece.regX = piece.width / 2;
				piece.regY = (piece.height / 2) - 20;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createSolidPiece(piece);
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
				piece.angle = level.elements[i].rotation;
				piece.regX = piece.width / 2;
				piece.regY = piece.height / 2;
				gameSprite.addChild(piece);
				//setup the level
				box2d.createSolidPiece(piece);
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
				gameSprite.addChild(piece);
				//setup the level
				box2d.createSolidPiece(piece);
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
				gameSprite.addChild(piece);
				//setup the level
				box2d.createSolidPiece(piece);
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
				gameSprite.addChild(piece);
				//setup the level
				box2d.createSolidPiece(piece);
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

				piece = new createjs.BitmapAnimation(ss);

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

				piece = new createjs.BitmapAnimation(ss);

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
				chopperBot = new createjs.BitmapAnimation(ss);

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
				monster = new createjs.BitmapAnimation(ss);

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
				Choco = new createjs.BitmapAnimation(ss);

				// Set up looping
				ss.getAnimation("idol").next = "idol";
				ss.getAnimation("run").next = "run";
				ss.getAnimation("jump").next = "idol"
				Choco.gotoAndPlay("idol");


				Choco.type = id
				Choco.snapToPixel = true;
				Choco.x =  level.elements[i].x;
				Choco.y = level.elements[i].y;
				Choco.regX = piece.width / 2;
				Choco.regY = (piece.height / 2);
				gameSprite.addChild(Choco);
				box2d.createChocoBot(Choco);
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
			default: //for general game art
				var piece = new createjs.Shape();
				var g = piece.graphics;
				g.beginBitmapFill(result);
				piece.width = level.elements[i].width;
				piece.height = level.elements[i].height;
				g.drawRect(0, 0, piece.width, piece.height);
				piece.x = level.elements[i].x - (piece.width/2);
				piece.y = level.elements[i].y - (piece.height/2);
				
				if(level.elements[i].type == 'RobotJunk1'){
					piece.type = level.elements[i].type;
					piece.onMouseOver = handleMouseOver;
					piece.onMouseOut = handleMouseOut;		
				}

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

	gameSprite.scaleX = zoom;
	gameSprite.scaleY = zoom;

	createjs.Ticker.setFPS(30);
	createjs.Ticker.useRAF = true;
	createjs.Ticker.addEventListener("tick", tick);

	//Now show the page...
	$('#loadScreen').css("display", "none");
	
	
	createTooltip(0, 0, "test");
	
	//gjaxi.addEventListener("tick", function() { console.log(gjaxi.currentAnimation); });
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
