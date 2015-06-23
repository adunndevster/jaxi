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
	{src: "assets/images/junkyard/mcRamp2.png", id: "Ramp2"},
	
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

var songSet = 'Boss1';
var deathZone = 4000;
var nextLevelUrl = "level5.html";
var oneShotLevel = true;


var level = {"elements":[{"type":"BubblePop","width":177.6,"x":1123,"height":174.8,"y":1577},{"type":"TileMidDip","x":3871,"height":160.6,"y":1625,"width":548.9,"rotation":0},{"type":"TileMidDip","x":4405,"height":160.6,"y":1625,"width":548.9,"rotation":0},{"type":"TileMidBump","x":4497,"height":160.6,"y":-2076,"width":548.9,"rotation":0},{"type":"TileMidBump","x":6007,"height":160.6,"y":-2076,"width":548.9,"rotation":0},{"type":"TileMidBump","x":5517,"height":160.6,"y":-2076,"width":548.9,"rotation":0},{"type":"TileMidBump","x":5005,"height":160.6,"y":-2076,"width":548.9,"rotation":0},{"type":"TileMidBump","x":588,"height":160.6,"y":1758,"width":548.9,"rotation":0},{"type":"RobotJunk1","width":276.65,"x":5423,"height":184.5,"y":-2174},{"type":"TileEndLeft","x":4738,"height":160.35,"y":1545,"width":190.65,"rotation":0},{"type":"TileEndRight","x":4890,"height":160.35,"y":1545,"width":190.65,"rotation":0},{"type":"TileMidBump","x":6193,"height":160.6,"y":-2076,"width":548.9,"rotation":0},{"type":"TileMidBump","x":936,"height":160.6,"y":1758,"width":548.9,"rotation":0},{"type":"TileEndLeft","x":-87,"height":160.35,"y":1644,"width":190.65,"rotation":0},{"type":"TileEndRight","x":96,"height":160.35,"y":1643,"width":190.65,"rotation":0},{"type":"TileMidBump","x":90,"height":160.6,"y":1758,"width":548.9,"rotation":0},{"type":"TileMidDip","x":4711,"height":160.6,"y":1625,"width":548.9,"rotation":0},{"type":"Trigger","x":2116,"height":323.9,"y":1520,"width":1242.4,"js":"doZoom(.4);"},{"type":"RobotJunk1","width":276.65,"x":1690,"height":184.5,"y":1679},{"type":"TileMidDip","x":3424,"height":160.6,"y":-3545,"width":548.9,"rotation":0},{"type":"TileMidDip","x":3924,"height":160.6,"y":-3545,"width":548.9,"rotation":0},{"type":"TileMidDip","x":4268,"height":160.6,"y":-3545,"width":548.9,"rotation":0},{"type":"Sign","x":3736,"height":285.75,"y":-565,"width":287.45,"signText":"Well done!","scaleX":1,"scaleY":1},{"type":"Ramp","x":2232,"height":255.95,"y":1617,"width":1027.85,"scaleX":1,"scaleY":1},{"type":"TileMidBump","x":1461,"height":160.6,"y":1758,"width":548.9,"rotation":0},{"type":"TileMidBump","x":1969,"height":160.6,"y":1759,"width":548.9,"rotation":0},{"type":"TileMidBump","x":2471,"height":160.6,"y":1759,"width":548.9,"rotation":0},{"type":"TileMidDip","x":3205,"height":160.6,"y":-367,"width":548.9,"rotation":0},{"type":"TileMidDip","x":3739,"height":160.6,"y":-367,"width":548.9,"rotation":0},{"type":"TileMidDip","x":4045,"height":160.6,"y":-367,"width":548.9,"rotation":0},{"type":"TileMidDip","x":1689,"height":160.6,"y":-3305,"width":548.9,"rotation":0},{"type":"TileMidDip","x":2223,"height":160.6,"y":-3305,"width":548.9,"rotation":0},{"type":"TileEndLeft","x":2556,"height":160.35,"y":-3385,"width":190.65,"rotation":0},{"type":"TileEndRight","x":2708,"height":160.35,"y":-3385,"width":190.65,"rotation":0},{"type":"TileMidDip","x":2529,"height":160.6,"y":-3305,"width":548.9,"rotation":0},{"type":"TileMidDip","x":4497,"height":160.6,"y":-367,"width":548.9,"rotation":0},{"type":"TileMidDip","x":5031,"height":160.6,"y":-367,"width":548.9,"rotation":0},{"type":"TileMidDip","x":5338,"height":160.6,"y":-367,"width":548.9,"rotation":0},{"type":"Choco","x":1035,"y":1563},{"type":"gjaxi","x":517,"y":1530},{"type":"Trigger","x":6351,"height":323.9,"y":453,"width":1242.4,"js":"doZoom(.19);"},{"type":"Trigger","x":3922,"height":323.9,"y":-608,"width":1242.4,"js":"doZoom(.3);"},{"type":"Trigger","x":416,"height":701.1,"y":-2655,"width":2029.5,"js":"doZoom(.19);"},{"type":"Trigger","x":5548,"height":905.4,"y":-2983,"width":2591.3,"js":"doZoom(.6);"},{"type":"PhysicsBorderRect","x":2109,"height":139.8,"y":-3303,"width":1389.8,"rotation":0},{"type":"PhysicsBorderRect","x":1281,"height":140.9,"y":1760,"width":2929.8,"rotation":0},{"type":"PhysicsBorderRect","x":4293,"height":134.3,"y":1622,"width":1386.6,"rotation":0},{"type":"PhysicsBorderRect","x":5346,"height":135.9,"y":-2077,"width":2242.7,"rotation":0},{"type":"PhysicsBorderRect","x":4,"height":172.7,"y":1663,"width":370.6,"rotation":0},{"type":"PhysicsBorderRect","x":2168,"height":134.3,"y":1659,"width":1197,"rotation":-9.663238525390625},{"type":"PhysicsBorderRect","x":4815,"height":172.7,"y":1563,"width":343.3,"rotation":0},{"type":"PhysicsBorderRect","x":4273,"height":134.3,"y":-368,"width":2679.1,"rotation":0},{"type":"PhysicsBorderRect","x":2632,"height":172.7,"y":-3368,"width":343.3,"rotation":0},{"type":"PhysicsBorderRect","x":3845,"height":139.8,"y":-3543,"width":1389.8,"rotation":0},{"type":"Trigger","x":516,"height":300.5,"y":1549,"width":544.6,"js":"runConversation(0);"},{"type":"TileBlockLeft2","width":568.3,"x":5552,"height":446.85,"y":1239},{"type":"PhysicsBorderRect","x":5551,"height":449.4,"y":1238,"width":568.1,"rotation":0},{"type":"TileBlockLeft2","width":568.3,"x":6332,"height":446.85,"y":831},{"type":"PhysicsBorderRect","x":6331,"height":449.4,"y":830,"width":568.1,"rotation":0},{"type":"TileBlockLeft2","width":568.3,"x":4509,"height":446.85,"y":-2375},{"type":"PhysicsBorderRect","x":4509,"height":449.4,"y":-2376,"width":568.1,"rotation":0},{"type":"TileEndLeft","x":7057,"height":160.35,"y":2,"width":190.65,"rotation":0},{"type":"TileEndRight","x":7209,"height":160.35,"y":2,"width":190.65,"rotation":0},{"type":"PhysicsBorderRect","x":7133,"height":172.7,"y":27,"width":343.3,"rotation":0},{"type":"TileEndLeft","x":61,"height":160.35,"y":-2194,"width":190.65,"rotation":0},{"type":"TileEndRight","x":213,"height":160.35,"y":-2195,"width":190.65,"rotation":0},{"type":"PhysicsBorderRect","x":137,"height":172.7,"y":-2169,"width":343.3,"rotation":0},{"type":"TileEndLeft","x":668,"height":160.35,"y":-1736,"width":190.65,"rotation":0},{"type":"TileEndRight","x":820,"height":160.35,"y":-1736,"width":190.65,"rotation":0},{"type":"PhysicsBorderRect","x":744,"height":172.7,"y":-1711,"width":343.3,"rotation":0},{"type":"TileEndLeft","x":1319,"height":160.35,"y":-1470,"width":190.65,"rotation":0},{"type":"TileEndRight","x":1471,"height":160.35,"y":-1470,"width":190.65,"rotation":0},{"type":"PhysicsBorderRect","x":1395,"height":172.7,"y":-1445,"width":343.3,"rotation":0},{"type":"TileEndLeft","x":1854,"height":160.35,"y":-1117,"width":190.65,"rotation":0},{"type":"TileEndRight","x":2006,"height":160.35,"y":-1117,"width":190.65,"rotation":0},{"type":"PhysicsBorderRect","x":1930,"height":172.7,"y":-1092,"width":343.3,"rotation":0},{"type":"TileEndLeft","x":2396,"height":160.35,"y":-751,"width":190.65,"rotation":0},{"type":"TileEndRight","x":2548,"height":160.35,"y":-751,"width":190.65,"rotation":0},{"type":"PhysicsBorderRect","x":2472,"height":172.7,"y":-726,"width":343.3,"rotation":0},{"type":"Teleportor","width":321,"x":5135,"height":322.8,"y":-2286}]}


var conversations = [
	{actions: [
		
		{character: "Choco", value: "//timeout", type: "js"},
		{character: "Choco", value: "//timeout", type: "js"},

		{character: "Choco", value: "Nice job Jaxi. Now I want you to try it on your own.", type: "speak"},
		{character: "Choco", value: "Here, I'm going to give you something that you will find useful.  It's your API handbook.", type: "speak"},
		{character: "Choco", value: "<strong>API</strong> stands for <strong>Application Programming interface.</strong>", type: "speak"},
		
		{character: "gjaxi", value: "zzzzzz...", type: "speak"},
		
		{character: "Choco", value: "Yeah, I get it. It's just a fancy way of showing you what you can do out of the box!", type: "speak"},
		{character: "Choco", value: "hideSpeechBubble();", type: "js"},

		{character: "Choco", value: "Refer to it anytime!", type: "speak"},
		{character: "Choco", value: "fadeCodePanelIn();", type: "js"},
		{character: "Choco", value: "chocobot.run(800);", type: "js"},
		{character: "Choco", value: "chocobot.jump();", type: "js"},
		{character: "Choco", value: "chocobot.remove();", type: "js"},
		{character: "Choco", value: "givePinkHandbook();", type: "js"},

		{character: "Choco", value: "doZoom(.09)", type: "js"},
		{character: "Choco", value: "", type: "js"}

	]  }
]

/*
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
*/

/*
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
*/

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
