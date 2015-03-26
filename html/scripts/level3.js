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
var nextLevelUrl = "level4.html";
var level = {"elements":[{"type":"ParallaxBG","x":0,"height":326,"y":586,"width":2048},{"x":1424,"rotation":0,"y":2119,"type":"TileMidDip","height":163,"width":514.8},{"x":1924,"rotation":0,"y":2119,"type":"TileMidDip","height":163,"width":514.8},{"x":57,"rotation":0,"y":2123,"type":"TileEndLeft","height":176.55,"width":192.75},{"x":408,"rotation":0,"y":2129,"type":"TileMidBump","height":183,"width":516.55},{"x":915,"rotation":0,"y":2129,"type":"TileMidBump","height":183,"width":516.55},{"type":"RobotJunk1","x":498,"height":184.5,"y":2041,"width":276.65},{"type":"BubblePop","x":1953,"height":174.8,"y":1967,"width":177.6},{"x":2450,"rotation":-85.51199340820313,"y":1688,"type":"TileMidDip","height":163,"width":518.35},{"x":2579,"rotation":-74.99945068359375,"y":368,"type":"TileEndRight","height":176.55,"width":192.85},{"type":"RobotJunk2","x":1299,"height":151.3,"y":2099,"width":297.7},{"x":2529,"rotation":-85.51199340820313,"y":697,"type":"TileMidDip","height":163,"width":518.35},{"x":2489,"rotation":-85.51199340820313,"y":1205,"type":"TileMidDip","height":163,"width":518.35},{"x":2275,"rotation":0,"y":2129,"type":"TileEndRight","height":176.55,"width":192.85},{"x":2416,"rotation":-76.51884460449219,"y":2020,"type":"TileEndLeft","height":176.55,"width":196.6},{"x":1424,"rotation":0,"y":1459,"type":"TileMidDip","height":163,"width":514.8},{"x":1924,"rotation":0,"y":1459,"type":"TileMidDip","height":163,"width":514.8},{"x":1074,"rotation":0,"y":1468,"type":"TileEndLeft","height":176.55,"width":192.75},{"x":2275,"rotation":0,"y":1469,"type":"TileEndRight","height":176.55,"width":192.85},{"x":28,"rotation":-85.51199340820313,"y":1689,"type":"TileMidDip","height":163,"width":518.35},{"x":156,"rotation":-74.99945068359375,"y":369,"type":"TileEndRight","height":176.55,"width":192.85},{"x":106,"rotation":-85.51199340820313,"y":697,"type":"TileMidDip","height":163,"width":518.35},{"x":66,"rotation":-85.51199340820313,"y":1205,"type":"TileMidDip","height":163,"width":518.35},{"x":-5,"rotation":-76.51884460449219,"y":2020,"type":"TileEndLeft","height":176.55,"width":196.6},{"x":631,"rotation":0,"y":868,"type":"TileMidDip","height":163,"width":514.8},{"x":1131,"rotation":0,"y":868,"type":"TileMidDip","height":163,"width":514.8},{"x":281,"rotation":0,"y":877,"type":"TileEndLeft","height":176.55,"width":192.75},{"x":1482,"rotation":0,"y":878,"type":"TileEndRight","height":176.55,"width":192.85},{"x":1611,"rotation":0,"y":283,"type":"TileMidDip","height":163,"width":514.8},{"x":2111,"rotation":0,"y":283,"type":"TileMidDip","height":163,"width":514.8},{"x":1261,"rotation":0,"y":292,"type":"TileEndLeft","height":176.55,"width":192.75},{"x":2462,"rotation":0,"y":293,"type":"TileEndRight","height":176.55,"width":192.85},{"type":"Teleportor","x":2330,"height":322.8,"y":105,"width":321},{"x":2097,"y":1917,"type":"Choco"},{"x":1807,"y":1737,"type":"gjaxi"},{"type":"RobotJunk1","x":2105,"height":184.5,"y":1372,"width":276.65},{"x":1218,"rotation":0,"y":2187,"type":"PhysicsBorderRect","height":166.1,"width":2332},{"x":2525,"rotation":4.9647216796875,"y":1230,"type":"PhysicsBorderRect","height":1751,"width":128.4},{"x":72,"rotation":4.9647216796875,"y":1231,"type":"PhysicsBorderRect","height":1751,"width":128.4},{"x":1668,"rotation":0,"y":1500,"type":"PhysicsBorderRect","height":114,"width":1352.3},{"x":855,"rotation":0,"y":890,"type":"PhysicsBorderRect","height":114,"width":1352.3},{"x":1866,"rotation":0,"y":309,"type":"PhysicsBorderRect","height":114,"width":1352.3},{"type":"ParallaxFG","x":0,"height":1024,"y":0,"width":337}]}
var conversations = [
	{actions: [
		{character: "Choco", value: "//timeout", type: "js"},
		{character: "Choco", value: "//timeout", type: "js"},
		{character: "Choco", value: "//timeout", type: "js"},
		{character: "Choco", value: "doZoom(.7)", type: "js"},
		{character: "Choco", value: "Jaxi?  You okay?  That teleporter does a number on the circuits.", type: "speak"},
		{character: "Choco", value: "I want to give you something else I've been working on...", type: "speak"},
		{character: "Choco", value: "fadeCodePanelIn();", type: "js"},
		{character: "Choco", value: "giveChopperBot();", type: "js"},
		{character: "Choco", value: "I call this little guy \"ChopperBot\".", type: "speak"},
		{character: "Choco", value: "Whenever you need to see what's ahead, or plan out how you will get past your obstacles, pull him out, and survey the land...", type: "speak"},
		{character: "Choco", value: "Well, I got some stuff I gotta do... Good luck!  I will use ChopperBot to stay in touch!", type: "speak"},
		{character: "Choco", value: "hideSpeechBubble();", type: "js"},
		{character: "Choco", value: "chocobot.run();", type: "js"},
		{character: "Choco", value: "chocobot.run();", type: "js"},
		{character: "Choco", value: "doZoom(.5)", type: "js"},
		{character: "Choco", value: "chocobot.jump(3000);", type: "js"},
		{character: "Choco", value: "chocobot.run(1000);", type: "js"},
		{character: "Choco", value: "chocobot.remove();", type: "js"}

	]  }
]
var levelZoom = .28;
var levelCamera = false;
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