/**
 * Created with IntelliJ IDEA.
 * User: adunn
 * Date: 5/30/13
 * Time: 11:36 AM
 * To change this template use File | Settings | File Templates.
 */
var manifest = [
	{src: "assets/images/mcTileMidDip.png", id: "TileMidDip"},
	{src: "assets/images/mcTileMidBump.png", id: "TileMidBump"},
	{src: "assets/images/mcTileEndLeft.png", id: "TileEndLeft"},
	{src: "assets/images/mcTileEndRight.png", id: "TileEndRight"},
	{src: "assets/images/mcTileBlockLeft.png", id: "TileBlockLeft"},
	{src: "assets/images/mcTileBlockLeft2.png", id: "TileBlockLeft2"},
	{src: "assets/images/mcTileBlockRight.png", id: "TileBlockRight"},
	{src: "assets/images/mcRobotJunk1.png", id: "RobotJunk1"},
	{src: "assets/images/mcRobotJunk2.png", id: "RobotJunk2"},
	{src: "assets/images/mcRamp.png", id: "Ramp"},
	{src: "assets/images/gSign.png", id: "Sign"},
	{src: "assets/images/Teleportor.png", id: "Teleportor"},
	{src: "assets/images/mcTileMidDip.png", id: "Trigger"},
	{src: "assets/images/BubblePop.png", id: "BubblePop"},
	{src: "assets/images/mcParalaxBG_JunkYard.png", id: "ParallaxBG"},
	{src: "assets/images/mcCables.png", id: "ParallaxFG"},
	{src: "assets/images/ChocoSprites.png", id: "Choco"},
	{src: "assets/images/ChopperBot.png", id: "chopperBot"},
	{src: "assets/images/JunkyardMonster_Sprites.png", id: "JunkYardMonster"},
	{src: "assets/images/PinkSprites.png", id: "gjaxi"}
];

var songSet = 'Boss1';
var deathZone = 4000;
var nextLevelUrl = "level4.html";
//var level = {"elements":[{"type":"ParallaxBG","height":326,"x":0,"width":2048,"y":586},{"type":"TileMidBump","rotation":0,"width":516.55,"y":576,"height":183,"x":753},{"type":"Sign","x":956,"width":201.7,"scaleX":1,"height":278.6,"signText":"Hello bot.  Don't worry, you are just here because you have been rejected <b>&#9786;</b>. To help you make your way in this lonely world, we have provided some instructions. You can do things by accessing your code panel. Type this into the code panel on the right then click the \"Run Code\" button:<br><br> <span class=\"codeExample\">jaxi.run();</span>","scaleY":1,"y":394},{"type":"RobotJunk1","height":184.5,"x":640,"width":276.65,"y":325},{"type":"TileBlockLeft","height":436.15,"x":146,"width":712.35,"y":450},{"type":"RobotJunk1","height":184.5,"x":420,"width":276.65,"y":405},{"type":"RobotJunk2","height":151.3,"x":675,"width":297.7,"y":417},{"type":"RobotJunk1","height":184.5,"x":540,"width":276.65,"y":405},{"type":"RobotJunk1","height":184.5,"x":640,"width":276.65,"y":445},{"type":"RobotJunk2","height":151.3,"x":725,"width":297.7,"y":487},{"type":"RobotJunk2","height":151.3,"x":425,"width":297.7,"y":327},{"type":"TileMidDip","rotation":0,"width":514.8,"y":1786,"height":163,"x":2650},{"type":"TileEndRight","rotation":0,"width":192.85,"y":1793,"height":176.55,"x":3504},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":2009,"height":176.55,"x":3671},{"type":"TileEndRight","rotation":0,"width":192.85,"y":2009,"height":176.55,"x":3860},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":2225,"height":176.55,"x":3995},{"type":"TileEndRight","rotation":0,"width":192.85,"y":2225,"height":176.55,"x":4184},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":2404,"height":176.55,"x":4338},{"type":"TileMidBump","rotation":0,"width":516.55,"y":2408,"height":183,"x":4689},{"type":"RobotJunk1","height":184.5,"x":5322,"width":276.65,"y":2309},{"type":"TileMidDip","rotation":0,"width":514.8,"y":2398,"height":163,"x":5199},{"type":"TileEndRight","rotation":0,"width":192.85,"y":2406,"height":176.55,"x":5551},{"type":"Ramp","x":5155,"width":944.9,"scaleX":1,"height":207.5,"scaleY":1,"y":2309},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":2420,"height":176.55,"x":6891},{"type":"TileMidBump","rotation":0,"width":516.55,"y":2423,"height":183,"x":7239},{"type":"TileMidDip","rotation":0,"width":514.8,"y":2413,"height":163,"x":7749},{"type":"TileEndRight","rotation":0,"width":192.85,"y":2421,"height":176.55,"x":8098},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":2296,"height":176.55,"x":8261},{"type":"TileMidDip","rotation":0,"width":514.8,"y":2288,"height":163,"x":8612},{"type":"Teleportor","height":322.8,"x":8686,"width":321,"y":2126},{"type":"TileBlockRight","height":513.7,"x":9219,"width":718.7,"y":2133},{"type":"TileMidBump","rotation":0,"width":516.55,"y":1796,"height":183,"x":3161},{"type":"TileMidBump","rotation":0,"width":516.55,"y":1796,"height":183,"x":2140},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":1657,"height":176.55,"x":2416},{"type":"TileEndRight","rotation":0,"width":192.85,"y":1657,"height":176.55,"x":2605},{"type":"Sign","x":2551,"width":201.7,"scaleX":1,"height":278.6,"signText":"Looks like you know how to get around! See if you can get to that tele-porter ahead.","scaleY":1,"y":1458},{"type":"RobotJunk1","height":184.5,"x":2522,"width":276.65,"y":1526},{"type":"Sign","x":2159,"width":201.7,"scaleX":1,"height":278.6,"signText":"Whew close!  Who designed this junkyard?  Try jumping!  Change your code to:<br><br> <span class=\"codeExample\">jaxi.jump();</span> <br><br><b>Remember to take the number out of the function&#9786;</b>","scaleY":1,"y":1616},{"type":"TileBlockLeft2","height":520.05,"x":1536,"width":718.7,"y":1627},{"type":"TileMidDip","rotation":0,"width":514.8,"y":567,"height":163,"x":1264},{"type":"TileMidDip","rotation":0,"width":514.8,"y":567,"height":163,"x":1774},{"type":"Sign","x":1482,"width":201.7,"scaleX":1,"height":278.6,"signText":"Good. Now you can tell your bot to run faster by putting a bigger number in the <b>function</b>.<br><br>Change it to: <br><br><span class=\"codeExample\">jaxi.run(300);</span>","scaleY":1,"y":394},{"type":"TileMidBump","rotation":0,"width":516.55,"y":577,"height":183,"x":2275},{"type":"TileMidDip","rotation":0,"width":514.8,"y":568,"height":163,"x":2786},{"type":"Sign","x":2922,"width":201.7,"scaleX":1,"height":278.6,"signText":"Hmmm... a ramp.  Let's fly off this thing and make over the little canyon coming up.  What speed do you think you need?  Maybe 800?","scaleY":1,"y":394},{"type":"TileMidBump","rotation":0,"width":516.55,"y":577,"height":183,"x":3280},{"type":"TileEndRight","rotation":0,"width":192.85,"y":574,"height":176.55,"x":3630},{"type":"TileBlockRight","height":513.7,"x":6130,"width":718.7,"y":671},{"type":"TileMidDip","rotation":0,"width":514.8,"y":826,"height":163,"x":5524},{"type":"Sign","x":5564,"width":201.7,"scaleX":1,"height":278.6,"signText":"Made it!  Okay, okay... breath.  Did you know you can run the other direction?  Just put in a negative number. Like this:<br><br> <span class=\"codeExample\">jaxi.run(-800);</span>","scaleY":1,"y":645},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":834,"height":176.55,"x":5174},{"type":"Ramp","x":3181,"width":944.9,"scaleX":1,"height":207.5,"scaleY":1,"y":497},{"type":"RobotJunk2","height":151.3,"x":3506,"width":297.7,"y":541},{"type":"gjaxi","x":908,"y":-362},{"type":"RobotJunk1","height":184.5,"x":2426,"width":276.65,"y":515},{"type":"RobotJunk2","height":151.3,"x":5617,"width":297.7,"y":767},{"type":"ParallaxFG","height":1024,"x":0,"width":337,"y":0}]}

var level = {"elements":[{"type":"ParallaxBG","width":2048,"x":0,"height":326,"y":586},{"type":"TileMidBump","x":753,"height":183,"y":576,"width":516.55,"rotation":0},{"type":"Sign","x":956,"height":278.6,"y":394,"width":201.7,"scaleX":1,"signText":"Hello bot.  Don't worry, you are just here because you have been rejected <b>&#9786;</b>. To help you make your way in this lonely world, we have provided some instructions. You can do things by accessing your code panel. Type this into the code panel on the right then click the \"Run Code\" button:<br><br> <span class=\"codeExample\">pink.run();</span>","scaleY":1},{"type":"RobotJunk1","width":276.65,"x":640,"height":184.5,"y":325},{"type":"TileBlockLeft","width":712.35,"x":146,"height":436.15,"y":450},{"type":"RobotJunk1","width":276.65,"x":420,"height":184.5,"y":405},{"type":"RobotJunk2","width":297.7,"x":675,"height":151.3,"y":417},{"type":"RobotJunk1","width":276.65,"x":540,"height":184.5,"y":405},{"type":"RobotJunk1","width":276.65,"x":640,"height":184.5,"y":445},{"type":"RobotJunk2","width":297.7,"x":725,"height":151.3,"y":487},{"type":"RobotJunk2","width":297.7,"x":425,"height":151.3,"y":327},{"type":"TileMidDip","x":2650,"height":163,"y":1786,"width":514.8,"rotation":0},{"type":"TileEndRight","x":3504,"height":176.55,"y":1793,"width":192.85,"rotation":0},{"type":"TileEndLeft","x":3671,"height":176.55,"y":2009,"width":192.75,"rotation":0},{"type":"TileEndRight","x":3860,"height":176.55,"y":2009,"width":192.85,"rotation":0},{"type":"TileEndLeft","x":3995,"height":176.55,"y":2225,"width":192.75,"rotation":0},{"type":"TileEndRight","x":4184,"height":176.55,"y":2225,"width":192.85,"rotation":0},{"type":"TileEndLeft","x":4338,"height":176.55,"y":2404,"width":192.75,"rotation":0},{"type":"TileMidBump","x":4689,"height":183,"y":2408,"width":516.55,"rotation":0},{"type":"RobotJunk1","width":276.65,"x":5322,"height":184.5,"y":2309},{"type":"TileMidDip","x":5199,"height":163,"y":2398,"width":514.8,"rotation":0},{"type":"TileEndRight","x":5551,"height":176.55,"y":2406,"width":192.85,"rotation":0},{"type":"Ramp","x":5155,"height":207.5,"y":2309,"width":944.9,"scaleX":1,"scaleY":1},{"type":"TileEndLeft","x":6891,"height":176.55,"y":2420,"width":192.75,"rotation":0},{"type":"TileMidBump","x":7239,"height":183,"y":2423,"width":516.55,"rotation":0},{"type":"TileMidDip","x":7749,"height":163,"y":2413,"width":514.8,"rotation":0},{"type":"TileEndRight","x":8098,"height":176.55,"y":2421,"width":192.85,"rotation":0},{"type":"TileEndLeft","x":8261,"height":176.55,"y":2296,"width":192.75,"rotation":0},{"type":"TileMidDip","x":8612,"height":163,"y":2288,"width":514.8,"rotation":0},{"type":"Teleportor","width":321,"x":8686,"height":322.8,"y":2126},{"type":"TileBlockRight","width":718.7,"x":9219,"height":513.7,"y":2133},{"type":"TileMidBump","x":3161,"height":183,"y":1796,"width":516.55,"rotation":0},{"type":"TileMidBump","x":2140,"height":183,"y":1796,"width":516.55,"rotation":0},{"type":"TileEndLeft","x":2416,"height":176.55,"y":1657,"width":192.75,"rotation":0},{"type":"TileEndRight","x":2605,"height":176.55,"y":1657,"width":192.85,"rotation":0},{"type":"Sign","x":2551,"height":278.6,"y":1458,"width":201.7,"scaleX":1,"signText":"Looks like you know how to get around! See if you can get to that tele-porter ahead.","scaleY":1},{"type":"RobotJunk1","width":276.65,"x":2522,"height":184.5,"y":1526},{"type":"Sign","x":2159,"height":278.6,"y":1616,"width":201.7,"scaleX":1,"signText":"Whew close!  Who designed this junkyard?  Try jumping!  Change your code to:<br><br> <span class=\"codeExample\">pink.jump();</span> <br><br><b>Remember to take the number out of the function&#9786;</b>","scaleY":1},{"type":"TileBlockLeft2","width":718.7,"x":1536,"height":520.05,"y":1627},{"type":"TileMidDip","x":1264,"height":163,"y":567,"width":514.8,"rotation":0},{"type":"TileMidDip","x":1774,"height":163,"y":567,"width":514.8,"rotation":0},{"type":"Sign","x":1482,"height":278.6,"y":394,"width":201.7,"scaleX":1,"signText":"Good. Now you can tell your bot to run faster by putting a bigger number in the <b>function</b>.<br><br>Change it to: <br><br><span class=\"codeExample\">pink.run(300);</span>","scaleY":1},{"type":"TileMidBump","x":2275,"height":183,"y":577,"width":516.55,"rotation":0},{"type":"TileMidDip","x":2786,"height":163,"y":568,"width":514.8,"rotation":0},{"type":"Sign","x":2922,"height":278.6,"y":394,"width":201.7,"scaleX":1,"signText":"Hmmm... a ramp.  Let's fly off this thing and make over the little canyon coming up.  What speed do you think you need?  Maybe 800?","scaleY":1},{"type":"TileMidBump","x":3280,"height":183,"y":577,"width":516.55,"rotation":0},{"type":"TileEndRight","x":3630,"height":176.55,"y":574,"width":192.85,"rotation":0},{"type":"TileBlockRight","width":718.7,"x":6130,"height":513.7,"y":671},{"type":"TileMidDip","x":5524,"height":163,"y":826,"width":514.8,"rotation":0},{"type":"Sign","x":5564,"height":278.6,"y":645,"width":201.7,"scaleX":1,"signText":"Made it!  Okay, okay... breath.  Did you know you can run the other direction?  Just put in a negative number. Like this:<br><br> <span class=\"codeExample\">pink.run(-800);</span>","scaleY":1},{"type":"TileEndLeft","x":5174,"height":176.55,"y":834,"width":192.75,"rotation":0},{"type":"Ramp","x":3181,"height":207.5,"y":497,"width":944.9,"scaleX":1,"scaleY":1},{"type":"RobotJunk2","width":297.7,"x":3506,"height":151.3,"y":541},{"type":"gjaxi","x":908,"y":-362},{"type":"RobotJunk1","width":276.65,"x":2426,"height":184.5,"y":515},{"type":"RobotJunk2","width":297.7,"x":5617,"height":151.3,"y":767},{"type":"PhysicsBorderRect","x":1806,"height":591.6,"y":804,"width":2253.1,"rotation":0},{"type":"PhysicsBorderRect","x":3308,"height":591.6,"y":741,"width":661.5,"rotation":-10.0247802734375},{"type":"ParallaxFG","width":337,"x":0,"height":1024,"y":0}]}


var conversations = [
	{actions: [
		{character: "Choco", value: "//timeout", type: "js"},
		{character: "Choco", value: "//timeout", type: "js"},
		{character: "Choco", value: "pauseSong();", type: "js"},
		{character: "Choco", value: "doZoom(.7)", type: "js"},
		{character: "Choco", value: "Jaxi, it looks like you are getting the hang of things!", type: "speak"},
		{character: "Choco", value: "Oh cruddies!  It's Vinny...", type: "speak"},
		{character: "gjaxi", value: "Vinny?", type: "speak"},
		{character: "Choco", value: "Yeah, you know... the behemoth-like, big, bad, scary, not so good junkyard monster with serrated, razor sharp teeth; come to clean up the junk yard?", type: "speak"},
		{character: "gjaxi", value: "Huh?", type: "speak"},
		{character: "Choco", value: "Don't worry you have a little bit of time... remember to stack your functions. Look around with chopper, plan your escape, and start moving!", type: "speak"},
		{character: "Choco", value: "hideSpeechBubble();", type: "js"},
		{character: "Choco", value: "doZoom(.5)", type: "js"},
		{character: "Choco", value: "chocobot.jump(3000);", type: "js"},
		{character: "Choco", value: "chocobot.run(1000);", type: "js"},
		{character: "Choco", value: "chocobot.remove();", type: "js"}

	]  }
]

//THE MONSTER!!!
var monster;
var monsterIsMoving = false;
var monsterSpeed = 3;

var levelRunner = {

	"update" : function()
	{
		if(monsterIsMoving)
		{
			monster.x += monsterSpeed;
			monsterSpeed += .02;
			if((monster.x + 1600) >= gjaxi.x)
			{
				if(jaxi.isAlive)
				{
					jaxi.die();
					jaxi.isAlive = false;
				}

			}
		}
	}

}

var startMonster = function()
{
	playSong();
	monster.alpha = 1;
	monsterIsMoving = true;
	doZoom(.3);
}

/*
"tracks"
:
[
	{"kind": "track", "id": 94167989, "created_at": "2013/05/27 19:21:02 +0000", "user_id": 7978487, "duration": 349210, "commentable": true, "state": "finished", "original_content_size": 13966139, "sharing": "public", "tag_list": "Piano Pad Drums Wave Ocean Futur", "permalink": "quiet-strength", "streamable": true, "embeddable_by": "all", "downloadable": false, "purchase_url": null, "label_id": null, "purchase_title": null, "genre": "Piano", "title": "Quiet Strength", "description": "https://www.facebook.com/cbmnofficial", "label_name": "", "release": "", "track_type": "original", "key_signature": "", "isrc": "", "video_url": null, "bpm": null, "release_year": null, "release_month": null, "release_day": null, "original_format": "mp3", "license": "all-rights-reserved", "uri": "http://api.soundcloud.com/tracks/94167989", "user": {"id": 7978487, "kind": "user", "permalink": "cbmn", "username": "CBMN", "uri": "http://api.soundcloud.com/users/7978487", "permalink_url": "http://soundcloud.com/cbmn", "avatar_url": "http://i1.sndcdn.com/avatars-000031523556-apl4l9-large.jpg?a5f823a"}, "permalink_url": "http://soundcloud.com/cbmn/quiet-strength", "artwork_url": "http://i1.sndcdn.com/artworks-000049126341-q22b54-large.jpg?a5f823a", "waveform_url": "http://w1.sndcdn.com/ZNnXmYrgIi1d_m.png", "stream_url": "http://api.soundcloud.com/tracks/94167989/stream", "playback_count": 19681, "download_count": 0, "favoritings_count": 926, "comment_count": 73, "attachments_uri": "http://api.soundcloud.com/tracks/94167989/attachments"},
	{"kind": "track", "id": 94798861, "created_at": "2013/05/31 13:04:11 +0000", "user_id": 6906784, "duration": 298868, "commentable": true, "state": "finished", "original_content_size": 8171427, "sharing": "public", "tag_list": "Resotone When I'm Gone feat Aneym Chillout Insight Music Promotions", "permalink": "resotone-when-im-gone-feat", "streamable": true, "embeddable_by": "all", "downloadable": false, "purchase_url": null, "label_id": null, "purchase_title": null, "genre": "Chillout", "title": "Resotone - When I'm Gone feat. Aneym", "description": "Insight Music Promotions \u203a\u203a Helping to move music forward! \u266b\r\n\r\nFacebook: https://www.facebook.com/insightmusicpromotions\r\nSoundcloud: https://www.soundcloud.com/insight-music-promotions\r\nBandcamp: https://insightrecords.bandcamp.com/\r\nTwitter: @InsightMusicUK\r\n______________________________\r\n\r\nSupport 'Resotone' on..\r\n\r\nhttps://soundcloud.com/resotone\r\nhttps://www.facebook.com/Resotone\r\n\r\nSupport 'Aneym' on..\r\n\r\nhttps://soundcloud.com/aneym\r\nhttps://www.facebook.com/aneymusic\r\n\r\nDownload Here: http://resotone.bandcamp.com/track/resotone-feat-aneym-when-im-gone\r\n______________________________\r\n\r\nNeed help with promotion or interested in releasing an EP through Insight Records? Get in touch via e-mail.\r\n\r\nInsightmusicpromotions@gmail.com\r\n\r\nWe do not hold any copyrights to this track. All copyrights belong to the original artists. Our goal is to promote great music that we believe in. If you feel we violate your rights, please contact us at Insightmusicpromotions@gmail.com", "label_name": "", "release": "", "track_type": "recording", "key_signature": "", "isrc": "", "video_url": null, "bpm": null, "release_year": null, "release_month": null, "release_day": null, "original_format": "mp3", "license": "all-rights-reserved", "uri": "http://api.soundcloud.com/tracks/94798861", "user": {"id": 6906784, "kind": "user", "permalink": "insight-music-promotions", "username": "Insight Music Promotions", "uri": "http://api.soundcloud.com/users/6906784", "permalink_url": "http://soundcloud.com/insight-music-promotions", "avatar_url": "http://i1.sndcdn.com/avatars-000042533292-jgriqh-large.jpg?a5f823a"}, "permalink_url": "http://soundcloud.com/insight-music-promotions/resotone-when-im-gone-feat", "artwork_url": "http://i1.sndcdn.com/artworks-000049427584-mzbm0z-large.jpg?a5f823a", "waveform_url": "http://w1.sndcdn.com/3EJYojiFLopM_m.png", "stream_url": "http://api.soundcloud.com/tracks/94798861/stream", "playback_count": 8251, "download_count": 0, "favoritings_count": 169, "comment_count": 12, "attachments_uri": "http://api.soundcloud.com/tracks/94798861/attachments"}
], "created_with"
:
{
	"id"
:
	46941, "kind"
:
	"app", "name"
:
	"The Next SoundCloud", "uri"
:
	"http://api.soundcloud.com/apps/46941", "permalink_url"
:
	"http://soundcloud.com/apps/v2-on-https-soundcloud-com", "external_url"
:
	"", "creator"
:
	"spadgos"
	*/
