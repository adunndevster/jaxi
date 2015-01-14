/**
 * Created with IntelliJ IDEA.
 * User: adunn
 * Date: 5/16/13
 * Time: 6:26 PM
 * To change this template use File | Settings | File Templates.
 */

var actions = [];
var currentActionIndex = 0;
var currentAction;
var isActionRunning = false;
var isFollowing = false;
var thingToFollow;

var jaxi = (function(){

	function jump(power)
	{
		power = typeof power !== 'undefined' ? power : 400;
		var degrees = (power < 0) ? 80 : -80;
		b2jaxi.ApplyImpulse(new b2Vec2(Math.cos(degrees * (Math.PI / 180)) * power,
			Math.sin(degrees * (Math.PI / 180)) * power),
			b2jaxi.GetWorldCenter());
		gjaxi.gotoAndPlay("jump");
		hideCodePanel();
	};

	function run(distance)
	{
		distance = typeof distance !== 'undefined' ? distance : 200;
		var degrees = 0;
		b2jaxi.ApplyImpulse(new b2Vec2(Math.cos(degrees * (Math.PI / 180)) * distance,
			0),
			b2jaxi.GetWorldCenter());
		gjaxi.gotoAndPlay("run");
		//bounceSound = createjs.Sound.createInstance("bounce");  // create it by id
		//s.bounceSound.setVolume(Math.random()*0.01 + 0.01);  // because there will be a lot
		var runSound = createjs.Sound.createInstance("sndRun");  // create it by id
		runSound.setVolume(.1);
		runSound.play();
		hideCodePanel();
	};

	function pickUp()
	{
		gjaxi.gotoAndPlay("pickup");
		hideCodePanel();
	};

	function say(words)
	{
		speak(gjaxi, words);
		//alert(words);
		hideCodePanel();
	};

	function die()
	{
		gjaxi.gotoAndPlay("die");
		gjaxi.addEventListener("animationend", function()
		{
			reloadPage();
		});
		hideCodePanel();
	};

	//this function makes jaxi follow something.
	function follow(thing)
	{
		//1. determine jaxi's distance (x, y) to the thing
		var dx = thing.x - gjaxi.x;
		var dy = thing.y - gjaxi.y;

		//now get the angle of the thing from jaxi... if it is > 20 then she needs to jump, otherwise, run
		var angle = Math.ceil(Math.tan(dy/dx) * (180/Math.PI));
		//alert(angle);


		//2. determine if she needs to run or jump to get there
		//3. Do the determined action, and then run jaxi.follow(thing) again...
		if(angle <= 0)
		{
			jaxi.jump((dx/10) * (Math.abs(angle/10) +.9));
		} else {
			jaxi.run(dx/10);
		}

		isFollowing = true;
		thingToFollow = thing;

		//TODO: I may need to do cliff and edge detection
	}

	function addAction(action, param)
	{
		actions.push({action: action, param: param});
	}

	function clearActions()
	{
		actions = [];
		currentActionIndex = 0;
		isActionRunning = false;
	}

	function doActions() //also works to call the next action
	{
		var action =  "jaxi." + actions[currentActionIndex].action;
		var param = actions[currentActionIndex].param;
		eval(action)(param);
		currentAction = gjaxi.currentAnimation;
		isActionRunning = true;
		currentActionIndex++;

		if(currentActionIndex >= actions.length)
		{
			clearActions();
		}
	}

	return {
		jump: jump,
		run: run,
		pickUp: pickUp,
		say: say,
		die: die,
		follow: follow,
		addAction: addAction,
		clearActions: clearActions,
		doActions: doActions
	}
})();

//now setup jaxis vars
jaxi.isAlive = true;



//non jaxi functions...

function runCode()
{
	//var commandString = document.getElementById('txtCommand').innerHTML;
	var commandString = editor.getValue();
	//commandString = commandString.replace(/<br>/g, "");

	try
	{
		eval(commandString);
	} catch(err)
	{
		alert(err.message);
	}

	editor.focus();

	hideSpeechBubble();

	if(isChopperUp)
	{
		hideChopperBot();
	}

}

function givePinkHandbook()
{
	$('#btnHandbook').animate({opacity: '1'});
}

function givePinkChopper()
{
	//show chopper
	//$('#btnHandbook').animate({opacity: '1'});
}