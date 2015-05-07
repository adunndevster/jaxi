/**
 * Created with IntelliJ IDEA.
 * User: adunn
 * Date: 5/30/13
 * Time: 11:36 AM
 * To change this template use File | Settings | File Templates.
 */
var manifest = [
	{src: "assets/images/mcTileMidDip.png", id: "PhysicsBorderRect"},
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
var level = {"elements":[{"type":"ParallaxBG","x":0,"height":326,"y":586,"width":2048},{"x":4336,"rotation":0,"y":2929,"type":"TileMidDip","height":163,"width":514.8},{"type":"TileBlockRight","x":5441,"height":513.7,"y":2775,"width":718.7},{"x":4836,"rotation":0,"y":2929,"type":"TileMidDip","height":163,"width":514.8},{"type":"Teleportor","x":4704,"height":322.8,"y":2731,"width":321},{"x":2459,"rotation":0,"y":2933,"type":"TileEndLeft","height":176.55,"width":192.75},{"x":2810,"rotation":0,"y":2939,"type":"TileMidBump","height":183,"width":516.55},{"x":3319,"rotation":0,"y":2929,"type":"TileMidDip","height":163,"width":514.8},{"x":3827,"rotation":0,"y":2939,"type":"TileMidBump","height":183,"width":516.55},{"x":3350,"rotation":0,"y":2818,"type":"TileEndLeft","height":176.55,"width":192.75},{"x":3534,"rotation":0,"y":2817,"type":"TileEndRight","height":176.55,"width":192.85},{"x":1452,"rotation":0,"y":3095,"type":"TileMidBump","height":183,"width":516.55},{"x":1961,"rotation":0,"y":3086,"type":"TileMidDip","height":163,"width":514.8},{"x":2301,"rotation":0,"y":3092,"type":"TileEndRight","height":176.55,"width":192.85},{"type":"RobotJunk1","x":2900,"height":184.5,"y":2851,"width":276.65},{"x":403,"rotation":0,"y":574,"type":"TileEndLeft","height":176.55,"width":192.75},{"x":753,"rotation":0,"y":577,"type":"TileMidBump","height":183,"width":516.55},{"x":1262,"rotation":0,"y":567,"type":"TileMidDip","height":163,"width":514.8},{"signText":"Well done! Did you know you can put numbers inside the parentheses?\n<br><br>\nLike this:\n<span class=\"codeExample\">jaxi.run(<b>800</b>);</span>\n<br><br>\nThis is called a <b>parameter</b>.","x":956,"y":384,"type":"Sign","scaleX":1,"height":278.6,"scaleY":1,"width":201.7},{"x":2598,"rotation":0,"y":578,"type":"TileEndRight","height":176.55,"width":192.85},{"x":2264,"rotation":0,"y":578,"type":"TileMidBump","height":183,"width":516.55},{"x":1774,"rotation":0,"y":578,"type":"TileMidBump","height":183,"width":516.55},{"x":2181,"y":480,"type":"Ramp","scaleX":1,"height":207.5,"scaleY":1,"width":944.9},{"type":"BubblePop","x":844,"height":174.8,"y":419,"width":177.6},{"x":2613,"rotation":-31.518768310546875,"y":1678,"type":"TileEndLeft","height":176.55,"width":196.6},{"x":2914,"rotation":-31.518768310546875,"y":1497,"type":"TileMidBump","height":183,"width":520.55},{"x":3557,"rotation":-85.51199340820313,"y":302,"type":"TileMidDip","height":163,"width":518.35},{"x":3685,"rotation":-74.99945068359375,"y":-1017,"type":"TileEndRight","height":176.55,"width":192.85},{"x":3464,"rotation":-70.51361083984375,"y":749,"type":"TileMidDip","height":163,"width":518.35},{"x":3252,"rotation":-55.51463317871094,"y":1178,"type":"TileMidBump","height":183,"width":520.55},{"type":"TileBlockLeft2","x":856,"height":520.05,"y":2925,"width":718.7},{"type":"RobotJunk1","x":1568,"height":184.5,"y":2987,"width":276.65},{"type":"RobotJunk1","x":1438,"height":184.5,"y":2957,"width":276.65},{"type":"RobotJunk1","x":1348,"height":184.5,"y":2997,"width":276.65},{"type":"RobotJunk2","x":1818,"height":151.3,"y":3029,"width":297.7},{"x":1027,"y":-132,"type":"gjaxi"},{"x":2169,"y":2904,"type":"Choco"},{"type":"RobotJunk1","x":1478,"height":184.5,"y":3027,"width":276.65},{"x":1609,"js":"runConversation(0);","y":3009,"type":"Trigger","height":47.3,"width":801.5},{"type":"RobotJunk2","x":4211,"height":151.3,"y":2909,"width":297.7},{"x":3636,"rotation":-85.51199340820313,"y":-689,"type":"TileMidDip","height":163,"width":518.35},{"x":3596,"rotation":-85.51199340820313,"y":-181,"type":"TileMidDip","height":163,"width":518.35},{"x":1486,"rotation":0,"y":666,"type":"PhysicsBorderRect","height":256,"width":2332},{"x":3626,"rotation":4.9647216796875,"y":-209,"type":"PhysicsBorderRect","height":1751,"width":128.4},{"x":887,"rotation":0,"y":2937,"type":"PhysicsBorderRect","height":500,"width":643.5},{"x":1815,"rotation":0,"y":3195,"type":"PhysicsBorderRect","height":256,"width":1279},{"x":3746,"rotation":0,"y":3050,"type":"PhysicsBorderRect","height":256,"width":2681.5},{"x":5446,"rotation":0,"y":2785,"type":"PhysicsBorderRect","height":500,"width":707.8},{"x":3439,"rotation":0,"y":2867,"type":"PhysicsBorderRect","height":172.7,"width":271.1},{"x":3497,"rotation":19.96435546875,"y":809,"type":"PhysicsBorderRect","height":344.8,"width":100.9},{"x":3304,"rotation":34.963134765625,"y":1164,"type":"PhysicsBorderRect","height":481.3,"width":100.9},{"x":2888,"rotation":58.7034912109375,"y":1534,"type":"PhysicsBorderRect","height":683.5,"width":100.9},{"type":"ParallaxFG","x":0,"height":1024,"y":0,"width":337}]}

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