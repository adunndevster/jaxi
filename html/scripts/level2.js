/**
 * Created with IntelliJ IDEA.
 * User: adunn
 * Date: 5/30/13
 * Time: 11:36 AM
 * To change this template use File | Settings | File Templates.
 */
var manifest = [
	{src: "assets/images/mcTileMidDip.png", id: "PhysicsBorderRect"},
	
	{src: "assets/images/junkyard/mcTileMidDip.png", id: "TileMidDip"},
	{src: "assets/images/junkyard/mcTileMidBump.png", id: "TileMidBump"},
	{src: "assets/images/junkyard/mcTileEndLeft.png", id: "TileEndLeft"},
	{src: "assets/images/junkyard/mcTileEndRight.png", id: "TileEndRight"},
	{src: "assets/images/junkyard/mcTileBlockLeft.png", id: "TileBlockLeft"},
	{src: "assets/images/junkyard/mcTileBlockLeft2.png", id: "TileBlockLeft2"},
	{src: "assets/images/junkyard/mcTileBlockRight.png", id: "TileBlockRight"},
	{src: "assets/images/junkyard/mcRamp.png", id: "Ramp"},
	
	{src: "assets/images/mcRobotJunk1.png", id: "RobotJunk1"},
	{src: "assets/images/mcRobotJunk2.png", id: "RobotJunk2"},
	{src: "assets/images/gSign.png", id: "Sign"},
	{src: "assets/images/Teleportor.png", id: "Teleportor"},
	{src: "assets/images/mcTileMidDip.png", id: "Trigger"},
	{src: "assets/images/BubblePop.png", id: "BubblePop"},
	{src: "assets/images/mcParalaxBG_JunkYard.png", id: "ParallaxBG"},
	{src: "assets/images/mcCables.png", id: "ParallaxFG"},
	{src: "assets/images/ChocoSprites.png", id: "Choco"},
	{src: "assets/images/PinkSprites.png", id: "gjaxi"}
];

var songSet = 'pink-think';
var deathZone = 4000;
var nextLevelUrl = "level3.html";

//var level = {"elements":[{"type":"ParallaxBG","width":2048,"x":0,"height":326,"y":586},{"type":"TileMidBump","x":1973,"height":160.6,"y":3095,"width":548.9,"rotation":0},{"type":"TileBlockRight","width":568.3,"x":5367,"height":446.85,"y":2795},{"type":"Teleportor","width":321,"x":4704,"height":322.8,"y":2731},{"type":"TileEndLeft","x":2470,"height":160.35,"y":2939,"width":190.65,"rotation":0},{"type":"TileMidBump","x":2810,"height":160.6,"y":2939,"width":548.9,"rotation":0},{"type":"TileEndLeft","x":3350,"height":160.35,"y":2806,"width":190.65,"rotation":0},{"type":"TileEndRight","x":3534,"height":160.35,"y":2805,"width":190.65,"rotation":0},{"type":"TileBlockLeft2","width":568.3,"x":917,"height":446.85,"y":2952},{"type":"TileMidBump","x":1452,"height":160.6,"y":3095,"width":548.9,"rotation":0},{"type":"TileEndRight","x":2301,"height":160.35,"y":3093,"width":190.65,"rotation":0},{"type":"RobotJunk1","width":276.65,"x":2900,"height":184.5,"y":2851},{"type":"TileMidBump","x":753,"height":160.6,"y":577,"width":548.9,"rotation":0},{"type":"Sign","x":956,"height":285.75,"y":384,"width":287.45,"signText":"Well done! Did you know you can put numbers inside the parentheses? <br><br> Like this: <span class=\"codeExample\">jaxi.run(<b>800</b>);</span> <br><br> This is called a <b>parameter</b>.","scaleX":1,"scaleY":1},{"type":"TileEndRight","x":2598,"height":160.35,"y":578,"width":190.65,"rotation":0},{"type":"TileMidBump","x":2264,"height":160.6,"y":578,"width":548.9,"rotation":0},{"type":"TileMidBump","x":1774,"height":160.6,"y":577,"width":548.9,"rotation":0},{"type":"Ramp","x":2180,"height":255.95,"y":456,"width":1027.85,"scaleX":1,"scaleY":1},{"type":"BubblePop","width":177.6,"x":844,"height":174.8,"y":419},{"type":"TileEndLeft","x":2613,"height":160.35,"y":1678,"width":194.15,"rotation":-31.518768310546875},{"type":"TileMidBump","x":2914,"height":160.6,"y":1497,"width":552.4,"rotation":-31.518768310546875},{"type":"TileMidDip","x":3560,"height":160.6,"y":248,"width":552.4,"rotation":-85.51199340820313},{"type":"TileMidDip","x":3464,"height":160.6,"y":723,"width":552.4,"rotation":-72.77749633789063},{"type":"TileMidBump","x":3251,"height":160.6,"y":1176,"width":552.4,"rotation":-55.51463317871094},{"type":"RobotJunk1","width":276.65,"x":1568,"height":184.5,"y":2987},{"type":"RobotJunk1","width":276.65,"x":1438,"height":184.5,"y":2957},{"type":"RobotJunk1","width":276.65,"x":1348,"height":184.5,"y":2997},{"type":"RobotJunk2","width":297.7,"x":1818,"height":151.3,"y":3029},{"type":"Choco","x":2169,"y":2904},{"type":"RobotJunk1","width":276.65,"x":1478,"height":184.5,"y":3027},{"type":"RobotJunk2","width":297.7,"x":4211,"height":151.3,"y":2909},{"type":"TileMidDip","x":3636,"height":160.6,"y":-724,"width":552.4,"rotation":-85.51199340820313},{"type":"TileMidDip","x":3596,"height":160.6,"y":-216,"width":552.4,"rotation":-85.51199340820313},{"type":"TileMidBump","x":1262,"height":160.6,"y":577,"width":548.9,"rotation":0},{"type":"TileMidBump","x":3827,"height":160.6,"y":2940,"width":548.9,"rotation":0},{"type":"TileMidBump","x":3303,"height":160.6,"y":2939,"width":548.9,"rotation":0},{"type":"TileMidBump","x":4337,"height":160.6,"y":2940,"width":548.9,"rotation":0},{"type":"TileMidBump","x":4832,"height":160.6,"y":2940,"width":548.9,"rotation":0},{"type":"Trigger","x":1607,"height":290.9,"y":2881,"width":801.5,"js":"runConversation(0);"},{"type":"gjaxi","x":1027,"y":-132},{"type":"PhysicsBorderRect","x":1586,"height":256,"y":646,"width":2213.2,"rotation":0},{"type":"PhysicsBorderRect","x":3604,"height":1474.9,"y":-260,"width":128.4,"rotation":4.57489013671875},{"type":"PhysicsBorderRect","x":918,"height":449.4,"y":2961,"width":568.1,"rotation":0},{"type":"PhysicsBorderRect","x":1817,"height":256,"y":3170,"width":1279,"rotation":0},{"type":"PhysicsBorderRect","x":3730,"height":256,"y":3016,"width":2712.4,"rotation":0},{"type":"PhysicsBorderRect","x":5441,"height":500,"y":2793,"width":707.8,"rotation":0},{"type":"PhysicsBorderRect","x":3442,"height":172.7,"y":2840,"width":370.6,"rotation":0},{"type":"PhysicsBorderRect","x":3458,"height":529.3,"y":714,"width":100.9,"rotation":16.993316650390625},{"type":"PhysicsBorderRect","x":3251,"height":481.3,"y":1158,"width":100.9,"rotation":34.96430969238281},{"type":"PhysicsBorderRect","x":2820,"height":683.5,"y":1543,"width":100.9,"rotation":58.7034912109375},{"type":"PhysicsBorderRect","x":2155,"height":1072.7,"y":482,"width":101,"rotation":80.43025207519531},{"type":"ParallaxFG","width":337,"x":0,"height":1024,"y":0}]}
var level = {"elements":[{"type":"ParallaxBG","width":2048,"x":0,"height":326,"y":586},{"type":"TileMidBump","x":1973,"height":160.6,"y":3095,"width":548.9,"rotation":0},{"type":"TileBlockRight","width":568.3,"x":5367,"height":446.85,"y":2795},{"type":"TileEndLeft","x":2470,"height":160.35,"y":2939,"width":190.65,"rotation":0},{"type":"TileMidBump","x":2810,"height":160.6,"y":2939,"width":548.9,"rotation":0},{"type":"TileEndLeft","x":3350,"height":160.35,"y":2806,"width":190.65,"rotation":0},{"type":"TileEndRight","x":3534,"height":160.35,"y":2805,"width":190.65,"rotation":0},{"type":"TileBlockLeft2","width":568.3,"x":917,"height":446.85,"y":2952},{"type":"TileMidBump","x":1452,"height":160.6,"y":3095,"width":548.9,"rotation":0},{"type":"TileEndRight","x":2301,"height":160.35,"y":3093,"width":190.65,"rotation":0},{"type":"RobotJunk1","width":276.65,"x":2900,"height":184.5,"y":2851},{"type":"TileMidBump","x":753,"height":160.6,"y":577,"width":548.9,"rotation":0},{"type":"Sign","x":956,"signText":"Well done! Did you know you can put numbers inside the parentheses? <br><br> Like this: <span class=\"codeExample\">jaxi.run(<b>800</b>);</span> <br><br> This is called a <b>parameter</b>.","height":285.75,"y":384,"width":287.45,"scaleX":1,"scaleY":1},{"type":"TileEndRight","x":2598,"height":160.35,"y":578,"width":190.65,"rotation":0},{"type":"TileMidBump","x":2264,"height":160.6,"y":578,"width":548.9,"rotation":0},{"type":"TileMidBump","x":1774,"height":160.6,"y":577,"width":548.9,"rotation":0},{"type":"Ramp","x":2180,"height":255.95,"y":456,"width":1027.85,"scaleX":1,"scaleY":1},{"type":"BubblePop","width":177.6,"x":844,"height":174.8,"y":419},{"type":"TileEndLeft","x":2613,"height":160.35,"y":1678,"width":194.15,"rotation":-31.518768310546875},{"type":"TileMidBump","x":2914,"height":160.6,"y":1497,"width":552.4,"rotation":-31.518768310546875},{"type":"TileMidDip","x":3560,"height":160.6,"y":248,"width":552.4,"rotation":-85.51199340820313},{"type":"TileMidDip","x":3464,"height":160.6,"y":723,"width":552.4,"rotation":-72.77749633789063},{"type":"TileMidBump","x":3251,"height":160.6,"y":1176,"width":552.4,"rotation":-55.51463317871094},{"type":"RobotJunk1","width":276.65,"x":1568,"height":184.5,"y":2987},{"type":"RobotJunk1","width":276.65,"x":1438,"height":184.5,"y":2957},{"type":"RobotJunk1","width":276.65,"x":1348,"height":184.5,"y":2997},{"type":"RobotJunk2","width":297.7,"x":1818,"height":151.3,"y":3029},{"type":"RobotJunk1","width":276.65,"x":1478,"height":184.5,"y":3027},{"type":"RobotJunk2","width":297.7,"x":4211,"height":151.3,"y":2909},{"type":"TileMidDip","x":3636,"height":160.6,"y":-724,"width":552.4,"rotation":-85.51199340820313},{"type":"TileMidDip","x":3596,"height":160.6,"y":-216,"width":552.4,"rotation":-85.51199340820313},{"type":"TileMidBump","x":1262,"height":160.6,"y":577,"width":548.9,"rotation":0},{"type":"TileMidBump","x":3827,"height":160.6,"y":2940,"width":548.9,"rotation":0},{"type":"TileMidBump","x":3303,"height":160.6,"y":2939,"width":548.9,"rotation":0},{"type":"TileMidBump","x":4337,"height":160.6,"y":2940,"width":548.9,"rotation":0},{"type":"TileMidBump","x":4832,"height":160.6,"y":2940,"width":548.9,"rotation":0},{"type":"Trigger","x":1607,"height":290.9,"y":2881,"width":801.5,"js":"runConversation(0);"},{"type":"Choco","x":2169,"y":2904},{"type":"Teleportor","width":321,"x":4704,"height":322.8,"y":2731},{"type":"gjaxi","x":1027,"y":-132},{"type":"PhysicsBorderRect","x":1586,"height":256,"y":646,"width":2213.2,"rotation":0},{"type":"PhysicsBorderRect","x":3604,"height":1474.9,"y":-260,"width":128.4,"rotation":4.57489013671875},{"type":"PhysicsBorderRect","x":918,"height":449.4,"y":2961,"width":568.1,"rotation":0},{"type":"PhysicsBorderRect","x":1817,"height":256,"y":3170,"width":1279,"rotation":0},{"type":"PhysicsBorderRect","x":3730,"height":256,"y":3016,"width":2712.4,"rotation":0},{"type":"PhysicsBorderRect","x":5441,"height":500,"y":2793,"width":707.8,"rotation":0},{"type":"PhysicsBorderRect","x":3442,"height":172.7,"y":2840,"width":370.6,"rotation":0},{"type":"PhysicsBorderRect","x":3458,"height":529.3,"y":714,"width":100.9,"rotation":16.993316650390625},{"type":"PhysicsBorderRect","x":3251,"height":481.3,"y":1158,"width":100.9,"rotation":34.96430969238281},{"type":"PhysicsBorderRect","x":2820,"height":683.5,"y":1543,"width":100.9,"rotation":58.7034912109375},{"type":"PhysicsBorderRect","x":2155,"height":1072.7,"y":482,"width":100.9,"rotation":80.42939758300781},{"type":"ParallaxFG","width":337,"x":0,"height":1024,"y":0}]}


var conversations = [
	{actions: [

		{character: "Choco", value: "Hey! What's that racket!?", type: "speak"},
		{character: "Choco", value: "Sorry spending eons in this junkyard alone has hurt my people skills.", type: "speak"},
		{character: "Choco", value: "So I guess you saw that BlueBot International didn't give much in the way of instructions...", type: "speak"},
		{character: "Choco", value: "My name is Chocobot.  What's yours?", type: "speak"},

		{character: "gjaxi", value: "I'm Jaxi.", type: "speak"},

		{character: "Choco", value: "Sweet name!<br><br>Roses are red,<br>violets are blue,<br>I met a cool bot,<br>and Jaxi, that's YOU!", type: "speak"},
		
		{character: "gjaxi", value: "...", type: "speak"},

		{character: "Choco", value: "Okay, okay, work with me. My circuits are still warming up.", type:"speak"},
		{character: "Choco", value: "Like you, I was kicked out of BlueBot International just for being different.", type: "speak"},
		{character: "Choco", value: "Since then, I've just been roaming this junkyard learning everything I can about myself.", type: "speak"},
		{character: "Choco", value: "Jaxi, I've seen bots come through here before, and not many of them make it.  Just take a look around.", type: "speak"},
		{character: "Choco", value: "I have a good feeling about you though. You seem smart, and I want to help you.", type: "speak"},
		{character: "Choco", value: "Jaxi, did you know we are “programmable”?", type: "speak"},
		{character: "Choco", value: "That means you can write code, and control your destiny.", type: "speak"},
		{character: "Choco", value: "Here try putting this in your code panel and click ‘Run Code'.", type: "speak"},
		{character: "Choco", value: "Here, type this into your code panel and run it:<br><br><span class='codeExample'>jaxi.run();<br>jaxi.jump();<br>jaxi.run(150);<br>jaxi.jump();<br>jaxi.run(500);</span> ", type: "speak"},
		
		{character: "Choco", value: "hideSpeechBubble();", type: "js"},
		{character: "Choco", value: "fadeCodePanelIn();", type: "js"},
		{character: "Choco", value: "chocobot.jump();", type: "js"},
		{character: "Choco", value: "chocobot.run();", type: "js"},
		{character: "Choco", value: "chocobot.jump();", type: "js"},
		{character: "Choco", value: "chocobot.run(500);", type: "js"},
		{character: "Choco", value: "chocobot.jump();", type: "js"},
		{character: "Choco", value: "doZoom(.5)", type: "js"}

	]  }
]

/*
var conversations = [
	{actions: [
		{character: "Choco", value: "isCameraOn = true;", type: "js"},
		{character: "Choco", value: "doZoom(.6)", type: "js"},
		{character: "Choco", value: "Hey! What's that racket!?", type: "speak"},
		{character: "Choco", value: "Sorry... spending eons in this junk yard alone has hurt my people skills...", type: "speak"},
		{character: "Choco", value: "So what's your name?", type: "speak"},
		{character: "gjaxi", value: "I'm Jaxi.", type: "speak"},
		{character: "Choco", value: "Sweet name!<br><br> Roses are red,<br> violets are blue,<br> I met a cool bot,<br> and Jaxi, that's YOU!", type: "speak"},
		{character: "gjaxi", value: "...", type: "speak"},
		{character: "gjaxi", value: "jaxi.run(-80);", type: "js"},
		{character: "Choco", value: "Okay, okay, WAIT! It's been a long time alone. Just bare with me...", type:"speak"},
		{character: "Choco", value: "I'm Choco the Bot.", type: "speak"},
		{character: "Choco", value: "A long time ago... a <i>very</i> long time ago... I was ejected out of Bluebot International on a quality flaw...", type: "speak"},
		{character: "Choco", value: "Since then, I have just been living in this junkyard, learning everything I can about myself.", type: "speak"},
		{character: "Choco", value: "Jaxi, did you know we are \"programmable\"?", type: "speak"},
		{character: "Choco", value: "Here, I'll show you what I mean...  I'm going to upload a \"bot handbook\" to your database.", type: "speak"},
		{character: "Choco", value: "fadeCodePanelIn();", type: "js"},
		{character: "Choco", value: "givePinkHandbook();", type: "js"},
		{character: "Choco", value: "This handbook contains a list of all of your built-in functions.  You can refer to it any time.", type: "speak"},
		{character: "Choco", value: "fadeCodePanelOut();", type: "js"},
		{character: "Choco", value: "showCodePanel();", type: "js"},
		{character: "Choco", value: "C'mon.  Lemme show you around...", type: "speak"},
		{character: "Choco", value: "fadeCodePanelIn();", type: "js"},
		{character: "Choco", value: "Here, type this into your code panel and run it:<br><br><span class='codeExample'>jaxi.run();<br>jaxi.jump();<br>jaxi.run(150);<br>jaxi.jump();<br>jaxi.run(500);</span> ", type: "speak"},
		{character: "Choco", value: "chocobot.jump();", type: "js"},
		{character: "Choco", value: "chocobot.run();", type: "js"},
		{character: "Choco", value: "chocobot.jump();", type: "js"},
		{character: "Choco", value: "chocobot.run(500);", type: "js"},
		{character: "Choco", value: "chocobot.jump();", type: "js"},
		{character: "Choco", value: "doZoom(.5)", type: "js"}

	]  }
]
*/

var levelZoom = .4;
//var levelCamera = false;

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
