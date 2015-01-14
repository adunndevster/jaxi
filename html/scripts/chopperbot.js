/**
 * Created with IntelliJ IDEA.
 * User: adunn
 * Date: 7/11/13
 * Time: 6:57 PM
 * To change this template use File | Settings | File Templates.
 */


var chopperBot;
var arrows;
function toggleChopperBot()
{
	if(isChopperUp)
	{
		hideChopperBot();
	} else {
		showChopperBot();
	}
}

function giveChopperBot()
{
	chopperBot.scaleX = chopperBot.scaleY = .5;
	chopperBot.x = gjaxi.x - 350;
	chopperBot.y = gjaxi.y - 2000;
	chopperBot.alpha = 1;

	$('#btnChopperBot').animate({opacity: '1'});

	createjs.Tween.get(chopperBot).to({x: gjaxi.x - 100, y: gjaxi.y - 200}, 1200, createjs.Ease.quadOut)
		.wait(13000)
		.to({x: gjaxi.x - 350, y: gjaxi.y - 2000}, 900, createjs.Ease.quadOut);
}

function showChopperBot()
{
	chopperBot.scaleX = chopperBot.scaleY = 1.4;
	chopperBot.x = gjaxi.x - 350;
	chopperBot.y = gjaxi.y - 2000;
	chopperBot.alpha = 1;

	createjs.Tween.get(chopperBot).to({x: gjaxi.x - 410, y: gjaxi.y - 1200, scaleX:5, scaleY:5}, 1200, createjs.Ease.quadOut).call(onComplete);
	function onComplete()
	{
		createjs.Tween.get(gameSprite).to({x:  -(chopperBot.x * zoom) + 160, y:  -(chopperBot.y * zoom) + 160}, 600, createjs.Ease.quadInOut).call(onComplete2);
		function onComplete2()
		{

			isChopperUp = true;
			showArrowKeys();
		}

	}

	doZoom(.2, 1000);

}

function hideChopperBot()
{
	isChopperUp = false;
	if(arrows != null) hideArrowKeys();



	createjs.Tween.get(chopperBot).to({x: gjaxi.x - 350, y: gjaxi.y - 2500, scaleX:1, scaleY:1}, 900, createjs.Ease.quadIn);
	createjs.Tween.get(gameSprite).to({x: -(gjaxi.x * zoom) + 300, y: -(gjaxi.y * zoom) + 480}, 600, createjs.Ease.quadInOut).call(onComplete);
	function onComplete()
	{
		doZoom(.5, 1000);
	}


}

function showArrowKeys()
{
	arrows = new createjs.Bitmap("assets/images/Arrows.png");
	arrows.x = 70;
	arrows.y = 260;
	arrows.alpha = .6;
	stage.addChild(arrows);

	createjs.Tween.get(arrows, {loop:true})
		.to({alpha:.6}, 400, createjs.Ease.quadIn)
		.to({alpha:.8}, 400, createjs.Ease.quadOut);
}

function hideArrowKeys()
{
	createjs.Tween.get(arrows, {override:true})
		.to({alpha:0}, 400, createjs.Ease.quadIn).call(onComplete);
	function onComplete()
	{
		stage.removeChild(arrows);
		arrows = null;
	}
}