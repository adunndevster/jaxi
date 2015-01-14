/**
 * Created with IntelliJ IDEA.
 * User: adunn
 * Date: 7/6/13
 * Time: 3:03 PM
 * To change this template use File | Settings | File Templates.
 */

var actions = [];
var currentActionIndex = 0;
var currentAction;
var isActionRunning = false;
var chocobot = (function(){

	function jump(power)
	{
		power = typeof power !== 'undefined' ? power : 400;
		var degrees = (power < 0) ? 80 : -80;
		b2choco.ApplyImpulse(new b2Vec2(Math.cos(degrees * (Math.PI / 180)) * power,
			Math.sin(degrees * (Math.PI / 180)) * power),
			b2choco.GetWorldCenter());
		Choco.gotoAndPlay("jump");
	};

	function run(distance)
	{
		distance = typeof distance !== 'undefined' ? distance : 200;
		var degrees = 0;
		b2choco.ApplyImpulse(new b2Vec2(Math.cos(degrees * (Math.PI / 180)) * distance,
			0),
			b2choco.GetWorldCenter());
		Choco.gotoAndPlay("run");
		//bounceSound = createjs.Sound.createInstance("bounce");  // create it by id
		//s.bounceSound.setVolume(Math.random()*0.01 + 0.01);  // because there will be a lot
		var runSound = createjs.Sound.createInstance("sndRun");  // create it by id
		runSound.setVolume(.1);
		runSound.play();
	};

	function pickUp()
	{
		Choco.gotoAndPlay("pickup");
		
	};

	function say(words)
	{
		speak(Choco, words);
		//alert(words);
		hideCodePanel();
	};

	//leads jaxi around...
	function lead()
	{

	}

	function die()
	{
		Choco.gotoAndPlay("die");
		Choco.addEventListener("animationend", function()
		{
			reloadPage();
		});
		hideCodePanel();
	};

	function remove()
	{
		bodiesToRemove.push(b2choco);
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
		var action =  actions[currentActionIndex].action;
		var param = actions[currentActionIndex].param;
		action(param);
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
		lead: lead,
		die: die,
		remove: remove,
		addAction: addAction,
		clearActions: clearActions,
		doActions: doActions
	}
})();

//now setup chocos vars
chocobot.isAlive = true;