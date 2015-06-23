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

	{src: "assets/images/junkyard/mcFence.png", id: "Fence"},
	{src: "assets/images/junkyard/mcFactory.png", id: "Factory"},
	{src: "assets/images/junkyard/mcGarbageMix1.png", id: "GarbageMix1"},
	{src: "assets/images/junkyard/mcGarbageMix2.png", id: "GarbageMix2"},
	{src: "assets/images/junkyard/mcGarbageStorage.png", id: "GarbageStorage"},
	{src: "assets/images/junkyard/mcMagnetCrane.png", id: "MagnetCrane"},
	{src: "assets/images/junkyard/mcRock1.png", id: "Rock1"},
	{src: "assets/images/junkyard/mcRock2.png", id: "Rock2"},
	{src: "assets/images/junkyard/mcRock3.png", id: "Rock3"},
	{src: "assets/images/junkyard/mcScrapCrane.png", id: "ScrapCrane"},
	{src: "assets/images/junkyard/mcGarbageMountain1.png", id: "GarbageMountain1"},
	{src: "assets/images/junkyard/mcGarbageMountain2.png", id: "GarbageMountain2"},
	{src: "assets/images/junkyard/mcParallaxFactory.png", id: "ParallaxFactory"},

	
	{src: "assets/images/TeddyBot_Sitting.png", id: "TeddyBot"},
	{src: "assets/images/mcBearDoor.png", id: "BearDoor"},
	{src: "assets/images/mcRobotJunk1.png", id: "RobotJunk1"},
	{src: "assets/images/mcRobotJunk2.png", id: "RobotJunk2"},
	{src: "assets/images/gSign.png", id: "Sign"},
	{src: "assets/images/Teleportor.png", id: "Teleportor"},
	{src: "assets/images/mcTileMidDip.png", id: "Trigger"},
	{src: "assets/images/BubblePop.png", id: "BubblePop"},
	{src: "assets/images/mcCables.png", id: "ParallaxFG"},
	{src: "assets/images/ChocoSprites.png", id: "Choco"},
	{src: "assets/images/PinkSprites.png", id: "gjaxi"}
];

var songSet = 'Boss1';
var deathZone = 4000;
var nextLevelUrl = "level8.html";
var levelCamera = false;
var oneShotLevel = true;
//var level = {"elements":[{"type":"ParallaxBG","height":326,"x":0,"width":2048,"y":586},{"type":"TileMidBump","rotation":0,"width":516.55,"y":576,"height":183,"x":753},{"type":"Sign","x":956,"width":201.7,"scaleX":1,"height":278.6,"signText":"Hello bot.  Don't worry, you are just here because you have been rejected <b>&#9786;</b>. To help you make your way in this lonely world, we have provided some instructions. You can do things by accessing your code panel. Type this into the code panel on the right then click the \"Run Code\" button:<br><br> <span class=\"codeExample\">jaxi.run();</span>","scaleY":1,"y":394},{"type":"RobotJunk1","height":184.5,"x":640,"width":276.65,"y":325},{"type":"TileBlockLeft","height":436.15,"x":146,"width":712.35,"y":450},{"type":"RobotJunk1","height":184.5,"x":420,"width":276.65,"y":405},{"type":"RobotJunk2","height":151.3,"x":675,"width":297.7,"y":417},{"type":"RobotJunk1","height":184.5,"x":540,"width":276.65,"y":405},{"type":"RobotJunk1","height":184.5,"x":640,"width":276.65,"y":445},{"type":"RobotJunk2","height":151.3,"x":725,"width":297.7,"y":487},{"type":"RobotJunk2","height":151.3,"x":425,"width":297.7,"y":327},{"type":"TileMidDip","rotation":0,"width":514.8,"y":1786,"height":163,"x":2650},{"type":"TileEndRight","rotation":0,"width":192.85,"y":1793,"height":176.55,"x":3504},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":2009,"height":176.55,"x":3671},{"type":"TileEndRight","rotation":0,"width":192.85,"y":2009,"height":176.55,"x":3860},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":2225,"height":176.55,"x":3995},{"type":"TileEndRight","rotation":0,"width":192.85,"y":2225,"height":176.55,"x":4184},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":2404,"height":176.55,"x":4338},{"type":"TileMidBump","rotation":0,"width":516.55,"y":2408,"height":183,"x":4689},{"type":"RobotJunk1","height":184.5,"x":5322,"width":276.65,"y":2309},{"type":"TileMidDip","rotation":0,"width":514.8,"y":2398,"height":163,"x":5199},{"type":"TileEndRight","rotation":0,"width":192.85,"y":2406,"height":176.55,"x":5551},{"type":"Ramp","x":5155,"width":944.9,"scaleX":1,"height":207.5,"scaleY":1,"y":2309},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":2420,"height":176.55,"x":6891},{"type":"TileMidBump","rotation":0,"width":516.55,"y":2423,"height":183,"x":7239},{"type":"TileMidDip","rotation":0,"width":514.8,"y":2413,"height":163,"x":7749},{"type":"TileEndRight","rotation":0,"width":192.85,"y":2421,"height":176.55,"x":8098},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":2296,"height":176.55,"x":8261},{"type":"TileMidDip","rotation":0,"width":514.8,"y":2288,"height":163,"x":8612},{"type":"Teleportor","height":322.8,"x":8686,"width":321,"y":2126},{"type":"TileBlockRight","height":513.7,"x":9219,"width":718.7,"y":2133},{"type":"TileMidBump","rotation":0,"width":516.55,"y":1796,"height":183,"x":3161},{"type":"TileMidBump","rotation":0,"width":516.55,"y":1796,"height":183,"x":2140},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":1657,"height":176.55,"x":2416},{"type":"TileEndRight","rotation":0,"width":192.85,"y":1657,"height":176.55,"x":2605},{"type":"Sign","x":2551,"width":201.7,"scaleX":1,"height":278.6,"signText":"Looks like you know how to get around! See if you can get to that tele-porter ahead.","scaleY":1,"y":1458},{"type":"RobotJunk1","height":184.5,"x":2522,"width":276.65,"y":1526},{"type":"Sign","x":2159,"width":201.7,"scaleX":1,"height":278.6,"signText":"Whew close!  Who designed this junkyard?  Try jumping!  Change your code to:<br><br> <span class=\"codeExample\">jaxi.jump();</span> <br><br><b>Remember to take the number out of the function&#9786;</b>","scaleY":1,"y":1616},{"type":"TileBlockLeft2","height":520.05,"x":1536,"width":718.7,"y":1627},{"type":"TileMidDip","rotation":0,"width":514.8,"y":567,"height":163,"x":1264},{"type":"TileMidDip","rotation":0,"width":514.8,"y":567,"height":163,"x":1774},{"type":"Sign","x":1482,"width":201.7,"scaleX":1,"height":278.6,"signText":"Good. Now you can tell your bot to run faster by putting a bigger number in the <b>function</b>.<br><br>Change it to: <br><br><span class=\"codeExample\">jaxi.run(300);</span>","scaleY":1,"y":394},{"type":"TileMidBump","rotation":0,"width":516.55,"y":577,"height":183,"x":2275},{"type":"TileMidDip","rotation":0,"width":514.8,"y":568,"height":163,"x":2786},{"type":"Sign","x":2922,"width":201.7,"scaleX":1,"height":278.6,"signText":"Hmmm... a ramp.  Let's fly off this thing and make over the little canyon coming up.  What speed do you think you need?  Maybe 800?","scaleY":1,"y":394},{"type":"TileMidBump","rotation":0,"width":516.55,"y":577,"height":183,"x":3280},{"type":"TileEndRight","rotation":0,"width":192.85,"y":574,"height":176.55,"x":3630},{"type":"TileBlockRight","height":513.7,"x":6130,"width":718.7,"y":671},{"type":"TileMidDip","rotation":0,"width":514.8,"y":826,"height":163,"x":5524},{"type":"Sign","x":5564,"width":201.7,"scaleX":1,"height":278.6,"signText":"Made it!  Okay, okay... breath.  Did you know you can run the other direction?  Just put in a negative number. Like this:<br><br> <span class=\"codeExample\">jaxi.run(-800);</span>","scaleY":1,"y":645},{"type":"TileEndLeft","rotation":0,"width":192.75,"y":834,"height":176.55,"x":5174},{"type":"Ramp","x":3181,"width":944.9,"scaleX":1,"height":207.5,"scaleY":1,"y":497},{"type":"RobotJunk2","height":151.3,"x":3506,"width":297.7,"y":541},{"type":"gjaxi","x":908,"y":-362},{"type":"RobotJunk1","height":184.5,"x":2426,"width":276.65,"y":515},{"type":"RobotJunk2","height":151.3,"x":5617,"width":297.7,"y":767},{"type":"ParallaxFG","height":1024,"x":0,"width":337,"y":0}]}

var level = {"elements":[{"type":"GarbageMountain2","x":1193,"height":842.7,"y":3836,"width":1209.45,"scaleX":1,"scaleY":1},{"type":"TileMidBump","x":1318,"height":160.6,"y":4307,"width":548.9,"rotation":0},{"type":"RobotJunk1","width":276.65,"x":2023,"height":184.5,"y":3208},{"type":"TileMidBump","x":1666,"height":160.6,"y":4307,"width":548.9,"rotation":0},{"type":"TileMidBump","x":820,"height":160.6,"y":4307,"width":548.9,"rotation":0},{"type":"TileBlockLeft2","width":568.3,"x":2408,"height":446.85,"y":4007},{"type":"TileBlockLeft2","width":568.3,"x":2408,"height":446.85,"y":3717},{"type":"TileBlockLeft2","width":568.3,"x":2408,"height":446.85,"y":3423},{"type":"TileBlockLeft2","width":568.3,"x":2408,"height":446.85,"y":3140},{"type":"TileBlockLeft2","width":568.3,"x":2408,"height":446.85,"y":2850},{"type":"TileMidBump","x":2190,"height":160.6,"y":4307,"width":548.9,"rotation":0},{"type":"Teleportor","width":321,"x":3210,"height":322.8,"y":4074},{"type":"TeddyBot","width":1367,"x":2783,"height":1583.2,"y":2802},{"type":"RobotJunk1","width":276.65,"x":2834,"height":184.5,"y":4170},{"type":"TileMidBump","x":2699,"height":160.6,"y":4308,"width":548.9,"rotation":0},{"type":"TileMidBump","x":3200,"height":160.6,"y":4308,"width":548.9,"rotation":0},{"type":"Trigger","x":8899,"height":300.5,"y":-689,"width":544.6,"js":"runConversation(0);"},{"type":"Fence","x":3563,"height":357.45,"y":901,"width":1620.8,"scaleX":1,"scaleY":1},{"type":"MagnetCrane","x":3876,"height":585.85,"y":542,"width":1213.05,"scaleX":1,"scaleY":1},{"type":"GarbageMix1","x":3492,"height":605.8,"y":777,"width":1478.15,"scaleX":1,"scaleY":1},{"type":"TileMidBump","x":3560,"height":160.6,"y":4308,"width":548.9,"rotation":0},{"type":"TileMidBump","x":3880,"height":160.6,"y":4308,"width":548.9,"rotation":0},{"type":"TileMidBump","x":4080,"height":160.6,"y":4308,"width":548.9,"rotation":0},{"type":"TileMidBump","x":862,"height":160.6,"y":2709,"width":548.9,"rotation":0},{"type":"TileMidBump","x":1849,"height":160.6,"y":3345,"width":548.9,"rotation":0},{"type":"TileBlockLeft2","width":568.3,"x":2409,"height":446.85,"y":2566},{"type":"TileBlockLeft2","width":568.3,"x":2409,"height":446.85,"y":2276},{"type":"TileBlockLeft2","width":568.3,"x":2409,"height":446.85,"y":1982},{"type":"TileBlockLeft2","width":568.3,"x":2409,"height":446.85,"y":1699},{"type":"TileBlockLeft2","width":568.3,"x":2409,"height":446.85,"y":1409},{"type":"TileBlockLeft2","width":568.3,"x":2409,"height":446.85,"y":1119},{"type":"TileMidBump","x":1849,"height":160.6,"y":1978,"width":548.9,"rotation":0},{"type":"RobotJunk1","width":276.65,"x":874,"height":184.5,"y":1095},{"type":"TileMidBump","x":898,"height":160.6,"y":1225,"width":548.9,"rotation":0},{"type":"TileEndLeft","x":2788,"height":160.35,"y":1114,"width":190.65,"rotation":0},{"type":"TileEndRight","x":2940,"height":160.35,"y":1113,"width":190.65,"rotation":0},{"type":"TileEndLeft","x":3125,"height":160.35,"y":1114,"width":190.65,"rotation":0},{"type":"TileEndRight","x":3277,"height":160.35,"y":1114,"width":190.65,"rotation":0},{"type":"TileEndLeft","x":3381,"height":160.35,"y":1114,"width":190.65,"rotation":0},{"type":"TileEndRight","x":3533,"height":160.35,"y":1113,"width":190.65,"rotation":0},{"type":"TileEndLeft","x":3718,"height":160.35,"y":1114,"width":190.65,"rotation":0},{"type":"TileEndRight","x":3870,"height":160.35,"y":1114,"width":190.65,"rotation":0},{"type":"TileEndLeft","x":4021,"height":160.35,"y":1114,"width":190.65,"rotation":0},{"type":"TileEndRight","x":4173,"height":160.35,"y":1113,"width":190.65,"rotation":0},{"type":"TileEndLeft","x":4358,"height":160.35,"y":1114,"width":190.65,"rotation":0},{"type":"TileEndRight","x":4510,"height":160.35,"y":1114,"width":190.65,"rotation":0},{"type":"TileMidBump","x":4500,"height":160.6,"y":4308,"width":548.9,"rotation":0},{"type":"gjaxi","x":906,"y":4054},{"type":"BearDoor","width":443,"x":3061,"height":551,"y":3689},{"type":"BubblePop","width":177.6,"x":844,"height":174.8,"y":3935},{"type":"Rock1","x":3216,"height":197.2,"y":4182,"width":417.85,"scaleX":1,"scaleY":1},{"type":"Trigger","x":1068,"height":300.5,"y":4092,"width":544.6,"js":"runConversation(0);"},{"type":"PhysicsBorderRect","x":2651,"height":140.9,"y":4295,"width":4210.3,"rotation":0},{"type":"PhysicsBorderRect","x":2948,"height":601.5,"y":3931,"width":509.8,"rotation":0},{"type":"PhysicsBorderRect","x":1849,"height":140.9,"y":3355,"width":549.3,"rotation":0},{"type":"PhysicsBorderRect","x":866,"height":140.9,"y":2719,"width":549.3,"rotation":0},{"type":"PhysicsBorderRect","x":1850,"height":140.9,"y":1989,"width":549.3,"rotation":0},{"type":"PhysicsBorderRect","x":899,"height":140.9,"y":1234,"width":549.3,"rotation":0},{"type":"PhysicsBorderRect","x":3658,"height":140.9,"y":1123,"width":1924.1,"rotation":0},{"type":"PhysicsBorderRect","x":2408,"height":3306.9,"y":2572,"width":568.9,"rotation":0},{"type":"TileMidBump","x":4865,"height":160.6,"y":931,"width":548.9,"rotation":-90},{"type":"PhysicsBorderRect","x":4876,"height":140.9,"y":930,"width":549.3,"rotation":-90}]}


var conversations = [
	{actions: [
		{character: "Choco", value: "doPan(20,-40)", type: "js"},
		{character: "Choco", value: "//timeout", type: "js"},
		{character: "Choco", value: "//timeout", type: "js"},
		{character: "TeddyBot", value: "Ughghgh...", type: "speak"},
		{character: "gjaxi", value: "What's wrong?", type: "speak"},
		{character: "TeddyBot", value: "My tummy doesn't feel so good...", type: "speak"},
		{character: "TeddyBot", value: "I got a sweet tooth and decided to go on chocolate eating spree...", type: "speak"},
		{character: "TeddyBot", value: "Guuuh... Now my system is all gummed up.", type: "speak"},
		{character: "gjaxi", value: "Hmmm... anything I can do to help?", type: "speak"},
		{character: "TeddyBot", value: "Actually, yes... (grunt)... see this open hatch on my tummy?", type: "speak"},
		{character: "TeddyBot", value: "Do you think you could run inside and take a look? I have a switch you can flip that that clean my system up. (BURP)", type: "speak"},
		{character: "gjaxi", value: "Okay, as long as you promise to <br/>1) Not eat me... AND <br/>2)help me get out of this strange place.", type: "speak"},
		{character: "TeddyBot", value: "Nnnugh... You got it. (Weez)", type: "speak"},
		{character: "Choco", value: "hideSpeechBubble();", type: "js"}
	]  }
]

levelZoom = .18;

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
