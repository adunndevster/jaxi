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
var CURRENT_LANGUAGE = "JAVASCRIPT";

var internalCodeIsRunning = false;
var parser = new Parser();

function SynchronousController(current) { //handler
    this.current = current; //current and last current function
    this.waitStack = new Array(); //functions to wait
    this.time = 500; //milliseconds to step
}

var _synch = new SynchronousController(undefined);

var jaxi = (function () {

    function test1(){ 
		console.log("jaxi::test1");
	}
	
    function test2(){ 
		console.log("jaxi::test2");		
	}	

    function jump(power){ 
		console.log("jaxi::jump");
		
		power = typeof power !== 'undefined' ? power : 400;
		var degrees = (power < 0) ? 80 : -80;
		b2jaxi.ApplyImpulse(new b2Vec2(Math.cos(degrees * (Math.PI / 180)) * power,
				Math.sin(degrees * (Math.PI / 180)) * power),
				b2jaxi.GetWorldCenter());
		gjaxi.gotoAndPlay("jump");        
		hideCodePanel();
    };

    function run(distance){
		console.log("jaxi::run");
		
		distance = typeof distance !== 'undefined' ? distance : 200;
		var degrees = 0; 
		b2jaxi.ApplyImpulse(new b2Vec2(Math.cos(degrees * (Math.PI / 180)) * distance, 0), b2jaxi.GetWorldCenter());
		gjaxi.gotoAndPlay("run");
		//bounceSound = createjs.Sound.createInstance("bounce");  // create it by id
		//s.bounceSound.setVolume(Math.random()*0.01 + 0.01);  // because there will be a lot
		var runSound = createjs.Sound.createInstance("sndRun");  // create it by id
		runSound.setVolume(.1);
		runSound.play();
		hideCodePanel();
    };
    
    function encounters(id){
		
		console.log("jaxi::encounters");
		
		var asset = getAssetById(id);
		
		internalCodeIsRunning = false;
			
		if(asset != null){

			//console.log("asset: " + asset.x);
			//console.log("gjaxi: " + gjaxi.x);
			
			var distance = asset.x - gjaxi.x;
			
			//console.log("distance: " + distance);
					
			return (distance >= 0 && distance < 180 );				
		}else{
			return false;
		}
		return false;	
		
	}    
    
    function pickUp(){
		
		console.log("jaxi::pickUp");
		
		gjaxi.gotoAndPlay("pickup");
		hideCodePanel();
    };

    function say(words){ 
		
		console.log("jaxi::say");
		
		words = properties.words;
		speak(gjaxi, words);
		//alert(words);
		hideCodePanel();
    };

    function die(){ 
		
		console.log("jaxi::die");
		
		gjaxi.gotoAndPlay("die");
		gjaxi.addEventListener("animationend", function ()
		{
			reloadPage();
		});
		hideCodePanel();
    };
   

    //this function makes jaxi follow something.
    function follow(thing) {
		
		console.log("jaxi::follow");
		
        //1. determine jaxi's distance (x, y) to the thing
        var dx = thing.x - gjaxi.x;
        var dy = thing.y - gjaxi.y;

        //now get the angle of the thing from jaxi... if it is > 20 then she needs to jump, otherwise, run
        var angle = Math.ceil(Math.tan(dy / dx) * (180 / Math.PI));
        //alert(angle);


        //2. determine if she needs to run or jump to get there
        //3. Do the determined action, and then run jaxi.follow(thing) again...
        if (angle <= 0)
        {
            jaxi.jump((dx / 10) * (Math.abs(angle / 10) + .9));
        } else {
            jaxi.run(dx / 10);
        }

        isFollowing = true;
        thingToFollow = thing;

        //TODO: I may need to do cliff and edge detection
    } ;

    function addAction(action, param)
    {
        actions.push({action: action, param: param});
    } ;

    function clearActions()
    {
        actions = [];
        currentActionIndex = 0;
        isActionRunning = false;
    }
    ;

    function doActions() //also works to call the next action
    {
        var action = "jaxi." + actions[currentActionIndex].action;
        var param = actions[currentActionIndex].param;
        eval(action)(param);
        currentAction = gjaxi.currentAnimation;
        isActionRunning = true;
        currentActionIndex++;

        if (currentActionIndex >= actions.length)
        {
            clearActions();
        }
    };

    return {
        jump: jump,
        run: run,
        pickUp: pickUp,
        say: say,
        die: die,
        encounters: encounters,
        follow: follow,
        addAction: addAction,
        clearActions: clearActions,
        doActions: doActions,
        test1: test1,
        test2: test2,
    };
})();

//now setup jaxis vars
jaxi.isAlive = true;


function runCode()
{
    //var commandString = document.getElementById('txtCommand').innerHTML;
    var commandString = editor.getValue();
    //commandString = commandString.replace(/<br>/g, "");

    if(CURRENT_LANGUAGE === "JAVASCRIPT"){         
        try
        {

			var code = parser.parseFromJavascript(commandString);
							
			parser.init(code);
			//eval(commandString);

        } catch (err)
        {
            console.log(err.message);
        }    
    } else if (CURRENT_LANGUAGE === "C#"){
        //connect to own sever that we'll implement
        $.ajax({
            url: "/post/sharpkit.php",
            data: {
                code: "using SharpKit.JavaScript; using SharpKit.Html; [JsType(JsMode.Global)]    public class MyPageClient  {        public static void MyMethod()        {        "+commandString +"       }    }  public class Jaxi{         public void run(){}          public void run(int distance){}         public void jump(int power){}         public void jump(){}         public void clearActions(){}         public void doActions(){}         public void addAction(string action,string param){}         public void follow(string thing){}        public void pickUp(){}         public void say(string words){}         public void die(){}    }"
            },
            success: function (data) {
                var data = JSON.parse(data);
                
                if(data.Success){
                    cSharpProcess(data);
                }else{
                    window.alert("Error");
                }
            },
            type: "POST"
        });
    }

    editor.focus();

    hideSpeechBubble();

    if (isChopperUp)
    {
        hideChopperBot();
    }

}

function cSharpProcess(data){
    
   var code = data.JsCode;
   code = code.replace("var jaxi = new Jaxi.ctor();","");
   code += "(function(){    MyMethod(); })();";
   eval(code);
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
