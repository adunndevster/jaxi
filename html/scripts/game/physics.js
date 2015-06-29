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

				//console.log("--> Tocó teleport");

				gjaxi.gotoAndPlay("teleport");
				gjaxi.addEventListener("animationend", function()
				{
					window.location = nextLevelUrl;
					//$( "#gameFrame" ).load( nextLevelUrl );
				}) ;

				b2jaxi.SetAwake(false);
			}

			if(fixtureB.GetBody().GetUserData().skin.isTrigger && (fixtureA.GetBody().GetUserData().skin == gjaxi))
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
		debugDraw.SetDrawScale(SCALE/10);
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
	
	var createPhysicsBorder = function(skin) {
		
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		switch(skin.id)
		{
			case "different shape": //This is a place holder for different shapes
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
			default:
				pieceFixture.shape.SetAsBox((skin.width/2) / SCALE, (skin.height/2) / SCALE);
				break;
		}

		var pieceBodyDef = new b2BodyDef;
		pieceBodyDef.type = b2Body.b2_staticBody;
		
		if(skin.angle != undefined)
		{
			pieceBodyDef.angle = skin.angle * (Math.PI / 180);
		}
		
		pieceBodyDef.position.x = (skin.x)  / SCALE;
		pieceBodyDef.position.y = (skin.y) / SCALE;
		
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
	
	var createRamp2 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createFence = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	//----------------------------------------------------------------

	var createJunkyardItem1 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createJunkyardItem2 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createJunkyardItem3 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createJunkyardItem4 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createJunkyardItem5 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createJunkyardItem6 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createJunkyardSplash1 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createJunkyardSplash2 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createJunkyardSplash3 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createJunkyardSplash4 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createJunkyardSplash5 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createJunkyardSplash6 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createJunkyardSplash7 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createJunkyardTileFloor1 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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


	//----------------------------------------------------------------

	var createFactory = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createGarbageMix1 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createGarbageMix2 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createGarbageStorage = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createMagnetCrane = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createRock1 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createRock2 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createRock3 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createScrapCrane = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createGarbageMountain1 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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

	var createGarbageMountain2 = function(skin) {
		var pieceFixture = new b2FixtureDef;
		pieceFixture.density = 1;
		pieceFixture.restitution = .1;
		pieceFixture.shape = new b2PolygonShape;

		//points
		var p1 = new b2Vec2((skin.width/2)/SCALE, (-skin.height/2)/SCALE);
		var p2 = new b2Vec2((-skin.width/2)/SCALE, (skin.height/2)/SCALE);
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


	//--------------------------------------------------------------------------

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
				//console.log("terminó!!!!");
				gjaxi.gotoAndStop("idol");
				//showCodePanel();

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
						if(isCameraOn)
						{
							gameSprite.x = -(gjaxi.x * zoom) + 300;
							gameSprite.y = -(gjaxi.y * zoom) + 480;

							parallaxBGSprite.x = -(b2jaxi.GetWorldCenter().x * (SCALE *.25));
							//parallaxBGSprite.y = -(b2jaxi.GetWorldCenter().y * (SCALE * zoom)) + 480;

							parallaxFGSprite.x = -(b2jaxi.GetWorldCenter().x * (SCALE *.9)) + 1024;

							parallaxFGSprite.visible = true;
						}

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

				parallaxBGSprite.scaleX = 2/(1/zoom);
				parallaxBGSprite.scaleY = 2/(1/zoom);
				
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
	
	var createTesting = function() {
		console.log("--createTesting--");
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
		createPhysicsBorder: createPhysicsBorder,
		createTesting: createTesting,
		createRamp: createRamp,
		createRamp2: createRamp2,
		createFence: createFence,

		createJunkyardItem1: createJunkyardItem1,
		createJunkyardItem2: createJunkyardItem2,
		createJunkyardItem3: createJunkyardItem3,
		createJunkyardItem4: createJunkyardItem4,
		createJunkyardItem5: createJunkyardItem5,
		createJunkyardItem6: createJunkyardItem6,
		createJunkyardSplash1: createJunkyardSplash1,
		createJunkyardSplash2: createJunkyardSplash2,
		createJunkyardSplash3: createJunkyardSplash3,
		createJunkyardSplash4: createJunkyardSplash4,
		createJunkyardSplash5: createJunkyardSplash5,
		createJunkyardSplash6: createJunkyardSplash6,
		createJunkyardSplash7: createJunkyardSplash7,
		createJunkyardTileFloor1: createJunkyardTileFloor1,

		createFactory: createFactory,
		createGarbageMix1: createGarbageMix1,
		createGarbageMix2: createGarbageMix2,
		createGarbageStorage: createGarbageStorage,
		createMagnetCrane: createMagnetCrane,
		createRock1: createRock1,
		createRock2: createRock2,
		createRock3: createRock3,
		createScrapCrane: createScrapCrane,
		createGarbageMountain1: createGarbageMountain1,
		createGarbageMountain2: createGarbageMountain2,
		pauseResume: pauseResume
	}
})();