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
	$('#editor').stop(true);
	if($('#editor').height() != 40)
	{
		$('#editor').animate({height:'40px'});
	}

}

//shows the code panel
function showCodePanel()
{
	//$('#editor').clearQueue();
	if($('#editor').height() <= 50)
	{
		$('#editor').delay(700).animate({height:'620'});
	}

}

function fadeCodePanelOut()
{
	$('#codeControls').stop();
	$('#editor').stop();
	$('#codeControls').animate({opacity:'0'}, {duration:250, queue:false});
	$('#editor').animate({opacity:'0'}, {duration:250, queue:false});
}

function fadeCodePanelIn()
{
	$('#codeControls').stop();
	$('#editor').stop();
	$('#codeControls').animate({opacity:'1'}, {duration:250, queue:false});
	$('#editor').animate({opacity:'.85'}, {duration:250, queue:false});
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
	//alert('hola!');

	if(currentConversationAction < conversation.actions.length)
	{
		doNextConversationElement();
	} else {
		fadeCodePanelIn();
	}

}


function runConversation(convoId)
{
	currentConversationAction = 0;

	fadeCodePanelOut();

	//now start running through the convo...
	conversation = conversations[convoId];

	doNextConversationElement();

}

function doNextConversationElement()
{
	var action = conversation.actions[currentConversationAction];

	console.log(action);

	if(action.type == 'speak')
	{
		speak(action.character, action.value);
	} else if(action.type == 'js')
	{
		eval(action.value);
	}

	currentConversationAction++;

	var bubbleLength = action.value.length * 60;
	if(bubbleLength < 1250) bubbleLength = 1250;

	
	if((action.type != 'speak')&&(currentConversationAction < conversation.actions.length)){
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


function doZoom(amount, speed)
{
	speed = typeof speed !== 'undefined' ? speed : 600;
	createjs.Tween.get(window).to({zoom:amount}, speed, createjs.Ease.quadInOut);

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
	
	
}

function showHandbook()
{
	document.getElementById('handbook').style.zIndex = 1010;
	$('#handbook').animate({opacity:'1'}, 250);


}

function hideHandbook()
{
	document.getElementById('handbook').style.zIndex = -1010;
	$('#handbook').animate({opacity:'0'}, 250);
}
