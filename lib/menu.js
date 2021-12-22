const fs = require('fs-extra')

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
By using this source code / bot, you agree to the following Terms and Conditions:
- The source code/bot does *not* store your data on our servers.
- Source code/bot is *not responsible* for your orders to this bot.
- All the chats are *cleared* on daily bases.

Best regards, Sam`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

/*


	limitAdd(serial)
	
	
	
Gatau kenapa yang list block sama prem kebalik hadehhhh

*/

const help = (prefix, pushname, jame ,betime, cts) => {
    return `*┏━──Information*
*▌◈ Bot Name : Samsung Girl v2*
*▌◈ Whatsapp Bot Ver : 0.2.0*
*▌◈ Creator :* wa.me/16106999265
*▌◈ Name : Sam Kira Kun*
*▌◈ Date : ${betime}*
*▌◈ Limit : 35*
*▌◈ Prefix : #*
*┗━──────────────*

*┏━──Our Group*
https://chat.whatsapp.com/CvaNxEg54Ug8LwHIFhgUBU
*┗━──────────────*

Note:
_Treat the bot well, dev will act firmly if the user violates the rules._
_This bot has anti-spam in the form of a cooldown command for *5 seconds* every time you use it._

*┏━──⌜ Info ⌟*
*║◈ ${prefix}privacy*
*║◈ ${prefix}rules*
*║◈ ${prefix}ownerbot*
*║◈ ${prefix}ownergc*
*║◈ ${prefix}limit*
*║◈ ${prefix}me*
*║◈ ${prefix}adminList*
*║◈ ${prefix}mystat*
*║◈ ${prefix}botstat*
*║◈ ${prefix}runtime*
*┗━──────────────────*

*┏━──⌜ Sticker ⌟*
*║◈ ${prefix}sticker*
*║◈ ${prefix}sticker -crop*
*║◈ ${prefix}sticker -circle*
*║◈ ${prefix}sticker -fill*
*║◈ ${prefix}autostik enable/disable*
*║◈ ${prefix}stickergif*
*║◈ ${prefix}sgiffull*
*║◈ ${prefix}emoji*
*║◈ ${prefix}toimg*
*║◈ ${prefix}take package_name|author_name*
*║◈ ${prefix}attp text*
*║◈ ${prefix}ttp text*
*║◈ ${prefix}animesticker*
*║◈ ${prefix}face*
*║◈ ${prefix}icon*
*║◈ ${prefix}nobg*
*┗━──────────────────*

*┏━──⌜ Text Maker ⌟*
*║◈ ${prefix}water text*
*║◈ ${prefix}waterdrop text*
*║◈ ${prefix}watercolor text*
*║◈ ${prefix}discovery text*
*║◈ ${prefix}metal text*
*║◈ ${prefix}glossymetalic text*
*║◈ ${prefix}fiction text*
*║◈ ${prefix}demon text*
*║◈ ${prefix}transformer text*
*║◈ ${prefix}berry text*
*║◈ ${prefix}thunder text*
*║◈ ${prefix}magma text*
*║◈ ${prefix}3dstone text*
*║◈ ${prefix}3dgradient text*
*║◈ ${prefix}3dsand text*
*║◈ ${prefix}3dholographic text*
*║◈ ${prefix}3dbox text*
*║◈ ${prefix}neon text*
*║◈ ${prefix}neondevil text*
*║◈ ${prefix}neonlight text*
*║◈ ${prefix}multineon text*
*║◈ ${prefix}glitch text*
*║◈ ${prefix}harryp text*
*║◈ ${prefix}embossed text*
*║◈ ${prefix}foggy text*
*║◈ ${prefix}underwater text*
*║◈ ${prefix}bear text*
*║◈ ${prefix}graffiti text*
*║◈ ${prefix}future text*
*║◈ ${prefix}luxury text*
*║◈ ${prefix}blackpink text*
*║◈ ${prefix}blackpink2 text*
*║◈ ${prefix}blackpink3 text*
*║◈ ${prefix}darkmetal text*
*║◈ ${prefix}city text*
*║◈ ${prefix}deluxesilver text*
*║◈ ${prefix}leaves text*
*║◈ ${prefix}firework text*
*║◈ ${prefix}thunder text*
*║◈ ${prefix}glow text*
*║◈ ${prefix}breakwall text*
*║◈ ${prefix}chrome text*
*║◈ ${prefix}arrow text*
*║◈ ${prefix}galaxy text*
*║◈ ${prefix}angelwing text*
*║◈ ${prefix}galaxywing text*
*║◈ ${prefix}galaxywing2 text*
*║◈ ${prefix}galaxytree text*
*║◈ ${prefix}graffiti4 text*
*║◈ ${prefix}wetglass text*
*║◈ ${prefix}kaneki text*
*║◈ ${prefix}rem text*
*║◈ ${prefix}gura text*
*║◈ ${prefix}lolimaker text*
*║◈ ${prefix}sadboi text1|text2*
*║◈ ${prefix}nekomaker text1|text2*
*║◈ ${prefix}glitter text1|text2*
*║◈ ${prefix}pornhub text1|text2*
*║◈ ${prefix}capamerica text1|text2*
*║◈ ${prefix}layered text1|text2*
*║◈ ${prefix}glitch2 text1|text2*
*║◈ ${prefix}glitch3 text1|text2*
*║◈ ${prefix}graffiti2 text1|text2*
*║◈ ${prefix}graffiti3 text1|text2*
*║◈ ${prefix}3dspace text1|text2*
*║◈ ${prefix}3dsteel text1|text2*
*║◈ ${prefix}stone text1|text2*
*║◈ ${prefix}avenger text1|text2*
*║◈ ${prefix}marvel text1|text2*
*║◈ ${prefix}marvel2 text1|text2*
*║◈ ${prefix}wolf text1|text2*
*║◈ ${prefix}wolf2 text1|text2*
*║◈ ${prefix}3dmetal*
*┗━──────────────────*

*┏━──⌜ Image Maker ⌟*
*║◈ ${prefix}communism*
*║◈ ${prefix}trash*
*║◈ ${prefix}deletetrash*
*║◈ ${prefix}wasted*
*║◈ ${prefix}rip*
*║◈ ${prefix}rip2*
*║◈ ${prefix}triggered*
*║◈ ${prefix}thuglife*
*║◈ ${prefix}tobecontinue*
*║◈ ${prefix}simpcard*
*║◈ ${prefix}gay*
*║◈ ${prefix}gay2*
*║◈ ${prefix}blacknwhite*
*║◈ ${prefix}glass*
*║◈ ${prefix}respect*
*║◈ ${prefix}jail*
*║◈ ${prefix}meth*
*║◈ ${prefix}crush*
*║◈ ${prefix}hitler*
*║◈ ${prefix}blur*
*║◈ ${prefix}beautiful*
*║◈ ${prefix}stupid text*
*║◈ ${prefix}patmeme*
*║◈ ${prefix}patrickmeme*
*║◈ ${prefix}burnimg*
*║◈ ${prefix}mememaker text1 |text2*
*┗━──────────────────*

*┏━──⌜ Fun⌟*
*║◈ ${prefix}joke*
*║◈ ${prefix}darkjoke*
*║◈ ${prefix}slap @tag*
*║◈ ${prefix}kiss @tag*
*║◈ ${prefix}wink @tag*
*║◈ ${prefix}hug @tag*
*║◈ ${prefix}spank @tag*
*║◈ ${prefix}kill @tag*
*║◈ ${prefix}kick @tag*
*║◈ ${prefix}holdhand @tag*
*║◈ ${prefix}bully @tag*
*║◈ ${prefix}pat @tag*
*║◈ ${prefix}cuddle @tag*
*║◈ ${prefix}poke @tag*
*║◈ ${prefix}tickle @tag*
*║◈ ${prefix}wave @tag*
*║◈ ${prefix}bully @tag*
*║◈ ${prefix}bonk @tag*
*║◈ ${prefix}highfive @tag*
*║◈ ${prefix}yeet @tag*
*║◈ ${prefix}abuse @tag* [Hindi Slangs]
*║◈ ${prefix}enabuse @tag* [English Slangs]
*║◈ ${prefix}fml*
*║◈ ${prefix}jokenpo* (rockpaperscissor)
*║◈ ${prefix}pickupline*
*║◈ ${prefix}ship @tag @tag*
*┗━──────────────────*

*┏━──⌜ Media ⌟*
*║◈ ${prefix}ig _link_*
*║◈ ${prefix}stalkig Sam.only_*
*║◈ ${prefix}lyrics _song name_*
*║◈ ${prefix}bass*
*║◈ ${prefix}nightcore*
*║◈ ${prefix}tomp3*
*║◈ ${prefix}audio _link_*
*║◈ ${prefix}ytsearch query*
*║◈ ${prefix}play _song name_*
*║◈ ${prefix}ytmp3 <link>*
*║◈ ${prefix}ytmp4 <link>*
*║◈ ${prefix}tweet _username_*
*║◈ ${prefix}trending _country_*
*║◈ ${prefix}movie _name_*
*║◈ ${prefix}lolivid*
*║◈ ${prefix}intro1*
*║◈ ${prefix}intro2*
*║◈ ${prefix}pubg*
*┗━──────────────────*

*┏━──⌜ Anime Random ⌟ ツ*
*║◈ ${prefix}animemode on/off*
*║◈ ${prefix}anime waifu*
*║◈ ${prefix}anime neko*
*║◈ ${prefix}anime husbu*
*║◈ ${prefix}anime random*
*║◈ ${prefix}uwu _sentence_*
*║◈ ${prefix}surprise*
*║◈ ${prefix}rvidanime*
*║◈ ${prefix}waifu*
*║◈ ${prefix}husbu*
*║◈ ${prefix}neko*
*║◈ ${prefix}neko2*
*║◈ ${prefix}neko3*
*║◈ ${prefix}loli*
*║◈ ${prefix}yuri*
*║◈ ${prefix}foxgirl*
*║◈ ${prefix}foxgirl2*
*║◈ ${prefix}wolfgirl*
*║◈ ${prefix}couple*
*║◈ ${prefix}shinobu*
*║◈ ${prefix}megumin*
*║◈ ${prefix}kimonomimi*
*║◈ ${prefix}takagi*
*║◈ ${prefix}mecha*
*║◈ ${prefix}holo*
*║◈ ${prefix}animewall*
*║◈ ${prefix}animewall2*
*║◈ ${prefix}wpanime*
*║◈ ${prefix}animequote*
*║◈ ${prefix}animesticker*
*║◈ ${prefix}face*
*║◈ ${prefix}icon*
*║◈ ${prefix}animeavatar*
*║◈ ${prefix}animeavatar2*
*║◈ ${prefix}gecg*
*║◈ ${prefix}araara*
*║◈ ${prefix}baka*
*║◈ ${prefix}nani*
*┗━──────────────────*

*┏━──⌜ Anime Search ⌟ ツ*
*║◈ ${prefix}anisearch title*
*║◈ ${prefix}mangasearch title*
*║◈ ${prefix}wallpaper query*
*║◈ ${prefix}image query*
*║◈ ${prefix}pinterest query*
*║◈ ${prefix}pokedex pikachu*
*║◈ ${prefix}sauce*
*┗━──────────────────*

*┏━──⌜ Random Anime GIF ⌟ ツ*
*║◈ ${prefix}random hug*
*║◈ ${prefix}random kiss*
*║◈ ${prefix}random pat*
*║◈ ${prefix}random cuddle*
*║◈ ${prefix}random slap*
*║◈ ${prefix}random poke*
*║◈ ${prefix}random feed*
*║◈ ${prefix}random tickle*
*║◈ ${prefix}random baka*
*║◈ ${prefix}random cry*
*║◈ ${prefix}random awoo*
*║◈ ${prefix}random lick*
*║◈ ${prefix}random smug*
*║◈ ${prefix}random bully*
*║◈ ${prefix}random bonk*
*║◈ ${prefix}random yeet*
*║◈ ${prefix}random blush*
*║◈ ${prefix}random handhold*
*║◈ ${prefix}random highfive*
*║◈ ${prefix}random smile*
*║◈ ${prefix}random wave*
*║◈ ${prefix}random nom*
*║◈ ${prefix}random bite*
*║◈ ${prefix}random glomp*
*║◈ ${prefix}random kill*
*║◈ ${prefix}random kick*
*║◈ ${prefix}random happy*
*║◈ ${prefix}random wink*
*║◈ ${prefix}random dance*
*║◈ ${prefix}random cringe*
*┗━──────────────────*

*┏━──⌜ Facts ⌟*
*║◈ ${prefix}panda*
*║◈ ${prefix}dog*
*║◈ ${prefix}cat*
*║◈ ${prefix}fox*
*║◈ ${prefix}redpanda*
*║◈ ${prefix}raccoon*
*║◈ ${prefix}kangaroo*
*║◈ ${prefix}koala*
*┗━──────────────────*

*┏━──⌜ Others ⌟*
*║◈ ${prefix}tts <langcode> text*
*║◈ ${prefix}wiki _query_*
*║◈ ${prefix}translate langcode|text*
*║◈ ${prefix}death _name_*
*║◈ ${prefix}gender _name_*
*║◈ ${prefix}google query*
*║◈ ${prefix}number*
*║◈ ${prefix}vcard*
*║◈ ${prefix}tinyurl _link_*
*║◈ ${prefix}horoscope*
*║◈ ${prefix}covid country*
*║◈ ${prefix}converter*
*║◈ ${prefix}currency*
*║◈ ${prefix}qr text*
*║◈ ${prefix}readqr*
*║◈ ${prefix}quote*
*║◈ ${prefix}never*
*║◈ ${prefix}roll*
*║◈ ${prefix}flip*
*║◈ ${prefix}chance word*
*║◈ ${prefix}reverseword*
*║◈ ${prefix}readmore text1|text2*
*┗━──────────────────*

⚠ [ *Admin Group Only* ] ⚠

*┏━──⌜ Bot Must Be Admin ⌟*
*║◈ ${prefix}remove* @tag
*║◈ ${prefix}promote* @tag
*║◈ ${prefix}demote* @tag
*║◈ ${prefix}oremove* <reply to members message>
*║◈ ${prefix}opromote* <reply to members message>
*║◈ ${prefix}odemote* <reply to members message>
*║◈ ${prefix}seticon*
*║◈ ${prefix}setgcname*
*║◈ ${prefix}linkgc*
*║◈ ${prefix}revoke*
*║◈ ${prefix}antilink on/off*
*║◈ ${prefix}group open/close*
*┗━──────────────────*

*║◈ ${prefix}tagall*
*║◈ ${prefix}del*
*║◈ ${prefix}resend*
*║◈ ${prefix}leave*
*║◈ ${prefix}nsfw on/off*
*║◈ ${prefix}animemode on/off*
*║◈ ${prefix}welcome on/off*
*║◈ ${prefix}left on/off*

*║◈ ${prefix}adultmenu*
*║◈ ${prefix}menuadmin*

⚠ [ *Owner Group Only* ] ⚠
*║◈ ${prefix}kickall*
*Owner Group is a group creator.*
*┗━──────────────────*

**IMPORTANT**
By using this source code / bot, you agree to the following Terms and Conditions:
- The source code/bot does *not* store your data on our servers.
- Source code/bot is *not responsible* for your orders to this bot.
- All the chats are *cleared* on daily bases.

*── 「 RULES 」 ──*
1. Do NOT spam bot. 
_Penalty: *WARN/SOFT BLOCK*_
2. Do NOT call bot.
_Penalty: *WHOLE DAY BLOCK*_
3. Do NOT exploit bots.
_Penalty: *PERMANENT BLOCK*_

If you've understand these rules, please type *${prefix}menu* to get started.
~Best regards, Sam`
}
exports.help = help

const owner = (prefix) => {
    return `
*┏━──⌜ Owner Bot ⌟*
*║◈ ${prefix}mute*
*║◈ ${prefix}unmute*
*║◈ ${prefix}ban* <reply member>
*║◈ ${prefix}pban* <number>
*║◈ ${prefix}punban* <number>
*║◈ ${prefix}unban* <reply member>
*║◈ ${prefix}deleteban*
*║◈ ${prefix}resetlimit*
*║◈ ${prefix}oaddprem*
*║◈ ${prefix}odelprem*
*║◈ ${prefix}leaveall*
*║◈ ${prefix}clearall* 
*║◈ ${prefix}setstatus*
*║◈ ${prefix}setpic*
*║◈ ${prefix}screen*
*║◈ ${prefix}addcogan*
*║◈ ${prefix}addcecan*
*║◈ ${prefix}delallstik*
*║◈ ${prefix}delallvn*
*║◈ ${prefix}delallimg*
*║◈ ${prefix}listban*
*║◈ ${prefix}listblock*
*║◈ ${prefix}oblock* <reply member>
*║◈ ${prefix}block*  <number>
*║◈ ${prefix}unblock* <reply member>
*║◈ ${prefix}unblocked* <number>
*║◈ ${prefix}deleteleft*
*║◈ ${prefix}deletewelcome*
*║◈ ${prefix}listleft*
*║◈ ${prefix}listwelcome*
*┗━──────────────────*`
}
exports.owner = owner

const info = (prefix) => {
		return `*┏━──⌜ Info ⌟*
*║◈ ${prefix}privacy*
*║◈ ${prefix}rules*
*║◈ ${prefix}ownerbot*
*║◈ ${prefix}ownergc*
*║◈ ${prefix}limit*
*║◈ ${prefix}me*
*║◈ ${prefix}adminList*
*║◈ ${prefix}mystat*
*║◈ ${prefix}botstat*
*║◈ ${prefix}runtime*
*┗━──────────────────*`}
exports.info = info

const sti = (prefix) => {
		return `*┏━──⌜ Sticker ⌟*
*║◈ ${prefix}sticker*
*║◈ ${prefix}sticker -crop*
*║◈ ${prefix}sticker -circle*
*║◈ ${prefix}sticker -fill*
*║◈ ${prefix}autostik enable/disable*
*║◈ ${prefix}stickergif*
*║◈ ${prefix}sgiffull*
*║◈ ${prefix}emoji*
*║◈ ${prefix}toimg*
*║◈ ${prefix}take package_name|author_name*
*║◈ ${prefix}attp text*
*║◈ ${prefix}ttp text*
*║◈ ${prefix}animesticker*
*║◈ ${prefix}face*
*║◈ ${prefix}icon*
*║◈ ${prefix}nobg*
*┗━──────────────────*`}
exports.sti = sti

const teo = (prefix) => {
		return `*┏━──⌜ Text Maker ⌟*
*║◈ ${prefix}water text*
*║◈ ${prefix}waterdrop text*
*║◈ ${prefix}watercolor text*
*║◈ ${prefix}discovery text*
*║◈ ${prefix}metal text*
*║◈ ${prefix}glossymetalic text*
*║◈ ${prefix}fiction text*
*║◈ ${prefix}demon text*
*║◈ ${prefix}transformer text*
*║◈ ${prefix}berry text*
*║◈ ${prefix}thunder text*
*║◈ ${prefix}magma text*
*║◈ ${prefix}3dstone text*
*║◈ ${prefix}3dgradient text*
*║◈ ${prefix}3dsand text*
*║◈ ${prefix}3dholographic text*
*║◈ ${prefix}3dbox text*
*║◈ ${prefix}neon text*
*║◈ ${prefix}neondevil text*
*║◈ ${prefix}neonlight text*
*║◈ ${prefix}multineon text*
*║◈ ${prefix}glitch text*
*║◈ ${prefix}harryp text*
*║◈ ${prefix}embossed text*
*║◈ ${prefix}foggy text*
*║◈ ${prefix}underwater text*
*║◈ ${prefix}bear text*
*║◈ ${prefix}graffiti text*
*║◈ ${prefix}future text*
*║◈ ${prefix}luxury text*
*║◈ ${prefix}blackpink text*
*║◈ ${prefix}blackpink2 text*
*║◈ ${prefix}blackpink3 text*
*║◈ ${prefix}darkmetal text*
*║◈ ${prefix}city text*
*║◈ ${prefix}deluxesilver text*
*║◈ ${prefix}leaves text*
*║◈ ${prefix}firework text*
*║◈ ${prefix}thunder text*
*║◈ ${prefix}glow text*
*║◈ ${prefix}breakwall text*
*║◈ ${prefix}chrome text*
*║◈ ${prefix}arrow text*
*║◈ ${prefix}galaxy text*
*║◈ ${prefix}angelwing text*
*║◈ ${prefix}galaxywing text*
*║◈ ${prefix}galaxywing2 text*
*║◈ ${prefix}galaxytree text*
*║◈ ${prefix}graffiti4 text*
*║◈ ${prefix}wetglass text*
*║◈ ${prefix}glitter text1|text2*
*║◈ ${prefix}pornhub text1|text2*
*║◈ ${prefix}capamerica text1|text2*
*║◈ ${prefix}layered text1|text2*
*║◈ ${prefix}glitch2 text1|text2*
*║◈ ${prefix}glitch3 text1|text2*
*║◈ ${prefix}graffiti2 text1|text2*
*║◈ ${prefix}graffiti3 text1|text2*
*║◈ ${prefix}3dspace text1|text2*
*║◈ ${prefix}3dsteel text1|text2*
*║◈ ${prefix}stone text1|text2*
*║◈ ${prefix}avenger text1|text2*
*║◈ ${prefix}marvel text1|text2*
*║◈ ${prefix}marvel2 text1|text2*
*║◈ ${prefix}wolf text1|text2*
*║◈ ${prefix}wolf2 text1|text2*
*║◈ ${prefix}3dmetal*
*┗━──────────────────*`}
exports.teo = teo

const imfo = (prefix) => {
		return `*┏━──⌜ Image Maker ⌟*
*║◈ ${prefix}communism*
*║◈ ${prefix}trash*
*║◈ ${prefix}deletetrash*
*║◈ ${prefix}wasted*
*║◈ ${prefix}rip*
*║◈ ${prefix}rip2*
*║◈ ${prefix}triggered*
*║◈ ${prefix}thuglife*
*║◈ ${prefix}tobecontinue*
*║◈ ${prefix}simpcard*
*║◈ ${prefix}gay*
*║◈ ${prefix}gay2*
*║◈ ${prefix}blacknwhite*
*║◈ ${prefix}glass*
*║◈ ${prefix}respect*
*║◈ ${prefix}jail*
*║◈ ${prefix}meth*
*║◈ ${prefix}crush*
*║◈ ${prefix}hitler*
*║◈ ${prefix}blur*
*║◈ ${prefix}beautiful*
*║◈ ${prefix}stupid text*
*║◈ ${prefix}patmeme*
*║◈ ${prefix}patrickmeme*
*║◈ ${prefix}burnimg*
*║◈ ${prefix}mememaker text1 |text2*
*┗━──────────────────*`}
exports.imfo = imfo

const fufo = (prefix) => {
		return `*┏━──⌜ Fun⌟*
*║◈ ${prefix}joke*
*║◈ ${prefix}darkjoke*
*║◈ ${prefix}slap @tag*
*║◈ ${prefix}kiss @tag*
*║◈ ${prefix}wink @tag*
*║◈ ${prefix}hug @tag*
*║◈ ${prefix}spank @tag*
*║◈ ${prefix}kill @tag*
*║◈ ${prefix}kick @tag*
*║◈ ${prefix}holdhand @tag*
*║◈ ${prefix}bully @tag*
*║◈ ${prefix}pat @tag*
*║◈ ${prefix}cuddle @tag*
*║◈ ${prefix}poke @tag*
*║◈ ${prefix}tickle @tag*
*║◈ ${prefix}wave @tag*
*║◈ ${prefix}bully @tag*
*║◈ ${prefix}bonk @tag*
*║◈ ${prefix}highfive @tag*
*║◈ ${prefix}yeet @tag*
*║◈ ${prefix}abuse @tag* [Hindi Slangs]
*║◈ ${prefix}enabuse @tag* [English Slangs]
*║◈ ${prefix}truth*
*║◈ ${prefix}dare*
*║◈ ${prefix}fml*
*║◈ ${prefix}jokenpo* (rockpaperscissor)
*║◈ ${prefix}pickupline*
*┗━──────────────────*`}
exports.fufo = fufo

const mefo = (prefix) => {
	return `*┏━──⌜ Media ⌟*
*║◈ ${prefix}ig _link_*
*║◈ ${prefix}stalkig Sam.only_*
*║◈ ${prefix}lyrics _song name_*
*║◈ ${prefix}bass*
*║◈ ${prefix}nightcore*
*║◈ ${prefix}tomp3*
*║◈ ${prefix}audio _link_*
*║◈ ${prefix}ytsearch query*
*║◈ ${prefix}play _song name_*
*║◈ ${prefix}ytmp3 <link>*
*║◈ ${prefix}ytmp4 <link>*
*║◈ ${prefix}tweet _username_*
*║◈ ${prefix}trending _country_*
*║◈ ${prefix}movie _name_*
*║◈ ${prefix}lolivid*
*║◈ ${prefix}intro1*
*║◈ ${prefix}intro2*
*║◈ ${prefix}pubg*
*┗━──────────────────*`}
exports.mefo = mefo

const anfo = (prefix) => {
	return `*┏━──⌜ Anime Random ⌟ ツ*
*║◈ ${prefix}animemode on/off*
*║◈ ${prefix}anime waifu*
*║◈ ${prefix}anime neko*
*║◈ ${prefix}anime husbu*
*║◈ ${prefix}anime random*
*║◈ ${prefix}uwu _sentence_*
*║◈ ${prefix}surprise*
*║◈ ${prefix}rvidanime*
*║◈ ${prefix}waifu*
*║◈ ${prefix}husbu*
*║◈ ${prefix}neko*
*║◈ ${prefix}neko2*
*║◈ ${prefix}neko3*
*║◈ ${prefix}loli*
*║◈ ${prefix}loli2*
*║◈ ${prefix}yuri*
*║◈ ${prefix}foxgirl*
*║◈ ${prefix}foxgirl2*
*║◈ ${prefix}wolfgirl*
*║◈ ${prefix}couple*
*║◈ ${prefix}shinobu*
*║◈ ${prefix}megumin*
*║◈ ${prefix}kimonomimi*
*║◈ ${prefix}takagi*
*║◈ ${prefix}mecha*
*║◈ ${prefix}holo*
*║◈ ${prefix}animewall*
*║◈ ${prefix}animewall2*
*║◈ ${prefix}wpanime*
*║◈ ${prefix}animequote*
*║◈ ${prefix}animesticker*
*║◈ ${prefix}face*
*║◈ ${prefix}icon*
*║◈ ${prefix}animeavatar*
*║◈ ${prefix}animeavatar2*
*║◈ ${prefix}gecg*
*║◈ ${prefix}araara*
*║◈ ${prefix}baka*
*║◈ ${prefix}nani*
*┗━──────────────────*

*┏━──⌜ Anime Search ⌟ ツ*
*║◈ ${prefix}anisearch title*
*║◈ ${prefix}mangasearch title*
*║◈ ${prefix}wallpaper query*
*║◈ ${prefix}image query*
*║◈ ${prefix}pinterest query*
*║◈ ${prefix}pokedex pikachu*
*║◈ ${prefix}sauce*
*┗━──────────────────*

*┏━──⌜ Random Anime GIF ⌟ ツ*
*║◈ ${prefix}random hug*
*║◈ ${prefix}random kiss*
*║◈ ${prefix}random pat*
*║◈ ${prefix}random cuddle*
*║◈ ${prefix}random slap*
*║◈ ${prefix}random poke*
*║◈ ${prefix}random feed*
*║◈ ${prefix}random tickle*
*║◈ ${prefix}random baka*
*║◈ ${prefix}random neko*
*║◈ ${prefix}random cry*
*║◈ ${prefix}random awoo*
*║◈ ${prefix}random lick*
*║◈ ${prefix}random smug*
*║◈ ${prefix}random bully*
*║◈ ${prefix}random bonk*
*║◈ ${prefix}random yeet*
*║◈ ${prefix}random blush*
*║◈ ${prefix}random handhold*
*║◈ ${prefix}random highfive*
*║◈ ${prefix}random smile*
*║◈ ${prefix}random wave*
*║◈ ${prefix}random nom*
*║◈ ${prefix}random bite*
*║◈ ${prefix}random glomp*
*║◈ ${prefix}random kill*
*║◈ ${prefix}random kick*
*║◈ ${prefix}random happy*
*║◈ ${prefix}random wink*
*║◈ ${prefix}random dance*
*║◈ ${prefix}random cringe*
*┗━──────────────────*`}
    exports.anfo = anfo
	
const fafo = (prefix) => {
	return `*┏━──⌜ Facts ⌟*
*║◈ ${prefix}panda*
*║◈ ${prefix}dog*
*║◈ ${prefix}cat*
*║◈ ${prefix}fox*
*║◈ ${prefix}redpanda*
*║◈ ${prefix}raccoon*
*║◈ ${prefix}kangaroo*
*║◈ ${prefix}koala*
*┗━──────────────────*`}
exports.fafo = fafo


const otfo = (prefix) => {
	return `*┏━──⌜ Others ⌟*
*║◈ ${prefix}tts <langcode> text*
*║◈ ${prefix}wiki _query_*
*║◈ ${prefix}translate langcode|text*
*║◈ ${prefix}death _name_*
*║◈ ${prefix}gender _name_*
*║◈ ${prefix}google query*
*║◈ ${prefix}number*
*║◈ ${prefix}vcard*
*║◈ ${prefix}tinyurl _link_*
*║◈ ${prefix}horoscope*
*║◈ ${prefix}covid country*
*║◈ ${prefix}converter*
*║◈ ${prefix}currency*
*║◈ ${prefix}qr text*
*║◈ ${prefix}readqr*
*║◈ ${prefix}quote*
*║◈ ${prefix}never*
*║◈ ${prefix}dice*
*║◈ ${prefix}chance word*
*║◈ ${prefix}reverseword*
*║◈ ${prefix}readmore text1|text2*
*┗━──────────────────*`}
exports.otfo = otfo


const nsfw = (prefix) => {
		return `
⚠ [ *NSFW COMMANDS* ] ⚠

*┏━──⌜ Hentai ⌟ ツ*
*║◈ ${prefix}animemode on/off*
*║◈ ${prefix}nsfw on/off*
*║◈ ${prefix}randomhentai*
*║◈ ${prefix}rhentai*
*║◈ ${prefix}lewd*
*║◈ ${prefix}pussyart*
*║◈ ${prefix}rule34*
*║◈ ${prefix}wallnsfw*
*║◈ ${prefix}nsfwdva*
*║◈ ${prefix}milf*
*║◈ ${prefix}trapnime*
*┗━──────────────────*

*┏━──⌜ Fetish Hentai ⌟ ツ*
*║◈ ${prefix}tits*
*║◈ ${prefix}booty*
*║◈ ${prefix}thighs*
*║◈ ${prefix}armpits*
*║◈ ${prefix}feets*
*║◈ ${prefix}sideoppai*
*┗━──────────────────*

*┏━──⌜ Specify Hentai ⌟ ツ*
*║◈ ${prefix}glasses*
*║◈ ${prefix}selfie*
*║◈ ${prefix}maid*
*║◈ ${prefix}school*
*║◈ ${prefix}panties*
*┗━──────────────────*

*┏━──⌜ NSFW ⌟ ツ*
*║◈ ${prefix}nsfwwaifu*
*║◈ ${prefix}nsfwneko*
*║◈ ${prefix}nsfwneko2*
*║◈ ${prefix}nsfwneko3*
*║◈ ${prefix}nsfwsolo*
*║◈ ${prefix}nsfwbj*
*║◈ ${prefix}nsfwbj2*
*║◈ ${prefix}nsfwyuri*
*║◈ ${prefix}nsfwkemonomimi*
*║◈ ${prefix}nsfwkitsune*
*║◈ ${prefix}nsfwketa*
*║◈ ${prefix}nsfwfemdom*
*║◈ ${prefix}nsfwerokitsune*
*║◈ ${prefix}nsfweroyuri*
*║◈ ${prefix}nsfwcumart*
*║◈ ${prefix}nsfwavatar*
*║◈ ${prefix}nsfwdva*
*┗━──────────────────*

*┏━──⌜ nHentai Search ⌟ ツ*
*║◈ ${prefix}nhentai <code>*
*║◈ ${prefix}nhsearch query*
*┗━──────────────────*

*┏━──⌜ NSFW Real ⌟*
*║◈ ${prefix}nsfw on/off*
*║◈ ${prefix}nudes*
*║◈ ${prefix}petite*
*║◈ ${prefix}indian*
*║◈ ${prefix}asian*
*║◈ ${prefix}snapchat*
*║◈ ${prefix}legalteen*
*║◈ ${prefix}nsfwcosplay*
*║◈ ${prefix}xvideos query*
*║◈ ${prefix}pornhubs query*
*║◈ ${prefix}xnxxs query*
*║◈ ${prefix}javhds query*
*║◈ ${prefix}javhdds query*
*┗━──────────────────*`
}
exports.nsfw = nsfw


const admin = (prefix) => {
    return `
⚠ [ *Admin Group Only* ] ⚠

*┏━──⌜ Bot Must Be Admin ⌟*
*║◈ ${prefix}remove* @tag
*║◈ ${prefix}promote* @tag
*║◈ ${prefix}demote* @tag
*║◈ ${prefix}oremove* <reply to members message>
*║◈ ${prefix}opromote* <reply to members message>
*║◈ ${prefix}odemote* <reply to members message>
*║◈ ${prefix}seticon*
*║◈ ${prefix}setgcname*
*║◈ ${prefix}linkgc*
*║◈ ${prefix}revoke*
*║◈ ${prefix}antilink on/off*
*║◈ ${prefix}group open/close*
*┗━──────────────────*

*║◈ ${prefix}tagall*
*║◈ ${prefix}del*
*║◈ ${prefix}resend*
*║◈ ${prefix}leave*
*║◈ ${prefix}nsfw on/off*
*║◈ ${prefix}animemode on/off*
*║◈ ${prefix}welcome on/off*
*║◈ ${prefix}left on/off*

*║◈ ${prefix}adultmenu*
*║◈ ${prefix}menuadmin*

⚠ [ *Owner Group Only* ] ⚠
*║◈ ${prefix}kickall*
*Owner Group is a group creator.*
*┗━──────────────────*
`
}
exports.admin = admin
const rules = (prefix) => {
	return`
*── 「 RULES 」 ──*

1. Do NOT spam bot. 
Penalty: *WARN/SOFT BLOCK*

2. Do NOT call bot.
Penalty: *WHOLE DAY BLOCK*

3. Do NOT exploit bots.
Penalty: *PERMANENT BLOCK*

If you've understand these rules, please type *${prefix}menu* to get started.
`}
exports.rules = rules
exports.textDonasi = () => {
    return `
Hello
Enjoy the bot.
There is no need to donate`
}

exports.kodebahasa = () => {
	return `
Language Code : 

Afrikaans: "af",
Albanian: "sq",
Amharic: "am",
Arabic: "ar",
Armenian: "hy",
Azerbaijani: "az",
Basque: "eu",
Belarusian: "be",
Bengali: "bn",
Bosnian: "bs",
Bulgarian: "bg",
Catalan: "ca",
Cebuano: "ceb",
Chichewa: "ny",
Chinese Simplified: "zh-cn",
Chinese Traditional: "zh-tw",
Corsican: "co",
Croatian: "hr",
Czech: "cs",
Danish: "da",
Dutch: "nl",
English: "en",
Esperanto: "eo",
Estonian: "et",
Filipino: "tl",
Finnish: "fi",
French: "fr",
Frisian: "fy",
Galician: "gl",
Georgian: "ka",
German: "de",
Greek: "el",
Gujarati: "gu",
Haitian Creole: "ht",
Hausa: "ha",
Hawaiian: "haw",
Hebrew: "iw",
Hindi: "hi",
Hmong: "hmn",
Hungarian: "hu",
Icelandic: "is",
Igbo: "ig",
Indonesian: "id",
Irish: "ga",
Italian: "it",
Japanese: "ja",
Javanese: "jw",
Kannada: "kn",
Kazakh: "kk",
Khmer: "km",
Korean: "ko",
Kurdish (Kurmanji): "ku",
Kyrgyz: "ky",
Lao: "lo",
Latin: "la",
Latvian: "lv",
Lithuanian: "lt",
Luxembourgish: "lb",
Macedonian: "mk",
Malagasy: "mg",
Malay: "ms",
Malayalam: "ml",
Maltese: "mt",
Maori: "mi",
Marathi: "mr",
Mongolian: "mn",
Myanmar (Burmese): "my",
Nepali: "ne",
Norwegian: "no",
Pashto: "ps",
Persian: "fa",
Polish: "pl",
Portuguese: "pt",
Punjabi: "ma",
Romanian: "ro",
Russian: "ru",
Samoan: "sm",
Scots Gaelic: "gd",
Serbian: "sr",
Sesotho: "st",
Shona: "sn",
Sindhi: "sd",
Sinhala: "si",
Slovak: "sk",
Slovenian: "sl",
Somali: "so",
Spanish: "es",
Sundanese: "su",
Swahili: "sw",
Swedish: "sv",
Tajik: "tg",
Tamil: "ta",
Telugu: "te",
Thai: "th",
Turkish: "tr",
Ukrainian: "uk",
Urdu: "ur",
Uyghur: "ug",
Uzbek: "uz",
Vietnamese: "vi",
Welsh: "cy",
Xhosa: "xh",
Yiddish: "yi",
Yoruba: "yo",
Zulu: "zu"`
}

exports.kodenuklir = () => {
    return `	
     ● KODE NUKLIR ●
‌229144 253687 238577 236509
‌227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364 223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
‌225496 259137 231681 161688
199613 259260 260433 235532 
‌88323 272117 170213 256613
‌258382 224942 258382 224942
     
229144 253687 238577 236509
‌227675 229085 233245 266177
254351 265855 239842 219847
239749 230566 253104 230185
251974 253091 251489 238030
260614 245023 232887 233547
262158 262870 239312 255129
244530 246963 256050 215459
243725 233770 250704 261819
261830 215658 256404 260028
261789 241254 268580 262407
262252 201814 250193 236036
262889 243933 245697 239750
128983 95364  223815 225080
110332 225767 97247 231139
266116 217037 160657 182439
205089 176495 199121 199425
184068 186615 224644 129479
251524 153374 146499 258212
163532 255244 269825 235914
247103 138365 124624 219718
168941 265918 205995 191390
‌225496 259137 231681 161688
‌199613 259260 260433 235532
‌88323 272117 170213 256613`
}