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


var level = {"elements":[{"x":1123,"height":174.8,"y":1577,"type":"BubblePop","width":177.6},{"x":3871,"y":1625,"width":548.9,"height":160.6,"type":"TileMidDip","rotation":0},{"x":4405,"y":1625,"width":548.9,"height":160.6,"type":"TileMidDip","rotation":0},{"x":4497,"y":-2076,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":6007,"y":-2076,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":5517,"y":-2076,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":5005,"y":-2076,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":588,"y":1758,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":5423,"height":184.5,"y":-2174,"type":"RobotJunk1","width":276.65},{"x":4738,"y":1545,"width":190.65,"height":160.35,"type":"TileEndLeft","rotation":0},{"x":4890,"y":1545,"width":190.65,"height":160.35,"type":"TileEndRight","rotation":0},{"x":6193,"y":-2076,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":936,"y":1758,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":-87,"y":1644,"width":190.65,"height":160.35,"type":"TileEndLeft","rotation":0},{"x":96,"y":1643,"width":190.65,"height":160.35,"type":"TileEndRight","rotation":0},{"x":90,"y":1758,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":4711,"y":1625,"width":548.9,"height":160.6,"type":"TileMidDip","rotation":0},{"x":1690,"height":184.5,"y":1679,"type":"RobotJunk1","width":276.65},{"x":3424,"y":-3545,"width":548.9,"height":160.6,"type":"TileMidDip","rotation":0},{"x":3924,"y":-3545,"width":548.9,"height":160.6,"type":"TileMidDip","rotation":0},{"x":4268,"y":-3545,"width":548.9,"height":160.6,"type":"TileMidDip","rotation":0},{"x":3736,"signText":"Well done!","scaleX":1,"type":"Sign","y":-565,"scaleY":1,"height":285.75,"width":287.45},{"x":2232,"scaleX":1,"type":"Ramp","y":1617,"scaleY":1,"height":255.95,"width":1027.85},{"x":1461,"y":1758,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":1969,"y":1759,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":2471,"y":1759,"width":548.9,"height":160.6,"type":"TileMidBump","rotation":0},{"x":3205,"y":-367,"width":548.9,"height":160.6,"type":"TileMidDip","rotation":0},{"x":3739,"y":-367,"width":548.9,"height":160.6,"type":"TileMidDip","rotation":0},{"x":4045,"y":-367,"width":548.9,"height":160.6,"type":"TileMidDip","rotation":0},{"x":1689,"y":-3305,"width":548.9,"height":160.6,"type":"TileMidDip","rotation":0},{"x":2223,"y":-3305,"width":548.9,"height":160.6,"type":"TileMidDip","rotation":0},{"x":2556,"y":-3385,"width":190.65,"height":160.35,"type":"TileEndLeft","rotation":0},{"x":2708,"y":-3385,"width":190.65,"height":160.35,"type":"TileEndRight","rotation":0},{"x":2529,"y":-3305,"width":548.9,"height":160.6,"type":"TileMidDip","rotation":0},{"x":4497,"y":-367,"width":548.9,"height":160.6,"type":"TileMidDip","rotation":0},{"x":5031,"y":-367,"width":548.9,"height":160.6,"type":"TileMidDip","rotation":0},{"x":5338,"y":-367,"width":548.9,"height":160.6,"type":"TileMidDip","rotation":0},{"x":1035,"type":"Choco","y":1563},{"x":517,"type":"gjaxi","y":1530},{"x":2109,"y":-3295,"width":1389.8,"height":139.8,"type":"PhysicsBorderRect","rotation":0},{"x":1281,"y":1768,"width":2929.8,"height":140.9,"type":"PhysicsBorderRect","rotation":0},{"x":4293,"y":1630,"width":1386.6,"height":134.3,"type":"PhysicsBorderRect","rotation":0},{"x":5346,"y":-2069,"width":2242.7,"height":135.9,"type":"PhysicsBorderRect","rotation":0},{"x":4,"y":1671,"width":370.6,"height":172.7,"type":"PhysicsBorderRect","rotation":0},{"x":2168,"y":1667,"width":1197,"height":134.3,"type":"PhysicsBorderRect","rotation":-9.663238525390625},{"x":4815,"y":1571,"width":343.3,"height":172.7,"type":"PhysicsBorderRect","rotation":0},{"x":4273,"y":-360,"width":2679.1,"height":134.3,"type":"PhysicsBorderRect","rotation":0},{"x":2632,"y":-3360,"width":343.3,"height":172.7,"type":"PhysicsBorderRect","rotation":0},{"x":3845,"y":-3535,"width":1389.8,"height":139.8,"type":"PhysicsBorderRect","rotation":0},{"x":516,"y":1557,"width":544.6,"js":"runConversation(0);","height":300.5,"type":"Trigger"},{"x":5552,"height":446.85,"y":1247,"type":"TileBlockLeft2","width":568.3},{"x":5551,"y":1246,"width":568.1,"height":449.4,"type":"PhysicsBorderRect","rotation":0},{"x":6332,"height":446.85,"y":839,"type":"TileBlockLeft2","width":568.3},{"x":6331,"y":838,"width":568.1,"height":449.4,"type":"PhysicsBorderRect","rotation":0},{"x":4509,"height":446.85,"y":-2367,"type":"TileBlockLeft2","width":568.3},{"x":4509,"y":-2368,"width":568.1,"height":449.4,"type":"PhysicsBorderRect","rotation":0},{"x":7057,"y":10,"width":190.65,"height":160.35,"type":"TileEndLeft","rotation":0},{"x":7209,"y":10,"width":190.65,"height":160.35,"type":"TileEndRight","rotation":0},{"x":7133,"y":35,"width":343.3,"height":172.7,"type":"PhysicsBorderRect","rotation":0},{"x":201,"y":-2186,"width":190.65,"height":160.35,"type":"TileEndLeft","rotation":0},{"x":353,"y":-2187,"width":190.65,"height":160.35,"type":"TileEndRight","rotation":0},{"x":277,"y":-2161,"width":343.3,"height":172.7,"type":"PhysicsBorderRect","rotation":0},{"x":758,"y":-1728,"width":190.65,"height":160.35,"type":"TileEndLeft","rotation":0},{"x":910,"y":-1728,"width":190.65,"height":160.35,"type":"TileEndRight","rotation":0},{"x":834,"y":-1703,"width":343.3,"height":172.7,"type":"PhysicsBorderRect","rotation":0},{"x":1319,"y":-1462,"width":190.65,"height":160.35,"type":"TileEndLeft","rotation":0},{"x":1471,"y":-1462,"width":190.65,"height":160.35,"type":"TileEndRight","rotation":0},{"x":1395,"y":-1437,"width":343.3,"height":172.7,"type":"PhysicsBorderRect","rotation":0},{"x":1854,"y":-1109,"width":190.65,"height":160.35,"type":"TileEndLeft","rotation":0},{"x":2006,"y":-1109,"width":190.65,"height":160.35,"type":"TileEndRight","rotation":0},{"x":1930,"y":-1084,"width":343.3,"height":172.7,"type":"PhysicsBorderRect","rotation":0},{"x":2396,"y":-743,"width":190.65,"height":160.35,"type":"TileEndLeft","rotation":0},{"x":2548,"y":-743,"width":190.65,"height":160.35,"type":"TileEndRight","rotation":0},{"x":2472,"y":-718,"width":343.3,"height":172.7,"type":"PhysicsBorderRect","rotation":0},{"x":5135,"height":322.8,"y":-2278,"type":"Teleportor","width":321}]}


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
		{character: "Choco", value: "chocobot.run(500);", type: "js"},
		{character: "Choco", value: "chocobot.remove();", type: "js"},
		{character: "Choco", value: "givePinkHandbook();", type: "js"},

		{character: "Choco", value: "doZoom(.09)", type: "js"},
		{character: "Choco", value: "levelCamera = false;", type: "js"}

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
