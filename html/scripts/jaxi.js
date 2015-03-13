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

function SynchronousController(current) { //handler
    this.current = current; //current and last current function
    this.waitStack = new Array(); //functions to wait
    this.time = 500; //milliseconds to step
}

var _synch = new SynchronousController(undefined);

var jaxi = (function () {

    function jump(power)
    { 
        if (_synch.current !== undefined) {

            if (_synch.waitStack.indexOf('jump') == -1 || _synch.waitStack.length > 0) {
                _synch.waitStack.push('jump');
                wait();
            } 
            else
            {
                internal();
            }

            function wait() {

                if (gjaxi.currentFrame == 0) {
                    _synch.current = undefined;
                }
                if (_synch.current !== undefined) {
                    setTimeout(function () { wait(); }, _synch.time);
                }
                else
                {
                    if (_synch.waitStack[0] == 'jump') {
                        _synch.waitStack.splice(0, 1);
                        internal();
                    } 
                    else
                    {
                        setTimeout(function () { wait(); }, _synch.time);
                    }
                }
            }
        }
        else
        {
            internal();
        }

        function internal() {
            _synch.current = 'jump';
            power = typeof power !== 'undefined' ? power : 400;
            var degrees = (power < 0) ? 80 : -80;
            b2jaxi.ApplyImpulse(new b2Vec2(Math.cos(degrees * (Math.PI / 180)) * power,
                    Math.sin(degrees * (Math.PI / 180)) * power),
                    b2jaxi.GetWorldCenter());
            gjaxi.gotoAndPlay("jump");        
            hideCodePanel();
        } 
    };

    function run(distance)
    {
        if (_synch.current !== undefined) {

            if (_synch.waitStack.indexOf('run') == -1 || _synch.waitStack.length > 0) {
                _synch.waitStack.push('run');
                wait();
            } 
            else
            {
                internal();
            }

            function wait() {

                if (gjaxi.currentFrame == 0) {
                    _synch.current = undefined;
                }

                if (_synch.current !== undefined) {
                    setTimeout(function () {  wait();  }, _synch.time);
                }
                else
                {
                    if (_synch.waitStack[0] == 'run') {
                        _synch.waitStack.splice(0, 1);
                        internal();
                    } 
                    else
                    {
                        setTimeout(function () {   wait();  }, _synch.time);
                    }
                }
            }
        }
        else
        {
            internal();
        }

        function internal() {
            _synch.current = 'run';
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
        }
    };
    
    function pickUp()
    {
        
       if (_synch.current !== undefined) {

            if (_synch.waitStack.indexOf('pickUp') == -1 || _synch.waitStack.length > 0) {
                _synch.waitStack.push('pickUp');
                wait();
            } 
            else
            {
                internal();
            }

            function wait() {

                if (gjaxi.currentFrame == 0) {
                    _synch.current = undefined;
                }

                if (_synch.current !== undefined) {
                    setTimeout(function () {  wait();  }, _synch.time);
                }
                else
                {
                    if (_synch.waitStack[0] == 'pickUp') {
                        _synch.waitStack.splice(0, 1);
                        internal();
                    } 
                    else
                    {
                        setTimeout(function () {   wait();  }, _synch.time);
                    }
                }
            }
        }
        else
        {
            internal();
        }
        
        function internal() {
            _synch.current = 'pickUp';
            gjaxi.gotoAndPlay("pickup");
            hideCodePanel();
        }
    };

    function say(words)
    { 
         if (_synch.current !== undefined) {

            if (_synch.waitStack.indexOf('say') == -1 || _synch.waitStack.length > 0) {
                _synch.waitStack.push('say');
                wait();
            } 
            else
            {
                internal();
            }

            function wait() {

                if (gjaxi.currentFrame == 0) {
                    _synch.current = undefined;
                }

                if (_synch.current !== undefined) {
                    setTimeout(function () {  wait();  }, _synch.time);
                }
                else
                {
                    if (_synch.waitStack[0] == 'say') {
                        _synch.waitStack.splice(0, 1);
                        internal();
                    } 
                    else
                    {
                        setTimeout(function () {   wait();  }, _synch.time);
                    }
                }
            }
        }
        else
        {
            internal();
        }
        
        function internal() {
            _synch.current = 'say';
            speak(gjaxi, words);
            //alert(words);
            hideCodePanel();
        } 
    };

    function die()
    { 
         if (_synch.current !== undefined) {

            if (_synch.waitStack.indexOf('die') == -1 || _synch.waitStack.length > 0) {
                _synch.waitStack.push('die');
                wait();
            } 
            else
            {
                internal();
            }

            function wait() {

                if (gjaxi.currentFrame == 0) {
                    _synch.current = undefined;
                }

                if (_synch.current !== undefined) {
                    setTimeout(function () {  wait();  }, _synch.time);
                }
                else
                {
                    if (_synch.waitStack[0] == 'die') {
                        _synch.waitStack.splice(0, 1);
                        internal();
                    } 
                    else
                    {
                        setTimeout(function () {   wait();  }, _synch.time);
                    }
                }
            }
        }
        else
        {
            internal();
        }
        
        function internal() {
            _synch.current = 'die';
            gjaxi.gotoAndPlay("die");
            gjaxi.addEventListener("animationend", function ()
            {
                reloadPage();
            });
            hideCodePanel();
        }  
    };

    //this function makes jaxi follow something.
    function follow(thing)
    {
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
    }
    ;

    function addAction(action, param)
    {
        actions.push({action: action, param: param});
    }
    ;

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
        follow: follow,
        addAction: addAction,
        clearActions: clearActions,
        doActions: doActions
    };
})();

//now setup jaxis vars
jaxi.isAlive = true;

 
 
//non jaxi functions...

function runCode()
{
    //var commandString = document.getElementById('txtCommand').innerHTML;
    var commandString = editor.getValue();
    //commandString = commandString.replace(/<br>/g, "");

    if(CURRENT_LANGUAGE === "JAVASCRIPT"){         
        try
        {
            eval(commandString);
        } catch (err)
        {
            alert(err.message);
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