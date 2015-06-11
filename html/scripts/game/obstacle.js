(function(window){
	
	function ObstacleFactory(){
		//console.log("ObstacleFactory::Constructor");
		
		//Factory function to create obstacles
		ObstacleFactory.prototype.createObstacle = function (type) {
			
			var spritesheet;
			
			switch(type){
				case "box":
					spritesheet = new ObstacleBoxSpriteSheet();
				break;
				case "tire":
					spritesheet = new ObstacleTireSpriteSheet();
				break;
				case "cone":
					spritesheet = new ObstacleConeSpriteSheet();
				break;				
			}
			
			return new Obstacle(spritesheet);
		}
	}
	
	window.ObstacleFactory = ObstacleFactory;
	
	//-------------------------------------------------------------
	
	var Obstacle = function(spritesheet){
		//console.log("Obstacle");
		this.initialize(spritesheet);
	}
	
	Obstacle.prototype = new createjs.Sprite();
	Obstacle.prototype.Sprite_initialize = Obstacle.prototype.initialize;
	Obstacle.prototype.initialize = function(spritesheet) {
				
		this.Sprite_initialize(spritesheet);
		
		this.snapToPixel = true;
		this.type = spritesheet.type;
		
		this.gotoAndPlay("idle");
		
		//this.shadow = new createjs.Shadow("#000000", 5, 5, 10);
	}
	
	
	//-------------------------------------------------------------	
	var ObstacleBoxSpriteSheet = function(){
		//console.log("ObstacleBoxSpriteSheet");
		this.type = "box";
	}
	
	ObstacleBoxSpriteSheet.prototype = new createjs.SpriteSheet({
		images: ["assets/images/obstacles.png"],
		frames: {width:80, height:60, regX: 40, regY: 30},
		animations: {
			idle:3,
		}
	});	
	//-------------------------------------------------------------	
	var ObstacleTireSpriteSheet = function(){
		//console.log("ObstacleTireSpriteSheet");
		this.type = "tire";
	}
	
	ObstacleTireSpriteSheet.prototype = new createjs.SpriteSheet({
		images: ["assets/images/obstacles.png"],
		frames: {width:80, height:60, regX: 40, regY: 30},
		animations: {
			idle:4,
		}
	});	
	//-------------------------------------------------------------	
	var ObstacleConeSpriteSheet = function(){
		//console.log("ObstacleConeSpriteSheet");
		this.type = "cone";
	}
	
	ObstacleConeSpriteSheet.prototype = new createjs.SpriteSheet({
		images: ["assets/images/obstacles.png"],
		frames: {width:80, height:60, regX: 40, regY: 30},
		animations: {
			idle:6,
		}
	});		
	
	//-------------------------------------------------------------
	/*
	var ObstacleTire = function(){
		console.log("ObstacleTire");
		this.initialize();
	}
	
	ObstacleTire.prototype = new createjs.Sprite();
	ObstacleTire.prototype.Sprite_initialize = ObstacleTire.prototype.initialize;
	ObstacleTire.prototype.initialize = function() {
		
		var data = {
			images: ["assets/images/obstacles.png"],
			frames: {width:80, height:60},
			animations: {
				idle:4,
				//animation2:[0,9, "animation2", 20],
			}
		};
		
		var spritesheet = new createjs.SpriteSheet(data);
		this.Sprite_initialize(spritesheet);
		this.gotoAndPlay("idle");
	}
	* */
	//-------------------------------------------------------------

	/*
	var ObstacleTire = function(){
		console.log("ObstacleTire");
		this.initialize();
	}
	
	ObstacleTire.prototype = new createjs.Shape();
	ObstacleTire.prototype.Shape_initialize = ObstacleTire.prototype.initialize;
	ObstacleTire.prototype.initialize = function() {
		this.Shape_initialize();
		this.graphics.beginFill("red").drawCircle(0, 0, 300);
	}*/
	
	
}(window));
