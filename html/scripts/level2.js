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
	{src: "assets/images/PinkSprites.png", id: "gjaxi"}
];

var songSet = 'pink-think';
var deathZone = 4000;
var nextLevelUrl = "level3.html";
var level = {"elements":[{"height":326,"x":0,"width":2048,"type":"ParallaxBG","y":586.05},{"height":163,"y":2657,"x":6705.9,"width":515,"type":"TileMidDip","rotation":0},{"height":513.8,"x":7811.7,"width":718.7,"type":"TileBlockRight","y":2503},{"height":163,"y":2657,"x":7205.9,"width":515,"type":"TileMidDip","rotation":0},{"height":322.8,"x":7074.4,"width":321,"type":"Teleportor","y":2459},{"height":176.75,"y":2661,"x":4828.9,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":183,"y":2667,"x":5179.9,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":2657,"x":5688.9,"width":515,"type":"TileMidDip","rotation":0},{"height":183,"y":2667,"x":6196.9,"width":516.55,"type":"TileMidBump","rotation":0},{"height":176.75,"y":2546,"x":5720.1,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":2545,"x":5904.15,"width":192.8,"type":"TileEndRight","rotation":0},{"height":183,"y":2823,"x":3822.4,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":2814,"x":4331.4,"width":515,"type":"TileMidDip","rotation":0},{"height":176.75,"y":2820,"x":4671.55,"width":192.8,"type":"TileEndRight","rotation":0},{"height":184.5,"x":5270.55,"width":276.65,"type":"RobotJunk1","y":2579},{"height":176.75,"y":1403,"x":9221.9,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":163,"y":1396,"x":9561.9,"width":515,"type":"TileMidDip","rotation":0},{"height":176.75,"y":1383,"x":9883.1,"width":192.8,"type":"TileEndRight","rotation":-14.998931884765625},{"height":176.75,"y":574,"x":403.1,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":183,"y":577,"x":753.8,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":567,"x":1262.65,"width":515,"type":"TileMidDip","rotation":0},{"height":278.6,"x":956.1,"type":"Sign","scaleX":1,"signText":"Okay, well, Bluebot International doesn't want to spend any more funding on your training, so... you're set to go!   You should have everything you need to make it in this big, scary, imposing world.  Have a nice day!","scaleY":1,"width":201.7,"y":384},{"height":163,"y":535,"x":1746.7,"width":515,"type":"TileMidDip","rotation":-7.2007598876953125},{"height":176.75,"y":517,"x":3049,"width":192.8,"type":"TileEndRight","rotation":0},{"height":183,"y":517,"x":2714.65,"width":516.55,"type":"TileMidBump","rotation":0},{"height":183,"y":517,"x":2224.65,"width":516.55,"type":"TileMidBump","rotation":0},{"height":207.5,"x":2632,"type":"Ramp","scaleX":1,"scaleY":1,"width":944.9,"y":419},{"height":174.8,"x":844.6,"width":177.6,"type":"BubblePop","y":419},{"height":176.75,"y":2162,"x":4095.2,"width":196.65,"type":"TileEndLeft","rotation":-85.51199340820313},{"height":183,"y":1813,"x":4125.6,"width":520.55,"type":"TileMidBump","rotation":-85.51199340820313},{"height":163,"y":302,"x":4227.55,"width":518.55,"type":"TileMidDip","rotation":-85.51199340820313},{"height":176.75,"y":-1017,"x":4355.9,"width":192.8,"type":"TileEndRight","rotation":-74.99945068359375},{"height":163,"y":811,"x":4187.6,"width":518.55,"type":"TileMidDip","rotation":-85.51199340820313},{"height":183,"y":1315,"x":4162.5,"width":520.55,"type":"TileMidBump","rotation":-85.51199340820313},{"height":521.05,"x":3226.1,"width":718.7,"type":"TileBlockLeft2","y":2653},{"height":184.5,"x":3938,"width":276.65,"type":"RobotJunk1","y":2715},{"height":184.5,"x":3808,"width":276.65,"type":"RobotJunk1","y":2685},{"height":184.5,"x":3718,"width":276.65,"type":"RobotJunk1","y":2725},{"height":151.3,"x":4188,"width":297.7,"type":"RobotJunk2","y":2758},{"y":-132,"type":"gjaxi","x":1027.25},{"y":2633,"type":"Choco","x":4539.5},{"height":184.5,"x":3848,"width":276.65,"type":"RobotJunk1","y":2755},{"height":47.3,"js":"runConversation(0);","x":3979.7,"width":801.5,"type":"Trigger","y":2737},{"height":151.3,"x":6581.35,"width":297.7,"type":"RobotJunk2","y":2637},{"height":163,"y":-689,"x":4306.05,"width":518.55,"type":"TileMidDip","rotation":-85.51199340820313},{"height":163,"y":-181,"x":4266.05,"width":518.55,"type":"TileMidDip","rotation":-85.51199340820313},{"height":1024,"x":0,"width":337,"type":"ParallaxFG","y":0}]}

var conversations = [
	{actions: [
		{character: "Choco", value: "doZoom(.6)", type: "js"},
		{character: "Choco", value: "Hey! What's that racket!?", type: "speak"},
		{character: "Choco", value: "Sorry... spending eons in this junk yard alone has hurt my people skills...", type: "speak"},
		{character: "Choco", value: "So what's your name?", type: "speak"},
		{character: "gjaxi", value: "I'm Jaxi.", type: "speak"},
		{character: "Choco", value: "I can see that, but what's your name?  Ha ha ha, get it!?", type: "speak"},
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
		{character: "Choco", value: "Another tip: you can queue your actions.  Type this into your code panel and run it:<br><br><span class='codeExample'>jaxi.addAction('run');<br>jaxi.addAction('jump');<br>jaxi.addAction('run');<br>jaxi.addAction('jump');<br>jaxi.addAction('run');<br>jaxi.doActions();</span> ", type: "speak"},
		{character: "Choco", value: "chocobot.jump();", type: "js"},
		{character: "Choco", value: "chocobot.run();", type: "js"},
		{character: "Choco", value: "chocobot.jump();", type: "js"},
		{character: "Choco", value: "chocobot.run();", type: "js"},
		{character: "Choco", value: "chocobot.jump();", type: "js"},
		{character: "Choco", value: "doZoom(.5)", type: "js"}

	]  }
]

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