﻿package  {	import flash.display.MovieClip;	import flash.utils.*;	import flash.events.Event;	import flash.geom.Point;	import flash.geom.Rectangle;		public class LevelBuilder extends MovieClip{						public function LevelBuilder() {			// constructor code						this.addEventListener(Event.ENTER_FRAME, this_Render);		}				private function this_Render(event:Event):void		{			this.removeEventListener(Event.ENTER_FRAME, this_Render);						this.buildJSON();		}				function getTrueSize( m:MovieClip):Rectangle {		 var rot:Number = m.rotation;		 m.rotation = 0;		 var w:Number = m.width;		 var h:Number = m.height;		 m.rotation = rot;		 		 var rect:Rectangle = new Rectangle(0,0,w,h);		 return rect;		}				private function buildJSON():void		{			var level:Object = new Object();			level.elements = [];						for(var i:uint = 0; i<this.numChildren; i++)			{				var child:MovieClip = MovieClip(this.getChildAt(i));				var className:String = getQualifiedClassName(child);								//trace(className);								//now plug in the JSON...				var element:Object = new Object();								switch(className)				{					case "Pink":					element.type = "gjaxi";					element.x = int(child.x);;					element.y = int(child.y);					level.elements.push(element);					break;					case "ChocoBot":					element.type = "Choco";					element.x = int(child.x);					element.y = int(child.y);					level.elements.push(element);					break;					case "ChopperBot":					element.type = "chopperBot";					element.x = int(child.x);					element.y = int(child.y);					level.elements.push(element);					break;					case "JunkYardMonster":					element.type = "JunkYardMonster";					element.x = int(child.x);					element.y = int(child.y);					element.width = int(child.width);					element.height = int(child.height);					level.elements.push(element);					break;					case "Ramp":					element.type = "Ramp";					element.width = child.width;					element.height = child.height;					element.scaleX = child.scaleX;					element.scaleY = child.scaleY;					element.x = int(child.x);					element.y = int(child.y);					level.elements.push(element);					break;					case "Sign":					element.type = "Sign";					element.width = child.width;					element.height = child.height;					element.scaleX = child.scaleX;					element.scaleY = child.scaleY;					element.x = int(child.x);;					element.y = int(child.y);					element.signText = child.text;					level.elements.push(element);					break;					case "TileEndLeft":					element.type = "TileEndLeft";					element.width = this.getTrueSize(child).width;					element.height = this.getTrueSize(child).height;					element.rotation = child.rotation;					element.x = int(child.x);;					element.y = int(child.y);					level.elements.push(element);					break;					case "TileEndRight":					element.type = "TileEndRight";					element.width = this.getTrueSize(child).width;					element.height = this.getTrueSize(child).height;					element.rotation = child.rotation;					element.x = int(child.x);;					element.y = int(child.y);					level.elements.push(element);					break;					case "PhysicsBorderRect":					element.type = "PhysicsBorderRect";					element.width = this.getTrueSize(child).width;					element.height = this.getTrueSize(child).height;					element.rotation = child.rotation;					element.x = int(child.x);					element.y = int(child.y);					level.elements.push(element);					break;					case "TileMidDip":
					element.type = "TileMidDip";
					element.width = this.getTrueSize(child).width;
					element.height = this.getTrueSize(child).height;
					element.rotation = child.rotation;
					element.x = int(child.x);;
					element.y = int(child.y);
					level.elements.push(element);
					break;
					case "TileMidBump":
					element.type = "TileMidBump";
					element.width = this.getTrueSize(child).width;
					element.height = this.getTrueSize(child).height;
					element.rotation = child.rotation;
					element.x = int(child.x);;
					element.y = int(child.y);
					level.elements.push(element);
					break;					case "TileBlockLeft":					element.type = "TileBlockLeft";					element.width = child.width;					element.height = child.height;					element.x = int(child.x);					element.y = int(child.y);					level.elements.push(element);					break;					case "TileBlockLeft2":					element.type = "TileBlockLeft2";					element.width = child.width;					element.height = child.height;					element.x = int(child.x);;					element.y = int(child.y);					level.elements.push(element);					break;					case "TileBlockRight":					element.type = "TileBlockRight";					element.width = child.width;					element.height = child.height;					element.x = int(child.x);;					element.y = int(child.y);					level.elements.push(element);					break;					case "ParallaxBG":					element.type = className;					element.width = child.width;					element.height = child.height;					element.x = 0;					element.y = 586;					level.elements.push(element);					break;					case "ParallaxFG":					element.type = className;					element.width = child.width;					element.height = child.height;					element.x = 0;					element.y = 0;					level.elements.push(element);					break;					case "Teleportor":					element.type = "Teleportor";					element.width = child.width;					element.height = child.height					element.x = int(child.x);;					element.y = int(child.y);					level.elements.push(element);					break;					case "Trigger":					element.type = "Trigger";					element.width = child.width;					element.height = child.height					element.x = int(child.x);;					element.y = int(child.y);					element.js = child.js;					level.elements.push(element);					break;					default: //general game art					element.type = className;					element.width = child.width;					element.height = child.height;					element.x = int(child.x);;					element.y = int(child.y);					level.elements.push(element);									}			}						trace("var level = " + JSON.stringify(level));		}	}	}