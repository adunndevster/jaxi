/**
 * Tooltip for obstacles in the Jaxi game. Singleton pattern
 * 
 * References
 * 	- https://carldanley.com/js-singleton-pattern/
 *  - http://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript
 */
 
var Tooltip = (function (window) {
	
	// Instance stores a reference to the Singleton
	var instance;
	
	// Singleton
	function init() {


		var tooltipContainer;
		var tooltip;

		initTooltip(0, 0, "test");

		function initTooltip(x, y, text){
			
			var width = 200, height = 70;
			
			tooltipContainer = new createjs.Container();
			tooltipContainer.x = x;
			tooltipContainer.y = y;
			//tooltipContainer.setBounds(0, 0, width, height);	
			
			var rect = new createjs.Shape();
			rect.graphics.setStrokeStyle(1,"square").beginStroke("#000000");
			rect.graphics.beginFill('#FFFFFF').drawRect(0, 0, width, height);
			
			tooltipContainer.addChild(rect);
			
			var tooltipText = new createjs.Text();
			tooltipText.set({
				text: text,
				font: "26px Arial",
				color: "#000000",
				textAlign: "center"
			});	
			
			tooltipText.name = "tooltipText";
			
			tooltipText.x = rect.x + (width / 2);
			tooltipText.y = rect.y + (height / 2) - 10;
				
			/*
			var b = tooltipText.getBounds();
			tooltipText.x = width - b.width/2; 
			tooltipText.y = height - b.height/2;	
			* */
			
			tooltipContainer.alpha = 0;
			tooltipContainer.addChild(tooltipText);
			window.gameSprite.addChild(tooltipContainer);	
			
		}

		function showTooltip(x, y, text){
			
			tooltipContainer.x = x;
			tooltipContainer.y = y;

			var tooltipText = tooltipContainer.getChildByName("tooltipText");
			tooltipText.text = text;
			
			tooltipContainer.alpha = 0;
			createjs.Tween.get(tooltipContainer, {override:true})
				 .wait(0)
				 .to({alpha:1, visible:true}, 700);	
			
		}

		function hideTooltip(){
			
			createjs.Tween.removeTweens(tooltipContainer);
			
			//tooltipContainer.visible = false;
			tooltipContainer.alpha = 0;
		}
		
		//Public methods
		return {
			showTooltip : showTooltip,
			hideTooltip : hideTooltip,
		};

	};	
	
	return {
		// Get the Singleton instance if one exists
		// or create one if it doesn't
		getInstance: function () {

			if ( !instance ) {
				instance = init();
			}
			return instance;
		}
	};	
})(window);
