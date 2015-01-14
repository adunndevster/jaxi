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
	{src: "assets/images/PinkSprites.png", id: "gjaxi"}
];

var songSet = 'pink-think';
var deathZone = 4000;
var nextLevelUrl = "level4.html";
var level = {"elements":[{"height":326,"x":0,"width":2048,"type":"ParallaxBG","y":586.05},{"height":176.75,"y":469,"x":3061,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":183,"y":472,"x":3902,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":462,"x":4411,"width":515,"type":"TileMidDip","rotation":0},{"height":176.75,"y":474,"x":4759,"width":192.8,"type":"TileEndRight","rotation":0},{"height":183,"y":472,"x":3402,"width":516.55,"type":"TileMidBump","rotation":0},{"height":183,"y":577,"x":753,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":567,"x":1262,"width":515,"type":"TileMidDip","rotation":0},{"height":163,"y":602,"x":1763,"width":515,"type":"TileMidDip","rotation":7.7980194091796875},{"height":176.75,"y":644,"x":3096,"width":192.8,"type":"TileEndRight","rotation":0},{"height":183,"y":647,"x":2748,"width":516.55,"type":"TileMidBump","rotation":0},{"height":183,"y":646,"x":2257,"width":516.55,"type":"TileMidBump","rotation":0},{"height":47.3,"x":869,"js":"runConversation(0);","width":801.5,"type":"Trigger","y":486},{"height":176.75,"y":674,"x":4840,"width":192.75,"type":"TileEndLeft","rotation":29.998565673828125},{"height":183,"y":852,"x":5143,"width":516.55,"type":"TileMidBump","rotation":29.998565673828125},{"height":163,"y":1098,"x":5588,"width":515,"type":"TileMidDip","rotation":29.998565673828125},{"height":176.75,"y":1280,"x":5887,"width":192.8,"type":"TileEndRight","rotation":29.998565673828125},{"height":176.75,"y":2140,"x":6009,"width":192.75,"type":"TileEndLeft","rotation":-45.00044250488281},{"height":183,"y":1894,"x":6259,"width":516.55,"type":"TileMidBump","rotation":-45.00044250488281},{"height":163,"y":1527,"x":6612,"width":515,"type":"TileMidDip","rotation":-45.00044250488281},{"height":176.75,"y":361,"x":7113,"width":192.8,"type":"TileEndRight","rotation":-75.4498291015625},{"height":176.75,"y":2589,"x":3006,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":183,"y":2591,"x":5345,"width":516.55,"type":"TileMidBump","rotation":0},{"height":151.3,"x":5375,"width":297.7,"type":"RobotJunk2","y":2478},{"height":163,"y":2581,"x":5854,"width":515,"type":"TileMidDip","rotation":0},{"height":184.5,"x":5936,"width":276.65,"type":"RobotJunk1","y":2505},{"height":513.8,"x":6460,"width":718.7,"type":"TileBlockRight","y":2428},{"height":183,"y":2591,"x":4349,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":2581,"x":4858,"width":515,"type":"TileMidDip","rotation":0},{"height":176.75,"y":2487,"x":4784,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":2486,"x":4968,"width":192.8,"type":"TileEndRight","rotation":0},{"height":183,"y":2590,"x":3343,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":2581,"x":3852,"width":515,"type":"TileMidDip","rotation":0},{"height":176.75,"y":2356,"x":3398,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":2355,"x":3582,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":2762,"x":1528,"width":192.75,"type":"TileEndLeft","rotation":18.705718994140625},{"height":183,"y":2878,"x":1859,"width":516.55,"type":"TileMidBump","rotation":18.705718994140625},{"height":163,"y":3031,"x":2344,"width":515,"type":"TileMidDip","rotation":18.705718994140625},{"height":183,"y":3136,"x":2814,"width":516.55,"type":"TileMidBump","rotation":3.706939697265625},{"height":163,"y":3159,"x":3322,"width":515,"type":"TileMidDip","rotation":3.706939697265625},{"height":183,"y":3188,"x":4320,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":3176,"x":3824,"width":515,"type":"TileMidDip","rotation":0},{"height":183,"y":3192,"x":5321,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":3179,"x":4825,"width":515,"type":"TileMidDip","rotation":0},{"height":163,"y":3184,"x":6821,"width":515,"type":"TileMidDip","rotation":0},{"height":183,"y":3194,"x":6316,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":3183,"x":5820,"width":515,"type":"TileMidDip","rotation":0},{"height":183,"y":2405,"x":7646,"width":516.55,"type":"TileMidBump","rotation":-88.77447509765625},{"height":163,"y":2901,"x":7627,"width":515,"type":"TileMidDip","rotation":-90},{"height":183,"y":1404,"x":7693,"width":516.55,"type":"TileMidBump","rotation":-86.82356262207031},{"height":176.75,"y":1151,"x":7723,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":163,"y":1144,"x":8063,"width":515,"type":"TileMidDip","rotation":0},{"height":322.8,"x":8121,"width":321,"type":"Teleportor","y":962},{"height":176.75,"y":1131,"x":8385,"width":192.8,"type":"TileEndRight","rotation":-14.99810791015625},{"height":163,"y":1899,"x":7654,"width":515,"type":"TileMidDip","rotation":-86.82356262207031},{"height":183,"y":3196,"x":7317,"width":516.55,"type":"TileMidBump","rotation":0},{"height":176.75,"y":3099,"x":7085,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":3098,"x":7269,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":3193,"x":7653,"width":192.8,"type":"TileEndRight","rotation":0},{"height":184.5,"x":2729,"width":276.65,"type":"RobotJunk1","y":531},{"height":174.8,"x":844,"width":177.6,"type":"BubblePop","y":419},{"y":-132,"type":"gjaxi","x":1027},{"y":333,"type":"Choco","x":1468},{"height":151.3,"x":3988,"width":297.7,"type":"RobotJunk2","y":442},{"height":184.5,"x":6059,"width":276.65,"type":"RobotJunk1","y":2479},{"height":151.3,"x":3688,"width":297.7,"type":"RobotJunk2","y":3163},{"height":521.05,"x":150,"width":718.7,"type":"TileBlockLeft2","y":407},{"height":163,"y":1146,"x":6882,"width":515,"type":"TileMidDip","rotation":-63.52384948730469},{"height":163,"y":691,"x":7035,"width":515,"type":"TileMidDip","rotation":-78.97633361816406},{"height":47.3,"x":5480,"js":"showMessage('Jaxi! Can you hear me?  Chocobot here... I really want you to try and stack your functions... you may need the skill soon.  <br><br>example:<br><span class=\"codeExample\">jaxi.addAction(jump, -300);<br>jaxi.addAction(run, -400);<br>etc...<br>jaxi.doActions();</span>', null, 'assets/images/mcChocoIcon.png');","width":801.5,"type":"Trigger","y":2490},{"height":1024,"x":0,"width":337,"type":"ParallaxFG","y":0},{"y":37,"type":"chopperBot","x":747}]}
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