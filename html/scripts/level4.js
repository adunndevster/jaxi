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
var level = {"elements":[{"height":326,"x":0,"width":2048,"type":"ParallaxBG","y":586},{"height":176.75,"y":336,"x":9432,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":337,"x":9616,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":121,"x":10033,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":122,"x":10217,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":196,"x":9432,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":197,"x":9616,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":56,"x":9432,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":57,"x":9616,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":-18,"x":10033,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":-17,"x":10217,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":-148,"x":10033,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":-147,"x":10217,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":-268,"x":10033,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":-267,"x":10217,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":-388,"x":10033,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":-387,"x":10217,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":-508,"x":10033,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":-507,"x":10217,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":-618,"x":10033,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":-617,"x":10217,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":-1768,"x":8552,"width":192.75,"type":"TileEndLeft","rotation":35.01947021484375},{"height":183,"y":-1283,"x":9238,"width":516.55,"type":"TileMidBump","rotation":35.01947021484375},{"height":163,"y":-999,"x":9661,"width":515,"type":"TileMidDip","rotation":35.01947021484375},{"height":176.75,"y":-789,"x":9940,"width":192.8,"type":"TileEndRight","rotation":35.01947021484375},{"height":183,"y":-1570,"x":8829,"width":516.55,"type":"TileMidBump","rotation":35.01947021484375},{"height":176.75,"y":468,"x":3300,"width":192.75,"type":"TileEndLeft","rotation":7.9815826416015625},{"height":183,"y":554,"x":4128,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":544,"x":4637,"width":515,"type":"TileMidDip","rotation":0},{"height":176.75,"y":556,"x":4986,"width":192.8,"type":"TileEndRight","rotation":0},{"height":183,"y":518,"x":3637,"width":516.55,"type":"TileMidBump","rotation":7.9815826416015625},{"height":183,"y":577,"x":753,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":567,"x":1262,"width":515,"type":"TileMidDip","rotation":0},{"height":163,"y":602,"x":1763,"width":515,"type":"TileMidDip","rotation":7.7980194091796875},{"height":176.75,"y":644,"x":3096,"width":192.8,"type":"TileEndRight","rotation":0},{"height":183,"y":647,"x":2748,"width":516.55,"type":"TileMidBump","rotation":0},{"height":183,"y":646,"x":2257,"width":516.55,"type":"TileMidBump","rotation":0},{"height":47.3,"x":1411,"js":"runConversation(0);","width":801.5,"type":"Trigger","y":493},{"height":176.75,"y":635,"x":38398,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":163,"y":628,"x":38738,"width":515,"type":"TileMidDip","rotation":0},{"height":322.8,"x":38796,"width":321,"type":"Teleportor","y":446},{"height":176.75,"y":615,"x":39059,"width":192.8,"type":"TileEndRight","rotation":-14.99810791015625},{"height":184.5,"x":2729,"width":276.65,"type":"RobotJunk1","y":531},{"height":174.8,"x":1144,"width":177.6,"type":"BubblePop","y":389},{"height":151.3,"x":3988,"width":297.7,"type":"RobotJunk2","y":442},{"height":521.05,"x":150,"width":718.7,"type":"TileBlockLeft2","y":407},{"height":176.75,"y":511,"x":2058,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":511,"x":2242,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":450,"x":4435,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":451,"x":4619,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":636,"x":5186,"width":192.75,"type":"TileEndLeft","rotation":6.474212646484375},{"height":183,"y":733,"x":6021,"width":516.55,"type":"TileMidBump","rotation":6.474212646484375},{"height":163,"y":781,"x":6528,"width":515,"type":"TileMidDip","rotation":6.474212646484375},{"height":176.75,"y":832,"x":6874,"width":192.8,"type":"TileEndRight","rotation":6.474212646484375},{"height":183,"y":677,"x":5524,"width":516.55,"type":"TileMidBump","rotation":6.474212646484375},{"height":176.75,"y":845,"x":7222,"width":192.75,"type":"TileEndLeft","rotation":-11.463516235351563},{"height":183,"y":680,"x":8047,"width":516.55,"type":"TileMidBump","rotation":-11.463516235351563},{"height":163,"y":570,"x":8544,"width":515,"type":"TileMidDip","rotation":-11.463516235351563},{"height":176.75,"y":512,"x":8888,"width":192.8,"type":"TileEndRight","rotation":-11.463516235351563},{"height":183,"y":780,"x":7557,"width":516.55,"type":"TileMidBump","rotation":-11.463516235351563},{"height":176.75,"y":640,"x":9054,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":183,"y":643,"x":9895,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":633,"x":10404,"width":515,"type":"TileMidDip","rotation":0},{"height":176.75,"y":645,"x":10753,"width":192.8,"type":"TileEndRight","rotation":0},{"height":183,"y":643,"x":9395,"width":516.55,"type":"TileMidBump","rotation":0},{"height":207.5,"x":10348,"type":"Ramp","scaleX":1,"scaleY":1,"width":944.9,"y":550},{"height":176.75,"y":496,"x":9432,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":495,"x":9616,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":660,"x":11837,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":183,"y":663,"x":12678,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":653,"x":13187,"width":515,"type":"TileMidDip","rotation":0},{"height":176.75,"y":665,"x":13536,"width":192.8,"type":"TileEndRight","rotation":0},{"height":183,"y":663,"x":12178,"width":516.55,"type":"TileMidBump","rotation":0},{"height":207.5,"x":13124,"type":"Ramp","scaleX":1,"scaleY":1,"width":944.9,"y":587},{"height":176.75,"y":663,"x":15590,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":183,"y":666,"x":16431,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":656,"x":16940,"width":515,"type":"TileMidDip","rotation":0},{"height":176.75,"y":668,"x":17289,"width":192.8,"type":"TileEndRight","rotation":0},{"height":183,"y":666,"x":15931,"width":516.55,"type":"TileMidBump","rotation":0},{"height":176.75,"y":558,"x":16354,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":557,"x":16538,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":398,"x":16324,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":399,"x":16508,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":861,"x":17797,"width":192.75,"type":"TileEndLeft","rotation":-13.734695434570313},{"height":183,"y":665,"x":18615,"width":516.55,"type":"TileMidBump","rotation":-13.734695434570313},{"height":163,"y":534,"x":19107,"width":515,"type":"TileMidDip","rotation":-13.734695434570313},{"height":176.75,"y":463,"x":19449,"width":192.8,"type":"TileEndRight","rotation":-13.734695434570313},{"height":183,"y":783,"x":18129,"width":516.55,"type":"TileMidBump","rotation":-13.734695434570313},{"height":176.75,"y":684,"x":20195,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":183,"y":687,"x":21036,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":677,"x":21545,"width":515,"type":"TileMidDip","rotation":0},{"height":176.75,"y":689,"x":21894,"width":192.8,"type":"TileEndRight","rotation":0},{"height":183,"y":687,"x":20536,"width":516.55,"type":"TileMidBump","rotation":0},{"height":176.75,"y":574,"x":21037,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":183,"y":577,"x":21878,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":567,"x":22387,"width":515,"type":"TileMidDip","rotation":0},{"height":176.75,"y":579,"x":22736,"width":192.8,"type":"TileEndRight","rotation":0},{"height":183,"y":577,"x":21378,"width":516.55,"type":"TileMidBump","rotation":0},{"height":176.75,"y":429,"x":22405,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":183,"y":432,"x":23246,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":422,"x":23755,"width":515,"type":"TileMidDip","rotation":0},{"height":176.75,"y":434,"x":24104,"width":192.8,"type":"TileEndRight","rotation":0},{"height":183,"y":432,"x":22746,"width":516.55,"type":"TileMidBump","rotation":0},{"height":176.75,"y":704,"x":24731,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":183,"y":707,"x":25572,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":697,"x":26081,"width":515,"type":"TileMidDip","rotation":0},{"height":176.75,"y":709,"x":26430,"width":192.8,"type":"TileEndRight","rotation":0},{"height":183,"y":707,"x":25072,"width":516.55,"type":"TileMidBump","rotation":0},{"height":176.75,"y":586,"x":26225,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":587,"x":26409,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":724,"x":26920,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":183,"y":727,"x":27761,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":717,"x":28270,"width":515,"type":"TileMidDip","rotation":0},{"height":176.75,"y":729,"x":28619,"width":192.8,"type":"TileEndRight","rotation":0},{"height":183,"y":727,"x":27261,"width":516.55,"type":"TileMidBump","rotation":0},{"height":207.5,"x":28187,"type":"Ramp","scaleX":1,"scaleY":1,"width":944.9,"y":639},{"height":176.75,"y":1021,"x":32166,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":183,"y":1024,"x":33007,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":1014,"x":33516,"width":515,"type":"TileMidDip","rotation":0},{"height":183,"y":1024,"x":32507,"width":516.55,"type":"TileMidBump","rotation":0},{"height":183,"y":1025,"x":34519,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":1013,"x":35535,"width":515,"type":"TileMidDip","rotation":0},{"height":176.75,"y":1025,"x":35884,"width":192.8,"type":"TileEndRight","rotation":0},{"height":183,"y":1025,"x":34010,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":1013,"x":35029,"width":515,"type":"TileMidDip","rotation":0},{"height":176.75,"y":932,"x":32475,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":933,"x":32659,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":932,"x":33473,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":931,"x":33657,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":802,"x":33473,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":801,"x":33657,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":802,"x":33473,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":803,"x":33657,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":936,"x":34462,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":935,"x":34646,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":806,"x":34462,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":805,"x":34646,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":654,"x":34462,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":653,"x":34646,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":524,"x":34462,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":525,"x":34646,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":936,"x":35582,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":935,"x":35766,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":806,"x":35582,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":805,"x":35766,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":654,"x":35582,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":653,"x":35766,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":524,"x":35582,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":523,"x":35766,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":386,"x":35582,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":385,"x":35766,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":256,"x":35582,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":255,"x":35766,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":104,"x":35582,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":103,"x":35766,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":-25,"x":35582,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":176.75,"y":-24,"x":35766,"width":192.8,"type":"TileEndRight","rotation":0},{"height":176.75,"y":979,"x":36069,"width":192.75,"type":"TileEndLeft","rotation":0},{"height":183,"y":982,"x":36910,"width":516.55,"type":"TileMidBump","rotation":0},{"height":163,"y":972,"x":37419,"width":515,"type":"TileMidDip","rotation":0},{"height":176.75,"y":984,"x":37768,"width":192.8,"type":"TileEndRight","rotation":0},{"height":183,"y":982,"x":36410,"width":516.55,"type":"TileMidBump","rotation":0},{"height":513.8,"x":39624,"width":718.7,"type":"TileBlockRight","y":280},{"height":176.75,"y":443,"x":39184,"width":192.75,"type":"TileEndLeft","rotation":0},{"y":215,"type":"gjaxi","x":1448},{"y":321,"type":"Choco","x":2153},{"height":184.5,"x":7754,"width":276.65,"type":"RobotJunk1","y":676},{"height":184.5,"x":9736,"width":276.65,"type":"RobotJunk1","y":556},{"height":184.5,"x":16726,"width":276.65,"type":"RobotJunk1","y":590},{"height":151.3,"x":27445,"width":297.7,"type":"RobotJunk2","y":724},{"height":2317,"x":-1386,"width":4068,"y":-80,"type":"JunkYardMonster"},{"height":47.3,"x":3367,"js":"startMonster();","width":1987.3,"type":"Trigger","y":399},{"height":1024,"x":0,"width":337,"type":"ParallaxFG","y":0},{"y":37,"type":"chopperBot","x":747}]}
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