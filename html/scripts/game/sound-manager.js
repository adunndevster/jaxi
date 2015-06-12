var MAX_SOUND_VOLUME = 0.3;

var SoundManager = (function (window) {

	var backgroundSoundInstance;

	function SoundManager(){
		//console.log("Sound Manager::Constructor");

		backgroundSoundInstance = "test"; 
			
	}

	SoundManager.prototype.backgroundSound = function(sounds){

		var soundPosition = getRandomInt(0, sounds.length);
		
		createjs.Sound.registerPlugins([createjs.WebAudioPlugin]);
		createjs.Sound.alternateExtensions = ["mp3"];
		createjs.Sound.on("fileload", createjs.proxy(backgroundSoundLoad, (this)));
		createjs.Sound.registerSound(sounds[soundPosition].path, sounds[soundPosition].id);	

	}

	SoundManager.prototype.test = function(){
		console.log("esto es una prueba!");
	}

	SoundManager.prototype.backgroundSoundPlay = function(){
		console.log("SoundManager::backgroundSoundPlay");
		backgroundSoundInstance.play();
		backgroundSoundInstance.volume = MAX_SOUND_VOLUME;
	}

	SoundManager.prototype.backgroundSoundPause = function(){
		//console.log("SoundManager::backgroundSoundPause");
		//backgroundSoundInstance.stop();
		backgroundSoundInstance.volume = 0;

	}	


	function backgroundSoundComplete(event) {
		console.log("sound finished");
	}

	function backgroundSoundLoad(event) {

		//console.log(event)

		// This is fired for each sound that is registered.
		// play using id.  Could also use full source path or event.src.
		backgroundSoundInstance = createjs.Sound.play(event.id, {interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});  
		backgroundSoundInstance.stop();
		//backgroundSoundInstance.on("complete", createjs.proxy(backgroundSoundComplete, this));
		//backgroundSoundInstance.volume = MAX_SOUND_VOLUME;
	}	


	// Returns a random integer between min (included) and max (excluded)
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	return SoundManager;


}(window));
