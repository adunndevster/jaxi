/**
 * Created with IntelliJ IDEA.
 * User: adunn
 * Date: 5/24/13
 * Time: 4:20 PM
 * To change this template use File | Settings | File Templates.
 */


var currentConversationAction;
var conversation;

//Shows a message for the user...
//fades it in
//and stays up until it is told to go away
function showMessage(message, callBack, image)
{
	image = typeof image !== 'undefined' ? image : 'assets/images/mcPinkIcon.png';

	document.getElementById('msgBoxImage').innerHTML = '<img src="' + image + '">'
	document.getElementById('msgBox_MessageArea').innerHTML = message;

	$('#msgBox').fadeIn(500, callBack);
}

//changes the message text
function nextMessage(message)
{
	document.getElementById('msgBox_MessageArea').innerHTML = message;
}

//fades the message window window out
function hideMessage(callBack)
{
	$('#msgBox').fadeOut('fast', callBack);
}

//shrinks the code panel
function hideCodePanel()
{
	//console.log("--hideCodePanel--");

	$('#editor').stop(true);
	if($('#editor').height() != 40)
	{
		$('#editor').animate({height:'40px'}, 2000);
	}

}

//shows the code panel
function showCodePanel()
{
	//$('#editor').clearQueue();
	if($('#editor').height() < 700)
	{
		$('#editor').delay(700).animate({height:'620'});
	}

}

function fadeCodePanelOut()
{

	console.log("--fadeCodePanelOut--");

	$('#codeControls').stop();
	$('#editor').stop();
	$('#codeControls').animate({opacity:'0'}, {duration:250, queue:false});
	$('#editor').animate({opacity:'0'}, {duration:250, queue:false});

	document.getElementById('editorContainer').style.zIndex = "-1";
}

function fadeCodePanelIn()
{

	console.log("--fadeCodePanelIn--");

	$('#codeControls').stop();
	$('#editor').stop();
	$('#codeControls').animate({opacity:'1'}, {duration:250, queue:false});
	$('#editor').animate({opacity:'.85'}, {duration:250, queue:false});

	document.getElementById('editorContainer').style.zIndex = "1000";
}


function speak(actor, words) //actor is a skin like Choco
{
	var bubblePos = getCharacterPosition(actor);


	document.getElementById('wordsBubble').innerHTML = words;
	
	document.getElementById('wordsBubble').innerHTML += "<div class='button_next'><a href='#' onClick='showNextConversation(); return false;'><img src='assets/images/junkyard/button_next.png'></a></div>";
	
	document.getElementById('speechContainer').style.left = (bubblePos.x - 150) + 'px';
	document.getElementById('speechContainer').style.top = (bubblePos.y - 100) + 'px';
}

function hideSpeechBubble()
{
	document.getElementById('speechContainer').style.left = '-2000px';
}

function showNextConversation(){

	if(currentConversationAction < conversation.actions.length)
	{
		//console.log("showNextConversation #1");
		doNextConversationElement();
	} else {
		console.log("showNextConversation #2");
		fadeCodePanelIn();
		hideSpeechBubble();
	}

}


function runConversation(convoId)
{

	console.log("--runConversation");

	currentConversationAction = 0;

	fadeCodePanelOut();

	//now start running through the convo...
	conversation = conversations[convoId];

	doNextConversationElement();

}

function doNextConversationElement()
{
	var action = conversation.actions[currentConversationAction];

	//console.log(action);

	if(action.type == 'speak')
	{
		speak(action.character, action.value);
	} else if(action.type == 'js')
	{
		hideSpeechBubble();
		eval(action.value);
	}

	currentConversationAction++;

	var bubbleLength = action.value.length * 60;
	if(bubbleLength < 1250) bubbleLength = 1250;

	
	if((action.type != 'speak')&&(currentConversationAction < conversation.actions.length)){
		hideSpeechBubble();
		setTimeout(doNextConversationElement, bubbleLength);
	}else if(currentConversationAction >= conversation.actions.length){
		setTimeout(fadeCodePanelIn, bubbleLength);
	}
	


	/*
	if(currentConversationAction < conversation.actions.length)
	{
		setTimeout(doNextConversationElement, bubbleLength);
	} else {
		setTimeout(fadeCodePanelIn, bubbleLength);
	}
	*/
	
}


function getUrlVars()
{
	var vars = [], hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
	for(var i = 0; i < hashes.length; i++)
	{
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
}

//function showStage(amount, speed, route){
function showStage(camera){
	
	console.log(camera);

	//speed = typeof speed !== 'undefined' ? speed : 600;


	//First zoom in to Jaxi
	createjs.Tween.get(window)
		.to({zoom:camera.zoomInAmount}, camera.zoomInSpeed, createjs.Ease.quadInOut)
		.call(showStageZoomComplete);

	function showStageZoomComplete() {
		createjs.Tween.get(gameSprite)
			.to({x:-camera.walkDistance}, camera.walkSpeed, createjs.Ease.quadInOut)
			.call(showStageRouteComplete);
    }

	function showStageRouteComplete() {
		//createjs.Tween.get(gameSprite).to({x:0, y:0 }, 2000, createjs.Ease.quadInOut);
		createjs.Tween.get(gameSprite).
			to({x:-(gjaxi.x * camera.zoomInAmount) + 300, y:-(gjaxi.y * camera.zoomInAmount) + 480 }, camera.walkSpeed, createjs.Ease.quadInOut)
			.call(showStageFinalZoomComplete);
    }

    function showStageFinalZoomComplete() {

		createjs.Tween.get(window)
			.to({zoom:camera.zoomOutAmount}, camera.zoomOutSpeed, createjs.Ease.quadInOut);
    }

}

function doZoom(amount, speed)
{
	speed = typeof speed !== 'undefined' ? speed : 600;
	createjs.Tween.get(window).to({zoom:amount}, speed, createjs.Ease.quadInOut);

	//console.log("position: " + gameSprite.width + " + " + gameSprite.height);

	/*
	if(typeof levelCamera === 'undefined'){
		levelCamera = false;
	}	
	
	if(amount > zoom)
	{
		createjs.Tween.get(gameSprite).to({x:-(gjaxi.x * amount) + 300, y:-(gjaxi.y * amount) + 480 }, speed, createjs.Ease.quadInOut);
	} else {
		if(levelCamera && amount >= zoom)
		{
			createjs.Tween.get(gameSprite).to({x:-(gjaxi.x * amount) + 300, y:-(gjaxi.y * amount) + 480 }, speed, createjs.Ease.quadInOut);
	
		} else {
			createjs.Tween.get(gameSprite).to({x:0, y:0 }, speed, createjs.Ease.quadInOut);

		}
	}
	*/
	
}

function doPan(x, y, speed)
{
	speed = typeof speed !== 'undefined' ? speed : 600;
	
	isCameraOn = false;
	
	createjs.Tween.get(gameSprite).to({x:x, y:y}, speed, createjs.Ease.quadInOut);
}

function showHandbook()
{
	document.getElementById('handbook').style.zIndex = 1010;
	$('#handbook').animate({opacity:'1'}, 250);
	$('#editorContainer').hide();


}

function hideHandbook()
{
	document.getElementById('handbook').style.zIndex = -1010;
	$('#handbook').animate({opacity:'0'}, 250);
	$('#editorContainer').show();
}

/*
Find the right method, call on correct element
http://stackoverflow.com/questions/4938346/canvas-width-and-height-in-html5
https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
https://hacks.mozilla.org/2012/01/using-the-fullscreen-api-in-web-browsers/
*/
function launchIntoFullscreen() {

	element = document.getElementById('gameFrame');

	if (!element.fullscreenElement &&    // alternative standard method
	  !element.mozFullScreenElement && !element.webkitFullscreenElement && !element.msFullscreenElement ) {  // current working methods
	
		if (element.requestFullscreen) {
		  	element.requestFullscreen();
		} else if (element.msRequestFullscreen) {
		  	element.msRequestFullscreen();
		} else if (element.mozRequestFullScreen) {
		  	element.mozRequestFullScreen();
		} else if (element.webkitRequestFullscreen) {
		  	element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		}

	} /*else {

		if (element.exitFullscreen) {
		  	element.exitFullscreen();
		} else if (element.msExitFullscreen) {
		  	element.msExitFullscreen();
		} else if (element.mozCancelFullScreen) {
		  	element.mozCancelFullScreen();
		} else if (element.webkitExitFullscreen) {
		  	element.webkitExitFullscreen();
		}
	}*/

}

function checkFullScreenStatus(status){
	
	var gameBackground = document.getElementById("gameBackground");
	var gameFrame = document.getElementById("gameFrame");

	if(status){
		//canvas.height = window.innerHeight;
		//canvas.style.height = '100%';	
		canvas.width = window.innerWidth;
		canvas.style.width  = '100%';
		gameFrame.style.marginTop  = '0';

		gameBackground.width =  window.innerWidth;
		gameBackground.height = window.innerHeight;
		gameBackground.style.width  = '100%';
	}else{

		canvas.width = '1024';
		canvas.style.width  = '1024px';
		gameFrame.style.marginTop  = '20px';

		gameBackground.width = '1024px';
		gameBackground.height = '768px';
		gameBackground.style.width  = '1024px';
	}
}


//Full screen events, it is necessary to add all browser options
document.addEventListener("fullscreenchange", function () {
    checkFullScreenStatus(document.fullscreen);
}, false);
 
document.addEventListener("mozfullscreenchange", function () {
	checkFullScreenStatus(document.mozFullScreen);
}, false);

document.addEventListener("webkitfullscreenchange", function () {
    checkFullScreenStatus(document.webkitIsFullScreen);
}, false);

document.addEventListener("msfullscreenchange", function () {
	checkFullScreenStatus(document.msFullscreenElement);
}, false);