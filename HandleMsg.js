require('dotenv').config()
const { decryptMedia } = require('@open-wa/wa-automate')
const moment = require('moment-timezone')
moment.tz.setDefault('Europe/London').locale('in')
const axios = require('axios')
const sagiri = require('sagiri')
const config = require('./config.json')
const speed = require('performance-now')
const fetch = require('node-fetch')
const chalk = require('chalk')
const saus = sagiri(config.nao, { results: 5 })
const translatte = require('translatte')
const ms = require('parse-ms')
const bent = require('bent')
const path = require('path')
const NanaAPI = require('nana-api')
const nana = new NanaAPI()
const ytsearch = require('yt-search')
const nhentai = require('nhentai-js')
const { API } = require('nhentai-api')
const api = new API()
const ffmpeg = require('fluent-ffmpeg')
//const youtubedl = require('youtube-dl-exec')
const { fetchJson } = require('./utils/fetcher')
const cron = require('node-cron')
const os = require('os')
const { EmojiAPI } = require("emoji-api")
const puppeteer = require('puppeteer')
const wiki = require("@dada513/wikipedia-search")
const sharp = require('sharp')
const Uwuifier = require('uwuifier');
const uwuifier = new Uwuifier();

const appRoot = require('app-root-path')
const low = require('lowdb')
const google = require('google-it')
const { stdout } = require('process');
const FileSync = require('lowdb/adapters/FileSync')
const db_group = new FileSync(appRoot+'/lib/data/group.json')
const options = { headless: true, userDataDir: "./logs/Chrome/Maker", args: ['--aggressive-cache-discard', '--disable-application-cache', '--disable-cache', '--disable-offline-load-stale-cache', '--disable-setuid-sandbox', '--disk-cache-size=0', '--ignore-certificate-errors', '--no-sandbox', '--single-process'] }
const db = low(db_group)
db.defaults({ group: []}).write()

const { 
    removeBackgroundFromImageBase64
} = require('remove.bg')

const {
    exec
} = require('child_process')

const { 
    menuId, 
    cekResi, 
    urlShortener, 
    meme, 
    translate, 
    getLocationData,
    images,
    resep,
    rugaapi,
    downloader,
    sticker,
} = require('./lib')


const {
    stickerburn,
    stickerlight
    } = require('./lib/sticker')

const { 
    msgFilter, 
    color, 
    processTime, 
    isUrl,
	download
} = require('./utils')
const { isFiltered } = require('./lib/funcions')
const { 
    uploadImages,
    custom,
    picturemis,
 } = require('./utils/fetcher')
 
const fs = require('fs-extra')
const banned = JSON.parse(fs.readFileSync('./settings/banned.json'))
const simi = JSON.parse(fs.readFileSync('./settings/simi.json'))
const ngegas = JSON.parse(fs.readFileSync('./settings/ngegas.json'))
const setting = JSON.parse(fs.readFileSync('./settings/setting.json'))
const nsfw = JSON.parse(fs.readFileSync('./settings/nsfw.json'))
const anime = JSON.parse(fs.readFileSync('./settings/anime.json'))
const _autostiker = JSON.parse(fs.readFileSync('./lib/helper/autostiker.json'))
const _afk = JSON.parse(fs.readFileSync('./lib/database/afk.json'))
const emoji = new EmojiAPI();
		
let dbcot = JSON.parse(fs.readFileSync('./lib/database/bacot.json'))
let dsay = JSON.parse(fs.readFileSync('./lib/database/say.json'))
let left = JSON.parse(fs.readFileSync('./lib/database/left.json'))
let welkom = JSON.parse(fs.readFileSync('./lib/database/welcome.json'))
let antilink = JSON.parse(fs.readFileSync('./lib/helper/antilink.json'))
let prem = JSON.parse(fs.readFileSync('./lib/database/prem.json'))
let muted = JSON.parse(fs.readFileSync('./lib/database/muted.json'))
let liststicker = JSON.parse(fs.readFileSync('./lib/database/liststiker.json'))
let listvn = JSON.parse(fs.readFileSync('./lib/database/listvn.json'))
let cogann = JSON.parse(fs.readFileSync('./lib/helper/cogan.json'))
let cecann = JSON.parse(fs.readFileSync('./lib/helper/cecan.json'))
let listimg = JSON.parse(fs.readFileSync('./lib/database/listimage.json'))
let limit = JSON.parse(fs.readFileSync('./settings/limit.json'))

let { 
    groupLimit, 
	limitCount,
    memberLimit,
    vhtearkey,
    keepSave,
    iTechApi,
    apiKey,
	banChats,
	tobzapi,
	lindowapi,
	onlydev,
	fahmiapi,
	lolhuman,
	mtc: mtcState
} = setting

const {
    apiNoBg,
	apiSimi
} = JSON.parse(fs.readFileSync('./settings/api.json'))

function formatin(duit){
    let	reverse = duit.toString().split('').reverse().join('');
    let ribuan = reverse.match(/\d{1,3}/g);
    ribuan = ribuan.join('.').split('').reverse().join('');
    return ribuan;
}

function waktu(seconds) { // TOBZ
            seconds = Number(seconds);
            var d = Math.floor(seconds / (3600 * 24));
            var h = Math.floor(seconds % (3600 * 24) / 3600);
            var m = Math.floor(seconds % 3600 / 60);
            var s = Math.floor(seconds % 60);
            var dDisplay = d > 0 ? d + (d == 1 ? " Day,":" Day,") : "";
            var hDisplay = h > 0 ? h + (h == 1 ? " Hours,":" Hours,") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " Minutes,":" Minutes,") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " Second,":" Second") : "";
            return dDisplay + hDisplay + mDisplay + sDisplay;
        }


const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const inArray = (needle, haystack) => {
    let length = haystack.length;
    for(let i = 0; i < length; i++) {
        if(haystack[i].id == needle) return i;
    }
    return false;
}


const errorurl = "https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
const errorurl2 = "https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"

const isMuted = (chatId) => {
          if(muted.includes(chatId)){
            return false
        }else{
            return true
            }
        }

        function banChat () {
            if(banChats == true) {
            return false
        }else{
            return true
            }
        }
		cron.schedule('0 0 * * *', () => {
            const reset = []
            limit = reset
            console.log('Hang tight, it\'s time to reset usage limits...')
            fs.writeFileSync('./settings/limit.json', JSON.stringify(limit))
            console.log('Success!')
        }, {
            scheduled: true,
            timezone: 'Asia/Kolkata'
        })

var oneLink = 0;
var timeStart = Date.now() / 1000
moment.tz.setDefault('Asia/Kolkata').locale('id')
module.exports = HandleMsg = async (aruga, message) => {
    
        const { type, id, self, fromMe, from, t, sender, isGroupMsg, chat, chatId, caption, isMedia, mimetype, quotedMsg, quotedMsgObj, author, mentionedJidList, } = message
        try {
		let { body } = message
        var { name, formattedTitle, gcok} = chat
        let { pushname, verifiedName, formattedName } = sender
        pushname = pushname || verifiedName || formattedName // verifiedName is the name of someone who uses a business account
        const botNumber = await aruga.getHostNumber() + '@c.us'
        const groupId = isGroupMsg ? chat.groupMetadata.id : 'https://chat.whatsapp.com/CvaNxEg54Ug8LwHIFhgUBU'
        const groupAdmins = isGroupMsg ? await aruga.getGroupAdmins(groupId) : ''
        const isGroupAdmins = groupAdmins.includes(sender.id) || false
		const isNsfw = isGroupMsg ? nsfw.includes(chat.id) : false
		const isAnime = isGroupMsg ? anime.includes(chat.id) : false
		const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        const pengirim = sender.id
        const serial = sender.id
		const user = sender.id
		const betime = moment(t * 1000).format('DD/MM/YY')
		const time = moment(t * 1000).format('DD/MM/YY HH:mm:ss')
		const timee = moment(t * 1000).format('HH:mm:ss')
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const userId = sender.id.substring(9, 13)
        const blockNumber = await aruga.getBlockedIds()
        const groupMembers = isGroupMsg ? await aruga.getGroupMembersId(groupId) : ''
        const GroupLinkDetector = antilink.includes(chatId)
        const stickermsg = message.type === 'sticker'

        // Bot Prefix
		var lvpc = Math.floor(Math.random() * 100) + 1
		const commands = caption || body || ''
        const argxx = commands.toLowerCase()
        const argss =  commands.split(' ')
		const command = commands.toLowerCase().split(' ')[0] || ''
		const prefix = /^[#]/.test(command) ? command.match(/^[!&?#$,^.,/\/\\©^]/gi) : '#'
        global.prefix
		body = (type === 'chat' && body.startsWith(prefix)) ? body : (((type === 'image' || type === 'video') && caption) && caption.startsWith(prefix)) ? caption : ''
        const arg = body.trim().substring(body.indexOf(' ') + 1)
        const args = body.trim().split(/ +/).slice(1)
        const q = args.join(' ')
        const isBlocked = blockNumber.includes(sender.id)
        const isCmd = body.startsWith(prefix)
		const tms = (Date.now() / 1000) - (timeStart);
        const cts = waktu(tms)
	    const waver = await aruga.getWAVersion()
		const irisMsgs = await fs.readFileSync('./lib/config/Utilidades/reply.txt').toString().split('\n')
		const chatBotR = irisMsgs[Math.floor(Math.random() * irisMsgs.length)].replace('%name$', `${name}`).replace('%battery%', `${lvpc}`)
		const fml = await fs.readFileSync('./lib/config/Utilidades/fml.txt').toString().split('\n')
		const fmylife = fml[Math.floor(Math.random() * fml.length)]
		const letmeHpy = await fs.readFileSync('./lib/config/Utilidades/cantadas.txt').toString().split('\n')
		const getHappyness = letmeHpy[Math.floor(Math.random() * letmeHpy.length)]
		const neverT = await fs.readFileSync('./lib/config/Utilidades/never.txt').toString().split('\n')
		const getNeverland = neverT[Math.floor(Math.random() * neverT.length)]
        const uaOverride = process.env.UserAgent
        const url = args.length !== 0 ? args[0] : ''
        const isQuotedImage = quotedMsg && quotedMsg.type === 'image'
		const isQuotedVideo = quotedMsg && quotedMsg.type === 'video'
		const isQuotedSticker = quotedMsg && quotedMsg.type === 'sticker'
		const isQuotedGif = quotedMsg && quotedMsg.mimetype === 'image/gif'
		const isQuotedAudio = quotedMsg && quotedMsg.type === 'audio'
		const isQuotedPtt = quotedMsg && quotedMsg.type === 'ptt'
		const isVideoo = type === 'video'
		const isAudio = type === 'audio'
		const isPtt = type === 'ptt'
		const isGif = mimetype === 'image/gif'
		const reason = q ? q : 'Gada'
		const gifcrop = { crop: true, square: 240, fps: 30, loop: 0, startTime: `00:00:00.0`, endTime: `00:00:10.0` }
		const gifxyz = { crop: false, square: 240, fps: 30, loop: 0, startTime: `00:00:00.0`, endTime: `00:00:10.0` }
		const StickerMetadata = { author : 'BOT', pack: 'Akeno', keepScale: true }
		const StickerMetadatacrop = { author : 'Sam', pack: 'Bot', keepScale: false }

        // [IDENTIFY]
        const ownerNumber = ["16106999265@c.us"]
		const ownerNumberr = "16106999265@c.us"
		//const noemoji = "😀" && "😃" && "😄" && "😁" && "😆" && "😅" && "😂" && "🤣" && "😊" && "😇" && "🙂" && "🙃" && "😉" && "😌" && "😍" && "🥰" && "😘" && "😗" && "😙" && "😚" && "😋" && "😛" && "😝" && "😜" && "🤪" && "🤨" && "🧐" && "🤓" && "😎" && "🥸" && "🤩" && "🥳" && "😏" && "😒" && "😞" && "😔" && "😟" && "😕" && "🙁" && "☹" && "😣" && "😖" && "😫" && "😩" && "🥺" && "😢" && "😭" && "😤" && "😠" && "😡" && "🤬" && "🤯" && "😳" && "🥵" && "🥶" && "😱" && "😨" && "😰" && "😥" && "😓" && "🤗" && "🤔" && "🤭" && "🤫" && "🤥" && "😶" && "😐" && "😑" && "😬" && "🙄" && "😯" && "😦" && "😧" && "😮" && "😲" && "🥱" && "😴" && "🤤" && "😪" && "😵" && "🤐" && "🥴" && "🤢" && "🤮" && "🤧" && "😷" && "🤒" && "🤕" && "🤑" && "🤠" && "😈" && "👿" && "👹" && "👺" && "🤡" && "💩" && "👻" && "💀" && "☠️" && "👽" && "👾" && "🤖" && "🎃" && "😺" && "😸" && "😹" && "😻" && "😼" && "😽" && "🙀" && "😿" && "😾" && "👋" && "🤚" && "🖐" && "✋" && "🖖" && "👌" && "🤌" && "🤏" && "✌" && "🤞" && "🤟" && "🤘" && "🤙" && "👈" && "👉" && "👆" && "🖕" && "👇" && "☝️" && "👍" && "👎" && "✊" && "👊" && "🤛" && "🤜" && "👏" && "🙌" && "👐" && "🤲" && "🤝" && "🙏" && "✍" && "💅" && "🤳" && "💪" && "🦾" && "🦵" && "🦿" && "🦶" && "👣" && "👂" && "🦻" && "👃" && "🫀" && "🫁" && "🧠" && "🦷" && "🦴" && "👀" && "👁" && "👅" && "👄" && "💋" && "🩸" && "🐶" && "🐱" && "🐭" && "🐹" && "🐰" && "🦊" && "🐻" && "🐼" && "🐻‍" && "❄️" && "🐨" && "🐯" && "🦁" && "🐮" && "🐷" && "🐽" && "🐸" && "🐵" && "🙈" && "🙉" && "🙊" && "🐒" && "🐔" && "🐧" && "🐦" && "🐤" && "🐣" && "🐥" && "🦆" && "🦅" && "🦉" && "🦇" && "🐺" && "🐗" && "🐴" && "🦄" && "🐝" && "🪱" && "🐛" && "🦋" && "🐌" && "🐞" && "🐜" && "🪰" && "🪲" && "🪳" && "🦟" && "🦗" && "🕷" && "🕸" && "🦂" && "🐢" && "🐍" && "🦎" && "🦖" && "🦕" && "🐙" && "🦑" && "🦐" && "🦞" && "🦀" && "🐡" && "🐠" && "🐟" && "🐬" && "🐳" && "🐋" && "🦈" && "🐊" && "🐅" && "🐆" && "🦓" && "🦍" && "🦧" && "🦣" && "🐘" && "🦛" && "🦏" && "🐪" && "🐫" && "🦒" && "🦘" && "🦬" && "🐃" && "🐂" && "🐄" && "🐎" && "🐖" && "🐏" && "🐑" && "🦙" && "🐐" && "🦌" && "🐕" && "🐩" && "🦮" && "🐕" && "‍🦺" && "🐈" && "🐈" && "‍⬛" && "🪶" && "🐓" && "🦃" && "🦤" && "🦚" && "🦜" && "🦢" && "🦩" && "🕊" && "🐇" && "🦝" && "🦨" && "🦡" && "🦫" && "🦦" && "🦥" && "🐁" && "🐀" && "🐿" && "🦔" && "🐾" && "🐉" && "🐲" && "🌵" && "🎄" && "🌲" && "🌳" && "🌴" && "🪵" && "🌱" && "🌿" && "☘" && "🍀" && "🎍" && "🪴" && "🎋" && "🍃" && "🍂" && "🍁" && "🍄" && "🐚" && "🪨" && "🌾" && "💐" && "🌷" && "🌹" && "🥀" && "🌺" && "🌸" && "🌼" && "🌻" && "🌞" && "🌝" && "🌛" && "🌜" && "🌚" && "🌕" && "🌖" && "🌗" && "🌘" && "🌑" && "🌒" && "🌓" && "🌔" && "🌙" && "🌎" && "🌍" && "🌏" && "🪐" && "💫" && "⭐️" && "🌟" && "✨" && "⚡" && "☄️" && "💥" && "🔥" && "🌪" && "🌈" && "☀" && "🌤" && "⛅️" && "🌥" && "☁" && "🌦" && "🌧" && "⛈" && "🌩" && "🌨" && "❄️" && "☃" && "⛄️" && "🌬" && "💨" && "💧" && "💦" && "☔" && "☂️" && "🌊" && "🌫" && "🍏" && "🍎" && "🍐" && "🍊" && "🍋" && "🍌" && "🍉" && "🍇" && "🍓" && "🫐" && "🍈" && "🍒" && "🍑" && "🥭" && "🍍" && "🥥" && "🥝" && "🍅" && "🍆" && "🥑" && "🥦" && "🥬" && "🥒" && "🌶" && "🫑" && "🌽" && "🥕" && "🫒" && "🧄" && "🧅" && "🥔" && "🍠" && "🥐" && "🥯" && "🍞" && "🥖" && "🥨" && "🧀" && "🥚" && "🍳" && "🧈" && "🥞" && "🧇" && "🥓" && "🥩" && "🍗" && "🍖" && "🦴" && "🌭" && "🍔" && "🍟" && "🍕" && "🫓" && "🥪" && "🥙" && "🧆" && "🌮" && "🌯" && "🫔" && "🥗" && "🥘" && "🫕" && "🥫" && "🍝" && "🍜" && "🍲" && "🍛" && "🍣" && "🍱" && "🥟" && "🦪" && "🍤" && "🍙" && "🍚" && "🍘" && "🍥" && "🥠" && "🥮" && "🍢" && "🍡" && "🍧" && "🍨" && "🍦" && "🥧" && "🧁" && "🍰" && "🎂" && "🍮" && "🍭" && "🍬" && "🍫" && "🍿" && "🍩" && "🍪" && "🌰" && "🥜" && "🍯" && "🥛" && "🍼" && "🫖" && "☕" && "🍵" && "🧃" && "🥤" && "🧋" && "🍶" && "🍺" && "🍻" && "🥂" && "🍷" && "🥃" && "🍸" && "🍹" && "🧉" && "🍾" && "🧊" && "🥄" && "🍴" && "🍽" && "🥣" && "🥡" && "🥢" && "🧂" && "🚗" && "🚕" && "🚙" && "🚌" && "🚎" && "🏎" && "🚓" && "🚑" && "🚒" && "🚐" && "🛻" && "🚚" && "🚛" && "🚜" && "🦯" && "🦽" && "🦼" && "🛴" && "🚲" && "🛵" && "🏍" && "🛺" && "🚨" && "🚔" && "🚍" && "🚘" && "🚖" && "🚡" && "🚠" && "🚟" && "🚃" && "🚋" && "🚞" && "🚝" && "🚄" && "🚅" && "🚈" && "🚂" && "🚆" && "🚇" && "🚊" && "🚉" && "✈️" && "🛫" && "🛬" && "🛩" && "💺" && "🛰" && "🚀" && "🛸" && "🚁" && "🛶" && "⛵" && "🚤" && "🛥" && "🛳" && "⛴" && "🚢" && "⚓️" && "🪝" && "⛽" && "🚧" && "🚦" && "🚥" && "🚏" && "🗺" && "🗿" && "🗽" && "🗼" && "🏰" && "🏯" && "🏟" && "🎡" && "🎢" && "🎠" && "⛲️" && "⛱" && "🏖" && "🏝" && "🏜" && "🌋" && "⛰" && "🏔" && "🗻" && "🏕" && "⛺" && "🛖" && "🏠" && "🏡" && "🏘" && "🏚" && "🏗" && "🏭" && "🏢" && "🏬" && "🏣" && "🏤" && "🏥" && "🏦" && "🏨" && "🏪" && "🏫" && "🏩" && "💒" && "🏛" && "⛪️" && "🕌" && "🕍" && "🛕" && "🕋" && "⛩" && "🛤" && "🛣" && "🗾" && "🎑" && "🏞" && "🌅" && "🌄" && "🌠" && "🎇" && "🎆" && "🌇" && "🌆" && "🏙" && "🌃" && "🌌" && "🌉" && "🌁" && "⌚" && "📱" && "📲" && "💻" && "⌨️" && "🖥" && "🖨" && "🖱" && "🖲" && "🕹" && "🗜" && "💽" && "💾" && "💿" && "📀" && "📼" && "📷" && "📸" && "📹" && "🎥" && "📽" && "🎞" && "📞" && "☎" && "📟" && "📠" && "📺" && "📻" && "🎙" && "🎚" && "🎛" && "🧭" && "⏱" && "⏲" && "⏰" && "🕰" && "⌛️" && "⏳" && "📡" && "🔋" && "🔌" && "💡" && "🔦" && "🕯" && "🪔" && "🧯" && "🛢" && "💸" && "💵" && "💴" && "💶" && "💷" && "🪙" && "💰" && "💳" && "💎" && "⚖" && "🪜" && "🧰" && "🪛" && "🔧" && "🔨" && "⚒" && "🛠" && "⛏" && "🪚" && "🔩" && "⚙️" && "🪤" && "🧱" && "⛓" && "🧲" && "🔫" && "💣" && "🧨" && "🪓" && "🔪" && "🗡" && "⚔" && "🛡" && "🚬" && "⚰️" && "🪦" && "⚱" && "🏺" && "🔮" && "📿" && "🧿" && "💈" && "⚗️" && "🔭" && "🔬" && "🕳" && "🩹" && "🩺" && "💊" && "💉" && "🩸" && "🧬" && "🦠" && "🧫" && "🧪" && "🌡" && "🧹" && "🪠" && "🧺" && "🧻" && "🚽" && "🚰" && "🚿" && "🛁" && "🛀" && "🧼" && "🪥" && "🪒" && "🧽" && "🪣" && "🧴" && "🛎" && "🔑" && "🗝" && "🚪" && "🪑" && "🛋" && "🛏" && "🛌" && "🧸" && "🪆" && "🖼" && "🪞" && "🪟" && "🛍" && "🛒" && "🎁" && "🎈" && "🎏" && "🎀" && "🪄" && "🪅" && "🎊" && "🎉" && "🎎" && "🏮" && "🎐" && "🧧" && "✉" && "📩" && "📨" && "📧" && "💌" && "📥" && "📤" && "📦" && "🏷" && "🪧" && "📪" && "📫" && "📬" && "📭" && "📮" && "📯" && "📜" && "📃" && "📄" && "📑" && "🧾" && "📊" && "📈" && "📉" && "🗒" && "🗓" && "📆" && "📅" && "🗑" && "📇" && "🗃" && "🗳" && "🗄" && "📋" && "📁" && "📂" && "🗂" && "🗞" && "📰" && "📓" && "📔" && "📒" && "📕" && "📗" && "📘" && "📙" && "📚" && "📖" && "🔖" && "🧷" && "🔗" && "📎" && "🖇" && "📐" && "📏" && "🧮" && "📌" && "📍" && "✂️" && "🖊" && "🖋" && "✒" && "🖌" && "🖍" && "📝" && "✏️" && "🔍" && "🔎" && "🔏" && "🔐" && "🔒" && "🔓" && "❤" && "🧡" && "💛" && "💚" && "💙" && "💜" && "🖤" && "🤍" && "🤎" && "💔" && "❣️" && "💕" && "💞" && "💓" && "💗" && "💖" && "💘" && "💝" && "💟" && "☮" && "✝️" && "☪" && "🕉" && "☸️" && "✡" && "🔯" && "🕎" && "☯️" && "☦" && "🛐" && "⛎" && "♈️" && "♉" && "♊️" && "♋" && "♌️" && "♍" && "♎️" && "♏" && "♐️" && "♑" && "♒️" && "♓" && "🆔" && "⚛️" && "🉑" && "☢" && "☣️" && "📴" && "📳" && "🈶" && "🈚" && "🈸" && "🈺" && "🈷️" && "✴" && "🆚" && "💮" && "🉐" && "🈴" && "🈵" && "🈹" && "🈲" && "🅰️" && "🅱" && "🆎" && "🆑" && "🅾️" && "🆘" && "❌" && "🛑" && "📛" && "🚫" && "💯" && "💢" && "🚷" && "🚯" && "🚳" && "🚱" && "🔞" && "📵" && "🚭" && "❗" && "❕" && "❓" && "❔" && "🔅" && "🔆" && "🚸" && "🔱" && "🔰" && "✅" && "🈯️" && "💹" && "❇" && "✳️" && "❎" && "🌐" && "💠" && "Ⓜ" && "🌀" && "💤" && "🏧" && "🚾" && "♿️" && "🅿" && "🛗" && "🈳" && "🈂️" && "🛂" && "🛃" && "🛄" && "🛅" && "🚹" && "🚺" && "🚼" && "⚧" && "🚻" && "🚮" && "🎦" && "📶" && "🈁" && "🔣" && "ℹ" && "🔤" && "🔡" && "🔠" && "🆖" && "🆗" && "🆙" && "🆒" && "🆕" && "🆓" && "🔟" && "🔢" && "⏏" && "⏸" && "⏯" && "⏹" && "⏺" && "⏭" && "⏮" && "⏩" && "⏪" && "⏫" && "⏬" && "◀️" && "🔼" && "🔽" && "➡" && "⬅️" && "⬆" && "⬇️" && "↗" && "↘️" && "↙" && "↖️" && "↕" && "↔️" && "↪" && "↩️" && "⤴" && "⤵️" && "🔀" && "🔁" && "🔂" && "🔄" && "🔃" && "🎵" && "🎶" && "➕" && "➖" && "➗" && "✖" && "♾" && "💲" && "💱" && "™️" && "©" && "®️" && "〰" && "➰" && "➿" && "🔚" && "🔙" && "🔛" && "🔝" && "🔜" && "✔️" && "☑" && "🔘" && "🔴" && "🟠" && "🟡" && "🟢" && "🔵" && "🟣" && "⚫️" && "⚪" && "🟤" && "🔺" && "🔻" && "🔸" && "🔹" && "🔶" && "🔷" && "🔳" && "🔲" && "▪️" && "▫" && "◾️" && "◽" && "◼️" && "◻" && "🟥" && "🟧" && "🟨" && "🟩" && "🟦" && "🟪" && "⬛️" && "⬜" && "🟫" && "🔈" && "🔇" && "🔉" && "🔊" && "🔔" && "🔕" && "📣" && "📢" && "👁‍" && "🗨" && "💬" && "💭" && "🗯" && "♠️" && "♣" && "♥️" && "♦" && "🃏" && "🎴" && "🀄️" && "🕐" && "🕑" && "🕒" && "🕓" && "🕔" && "🕕" && "🕖" && "🕗" && "🕘" && "🕙" && "🕚" && "🕛" && "🕜" && "🕝" && "🕞" && "🕟" && "🕠" && "🕡" && "🕢" && "🕣" && "🕤" && "🕥" && "🕦" && "🕧" && "✢" && "✣" && "✤" && "✥" && "✦" && "✧" && "★" && "☆" && "✯" && "✡" && "︎" && "✩" && "✪" && "✫" && "✬" && "✭" && "✮" && "✶" && "✷" && "✵" && "✸" && "✹" && "→" && "⇒" && "⟹" && "⇨" && "⇾" && "➾" && "⇢" && "☛" && "☞" && "➔" && "➜" && "➙" && "➛" && "➝" && "➞" && "♠︎" && "♣" && "︎" && "♥︎" && "♦" && "︎" && "♤" && "♧" && "♡" && "♢" && "♚" && "♛" && "♜" && "♝" && "♞" && "♟" && "♔" && "♕" && "♖" && "♗" && "♘" && "♙" && "⚀" && "⚁" && "⚂" && "⚃" && "⚄" && "⚅" && "🂠" && "⚈" && "⚉" && "⚆" && "⚇" && "𓀀" && "𓀁" && "𓀂" && "𓀃" && "𓀄" && "𓀅" && "𓀆" && "𓀇" && "𓀈" && "𓀉" && "𓀊" && "𓀋" && "𓀌" && "𓀍" && "𓀎" && "𓀏" && "𓀐" && "𓀑" && "𓀒" && "𓀓" && "𓀔" && "𓀕" && "𓀖" && "𓀗" && "𓀘" && "𓀙" && "𓀚" && "𓀛" && "𓀜" && "𓀝" && "👶" && "👧" && "🧒" && "👦" && "👩" && "🧑" && "👨" && "👩" && "‍🦱" && "👨‍🦱" && "👩‍🦰" && "🧑‍🦰" && "👨"
		//const noemoji = ("😀,😃")
		const isOwnerBot = ownerNumber.includes(pengirim)
        const isOwner = ownerNumber.includes(pengirim)
        const isOwnerB = ownerNumber.includes(pengirim)
        const isBanned = banned.includes(pengirim)
		const isPrivate = banChats == true
		const isSimi = simi.includes(chatId)
		const isNgegas = ngegas.includes(chatId)
        const isAutoStikerOn = _autostiker.includes(chat.id)
        const isImage = type === 'image'
        const isPrem = prem.includes(pengirim)
		const authorr = 'Sam'
		const pack = 'Bot'
		let fetch = require('node-fetch')
        
        //
       // if (isCmd && !isGroupMsg) { console.log(color('[EXEC]', 'magenta'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`, 'aqua'), 'from', color(`${pushname}`, 'magenta'))}
       // if (isCmd && isGroupMsg) { console.log(color('[EXEC]', 'magenta'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`, 'aqua'), 'from', color(`${pushname}`, 'magenta') , 'in', color(name || formattedTitle, 'aqua')) }
	/*if (chats.includes('Samsung Girl')) { /*Y'ALL CAN CUSTOM THIS WHATEVER YOU WANT!
			await aruga.sendPtt(from, `./media/highschool_dxd_akeno.mp3` ,id)
		}*/
      if (chats == 'Hello Bot'){
          aruga.reply(from, 'Hello my friend, Type #menu to start', id)
      }
	  if (chats == 'Hello'){
          aruga.reply(from, 'Hello my friend, Type #menu to start', id)
      }
	  if (chats == 'Hi'){
          aruga.reply(from, 'Hello my friend, Type #menu to start', id)
      }
	  if (chats == 'Akeno chan'){
		  await aruga.sendPtt(from, `./media/highschool_dxd_akeno.mp3` ,id)
	  }
	  if (chats == 'Akeno-Chan'){
		  await aruga.sendPtt(from, `./media/highschool_dxd_akeno.mp3` ,id)
	  }
	  if (chats == 'Akenochan'){
		  await aruga.sendPtt(from, `./media/highschool_dxd_akeno.mp3` ,id)
	  }
	  if (chats == 'akeno-chan'){
		  await aruga.sendPtt(from, `./media/highschool_dxd_akeno.mp3` ,id)
	  }
	  if (chats == 'akeno-Chan'){
		  await aruga.sendPtt(from, `./media/highschool_dxd_akeno.mp3` ,id)
	  }
	  if (chats == 'Akeno Moan'){
		  await aruga.sendPtt(from, `./media/moan/akeno.mp3`, id)
	  }
	  if (chats == 'akeno moan'){
		  await aruga.sendPtt(from, `./media/moan/akeno.mp3`, id)
	  }
	  if (chats == 'Akeno moan'){
		  await aruga.sendPtt(from, `./media/moan/akeno.mp3`, id)
	  }
	  if (chats == 'join0'){
          aruga.reply(from, 'If you want to invite the bot to the group please invite \nType #join grplink', id)
      }
	  if (chats == 'Join0'){
          aruga.reply(from, 'If you want to invite the bot to the group please invite \nType #join grplink', id)
      }
	  if (chats == 'bot'){
          aruga.reply(from, 'Hello my friend, Type #menu to start', id)
      }
	  if (chats == 'Bot'){
          aruga.reply(from, 'Hello my friend, Type #menu to start', id)
      }

        const mess = {
            wait: '_Please Waitt, lemme process this command_',
			prem: `Command Premium!\nHalo ${pushname} Mau menjadi user premium? ga mahal kok bang\n\n20rb = PREMIUM SAMPE KIAMAT\n\nJika anda berminat, silahkan chat pada Owner\n\nTrims~\n-George`,
            error: {
                St: `[❗] Send an image with a caption *${prefix}sticker* or an image tag that has been sent`,
                Ti: `[❗] Replay sticker with caption *${prefix} stickertoimg* or tag sticker that has been sent`,
                Qm: `[❗] An error occurred, maybe the theme is not available!`,
                Yt3: `[❗] An error occurred, maybe the theme is not available!`,
                Yt4: `[❗] An error occurred, maybe the error was caused by the system.`,
                Ig: `[❗] An error occurred, maybe because the account is private`,
                Ki: `[❗] Bot cannot take out the Admin group!`,
                Sp: `[❗] Bot cannot remove Admin`,
                Ow: `[❗] Bot cannot take out Owner`,
                Bk: `[❗] Bot can not block Owner`,
                Ad: `[❗] Cannot add target, maybe because it is private`,
                Iv: `[❗] The link you submitted is invalid!`
            }
        }
		

	if (listvn.includes(chats))
		try {
			const getvn = await fs.readFileSync('./media/audio/' +chats +'.mp3', { encoding: "base64" })
			aruga.sendAudio(from, `data:audio/mp3;base64,${getvn.toString('base64')}`, id)
		} catch {
			aruga.reply(from, 'Maaf, sistem error', id)
		}

	if (listimg.includes(chats))
		try {
			const getimg = await fs.readFileSync('./media/image/' +chats +'.jpg', { encoding: "base64" })
			await aruga.sendFile(from, `data:image/jpg;base64,${getimg.toString('base64')}`, '', '', id)
		} catch {
			aruga.reply(from, 'Maaf,sistem error', id)
		}

	if (liststicker.includes(chats))
		try {
			const getstick = await fs.readFileSync('./media/pic/sticker/' +chats +'.jpeg', { encoding: "base64" })
			await aruga.sendImageAsSticker(from, `data:image/jpeg;base64,${getstick.toString('base64')}`, { author: "BOT", pack: chats, keepScale: true})
		} catch {
			aruga.reply(from, 'Maaf, sistem error', id)
		}
	
	const addAfk = (userId, time) => {
		let obj = {id: `${userId}`, time: `${time}`, reason: `${reason}`}
		_afk.push(obj)
		fs.writeFileSync('./lib/database/afk.json', JSON.stringify(_afk))
		}

		const getAfk = (userId) => {
			let isAfk = false
			Object.keys(_afk).forEach((i) => {
				if (_afk[i].id === userId) {
				isAfk = true
				
			}
			})
			return isAfk
			}
		const bayarLimit = (serial, amount) => {
            let position = false
            Object.keys(limit).forEach((i) => {
                if (limit[i].id === serial) {
                    position = i
                }
            })
            if (position !== false) {
                limit[position].limit -= amount;
                fs.writeFileSync('./settings/limit.json', JSON.stringify(limit))
            }
        }
		const getAfkReason = (userId) => {
				let position = false
				Object.keys(_afk).forEach((i) => {
				if (_afk[i].id === userId) {
					position = i
				}
			})
			if (position !== false) {
				return _afk[position].reason
			}
		}

		const getAfkTime = (userId) => {
			let position = false
			Object.keys(_afk).forEach((i) => {
			if (_afk[i].id === userId) {
				position = i
			}
		})
		if (position !== false) {
			return _afk[position].time
		}
		}

		const getAfkId = (userId) => {
			let position = false
			Object.keys(_afk).forEach((i) => {
				if (_afk[i].id === userId) {
					position = i
				}
			})
			if (position !== false) {
				return _afk[position].id
			}
			}


	const isAfkOn = getAfk(sender.id)
		if (isGroupMsg) {
			const checking = getAfk(sender.id)
			for (let ment of mentionedJidList) {
				if(getAfk(ment)) {
					const getId = getAfkId(ment)
					const getReason = getAfkReason(getId)
					const getTime = getAfkTime(getId)
					await aruga.reply(from, `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi afk, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`, id)
					aruga.sendText(userId, `Seseorang telah tag anda bernama @{pushname}`)
					}
				}
				if (checking && !isCmd) {
					_afk.splice(sender.id, 1)
					fs.writeFileSync('./lib/database/afk.json', JSON.stringify(_afk))
					aruga.sendTextWithMentions(from, `*@${sender.id.replace(/@c.us/g, '')} SEKARANG TIDAK AFK*`)
				}
				}


        //fitur anti link
        if (isGroupMsg && GroupLinkDetector && !isGroupAdmins && !isOwner && oneLink == 0){
            try {
				if (chats.match(new RegExp(/(https:\/\/chat.whatsapp.com)/gi))) {
					oneLink = 1; const gplka = await aruga.inviteInfo(chats)
					if (gplka) {
						console.log(color('[BAN]', 'red'), color('Group link detected, removing participant...', 'yellow'))
						await aruga.reply(from, '*[GROUP LINK DETECTOR]*\nYou sent a group chat link, sorry you got kicked from the group..:( ', id).then(async () => {await aruga.removeParticipant(groupId, user);return oneLink = 0 })
					} else { console.log(color('[ALERT]', 'yellow'), color('Invalid group link received...', 'yellow'));oneLink = 0 }
				}
			} catch (error) { return oneLink = 0 }
		}
		function isLimit(userId){
                    if (isOwnerBot) {return false;}
                    let found = false;
                    for (let i of limit){
                        if(i.id === userId){
                            let limits = i.limit;
                            if (limits >= limitCount) {
                                found = true;
                                return true;
                            }else{
                                limit
                                found = true;
                                return false;
                            }
                        }
                    }
                    if (found === false){
                        let obj = {id: `${userId}`, limit:0};
                        limit.push(obj);
                        fs.writeFileSync('./settings/limit.json',JSON.stringify(limit));
                        return false;
                    }  
                }
		function limitAdd(userId) {
                    if (isOwnerBot) {return;}
                    var found = false;
                    Object.keys(limit).forEach((i) => {
                        if(limit[i].id == userId){
                            found = i
                        }
                    })
                    if (found !== false) {
                        limit[found].limit += 1;
                        fs.writeFileSync('./settings/limit.json',JSON.stringify(limit));
                    }
                }
		
        if (isAutoStikerOn && isMedia && isImage) {
            const mediaData = await decryptMedia(message, uaOverride)
            const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
            await aruga.sendImageAsSticker(from, imageBase64, { author: 'BOT', pack: 'Akeno' })
            console.log(color(`Sticker processed for ${processTime(t, moment())} seconds`, 'aqua'))
        }
		
        // Kerang Menu
        
        const estetek = [
            "https://i.ibb.co/Xk1kggV/Aesthetic-Wallpaper-for-Phone.jpg",
            "https://i.ibb.co/wBNyv8X/image.jpg",
            "https://i.ibb.co/hgcJbg7/Leaving-Facebook.jpg",
            "https://i.ibb.co/27TW3bT/Pinterest.jpg",
            "https://i.ibb.co/2MR16Ct/Image-about-vintage-in-ALittle-Bit-Of-This-And-That-by-Little-Nerdy-Gnome.jpg",
            "https://i.ibb.co/WfrzTWH/minteyroul-on-We-Heart-It.jpg",
            "https://i.ibb.co/dMpkfWT/1001-Kreative-Aesthetic-Wallpaper-Ideen-f-r-das-Handy.jpg",
            "https://i.ibb.co/cN3Br2J/red-grunge-wallpaper-dark-edgy-aesthetic-collage-background-trendy-cool-dark-red-iphone-wallpaper.jpg",
            "https://i.ibb.co/c8QMXZv/ee16de425985d4a1b628dddc1461b546.jpg"
        ]
		
		const menupict = [
			"https://wallpapercave.com/wp/wp9286552.jpg",
			"https://wallpapercave.com/wp/wp9286545.jpg",
			"https://wallpapercave.com/wp/wp9286547.jpg",
			"https://wallpapercave.com/wp/wp9286551.jpg",
			"https://preview.redd.it/4l0m59e128471.jpg?width=640&crop=smart&auto=webp&s=c5c364f9413efaa9a803610c67214063a55e596a",
			"https://preview.redd.it/0r9hfxsi0m871.png?width=640&crop=smart&auto=webp&s=a957bfe35896e318fe4250ee379e1d1837f60f5d111",
			"https://external-preview.redd.it/im2irRsCyt2BRbOEXGwUh3cR4LfbpxTiWAYiTzuiFTM.jpg?width=640&crop=smart&auto=webp&s=b4988d95ed6967e26dc5021f1035d5edf15f0af5",
			]
		const slapp = [
		"https://media.tenor.com/videos/b152ec391c6e17d37e6b08a6d46cc739/mp4",
		"https://media.tenor.com/videos/fe9e4f504cbcaf0fb68dd473e2045b93/mp4",
		"https://media.tenor.com/videos/7f03c566f74f04135041ac5caeb79ece/mp4",
		"https://media.tenor.com/videos/511cef1477c291f9f5fc64c492b15bc7/mp4",
		"https://media.tenor.com/videos/dc410154c205d1e8ba0c7d43665e33f3/mp4",
		"https://media.tenor.com/videos/730304c607701fa786ea997799c713dd/mp4",
		"https://media.tenor.com/videos/8ccaa9b7aadcae3bb8ae27651d46f778/mp4",
		"https://media.tenor.com/videos/828c23a00ee85fe393f5f3d70da8edca/mp4",
		"https://media.tenor.com/videos/94aa38a1531ef29eb0ca61b5235cc2b4/mp4",
		"https://media.tenor.com/videos/1276b7725efdf818038018dcd2a03468/mp4",
		"https://media.tenor.com/videos/c5c1ed9fda9bc3ce0f1a2520fc115fad/mp4",
		"https://media.tenor.com/videos/9339e2b383bf3afcf15e1b714a06d701/mp4",
		"https://media.tenor.com/videos/b2eaeaf80a74883213dcd0530b1971e4/mp4",
		"https://media.tenor.com/videos/20542fd64d7b62864248547a01d9a2f9/mp4",
		"https://media.tenor.com/videos/2363c32a99480c53eb38b13d36136dcd/mp4",
		"https://media.tenor.com/videos/cf35dc29c0ed7effba8919f487f0dd30/mp4",
		"https://media.tenor.com/videos/5071bcd24714b6b7909e1d28c92acf31/mp4",
		"https://media.tenor.com/videos/ec19125c1031f7ecb47f402077f7b639/mp4",
		"https://media.tenor.com/videos/a86daa94d8c7250cf58c394efce88963/mp4",
		"https://media.tenor.com/videos/cdc4ce47f7beaca17355f1636247d12a/mp4",
		"https://media.tenor.com/videos/a699cae808a3313bfb6d949c15c8627f/mp4",
		"https://media.tenor.com/videos/2053682b19e96d8ef112f9688d793f7a/mp4",
		"https://media.tenor.com/videos/d7c978ccd867855d09d315050ccf5075/mp4",
		"https://media.tenor.com/videos/d8d072a73606c03549147a1c820dfcf7/mp4",
		"https://media.tenor.com/videos/61ddddbc53f89fe7063be76482733a4f/mp4",
		]
		const winkk = [
		"https://media.tenor.com/videos/2078d5c28ee6e3b00162e36fcf87f635/mp4",
		"https://media.tenor.com/videos/3f7f357ceaba660019ce2b3e29b02360/mp4",
		"https://media.tenor.com/videos/b8792694a861020cd57337b2fe8884fc/mp4",
		"https://media.tenor.com/videos/9aa648a8e942bc07190136bb33902e28/mp4",
		"https://media.tenor.com/videos/5adb7eecf98f659bcd15fa43c4c225e8/mp4",
		"https://media.tenor.com/videos/3de815a6f9b2fc78178e1a4179a933c0/mp4",
		"https://media.tenor.com/videos/da1b55f63d517a2ccbcb20243e3f366b/mp4",
		"https://media.tenor.com/videos/69e214f2b1e6e7b112b02bdedc07012e/mp4",
		"https://media.tenor.com/videos/833ea184ac3125e30812c5679595599a/mp4",
		"https://media.tenor.com/videos/2cdfe92e4e106279cdf3cd2f9e6fbd1b/mp4",
		"https://media.tenor.com/videos/fac678c9e3aab9d1a223c1aac5ff5427/mp4",
		"https://media.tenor.com/videos/d8bf83fd4c12e2c19bd23447bef30bd6/mp4",
		"https://media.tenor.com/videos/d119f28dab86fcdaf32dee19f2d1ef28/mp4",
		"https://media.tenor.com/videos/952e04adf9fa7f38b4f3f94d62d02d4c/mp4",
		"https://media.tenor.com/videos/1204b0c803758519ff43fee047ccac5d/mp4",
		"https://media.tenor.com/videos/d1a3ffc68ee57b1e72eee694d575f9e0/mp4",
		"https://media.tenor.com/videos/f5e1263e00f8784e847fbdbdefc3815a/mp4",
		"https://media.tenor.com/videos/5662d9bfc5a329bdb5991d3a1026e9df/mp4",
		"https://media.tenor.com/videos/4411aeb62f689e2765f1c9c6198cb119/mp4",
		"https://media.tenor.com/videos/9f9adb887f409b112a1959bf7355b7b8/mp4",
		"https://media.tenor.com/videos/163c8578642a0469c8ffb875464bd45f/mp4",
		"https://media.tenor.com/videos/65b73cb41678ba470433fc307db80e11/mp4",
		"https://media.tenor.com/videos/0145f1f24e4a84af2f62782d57cd75b8/mp4",
		"https://media.tenor.com/videos/d7fe04d6a3f0d46e4253a09d674dfe0f/mp4",
		"https://media.tenor.com/videos/3a82626aeebc413ed7fba176fb84f3cb/mp4",
		"https://media.tenor.com/videos/eec925b6b217b6603d80ae1ff363a386/mp4",
		"https://media.tenor.com/videos/59562eaa8c2541a15035074f510ad95c/mp4",
		]
		const kissgifs = [
			"https://media.tenor.com/videos/9e33185eb7d74a36a26a0904ab967ee3/mp4",
			"https://media.tenor.com/videos/9f6ba14190af5d5f928237914b12ce70/mp4",
			"https://media.tenor.com/videos/7177851439ceb78b4395f227947741ce/mp4",
			"https://media.tenor.com/videos/f46af3fba78d1141fff525755993a6df/mp4",
			"https://media.tenor.com/videos/e60006c1bd173a670925d5ed784fa0de/mp4",
			"https://media.tenor.com/videos/c6aef19bf90f361ae2690a20e28bbf5e/mp4",
			"https://media.tenor.com/videos/a7efc896d37e1a411fece8dc7098cd24/mp4",
			"https://media.tenor.com/videos/121c658cd7033d089e23930457736cbe/mp4",
			"https://media.tenor.com/videos/0c8e2d338cbea64b342b041e68c42600/mp4",
			"https://media.tenor.com/videos/7177851439ceb78b4395f227947741ce/mp4",
			"https://media.tenor.com/videos/96dead011db707609d90f67f476254db/mp4",
			"https://media.tenor.com/videos/1b31eeae4c4ae4670184d0357fcc27dd/mp4",
			"https://media.tenor.com/videos/8f4c62f0918263dcd2c1007d2bdc1947/mp4",
			"https://media.tenor.com/videos/257669e0f2f93852fc6a1c2bcafdeec1/mp4",
			"https://media.tenor.com/videos/4a96dfe6156bc3af8ff800a475d39ee0/mp4",
			"https://media.tenor.com/videos/b128eb5b138f8c1c1c3cea19096c363d/mp4",
			"https://media.tenor.com/videos/7177851439ceb78b4395f227947741ce/mp4",
			"https://media.tenor.com/videos/f3dafa0acd984f33f475d948becfcaf1/mp4",
			"https://media.tenor.com/videos/dc5b85711596151ce1548f9e63943f09/mp4",
			"https://media.tenor.com/videos/7b0d7d7aa4836a97fe4993538ced11fc/mp4",
			"https://media.tenor.com/videos/bc6f0b70cd892e7fadaf57fd55f6de57/mp4",
			"https://media.tenor.com/videos/3e83b0a5ce9473dcc8130d61a217dd2f/mp4",
			"https://media.tenor.com/videos/23a816f3bce4c177dca70a74a07ecfd6/mp4",
			"https://media.tenor.com/videos/7177851439ceb78b4395f227947741ce/mp4",
			"https://media.tenor.com/videos/4088cb42458f39ced59c22f3ed8a3848/mp4",
			"https://media.tenor.com/videos/46a0f94b95160e313921d89e92004a30/mp4",
			"https://media.tenor.com/videos/678f335edf901a9fc1574e6a6d5ebdae/mp4",
			"https://media.tenor.com/videos/9f9be8d6fe0841110cb361a70d05cfa5/mp4",
			"https://media.tenor.com/videos/a652830893fb397048eed22ae9298211/mp4",
			"https://media.tenor.com/videos/7177851439ceb78b4395f227947741ce/mp4",
			"https://media.tenor.com/videos/c3f44c20daeedf2c6d6f5beb69a412a5/mp4",
			"https://media.tenor.com/videos/305e3101c53158fcce61e93714d4399b/mp4",
			"https://media.tenor.com/videos/ed55818c4956d6e273d2133d389a2605/mp4",
			"https://media.tenor.com/videos/be1575046d255e98503bac21c5783456/mp4",
			"https://media.tenor.com/videos/7177851439ceb78b4395f227947741ce/mp4",
			"https://media.tenor.com/videos/7177851439ceb78b4395f227947741ce/mp4",
			"https://media.tenor.com/videos/dd6ec161b0116d5e9feeaa491dba04dc/mp4",
			"https://media.tenor.com/videos/3eb45398b7b48243be2ad7ad4dc2e671/mp4",
			]
		const hugg = [
		"https://media.tenor.com/videos/c51ae035cf3fb9c8bdf32ce7406bdc83/mp4",
		"https://media.tenor.com/videos/b56d7b1b55901bf7a07888c4d26a5469/mp4",
		"https://media.tenor.com/videos/e8c1a2af698f9a5d1fff908292f2d63e/mp4",
		"https://media.tenor.com/videos/721efa11f36c1ebd1ec5da6377a573f4/mp4",
		"https://media.tenor.com/videos/94390763453649647a8da432ec77017c/mp4",
		"https://media.tenor.com/videos/dd83c7878d827da4bf04c2794dab1ab0/mp4",
		"https://media.tenor.com/videos/161dd2416944be9249bcd0a6d69e0463/mp4",
		"https://media.tenor.com/videos/84ce554aa07736839bffcb4ca9a64a31/mp4",
		"https://media.tenor.com/videos/da75756074fb406116995a9336c500f1/mp4",
		"https://media.tenor.com/videos/5ea39035dab13a49374e94d094b300a6/mp4",
		"https://media.tenor.com/videos/94390763453649647a8da432ec77017c/mp4",
		"https://media.tenor.com/videos/39d1fdd09ec6ad84ddda5355a3797a23/mp4",
		"https://media.tenor.com/videos/453eb96c6cc0619df1523103f937f4a8/mp4",
		"https://media.tenor.com/videos/a564967795f12ee666324326d122b85a/mp4",
		"https://media.tenor.com/videos/2804950e1705e8bac7595b2d64c4fee8/mp4",
		"https://media.tenor.com/videos/4fcb3c3419bfede809e62ec5185c66da/mp4",
		"https://media.tenor.com/videos/1de35289e74b16740f3dc33c957a5eb0/mp4",
		"https://media.tenor.com/videos/627188d44b008b110bad7f4079d84f7a/mp4",
		"https://media.tenor.com/videos/94390763453649647a8da432ec77017c/mp4",
		"https://media.tenor.com/videos/eeefe8821418de17479e0e131dae4ab5/mp4",
		"https://media.tenor.com/videos/727013a0f99f2def5259898a35f5007d/mp4",
		"https://media.tenor.com/videos/218b56301654fdd93ea448c2a97053e4/mp4",
		"https://media.tenor.com/videos/94390763453649647a8da432ec77017c/mp4",
		]
		
		const handd = [
		"https://media.tenor.com/videos/74440a81108949c0a22f686fa6bb5df3/mp4",
		"https://media.tenor.com/videos/e7632ab88034e434c4ee95d5c31811c1/mp4",
		"https://media.tenor.com/videos/b1f57386a6ff0f21d5ece50b51f98cc0/mp4",
		"https://media.tenor.com/videos/72a11c670a29ddc3b434c8ac7f796f33/mp4",
		"https://media.tenor.com/videos/443a8b9f65dccd2388888037e7ce6f4f/mp4",
		"https://media.tenor.com/videos/b9aff1bf620564c84ad28dc3fd67f7c8/mp4",
		"https://media.tenor.com/videos/8bd00c910c8e2df038e5c8fbe25f5274/mp4",
		"https://media.tenor.com/videos/8b096140eed8f582d833606b59c68055/mp4",
		"https://media.tenor.com/videos/9ed9ec0bc11c698f64628c43a0cdfad3/mp4",
		"https://media.tenor.com/videos/758fbc3b2623efdfeba5186b8b1bcaa2/mp4",
		"https://media.tenor.com/videos/4514db0ba5e7f6da2126f492529d48af/mp4",
		"https://media.tenor.com/videos/418901908f08bdd3b1f87e53467ad3f6/mp4",
		"https://media.tenor.com/videos/286f8c6bdb0b44aca6a2f809d83ecc0f/mp4",
		]
		const spankk = [
		"https://media.tenor.com/videos/324d186ec5a7e2ffe39cfd1d32cc1686/mp4",
		"https://media.tenor.com/videos/500155e7b31bd9e38129cccd87386df5/mp4",
		"https://media.tenor.com/videos/0efd80cf96fc7dff7e0524eb9e2ed6ed/mp4",
		"https://media.tenor.com/videos/4bece856bad5f9369993699ec1d387eb/mp4",
		"https://media.tenor.com/videos/542650563a41d22696c608d788a476a9/mp4",
		"https://media.tenor.com/videos/ca94a0ef3180e154320c40c95a8e28bf/mp4",
		"https://media.tenor.com/videos/03b08cd50a3e2a127cfed4bb80050cf9/mp4",
		"https://media.tenor.com/videos/bca78a840f49fef41a52bc864890a34a/mp4",
]
		const fingerr = [
		"https://media.tenor.com/videos/7b39827b460e7c9397b0e30b3316997f/mp4",
		"https://media.tenor.com/videos/b3361d23b01e04be195883a85073c933/mp4",
		"https://media.tenor.com/videos/bf78724f4882e5c23c3a77892ca7a4d3/mp4",
		"https://media.tenor.com/videos/ad79273c0127edc914975df82608ce9f/mp4",
		"https://media.tenor.com/videos/72f2cb08fbbed1f769402dcc8e8357ce/mp4",
		"https://media.tenor.com/videos/121c332a75f1cda889be011218308436/mp4",
		"https://media.tenor.com/videos/35286dc9ce71dd7004fd73db0df21af3/mp4",
		"https://media.tenor.com/videos/b83d440ceeb56ad5ecd43cb374b5d8ff/mp4",
		"https://media.tenor.com/videos/02cfe94dfa7075ad209ad7d28be965f3/mp4",
		"https://media.tenor.com/videos/73d129d7026c0caf584bca447f6426d9/mp4",
		"https://media.tenor.com/videos/7b8f6d3e436fb56fe3d3194f07027902/mp4",
		]
		const killl = [
		"https://i.imgur.com/umCms9c.mp4",
		"https://i.imgur.com/3uMLnPC.mp4",
		"https://i.imgur.com/Pobe6Lo.mp4",
		"https://i.imgur.com/HshuBMF.mp4",
		"https://i.imgur.com/b7cFfKJ.mp4",
		"https://media.tenor.com/videos/a3a0088c8a0d0298114f8a9e01565e1d/mp4",
		"https://media.tenor.com/videos/0550b5d0c8b25a9bf92485bfbae684bc/mp4",
		"https://media.tenor.com/videos/162aef075774b7b95afeef205c0455ec/mp4",
		"https://media.tenor.com/videos/91ad0e34a16c16a14e96188c4fad7978/mp4",
		]
		const kickk = [
		"https://i.imgur.com/LM6XW0R.mp4",
		"https://i.imgur.com/2Yd3xFg.mp4",
		"https://media.tenor.com/videos/018c3e96bdb941c7e7979f8e46462b85/mp4",
		"https://media.tenor.com/videos/15132bf04ed603bc9c2602676a56a322/mp4",
		"https://media.tenor.com/videos/d3407265bb71435d06cf0bc953e3c8b3/mp4",
		"https://media.tenor.com/videos/b778e0970cdd25af5f74b7fb7f45a181/mp4",
		"https://media.tenor.com/videos/1de2393c51208f1e5c70b6d85e2c3068/mp4",
		"https://media.tenor.com/videos/4d38bdf6caa1e26bafcd34532423f9b3/mp4",
		"https://media.tenor.com/videos/d3e03e5491de759dbd63dc7cc9fbf053/mp4",
		"https://media.tenor.com/videos/b15ed8e1cccc70429bbeba14a8e76f2a/mp4",
		"https://media.tenor.com/videos/28149728047ef7f3a1def7c14ecd14aa/mp4",
		"https://media.tenor.com/videos/1a8822f89071c63bb223ed69949ead2e/mp4",
		"https://media.tenor.com/videos/2f95af1e70630f00ca0b9e109949088c/mp4",
		"https://media.tenor.com/videos/ec1a4b2477dc1bb019c2106b89a1c22f/mp4",
		"https://media.tenor.com/videos/56960789ccc1d803e216c0690d718741/mp4",
		]
		const akenohelp = [
		"https://media.tenor.com/videos/ad74778e38cd8409cbacb5844b9cc508/mp4",
		"https://c.tenor.com/cGZKGRRjiRYAAAPo/akeno-akeno-himejima.mp4",
		]
	const apakah = [
            'Ya',
            'Tidak',
            'Coba Ulangi'
            ]

        const bisakah = [
            'Bisa',
            'Tidak Bisa',
            'Coba Ulangi'
            ]

        const kapan = [
            '1 Minggu lagi',
            '1 Bulan lagi',
            '1 Tahun lagi',
            '100 tahun lagi',
            'gatau',
            '2030'
            ]

        const rate = [
            '100%',
            '95%',
            '90%',
            '85%',
            '80%',
            '75%',
            '70%',
            '65%',
            '60%',
            '55%',
            '50%',
            '45%',
            '40%',
            '35%',
            '30%',
            '25%',
            '20%',
            '15%',
            '10%',
            '5%'
            ]
		
		const Zee5 = [
             'sirasao.akhil@gmail.com:@khil12345 | Plan Name = Goodbye 2020: 50% OFF | Exipry Date = 2021-01-11 | Auto Renwal = true @Config By @Area51officer',
'deepak.aggarwal.84@gmail.com:zxcvbnm | Plan Name = Premium | Exipry Date = 2022-03-31 | Auto Renwal = false @Config By @Area51officer',
'avanti.nimkar@yahoo.co.in:Naisha0510 | Plan Name = Annual Plan | Exipry Date = 2030-12-31 | Auto Renwal = true @Config By @Area51officer',
'pravinkumar1962@gmail.com:bondos77 | Plan Name = Annual Plan | Exipry Date = 2030-12-31 | Auto Renwal = true @Config By @Area51officer',
'rkundwani@gmail.com:Merc8959! | Plan Name = Goodbye 2020: 50% OFF | Exipry Date = 2021-01-11 | Auto Renwal = true @Config By @Area51officer',
'krama6985@gmail.com:123456 | Plan Name = Premium | Exipry Date = 2022-03-31 | Auto Renwal = false @Config By @Area51officer',
'mandeep_10625@yahoo.ca:gurdeep06 | Plan Name = Annual Plan | Exipry Date = 2021-06-03 | Auto Renwal = true @Config By @Area51officer',
'vaibhavsingh@live.in:vabawvrocks | Plan Name = Premium | Exipry Date = 2022-03-31 | Auto Renwal = false @Config By @Area51officer',
'zarine.damania@gmail.com:danesh@1993 | Plan Name = Premium | Exipry Date = 2022-03-31 | Auto Renwal = false @Config By @Area51officer',
'reemasanjay@gmail.com:mari2611 | Plan Name = Premium | Exipry Date = 2021-03-31 | Auto Renwal = false @Config By @Area51officer',
'anirudhbaliga96@gmail.com:anirudh1516 | Plan Name = Premium | Exipry Date = 2022-03-31 | Auto Renwal = false @Config By @Area51officer',
'geo.ashish@gmail.com:poojashu28 | Plan Name = Premium | Exipry Date = 2021-02-11 | Auto Renwal = false @Config By @Area51officer',
'amitabh.bhadra@gmail.com:Pnnfrn24 | Plan Name = Premium | Exipry Date = 2021-03-31 | Auto Renwal = false @Config By @Area51officer',
'shravanpn7@gmail.com:papanaidu | Plan Name = Premium | Exipry Date = 2022-03-31 | Auto Renwal = false @Config By @Area51officer',
'chaity_nayeema@yahoo.com:Nayeema84 | Plan Name = Monthly Plan | Exipry Date = 2022-12-31 | Auto Renwal = true @Config By @Area51officer'
            ]		
			

	// Filter Banned People
	if (isBanned && isCmd) {
		console.log(color('[BAN]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`, 'aqua'), 'from', color(pushname, 'magenta'), 'in', color(name || formattedTitle, 'aqua')) 
	}
	if (isBanned && isCmd) {
		return aruga.reply(from, `Sorry *_${pushname}_* You have been banned from using the Bot command!`, id)
	}
	
	// Filter Blocked People
	if (isBlocked) {
			console.log(color('[BLOCK]', 'red'), color(moment(t * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`${chats} [${args.length}]`, 'aqua'), 'from', color(pushname, 'magenta'), 'in', color(name || formattedTitle, 'aqua')) 
	}
		if (!isFiltered(from) && !isMedia && !isCmd) { try { if (chats.includes(`@${botNumber.replace('@c.us', '')}`)) { await aruga.reply(from, chatBotR, id) } } catch (error) { return } }
	// Anti spam
        if (isCmd && msgFilter.isFiltered(from) && !isGroupMsg) return console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(`${pushname}`, 'magenta'))
        if (isCmd && msgFilter.isFiltered(from) && isGroupMsg) return console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(`${pushname}`, 'magenta'), 'in', color(name || formattedTitle))

        // Log
        if (isCmd && !isGroupMsg) {
            console.log(color('[EXEC]', 'magenta'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(`${pushname}`, 'magenta'))
            await aruga.sendSeen(from)
        }
        if (isCmd && isGroupMsg) {
            console.log(color('[EXEC]', 'magenta'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(`${pushname}`, 'magenta'), 'in', color(name || formattedTitle))
            await aruga.sendSeen(from)
        }
        
        // Anti spam
        if (isCmd && !isOwnerB) msgFilter.addFilter(from)

	
		if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwnerB || isPrem ) {
        switch (command) {
        // Menu and TnC
		case prefix+'sticker':
		case prefix+'stiker':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				const sharpre = async (mimetype, isCircle, noCut, mediaData) => { 
				await sharp(mediaData).resize({ width: 512, height: 512, fit: 'fill' }).toBuffer().then(async (resizedImageBuffer) => { 
				await aruga.sendImageAsSticker(from, `data:${mimetype};base64,${resizedImageBuffer.toString('base64')}`, { author: authorr, pack: pack, keepScale: noCut, circle: isCircle })
				console.log(color(`Sticker processed for ${processTime(t, moment())} seconds`, 'aqua'))
				}) 
				}
				if (isMedia && isImage || isQuotedImage) {
					const mediaMessage = isQuotedImage ? quotedMsg : message
					const messageMimetype = isQuotedImage ? quotedMsg.mimetype : mimetype
					const mediaData = await decryptMedia(mediaMessage, uaOverride)
					if (q.includes('-circle')) { var isCircle = true } else { var isCircle = false }
					if (q.includes('-crop')) { var noCut = false } else { var noCut = true }
					if (q.includes('-fill')) { return await sharpre(messageMimetype, isCircle, noCut, mediaData) }
					await aruga.sendImageAsSticker(from, `data:${messageMimetype};base64,${mediaData.toString('base64')}`, { author: authorr, pack: pack , keepScale: noCut, circle: isCircle })
					limitAdd(serial)
					console.log(color(`Sticker processed for ${processTime(t, moment())} seconds`, 'aqua'))
				} else if (isMedia && isVideoo || isGif || isQuotedVideo || isQuotedGif) {
					await aruga.reply(from, mess.wait, id)
					const encryptMedia = isQuotedGif || isQuotedVideo ? quotedMsg : message
					const mediaData = await decryptMedia(encryptMedia, uaOverride)
					await aruga.sendMp4AsSticker(from, mediaData, null, { stickerMetadata: true, pack: pack, author: authorr, fps: 10, crop: false, loop: 0 }).catch(async () => { await aruga.reply(from, `This GIF when it became too heavy to send, try to send a smaller version.`, id) })
					limitAdd(serial)
					console.log(color(`Sticker processed for ${processTime(t, moment())} seconds`, 'aqua'))
				} else if (args.length == 1) {
					if (isUrl(url)) {
						await aruga.reply(from, mess.wait, id)
						if (q.includes('-circle')) { var isCircle = true } else { var isCircle = false }
						if (q.includes('-cut')) { var noCut = false } else { var noCut = true }
						await aruga.sendStickerfromUrl(from, url, { method: 'get' }, { author: authorr, pack: pack, keepScale: noCut, circle: isCircle })
						limitAdd(serial)
						console.log(color(`Sticker processed for ${processTime(t, moment())} seconds`, 'aqua'))
					} else return await aruga.reply(from, `Etoo, you have inserted a link? I can't see her, with or without glasses.`, id)
				}  else return await aruga.reply(from, `Make sure you only use this on photos/gifs/videos`, id)
				break
		case prefix+'send':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0 || !isUrl(url)) return await aruga.reply(from, `Etoo, you have inserted a link? I can't see her, with or without glasses.`, id)
				await aruga.sendFileFromUrl(from, url, '', '', id).catch(async () => { await aruga.reply(from, `Command of that kind can be used only for images, another media can be a problem.`, id) })
				limitAdd(serial)
				break
		case prefix+'mute':
		if (!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
		if (!isOwnerB) return aruga.reply(from, 'This feature can only be used by Owner Bot!', id)
		if (isGroupMsg) {
			isMuted(chatId) == true
			if (muted.includes(chatId)) return aruga.reply(from, 'This group has been muted before', id)
			muted.push(chatId)
			fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
			aruga.reply(from, 'Bot has been muted in this group!', id)
          }else{
             muted.push(chatId)
             fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
             aruga.reply(from, 'Bot has been muted in this group!', id)
            }
			break
		case prefix+'unmute':
		if (!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
		if (!isOwnerB) return aruga.reply(from, 'This feature can only be used by Owner Bot!', id)
		if (isGroupMsg) {
			isMuted(chatId) == false
			let indexsz = muted.indexOf(chatId);
			muted.splice(indexsz,1)
			fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
            aruga.reply(from, 'The bot has been unmuted in this group!', id)
		} else {
			let indexsz = muted.indexOf(chatId);
            muted.splice(indexsz,1)
            fs.writeFileSync('./lib/database/muted.json', JSON.stringify(muted, null, 2))
            aruga.reply(from, 'The bot has been unmuted in this group!', id) 
		}
		break
		case prefix+'rules':
            case prefix+'rule':
                const mnaadm = menuId.rules(prefix)
			aruga.reply(from, mnaadm, id, true) 
            break
		case prefix+'private':
			if (!isOwnerB) return aruga.reply(from, 'This command can only be used by the Bot owner!', id)
			if (setting.banChats === true) return
            setting.banChats = true
            banChats = true
            fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
            aruga.reply(from, 'Private Commands has been disable', id)
            break
		case prefix+'public':
			if (!isOwnerB) return aruga.reply(from, 'This command can only be used by the Bot owner!', id)
			if (setting.banChats === false) return
			setting.banChats = false
			banChats = false
			fs.writeFileSync('./lib/database/setting.json', JSON.stringify(setting, null, 2))
			aruga.reply(from, 'Public commands has been enable', id)
			break
        case prefix+'speed':
            case prefix+'ping':
                const loadedMsg = await aruga.getAmountOfLoadedMessages()
                const chatIds = await aruga.getAllChatIds()
                const groups = await aruga.getAllGroups()
                const timestamp = speed();
                const latensi = speed() - timestamp
                const charged = await aruga.getIsPlugged();
                const device = await aruga.getMe() 
                const deviceinfo = `- Battery Level : ${device.battery}%\n  ├ Is Charging : ${charged}\n  └ 24 Hours Online : ${device.is24h}\n  ├ OS Version : ${device.phone.os_version}\n  └ Build Number : ${device.phone.os_build_number}\n\n _*Time :*_ ${moment(t * 1000).format('HH:mm:ss')}`
                aruga.sendText(from, `*Device Info*\n${deviceinfo}\n\nPenggunaan RAM: *${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*\nCPU: *${os.cpus().length}*\n\nStatus :\n- *${loadedMsg}* Loaded Messages\n- *${groups.length}* Group Chats\n- *${chatIds.length - groups.length}* Personal Chats\n- *${chatIds.length}* Total Chats\n\nSpeed: ${latensi.toFixed(4)} _Second_`)
                break
                case prefix+'setpic':
                    if (!isOwnerB) return aruga.reply(from, `This command can only be used by Owner Bot!`, id)
                    if (isMedia) {
                        const mediaData = await decryptMedia(message)
                        const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                        await aruga.setProfilePic(imageBase64)
                        aruga.sendTextWithMentions(from, `Makasih @${serial} Foto Profilenye..`)
                    } else if (quotedMsg && quotedMsg.type == 'image') {
                        const mediaData = await decryptMedia(quotedMsg)
                        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await aruga.setProfilePic(imageBase64)
                        aruga.sendTextWithMentions(from, `Makasih @${serial} Foto Profilenya 😘`, id)
                    } else {
                        aruga.reply(from, `Wrong Format!\n⚠️ Please Send Pictures With ${prefix}setpic`, id)
                    }
                    break
        case prefix+'getprofilepic00000000000000000000000000000':
            if (!isGroupMsg) return aruga.reply(from, `This feature can only be used in groups`, id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            const texnugm = body.slice(8)
            const getnomber =  await aruga.checkNumberStatus(texnugm)
            const useriq = getnomber.id.replace('@','') + '@c.us'
                try {
                    var jnck = await aruga.getProfilePicFromServer(useriq)
    
                    aruga.sendFileFromUrl(from, jnck, `awok.jpg` , `here it is...`)
					limitAdd(serial)
                } catch (err) {
                    aruga.reply(from, `Tidak Ada Foto Profile!`, id)
                }
				
            break
        case prefix+'privacy':
		case prefix+'tnc':
			const menus = menuId.textTnC()
            await aruga.reply(from, menus, id)
            break
        case prefix+'help':
            const bots = `Hello, this is Akeno Bot, to find out the commands menu, type *${prefix}menu* , *${prefix}p*`
            await aruga.reply(from, bots , id)
            break
		case prefix+'rbts00000000':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
		aruga.reply(from, mess.wait, id)
		aruga.sendFileFromUrl(from, `https://lindow-api.herokuapp.com/api/bts?apikey=${lindowapi}`, 'img.jpg', 'nehh', id)
		limitAdd(serial)
		break
		case prefix+'rvidanime':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
		if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
		aruga.reply(from, mess.wait, id)
		aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/anime/storyanime?apikey=1QM9kTIM1WUkJ57`, 'anime.mp4', '', id)
		limitAdd(serial)
		break
		case prefix+'rexo00000000000':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
		aruga.reply(from, mess.wait, id)
		aruga.sendFileFromUrl(from, `https://lindow-api.herokuapp.com/api/exo?apikey=${lindowapi}`, 'img.jpg', 'nehh', id)
		limitAdd(serial)
		break
		case prefix+'rblackpink00000000000000':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
		aruga.reply(from, mess.wait, id)
		aruga.sendFileFromUrl(from, `https://lindow-api.herokuapp.com/api/blackpink?apikey=${lindowapi}`, 'img.jpg', 'nehh', id)
		limitAdd(serial)
		break
		case prefix+'rcitacita00000000000000000':
		aruga.reply(from, mess.wait, id)
		await aruga.sendFileFromUrl(from, `https://lindow-api.herokuapp.com/api/citacita?&apikey=${lindowapi}`, 'citacita.mp3', '', id)
		break
		case prefix+'ceritahorror00000000000000':
		case prefix+'ceritahoror00000000000000':
		aruga.reply(from, mess.wait, id)
		axios.get(`http://lolhuman.herokuapp.com/api/ceritahoror?apikey=${lolhuman}`)
		.then(async(res) => {
			const becapt = `*Judul:* ${res.data.result.title}\n*Desk:* ${res.data.result.desc}\n*Cerita:* ${res.data.result.story}`
			await aruga.sendFileFromUrl(from, res.data.result.thumbnail, 'thumb.jpg', becapt, id)
			.catch(() => {
				aruga.reply(from, 'Server sedang maintenance atau apikey sudah limit', id)
			})
		})
		.catch(err => {
			console.log(err)
		})
		break
		case prefix+'runtime':
		aruga.reply(from, `*Bot has been active for ${cts}*`, id)
		break
		case prefix+'eval':
         case prefix+'ev':
                if (!isOwner) return await aruga.reply(from, 'Perintah ini hanya bisa digunakan oleh Owner!', id)
                if (!q) return await aruga.reply(from, 'Masukkan kode JS!', id)
                try {
                    let evaled = await eval(q)
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                } catch (err) {
                    console.error(err)
                }
            break
        case prefix+'p':
		case prefix+'start':
        case prefix+'menu':
			const jame = moment(t * 1000).format('HH:mm:ss')
			const pictrand = menupict[Math.floor(Math.random() * (menupict.length))]
			const mnu = menuId.help(prefix, pushname, jame, betime, blockNumber, prem, banned, cts, waver)
			aruga.sendFileFromUrl(from, pictrand, 'image.jpg', mnu, id, true)
			break
        case prefix+'menuadmin':
            if (!isGroupMsg) return aruga.reply(from, 'Sorry, this command can only be used within groups!', id)
            if (!isGroupAdmins) return aruga.reply(from, 'Failed, remember that you are a Member not an Admin', id)
				const mnadm = menuId.admin(prefix)
			aruga.reply(from, mnadm, id, true) 
            break
			case prefix+'menuowner':
            if (!isOwnerB) return aruga.reply(from, 'This command is for Owner bot only!', id)
				const mnnadm = menuId.owner(prefix)
			aruga.reply(from, mnnadm, id, true) 
            break
			case prefix+'adultmenu':
            if (!isGroupMsg) return aruga.reply(from, 'Sorry, this command can only be used within groups!', id)
			if (!isNsfw) return await aruga.reply(from, '*Sorry, NSFW feature is turned off in this group...*', id)
				const mnnaadm = menuId.nsfw(prefix)
			aruga.reply(from, mnnaadm, id, true) 
            break
			case prefix+'infomenu':
			const infoo = menuId.info(prefix)
			aruga.reply(from, infoo, id, true) 
            break
			case prefix+'stickermenu':
			const stoo = menuId.sti(prefix)
			aruga.reply(from, stoo, id, true) 
            break
			case prefix+'textmenu':
			const teoo = menuId.teo(prefix)
			aruga.reply(from, teoo, id, true) 
            break
			case prefix+'imgmenu':
			const imfoo = menuId.imfo(prefix)
			aruga.reply(from, imfoo, id, true) 
            break
			case prefix+'funmenu':
			if (!isGroupMsg) return aruga.reply(from, 'Sorry, this command can only be used within groups!\nExcept #joke and #darkjoke', id)
			const fuoo = menuId.fufo(prefix)
			aruga.reply(from, fuoo, id, true) 
            break
			case prefix+'mediamenu':
			const  meoo = menuId.mefo(prefix)
			aruga.reply(from, meoo, id, true) 
            break
			case prefix+'animemenu':
			if (!isGroupMsg) return aruga.reply(from, 'Sorry, this command can only be used within groups!', id)
			if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
			const anoo = menuId.anfo(prefix)
			aruga.reply(from, anoo, id, true) 
            break
			case prefix+'factmenu':
			const faoo = menuId.fafo(prefix)
			aruga.reply(from, faoo, id, true) 
            break
			case prefix+'othermenu':
			const otoo = menuId.otfo(prefix)
			aruga.reply(from, otoo, id, true) 
            break
			case prefix+'langcode':
			const kodbhs = menuId.kodebahasa()
			aruga.reply(from, kodbhs, id, true)
			break
			default:
            if (isCmd) {
                const slh = body.trim().split(' ')
				const akenohelpp = akenohelp[Math.floor(Math.random() * (akenohelp.length))]
				await aruga.sendVideoAsGif(from, akenohelpp ,'akeno.mp4', `Please refer to #menu for help..`,id)            
				}
            break
			case prefix+'araara':
		{
        const answer = [
        './media/ara/ara_ara1.mp3',
        './media/ara/ara_ara2.mp3',
        './media/ara/ara_ara3.mp3',
		'./media/ara/ara_ara4.mp3',
		'./media/ara/ara_ara5.mp3',
		'./media/ara/ara_ara6.mp3',
		'./media/ara/ara_ara.mp3',
		'./media/ara/ara_ara_uhuhu.mp3'
        ]
        let randomansw = answer[Math.floor(Math.random() * answer.length)]
        aruga.sendAudio(from , randomansw , id)
    }
			break
			case prefix+'baka':
		{
        const answwer = [
        './media/baka/baka.mp3',
        './media/baka/baka2.mp3',
        './media/baka/baka3.mp3',
		'./media/baka/baka4.mp3',
		'./media/baka/baka1.mp3'
        ]
        let randomansww = answwer[Math.floor(Math.random() * answwer.length)]
        aruga.sendAudio(from , randomansww , id)
    }
			break
			case prefix+'nani':
		{
        const ansswwer = [
        './media/nani/nani1.mp3',
        './media/nani/nani2.mp3'
        ]
        let randoomansww = ansswwer[Math.floor(Math.random() * ansswwer.length)]
        aruga.sendAudio(from , randoomansww , id)
    }
			break
			case prefix+'qwerty':
		{
        const qwerty = [
        './media/video/1 (1).mp4','./media/video/1 (2).mp4','./media/video/1 (3).mp4','./media/video/1 (4).mp4','./media/video/1 (5).mp4','./media/video/1 (6).mp4','./media/video/1 (7).mp4','./media/video/1 (8).mp4','./media/video/1 (9).mp4','./media/video/1 (11).mp4','./media/video/1 (12).mp4','./media/video/1 (13).mp4','./media/video/1 (14).mp4','./media/video/1 (15).mp4','./media/video/1 (16).mp4','./media/video/1 (17).mp4','./media/video/1 (18).mp4','./media/video/1 (19).mp4','./media/video/1 (20).mp4','./media/video/1 (21).mp4','./media/video/1 (22).mp4','./media/video/1 (23).mp4','./media/video/1 (24).mp4','./media/video/1 (25).mp4','./media/video/1 (26).mp4','./media/video/1 (27).mp4','./media/video/1 (28).mp4','./media/video/1 (29).mp4','./media/video/1 (30).mp4','./media/video/1 (31).mp4','./media/video/1 (32).mp4','./media/video/1 (33).mp4','./media/video/1 (34).mp4','./media/video/1 (35).mp4','./media/video/1 (36).mp4','./media/video/1 (37).mp4','./media/video/1 (38).mp4','./media/video/1 (39).mp4','./media/video/1 (40).mp4','./media/video/1 (41).mp4','./media/video/1 (42).mp4','./media/video/1 (43).mp4','./media/video/1 (44).mp4','./media/video/1 (45).mp4','./media/video/1 (46).mp4','./media/video/1 (47).mp4','./media/video/1 (48).mp4','./media/video/1 (49).mp4','./media/video/1 (50).mp4','./media/video/1 (51).mp4','./media/video/1 (52).mp4','./media/video/1 (53).mp4','./media/video/1 (54).mp4','./media/video/1 (55).mp4','./media/video/1 (56).mp4','./media/video/1 (57).mp4','./media/video/1 (58).mp4','./media/video/1 (59).mp4','./media/video/1 (60).mp4','./media/video/1 (61).mp4','./media/video/1 (62).mp4','./media/video/1 (63).mp4','./media/video/1 (64).mp4','./media/video/1 (65).mp4','./media/video/1 (66).mp4','./media/video/1 (67).mp4','./media/video/1 (68).mp4','./media/video/1 (69).mp4','./media/video/1 (70).mp4','./media/video/1 (71).mp4','./media/video/1 (72).mp4','./media/video/1 (73).mp4','./media/video/1 (74).mp4','./media/video/1 (75).mp4','./media/video/1 (76).mp4','./media/video/1 (77).mp4','./media/video/1 (78).mp4','./media/video/1 (79).mp4','./media/video/1 (80).mp4','./media/video/1 (81).mp4','./media/video/1 (82).mp4','./media/video/1 (83).mp4','./media/video/1 (84).mp4','./media/video/1 (85).mp4','./media/video/1 (86).mp4','./media/video/1 (87).mp4','./media/video/1 (88).mp4','./media/video/1 (89).mp4','./media/video/1 (90).mp4','./media/video/1 (91).mp4','./media/video/1 (92).mp4','./media/video/1 (93).mp4','./media/video/1 (94).mp4','./media/video/1 (95).mp4','./media/video/1 (96).mp4','./media/video/1 (97).mp4','./media/video/1 (99).mp4','./media/video/1 (100).mp4','./media/video/1 (101).mp4','./media/video/1 (102).mp4','./media/video/1 (103).mp4','./media/video/1 (104).mp4','./media/video/1 (105).mp4','./media/video/1 (106).mp4','./media/video/1 (107).mp4','./media/video/1 (108).mp4','./media/video/1 (109).mp4','./media/video/1 (110).mp4','./media/video/1 (111).mp4','./media/video/1 (112).mp4','./media/video/1 (113).mp4','./media/video/1 (114).mp4','./media/video/1 (115).mp4'
        ]
        let qeee = qwerty[Math.floor(Math.random() * qwerty.length)]
        aruga.sendFile(from , qeee , id)
    }
			break
            case prefix+'kodenuklir000000000000':
				const benuk = menuId.kodenuklir()
                await aruga.sendText(from, benuk, id, true)
                break
        case prefix+'donate00000000000000':
        case prefix+'donasi0000000000000':
			const inidonate = menuId.textDonasi()
            await aruga.sendText(from, inidonate, id, true)
            break
          case prefix+'tod':
    aruga.reply(from, `Before playing promise to carry out whatever orders are given.\n\nPlease select:\n➥ ${prefix}truth\n➥ ${prefix}dare`, id)
    break
    case prefix+'rneko':
	aruga.reply(from, mess.wait, id)
	axios.get(`https://api.i-tech.id/anim/nsfwneko?key=6QZWVa-fzRgRY-95xAOH-fspd5y-7eJOkQ`).then(res => {
	aruga.sendFileFromUrl(from, res.data.result, '', '', id)
	})
	break
    case prefix+'truth':
    if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups', id)
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/truthen.txt')
            .then(res => res.text())
            .then(body => {
                let truthx = body.split('\n')
                let truthz = truthx[Math.floor(Math.random() * truthx.length)]
                aruga.reply(from, truthz, id)
            })
            .catch(() => {
                aruga.reply(from, 'Hayolohhh, Error!!', id)
            })
            break
    case prefix+'dare':
    if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/dareen.txt')
            .then(res => res.text())
            .then(body => {
                let darex = body.split('\n')
                let darez = darex[Math.floor(Math.random() * darex.length)]
                aruga.reply(from, darez, id)
            })
            .catch(() => {
                aruga.reply(from, 'Hayolohhh, Error!!', id)
            })
            break
			case 'Akeno':
			case 'akeno':
			{
			await aruga.sendPtt(from, `./media/highschool_dxd_akeno.mp3` ,id)
		}
			break
		case 'oyasumi':
		case 'Oyasumi':
		case 'oyasuminasai':
		case 'Oyasuminasai':
		case 'oyasum':
		case 'Oyasum':
		{
			await aruga.sendPtt(from, `./media/oyasumi/akeno.mp3`, id)
		}
		break
		case 'ohayo':
		case 'Ohayo':
		case 'ohayoo':
		case 'Ohayoo':
		case 'ohayou':
		case 'Ohayou':
		case 'ohaio':
		case 'Ohaio':
		case 'ohaiou':
		case 'Ohaiou':
		case 'ohayogosaimas':
		case 'Ohayogosaimas':
		case 'ohayouGosaimas':
		case 'OhayouGosaimas':
		case 'ohaiogosaimas':
		case 'Ohaiogosaimas':
		case 'ohaiougosaimas':
		case 'Ohaiougosaimas':
		{
		await aruga.sendPtt(from, `./media/ohayo/akeno.mp3`, id)	
		}
		break
		case 'senpai':
		case 'Senpai':
		{
			await aruga.sendPtt(from, `./media/senpai/akeno.mp3`, id)
		}
		break
		case 'nani':
		case 'Nani':
		case 'nani!':
		case 'Nani!':
		case 'nani!!':
		case 'Nani!!':
		case 'nani!!!':
		case 'Nani!!!':
		case 'nani!!!!':
		case 'Nani!!!!':
		case 'nani!!!!':
		case 'Nani!!!!':
		{
			await aruga.sendPtt(from, `./media/nani/akeno.mp3`, id)
		}
		break
		case 'Akenomoan':
		case 'AkenoMoan':
		case 'akenomoan':
		{
			await aruga.sendPtt(from, `./media/moan/akeno.mp3`, id)
		}
		break
		case 'konichiwa':
		case 'Konichiwa':
		case 'konichiva':
		case 'Konichiva':
		case 'konichiwa':
		case 'KoniChiwa':
		{
			await aruga.sendPtt(from, `./media/konic/aakeno.mp3`, id)
		}
		break
		case 'gomenne':
		case 'gomen':
		case 'Gomen':
		case 'Gomenne':
		case 'gomenn':
		case 'Gomenn':
		case 'gomenasai':
		case 'Gomenasai':
		case 'gomennasai':
		case 'Gomennasai':
		{
			await aruga.sendPtt(from, `./media/gomen/akeno.mp3`, id)
		}
		break
		case'gambare':
		case'Gambare':
		case'gamBare':
		case'GamBare':
		{
			await aruga.sendPtt(from, `./media/gambare/akeno.mp3`, id)
		}
		break
		case 'Baka':
		case 'baka':
		case 'BAKA':
		case 'Bakaa':
		case 'Bakaaa':
		case 'Bakaaaa':
		case 'bakaa':
		case 'bakaaa':
		case 'bakaaaa':
		{
			await aruga.sendPtt(from, `./media/baka/akeno.mp3`, id)
		}
		break
		case 'Araara':
		case 'Arara':
		case 'AraAra':
		case 'araara':
		{
			await aruga.sendPtt(from, `./media/ara/ara_ara_uhuhu.mp3`, id)
		}
		break
     case prefix+'citacita000000000'://Piyobot
     if (!isGroupMsg) return aruga.reply(from, menuId.textPrem())
            fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/citacita/main/citacita.txt')
            .then(res => res.text())
            .then(body => {
            let cita = body.split('\n')
            let raya = cita[Math.floor(Math.random() * cita.length)]
            aruga.sendFileFromUrl(from, raya, 'citacita.mp3', id)
                .then(() => console.log('Success sending cita'))
              })
             .catch(() => {
            aruga.reply(from, 'Error!', id)
             })
             break
         case prefix+'kbbi00000000000000000000':
            if (args.length == 0) return aruga.reply(from, `Untuk mencari suatu kata dari Kamus Besar Bahasa Indonesia (KBBI)\nketik: ${prefix}kbbi [kata]`, id)
            const kbbip = body.slice(6)
            const kbbis = await rugaapi.kbbi(kbbip)
            await aruga.reply(from, kbbis, id)
            .catch(() => {
                aruga.reply(from, 'Error!!', id)
            })
            break
			case prefix+'water':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser = await puppeteer.launch(options)
					const page = await browser.newPage()
					await page.goto("https://textpro.me/dropwater-text-effect-872.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await page.waitForSelector('#text-0')
						await page.type("#text-0", body.slice(7))
						await page.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await page.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await page.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
			
			case prefix+'discovery':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browserdis = await puppeteer.launch(options)
					const pagedis = await browserdis.newPage()
					await pagedis.goto("https://textpro.me/create-space-text-effects-online-free-1042.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pagedis.waitForSelector('#text-0')
						await pagedis.type("#text-0", body.slice(11))
						await pagedis.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagedis.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pagedis.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserdis.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
			
			case prefix+'metal':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browserme = await puppeteer.launch(options)
					const pageme = await browserme.newPage()
					await pageme.goto("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pageme.waitForSelector('#text-0')
						await pageme.type("#text-0", body.slice(7))
						await pageme.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageme.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageme.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserme.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
			
			case prefix+'glossymetalic':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browsergl = await puppeteer.launch(options)
					const pagegl = await browsergl.newPage()
					await pagegl.goto("https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pagegl.waitForSelector('#text-0')
						await pagegl.type("#text-0", body.slice(15))
						await pagegl.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagegl.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pagegl.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browsergl.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
			
			case prefix+'fiction':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browserfic = await puppeteer.launch(options)
					const pagefic = await browserfic.newPage()
					await pagefic.goto("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pagefic.waitForSelector('#text-0')
						await pagefic.type("#text-0", body.slice(9))
						await pagefic.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagefic.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pagefic.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserfic.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
			
			case prefix+'demon':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browserde = await puppeteer.launch(options)
					const pagede = await browserde.newPage()
					await pagede.goto("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pagede.waitForSelector('#text-0')
						await pagede.type("#text-0", body.slice(7))
						await pagede.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagede.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pagede.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserde.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
			
			case prefix+'transformer':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browsertra = await puppeteer.launch(options)
					const pagetra = await browsertra.newPage()
					await pagetra.goto("https://textpro.me/create-a-transformer-text-effect-online-1035.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pagetra.waitForSelector('#text-0')
						await pagetra.type("#text-0", body.slice(6))
						await pagetra.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagetra.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pagetra.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browsertra.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
			
			case prefix+'berry':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browserbe = await puppeteer.launch(options)
					const pagetbe = await browserbe.newPage()
					await pagetbe.goto("https://textpro.me/create-berry-text-effect-online-free-1033.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pagetbe.waitForSelector('#text-0')
						await pagetbe.type("#text-0", body.slice(7))
						await pagetbe.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagetbe.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pagetbe.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserbe.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
			
			case prefix+'thunder':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browserthu = await puppeteer.launch(options)
					const pagethu = await browserthu.newPage()
					await pagethu.goto("https://textpro.me/online-thunder-text-effect-generator-1031.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pagethu.waitForSelector('#text-0')
						await pagethu.type("#text-0", body.slice(9))
						await pagethu.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagethu.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pagethu.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserthu.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
			
			case prefix+'magma':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browsermag = await puppeteer.launch(options)
					const pagemag = await browsermag.newPage()
					await pagemag.goto("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pagemag.waitForSelector('#text-0')
						await pagemag.type("#text-0", body.slice(7))
						await pagemag.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagemag.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pagemag.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browsermag.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
			
			case prefix+'3dstone':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser3ds = await puppeteer.launch(options)
					const page3ds = await browser3ds.newPage()
					await page3ds.goto("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await page3ds.waitForSelector('#text-0')
						await page3ds.type("#text-0", body.slice(9))
						await page3ds.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await page3ds.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await page3ds.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser3ds.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
			
			case prefix+'neonlight':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browsereol = await puppeteer.launch(options)
					const pageneol = await browsereol.newPage()
					await pageneol.goto("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pageneol.waitForSelector('#text-0')
						await pageneol.type("#text-0", body.slice(11))
						await pageneol.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageneol.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageneol.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browsereol.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
			
			case prefix+'glitch':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browserglt = await puppeteer.launch(options)
					const pageglt = await browserglt.newPage()
					await pageglt.goto("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pageglt.waitForSelector('#text-0')
						await pageglt.type("#text-0", body.slice(8))
						await pageglt.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageglt.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageglt.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserglt.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
			
			case prefix+'harryp':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browserhap = await puppeteer.launch(options)
					const pagehap = await browserhap.newPage()
					await pagehap.goto("https://textpro.me/create-harry-potter-text-effect-online-1025.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pagehap.waitForSelector('#text-0')
						await pagehap.type("#text-0", body.slice(8))
						await pagehap.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagehap.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pagehap.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserhap.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
			
			case prefix+'embossed':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browseremb = await puppeteer.launch(options)
					const pageemb = await browseremb.newPage()
					await pageemb.goto("https://textpro.me/create-embossed-text-effect-on-cracked-surface-1024.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pageemb.waitForSelector('#text-0')
						await pageemb.type("#text-0", body.slice(10))
						await pageemb.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageemb.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageemb.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browseremb.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
			
			case prefix+'watercolor':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browserwcl = await puppeteer.launch(options)
					const pagewcl = await browserwcl.newPage()
					await pagewcl.goto("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pagewcl.waitForSelector('#text-0')
						await pagewcl.type("#text-0", body.slice(12))
						await pagewcl.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagewcl.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pagewcl.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserwcl.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
			
			case prefix+'foggy':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browserfog = await puppeteer.launch(options)
					const pagefog = await browserfog.newPage()
					await pagefog.goto("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pagefog.waitForSelector('#text-0')
						await pagefog.type("#text-0", body.slice(7))
						await pagefog.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagefog.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pagefog.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserfog.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
			
			case prefix+'neondevil':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browsernd = await puppeteer.launch(options)
					const pagend = await browsernd.newPage()
					await pagend.goto("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pagend.waitForSelector('#text-0')
						await pagend.type("#text-0", body.slice(6))
						await pagend.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagend.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pagend.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browsernd.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
			
			case prefix+'underwater':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser1 = await puppeteer.launch(options)
					const page1 = await browser1.newPage()
					await page1.goto("https://textpro.me/3d-underwater-text-effect-generator-online-1013.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await page1.waitForSelector('#text-0')
						await page1.type("#text-0", body.slice(12))
						await page1.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await page1.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await page1.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser1.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
			
			case prefix+'bear':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser2 = await puppeteer.launch(options)
					const page2 = await browser2.newPage()
					await page2.goto("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await page2.waitForSelector('#text-0')
						await page2.type("#text-0", body.slice(6))
						await page2.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await page2.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await page2.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser2.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
				
			case prefix+'graffiti':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browsere2 = await puppeteer.launch(options)
					const pagee2 = await browsere2.newPage()
					await pagee2.goto("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pagee2.waitForSelector('#text-0')
						await pagee2.type("#text-0", body.slice(10))
						await pagee2.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagee2.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pagee2.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browsere2.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
				
			case prefix+'future':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser3 = await puppeteer.launch(options)
					const page3 = await browser3.newPage()
					await page3.goto("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await page3.waitForSelector('#text-0')
						await page3.type("#text-0", body.slice(8))
						await page3.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await page3.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await page3.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser3.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
				
			case prefix+'luxury':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser4 = await puppeteer.launch(options)
					const page3 = await browser4.newPage()
					await page3.goto("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await page3.waitForSelector('#text-0')
						await page3.type("#text-0", body.slice(8))
						await page3.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await page3.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await page3.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser4.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
				
			case prefix+'3dgradient':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser5 = await puppeteer.launch(options)
					const page4 = await browser5.newPage()
					await page4.goto("https://textpro.me/3d-gradient-text-effect-online-free-1002.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await page4.waitForSelector('#text-0')
						await page4.type("#text-0", body.slice(12))
						await page4.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await page4.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await page4.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser5.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
				
			case prefix+'blackpink':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser6 = await puppeteer.launch(options)
					const page5 = await browser6.newPage()
					await page5.goto("https://textpro.me/create-blackpink-logo-style-online-1001.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await page5.waitForSelector('#text-0')
						await page5.type("#text-0", body.slice(11))
						await page5.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await page5.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await page5.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser6.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
				
			case prefix+'3dsand':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser7 = await puppeteer.launch(options)
					const page6 = await browser7.newPage()
					await page6.goto("https://textpro.me/sand-engraved-3d-text-effect-989.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await page6.waitForSelector('#text-0')
						await page6.type("#text-0", body.slice(6))
						await page6.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await page6.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await page6.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser7.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
				
			case prefix+'darkmetal':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser8 = await puppeteer.launch(options)
					const page7 = await browser8.newPage()
					await page7.goto("https://textpro.me/metal-dark-gold-text-effect-984.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await page7.waitForSelector('#text-0')
						await page7.type("#text-0", body.slice(11))
						await page7.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await page7.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await page7.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser8.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
				
			case prefix+'city':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser9 = await puppeteer.launch(options)
					const page8 = await browser9.newPage()
					await page8.goto("https://textpro.me/double-exposure-text-effect-black-white-976.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await page8.waitForSelector('#text-0')
						await page8.type("#text-0", body.slice(6))
						await page8.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await page8.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await page8.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser9.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
				
			case prefix+'3dholographic':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser10 = await puppeteer.launch(options)
					const page9 = await browser10.newPage()
					await page9.goto("https://textpro.me/holographic-3d-text-effect-975.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await page9.waitForSelector('#text-0')
						await page9.type("#text-0", body.slice(15))
						await page9.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await page9.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await page9.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser10.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
				
			case prefix+'deluxesilver':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser12 = await puppeteer.launch(options)
					const page11 = await browser12.newPage()
					await page11.goto("https://textpro.me/deluxe-silver-text-effect-970.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await page11.waitForSelector('#text-0')
						await page11.type("#text-0", body.slice(14))
						await page11.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await page11.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await page11.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser12.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
				
			case prefix+'leaves':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser13 = await puppeteer.launch(options)
					const page12 = await browser13.newPage()
					await page12.goto("https://textpro.me/natural-leaves-text-effect-931.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await page12.waitForSelector('#text-0')
						await page12.type("#text-0", body.slice(8))
						await page12.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await page12.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await page12.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser13.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
				
			case prefix+'firework':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser14 = await puppeteer.launch(options)
					const pagee13 = await browser14.newPage()
					await pagee13.goto("https://textpro.me/firework-sparkle-text-effect-930.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pagee13.waitForSelector('#text-0')
						await pagee13.type("#text-0", body.slice(10))
						await pagee13.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagee13.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pagee13.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser14.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
				
			case prefix+'thunder':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser15 = await puppeteer.launch(options)
					const pagee14 = await browser15.newPage()
					await pagee14.goto("https://textpro.me/create-thunder-text-effect-online-881.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pagee14.waitForSelector('#text-0')
						await pagee14.type("#text-0", body.slice(9))
						await pagee14.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagee14.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pagee14.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser15.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
				
			case prefix+'3dbox':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser16 = await puppeteer.launch(options)
					const pagee15 = await browser16.newPage()
					await pagee15.goto("https://textpro.me/3d-box-text-effect-online-880.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pagee15.waitForSelector('#text-0')
						await pagee15.type("#text-0", body.slice(7))
						await pagee15.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagee15.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pagee15.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser16.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
				
			case prefix+'glow':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser17 = await puppeteer.launch(options)
					const pagee16 = await browser17.newPage()
					await pagee16.goto("https://textpro.me/free-advanced-glow-text-effect-873.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pagee16.waitForSelector('#text-0')
						await pagee16.type("#text-0", body.slice(6))
						await pagee16.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagee16.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pagee16.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser17.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
				
			case prefix+'neon':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser18 = await puppeteer.launch(options)
					const pagee17 = await browser18.newPage()
					await pagee17.goto("https://textpro.me/neon-text-effect-online-879.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pagee17.waitForSelector('#text-0')
						await pagee17.type("#text-0", body.slice(6))
						await pagee17.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagee17.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pagee17.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser18.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
				
			case prefix+'waterdrop':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser18 = await puppeteer.launch(options)
					const pagee18 = await browser18.newPage()
					await pagee18.goto("https://textpro.me/dropwater-text-effect-872.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pagee18.waitForSelector('#text-0')
						await pagee18.type("#text-0", body.slice(11))
						await pagee18.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagee18.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pagee18.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser18.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
				
			case prefix+'breakwall':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser19 = await puppeteer.launch(options)
					const pagee19 = await browser19.newPage()
					await pagee19.goto("https://textpro.me/break-wall-text-effect-871.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pagee19.waitForSelector('#text-0')
						await pagee19.type("#text-0", body.slice(11))
						await pagee19.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagee19.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pagee19.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser19.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
				
			case prefix+'chrome':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				try {
					if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
					await aruga.reply(from, mess.wait + '\n\n10+ s.', id)
					const browser20 = await puppeteer.launch(options)
					const pagee20 = await browser20.newPage()
					await pagee20.goto("https://textpro.me/3d-chrome-text-effect-827.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pagee20.waitForSelector('#text-0')
						await pagee20.type("#text-0", body.slice(8))
						await pagee20.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagee20.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pagee20.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browser20.close()
						limitAdd(serial)
					})
				} catch (error) {
					await aruga.reply(from, mess.fail(), id)
					console.log(color('[IMG MAKER]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
				
			case prefix+'arrow':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
				await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
				const browserar = await puppeteer.launch(options)
				const pagear = await browserar.newPage()
				await pagear.goto("https://en.ephoto360.com/create-multicolored-signature-attachment-arrow-effect-714.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
					await pagear.waitForSelector('#text-0')
					await pagear.type("#text-0", body.slice(7))
					await pagear.click("#submit")
					await sleep(20000)
					await pagear.waitForSelector('div[class="thumbnail"] > img')
					const divElement = await pagear.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
					await browserar.close()
					limitAdd(serial)
				})
				break
				
			case prefix+'blackpink2':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
				await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
				const browserar1 = await puppeteer.launch(options)
				const pagear1 = await browserar1.newPage()
				await pagear1.goto("https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
					await pagear1.waitForSelector('#text-0')
					await pagear1.type("#text-0", body.slice(11))
					await pagear1.click("#submit")
					await sleep(20000)
					await pagear1.waitForSelector('div[class="thumbnail"] > img')
					const divElement = await pagear1.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
					await browserar1.close()
					limitAdd(serial)
				})
				break
				
			case prefix+'blackpink3':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
				await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
				const browserar2 = await puppeteer.launch(options)
				const pagear2 = await browserar2.newPage()
				await pagear2.goto("https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
					await pagear2.waitForSelector('#text-0')
					await pagear2.type("#text-0", body.slice(11))
					await pagear2.click("#submit")
					await sleep(20000)
					await pagear2.waitForSelector('div[class="thumbnail"] > img')
					const divElement = await pagear2.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
					await browserar2.close()
					limitAdd(serial)
				})
				break
				
			case prefix+'multineon':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
				await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
				const browserar3 = await puppeteer.launch(options)
				const pagear3 = await browserar3.newPage()
				await pagear3.goto("https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
					await pagear3.click("#radio0-radio-3938db27c48c4d96ab60f1bd1e312abf")
					await pagear3.waitForSelector('#text-0')
					await pagear3.type("#text-0", body.slice(11))
					await pagear3.click("#submit")
					await sleep(20000)
					await pagear3.waitForSelector('div[class="thumbnail"] > img')
					const divElement = await pagear3.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
					await browserar3.close()
					limitAdd(serial)
				})
				break
				
			case prefix+'galaxy':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
				await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
				const browserar4 = await puppeteer.launch(options)
				const pagear4 = await browserar4.newPage()
				await pagear4.goto("https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
					await pagear4.waitForSelector('#text-0')
					await pagear4.type("#text-0", body.slice(8))
					await pagear4.click("#submit")
					await sleep(20000)
					await pagear4.waitForSelector('div[class="thumbnail"] > img')
					const divElement = await pagear4.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
					await browserar4.close()
					limitAdd(serial)
				})
				break
				
			case prefix+'angelwing':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
				await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
				const browserar5 = await puppeteer.launch(options)
				const pagear5 = await browserar5.newPage()
				await pagear5.goto("https://en.ephoto360.com/angel-wing-effect-329.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
					await pagear5.waitForSelector('#text-0')
					await pagear5.type("#text-0", body.slice(11))
					await pagear5.click("#submit")
					await sleep(20000)
					await pagear5.waitForSelector('div[class="thumbnail"] > img')
					const divElement = await pagear5.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
					await browserar5.close()
					limitAdd(serial)
				})
				break
				
			case prefix+'galaxywing':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
				await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
				const browserar6 = await puppeteer.launch(options)
				const pagear6 = await browserar6.newPage()
				await pagear6.goto("https://en.ephoto360.com/the-effect-of-galaxy-angel-wings-289.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
					await pagear6.click("radio0-radio-zbpetfwaf")
					await pagear6.waitForSelector('#text-0')
					await pagear6.type("#text-0", body.slice(12))
					await pagear6.click("#submit")
					await sleep(20000)
					await pagear6.waitForSelector('div[class="thumbnail"] > img')
					const divElement = await pagear6.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
					await browserar6.close()
					limitAdd(serial)
				})
				break
				
			case prefix+'galaxytree':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
				await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
				const browserar7 = await puppeteer.launch(options)
				const pagear7 = await browserar7.newPage()
				await pagear7.goto("https://en.ephoto360.com/text-galaxy-tree-effect-288.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
					await pagear7.waitForSelector('#text-0')
					await pagear7.type("#text-0", body.slice(12))
					await pagear7.click("#submit")
					await sleep(20000)
					await pagear7.waitForSelector('div[class="thumbnail"] > img')
					const divElement = await pagear7.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
					await browserar7.close()
					limitAdd(serial)
				})
				break
				
			case prefix+'galaxywing2':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
				await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
				const browserar8 = await puppeteer.launch(options)
				const pagear8 = await browserar8.newPage()
				await pagear8.goto("https://en.ephoto360.com/wings-galaxy-206.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
					await pagear8.waitForSelector('#text-0')
					await pagear8.type("#text-0", body.slice(13))
					await pagear8.click("#submit")
					await sleep(20000)
					await pagear8.waitForSelector('div[class="thumbnail"] > img')
					const divElement = await pagear8.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
					await browserar8.close()
					limitAdd(serial)
				}) 
				break
				
			case prefix+'graffiti4':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
				await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
				const browserar9 = await puppeteer.launch(options)
				const pagear9 = await browserar9.newPage()
				await pagear9.goto("https://en.ephoto360.com/cover-graffiti-181.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
					await pagear9.waitForSelector('#text-0')
					await pagear9.type("#text-0", body.slice(11))
					await pagear9.click("#submit")
					await sleep(20000)
					await pagear9.waitForSelector('div[class="thumbnail"] > img')
					const divElement = await pagear9.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
					await browserar9.close()
					limitAdd(serial)
				})
				break
				
			case prefix+'wetglass':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
				await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
				const browserar10 = await puppeteer.launch(options)
				const pagear10 = await browserar10.newPage()
				await pagear10.goto("https://en.ephoto360.com/write-text-on-wet-glass-online-589.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
					await pagear10.waitForSelector('#text-0')
					await pagear10.type("#text-0", body.slice(10))
					await pagear10.click("#submit")
					await sleep(20000)
					await pagear10.waitForSelector('div[class="thumbnail"] > img')
					const divElement = await pagear10.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
					await browserar10.close()
					limitAdd(serial)
				})
				break
				
			case prefix+'glitter':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length >= 2 && q.includes('|')) {
					if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10) return await aruga.reply(from, 'Max: 10 letters', id)
					await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
					const browserph = await puppeteer.launch(options)
					const pageph = await browserph.newPage()
					await pageph.goto("https://en.ephoto360.com/free-glitter-text-effect-maker-online-656.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pageph.click("#radio0-radio-9a0f8a8ad4b042bf945f06e75a2ac6a4")
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[0])
						await pageph.type("#text-1", arg.split('|')[1])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserph.close()
						limitAdd(serial)
					})
				} else return await aruga.reply(from, `This command needs something to work, for it to work insert a word` + '\n\n' + `This need to be used with phrases, separated from |, example, ${prefix}command part 1 | part 2, in that command `, id)
				break
				
				
			case prefix+'pornhub':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length >= 2 && q.includes('|')) {
					if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10) return await aruga.reply(from, 'Max: 10 letters', id)
					await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
					const browserph = await puppeteer.launch(options)
					const pageph = await browserph.newPage()
					await pageph.goto("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[0])
						await pageph.type("#text-1", arg.split('|')[1])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserph.close()
						limitAdd(serial)
					})
				} else return await aruga.reply(from, `This command needs something to work, for it to work insert a word` + '\n\n' + `This need to be used with phrases, separated from |, example, ${prefix}command part 1 | part 2, in that command `, id)
				break
				
			case prefix+'capamerica':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length >= 2 && q.includes('|')) {
					if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10) return await aruga.reply(from, 'Max: 10 letters', id)
					await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
					const browserph = await puppeteer.launch(options)
					const pageph = await browserph.newPage()
					await pageph.goto("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[0])
						await pageph.type("#text-1", arg.split('|')[1])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserph.close()
						limitAdd(serial)
					})
				} else return await aruga.reply(from, `This command needs something to work, for it to work insert a word` + '\n\n' + `This need to be used with phrases, separated from |, example, ${prefix}command part 1 | part 2, in that command `, id)
				break
				
			case prefix+'layered':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length >= 2 && q.includes('|')) {
					if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10) return await aruga.reply(from, 'Max: 10 letters', id)
					await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
					const browserph = await puppeteer.launch(options)
					const pageph = await browserph.newPage()
					await pageph.goto("https://textpro.me/create-layered-text-effects-online-free-1032.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[0])
						await pageph.type("#text-1", arg.split('|')[1])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserph.close()
						limitAdd(serial)
					})
				} else return await aruga.reply(from, `This command needs something to work, for it to work insert a word` + '\n\n' + `This need to be used with phrases, separated from |, example, ${prefix}command part 1 | part 2, in that command `, id)
				break
				
			case prefix+'glitch2':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length >= 2 && q.includes('|')) {
					if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10) return await aruga.reply(from, 'Max: 10 letters', id)
					await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
					const browserph = await puppeteer.launch(options)
					const pageph = await browserph.newPage()
					await pageph.goto("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[0])
						await pageph.type("#text-1", arg.split('|')[1])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserph.close()
						limitAdd(serial)
					})
				} else return await aruga.reply(from, `This command needs something to work, for it to work insert a word` + '\n\n' + `This need to be used with phrases, separated from |, example, ${prefix}command part 1 | part 2, in that command `, id)
				break
				
			case prefix+'glitch3':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length >= 2 && q.includes('|')) {
					if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10) return await aruga.reply(from, 'Max: 10 letters', id)
					await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
					const browserph = await puppeteer.launch(options)
					const pageph = await browserph.newPage()
					await pageph.goto("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[0])
						await pageph.type("#text-1", arg.split('|')[1])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserph.close()
						limitAdd(serial)
					})
				} else return await aruga.reply(from, `This command needs something to work, for it to work insert a word` + '\n\n' + `This need to be used with phrases, separated from |, example, ${prefix}command part 1 | part 2, in that command `, id)
				break
				
			case prefix+'graffiti2':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length >= 2 && q.includes('|')) {
					if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10) return await aruga.reply(from, 'Max: 10 letters', id)
					await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
					const browserph = await puppeteer.launch(options)
					const pageph = await browserph.newPage()
					await pageph.goto("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[0])
						await pageph.type("#text-1", arg.split('|')[1])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserph.close()
						limitAdd(serial)
					})
				} else return await aruga.reply(from, `This command needs something to work, for it to work insert a word` + '\n\n' + `This need to be used with phrases, separated from |, example, ${prefix}command part 1 | part 2, in that command `, id)
				break
				
			case prefix+'graffiti3':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length >= 2 && q.includes('|')) {
					if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10) return await aruga.reply(from, 'Max: 10 letters', id)
					await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
					const browserph = await puppeteer.launch(options)
					const pageph = await browserph.newPage()
					await pageph.goto("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[0])
						await pageph.type("#text-1", arg.split('|')[1])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserph.close()
						limitAdd(serial)
					})
				} else return await aruga.reply(from, `This command needs something to work, for it to work insert a word` + '\n\n' + `This need to be used with phrases, separated from |, example, ${prefix}command part 1 | part 2, in that command `, id)
				break
				
			case prefix+'3dspace':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length >= 2 && q.includes('|')) {
					if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10) return await aruga.reply(from, 'Max: 10 letters', id)
					await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
					const browserph = await puppeteer.launch(options)
					const pageph = await browserph.newPage()
					await pageph.goto("https://textpro.me/create-space-3d-text-effect-online-985.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[0])
						await pageph.type("#text-1", arg.split('|')[1])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserph.close()
						limitAdd(serial)
					})
				} else return await aruga.reply(from, `This command needs something to work, for it to work insert a word` + '\n\n' + `This need to be used with phrases, separated from |, example, ${prefix}command part 1 | part 2, in that command `, id)
				break
				
			case prefix+'stone':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length >= 2 && q.includes('|')) {
					if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10) return await aruga.reply(from, 'Max: 10 letters', id)
					await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
					const browserph = await puppeteer.launch(options)
					const pageph = await browserph.newPage()
					await pageph.goto("https://textpro.me/create-a-stone-text-effect-online-982.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[0])
						await pageph.type("#text-1", arg.split('|')[1])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserph.close()
						limitAdd(serial)
					})
				} else return await aruga.reply(from, `This command needs something to work, for it to work insert a word` + '\n\n' + `This need to be used with phrases, separated from |, example, ${prefix}command part 1 | part 2, in that command `, id)
				break
				
			case prefix+'avenger':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length >= 2 && q.includes('|')) {
					if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10) return await aruga.reply(from, 'Max: 10 letters', id)
					await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
					const browserph = await puppeteer.launch(options)
					const pageph = await browserph.newPage()
					await pageph.goto("https://textpro.me/create-3d-avengers-logo-online-974.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[0])
						await pageph.type("#text-1", arg.split('|')[1])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserph.close()
						limitAdd(serial)
					})
				} else return await aruga.reply(from, `This command needs something to work, for it to work insert a word` + '\n\n' + `This need to be used with phrases, separated from |, example, ${prefix}command part 1 | part 2, in that command `, id)
				break
				
			case prefix+'marvel':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length >= 2 && q.includes('|')) {
					if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10) return await aruga.reply(from, 'Max: 10 letters', id)
					await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
					const browserph = await puppeteer.launch(options)
					const pageph = await browserph.newPage()
					await pageph.goto("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[0])
						await pageph.type("#text-1", arg.split('|')[1])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserph.close()
						limitAdd(serial)
					})
				} else return await aruga.reply(from, `This command needs something to work, for it to work insert a word` + '\n\n' + `This need to be used with phrases, separated from |, example, ${prefix}command part 1 | part 2, in that command `, id)
				break
				
			case prefix+'marvel2':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length >= 2 && q.includes('|')) {
					if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10) return await aruga.reply(from, 'Max: 10 letters', id)
					await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
					const browserph = await puppeteer.launch(options)
					const pageph = await browserph.newPage()
					await pageph.goto("https://textpro.me/create-logo-style-marvel-studios-online-971.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[0])
						await pageph.type("#text-1", arg.split('|')[1])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserph.close()
						limitAdd(serial)
					})
				} else return await aruga.reply(from, `This command needs something to work, for it to work insert a word` + '\n\n' + `This need to be used with phrases, separated from |, example, ${prefix}command part 1 | part 2, in that command `, id)
				break
				
			case prefix+'wolf':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length >= 2 && q.includes('|')) {
					if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10) return await aruga.reply(from, 'Max: 10 letters', id)
					await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
					const browserph = await puppeteer.launch(options)
					const pageph = await browserph.newPage()
					await pageph.goto("https://textpro.me/create-wolf-logo-black-white-937.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[0])
						await pageph.type("#text-1", arg.split('|')[1])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserph.close()
						limitAdd(serial)
					})
				} else return await aruga.reply(from, `This command needs something to work, for it to work insert a word` + '\n\n' + `This need to be used with phrases, separated from |, example, ${prefix}command part 1 | part 2, in that command `, id)
				break
				
			case prefix+'wolf2':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length >= 2 && q.includes('|')) {
					if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10) return await aruga.reply(from, 'Max: 10 letters', id)
					await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
					const browserph = await puppeteer.launch(options)
					const pageph = await browserph.newPage()
					await pageph.goto("https://textpro.me/create-wolf-logo-galaxy-online-936.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[0])
						await pageph.type("#text-1", arg.split('|')[1])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserph.close()
						limitAdd(serial)
					})
				} else return await aruga.reply(from, `This command needs something to work, for it to work insert a word` + '\n\n' + `This need to be used with phrases, separated from |, example, ${prefix}command part 1 | part 2, in that command `, id)
				break
				
			case prefix+'3dsteel':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length >= 2 && q.includes('|')) {
					if (arg.split('|')[0].length >= 10 || arg.split('|')[1].length >= 10) return await aruga.reply(from, 'Max: 10 letters', id)
					await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
					const browserph = await puppeteer.launch(options)
					const pageph = await browserph.newPage()
					await pageph.goto("https://textpro.me/3d-steel-text-effect-877.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[0])
						await pageph.type("#text-1", arg.split('|')[1])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						await browserph.close()
						limitAdd(serial)
					})
				} else return await aruga.reply(from, `This command needs something to work, for it to work insert a word` + '\n\n' + `This need to be used with phrases, separated from |, example, ${prefix}command part 1 | part 2, in that command `, id)
				break
				
			case prefix+'3dmetal':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return aruga.reply(from, `This command needs 3 things to work, *type, text 1, text 2*\n*(Else it won't work)*\n*Type Includes* : silver, gold, bronze, amethyst, rose1, rose2, galaxy, green, blue, peridot, tanzanite\n\n*Format:* #3dmetal -type |text1|text2\n*Example:* #3dmetal -gold |Hello|World|`, id)
				if (q.includes('|') && q.includes('-silver') || q.includes('-gold') || q.includes('-amethyst') || q.includes('-bronze') || q.includes('-galaxy') || q.includes('-blue') || q.includes('-green') || q.includes('-peridot') || q.includes('-rose1') || q.includes('-rose2') || q.includes('-tanzanite')) {
					if(arg.split('|')[2] === '' || arg.split('|')[2] === undefined || arg.split('|')[2] === ' ') { return aruga.reply(from, `Where is the 2nd text?\n*Format:* #3dmetal -type |text1|text2\n*Example:* #3dmetal -gold |Hello|World|`, id)}
					if (arg.split('|')[1].length >= 10 || arg.split('|')[2].length >= 35) return await aruga.reply(from, 'Part 1: Max 10 letters\n Part 2: Max 35 letters', id)
					await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
					const browserph = await puppeteer.launch(options)
					const pageph = await browserph.newPage()
					await pageph.goto("https://textpro.me/create-text-logo-3d-metal-online-957.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
						if (q.includes('-silver')) {
						await pageph.click("#radio0-radio-7a2d868398eb43e4bed7b71c5f3932d6")
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[1])
						await pageph.type("#text-1", arg.split('|')[2])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						}
						else if (q.includes('-gold')) {
						await pageph.click("#radio0-radio-96b78c51c4604575b8459e397b3ee8aa")
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[1])
						await pageph.type("#text-1", arg.split('|')[2])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						}
						else if (q.includes('-amethyst')) {
						await pageph.click("#radio0-radio-0c1b4df44e9a43039f1f69af6bc4f769")
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[1])
						await pageph.type("#text-1", arg.split('|')[2])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						}
						else if (q.includes('-bronze')) {
						await pageph.click("#radio0-radio-f035036226514359a7775ce0771dd2ae")
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[1])
						await pageph.type("#text-1", arg.split('|')[2])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						}
						else if (q.includes('-galaxy')) {
						await pageph.click("#radio0-radio-3aa9fc3e192a4d7c8f7c5e03ba0713f9")
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[1])
						await pageph.type("#text-1", arg.split('|')[2])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						}
						else if (q.includes('-blue')) {
						await pageph.click("#radio0-radio-2f22ac70bcf448b0932cd6d7f6e113fe")
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[1])
						await pageph.type("#text-1", arg.split('|')[2])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						}
						else if (q.includes('-green')) {
						await pageph.click("#radio0-radio-020033e58ab74b06b27d86cfe5f273db")
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[1])
						await pageph.type("#text-1", arg.split('|')[2])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						}
						else if (q.includes('-peridot')) {
						await pageph.click("#radio0-radio-dac1df8754c44c14a797756c6e61ab90")
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[1])
						await pageph.type("#text-1", arg.split('|')[2])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						}
						else if (q.includes('-rose1')) {
						await pageph.click("#radio0-radio-44428dfc3850425c8186442b36d21b71")
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[1])
						await pageph.type("#text-1", arg.split('|')[2])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						}
						else if (q.includes('-rose2')) {
						await pageph.click("#radio0-radio-d26b762b49324ddaaba3c7a9793531e8")
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[1])
						await pageph.type("#text-1", arg.split('|')[2])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
						}
						else if (q.includes('-tanzanite')) {
						await pageph.click("#radio0-radio-b76c3d367c53460d84ed1d1b45b9b8ce")
						await pageph.waitForSelector('#text-0')
						await pageph.type("#text-0", arg.split('|')[1])
						await pageph.type("#text-1", arg.split('|')[2])
						await pageph.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pageph.waitForSelector('div[class="thumbnail"] > img')
						const divElement = await pageph.$eval('div[class="thumbnail"] > img', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'image.jpg', '', id)
					
						}
						await browserph.close()
						limitAdd(serial)
					})
				} else return await aruga.reply(from, `This command needs 3 things to work, *type, text 1, text 2*\n*(Else it won't work)*\n*Type Includes* : silver, gold, bronze, amethyst, rose1, rose2, galaxy, green, blue, peridot, tanzanite\n\n*Format:* #3dmetal -type |text1|text2\n*Example:* #3dmetal -gold |Hello|World|`, id)
				break
				
			case prefix+'intro1':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs 2 things to work, *type, text*\n*(Else it won't work)*\n*Type Includes* : bull, lion, tiger, skull, eagle, dragon\n\n*Format:* #intro -type |text\n*Example:* #intro -dragon |Hello`, id)
				if (q.includes('|') && q.includes('-bull') || q.includes('-tiger') || q.includes('-dragon') || q.includes('-lion') || q.includes('-skull') || q.includes('-eagle')) {
				if(arg.split('|')[1] === '' || arg.split('|')[1] === undefined || arg.split('|')[1] === ' ') { return aruga.reply(from, `Where is the text?\n*Format:* #intro -type |text\n*Example:* #intro -dragon |Hello`, id)}
				if (arg.split('|')[1].length >= 16) return await aruga.reply(from, 'Max 16 letters', id)
				await aruga.reply(from, mess.wait + '\n\n40+ s.', id)
				const browserin = await puppeteer.launch(options)
				const pagein = await browserin.newPage()
				await pagein.goto("https://en.ephoto360.com/free-logo-intro-video-maker-online-558.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
					if (q.includes('-bull')) {
						await pagein.click("#radio0-radio-a4f1f5829cf148268d6ff82682935696")
						await pagein.waitForSelector('#text-0')
						await pagein.type("#text-0", arg.split('|')[1])
						await pagein.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagein.waitForSelector('div[class="thumbnail"] > video > source')
						const divElement = await pagein.$eval('div[class="thumbnail"] > video > source', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'intro.mp4', '', id)
						await browserin.close()
						limitAdd(serial)
						}
						
					if (q.includes('-dragon')) {
					await pagein.click("#radio0-radio-70bf3a9e45b440e585518d968cec0f9f")
					await pagein.waitForSelector('#text-0')
					await pagein.type("#text-0", arg.split('|')[1])
					await pagein.click("#submit")
					await sleep(20000)
					await pagein.waitForSelector('div[class="thumbnail"] > video > source')
					const divElement = await pagein.$eval('div[class="thumbnail"] > video > source', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'intro.mp4', '', id)
					await browserin.close()
					limitAdd(serial)
					}
					if (q.includes('-eagle')) {
					await pagein.click("#radio0-radio-e2d9795ef6124eb8b6eb9efa73f4ede1")
					await pagein.waitForSelector('#text-0')
					await pagein.type("#text-0", arg.split('|')[1])
					await pagein.click("#submit")
					await sleep(20000)
					await pagein.waitForSelector('div[class="thumbnail"] > video > source')
					const divElement = await pagein.$eval('div[class="thumbnail"] > video > source', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'intro.mp4', '', id)
					await browserin.close()
					limitAdd(serial)
					}
					if (q.includes('-lion')) {
					await pagein.click("#radio0-radio-dc745ea0e01d4c6997c06b066d5741d5")
					await pagein.waitForSelector('#text-0')
					await pagein.type("#text-0", arg.split('|')[1])
					await pagein.click("#submit")
					await sleep(20000)
					await pagein.waitForSelector('div[class="thumbnail"] > video > source')
					const divElement = await pagein.$eval('div[class="thumbnail"] > video > source', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'intro.mp4', '', id)
					await browserin.close()
					limitAdd(serial)
					}
					if (q.includes('-skull')) {
					await pagein.click("#radio0-radio-2747f8272ff842af8d56e40aac303c9e")
					await pagein.waitForSelector('#text-0')
					await pagein.type("#text-0", arg.split('|')[1])
					await pagein.click("#submit")
					await sleep(20000)
					await pagein.waitForSelector('div[class="thumbnail"] > video > source')
					const divElement = await pagein.$eval('div[class="thumbnail"] > video > source', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'intro.mp4', '', id)
					await browserin.close()
					limitAdd(serial)
					}
					if (q.includes('-tiger')) {
					await pagein.click("#radio0-radio-f9df0a4132cd4665a10524dc012d0eab")
					await pagein.waitForSelector('#text-0')
					await pagein.type("#text-0", arg.split('|')[1])
					await pagein.click("#submit")
					await sleep(20000)
					await pagein.waitForSelector('div[class="thumbnail"] > video > source')
					const divElement = await pagein.$eval('div[class="thumbnail"] > video > source', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'intro.mp4', '', id)
					await browserin.close()
					limitAdd(serial)
					}
				})}
				else return await aruga.reply(from, `This command needs 2 things to work, *type, text*\n*(Else it won't work)*\n*Type Includes* : bull, lion, tiger, skull, eagle, dragon\n\n*Format:* #intro -type |text\n*Example:* #intro -dragon |Hello`, id)
				break
				
			case prefix+'intro2':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs 2 things to work, *type, text*\n*(Else it won't work)*\n*Type Includes* : bull, lion, tiger, rhino, eagle, dragon\n\n*Format:* #intro -type |text\n*Example:* #intro -dragon |Hello`, id)
				if (q.includes('|') && q.includes('-bull') || q.includes('-tiger') || q.includes('-dragon') || q.includes('-lion') || q.includes('-rhino') || q.includes('-eagle')) {
				if(arg.split('|')[1] === '' || arg.split('|')[1] === undefined || arg.split('|')[1] === ' ') { return aruga.reply(from, `Where is the text?\n*Format:* #intro -type |text\n*Example:* #intro -dragon |Hello`, id)}
				if (arg.split('|')[1].length >= 16) return await aruga.reply(from, 'Max 16 letters', id)
				await aruga.reply(from, mess.wait + '\n\n40+ s.', id)
				const browserin = await puppeteer.launch(options)
				const pagein = await browserin.newPage()
				await pagein.goto("https://en.ephoto360.com/create-elegant-rotation-logo-online-586.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
					if (q.includes('-bull')) {
						await pagein.click("#radio0-radio-743d66c4b805478cb28fa79ae1cb91c2")
						await pagein.waitForSelector('#text-0')
						await pagein.type("#text-0", arg.split('|')[1])
						await pagein.click("#submit")
						await sleep(20000) // Aumente se sua conexão for superr lenta
						await pagein.waitForSelector('div[class="thumbnail"] > video > source')
						const divElement = await pagein.$eval('div[class="thumbnail"] > video > source', txLogo => txLogo.src)
						await aruga.sendFileFromUrl(from, divElement, 'intro.mp4', '', id)
						await browserin.close()
						limitAdd(serial)
						}
					if (q.includes('-dragon')) {
					await pagein.click("#radio0-radio-b1c4c5d940b94ed2b45d42836d7f4c23")
					await pagein.waitForSelector('#text-0')
					await pagein.type("#text-0", arg.split('|')[1])
					await pagein.click("#submit")
					await sleep(20000)
					await pagein.waitForSelector('div[class="thumbnail"] > video > source')
					const divElement = await pagein.$eval('div[class="thumbnail"] > video > source', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'intro.mp4', '', id)
					await browserin.close()
					limitAdd(serial)
					}
					if (q.includes('-eagle')) {
					await pagein.click("#radio0-radio-f5c1180012fa4a94970c879797dcb73e")
					await pagein.waitForSelector('#text-0')
					await pagein.type("#text-0", arg.split('|')[1])
					await pagein.click("#submit")
					await sleep(20000)
					await pagein.waitForSelector('div[class="thumbnail"] > video > source')
					const divElement = await pagein.$eval('div[class="thumbnail"] > video > source', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'intro.mp4', '', id)
					await browserin.close()
					limitAdd(serial)
					}
					if (q.includes('-lion')) {
					await pagein.click("#radio0-radio-3f9805f372d5432592a3d1246c892bf9")
					await pagein.waitForSelector('#text-0')
					await pagein.type("#text-0", arg.split('|')[1])
					await pagein.click("#submit")
					await sleep(20000)
					await pagein.waitForSelector('div[class="thumbnail"] > video > source')
					const divElement = await pagein.$eval('div[class="thumbnail"] > video > source', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'intro.mp4', '', id)
					await browserin.close()
					limitAdd(serial)
					}
					if (q.includes('-rhino')) {
					await pagein.click("#radio0-radio-62ce3d0a6e8643cd94c4419bdea14abc")
					await pagein.waitForSelector('#text-0')
					await pagein.type("#text-0", arg.split('|')[1])
					await pagein.click("#submit")
					await sleep(20000)
					await pagein.waitForSelector('div[class="thumbnail"] > video > source')
					const divElement = await pagein.$eval('div[class="thumbnail"] > video > source', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'intro.mp4', '', id)
					await browserin.close()
					limitAdd(serial)
					}
					if (q.includes('-tiger')) {
					await pagein.click("#radio0-radio-dd86455fc8bc4379b56ed191301544b2")
					await pagein.waitForSelector('#text-0')
					await pagein.type("#text-0", arg.split('|')[1])
					await pagein.click("#submit")
					await sleep(20000)
					await pagein.waitForSelector('div[class="thumbnail"] > video > source')
					const divElement = await pagein.$eval('div[class="thumbnail"] > video > source', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'intro.mp4', '', id)
					await browserin.close()
					limitAdd(serial)
					}
				})}
				else return await aruga.reply(from, `This command needs 2 things to work, *type, text*\n*(Else it won't work)*\n*Type Includes* : bull, lion, tiger, rhino, eagle, dragon\n\n*Format:* #intro -type |text\n*Example:* #intro -dragon |Hello`, id)
				break
			
			case prefix+'pubg':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a word/name`, id)
				if (q.length >= 16) return await aruga.reply(from, 'Max: 10 letters.', id)
				await aruga.reply(from, mess.wait + '\n\n40+ s.', id)
				const browserin = await puppeteer.launch(options)
				const pagein = await browserin.newPage()
				await pagein.goto("https://en.ephoto360.com/create-pubg-style-glitch-video-avatar-554.html", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
					await pagein.waitForSelector('#text-0')
					await pagein.type("#text-0", body.slice(6))
					await pagein.click("#submit")
					await sleep(20000)
					await pagein.waitForSelector('div[class="thumbnail"] > video > source')
					const divElement = await pagein.$eval('div[class="thumbnail"] > video > source', txLogo => txLogo.src)
					await aruga.sendFileFromUrl(from, divElement, 'intro.mp4', '', id)
					await browserin.close()
					limitAdd(serial)
				})
				break
				
				case prefix+'animemusic':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				await aruga.reply(from, mess.wait + '\n\n20+ s.', id)
				const browserani = await puppeteer.launch(options)
				const pageani = await browserani.newPage()
				await pageani.goto("https://ongaku.js.org/", { waitUntil: "networkidle2", timeout: 0 }).then(async () => {
					await sleep(5000)
					await pageani.waitForSelector('body > audio')
					const divElement = await pageani.$eval('body > audio', txLogo => txLogo.src)
					await aruga.sendFile(from, divElement, 'anisong.mp3', '', id)
					await browserani.close()
					limitAdd(serial)
				})
				break
				
				
				/*
					case prefix+'wolfmetal':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                    if (args.length == 0) return aruga.reply(from, `Send orders ${prefix}wolfmetal [name]`, id)
                    aruga.reply(from, mess.wait, id)
                    const srhdaahh = body.slice(11)
                    aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/photooxy/wolfmetal?text=${srhdaahh}&apikey=1QM9kTIM1WUkJ57 `, `${srhdaahh}.jpg`, `here it is...`, id).catch(async () => { await aruga.reply(from, `Error!!\nIf used emoji then pls don't..`, id) })
					limitAdd(serial)
                    break
					case prefix+'flame':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                    if (args.length == 0) return aruga.reply(from, `Send orders ${prefix}flame [name]`, id)
                    aruga.reply(from, mess.wait, id)
                    const srhddaahh = body.slice(7)
                    aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/photooxy/flaming?text=${srhddaahh}&apikey=1QM9kTIM1WUkJ57 `, `${srhddaahh}.jpg`, `here it is...`, id).catch(async () => { await aruga.reply(from, `Error!!\nIf used emoji then pls don't..`, id) })
					limitAdd(serial)
                    break
					case prefix+'paperburn':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                    if (args.length == 0) return aruga.reply(from, `Send orders ${prefix}paperburn [name]`, id)
                    aruga.reply(from, mess.wait, id)
                    const srhhddaahh = body.slice(11)
                    aruga.sendFileFromUrl(from, `https://h4ck3rs404-api.herokuapp.com/api/textmaker/other5?text=${srhhddaahh}&theme=burnpaper&apikey=404Api `, `${srhhddaahh}.jpg`, `here it is...`, id).catch(async () => { await aruga.reply(from, `Error!!\nIf used emoji then pls don't..`, id) })
					limitAdd(serial)
                    break
					case prefix+'smoke':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                    if (args.length == 0) return aruga.reply(from, `Send orders ${prefix}smoke [name]`, id)
                    aruga.reply(from, mess.wait, id)
                    const srrhhddaahh = body.slice(7)
                    aruga.sendFileFromUrl(from, `https://api.zeks.me/api/smoketext?apikey=dc4x8bqxoKDYOGMAwlnOyOnvidk&text=${srrhhddaahh}`, `${srrhhddaahh}.jpg`, `here it is...`, id).catch(async () => { await aruga.reply(from, `Error!!\nIf used emoji then pls don't..`, id) })
					limitAdd(serial)
                    break
					case prefix+'papercut':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                    if (args.length == 0) return aruga.reply(from, `Send orders ${prefix}papercut [name]`, id)
                    aruga.reply(from, mess.wait, id)
                    const lmao6 = body.slice(10)
                    aruga.sendFileFromUrl(from, `https://h4ck3rs404-api.herokuapp.com/api/ephoto/papercut?text=${lmao6}&apikey=404Api `, `${lmao6}.jpg`, `here it is...`, id).catch(async () => { await aruga.reply(from, `Error!!\nIf used emoji then pls don't..`, id) })
					limitAdd(serial)
                    break
					case prefix+'romantic':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                    if (args.length == 0) return aruga.reply(from, `Send orders ${prefix}romantic [name]`, id)
                    aruga.reply(from, mess.wait, id)
                    const kawai = body.slice(10)
                    aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/photooxy/romantic?text=${kawai}&apikey=1QM9kTIM1WUkJ57`, `${kawai}.jpg`, `here it is...`, id).catch(async () => { await aruga.reply(from, `Error!!\nIf used emoji then pls don't..`, id) })
					limitAdd(serial)
                    break*/
        case prefix+'slightning000000000000000':
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrle = await uploadImages(mediaData, false)
                const imgnye = await stickerlight(getUrle)
                const Slight = imgnye.result.imgUrl
                await aruga.sendStickerfromUrl(from, Slight)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrle = await uploadImages(mediaData, false)
                const imgnye = await stickerlight(getUrle)
                const Slight = imgnye.result.imgUrl
                await aruga.sendStickerfromUrl(from, Slight)
            } else {
                await aruga.reply(from, `Wrong Format!\n⚠️ Please Send Pictures With #stickerlightning`, id)
            }
            break
        case prefix+'sfire':
        case prefix+'stickerfire':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                const imgnya = await stickerburn(getUrli)
                const Sfire = imgnya.result.imgUrl
                await aruga.sendStickerfromUrl(from, Sfire)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const getUrli = await uploadImages(mediaData, false)
                const imgnya = await stickerburn(getUrli)
                const Sfire = imgnya.result.imgUrl
                await aruga.sendStickerfromUrl(from, Sfire)
            } else {
                await aruga.reply(from, `Wrong Format!\n⚠️ Please Send Pictures With ${prefix}stickerfire`, id)
            }
            break
        case prefix+'ownerbot':
	case prefix+'owner':
            await aruga.sendContact(from, ownerNumberr)
            .then(() => aruga.sendText(from, 'Do not ask too many questions, this is not StackOverFlow!'))
            break
            case prefix+'animewall':
			case prefix+'animewallpaper':
			if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                aruga.reply(from, mess.wait, id);
                axios.get('https://akaneko-api.herokuapp.com/api/mobileWallpapers').then(res => {
                    aruga.sendFileFromUrl(from, res.data.url, 'Desktop Wallpaper.jpeg', 'Enjoy :>', id);
					limitAdd(serial)
                });
                break
                case prefix+'loli0':
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                aruga.reply(from, mess.wait, id)
			//axios.get('http://zekais-api.herokuapp.com/randomloli').then(res => {
                aruga.sendFileFromUrl(from, `https://docs-jojo.herokuapp.com/api/randomloli`, 'loli.jpg', '', id)
				limitAdd(serial)
                break
            case prefix+'autosticker':
	        case prefix+'autostiker':
            case prefix+'autostik':
				if (args.length == 0) return aruga.reply(from, `Feature enable or disable?`, id)
                if (args[0] === 'enable') {
                    if (isAutoStikerOn) return await aruga.reply(from, 'The auto sticker feature has been activated', id)
                    _autostiker.push(chat.id)
                    fs.writeFileSync('./lib/helper/autosticker.json', JSON.stringify(_autostiker))
                    await aruga.reply(from, 'Feature autosticker has been activated' , id)
                } else if (args[0] === 'disable') {
                    _autostiker.splice(chat.id, 1)
                    fs.writeFileSync('./lib/helper/autosticker.json', JSON.stringify(_autostiker))
                    await aruga.reply(from, 'Feature autostiker has been deactivated' , id)
                } else {
                    await aruga.reply(from, 'Format salah' , id)
                }
            break
                case prefix+'neko':
                try {
					if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
						if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                    aruga.reply(from, mess.wait, id)
                    axios.get('https://akaneko-api.herokuapp.com/api/neko').then(res => {
                        aruga.sendFileFromUrl(from, res.data.url, 'neko.jpeg', 'Neko *Nyaa*~');
						limitAdd(serial)
			////aruga.sendStickerfromUrlAsReply(from, res.data.url, '', '', id)
                    });
                } catch (err) {
                    console.log(err);
                    throw(err);
                };
                break
				case prefix+'foxgirl':
                try {
					if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
						if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                    aruga.reply(from, mess.wait, id)
                    axios.get('https://nekos.life/api/v2/img/fox_girl ').then(res => {
                        aruga.sendFileFromUrl(from, res.data.url, 'foxgirl.jpeg','');
						limitAdd(serial)
			////aruga.sendStickerfromUrlAsReply(from, res.data.url, '', '', id)
                    });
                } catch (err) {
                    console.log(err);
                    throw(err);
                };
                break
                case prefix+'boobs':
				if (!isGroupMsg) return aruga.reply(from, `This feature can only be used in groups`, id)
					if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
						if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
               //if (!isPrem) return aruga.reply(from, mess.prem, id)
                aruga.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/tits ').then(res => {
			aruga.sendFileFromUrl(from, res.data.url, 'bakaaa hentaii>~<', '', id)
			limitAdd(serial)
                });
                break
                
               case prefix+'rhentai':
			   if (!isGroupMsg) return aruga.reply(from, `This feature can only be used in groups`, id)
               //if (!isPrem) return aruga.reply(from, mess.prem, id)
				   if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
					   if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
               aruga.reply(from, mess.wait, id);
               axios.get('https://nekos.life/api/v2/img/hentai').then(res => {
               	aruga.sendFileFromUrl(from, res.data.url, '', '', id)
				limitAdd(serial)
		//aruga.sendStickerfromUrl(from, res.data.url)
               });
               break
			   
			   case prefix+'nhentai':
            case prefix+'nh':
			if (!isGroupMsg) return aruga.reply(from, `This feature can only be used in groups`, id)
			if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
			if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                if (isGroupMsg) {
                    await aruga.reply(from, mess.wait, id)
                    console.log(`Searching nHentai for ${args[0]}...`)
                    const validate = await nhentai.exists(args[0])
                    if (validate === true) {
                        try {
                            const pic = await api.getBook(args[0])
                                .then((book) => {
                                     return api.getImageURL(book.cover)
                                })
                            const dojin = await nhentai.getDoujin(args[0])
                            const { title, details, link } = dojin
                            const { tags, artists, languages, categories } = details
                            let teks = `*Title*: ${title}\n\n*Tags*: ${tags.join(', ')}\n\n*Artists*: ${artists}\n\n*Languages*: ${languages.join(', ')}\n\n*Categories*: ${categories}\n\n*Link*: ${link}`
                            await aruga.sendFileFromUrl(from, pic, 'nhentai.jpg', teks, id)
							limitAdd(serial)
                            console.log('Success sending nHentai info!')
                        } catch (err) {
                            console.error(err)
                            await aruga.reply(from, 'Error!', id)
                        }
                    } else {
                        await aruga.reply(from, 'Error!', id)
                    }
                } else {
                    await aruga.reply(from, mess.wait, id)
                    console.log(`Searching nHentai for ${args[0]}...`)
                    const validate = await nhentai.exists(args[0])
                    if (validate === true) {
                        try {
                            const pic = await api.getBook(args[0])
                                .then((book) => {
                                     return api.getImageURL(book.cover)
                                })
                            const dojin = await nhentai.getDoujin(args[0])
                            const { title, details, link } = dojin
                            const { tags, artists, languages, categories } = details
                            let teks = `*Title*: ${title}\n\n*Tags*: ${tags.join(', ')}\n\n*Artists*: ${artists}\n\n*Languages*: ${languages.join(', ')}\n\n*Categories*: ${categories}\n\n*Link*: ${link}`
                            await aruga.sendFileFromUrl(from, pic, 'nhentai.jpg', teks, id)
							limitAdd(serial)
                            console.log('Success sending nHentai info!')
                        } catch (err) {
                            console.error(err)
                            await aruga.reply(from, 'Error!', id)
                        }
                    } else {
                        await aruga.reply(from, 'Error!', id)
                    }
                }
            break
			case prefix+'nhsearch':
			if (!isGroupMsg) return aruga.reply(from, `This feature can only be used in groups`, id)
			if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
			if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                if (isGroupMsg) {
                    await aruga.reply(from, mess.wait, id)
                    console.log(`Searching nHentai for ${q}...`)
                    nana.search(q)
                        .then(async (g) => {
                            let txt = `*── 「 NHENTAI 」 ──*\n\n➸ *Result for*: ${q}`
                            for (let i = 0; i < g.results.length; i++) {
                                const { id, title, language } = g.results[i]
                                txt += `\n\n➸ *Title*: ${title}\n➸ *Language*: ${language.charAt(0).toUpperCase() + language.slice(1)}\n➸ *Link*: nhentai.net/g/${id}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                            }
                            await aruga.sendFileFromUrl(from, g.results[0].thumbnail.s, `${g.results[0].title}`, txt, id)
                                .then(() => console.log('Success sending nHentai results!'))
								limitAdd(serial)
                        })
                        .catch(async (err) => {
                            console.error(err)
                            await aruga.reply(from, 'Error!', id)
                        })
                } else {
                    await aruga.reply(from, mess.wait, id)
                    console.log(`Searching nHentai for ${q}...`)
                    nana.search(q)
                        .then(async (g) => {
                            let txt = `*── 「 NHENTAI 」 ──*\n\n➸ *Result for*: ${q}`
                            for (let i = 0; i < g.results.length; i++) {
                                const { id, title, language } = g.results[i]
                                txt += `\n\n➸ *Title*: ${title}\n➸ *Language*: ${language.charAt(0).toUpperCase() + language.slice(1)}\n➸ *Link*: nhentai.net/g/${id}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                            }
                            await aruga.sendFileFromUrl(from, g.results[0].thumbnail.s, `${g.results[0].title}`, txt, id)
                                .then(() => console.log('Success sending nHentai results!'))
								limitAdd(serial)
                        })
                        .catch(async(err) => {
                            console.error(err)
                            await aruga.reply(from, 'Error!', id)
                        })
                }
            break
               
                case prefix+'waifu':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
               //if (!isPrem) return aruga.reply(from, mess.prem, id)
				   if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
               aruga.reply(from, mess.wait, id);
               axios.get('https://api.waifu.pics/sfw/waifu ').then(res => {
			   aruga.sendFileFromUrl(from, res.data.url , ' ' ,'', id)
				limitAdd(serial)
               });
               break
			   case prefix+'neko2':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
               //if (!isPrem) return aruga.reply(from, mess.prem, id)
				   if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
               aruga.reply(from, mess.wait, id);
               axios.get('https://api.waifu.pics/sfw/neko ').then(res => {
			   aruga.sendFileFromUrl(from, res.data.url , ' ' ,'', id)
				limitAdd(serial)
               });
               break
			   case prefix+'shinobu':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
               //if (!isPrem) return aruga.reply(from, mess.prem, id)
				   if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
               aruga.reply(from, mess.wait, id);
               axios.get('https://api.waifu.pics/sfw/shinobu ').then(res => {
			   aruga.sendFileFromUrl(from, res.data.url , ' ' ,'', id)
				limitAdd(serial)
               });
               break
			   case prefix+'megumin':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
               //if (!isPrem) return aruga.reply(from, mess.prem, id)
				   if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
               aruga.reply(from, mess.wait, id);
               axios.get('https://api.waifu.pics/sfw/megumin ').then(res => {
			   aruga.sendFileFromUrl(from, res.data.url , ' ' ,'', id)
				limitAdd(serial)
               });
               break
			   case prefix+'wolfgirl':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
               //if (!isPrem) return aruga.reply(from, mess.prem, id)
				   if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
               aruga.reply(from, mess.wait, id);
               axios.get('https://api.waifu.pics/sfw/awoo ').then(res => {
			   aruga.sendFileFromUrl(from, res.data.url , ' ' ,'', id)
				limitAdd(serial)
               });
               break
			   case prefix+'neko3':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				   if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
               aruga.reply(from, mess.wait, id);
			   aruga.sendFileFromUrl(from,`https://api.dapuhy.ga/api/sfw/sfwneko?apikey=1QM9kTIM1WUkJ57`, ' ' ,'', id)
				limitAdd(serial)
               break
			   case prefix+'foxgirl2':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				   if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
               aruga.reply(from, mess.wait, id);
			   aruga.sendFileFromUrl(from,`https://api.dapuhy.ga/api/sfw/sfwfoxgirl?apikey=1QM9kTIM1WUkJ57`, ' ' ,'', id)
				limitAdd(serial)
               break
			   case prefix+'kemonomimi':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				   if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
               aruga.reply(from, mess.wait, id);
			   aruga.sendFileFromUrl(from,`https://api.dapuhy.ga/api/sfw/sfwkemonomimi?apikey=1QM9kTIM1WUkJ57`, ' ' ,'', id)
				limitAdd(serial)
               break
			   case prefix+'holo':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				   if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
               aruga.reply(from, mess.wait, id);
			   aruga.sendFileFromUrl(from,`https://api.dapuhy.ga/api/sfw/sfwholo?apikey=1QM9kTIM1WUkJ57`, ' ' ,'', id)
				limitAdd(serial)
               break
			   case prefix+'animeavatar2':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				   if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
               aruga.reply(from, mess.wait, id);
			   aruga.sendFileFromUrl(from,`https://api.dapuhy.ga/api/sfw/sfwwaifu?apikey=1QM9kTIM1WUkJ57`, ' ' ,'', id)
				limitAdd(serial)
               break
			
                case prefix+'animeavatar':
                    if (!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!' , id)
						if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
                    aruga.reply(from, mess.wait, id);
                    axios.get('https://nekos.life/api/v2/img/avatar').then(res => {
                        aruga.sendFileFromUrl(from, res.data.url, 'Avatar UwU');
                    });
                    break
            case prefix+'nekonsfw':
               //if (!isPrem) return aruga.reply(from, mess.prem, id)
                    aruga.reply(from, mess.wait, id);
                    axios.get('https://nekos.life/api/v2/img/nsfw_neko_gif ').then(res => {
                        aruga.sendStickerfromUrl(from, res.data.url, 'Sange.gif', '', id);
            })
                break

		break
            case prefix+'animewall2':
			case prefix+'animewallpaper2':
			if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
                aruga.reply(from, mess.wait, id);
                axios.get('https://akaneko-api.herokuapp.com/api/wallpapers').then(res => {
                    aruga.sendFileFromUrl(from, res.data.url, 'Desktop Wallpaper.jpeg', 'Enjoy :>', id);
                });
                break
       
                case prefix+'aesthetic':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                    aruga.reply(from, mess.wait, id)
					axios.get('https://meme-api.herokuapp.com/gimme/AestheticWallpapers').then(res => {
					aruga.sendFileFromUrl(from, res.data.url , `img.jpg`,'', id)
					limitAdd(serial)})
						break
				case prefix+'pinterest':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                    if (args.length == 0) return aruga.reply(from, `Send orders ${prefix}pinterest [name]`, id)
                    aruga.reply(from, mess.wait, id)
                    const pintt = body.slice(11)
					try {
					//axios.get(`https://bx-hunter.herokuapp.com/api/pinterest?text=${pintt}&apikey=Ikyy69`).then(res => {
                    aruga.sendFileFromUrl(from, `https://zenzapi.xyz/api/pinterest2?query=${pintt}&apikey=4fedf539f761`, `${pintt}.jpg`, `${pintt}, here it is...`, id).catch(async () => { return aruga.reply(from, `Error!!\nNo Image Found!..`, id) })
					await limitAdd(serial)
					}
					catch {
						aruga.reply(from, `No Image Found!`, id)
					}
                    break
				case prefix+'image':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                    if (args.length == 0) return aruga.reply(from, `Send orders ${prefix}image [name]`, id)
                    aruga.reply(from, mess.wait, id)
                    const pinntt = body.slice(7)
					try {
					axios.get(`https://bx-hunter.herokuapp.com/api/image-search?text=${pinntt}&apikey=Ikyy69`)
					.then(res => {
                    aruga.sendFileFromUrl(from, res.data.url, `${pinntt}.jpg`, `${pinntt}, here it is...`, id)
					limitAdd(serial)
					})}
					catch(error) {
						aruga.reply(from, `No Image Found!`, id)
					}
                    break
				
				case prefix+'uwu':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                    if (args.length == 0) return aruga.reply(from, `Send orders ${prefix}uwu _sentence_`, id)
					const uwuu = body.slice(5)
				try {
                    const uwuuu = (uwuifier.uwuifySentence(uwuu));
					aruga.reply(from, uwuuu, id)
					limitAdd(serial)
				}
				catch {
					aruga.reply(from, `Sowwy, I faiwed *sweats* t-to c-convewt this winye! >w<`, id)
				}
                    break
				
                case prefix+'antilink':
                    if (!isGroupMsg) return aruga.reply(from, 'Sorry, this command can only be used within groups!', id)
                    if (!isGroupAdmins) return aruga.reply(from, 'Failed, this command can only be used by group admins!', id)
					if (!isBotGroupAdmins) return aruga.reply(from, 'Failed, if you want to use this feature, make me admin', id)
                    if (args[0] == 'on') {
                        var cek = antilink.includes(chatId);
                        if(cek){
                            return aruga.reply(from, '*Anti Group Link Detector* already active in this group', id) //if number already exists on database
                        } else {
                            antilink.push(chatId)
                            fs.writeFileSync('./lib/helper/antilink.json', JSON.stringify(antilink))
                            aruga.reply(from, '*[Anti Group Link]* has been activated\nEach group member who sends a message containing the group link will be kicked by the bot!', id)
                        }
                    } else if (args[0] == 'off') {
                        var cek = antilink.includes(chatId);
                        if(!cek){
                            return aruga.reply(from, '*Anti Group Link Detector* is already inactive in this group', id) //if number already exists on database
                        } else {
                            let nixx = antilink.indexOf(chatId)
                            antilink.splice(nixx, 1)
                            fs.writeFileSync('./lib/helper/antilink.json', JSON.stringify(antilink))
                            aruga.reply(from, '*[Anti Group Link]* has been disabled\n', id)
                        }
                    } else {
                        aruga.reply(from, `select on/off\n\n*[Anti Group Link]*\nEach group member who sends a message containing the group link will be kicked by the bot!`, id)
                    }
                    break
		case prefix+'nsfw':		
			if (!isGroupMsg) return aruga.reply(from, `This feature can only be used in groups`, id)
            if (!isGroupAdmins && !isOwnerB) return aruga.reply(from, `This command can only be used by the Admin group`, id)
				if (args.length == 0) return aruga.reply(from, `Feature on or off?`, id)
                if (args[0] === 'on') {
                    if (isNsfw) return await aruga.reply(from, 'The NSFW feature has been activated', id)
                    nsfw.push(chat.id)
                    fs.writeFileSync('./settings/nsfw.json', JSON.stringify(nsfw))
                    await aruga.reply(from, 'Feature NSFW has been activated' , id)
                } else if (args[0] === 'off') {
                    nsfw.splice(chat.id, 1)
                    fs.writeFileSync('./settings/nsfw.json', JSON.stringify(nsfw))
                    await aruga.reply(from, 'Feature NSFW has been deactivated' , id)
                } else {
                    await aruga.reply(from, 'Wrong Format' , id)
                }
            break
			case prefix+'animemode':		
			if (!isGroupMsg) return aruga.reply(from, `This feature can only be used in groups`, id)
            if (!isGroupAdmins && !isOwnerB) return aruga.reply(from, `This command can only be used by the Admin group`, id)
				if (args.length == 0) return aruga.reply(from, `Feature on or off?`, id)
                if (args[0] === 'on') {
                    if (isAnime) return await aruga.reply(from, 'The Anime mode has been activated', id)
                    anime.push(chat.id)
                    fs.writeFileSync('./settings/anime.json', JSON.stringify(anime))
                    await aruga.reply(from, 'Anime mode has been activated' , id)
                } else if (args[0] === 'off') {
                    anime.splice(chat.id, 1)
                    fs.writeFileSync('./settings/anime.json', JSON.stringify(anime))
                    await aruga.reply(from, 'Anime mode has been deactivated' , id)
                } else {
                    await aruga.reply(from, 'Wrong Format' , id)
                }
            break
		case prefix+'inv':
		case prefix+'invite':
		    var qmoed = quotedMsgObj.sender.id
            if (!isGroupMsg) return aruga.reply(from, `This feature can only be used in groups`, id)
            if (!isGroupAdmins) return aruga.reply(from, `This command can only be used by the Admin group`, id)
            if (!isBotGroupAdmins) return aruga.reply(from, `This command can only be used when bot becoms admin`, id)
            try {
                await aruga.addParticipant(from, qmoed)
            } catch {
                aruga.reply(from, mess.error.Ad, id)
            }
            break
                    case prefix+'tag':
                    if (!isGroupMsg) return aruga.reply(from, 'this command can only be used in groups', id)
                    if (!args.length >= 1) return await aruga.reply(from, 'message cannot be empty', id) ;{
                        const text = body.slice(5)
                        const mem = groupMembers
                        const randMem = mem[Math.floor(Math.random() * mem.length)];
                        const sapa = `${text} 👉 @${randMem}`
                        await aruga.sendTextWithMentions(from, sapa)
                    }
                    break    
                    case prefix+'ava':
                    if (!isGroupMsg) return aruga.reply(from, 'This feature can only be used in groups', id)
                    if (!quotedMsg) return aruga.reply(from, 'Quote / reply message someone who will download the photo!!', id)
                    try {
                        const dp = await aruga.getProfilePicFromServer(quotedMsgObj.sender.id)
                        if (dp == undefined) {
                            var pfp = aruga.reply(from, 'He is shy, maybe he is depressed and does not dare to put up a profile picture', id)
                            } else {
                            var pfp = aruga.sendFileFromUrl(from, dp, 'profile.png')
                            } 
                    } catch {
                        aruga.reply(from, 'There is no profile photo / private', id)
                    }
                    break
					case prefix+'abuse':
					if (!isGroupMsg) return aruga.reply(from, 'This feature can only be used in groups', id)
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (mentionedJidList.length === 0) return aruga.reply(from, 'Kisko gaali deni..\nCommand likh kr tag karo....', id)
				const cecaninn = JSON.parse(fs.readFileSync('./lib/abuse.json'))
				const randoom2 = Math.floor(Math.random() * cecaninn.length)
				const aahhayu = cecaninn[randoom2]
				limitAdd(serial)
				for (let i = 0; i < mentionedJidList.length; i++) {
				if (ownerNumber.includes(mentionedJidList[i])) return aruga.reply(from, 'Bhai hai mera ye..', id)
                if (botNumber.includes(mentionedJidList[i])) return await aruga.reply(from, 'Khud ko gaali nhi..', id)
                aruga.sendTextWithMentions(from,`${aahhayu} @${mentionedJidList[0].replace('@c.us', '')}`, id)
            }
			break
			case prefix+'enabuse':
					if (!isGroupMsg) return aruga.reply(from, 'This feature can only be used in groups', id)
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (mentionedJidList.length === 0) return aruga.reply(from, `Tag the one I'm suppose to abuse`, id)
				const cecaniinn = JSON.parse(fs.readFileSync('./lib/enabuse.json'))
				const rrandoom2 = Math.floor(Math.random() * cecaniinn.length)
				const aahhayuu = cecaniinn[rrandoom2]
				limitAdd(serial)
				for (let i = 0; i < mentionedJidList.length; i++) {
				if (ownerNumber.includes(mentionedJidList[i])) return aruga.reply(from, 'He is my brother..', id)
                if (botNumber.includes(mentionedJidList[i])) return await aruga.reply(from, 'Cannot abuse myself..', id)
                aruga.sendTextWithMentions(from,`${aahhayuu} @${mentionedJidList[0].replace('@c.us', '')}`, id)
            }
			break
                    case prefix+'mystat':{
                    const userid = sender.id
                    const ban = banned.includes(userid)
                    const blocked = await aruga.getBlockedIds()
                    const isblocked = blocked.includes(userid)
                    const ct = await aruga.getContact(userid)
                    const isOnline = await aruga.isChatOnline(userid) ? '✔' : '❌'
                    var sts = await aruga.getStatus(userid)
                    const bio = sts
                    const admins = groupAdmins.includes(userid) ? 'Admin' : 'Member'
                    var found = false
                        Object.keys(pengirim).forEach((i) => {
                            if(pengirim[i].id == userid){
                                found = i
                            }
                        })
                    var adm = admins
                    if (ct == null) {
                        return await aruga.reply(from, 'Invalid WhatsApp number [Not registered on WhatsApp]', id) 
                    } else {
                    const contact = ct.pushname
                    const dp = await aruga.getProfilePicFromServer(userid)
                    if (dp == undefined) {
                        var pfp = 'https://cdn3.iconfinder.com/data/icons/hosting-11/60/private__user__account__profile__avatar-512.png '
                        } else {
                        var pfp = dp
                        } 
                    if (contact == undefined) {
                        var nama = '_He is shy, does not want to show his name_' 
                        } else {
                        var nama = contact
                        } 
                    const caption = `*Detail Member* ✨ \n\n● *Name :* ${nama}\n● *Bio :* ${bio.status}\n● *Chat link :* wa.me/${sender.id.replace('@c.us', '')}\n● *Role :* ${adm}\n● *Banned by Bot :* ${ban ? '✔' : '❌'}\n● *Blocked by Bot :* ${isblocked ? '✔' : '❌'}\n● *Chat with bot :* ${isOnline}`
                    aruga.sendFileFromUrl(from, pfp, 'dp.jpg', caption)
                    }
                    }
                break     
               
                
            case prefix+'resend':
                if (!isGroupAdmins && !isOwnerB) return aruga.reply(from, 'Admin only command...',id)
                if (quotedMsgObj) {
                    let encryptMedia
                    let replyOnReply = await aruga.getMessageById(quotedMsgObj.id)
                    let obj = replyOnReply.quotedMsgObj
                    if (/ptt|audio|video|image|document|sticker/.test(quotedMsgObj.type)) {
                        encryptMedia = quotedMsgObj
                        if (encryptMedia.animated) encryptMedia.mimetype = ''
                    } else if (obj && /ptt|sticker|gif|text|audio|video|image/.test(obj.type)) {
                        encryptMedia = obj
                    } else return
                    const _mimetype = encryptMedia.mimetype
                    const mediaData = await decryptMedia(encryptMedia)
                    await aruga.sendFile(from, `data:${_mimetype};base64,${mediaData.toString('base64')}`, 'file', ':)', encryptMedia.id)
                } else aruga.reply(from, 'Error', id)
                break
				
				case prefix+'pictcecan':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				const cecan = fs.readFileSync('./lib/helper/cecan.json')
				const cecanin = JSON.parse(cecan)
				const random2 = Math.floor(Math.random() * cecanin.length)
				const ahhayu = cecanin[random2]
				aruga.sendFile(from, ahhayu, 'img.jpg', 'nehh cecan', id)
				limitAdd(serial)
				break
                
         
			case prefix+'join000':
            if (args.length == 0) return aruga.reply(from, `If you want to invite bots to a group, please invite or by\n${prefix}join [link group]`, id)
		if (!isPrem) return aruga.reply(from, `ERROR....\n(Can't join groups, issue with source code)`, id)
            let linkgrup = body.slice(6)
            let islink = linkgrup.match(/(https:\/\/chat.whatsapp.com)/gi)
            let chekgrup = await aruga.inviteInfo(linkgrup)
            if (!islink) return aruga.reply(from, 'Maaf link group-nya salah! silahkan kirim link yang benar', id)
            if (isPrem) {
                await aruga.joinGroupViaLink(linkgrup)
                      .then(async () => {
                          await aruga.sendText(from, 'Berhasil join grup via link!')
                          await aruga.sendText(chekgrup.id, `what up y'all , I'm Urbae Bot. To find out the commands on this Bot type ${prefix}menu`)
                      })
            } else {
                let cgrup = await aruga.getAllGroups()
                if (cgrup.length > groupLimit) return aruga.reply(from, `Sorry, the group on this bot is full\nMax Group is: ${groupLimit}`, id)
                if (cgrup.size < memberLimit) return aruga.reply(from, `Sorry, Bot wil not join if the group members do not exceed ${memberLimit} people`, id)
                await aruga.joinGroupViaLink(linkgrup)
                      .then(async () =>{
                          await aruga.reply(from, 'Berhasil join grup via link!', id)
                      })
                      .catch(() => {
                          aruga.reply(from, 'Gagal!', id)
                      })
            }
            break
			case prefix+'join00':
            if (args.length === 0) return aruga.reply(from, 'If you want to invite the bot to the group please invite \nType #join grplink', id)
            const link = body.slice(6)
            const tGr = await aruga.getAllGroups()
            const minMem = 10
            const isLink = link.match(/(https:\/\/chat.whatsapp.com)/gi)
            const check = await aruga.inviteInfo(link)
            if (!isLink) return aruga.reply(from, 'Where is the link? 👊🤬', id)
            if (tGr.length > 100) return aruga.reply(from, 'Sorry, number of groups in maximum in BOT\nTry after a while...!', id)
            if (check.size < minMem) return aruga.reply(from, 'Members not more than 10, BOT will not join..', id)
            if (check.status === 200) {
                await aruga.joinGroupViaLink(link)
				.then(async () => {
                          await aruga.sendText(from, 'Successfully joined..!')
                      })
            } else {
                aruga.reply(from, 'Invalid group link or I was removed from it!', id)
            }
            break
        
		
	case prefix+'reportbug000000000000000000000':
		aruga.reply(from, mess.wait, id)
		const reporter = body.slice(11)
		await aruga.sendText(ownerNumber, `Laporan bug dari : *${pushname}*\nNomor : ${serial.replace('@c.us', '')}\n\nBug : *${reporter}*`)
		aruga.reply(from, 'Laporan berhasil dikirim ke Owner Bot!', id)
		break
        case prefix+'setgcname':
            if (!isGroupMsg) return aruga.reply(from, `This feature can only be used in groups`, id)
            if (!isGroupAdmins) return aruga.reply(from, `This feature can only be used by group admins`, id)
			if (!isBotGroupAdmins) return aruga.reply(from, 'Failed, if you want to use this feature, make me admin', id)
            const namagrup = body.slice(11)
            const sebelum = chat.groupMetadata.gcok
            let halaman = global.page ? global.page : await aruga.getPage()
            await halaman.evaluate((chatId, subject) =>
            Store.WapQuery.changeSubject(chatId, subject),groupId, `${namagrup}`)
            aruga.sendTextWithMentions(from, `The group name has been changed by the admin @${sender.id.replace('@c.us','')}\n\nNew Name: ${namagrup}`)
            break
        case prefix+'setname':
                if (!isOwnerB) return aruga.reply(from, `This command can only be used by Owner Bot!`, id)
                    const setnem = body.slice(9)
                    await aruga.setMyName(setnem)
                    aruga.sendTextWithMentions(from, `Makasih Nama Barunya @${sender.id.replace('@c.us','')} 😘`)
                break
                case prefix+'read':
                    if (!isGroupMsg) return aruga.reply(from, `This command can only be used in groups!`, id)                
                    if (!quotedMsg) return aruga.reply(from, `Tolong Reply Pesan Bot`, id)
                    if (!quotedMsgObj.fromMe) return aruga.reply(from, `Tolong Reply Pesan Bot`, id)
                    try {
                        const reader = await aruga.getMessageReaders(quotedMsgObj.id)
                        let list = ''
                        for (let pembaca of reader) {
                        list += `- @${pembaca.id.replace(/@c.us/g, '')}\n` 
                    }
                        aruga.sendTextWithMentions(from, `Ngeread doangg.. Nimbrung kagaa\n${list}`)
                    } catch(err) {
                        console.log(err)
                        aruga.reply(from, `Maaf, Belum Ada Yang Membaca Pesan Bot atau Mereka Menonaktifkan Read Receipts`, id)    
                    }
                    break
        case prefix+'setstatus':
                if (!isOwnerB) return aruga.reply(from, `This command can only be used by Owner Bot!`, id)
                    const setstat = body.slice(11)
                    await aruga.setMyStatus(setstat)
                    aruga.sendTextWithMentions(from, `Makasih Status Barunya @${sender.id.replace('@c.us','')} 😘`)
                break
        case prefix+'botstat': {
            const loadedMsg = await aruga.getAmountOfLoadedMessages()
            const charged = await aruga.getIsPlugged();
            const device = await aruga.getMe(); 
            const deviceinfo = `- Battery Level : ${device.battery}%\n  ├ Is Charging : ${charged}\n  └ 24 Hours Online : ${device.is24h}\n  ├ OS Version : ${device.phone.os_version}\n  └ Build Number : ${device.phone.os_build_number}\n\n\n _*Time :*_ ${moment(t * 1000).format('HH:mm:ss')}\n`   
            const chatIds = await aruga.getAllChatIds()
            const groups = await aruga.getAllGroups()
            const groupsIn = groups.filter(x => x.groupMetadata.participants.map(x => [botNumber, '919935451823@c.us'].includes(x.id._serialized)).includes(true))
            aruga.sendText(from, `*Device Info*\n${deviceinfo}\n\n\nStatus :\n- *${loadedMsg}* Loaded Messages\n- *${groupsIn.length}* Group Joined\n- *${groups.length - groupsIn.length}* Groups Left\n- *${groups.length}* Group Chats\n- *${chatIds.length - groups.length}* Personal Chats\n- *${chatIds.length - groups.length - groupsIn.length}* Personal Chats Active\n- *${chatIds.length}* Total Chats\n- *${chatIds.length - groupsIn.length}* Total Chats Active\n\n*Whatsapp Version :* ${waver}`)
            break
        }
		
	//Sticker Converter
	case prefix+'take':
	if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                    if (quotedMsg && quotedMsg.type == 'sticker' || quotedMsg && quotedMsg.type == 'image') {
                        if (!q.includes('|')) return await aruga.reply(from, `To change the sticker watermark, reply sticker / image with the caption ${prefix}take package_name | author_name \n\nExample: ${prefix}takestick Hello | World`, id)
                        await aruga.reply(from, mess.wait, id)
                        const packnames = q.substring(0, q.indexOf('|') - 1)
                        const authors = q.substring(q.lastIndexOf('|') + 2)
                        const mediaData = await decryptMedia(quotedMsg)
                        const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await aruga.sendImageAsSticker(from, imageBase64, { author: `${authors}`, pack: `${packnames}` })
						limitAdd(serial)
                       
                    } else if(isMedia && type === 'image' || isMedia && type === 'sticker') {
						await aruga.reply(from, mess.wait, id)
                        const packnames = q.substring(0, q.indexOf('|') - 1)
                        const authors = q.substring(q.lastIndexOf('|') + 2)
                        const mediaData = await decryptMedia(message, uaOverride)
						const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                        await aruga.sendImageAsSticker(from, imageBase64, { author: `${authors}`, pack: `${packnames}` })
						limitAdd(serial)
					} else {
						aruga.reply(from, 'Message format is wrong om', id)
					}
        break
		case prefix+'nimesticker': // by CHIKAA CHANTEKKXXZZ
            case prefix+'animesticker': 
                if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
                .then(res => res.text())
                .then(body => {
                    let randomkpopp = body.split('\n')
                    let randomkpoppx = randomkpopp[Math.floor(Math.random() * randomkpopp.length)]
                    aruga.sendStickerfromUrl(from, randomkpoppx,'', { author: authorr, pack: pack, keepScale: true },id)
					limitAdd(serial)
                })
                    .catch(async (err) => {
                        console.error(err)
                        await aruga.reply(from, 'Error!', id)
                    })
            break
		case prefix+'face':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				const gasm = await axios.get('https://nekos.life/api/v2/img/gasm')
				await aruga.sendImageAsSticker(from, gasm.data.url, { author: authorr, pack: pack, keepScale: true })
				limitAdd(serial)
				break
		case prefix+'gecg':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				const memean = await axios.get('https://nekos.life/api/v2/img/gecg')
				await aruga.sendFileFromUrl(from, memean.data.url, '', '', id)
				limitAdd(serial)
				break
		case prefix+'icon':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				const avatarz = await axios.get('https://nekos.life/api/v2/img/avatar')
				await aruga.sendImageAsSticker(from, avatarz.data.url, { author: authorr, pack: pack, keepScale: true })
				limitAdd(serial)
				break
		case prefix+'chance':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await kill.reply(from, `This command needs something to work, for it to work insert a word/number.`, id)
				await aruga.reply(from, `_According to my super advanced calculations of ~monkey woman~ robot "cutie" the opportunity to..._ \n*"${body.slice(8)}"*\n_...for you is_ *${lvpc}%.*`, id)
				limitAdd(serial)
				break
		case prefix+'life':
		case prefix+'fmlife':
		case prefix+'fml':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				await aruga.reply(from, fmylife, id)
				limitAdd(serial)
				break
		case prefix+'pickupline':
		case prefix+'pul':
		case prefix+'puline':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				await aruga.reply(from, getHappyness, id)
				limitAdd(serial)
				break
		case prefix+'never':
				await aruga.reply(from, getNeverland, id)
				break
		case prefix+'surprise':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				const surpmother = await fs.readFileSync('./lib/config/Utilidades/sounds.txt').toString().split('\n')
				const theSurprise = surpmother[Math.floor(Math.random() * surpmother.length)]
				await aruga.sendFileFromUrl(from, `https://www.myinstants.com/media/sounds/${theSurprise}`, 'audio.mp3', '', null, null, null, true, null, null).catch(async(err) => { console.log(err);await aruga.sendPtt(from, 'https://www.myinstants.com/media/sounds/soviet-anthem-but-its-sung-by-a-loli-audiotrimmer.mp3') })
				limitAdd(serial)
				break		
		case prefix+'rockpaperscissor':
		case prefix+'jokenpo':
				const bigThree = Math.floor(Math.random() * 3) + 1;
				const jokenPedra = ['stone', '✊', '✊🏻', '✊🏼', '✊🏽', '✊🏾', 'rock', 'Stone', '🪨'];
				const jokenLesb = ['scissors', '✌️', '✌🏻', '✌🏼', '✌🏽', '✌🏾', '✌🏿', 'Scissors', 'scissor', '✂️'];
				const jokenPaper = ['paper', '✋', '✋🏻', '✋🏼', '✋🏽', '✋🏾', '✋🏿', 'paper', '🤚', '🤚🏻', '🤚🏼', '🤚🏽', '🤚🏾', '🤚🏿']
				if (!jokenPedra.includes(args[0]) && !jokenPaper.includes(args[0]) && !jokenLesb.includes(args[0])) return await aruga.reply(from, `This command needs something to work, for it to work insert a ` + 'stone [✊🏻], paper [✋🏿] or scissors [✌️]', id)
				const needPlay = jokenPedra.includes(args[0]) ? 1 : jokenPaper.includes(args[0]) ? 2 : jokenLesb.includes(args[0]) ? 3 : false
				const theMove = bigThree == 1 ? '✊ - stone/Rock/Stone' : bigThree == 2 ? '✋ - paper/Paper' : bigThree == 3 ? '✌️ - scissors/scissor/Scissors' : 'Something'
				if (needPlay == bigThree) {
					await aruga.reply(from, `How boring, it was a draw, we both played ${theMove}...`, id)
				} else if (needPlay == 2 && bigThree == 1 || needPlay == 3 && bigThree == 2 || needPlay == 1 && bigThree == 3) {
					await aruga.reply(from, `Aaaa! I lost, I played ${theMove} and you ${args[0]}.`, id)
				} else return await aruga.reply(from, `Haha! I won by playing ${theMove} and you ${args[0]}!`, id)
				break
		case prefix+'number':
				if (args.length == 0 || isNaN(args[0]) || isNaN(args[1])) return await aruga.reply(from, `This command needs something to work, for it to work insert a Min-Number Max-Number.\n\nEx: ${prefix}Number 1 10`, id)
				const randomNumber = Math.floor(Math.random() * Number(args[1])) + Number(args[0])
				await aruga.reply(from, `☘ - ${randomNumber} - ☘`, id)
				break
		case prefix+'tweet':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a Twitter @.'`, id)
				const twitterMsg = await axios.get(`https://decapi.me/twitter/latest/${args[0]}`)
				await aruga.reply(from, `Latest ${args[0]}'s tweet → "${twitterMsg.data}".`, id)
				limitAdd(serial)
				break
		case prefix+'movie':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a movie Name.`, id)
				const movieInfo = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=e66350fcda796aeecf98c02e30408857&query=${encodeURIComponent(body.slice(7))}&language=en`)
				if (movieInfo.data.total_results == 0) return await aruga.reply(from, `Ugh...sorry, no results for that command... :C`, id)
				const fotoFilme = movieInfo.data.results[0].backdrop_path == null ? errorImg : `https://image.tmdb.org/t/p/original${movieInfo.data.results[0].backdrop_path}`
				await aruga.sendFileFromUrl(from, fotoFilme, 'filme.jpg', `Name: ${movieInfo.data.results[0].title}\n\nOfficial Name: ${movieInfo.data.results[0].original_title}\n\nRelease: ${movieInfo.data.results[0].release_date}\n\nRating: ${movieInfo.data.results[0].vote_average} - (${movieInfo.data.results[0].vote_count} Votes)\n\nPopularity: ${movieInfo.data.results[0].popularity.toFixed(1)}%\n\nAdult: ${movieInfo.data.results[0].adult ? 'Yes' : 'No'}\n\nOfficial Lang: ${movieInfo.data.results[0].original_language}\n\nDescription: ${movieInfo.data.results[0].overview}`, id)
				limitAdd(serial)
				break
		case prefix+'vcard':
				if (args.length == 0 || !q.includes('|')) return await aruga.reply(from, `This command needs something to work, for it to work insert a ____ | ____`, id)
				await aruga.sendVCard(from, `BEGIN:VCARD\nVERSION:3.0\nFN;CHARSET=UTF-8:${arg.split('|')[1]}\nTEL;TYPE=CELL,VOICE:${arg.split('|')[0]}\nEND:VCARD`)
				break
		case prefix+'trending':;case prefix+'twitter':;case prefix+'trendings':;case prefix+'trend':;case prefix+'trends':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a full Country Name.`, id)
				const newsNow = await axios.get(`https://api-twitter-trends.herokuapp.com/trends?location=${args[0]}`)
				if (newsNow.data.status == false) return await aruga.reply(from, mess.noresult(), id)
				var theTrend = `🌎 - ${newsNow.data.data.location} - 🌎\n\n`
				for (let i = 0; i < 10; i++) {
					var monkeyIdent = newsNow.data.data.trends[1].data[i].tweet_count == '' ? '+1K' : newsNow.data.data.trends[1].data[i].tweet_count
					theTrend += `\n${i + 1} → *#${newsNow.data.data.trends[1].data[i].name} - ${monkeyIdent} Tweets*\n`
				}
				await aruga.reply(from, theTrend, id)
				limitAdd(serial)
				break
		case prefix+'horoscopo':
		case prefix+'horoscope':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				const signoerr = `❌ → ${args[0]} ← ❌!\n\n✔️ → Aries --- Taurus --- Gemini --- Cancer --- Leo --- Virgo --- Libra --- Scorpio --- Sagittarius --- Capricorn --- Aquarius --- Pisces.`
				if (args.length == 0) return await aruga.reply(from, signoerr, id)
				const zodd = await axios.get(`http://horoscope-api.herokuapp.com/horoscope/today/${encodeURIComponent(args[0])}`)
				if (zodd.data.horoscope == '[]') return await aruga.reply(from, signoerr, id)
				await aruga.reply(from, zodd.data.horoscope, id)
				limitAdd(serial)
				break
		case prefix+'tinyurl':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `Etoo, you have inserted a link? I can't see her, with or without glasses.`, id)
				const tinurl = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(args[0])}`)
				if (tinurl.data == 'Error') return await aruga.reply(from, `Etoo, you have inserted a link? I can't see her, with or without glasses.` + '\n\n' + `Error!!`, id)
				await aruga.reply(from, `OLD: ${args[0]}\n New: ${tinurl.data}`, id)
				limitAdd(serial)
				break
		case prefix+'covid':
				if (args.lenght == 0) return await aruga.reply(from, `To search for the number of cases, use the name of the country without accents, for a list of the countries use ${prefix}paises.`, id)
				const covidnb = await axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${encodeURIComponent(body.slice(7))}`)
				if (covidnb.data == 'Country not found') return await aruga.reply(from, `To search for the number of cases, use the name of the country without accents, for a list of the countries use ${prefix}paises.`, id)
				await aruga.reply(from, `*✪ Cases at ${covidnb.data.country} >* ${covidnb.data.cases}\n\n*✪ Cases today >* ${covidnb.data.todayCases}\n\n*✪ Deaths >* ${covidnb.data.deaths}\n\n*✪ Deaths today >* ${covidnb.data.todayDeaths}\n\n*✪ Recovered >* ${covidnb.data.recovered}\n\n*✪ Actives >* ${covidnb.data.active}\n\n*✪ Critical cases >* ${covidnb.data.critical}\n\n*✪ Total tests >* ${covidnb.data.totalTests}`, id)
				break
				
			case prefix+'paises':
				await aruga.reply(from, `╭───「 🎌 Countries Usables 🏁 」 \n│\n│ 😷 Afghanistan\n│\n│ 😷 Albania\n│\n│ 😷 Algeria\n│\n│ 😷 Andorra\n│\n│ 😷 Angola\n│\n│ 😷 Anguilla\n│\n│ 😷 Antigua and Barbuda\n│\n│ 😷 Argentina\n│\n│ 😷 Armenia\n│\n│ 😷 Aruba\n│\n│ 😷 Australia\n│\n│ 😷 Austria\n│\n│ 😷 Azerbaijan\n│\n│ 😷 Bahamas\n│\n│ 😷 Bahrain\n│\n│ 😷 Bangladesh\n│\n│ 😷 Barbados\n│\n│ 😷 Belarus\n│\n│ 😷 Belgium\n│\n│ 😷 Belize\n│\n│ 😷 Benin\n│\n│ 😷 Bermuda\n│\n│ 😷 Bhutan\n│\n│ 😷 Bolivia\n│\n│ 😷 Bosnia and Herzegovina\n│\n│ 😷 Botswana\n│\n│ 😷 Brazil\n│\n│ 😷 British Virgin Islands\n│\n│ 😷 Brunei\n│\n│ 😷 Bulgaria\n│\n│ 😷 Burkina Faso\n│\n│ 😷 Burundi\n│\n│ 😷 CAR\n│\n│ 😷 Cabo Verde\n│\n│ 😷 Cambodia\n│\n│ 😷 Cameroon\n│\n│ 😷 Canada\n│\n│ 😷 Caribbean Netherlands\n│\n│ 😷 Cayman Islands\n│\n│ 😷 Chad\n│\n│ 😷 Channel Islands\n│\n│ 😷 Chile\n│\n│ 😷 China\n│\n│ 😷 Colombia\n│\n│ 😷 Comoros\n│\n│ 😷 Congo\n│\n│ 😷 Costa Rica\n│\n│ 😷 Croatia\n│\n│ 😷 Cuba\n│\n│ 😷 Curaçao\n│\n│ 😷 Cyprus\n│\n│ 😷 Czechia\n│\n│ 😷 DRC\n│\n│ 😷 Denmark\n│\n│ 😷 Diamond Princess\n│\n│ 😷 Djibouti\n│\n│ 😷 Dominica\n│\n│ 😷 Dominican Republic\n│\n│ 😷 Ecuador\n│\n│ 😷 Egypt\n│\n│ 😷 El Salvador\n│\n│ 😷 Equatorial Guinea\n│\n│ 😷 Eritrea\n│\n│ 😷 Estonia\n│\n│ 😷 Eswatini\n│\n│ 😷 Ethiopia\n│\n│ 😷 Faeroe Islands\n│\n│ 😷 Falkland Islands\n│\n│ 😷 Fiji\n│\n│ 😷 Finland\n│\n│ 😷 France\n│\n│ 😷 French Guiana\n│\n│ 😷 French Polynesia\n│\n│ 😷 Gabon\n│\n│ 😷 Gambia\n│\n│ 😷 Georgia\n│\n│ 😷 Germany\n│\n│ 😷 Ghana\n│\n│ 😷 Gibraltar\n│\n│ 😷 Greece\n│\n│ 😷 Greenland\n│\n│ 😷 Grenada\n│\n│ 😷 Guadeloupe\n│\n│ 😷 Guatemala\n│\n│ 😷 Guinea-Bissau\n│\n│ 😷 Guinea\n│\n│ 😷 Guyana\n│\n│ 😷 Haiti\n│\n│ 😷 Honduras\n│\n│ 😷 Hong Kong\n│\n│ 😷 Hungary\n│\n│ 😷 Iceland\n│\n│ 😷 India\n│\n│ 😷 Indonesia\n│\n│ 😷 Iran\n│\n│ 😷 Iraq\n│\n│ 😷 Ireland\n│\n│ 😷 Isle of Man\n│\n│ 😷 Israel\n│\n│ 😷 Italy\n│\n│ 😷 Ivory Coast\n│\n│ 😷 Jamaica\n│\n│ 😷 Japan\n│\n│ 😷 Jordan\n│\n│ 😷 Kazakhstan\n│\n│ 😷 Kenya\n│\n│ 😷 Kuwait\n│\n│ 😷 Kyrgyzstan\n│\n│ 😷 Laos\n│\n│ 😷 Latvia\n│\n│ 😷 Lebanon\n│\n│ 😷 Lesotho\n│\n│ 😷 Liberia\n│\n│ 😷 Libya\n│\n│ 😷 Liechtenstein\n│\n│ 😷 Lithuania\n│\n│ 😷 Luxembourg\n│\n│ 😷 MS Zaandam\n│\n│ 😷 Macao\n│\n│ 😷 Madagascar\n│\n│ 😷 Malawi\n│\n│ 😷 Malaysia\n│\n│ 😷 Maldives\n│\n│ 😷 Mali\n│\n│ 😷 Malta\n│\n│ 😷 Marshall Islands\n│\n│ 😷 Martinique\n│\n│ 😷 Mauritania\n│\n│ 😷 Mauritius\n│\n│ 😷 Mayotte\n│\n│ 😷 Mexico\n│\n│ 😷 Micronesia\n│\n│ 😷 Moldova\n│\n│ 😷 Monaco\n│\n│ 😷 Mongolia\n│\n│ 😷 Montenegro\n│\n│ 😷 Montserrat\n│\n│ 😷 Morocco\n│\n│ 😷 Mozambique\n│\n│ 😷 Myanmar\n│\n│ 😷 Namibia\n│\n│ 😷 Nepal\n│\n│ 😷 Netherlands\n│\n│ 😷 New Caledonia\n│\n│ 😷 New Zealand\n│\n│ 😷 Nicaragua\n│\n│ 😷 Niger\n│\n│ 😷 Nigeria\n│\n│ 😷 North Macedonia\n│\n│ 😷 Norway\n│\n│ 😷 Oman\n│\n│ 😷 Pakistan\n│\n│ 😷 Palestine\n│\n│ 😷 Panama\n│\n│ 😷 Papua New Guinea\n│\n│ 😷 Paraguay\n│\n│ 😷 Peru\n│\n│ 😷 Philippines\n│\n│ 😷 Poland\n│\n│ 😷 Portugal\n│\n│ 😷 Qatar\n│\n│ 😷 Romania\n│\n│ 😷 Russia\n│\n│ 😷 Rwanda\n│\n│ 😷 Réunion\n│\n│ 😷 S. Korea\n│\n│ 😷 Saint Kitts and Nevis\n│\n│ 😷 Saint Lucia\n│\n│ 😷 Saint Martin\n│\n│ 😷 Saint Pierre Miquelon\n│\n│ 😷 Samoa\n│\n│ 😷 San Marino\n│\n│ 😷 Sao Tome and Principe\n│\n│ 😷 Saudi Arabia\n│\n│ 😷 Senegal\n│\n│ 😷 Serbia\n│\n│ 😷 Seychelles\n│\n│ 😷 Sierra Leone\n│\n│ 😷 Singapore\n│\n│ 😷 Sint Maarten\n│\n│ 😷 Slovakia\n│\n│ 😷 Slovenia\n│\n│ 😷 Solomon Islands\n│\n│ 😷 Somalia\n│\n│ 😷 South Africa\n│\n│ 😷 South Sudan\n│\n│ 😷 Spain\n│\n│ 😷 Sri Lanka\n│\n│ 😷 St. Barth\n│\n│ 😷 St. Vincent Grenadines\n│\n│ 😷 Sudan\n│\n│ 😷 Suriname\n│\n│ 😷 Sweden\n│\n│ 😷 Switzerland\n│\n│ 😷 Syria\n│\n│ 😷 Taiwan\n│\n│ 😷 Tajikistan\n│\n│ 😷 Tanzania\n│\n│ 😷 Thailand\n│\n│ 😷 Timor-Leste\n│\n│ 😷 Togo\n│\n│ 😷 Trinidad and Tobago\n│\n│ 😷 Tunisia\n│\n│ 😷 Turkey\n│\n│ 😷 Turks and Caicos\n│\n│ 😷 UAE\n│\n│ 😷 UK\n│\n│ 😷 USA\n│\n│ 😷 Uganda\n│\n│ 😷 Ukraine\n│\n│ 😷 Uruguay\n│\n│ 😷 Uzbekistan\n│\n│ 😷 Vanuatu\n│\n│ 😷 Vatican City\n│\n│ 😷 Venezuela\n│\n│ 😷 Vietnam\n│\n│ 😷 Wallis and Futuna\n│\n│ 😷 Western Sahara\n│\n│ 😷 World\n│\n│ 😷 Yemen\n│\n│ 😷 Zambia\n│\n│ 😷 Zimbabwe\n╰───────────────────`, id)
				break
		
		case prefix+'converter':
		case prefix+'conv':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args == 0) return await aruga.reply(from, `_To use you need to type_ *${prefix}conv [-letter] [Number to convert]* _follow the symbols below to use._\n\n*-h* _= This menu._\n\n*-c* _= Convert Fahfenheit to Celsius._\n\n*-f* _= Convert Celsius to Fahfenheit._\n\n*-q* _= Convert Mille to Kilometers._\n\n*-m* _= Convert Kilometers to Mille._\n\n_Example:_ *${prefix}conv -c 113*`, id)
				try {
					if (args[0].toLowerCase() == '-f') {
						if (isNaN(args[1])) return await aruga.reply(from, `That's correct? Try to not use accents or traces, only numbers.`, id)
						const cels = args[1] / 5 * 9 + 32
						await aruga.reply(from, `*${args[1]}* _C° - Celsius =_ ${cels} _F° - Fahrenheit._`, id)
						limitAdd(serial)
					} else if (args[0].toLowerCase() == '-c') {
						if (isNaN(args[1])) return await aruga.reply(from, `That's correct? Try to not use accents or traces, only numbers.`, id)
						const fahf = 5 * (args[1] - 32) / 9
						await aruga.reply(from, `*${args[1]}* _F° - Fahrenheit =_ *${fahf}* _C° - Celsius._`, id)
						limitAdd(serial)
					} else if (args[0].toLowerCase() == '-m') {
						if (isNaN(args[1])) return await aruga.reply(from, `That's correct? Try to not use accents or traces, only numbers.`, id)
						const ktom = args[1] * 0.62137
						await aruga.reply(from, `*${args[1]}* _KM =_ *${ktom}* _MI._`, id)
						limitAdd(serial)
					} else if (args[0].toLowerCase() == '-q') {
						if (isNaN(args[1])) return await aruga.reply(from, `That's correct? Try to not use accents or traces, only numbers.`, id)
						const mtok = args[1] / 0.62137
						await aruga.reply(from, `*${args[1]}* _MI =_ *${mtok}* _KM._`, id)
						limitAdd(serial)
					} else return await aruga.reply(from, `_To use you need to type_ *${prefix}conv [-letter] [Number to convert]* _follow the symbols below to use._\n\n*-h* _= This menu._\n\n*-c* _= Convert Fahfenheit to Celsius._\n\n*-f* _= Convert Celsius to Fahfenheit._\n\n*-q* _= Convert Mille to Kilometers._\n\n*-m* _= Convert Kilometers to Mille._\n\n_Example:_ *${prefix}conv -c 113*`, id)
				} catch (error) { 
					await aruga.reply(from, `That's correct? Try to not use accents or traces, only numbers.`, id)
					console.log(color('[CONVERSOR]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
		case prefix+'currency':
				if (args.length !== 2) return await aruga.reply(from, `To use, type the command, local currency abbreviation and then the value and other currency abbreviation of the one you want to obtain.\n\nExample: ${prefix}valor INR 1USD\n\nDigite ${prefix}coins to see the list of currencies that can be used, including yours. [It's a huge list].`, id)
				const money = await axios.get(`https://${encodeURIComponent(args[0])}.rate.sx/${encodeURIComponent(args[1])}`)
				const chkmy = money.data
				if (isNaN(chkmy)) return await aruga.reply(from, `To use, type the command, local currency abbreviation and then the value and other currency abbreviation of the one you want to obtain.\n\nExample: ${prefix}valor INR 1USD\n\nDigite ${prefix}coins to see the list of currencies that can be used, including yours. [It's a huge list].`, id)
				await aruga.reply(from, `*${args[1]}* → *${money.data.toFixed(2)}* ${args[0]}`, id)
				break
		case prefix+'stickergiffull':
		case prefix+'stikergiffull':
		case prefix+'sgiffull':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
		if (isMedia && type === 'video' || mimetype == 'sticker/gif') {
			aruga.reply(from, mess.wait, id)
			try {
				const mediaData = await decryptMedia(message, uaOverride)
				const vidbase = `data:${mimetype};base64,${mediaData.toString('base64')}`
				await aruga.sendMp4AsSticker(from, vidbase, gifxyz, StickerMetadata)
				.then(async () => {
					console.log(color(`Sticker Gif processed for ${processTime(t, moment())} seconds`, 'aqua'))
					limitAdd(serial)
				})
			} catch (err) {
				console.log(err)
				aruga.reply(from, 'The video length is too long, please shrink it a little\nminimal 9 detik', id)
			}
		} else if(quotedMsg && quotedMsg.type === 'sticker' || quotedMsg && quotedMsg.type === 'video') {
					aruga.reply(from, mess.wait, id)
                    try {
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const videoBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await aruga.sendMp4AsSticker(from, videoBase64, gifxyz, StickerMetadata)
                            .then(async () => {
                                console.log(color(`Sticker Gif processed for ${processTime(t, moment())} seconds`, 'aqua'))   
						limitAdd(serial)										
                            })
                    } catch (err) {
                        console.error(err)
                        await aruga.reply(from, `The video size is too large\nMaksimal size adalah 1MB!`, id)
                    }
                } else {
                    await aruga.reply(from, `The video size is too large`, id)
                }
				break	
		case prefix+'stickergif':
		case prefix+'stikergif':
		case prefix+'sgif':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
		if (isMedia && type === 'video' || mimetype === 'sticker/gif') {
                    aruga.reply(from, mess.wait, id)
                    try {
                        const mediaData = await decryptMedia(message, uaOverride)
                        const videoBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                        await aruga.sendMp4AsSticker(from, videoBase64, gifcrop, StickerMetadatacrop )
                            .then(async () => {
                                console.log(color(`Sticker Gif processed for ${processTime(t, moment())} seconds`, 'aqua'))  
								limitAdd(serial)
                            })
                    } catch (err) {
                        console.error(err)
                        await aruga.reply(from, `The video size is too large`, id)
                    }
                } else if(quotedMsg && quotedMsg.type === 'sticker' || quotedMsg && quotedMsg.type === 'video') {
					aruga.reply(from, mess.wait, id)
                    try {
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const videoBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await aruga.sendMp4AsSticker(from, videoBase64, gifcrop, StickerMetadatacrop)
                            .then(async () => {
                                console.log(color(`Sticker Gif processed for ${processTime(t, moment())} seconds`, 'aqua'))  
								limitAdd(serial)
                            })
                    } catch (err) {
                        console.error(err)
                        await aruga.reply(from, `The video size is too large\nMaksimal size adalah 1MB!`, id)
                    }
                } else {
                    await aruga.reply(from, `The video size is too large`, id)
                }
            break
			case prefix+'startgif000000000000000000': //By: Thoriq Azzikra
			if (isMedia && type === 'video' || mimetype === 'sticker/gif') {
			try {
				aruga.reply(from, mess.wait, id)
				const mulai = q.split('|')[0]
				const akhir = q.split('|')[1]
				const mediaData = await decryptMedia(message, uaOverride)
				const vidBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
				await aruga.sendMp4AsSticker(from, vidBase64, { crop: true, loop: 0, fps: 30, square: 240, startTime: `00:00:${mulai}.0`, endTime: `00:00:${akhir}.0` }, StickerMetadatacrop)
			} catch (err) {
			console.log(err)
			aruga.reply(from, 'Kecilkan skala video!\nMinimal 240x240', id)
		}
	} else if(quotedMsg && quotedMsg.type === 'sticker' || quotedMsg && quotedMsg.type === 'video') {
					aruga.reply(from, mess.wait, id)
                    try {
						const mulaini = q.split('|')[0]
						const akhirni = q.split('|')[1]
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const videoBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await aruga.sendMp4AsSticker(from, videoBase64, { crop: true, loop: 0, square: 240, fps: 30, startTime: `00:00:${mulaini}.0`, endTime: `00:00:${akhirni}` }, StickerMetadatacrop)
                            .then(async () => {
                                console.log(color(`Sticker Gif processed for ${processTime(t, moment())} seconds`, 'aqua'))       
                            })
                    } catch (err) {
                        console.error(err)
                        await aruga.reply(from, `The video size is too large\nMaksimal size adalah 1MB!`, id)
                    }
                } else {
                    await aruga.reply(from, `The video size is too large`, id)
                }
            break
            case prefix+'sgifwm':
                if (isMedia && type === 'video' || mimetype === 'sticker/gif') {
                    if (!q.includes('|')) return await aruga.reply(from, `Untuk membuat stickergif watermark\ngunakan ${prefix}sgifwm author | packname`, id)
                    const namaPacksgif = q.substring(0, q.indexOf('|') - 1)
                    const authorPacksgif = q.substring(q.lastIndexOf('|') + 2)
                    await aruga.reply(from, mess.wait, id)
                    try {
                        const mediaData = await decryptMedia(message, uaOverride)
                        const videoBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                        await aruga.sendMp4AsSticker(from, videoBase64, { crop: true, fps: 30, square: 240, startTime: `00:00:00.0`, endTime : `00:00:10.0`, loop: 0 }, { author: `${authorPacksgif}`, pack: `${namaPacksgif}`, keepScale: false })
                            .then(async () => {
                                console.log(color(`Sticker Gif processed for ${processTime(t, moment())} seconds`, 'aqua'))
                                
                            })
                    } catch (err) {
                        console.error(err)
                        await aruga.reply(from, `The video size is too large\nMaksimal size adalah 1MB!`, id)
                    }
                } else if(quotedMsg && quotedMsg.type === 'sticker' || quotedMsg && quotedMsg.type === 'video') {
                    const namaPacksgif = q.substring(0, q.indexOf('|') - 1)
                    const authorPacksgif = q.substring(q.lastIndexOf('|') + 2)
                    await aruga.reply(from, mess.wait, id)
                    try {
                        const mediaData = await decryptMedia(quotedMsg, uaOverride)
                        const videoBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                        await aruga.sendMp4AsSticker(from, videoBase64, { crop: true, fps: 30, square: 240, startTime: `00:00:00.0`, endTime : `00:00:10.0`, loop: 0 }, { author: `${authorPacksgif}`, pack: `${namaPacksgif}`, keepScale: false })
                            .then(async () => {
                                console.log(color(`Sticker Gif processed for ${processTime(t, moment())} seconds`, 'aqua'))
                                
                            })
                    } catch (err) {
                        console.error(err)
                        await aruga.reply(from, `The video size is too large\nMaksimal size adalah 1MB!`, id)
                    }
                } else {
                    await aruga.reply(from, `Untuk membuat stickergif dengan watermark\ngunakan ${prefix}sgifwm author | packname`, id)
                }
            break
	case prefix+'stikertoimg':
	case prefix+'stickertoimg':
	case prefix+'stmg':
	case prefix+'toimg':
	if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            if (quotedMsg && quotedMsg.type == 'sticker') {
                const mediaData = await decryptMedia(quotedMsg)
                aruga.reply(from, `Being processed! Please wait a moment...`, id)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await aruga.sendFile(from, imageBase64, 'imgsticker.jpg', 'Sucessfully converted Sticker to Image!', id)
                .then(() => {
                    console.log(`Sticker to Image Processed for ${processTime(t, moment())} Seconds`)
					limitAdd(serial)
                })
        } else if (!quotedMsg) return aruga.reply(from, `Wrong format, please tag the sticker that you want to use as an image!`, id)
        break
			
			
        // Sticker Creator
	
	case prefix+'tr':
		if (args.length == 0) return aruga.reply(from, `Send orders ${prefix}tr [kodebahasa] [reply caption]\n\nExample: ${prefix}tr id [reply caption}`, id)
		const suwayy0 = arg.split('|')[0]
		const suwayy00 = quotedMsg.type == 'chat' ? quotedMsg.body : quotedMsg.type == 'image' ? quotedMsg.caption : ''
		axios.get(`https://amm-api-translate.herokuapp.com/translate?engine=google&text=${suwayy00}&to=${suwayy0}`).then(res => {
		const trans = res.data.data.result
		aruga.reply(from, trans, id)
		})
		break
		
			case prefix+'addvn':
				let nuhi = body.slice(7)
				if (quotedMsg && quotedMsg.type === 'audio' || quotedMsg && quotedMsg.type === 'ptt') {
					var mediaData = await decryptMedia(quotedMsg, uaOverride)
					var filename = `./media/audio/${nuhi}.mp3`
					await fs.writeFile(filename, mediaData)
					aruga.reply(from, `vn dengan nama ${nuhi} berhasil disimpan didalam database!`, id)
				} else if(isMedia && type === 'audio' || isMedia && type === 'ptt') {
					var mediaData = await decryptMedia(message, uaOverride)
					var filename = `./media/audio/${nuhi}.mp3`
					await fs.writeFileSync(filename, mediaData)
					await aruga.reply(from, `vn dengan nama ${nuhi} berhasil disimpan didalam database!`, id)
				} else {
					return aruga.reply(from, `Error! silahkan coba kembali...`, id)
				}
				listvn.push(nuhi)
				fs.writeFileSync('./lib/database/listvn.json', JSON.stringify(listvn))
				break
			case prefix+'delallvn':
			if (!isOwnerB) return aruga.reply(from, 'Fitur ini khusus Owner Bot', id)
			let dellall = listvn.includes(chats)
			listvn.splice(dellall)
			fs.writeFileSync('./lib/database/listvn.json', JSON.stringify(listvn))
			aruga.reply(from, `semua vn didalam database berhasil dihapus`, id)
			break
			case prefix+'delvn':
			let deli = listvn.indexOf(body.slice(7))
				listvn.splice(deli, 1)
				fs.writeFileSync('./lib/database/listvn.json', JSON.stringify(listvn))
				aruga.reply(from, 'vn berhasil didelete dari database', id)
				break
			case prefix+'delallimg':
			if (!isOwnerB) return aruga.reply(from, `This feature can only be used by Owner Bot!`, id)
				let delimg = listimg.includes(chats)
				listimg.splice(delimg)
				fs.writeFileSync('./lib/database/listimage.json', JSON.stringify(listimg))
				aruga.reply(from, 'semua image didalam database berhasil dihapus', id)
				break
			case prefix+'delallstik':
			if (!isOwnerB) return aruga.reply(from, 'fitur ini khusus owner bot', id)
				let delalstc = liststicker.includes(chats)
				liststicker.splice(delalstc)
				fs.writeFileSync('./lib/database/liststiker.json', JSON.stringify(liststicker))
				aruga.reply(from, 'semua stiker didalam database berhasil didelete', id)
				break
		case prefix+'delstiker':
				let delstik = liststicker.indexOf(body.slice(11))
				liststicker.splice(delstik, 1)
				fs.writeFileSync('./lib/database/liststiker.json', JSON.stringify(liststicker))
				aruga.reply(from, 'sticker berhasil didelete dari database', id)
				break
			
			case prefix+'addimg':
			let addmg = body.slice(8)
			if (quotedMsg && quotedMsg.type === 'image') {
				var mediaData = await decryptMedia(quotedMsg, uaOverride)
				var filename = `./media/image/${addmg}.jpg`
				await fs.writeFile(filename, mediaData)
				await aruga.reply(from, `image dengan nama ${addmg} berhasil disimpan didalam database!`, id)
			} else if(isMedia && type === 'image') {
				var mediaData = await decryptMedia(message, uaOverride)
				var filename = `./media/image/${addmg}.jpg`
				await fs.writeFileSync(filename, mediaData)
				await aruga.reply(from, `image dengan nama ${addmg} berhasil disimpan didalam database!`, id)
			} else {
				return aruga.reply(from, `Error!, silahkan coba kembali nanti...`, id)
			}
			listimg.push(addmg)
			fs.writeFileSync('./lib/database/listimage.json', JSON.stringify(listimg))
			break
		case prefix+'delimg':
			let delx = listimg.indexOf(body.slice(7))
			listimg.splice(delx, 1)
			fs.writeFileSync('./lib/database/listimage.json', JSON.stringify(listimg))
			aruga.reply(from, `image dengan nama ${delx} berhasil didelete dari database`, id)
			break
        case prefix+'addstiker': //credit by ./NotF0und
            let nmHii = body.slice(11)
            if (quotedMsg && quotedMsg.type === 'image' || quotedMsg && quotedMsg.type === 'sticker'){
                var mediaData = await decryptMedia(quotedMsg, uaOverride)
                var filename = `./media/pic/sticker/${nmHii}.jpeg`
                await fs.writeFile(filename, mediaData)
                await aruga.reply(from, `sticker dengan nama ${nmHii} berhasil disimpen!`, id)
            } else if(isMedia && type === 'image' || isMedia && type === 'sticker') {
                var mediaData = await decrpytMedia(message, uaOverride)
                var filename = `./media/pic/sticker/${nmHii}.jpeg`
                await fs.writeFileSync(filename, mediaData)
                await aruga.reply(from, `sticker dengan nama ${nmHii} berhasil disimpan!`, id)
            } else {
                return aruga.reply(from,`Error! Silahkan coba kembali...`, id)
            }
            liststicker.push(nmHii)
            fs.writeFileSync('./lib/database/liststiker.json', JSON.stringify(liststicker))
            break
		case prefix+'stcfull':
		case prefix+'stickerfull':
		case prefix+'stikerfull':
		case prefix+'sfull':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
		if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await aruga.sendImageAsSticker(from, imageBase64, StickerMetadata)
				console.log(color(`Sticker processed for ${processTime(t, moment())} seconds`, 'aqua'))
				limitAdd(serial)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await aruga.sendImageAsSticker(from, imageBase64, StickerMetadata)
				console.log(color(`Sticker processed for ${processTime(t, moment())} seconds`, 'aqua'))
				limitAdd(serial)
			} else {
				aruga.reply(from, mess.error.St, id)
			}			
            break
        case prefix+'sticker':
        case prefix+'stiker':
        case prefix+'stc':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
			if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await aruga.sendImageAsSticker(from, imageBase64, StickerMetadatacrop)
				.then(async () => {
				console.log(color(`Sticker processed for ${processTime(t, moment())} seconds`, 'aqua'))
				})
				limitAdd(serial)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await aruga.sendImageAsSticker(from, imageBase64, StickerMetadatacrop)
				.then(async(res) => {
				console.log(color(`Sticker processed for ${processTime(t, moment())} seconds`, 'aqua'))
				})
				limitAdd(serial)
			} else {
				aruga.reply(from, mess.error.St, id)
			}			
            break
		
             
                case prefix+'neonime':
                        if (args.length == 0) return aruga.reply(from, `Mencari anime dari website Neonime!\nContoh: ${prefix}neonime boruto`, id)
                        await aruga.reply(from, mess.wait, id)
                        rugaapi.neo(body.slice(9))
                        .then(async ({ result }) => {
                            let neoni = '*-----「 NEONIME 」-----*'
                            for (let i = 0; i < result.length; i++){
                                neoni +=`\n\n• *Judul :* ${result[i].title}\n• *Url :* ${result[i].url}\n• *Deskripsi :* ${result[i].desc}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=`
                            }
                            await aruga.sendFileFromUrl(from, result[0].thumb, 'img.jpg', neoni, id)
                            console.log(`Succes sending ${body.slice(9)}`)
                        })
                        .catch(async (err) => {
                            console.error(err)
                            aruga.reply(from, 'Error njing', id)
                        })
                        break
	
	case prefix+'readmore':
	if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
	const read = arg.split('|')[0]
	const more = arg.split('|')[1]
	const capts = `${read}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${more}`
	aruga.reply(from, capts, id)
	limitAdd(serial)
	break
        case prefix+'stikergiphy00000000000':
        case prefix+'stickergiphy0000000':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            if (args.length !== 1) return aruga.reply(from, `Sorry, the Message format is wrong.\nKetik pesan dengan ${prefix}stickergiphy <link_giphy>`, id)
            const isGiphy = url.match(new RegExp(/https?:\/\/(www\.)?giphy.com/, 'gi'))
            const isMediaGiphy = url.match(new RegExp(/https?:\/\/media.giphy.com\/media/, 'gi'))
            if (isGiphy) {
                const getGiphyCode = url.match(new RegExp(/(\/|\-)(?:.(?!(\/|\-)))+$/, 'gi'))
                if (!getGiphyCode) { return aruga.reply(from, 'Gagal mengambil kode giphy', id) }
                const giphyCode = getGiphyCode[0].replace(/[-\/]/gi, '')
                const smallGifUrl = 'https://media.giphy.com/media/' + giphyCode + '/giphy-downsized.gif'
                aruga.sendGiphyAsSticker(from, smallGifUrl, id).then(() => {
                    aruga.reply(from, 'Here\'s your sticker', id)
                    console.log(color(`Sticker Processed for ${processTime(t, moment())} Second`, 'aqua'))
                }).catch((err) => console.log(err))
            } else if (isMediaGiphy) {
                const gifUrl = url.match(new RegExp(/(giphy|source).(gif|mp4)/, 'gi'))
                if (!gifUrl) { return aruga.reply(from, 'Gagal mengambil kode giphy', id) }
                const smallGifUrl = url.replace(gifUrl[0], 'giphy-downsized.gif')
                aruga.sendGiphyAsSticker(from, smallGifUrl, id)
                .then(() => {
                    aruga.reply(from, 'Here\'s your sticker', id)
                    console.log(`Sticker Processed for ${processTime(t, moment())} Second`)
                })
                .catch(() => {
                    aruga.reply(from, `Error!`, id)
                })
            } else {
                await aruga.reply(from, 'Maaf, command sticker giphy hanya bisa menggunakan link dari giphy.  [Giphy Only]', id)
            }
            break


        case prefix+'mememaker':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            if ((isMedia || isImage || isQuotedImage) && args.length >= 2) {
                const top = arg.split('|')[0]
                const bottom = arg.split('|')[1]
                const encryptMedia = isQuotedImage ? quotedMsg : message
                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                const getUrl = await uploadImages(mediaData, false)
                const ImageBase64 = await meme.custom(getUrl, top, bottom)
                aruga.sendFile(from, ImageBase64, 'image.png', '', null, true)
				limitAdd(serial)
				/*aruga.sendImageAsSticker(from, ImageBase64, {keepScale: true, author: BOT, pack: pack })
                    .then(() => {
                        aruga.reply(from, 'Ini makasih!',id)
                    })*/
            } else {
                await aruga.reply(from, `No picture! Please send an image with the caption\n example: ${prefix}mememaker top text |bottom text`, id)
            }
            break
        

        
	//Group All User
	case prefix+'grouplink':
    case prefix+'linkgc':
            if (!isBotGroupAdmins) return aruga.reply(from, 'This command can only be used when bot becoms admin', id)
            if (isGroupMsg) {
                const inviteLink = await aruga.getGroupInviteLink(groupId);
                aruga.sendLinkWithAutoPreview(from, inviteLink, `\nLink group *${name}* use *${prefix}revoke* to reset group link`)
            } else {
            	aruga.reply(from, 'This command can only be used in groups!', id)
            }
            break
	case prefix+"revoke":
	if (!isBotGroupAdmins) return aruga.reply(from, 'This command can only be used when bot becoms admin', id)
                    if (isBotGroupAdmins) {
                        aruga
                            .revokeGroupInviteLink(from)
                            .then((res) => {
                                aruga.reply(from, `Successfully Revoke Group Link use*${prefix}grouplink* to get the latest group invite link`, id);
                            })
                            .catch(() => {
                                console.log(`[ERR] ${err}`);
                            });
                    }
                    break;
        //Media 
        
			case prefix+'yta':
			case prefix+'ytmp3':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
			const { serverss, ytaa } = require('./lib/y2mate2.js')
			  if (!args || !args[0]) throw `Uhm... where's the url?`
			  let server = (args[1] || serverss[0]).toLowerCase()
			  let { dl_linkk, thumbb, ttitle, filesizee, filesizeFf} = await ytaa(args[0], serverss.includes(server) ? server : serverss[0])
			  let isLimitt = (isOwner ? 99 : limit) * 1024 < filesizee
			  aruga.sendFile(from, thumbb, 'thumbnail.jpg', `*Title:* ${ttitle}\n*Filesize:* ${filesizeFf}\n${isLimitt ? 'Use ': ''}`.trim(), id)
			  if (!isLimitt) aruga.sendFile(from, dl_linkk, ttitle + '.mp3', `*Title:* ${ttitle}\n*Filesize:* ${filesizeFf}`.trim(), id)
			break
	
			case prefix+'shitposting111':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				aruga.reply(from, mess.wait, id)
				aruga.sendFileFromUrl(from, `https://api.xteam.xyz/shitpost?APIKEY=db0e06bd9f096399`, 'gelap.mp4', '', id)
				limitAdd(serial)
				break
			case prefix+'emoji':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from,`This command needs something to work, for it to work insert a emoji`, id)
				emoji.get(args[0]).then(async (emoji) => {
					if (emoji.emoji == null) return await aruga.reply(from, `Use this command only with emojis, other types may be harmful.`, id)
					let moji = `Emoji: ${emoji.emoji}\n\nUnicode: ${emoji.unicode}\n\nName: ${emoji.name}\n\nDescription: ${emoji.description}\n\n`
					for (let i = 0; i < emoji.images.length; i++) { moji += `${emoji.images[i].vendor} → ${emoji.images[i].url}\n\n═════════════════\n\n` }
					await aruga.reply(from, moji + `The URL can be used to obtain the photo with the command ${prefix}Send <URL> or make stickers of different versions of the emoji using the command ${prefix}sticker <URL>.`, id)
					await aruga.sendStickerfromUrl(from, emoji.images[0].url, { method: 'get' }, { author: authorr, pack: pack, keepScale: true })
					limitAdd(serial)
				})
				break
            
            
            
				case prefix+'gura':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                    if (args.length === 0) return aruga.reply(from, `Send orders *${prefix}gura text*, Example *${prefix}gura hello*`, id)
					try {
                        const gura1 = body.slice(6)
                        if (gura1.length > 7) return aruga.reply(from, '_Maximum length 7!_', id)
						aruga.reply(from, mess.wait, id)
                        aruga.sendFileFromUrl(from, `https://hardianto-chan.herokuapp.com/api/bot/gura?apikey=hardianto&nama=${gura1}`,id).catch(async () => { await aruga.reply(from, `Error!!\nIf used emoji then pls don't..`, id) })
					limitAdd(serial)
						.catch(err => {
							console.log(err)
							aruga.reply(from, 'Error!!', id)
						})
					} catch (err) {
						
					}
                    break
					case prefix+'kaneki':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                    if (args.length === 0) return aruga.reply(from, `Send orders *${prefix}kaneki text*, Example *${prefix}kaneki hello*`, id)
					try {
                        const gura11 = body.slice(8)
                        if (gura11.length > 8) return aruga.reply(from, '_Maximum length 8!_', id)
						aruga.reply(from, mess.wait, id)
                        aruga.sendFileFromUrl(from, `https://hardianto-chan.herokuapp.com/api/bot/gfx1?apikey=hardianto&nama=${gura11}`,id).catch(async () => { await aruga.reply(from, `Error!!\nIf used emoji then pls don't..`, id) })
					limitAdd(serial)
						.catch(err => {
							console.log(err)
							aruga.reply(from, 'Error!!', id)
						})
					} catch (err) {
						
					}
                    break
					case prefix+'rem':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                    if (args.length === 0) return aruga.reply(from, `Send orders *${prefix}rem text*, Example *${prefix}rem hello*`, id)
					try {
                        const gura111 = body.slice(5)
                        if (gura111.length > 5) return aruga.reply(from, '_Maximum length 5!_', id)
						aruga.reply(from, mess.wait, id)
                        aruga.sendFileFromUrl(from, `https://hardianto-chan.herokuapp.com/api/bot/gfx5?apikey=hardianto&text=${gura111}`,id).catch(async () => { await aruga.reply(from, `Error!!\nIf used emoji then pls don't..`, id) })
					limitAdd(serial)
						.catch(err => {
							console.log(err)
							aruga.reply(from, 'Error!!', id)
						})
					} catch (err) {
						
					}
                    break
					case prefix+'nekomaker':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                    if (args.length === 0) return aruga.reply(from, `Send orders *${prefix}nekomaker [ Teks1|Teks2 ]*, Example *${prefix}nekomaker xyz|abc*`, id)
					try {
                        aruga.reply(from, mess.wait, id)
                        const glitch11 = q.split('|')[0]
                        const glitch12 = q.split('|')[1]
                        if (glitch11.length > 5) return aruga.reply(from, '*Text1 Too Long!*\n_Maximum 5 letters!_', id)
                        if (glitch12.length > 5) return aruga.reply(from, '*Text2 Too Long!*\n_Maximum 5 letters!_', id)
                        aruga.sendFileFromUrl(from, `https://hardianto-chan.herokuapp.com/api/bot/gfx4?apikey=hardianto&text1=${glitch11}&text2=${glitch12}`).catch(async () => { await aruga.reply(from, `Error!!\nIf used emoji then pls don't..`, id) })
					limitAdd(serial)
						.catch(err => {
							console.log(err)
							aruga.reply(from, 'Error!!', id)
						})
					} catch (err) {
						
					}
                    break
					case prefix+'sadboi':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                    if (args.length === 0) return aruga.reply(from, `Send orders *${prefix}sadboi [ Teks1|Teks2 ]*, Example *${prefix}sadboi xyz|abc*`, id)
					try {
                        aruga.reply(from, mess.wait, id)
                        const glitch111 = q.split('|')[0]
                        const glitch112 = q.split('|')[1]
                        if (glitch111.length > 6) return aruga.reply(from, '*Text1 Too Long!*\n_Maximum 6 letters!_', id)
                        if (glitch112.length > 6) return aruga.reply(from, '*Text2 Too Long!*\n_Maximum 6 letters!_', id)
                        aruga.sendFileFromUrl(from, `https://hardianto-chan.herokuapp.com/api/bot/gfx3?apikey=hardianto&text1=${glitch111}&text2=${glitch112}`).catch(async () => { await aruga.reply(from, `Error!!\nIf used emoji then pls don't..`, id) })
					limitAdd(serial)
						.catch(err => {
							console.log(err)
							aruga.reply(from, 'Error!!', id)
						})
					} catch (err) {
						
					}
                    break
					case prefix+'lolimaker':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                    if (args.length === 0) return aruga.reply(from, `Send orders *${prefix}lolimaker text*, Example *${prefix}lolimaker hello*`, id)
					try {
                        const guraa111 = body.slice(11)
                        if (guraa111.length > 6) return aruga.reply(from, '_Maximum length 6!_', id)
						aruga.reply(from, mess.wait, id)
                        aruga.sendFileFromUrl(from, `https://hardianto-chan.herokuapp.com/api/bot/gfx2?apikey=hardianto&nama=${guraa111}`,id).catch(async () => { await aruga.reply(from, `Error!!\nIf used emoji then pls don't..`, id) })
					limitAdd(serial)
						.catch(err => {
							console.log(err)
							aruga.reply(from, 'Error!!', id)
						})
					} catch (err) {
						
					}
                    break
					
		case prefix+'nobg':
				if (isImage || isQuotedImage) {
					const nobgmd = isQuotedImage ? quotedMsg : message
					const mediaData = await decryptMedia(nobgmd, uaOverride)
					const imageBase64 = `data:${nobgmd.mimetype};base64,${mediaData.toString('base64')}`
					await aruga.reply(from, mess.wait, id) 
					const base64img = imageBase64
					const outFile = `./lib/media/img/${user.replace('@c.us', '')}noBg.png`
					var result = await removeBackgroundFromImageBase64({ base64img, apiKey: "AVMX5VPC1Vh3irbFZbfbZr1i", size: 'auto', type: 'auto', outFile })
					await fs.writeFile(outFile, result.base64img)
					await aruga.sendImageAsSticker(from, `data:${nobgmd.mimetype};base64,${result.base64img}`, { pack: pack, author: authorr, keepScale: true })
					await aruga.reply(from, `This command have a monthly limit, if you can, avoid using it and use ${prefix}sticker.`, id)
					.then(async () => { await fs.unlinkSync(`./lib/media/img/${user.replace('@c.us', '')}noBg.png`) })
				} else return await aruga.reply(from, `Command of that kind can be used only for images, another media can be a problem.`, id)
				break
				
		case prefix+'sketch':
			if (isMedia && isImage || isQuotedImage) {
				await aruga.reply(from, mess.wait, id)
				const encryptMedia = isQuotedImage ? quotedMsg : message
				const mediaData = await decryptMedia(encryptMedia, uaOverride)
				const linkImg = await uploadImages(mediaData, `${sender.id}_img`)
				axios.get(`https://api.zeks.me/api/sketchf?img=${linkImg}&apikey=dc4x8bqxoKDYOGMAwlnOyOnvidk`)
				.then(async(res) => {
				await aruga.sendFileFromUrl(from, res.data.result, 'img.jpg', '', id)
				})
				} else {
				await aruga.reply(from, 'Error njing', id)
				}
				break
				case prefix+'3dphoto0000':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const beimage = await uploadImages(mediaData, `${sender}_img`)
						await aruga.sendFileFromUrl(from, `https://videfikri.com/api/textmaker/3dlinephoto/?urlgbr=${beimage}`, '', '', id)
						limitAdd(serial)
					} else {
						aruga.reply(from, 'Message format is wrong, reply or caption to image', id)
					}
					break
					case prefix+'imgbb00000':
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const jajas = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(jajas, uaOverride)
						const uploadImg2 = await uploadImages(mediaData, `${sender.id}_img`)
						const namas = body.slice(7)
						axios.get(`https://videfikri.com/api/imgbb/?urlgbr=${uploadImg2}&title=${namas}`)
						.then(async(res) => {
							const besx = `Link: ${res.data.result.url}`
							aruga.sendFileFromUrl(from, res.data.result.url, '', besx, id)
							.catch(err => {
								aruga.reply(from, besx, id)
							})
						})
					} else {
						aruga.reply(from, 'Message format is wrong', id)
					}
						break
					case prefix+'pencilart000000':
					case prefix+'artpencil000000':
					case prefix+'pensilart000000':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const bamg = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(bamg, uaOverride)
						const uploadimg = await uploadImages(mediaData, `${sender.id}_img`)
						const beimgbb = await axios.get(`https://videfikri.com/api/imgbb/?urlgbr=${uploadimg}&title=Urbaeexyz`)
						const dataimage = beimgbb.data.result.url
						await aruga.sendFileFromUrl(from, `http://lolhuman.herokuapp.com/api/editor/pencil?apikey=${lolhuman}&img=${dataimage}`, '', '', id)
						limitAdd(serial)
						.catch(err => {
							console.log(err)
							aruga.reply(from, 'Terjadi kesalahan saat mengupload Foto', id)
						})
					} else if(args[0]){
						aruga.reply(from, mess.wait, id)
						const textlink = args[0]
						await aruga.sendFileFromUrl(from, `http://lolhuman.herokuapp.com/api/editor/pencil?apikey=${lolhuman}&img=${textlink}`, '', '', id)
					} else {
						aruga.reply(from, `Send or reply to image with ${prefix}pensilart`, id)
					}
					break
					case prefix+'pencil00':
					case prefix+'pensil00':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const beimages = await uploadImages(mediaData, `${sender}_img`)
						await aruga.sendFileFromUrl(from, `https://lindow-api.herokuapp.com/api/pencil?img=${beimages}&apikey=LindowApi`, '', '', id)
						limitAdd(serial)
	
					} else {
						aruga.reply(from, 'Message format is wrong, reply or caption to image', id)
					}
					break
					case prefix+'pencil200':
					case prefix+'pensil200':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const inimage = await uploadImages(mediaData, `${sender.id}_img`)
						aruga.sendFileFromUrl(from, `https://lindow-api.herokuapp.com/api/pencil?img=${inimage}&apikey=LindowApi`, '', '', id)
						limitAdd(serial)
				
					} else {
						aruga.reply(from, 'Message format is wrong, reply or caption to image', id)
					}
					break
					case prefix+'thuglife':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const inimage = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, `http://zekais-api.herokuapp.com/thuglife?url=${inimage}&apikey=U7jLmHKe`, 'thuglife.jpg', '', id)
						limitAdd(serial)
						.catch(() => {
							aruga.reply(from, 'lagi error', id)
						})
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'communism':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const iinimagee = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, `http://zekais-api.herokuapp.com/comunism?url=${iinimagee}&apikey=U7jLmHKe`, 'comm.jpg', '', id)
						limitAdd(serial)
						
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'deletetrash':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const iiinimagee = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/canvas/delete?img=${iiinimagee}&apikey=1QM9kTIM1WUkJ57`, 'deltrash.jpg', '', id)
						limitAdd(serial)
						
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'wasted':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const iiinnimagee = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, `https://some-random-api.ml/canvas/wasted?avatar=${iiinnimagee}`, 'wasted.jpg', '', id)
						limitAdd(serial)
						
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'rip':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const iiinnnimagee = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, ` http://zekais-api.herokuapp.com/rip?url=${iiinnnimagee}&apikey=U7jLmHKe`, 'rip.jpg', '', id)
						limitAdd(serial)
						
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'rip2':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const iiinnnnimagee = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, ` https://api.dapuhy.ga/api/canvas/rip?img=${iiinnnnimagee}&apikey=1QM9kTIM1WUkJ57`, 'rip.jpg', '', id)
						limitAdd(serial)
						
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'tobecontinue':
					case prefix+'tobecontinued':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const inimage = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/canvas/continued?img==${inimage}&apikey=1QM9kTIM1WUkJ57`, 'tobe.jpg', '', id)
						limitAdd(serial)
						.catch(() => {
							aruga.reply(from, 'Lagi error', id)
						})
					} else {
						aruga.reply(from, 'Message format is wrong, kirim foto bukan video/gif', id)
					}
					break
					case prefix+'jail':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const imageee = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, ` https://some-random-api.ml/canvas/jail?avatar=${imageee}`, 'jail.jpg', '', id)
						limitAdd(serial)
						
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'respect':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const imaggeee = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, ` https://some-random-api.ml/canvas/passed?avatar=${imaggeee}`, 'respect.jpg', '', id)
						limitAdd(serial)
						
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'glass':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const imagggeee = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, ` https://some-random-api.ml/canvas/glass?avatar=${imagggeee}`, 'glass.jpg', '', id)
						limitAdd(serial)
						
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'gay':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const imaagggeee = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, ` https://some-random-api.ml/canvas/gay?avatar=${imaagggeee}`, 'gya.jpg', '', id)
						limitAdd(serial)
						
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'gay2':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const iimaagggeee = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, ` https://api.dapuhy.ga/api/canvas/gay?img=${iimaagggeee}&apikey=1QM9kTIM1WUkJ57`, 'gya.jpg', '', id)
						limitAdd(serial)
						
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'blacknwhite':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const imaaagggeee = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, ` https://some-random-api.ml/canvas/greyscale?avatar=${imaaagggeee}`, 'bnw.jpg', '', id)
						limitAdd(serial)
						
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'stupid':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (args.length == 0) return aruga.reply(from, `Also add a text after the command pls...`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const immaaagggeee = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, ` https://some-random-api.ml/canvas/its-so-stupid?avatar=${immaaagggeee}&dog=${body.slice(8)}`, 'bnw.jpg', '', id)
						limitAdd(serial)
						
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'simpcard':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const immmaaagggeee = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, ` https://some-random-api.ml/canvas/simpcard?avatar=${immmaaagggeee}`, 'bnw.jpg', '', id)
						limitAdd(serial)
						
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'crush':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const iimmmaaagggeee = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, ` https://api.dapuhy.ga/api/canvas/crush?img=${iimmmaaagggeee}&apikey=1QM9kTIM1WUkJ57`, 'bnw.jpg', '', id)
						limitAdd(serial)
						
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'meth':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const iiimmmaaagggeee = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, ` https://api.dapuhy.ga/api/canvas/meth?img=${iiimmmaaagggeee}&apikey=1QM9kTIM1WUkJ57`, 'bnw.jpg', '', id)
						limitAdd(serial)
						
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'hitler':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const iiiimmmmmaaagggeee = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, ` https://api.dapuhy.ga/api/canvas/hitler?img=${iiiimmmmmaaagggeee}&apikey=1QM9kTIM1WUkJ57`, 'bnw.jpg', '', id)
						limitAdd(serial)
						
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'blur':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const iiiimmmaaagggeee = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, ` https://api.dapuhy.ga/api/canvas/blur?img=${iiiimmmaaagggeee}&level=7&apikey=1QM9kTIM1WUkJ57`, 'bnw.jpg', '', id)
						limitAdd(serial)
						
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'beautiful':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const iiiiiimmmaaagggeee = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/canvas/beautiful?img1=${iiiiiimmmaaagggeee}&img2=https://i.ibb.co/Zxg1HB6/akaza2.jpg&apikey=1QM9kTIM1WUkJ57`, 'bnw.jpg', '', id)
						limitAdd(serial)
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'patmeme':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const patmeme = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendStickerfromUrl(from, `https://hardianto-chan.herokuapp.com/api/pet?url=${patmeme}&apikey=hardianto`, id)
						limitAdd(serial)
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'trigger':
					case prefix+'triggered':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const patmeme2 = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendStickerfromUrl(from, `https://hardianto-chan.herokuapp.com/api/editor/triggered?url=${patmeme2}&apikey=hardianto`, id)
						limitAdd(serial)
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'burnimg':
					case prefix+'burnimage':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const patmeme22 = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, `https://hardianto-chan.herokuapp.com/api/knights/spongebob?apikey=hardianto&pp=${patmeme22}`, id)
						limitAdd(serial)
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
					case prefix+'patrickmeme':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia || isImage || isQuotedImage) {
						aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(encrypt, uaOverride)
						const patmeme22 = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, `https://hardianto-chan.herokuapp.com/api/knights/patrick?apikey=hardianto&pp=${patmeme22}`, id)
						limitAdd(serial)
					} else {
						aruga.reply(from, 'Message format is wrong..\n Please send or reply to a image..', id)
					}
					break
			
					case prefix+'panda':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
						aruga.reply(from, mess.wait, id)
					axios.get(`https://some-random-api.ml/animal/panda`).then(async(res) => {
						aruga.sendFileFromUrl(from, res.data.image, 'panda.jpg',`*Fact*: ${res.data.fact}`, id)
						limitAdd(serial)
					})
					break
					case prefix+'dog':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
						aruga.reply(from, mess.wait, id)
					axios.get(`https://some-random-api.ml/animal/dog`).then(async(res) => {
						aruga.sendFileFromUrl(from, res.data.image, 'dog.jpg',`*Fact*: ${res.data.fact}`, id)
						limitAdd(serial)
					})
					break
					case prefix+'cat':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
						aruga.reply(from, mess.wait, id)
					axios.get(`https://some-random-api.ml/animal/cat`).then(async(res) => {
						aruga.sendFileFromUrl(from, res.data.image, 'cat.jpg',`*Fact*: ${res.data.fact}`, id)
						limitAdd(serial)
					})
					break
					case prefix+'fox':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
						aruga.reply(from, mess.wait, id)
					axios.get(`https://some-random-api.ml/animal/fox`).then(async(res) => {
						aruga.sendFileFromUrl(from, res.data.image, 'fox.jpg',`*Fact*: ${res.data.fact}`, id)
						limitAdd(serial)
					})
					break
					case prefix+'redpanda':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
						aruga.reply(from, mess.wait, id)
					axios.get(`https://some-random-api.ml/animal/red_panda`).then(async(res) => {
						aruga.sendFileFromUrl(from, res.data.image, 'redpanda.jpg',`*Fact*: ${res.data.fact}`, id)
						limitAdd(serial)
					})
					break
					case prefix+'koala':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
						aruga.reply(from, mess.wait, id)
					axios.get(`https://some-random-api.ml/animal/koala`).then(async(res) => {
						aruga.sendFileFromUrl(from, res.data.image, 'koala.jpg',`*Fact*: ${res.data.fact}`, id)
						limitAdd(serial)
					})
					break
					case prefix+'bird':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
						aruga.reply(from, mess.wait, id)
					axios.get(`https://some-random-api.ml/animal/birb`).then(async(res) => {
						aruga.sendFileFromUrl(from, res.data.image, 'bird.jpg',`*Fact*: ${res.data.fact}`, id)
						limitAdd(serial)
					})
					break
					case prefix+'raccoon':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
						aruga.reply(from, mess.wait, id)
					axios.get(`https://some-random-api.ml/animal/raccoon`).then(async(res) => {
						aruga.sendFileFromUrl(from, res.data.image, 'raccoon.jpg',`*Fact*: ${res.data.fact}`, id)
						limitAdd(serial)
					})
					break
					case prefix+'kangaroo':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
						aruga.reply(from, mess.wait, id)
					axios.get(`https://some-random-api.ml/animal/kangaroo`).then(async(res) => {
						aruga.sendFileFromUrl(from, res.data.image, 'kangaroo.jpg',`*Fact*: ${res.data.fact}`, id)
						limitAdd(serial)
					})
					break
					case prefix+'whale00':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
						aruga.reply(from, mess.wait, id)
					axios.get(`https://some-random-api.ml/animal/whale`).then(async(res) => {
						aruga.sendFileFromUrl(from, res.data.image, 'whale.jpg',`*Fact*: ${res.data.fact}`, id)
						limitAdd(serial)
					})
					break
					case prefix+'imgtopdf':
					case prefix+'topdf':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					if (isMedia && isImage || isQuotedImage) {
						await aruga.reply(from, mess.wait, id)
						const skript = isQuotedImage ? quotedMsg : message
						const mediaData = await decryptMedia(skript, uaOverride)
						const linksx = await uploadImages(mediaData, `${sender.id}_img`)
						await aruga.sendFileFromUrl(from, `http://lolhuman.herokuapp.com/api/convert/imgtopdf?apikey=${lolhuman}&img=${linksx}`, `${sender.id}`, '', id)
						limitAdd(serial)
					} else {
						aruga.reply(from, 'Message format is wrong', id)
					}
					break
                    case prefix+'imagetourl':
                        case prefix+'imgtourl':
						if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                            if (isMedia && isImage || isQuotedImage) {
                                await aruga.reply(from, mess.wait, id)
                                const encryptMedia = isQuotedImage ? quotedMsg : message
                                const mediaData = await decryptMedia(encryptMedia, uaOverride)
                                const linkImg = await uploadImages(mediaData, `${sender.id}_img`)
                                await aruga.reply(from, linkImg, id)
								limitAdd(serial)
                            } else {
                                await aruga.reply(from, 'Message format is wrong...', id)
                            }
                        break
			case prefix+'pinterest2':
				if (args.length == 0) return aruga.reply(from, `Send orders ${prefix}pinterest2 link url`, id)
				const argim = body.slice(12)
				axios.get(`http://docs-jojo.herokuapp.com/api/pinterest?url=${argim}`)
				.then(async(res) => {
				await aruga.sendFileFromUrl(from, res.data.result, 'pin.mp4', '', id)
			})
			break
		
case prefix+'xvideos':
if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
//if (!isPrem) return aruga.reply(from, mess.prem, id)
if (args.length == 0) return aruga.reply(from, `Looking for videos from XVIDEOS website, Use ${prefix}xvideos query\nExample: ${prefix}xvideos japan`, id)
const xxsch = body.slice(10)
aruga.reply(from, mess.wait, id)
try {
	const fuccth = await axios.get(`https://mnazria.herokuapp.com/api/porn?search=${xxsch}`)
	const fuccth2 = fuccth.data
	const { result } = fuccth2
	let xszz = `*「 XVIDEOS 」*\n`
	for (let i = 0; i < result.length; i++) {
		xszz += `\n─────────────────\n• *Title:* ${result[i].title}\n• *Actor:* ${result[i].actors}\n• *Duration:* ${result[i].duration}\n• *Link:* ${result[i].url}`
	}
	await aruga.sendFileFromUrl(from, `https://img.olhardigital.com.br/wp-content/uploads/2021/08/shutterstock_1416977378-1000x450.jpg`, 'thumb.jpg', xszz, id)
	limitAdd(serial)
} catch (err) {
	console.log(err)
	aruga.reply(from, `Maybe the search results you want are not on the website`, id)
}
break
case prefix+'pornhubs':
if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
//if (!isPrem) return aruga.reply(from, mess.prem, id)
if (args.length == 0) return aruga.reply(from, `Looking for videos from PORNHUB website, Use ${prefix}pornhubs query\nExample: ${prefix}pornhubs japan`, id)
const xxxsch = body.slice(10)
aruga.reply(from, mess.wait, id)
try {
	const fuccth0 = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/phub-search?q=${xxxsch}&apikey=404Api`)
	const fuccth20 = fuccth0.data
	const { result } = fuccth20
	let xxxszz = `*「 PORNHUB 」*\n`
	for (let i = 0; i < result.length; i++) {
		xxxszz += `\n─────────────────\n• *Title:* ${result[i].title}\n• *Uploader:* ${result[i].author}\n• *Views:* ${result[i].views}\n• *Published:* ${result[i].publish}\n• *Link:* ${result[i].url}`
	}
	await aruga.sendFileFromUrl(from, `https://cdn.someecards.com/posts/pornhub-detailed-map-world-porn-search-terms-yU8.jpg`, 'thumb.jpg', xxxszz, id)
	limitAdd(serial)
} catch (err) {
	console.log(err)
	aruga.reply(from, `Maybe the search results you want are not on the website`, id)
}
break
case prefix+'xnxxs':
if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
//if (!isPrem) return aruga.reply(from, mess.prem, id)
if (args.length == 0) return aruga.reply(from, `Looking for videos from XNXX website, Use ${prefix}xnxxs query\nExample: ${prefix}xnxxs japan`, id)
const xxxschh = body.slice(7)
aruga.reply(from, mess.wait, id)
try {
	const fuccth00 = await axios.get(`https://h4ck3rs404-api.herokuapp.com/api/xnxx-search?q=${xxxschh}&apikey=404Api`)
	const fuccth200 = fuccth00.data
	const { result } = fuccth200
	let xxxszzz = `*「 XNXX 」*\n`
	for (let i = 0; i < result.length; i++) {
		xxxszzz += `\n─────────────────\n• *Title:* ${result[i].judul}\n• *Info:* ${result[i].info}\n• *Link:* ${result[i].url}`
	}
	await aruga.sendFileFromUrl(from, `https://t3.ftcdn.net/jpg/03/12/50/68/360_F_312506834_o2VtbM3MVATkuhFJ6WK0qPwYiOyncFyG.jpg`, 'thumb.jpg', xxxszzz, id)
	limitAdd(serial)
} catch (err) {
	console.log(err)
	aruga.reply(from, `Maybe the search results you want are not on the website`, id)
}
break
case prefix+'javhds':
if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
//if (!isPrem) return aruga.reply(from, mess.prem, id)
if (args.length == 0) return aruga.reply(from, `Looking for videos from JavHD website, Use ${prefix}javhds query\nExample: ${prefix}javhds japan`, id)
const javv = body.slice(8)
aruga.reply(from, mess.wait, id)
try {
	const javhd = await axios.get(`https://api.dapuhy.ga/api/search/javhdporn?query=${javv}&apikey=1QM9kTIM1WUkJ57`)
	const javhd2 = javhd.data
	const { result } = javhd2
	let hav = `*「 JAVHD 」*\n`
	for (let i = 0; i < result.length; i++) {
		hav += `\n─────────────────\n• *Title:* ${result[i].title}\n• *Viewers:* ${result[i].viewers}\n• *Duration:* ${result[i].duration}\n• *Link:* ${result[i].url}`
	}
	await aruga.sendFileFromUrl(from, result[0].thumb, 'thumb.jpg', hav, id)
	limitAdd(serial)
} catch (err) {
	console.log(err)
	aruga.reply(from, `Maybe the search results you want are not on the website`, id)
}
break
case prefix+'javhdds':
if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
//if (!isPrem) return aruga.reply(from, mess.prem, id)
if (args.length == 0) return aruga.reply(from, `Looking for videos from JavHDD website, Use ${prefix}javhdds query\nExample: ${prefix}javhdds japan`, id)
const jaavv = body.slice(9)
aruga.reply(from, mess.wait, id)
try {
	const javhd1 = await axios.get(`https://api.dapuhy.ga/api/search/javhdd?query=${jaavv}&apikey=1QM9kTIM1WUkJ57`)
	const javhd22 = javhd1.data
	const { result } = javhd22
	let haav = `*「 JAVHD 」*\n`
	for (let i = 0; i < result.length; i++) {
		haav += `\n─────────────────\n• *Title:* ${result[i].title}\n• *Quality:* ${result[i].quality}\n• *Link:* ${result[i].url}`
	}
	await aruga.sendFileFromUrl(from, result[0].thumb, 'thumb.jpg', haav, id)
	limitAdd(serial)
} catch (err) {
	console.log(err)
	aruga.reply(from, `Maybe the search results you want are not on the website`, id)
}
break
case prefix+'ytsearch1':
if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
//if (!isPrem) return aruga.reply(from, mess.prem, id)
if (args.length == 0) return aruga.reply(from, `Looking for videos from youtube, Use ${prefix}ytsearch query\nExample: ${prefix}xvsearch japan`, id)
const xxscch = body.slice(11)
aruga.reply(from, mess.wait, id)
try {
	const fucctth = await axios.get(`https://api.zeks.me/api/yts?apikey=dc4x8bqxoKDYOGMAwlnOyOnvidk&q=${xxscch}`)
	const ffuccth2 = fucctth.data
	const { result } = ffuccth2
	let xsszz = `*「 Youtube Search 」*\n`
	for (let i = 0; i < result.length; i++) {
		xsszz += `\n─────────────────\n\n• *Title:* ${result[i].video.title}\n• *Uploader:* ${result[i].uploader.username}\n• *Duration:* ${result[i].video.duration}\n• *Link:* ${result[i].video.url}\n`
	}
	await aruga.sendFileFromUrl(from, result[0].video.thumbnail_src, 'thumb.jpg', xsszz, id)
	limitAdd(serial)
} catch (err) {
	console.log(err)
	aruga.reply(from, `Maybe the search results you want are not on the website`, id)
}
break

case prefix+'ytsearch':
if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
//if (!isPrem) return aruga.reply(from, mess.prem, id)
if (args.length == 0) return aruga.reply(from, `Looking for videos from youtube, Use ${prefix}ytsearch query\nExample: ${prefix}xvsearch japan`, id)
const xxscach = body.slice(10)
aruga.reply(from, mess.wait, id)
try {
	const r = await ytsearch(xxscach)
	let xssazz = `*「 Youtube Search 」*`
	for (let i = 0; i < 6; i++) {
		xssazz += `\n─────────────────\n\n• *Title >* ${r.all[i].title}\n• *Link >* https://youtu.be/${r.all[i].videoId}\n• *Duration >*	 ${r.all[i].timestamp} minutes\n• *Views >* ${r.all[i].views}\n• *Author >* ${r.all[i].author.name}\n`
	}
	await aruga.sendYoutubeLink(from, xssazz, id)
	limitAdd(serial)
} catch (err) {
	console.log(err)
	aruga.reply(from, `Maybe the search results you want are not on the website`, id)
}
break
case prefix+'ytsearch2':
//if (!isPrem) return aruga.reply(from, mess.prem, id)
if (args.length == 0) return aruga.reply(from, `Looking for videos from XVIDEOS website, Use ${prefix}xvsearch query\nExample: ${prefix}xvsearch japan`, id)
const xxscchh = body.slice(11)
aruga.reply(from, mess.wait, id)
try {
	const ffucctth = await axios.get(`https://docs-jojo.herokuapp.com/api/yt-search?q=${xxscchh}`)
	const ffuuccth2 = ffucctth.data
	const { result } = ffuuccth2
	let xxsszz = `*「 Youtube Search 」*\n`
	for (let i = 0; i < result.length; i++) {
            xxsszz += `\n─────────────────\n\n• *Title* : ${result.result[i].title}\n• *Duration* : ${result.result[i].duration}\n• *Views* : ${result.result[i].viewCount.text}\n• *Channel* : ${result.result[i].channel.name}\n• *URL* : ${result.result[i].accessibility.link}\n`
	}
	await aruga.sendFileFromUrl(from, result.result[0].thumbnails.url, 'thumb.jpg', xxsszz, id)
} catch (err) {
	console.log(err)
	aruga.reply(from, `Maybe the search results you want are not on the website`, id)
}
break
case prefix+'ytsearch20':
    if (args.length === 0) return aruga.reply(from, `Send orders *${prefix}ytsearch [ Query ]*, Example: ${prefix}ytsearch alan walker alone`)
    const ytsher = body.slice(11)
    aruga.reply(from, mess.wait, id)
    try {
        const response2 = await fetch(`https://docs-jojo.herokuapp.com/api/yt-search?q=${ytsher}`)
        if (!response2.ok) throw new Error(`unexpected response ${response2.statusText}`)
        const jsonserc = await response2.json()
        const { result } = await jsonserc
        let xixixi = `*「 YOUTUBE SEARCH 」*\n\n*Searching for : ${ytsher}*\n`
        for (let i = 0; i < result.length; i++) {
            xixixi += `\n─────────────────\n\n• *Title* : ${result[i].result.title}\n• *Duration* : ${result[i].result.duration}\n• *Views* : ${result[i].result.viewCount.text}\n• *Channel* : ${result[i].channel}\n• *URL* : ${result[i].result.channel.name}\n`
        }
        await aruga.sendFileFromUrl(from, result[0].result.thumbnails.url, 'thumbserc.jpg', xixixi, id)
    } catch (err) {
            console.log(err)
            await aruga.sendFileFromUrl(from, errorurl2, 'error.png', '💔️ Maaf, Video tidak ditemukan')
    }
    break
			
        //Primbon Menu
		
	
	case prefix+'tomp3000':
	   if ((isMedia || isQuotedVideo || isQuotedFile)) {
            aruga.reply(from, mess.wait, id)
            const encryptMedia = isQuotedVideo || isQuotedFile ? quotedMsg : message
            const _mimetype = isQuotedVideo || isQuotedFile ? quotedMsg.mimetype : mimetype
            console.log(color('[WAPI]', 'green'), 'Downloading and decrypt media...')
            const mediaData = await decryptMedia(encryptMedia)
            let temp = './temp'
            let name = new Date() * 1
            let fileInputPath = path.join(temp, 'video', `${name}.${_mimetype.replace(/.+\//, '')}`)
            let fileOutputPath = path.join(temp, 'audio', `${name}.mp3`)
            console.log(color('[fs]', 'green'), `Downloading media into '${fileInputPath}'`)
            fs.writeFile(fileInputPath, mediaData, err => {
                if (err) return aruga.reply(from, 'Error saat menulis file\n\n' + err, id)
                ffmpeg(fileInputPath)
                    .format('mp3')
                    .on('start', function (commandLine) {
                        console.log(color('[FFmpeg]', 'green'), commandLine)
                    })
                    .on('progress', function (progress) {
                        console.log(color('[FFmpeg]', 'green'), progress)
                    })
                    .on('end', function () {
                        console.log(color('[FFmpeg]', 'green'), 'Processing finished!')
                        aruga.sendFile(from, fileOutputPath, 'audio.mp3', '', id)
                        setTimeout(() => {
                            try {
                                fs.unlinkSync(fileInputPath)
                                fs.unlinkSync(fileOutputPath)
                            } catch (e) {
                                console.log(color('[ERROR]', 'red'), e)
                            }
                        }, 30000)
                    })
                    .save(fileOutputPath)
            })
        }
		else {
                    await aruga.reply(from, 'Wrong Format..', id)
                }
    break
	
      
        //Random Images
        case prefix+'anime':
		if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            if (args.length == 0) return aruga.reply(from, `To use ${prefix}anime\nPlease type: ${prefix}anime [query]\nExample: ${prefix}anime random\n\nAvailable queries:\nrandom, waifu, husbu, neko, anime name`, id)
            if (args[0] == 'random' || args[0] == 'waifu' || args[0] == 'husbu' || args[0] == 'neko') {
                fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/' + args[0] + '.txt')
                .then(res => res.text())
                .then(body => {
                    let randomnime = body.split('\n')
                    let randomnimex = randomnime[Math.floor(Math.random() * randomnime.length)]
                    aruga.sendFileFromUrl(from, randomnimex, '', 'Nee..', id)
			limitAdd(serial)})}
			else if (args[0] !== 'random' || args[0] !== 'waifu' || args[0] !== 'husbu' || args[0] !== 'neko') {
            const keyword = message.body.replace('#anime', '')
            try {
            const data = await fetch(`https://api.jikan.moe/v3/search/anime?q=${keyword}`)
            const parsed = await data.json()
            if (!parsed) {
              await aruga.sendFileFromUrl(from, 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false', 'error.png', '💔️ Sorry, Couldn\'t find the requested anime', id)
              return null
              }
            const { title, synopsis, episodes, url, rated, score, image_url } = parsed.results[0]
            const content = `*Anime Found!*
✨️ *Title:* ${title}

🎆️ *Episodes:* ${episodes}

💌️ *Rating:* ${rated}

❤️ *Score:* ${score}

💚️ *Synopsis:* ${synopsis}

🌐️ *URL*: ${url}`

            const image = await bent("buffer")(image_url)
            const base64 = `data:image/jpg;base64,${image.toString("base64")}`
            aruga.sendImage(from, base64, title, content)
			limitAdd(serial)
           } catch (err) {
             console.error(err.message)
             await aruga.sendFileFromUrl(from, 'https://steamuserimages-a.akamaihd.net/ugc/954087817129084207/5B7E46EE484181A676C02DFCAD48ECB1C74BC423/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false', 'error.png', '💔️ Sorry, Couldn\'t find the requested anime')
           }
	}
                
     
   
            break
			
		case prefix+'wallprogramming':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
		aruga.reply(from, mess.wait, id)
		axios.get(`https://urbaee-xyz.herokuapp.com/api/wallpaper/programming?apikey=Urbaeexyz`)
		.then(async(res) => {
			const berandom = res.data.result
			let thisrandom = berandom[Math.floor(Math.random() * berandom.length)]
			aruga.sendFileFromUrl(from, thisrandom, 'img.jpg','', id)
			limitAdd(serial)
			
		})
		.catch((err) => {
			console.log(err)
		})
		break
        case prefix+'kpop':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            if (args.length == 0) return aruga.reply(from, `To use ${prefix}kpop\nPlease type: ${prefix}kpop [query]\nExample: ${prefix}kpop bts\n\nAvailable queries:\nblackpink, exo, bts`, id)
            if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {
                fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')
                .then(res => res.text())
                .then(body => {
                    let randomkpop = body.split('\n')
                    let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]
                    aruga.sendFileFromUrl(from, randomkpopx, '', 'Nee..', id)
					limitAdd(serial)
                })
                .catch(() => {
                    aruga.reply(from, 'Error!', id)
                })
            } else {
                aruga.reply(from, `Maaf query tidak tersedia. Silahkan ketik ${prefix}kpop untuk melihat list query`)
            }
            break
		case prefix+'couple':
		case prefix+'ppcouple':
		if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
		aruga.reply(from, mess.wait, id)
		axios.get(`https://api.dapuhy.ga/api/randomimage/couple?apikey=1QM9kTIM1WUkJ57`)
		.then(async(res) => {
			await aruga.sendFileFromUrl(from, res.data.result.pria, 'cp.jpg', '', id)
			await aruga.sendFileFromUrl(from, res.data.result.wanita, 'cp.jpg', '', id)
			.catch(() => {
				aruga.reply(from, 'lagii error nich', id)
			})
		})
		.catch(err => {
			console.log(err)
		})
		break
        
        
        // Search Any
	
  
		case prefix+'anisearch':
	if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
	if (args.length == 0) return aruga.reply(from, `Search for anime from the My Anime List website, use ${prefix}anisearch title anime`, id)
	const carianiim = body.slice(11)
	aruga.reply(from, mess.wait, id)
	try {
		const kusoon = await axios.get(`https://api.dapuhy.ga/api/anime/mal-search?query=${carianiim}&apikey=1QM9kTIM1WUkJ57 `)
		const kusoon2 = kusoon.data
	const { result } = kusoon2
		let asearch = `*「 MAL Search 」*\n`
	for (let i = 0; i < result.length; i++) {
		asearch += `─────────────────\n• *Title:* ${result[i].title}\n• *Raiting:* ${result[i].rating}\n• *Description:* ${result[i].desc}\n• *Link:* ${result[i].url}\n`
	}
	await aruga.sendFileFromUrl(from, result[0].thumb, 'thumb.jpg', asearch, id)
		limitAdd(serial)
	} catch (err) {
		console.log(err)
		aruga.reply(from, 'Anime not found', id)
	}
	break
	case prefix+'mangasearch':
	if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
	if (args.length == 0) return aruga.reply(from, `Search for anime from the Anime Planet website, use ${prefix}mangasearch title manga`, id)
	const carrianiim = body.slice(13)
	aruga.reply(from, mess.wait, id)
	try {
		const kuusoon = await axios.get(`https://api.dapuhy.ga/api/manga/animeplanet?query=${carrianiim}&apikey=1QM9kTIM1WUkJ57 `)
		const kuusoon2 = kuusoon.data
	const { result } = kuusoon2
		let aasearch = `*「 Manga Search 」*\n`
	for (let i = 0; i < result.length; i++) {
		aasearch += `─────────────────\n• *Title:* ${result[i].title}\n• *Link:* ${result[i].url}\n`
	}
	await aruga.sendFileFromUrl(from, result[0].thumb, 'thumb.jpg', aasearch, id)
		limitAdd(serial)
	} catch (err) {
		console.log(err)
		aruga.reply(from, 'Manga not found', id)
	}
	break
	case prefix+'animequote':
	if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            axios.get(`https://some-random-api.ml/animu/quote `).then(res => {
            aruga.reply(from, `*"${res.data.sentence}"*\n*By* : ${res.data.characther}\n*Anime* : ${res.data.anime}`, id)
			limitAdd(serial)
            })
	    break
		case prefix+'pokedex':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            if (args.length == 0) return aruga.reply(from, `To search for the pokemon details from pokedex\nType: ${prefix}pokedex pikachu`, id)
	   //if (!isPrem) return aruga.reply(from, mess.prem, id)
            const caripoke = body.slice(9)
            axios.get(`https://some-random-api.ml/pokedex?pokemon=${caripoke} `).then(res => {
            aruga.reply(from, `*Name* : ${res.data.name}\n*ID* : ${res.data.id}\n*Type* : ${res.data.type}\n*Species* : ${res.data.species}\n*Abilities* : ${res.data.abilities}\n*Height* : ${res.data.height}\n*Weight* : ${res.data.weight}\n*Experience* : ${res.data.base_experience}\n*Gender* : ${res.data.gender}\n*Group* : ${res.data.egg_groups}\n*HP* : ${res.data.stats.hp}\n*Attack* : ${res.data.stats.attack}\n*Defence* : ${res.data.stats.defense}\n*Attack SP* : ${res.data.stats.sp_atk}\n*Defence SP* : ${res.data.stats.sp_def}\n*Speed* : ${res.data.stats.speed}\n*Total* : ${res.data.stats.total}\n*Evolution Stage* : ${res.data.family.evolutionStage}\n*Evolution Line* : ${res.data.family.evolutionLine}\n*Description* : ${res.data.description}\n*Generation* : ${res.data.generation}`, id)
			limitAdd(serial)		
            })	
	    break
	
	
      
        case prefix+'sreddit':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            if (args.length == 0) return aruga.reply(from, `To search for pictures from the reddit sub\nType: ${prefix}sreddit [search]\nExample: ${prefix}sreddit naruto`, id)
	   //if (!isPrem) return aruga.reply(from, mess.prem, id)
            const carireddit = body.slice(9)
            axios.get(`https://meme-api.herokuapp.com/gimme/${carireddit} `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ',`${res.data.title}`, id)
			limitAdd(serial)
            })
	    break
		
       
            case prefix+'goldpb':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                if (args.length == 0) return aruga.reply(from, `The bot will send a Gold Play Button with your own custom name\nExample: ${prefix}goldpb abc`, id)
                const yuza = body.slice(8)
                await aruga.sendFileFromUrl(from, `https://api.zeks.me/api/gplaybutton?apikey=dc4x8bqxoKDYOGMAwlnOyOnvidk&text=${yuza}`, 'img.jpg', `Congrats *${pushname}* for having 1 Million Subscribers`, id)
				limitAdd(serial)
				.catch(() => {
					aruga.reply(from, 'Error', id)
				})
		break
            case prefix+'silverpb':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                if (args.length == 0) return aruga.reply(from, `The bot will send a Silver Play Button with your own custom name\nExample: ${prefix}silverpb abc`, id)
		const silsc = body.slice(10)
		await aruga.sendFileFromUrl(from, `https://api.zeks.me/api/splaybutton?apikey=dc4x8bqxoKDYOGMAwlnOyOnvidk&text=${silsc}`, '', '', id)
		limitAdd(serial)
		.catch(() => {
			aruga.reply(from, 'Error', id)
		})
	    break
            
				case prefix+'stalkig':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `To stalk someone's instagram account.\nYype ${prefix}stalkig [username]\nExample: ${prefix}stalkig gotta_be_empty`, id)
				aruga.reply(from, mess.wait, id)
				const ig = await axios.get(`https://www.instagram.com/${encodeURIComponent(body.slice(9))}/?__a=1`)
				const stkig = JSON.stringify(ig.data)
				if (stkig == '{}') return await aruga.reply(from, `Ugh...sorry, no results for that command... :C`, id)
				await aruga.sendFileFromUrl(from, `${ig.data.graphql.user.profile_pic_url}`, ``, `✪ Username: ${ig.data.graphql.user.username}\n\n✪ Biography: ${ig.data.graphql.user.biography}\n\n✪ Followers: ${ig.data.graphql.user.edge_followed_by.count}\n\n✪ Following: ${ig.data.graphql.user.edge_follow.count}\n\n✪ Verified: ${ig.data.graphql.user.is_verified}`, id)
				limitAdd(serial)
				break

			case prefix+'lyrics':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            if (args.length == 0) return aruga.reply(from, `To search for the lyrics of a song\bType: ${prefix}lyrics song title`, id)
            const llyric = (body.slice(8))
				axios.get(`https://some-random-api.ml/lyrics?title=${llyric}`)
				.then(async (res) => {
                aruga.reply(from, `Title : ${res.data.title}\n\n${res.data.lyrics}`, id)
				limitAdd(serial)
            })
            break
        
                case prefix+'ig':
				case prefix+'instagram':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                    if (args.length == 0) return aruga.reply(from, `Send orders ${prefix}ig https://www.instagram.com/p/CObce-SoRrk/?utm_source=ig_web_copy_link`, id)
                    aruga.reply(from, '_Scrapping Metadataa..._', id)
                    axios.get(`https://bx-hunter.herokuapp.com/api/igdownload?url=${body.slice(4)}&apikey=Ikyy69`)
			.then(async(res) => {
			aruga.sendFileFromUrl(from, res.data.linkdownload, 'ig.mp4', '', id)
			limitAdd(serial)
			
	})
	break
				
		case prefix+'lolivid': //BY : piyo
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
		aruga.reply(from, mess.wait, id)
                fetch('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')
                .then(res => res.text())
                     .then(body => {
                        let lolipiyo = body.split('\n')
                        let papololi = lolipiyo[Math.floor(Math.random() * lolipiyo.length)]
                        aruga.sendFileFromUrl(from, papololi, 'loli.mp4', 'Nih asu', id)
                        .then(() => console.log('Success sending Video Loli'))
						limitAdd(serial)
                            })
                            .catch(() => {
                                aruga.reply(from, 'Error!', id)
                            })
                break
		
          
			
	   
		case prefix+'igstory':
		case prefix+'instastory':
		if (args.length == 0) return aruga.reply(from, `Mencari story dari username, Gunakan ${prefix}igstory username|jumlahyangingindidownload\nContoh: ${prefix}igstory ewkharis|2`, id)
		const xas1 = q.split('|')[0]
		const xas2 = q.split('|')[1]
		aruga.reply(from, mess.wait, id)
		try {
			const xas3 = await axios.get(`https://api.zeks.me/api/igs?apikey=dc4x8bqxoKDYOGMAwlnOyOnvidk&username=${xas1}`)
			const xas4 = xas3.data
			if (xas2 > 5) return aruga.reply(from, 'Maksimal 5!', id)
			for (let i = 0; i < xas2; i++) {
				await aruga.sendFileFromUrl(from, xas4.data[i].url, '', '', id)
			}
		} catch (err) {
			console.log(err)
			aruga.reply(from, 'Maaf, username salah, silahkan masukkan username yang benar', id)
		}
		break
		
		
		case prefix+'wallhaven':
		case prefix+'wallpaper':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a query`, id)
				await aruga.reply(from, mess.wait, id)
				try {
					const wpphe = await axios.get(`https://wallhaven.cc/api/v1/search?sorting=random&q=${encodeURIComponent(body.slice(11))}`)
					var rwlpp = ''
					for (let i = 0; i < 10; i++) { rwlpp += `${wpphe.data.data[i].path}\n` }
					const heavenwpp = rwlpp.toString().split('\n')
					const rmvempty = heavenwpp.splice(heavenwpp.indexOf(''), 1)
					const rWallHe = heavenwpp[Math.floor(Math.random() * heavenwpp.length)]
					await aruga.sendFile(from, rWallHe, 'WallHaven.jpg', `<3\nSource: ${rWallHe}`, id)
					limitAdd(serial)
				} catch (error) {
					await aruga.reply(from, `Ugh...sorry, no results for that command... :C`, id)
					console.log(color('[WALLHAVEN]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break
				
				  case prefix+'ytmp4':
					let limit = 30
					const { serversss, ytvv } = require('./lib/y2mate3.js')
				  if (!args || !args[0]) return aruga.reply(from, `Uhm... where's the url?`,id)
				  let serverr = (args[1] || serversss[0]).toLowerCase()
				  let { dl_linkkk, thumbbb, tttitle, filesizeee, filesizeFff} = await ytvv(args[0], serversss.includes(serverr) ? serverr : serversss[0])
				  let isLimittt = (isOwner ? 99 : limit) * 1024 < filesizeee
				  aruga.sendFile(from, thumbbb, 'thumbnail.jpg', `*Title:* ${tttitle}\n*Filesize:* ${filesizeFff}\n${isLimittt ? 'Use ': ''}`.trim(), id)
				  let _thumbb = {}
				  try { _thumbb = { thumbnail: await (await fetch(thumbbb)).buffer() } }
				  catch (e) { }
				  if (!isLimittt) aruga.sendFile(from, dl_linkkk, tttitle + '.mp4', `*Title:* ${tttitle}\n*Filesize:* ${filesizeFff}`.trim(), id)
    			break
			
				case prefix+'play':
				case prefix+'song':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return aruga.reply(from,'Where is the song name?', id)	
					limitAdd(serial)
					const sgnm = body.slice(6)
					let limitt = 30
					let yts = require('yt-search')
					const { servers, yta, ytv } = require('./lib/y2mate')
					  let results = await yts(sgnm)
					  let vid = results.all.find(video => video.seconds < 3600)
					  if (!vid) return aruga.reply(from,'Video/Audio Not found',id)
					  let isVideo = /2$/.test(command)
					  let yt = false
					  let usedServer = servers[0]
					  for (let i in servers) {
						let server = servers[i]
						try {
						  yt = await (isVideo ? ytv : yta)(vid.url, server)
						  usedServer = server
						  break
						} catch (e) {
						  aruga.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\ntry another server...'}`)
						}
					  }
					  if (yt === false) return aruga.reply(from,`All servers can't :/`,id)
					  let { dl_link, thumb, title, filesize, filesizeF } = yt
					  let issLimit = (isOwner ? 99 : limitt) * 1024 < filesize
					  aruga.sendFile(from, thumb, 'thumbnail.jpg', `*Title:* ${title}\n*Filesize:* ${filesizeF}\n*Source:* ${vid.url}\n${issLimit ? 'Use ': ''}`.trim(), id)
					let _thumb = {}
					try { if (isVideo) _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
					catch (e) { }
					if (!issLimit) aruga.sendFile(from, dl_link, title + '.mp' + (3 + /2$/.test(command)), `*Title:* ${title}\n*Filesize:* ${filesizeF}\n*Source:* ${vid.url}`.trim(), id)
					break
				
						/*case prefix+'audio':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0 || !isUrl(url)) return await aruga.reply(from, `Etoo, you have inserted a link? I can't see her, with or without glasses.`, id)
				try {
					limitAdd(serial)
					await aruga.reply(from, mess.wait, id)
					await youtubedl(`${url}`, { noWarnings: true, noCallHome: true, noCheckCertificate: true, preferFreeFormats: true, youtubeSkipDashManifest: true, referer: `${url}`, x: true, audioFormat: 'mp3', o: `./lib/media/audio/d${sender.id.replace('@c.us', '')}${lvpc}.mp3` }).then(async () => { await aruga.sendPtt(from, `./lib/media/audio/d${sender.id.replace('@c.us', '')}${lvpc}.mp3`, id) })
					.then(async () => { await fs.unlinkSync(`./lib/media/audio/d${sender.id.replace('@c.us', '')}${lvpc}.mp3`) })
				} catch (err) {
					await aruga.reply(from, `Oops! This exceeds the sending limit, even in the worst quality it is still more than 16MB, I will not be able to send you, sorry.`, id)
					if (fs.existsSync(`./lib/media/audio/d${sender.id.replace('@c.us', '')}${lvpc}.mp3`)) { await fs.unlinkSync(`./lib/media/audio/d${sender.id.replace('@c.us', '')}${lvpc}.mp3`) }
					console.log(color('[DOWNAUDIO]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
				}
				break*/
				case prefix+'tomp3':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (isMedia && isVideo || isQuotedVideo) {
					try {
						limitAdd(serial)
						await aruga.reply(from, mess.wait, id)
						const vTypeA = isQuotedVideo ? quotedMsg : message
						const mediaData = await decryptMedia(vTypeA, uaOverride)
						await fs.writeFile(`./lib/media/video/${sender.id.replace('@c.us', '')}${lvpc}.${vTypeA.mimetype.replace(/.+\//, '')}`, mediaData, (err) => {
							if (err) return console.error(err)
							console.log(color('[FFMPEG]', 'crimson'), color(`- Video to audio conversion requested by → ${pushname} - you can ignore.`, 'gold'))
							ffmpeg(`./lib/media/video/${sender.id.replace('@c.us', '')}${lvpc}.${vTypeA.mimetype.replace(/.+\//, '')}`).format('mp3').save(`./lib/media/video/v${sender.id.replace('@c.us', '')}${lvpc}.mp3`)
							.on('error', async function (error, stdout, stderr) {
								await aruga.reply(from, `Error!!`, id)
								console.log(color('[AUDIO]', 'crimson'), color(`→I got errors in the command.`, 'gold'))
							})
							.on('end', async () => {
								console.log(color('[FFMPEG]', 'crimson'), color(`- Video to audio conversion finished, sending to → ${pushname} - you can ignore...`, 'gold'))
								await aruga.sendFile(from, `./lib/media/video/v${sender.id.replace('@c.us', '')}${lvpc}.mp3`, 'audio.mp3', '', id)
								.then(async () => { await fs.unlinkSync(`./lib/media/video/v${sender.id.replace('@c.us', '')}${lvpc}.mp3`);await fs.unlinkSync(`./lib/media/video/${sender.id.replace('@c.us', '')}${lvpc}.${vTypeA.mimetype.replace(/.+\//, '')}`) })
							})
						})
					} catch (error) {
						await aruga.reply(from, `Error!!`, id)
						console.log(color('[AUDIO]', 'crimson'), color(`→ I got errors in the command.`, 'gold'))
					}
				} else return await aruga.reply(from, `Use that in a video to extract the correct audio from him.`, id)
				break
				case prefix+'bass':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (isMedia && isAudio || isQuotedAudio || isPtt || isQuotedPtt) 
				{
					if (args.length == 1 && !isNaN(args[0]))
						{
						try {
							limitAdd(serial)
							await aruga.reply(from, mess.wait, id)
							const encryptMedia = isQuotedAudio || isQuotedPtt ? quotedMsg : message
							const mediaData = await decryptMedia(encryptMedia, uaOverride)
							await fs.writeFile(`./lib/media/audio/${sender.id.replace('@c.us', '')}${lvpc}.mp3`, mediaData, (err) => {
								if (err) return console.error(err)
								console.log(color('[FFMPEG]', 'crimson'), color(`- "Bass" audio conversion requested by → ${pushname} - .`, 'gold'))
								ffmpeg(`./lib/media/audio/${sender.id.replace('@c.us', '')}${lvpc}.mp3`).audioFilter(`equalizer=f=40:width_type=h:width=50:g=${args[0]}`).format('mp3').save(`./lib/media/audio/audio-${sender.id.replace('@c.us', '')}${lvpc}.mp3`) // Você pode editar o equalizador ali
								.on('error', async function (error, stdout, stderr) {
									await aruga.reply(from, `Error!!`, id)
									console.log(color('[BASS]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
								})
								.on('end', async () => {
									console.log(color('[FFMPEG]', 'crimson'), color(`- "Bass" audio conversion finished, sending to → ${pushname} - .`, 'gold'))
									await aruga.sendFile(from, `./lib/media/audio/audio-${sender.id.replace('@c.us', '')}${lvpc}.mp3`, 'audio.mp3', '', id)
									.then(async () => { await fs.unlinkSync(`./lib/media/audio/audio-${sender.id.replace('@c.us', '')}${lvpc}.mp3`);await fs.unlinkSync(`./lib/media/audio/${sender.id.replace('@c.us', '')}${lvpc}.mp3`) })
								})
							})
						} catch (error) {
							await aruga.reply(from, `Max bass level is 327`, id)
							console.log(color('[BASS]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
						}
					} else return await aruga.reply(from, `This command needs something to work, for it to work insert a bass quantity.`, id)
				} else return await aruga.reply(from, `This is only for audio, others types will not work (mark the audio!).`, id)
				break
				case prefix+'nightcore':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (isMedia && isAudio || isQuotedAudio || isPtt || isQuotedPtt) {
					try {
						limitAdd(serial)
						await aruga.reply(from, mess.wait, id)
						const encryptMedia = isQuotedAudio || isQuotedPtt ? quotedMsg : message
						const mediaData = await decryptMedia(encryptMedia, uaOverride)
						await fs.writeFile(`./lib/media/audio/n${sender.id.replace('@c.us', '')}${lvpc}.mp3`, mediaData, (err) => {
							if (err) return console.error(err)
							console.log(color('[FFMPEG]', 'crimson'), color(`- Audio conversion to "nightcore" version requested by → ${pushname} - .`, 'gold'))
							ffmpeg(`./lib/media/audio/n${sender.id.replace('@c.us', '')}${lvpc}.mp3`).audioFilter('asetrate=44100*1.25').format('mp3').save(`./lib/media/audio/night-${sender.id.replace('@c.us', '')}${lvpc}.mp3`) // Você pode editar o valor acima (44100*1.25)
							.on('error', async function (error, stdout, stderr) {
								await aruga.reply(from, `Error!!`, id)
								console.log(color('[NIGHTCORE]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
							})
							.on('end', async () => {
								console.log(color('[FFMPEG]', 'crimson'), color(`- Audio conversion to "nightcore" version finished, sending to → ${pushname} - .`, 'gold'))
								await aruga.sendFile(from, `./lib/media/audio/night-${sender.id.replace('@c.us', '')}${lvpc}.mp3`, 'audio.mp3', '', id)
								.then(async () => { await fs.unlinkSync(`./lib/media/audio/night-${sender.id.replace('@c.us', '')}${lvpc}.mp3`);await fs.unlinkSync(`./lib/media/audio/n${sender.id.replace('@c.us', '')}${lvpc}.mp3`) })
							})
						})
					} catch (error) {
						await aruga.reply(from, `Error!!`, id)
						if (fs.existsSync(`./lib/media/audio/night-${sender.id.replace('@c.us', '')}${lvpc}.mp3`)) { await fs.unlinkSync(`./lib/media/audio/night-${sender.id.replace('@c.us', '')}${lvpc}.mp3`) }
						if (fs.existsSync(`./lib/media/audio/n${sender.id.replace('@c.us', '')}${lvpc}.mp3`)) { await fs.unlinkSync(`./lib/media/audio/n${sender.id.replace('@c.us', '')}${lvpc}.mp3`) }
						console.log(color('[NIGHTCORE]', 'crimson'), color(`→ Obtive erros no comando ${prefix}${command} → ${error.message} - Você pode ignorar.`, 'gold'))
					}
				} else return await aruga.reply(from, `This is only for audio, others types will not work (mark the audio!).`, id)
				break
		
           case prefix+'play2000000000000000000000000000'://silahkan kalian custom sendiri jika ada yang ingin diubah
           if (args.length == 0) return aruga.reply(from, `Untuk mencari lagu dari youtube\n\nPenggunaan: ${prefix}play judul lagu`, id)
           axios.get(`http://docs-jojo.herokuapp.com/api/yt-search?q=${body.slice(7)}`)
            .then(async (res) => {
				console.log(color(`Nickname : ${pushname}\nNomor : ${serial.replace('@c.us', '')}\nJudul: ${res.data.result.result[0].title}\nDurasi: ${res.data.result.result[0].duration} detik`, 'aqua'))
                 await aruga.sendFileFromUrl(from, res.data.result.result[0].thumbnails[0].url, ``, `「 *PLAY* 」\n\nJudul: ${res.data.result.result[0].title}\nDurasi: ${res.data.result.result[0].duration} detik\nViews: ${res.data.result.result[0].viewCount.short}\nUploaded: ${res.data.result.result[0].publishedTime}\nChannel: ${res.data.result.result[0].channel.name}\n\n*_Wait, lagi ngirim Audionya_*`, id)
				 rugaapi.ymp4(`https://youtu.be/${res.data.result.result[0].id}`)
                .then(async(res) => {
				const axioslink = await axios.get(`http://docs-jojo.herokuapp.com/api/shorturl-at?url=${res.url_video}`)
				const linkdat = axioslink.data.result
				//if (!isPrem) return aruga.reply(from, `Because you are not a Premium user, silahkan download menggunakan link\n\nLink: ${linkdat}`, id)
				if(Number(res.filesize.split(' MB')[0] >= 50)) return aruga.reply(from, 'Size video terlalu besar', id)
				aruga.sendFileFromUrl(from, res.url_video, '', '', id)
                                .catch(() => {
                                        aruga.reply(from, 'Error anjing', id)
                                   })
                                })
                        })
                        break
        
            case prefix+'source':
            case prefix+'sauce':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                if (isMedia && isImage || isQuotedImage) {
                    aruga.reply(from, `_Please Waitt, lemme process this command_\nIf bot doesn't reply then similarity is less than 45%`, id)
                    const encryptMedia = isQuotedImage ? quotedMsg : message
                    const mediaData = await decryptMedia(encryptMedia, uaOverride)
                    try {
                        const imageLink = await uploadImages(mediaData, `sauce.${sender.id}`)
                        console.log('Searching for source...')
                        const results = await saus(imageLink)
                        for (let i = 0; i < 5; i++) {
                            let teks = ''
                            if (results[i].similarity < 45.00) {
                                teks = 'Low similarity. 🤔\n\n'
                            } else {
                                teks += `*Link*: ${results[i].url}\n*Site*: ${results[i].site}\n*Author name*: ${results[i].authorName}\n*Author link*: ${results[i].authorUrl}\n*Similarity*: ${results[i].similarity}%`
                                await aruga.sendLinkWithAutoPreview(from, results[i].url, teks)
                                    .then(() => console.log('Source found!'))
									limitAdd(serial)
                            }
                        }
                    } catch (err) {
                        console.error(err)
                        await aruga.reply(from, 'Error!', id)
                    }
                } else {
                    await aruga.reply(from, 'Wrong Format\nUse on image only..', id)
                }
            break
        // Other Command
        
        case prefix+'tts':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            if (args.length == 0) return aruga.reply(from, `Convert text to sound (google voice)\nType: ${prefix}tts <lang_code> <text>\nExample : ${prefix}tts hi hello\nFor language code check here : https://anotepad.com/note/read/5xqahdy8\n\nAtau or you can use the command ${prefix}langcode`, id)
            const ttsGB = require('node-gtts')(args[0])
            const dataText = body.slice(8)
                if (dataText === '') return aruga.reply(from, 'where is the text anyway ..', id)
                try {
                    ttsGB.save('./media/tts.mp3', dataText, function () {
                    aruga.sendPtt(from, './media/tts.mp3', id)
					limitAdd(serial)
                    })
                } catch (err) {
                    aruga.reply(from, err, id)
                }
            break
        

        // Group Commands (group admin only)
	    case prefix+'add':
            if (!isGroupMsg) return aruga.reply(from, 'Sorry, this command can only be used within groups!', id)
            if (!isGroupAdmins && !isOwnerB) return aruga.reply(from, 'Failed, this command can only be used by group admins !, Members meh goshh are cocky', id)
				if (!isBotGroupAdmins) return aruga.reply(from, 'Failed, if you want to use this feature, make me admin', id)
	        if (args.length !== 1) return aruga.reply(from, `To use ${prefix}add\nUse: ${prefix}add <number>\nExample: ${prefix}add 9183xxxxxxxx`, id)
                try {
                    await aruga.addParticipant(from,`${args[0]}@c.us`)
                } catch {
                    aruga.reply(from, 'Target is missing on radar, Enemies Ahead!', id)
                }
            break
	case prefix+'remove':
	    if (!isGroupMsg) return aruga.reply(from, 'Sorry, this command can only be used within groups!', id)
            if (!isGroupAdmins && !isOwnerB) return aruga.reply(from, 'Failed, this feature will work if used by Admin, members please be quite!!', id)
			if (!isBotGroupAdmins) return aruga.reply(from, 'Failed, if you want to use this feature, make me admin', id)
            if (mentionedJidList.length === 0) return aruga.reply(from, 'Sorry, the Message format is wrong.\nPlease tag someone whom you want to kick', id)
            if (mentionedJidList[0] === botNumber) return await aruga.reply(from, 'Sorry, the Message format is wrong.\nUnable to issue a bot account on its own', id)
            await aruga.sendTextWithMentions(from, `Done!, User ${mentionedJidList.map(x => `@${x.replace('@c.us', '')} have been removed`).join('\n')}`)
            for (let i = 0; i < mentionedJidList.length; i++) {
				if (ownerNumber.includes(mentionedJidList[i])) return aruga.reply(from, 'Who do you want to kick my Owner?', id)
                if (groupAdmins.includes(mentionedJidList[i])) return await aruga.reply(from, 'LOL, How can you kick a stupid admin!', id)
                await aruga.removeParticipant(groupId, mentionedJidList[i])
            }
            break
        case prefix+'oremove':
	    var qmid2 = quotedMsgObj.sender.id
            if (!isGroupMsg) return aruga.reply(from, 'Sorry, this command can only be used within groups!', id)
            if (!isGroupAdmins && !isOwnerB) return aruga.reply(from, 'Failed, this feature will work if used by Admin, members please be quite!!', id)
			if (!isBotGroupAdmins) return aruga.reply(from, 'Failed, if you want to use this feature, make me admin', id)
	    try {
			if (ownerNumber.includes(qmid2)) return aruga.reply(from, 'Why do you want to kick my Owner?', id)
			if (botNumber.includes(qmid2)) return aruga.reply(from, 'I want to handle me, hehehheheh', id)
             await aruga.removeParticipant(groupId, qmid2)
            } catch {
		aruga.reply(from, 'Sorry, something went wrong', id)
		}
            break
	    case prefix+'opromote':
		var senderx = quotedMsgObj.sender.id
		if (!isGroupMsg) return aruga.reply(from, 'Sorry, this command can only be used within groups!', id)
        if (!isGroupAdmins) return aruga.reply(from, 'Failed, this feature will work if used by Admin, members please be quite!!', id)
		if (!isBotGroupAdmins) return aruga.reply(from, 'Failed, if you want to use this feature, make me admin', id)
		await aruga.promoteParticipant(groupId, senderx)
		await aruga.sendText(from, `Done!\nUser promoted to admin..`)
		break
            case prefix+'promote':
                if (!isGroupMsg) return aruga.reply(from, 'Sorry, this command can only be used within groups!', id)
                if (!isGroupAdmins) return aruga.reply(from, 'Failed, this feature will work if used by Admin, members please be quite!!', id)
				if (!isBotGroupAdmins) return aruga.reply(from, 'Failed, if you want to use this feature, make me admin', id)
                if (mentionedJidList.length !== 1) return aruga.reply(from, 'Tag only one person that you want to promote', id)
                if (groupAdmins.includes(mentionedJidList[0])) return await aruga.reply(from, 'Dumbo is already a stupid admin...', id)
                if (mentionedJidList[0] === botNumber) return await aruga.reply(from, 'Sorry, the Message format is wrong.\nTidak dapat mempromote akun bot sendiri', id)
                await aruga.promoteParticipant(groupId, mentionedJidList[0])
                await aruga.sendTextWithMentions(from, `Done, @${mentionedJidList[0].replace('@c.us', '')} promoted to admin...`)
                break
	    case prefix+'demoteme0000000000000':
		if (!isGroupAdmins) return aruga.reply(from, 'Can only be used by Admin!', id)
		if (!isBotGroupAdmins) return aruga.reply(from, 'So please admin first', id)
		await aruga.demoteParticipant(groupId, serial)
		await aruga.sendText(from, `request diterima, ${pushname} ingin jadi babi karna dia kepengen`)
		await aruga.promoteParticipant(groupId, serial)
		await aruga.sendText(from, `Prank boiss, jadi admin lagi kok`)
		break
	    case prefix+'odemote':
		var sendis = quotedMsgObj.sender.id
		if (!isGroupMsg) return aruga.reply(from, 'Sorry, This feature can only be used within Groups!', id)
		if (!isGroupAdmins && !isOwnerB) return aruga.reply(from, 'Failed, this feature will work if used by Admin', id)
		if (!isBotGroupAdmins) return aruga.reply(from, 'Failed, if you want to use this feature, make me admin', id)
		await aruga.demoteParticipant(groupId, sendis)
		await aruga.sendText(from, `Done!\nUser promoted to member..`)
		break
            case prefix+'demote':
                if (!isGroupMsg) return aruga.reply(from, 'Sorry, this command can only be used within groups!', id)
                if (!isGroupAdmins) return aruga.reply(from, 'Failed, this feature will work if used by Admin, members please be quite!!', id)
				if (!isBotGroupAdmins) return aruga.reply(from, 'Failed, if you want to use this feature, make me admin', id)
                if (mentionedJidList.length !== 1) return aruga.reply(from, 'Tag only one person that you want to demote', id)
                if (mentionedJidList[0] === botNumber) return await aruga.reply(from, 'Sorry, the Message format is wrong.\nTidak dapat mendemote akun bot sendiri', id)
                await aruga.demoteParticipant(groupId, mentionedJidList[0])
                await aruga.sendTextWithMentions(from, `Done, @${mentionedJidList[0].replace('@c.us', '')} promoted to member...`)
                break
				case prefix+'leave':
                if (!isGroupMsg) return aruga.reply(from, 'Sorry, this command can only be used within groups!', id)
                if (!isGroupAdmins && !isOwnerB) return aruga.reply(from, 'Failed, this feature will work if used by Admin, members please be quite!!', id)
                aruga.sendText(from, 'Sayonara.. ( ⇀‸↼‶ )', id).then(() => aruga.leaveGroup(groupId))
                break
            case prefix+'del':
			case prefix+'delete':
                if (!isGroupAdmins && !isOwnerB) return aruga.reply(from, 'Failed, this feature will work if used by Admin, members please be quite!!', id)
                if (!quotedMsg) return aruga.reply(from, `Sorry, the Message format is wrong silahkan.\nReply pesan bot dengan caption ${prefix}del`, id)
                if (!quotedMsgObj.fromMe) return aruga.reply(from, `Sorry, the Message format is wrong silahkan.\nReply to bots message with ${prefix}del`, id)
                aruga.deleteMessage(quotedMsgObj.chatId, quotedMsgObj.id, false)
                break
        
		case prefix+'attp3':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
		if (args.length == 0) return aruga.reply(from, 'Where is the text?', id)
		const txttx = body.slice(6)
		aruga.sendRawWebpAsSticker(from, `https://api.dapuhy.ga/api/maker/attp?text=${txttx}&apikey=1QM9kTIM1WUkJ57`, {author: authorr, pack: pack }, id)
		limitAdd(serial)
		break
		case prefix+'attp':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
		if (args.length == 0) return aruga.reply(from, 'Where is the text?', id)
		const txtx = body.slice(6)
		const beattp = await axios.get(`https://api.xteam.xyz/attp?text=${txtx}`)
		const beresult = beattp.data.result
		aruga.sendRawWebpAsSticker(from, beresult, {author: authorr, pack: pack }, id)
		limitAdd(serial)
		break
		case prefix+'trigger00':
		case prefix+'triggered00':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
		if (isMedia && isImage || isQuotedImage) {
			var encryptMedia = isQuotedImage ? quotedMsg : message
			var pepa = await decryptMedia(encryptMedia, uaOverride)
			canvas.Canvas.trigger(pepa)
			.then(async (buffer) => {
				canvas.write(buffer, `${sender.id}_trigger.jpg`)
				await aruga.sendImageAsSticker(from, `${sender.id}_trigger.jpg`, { author: authorr, pack: pack })
				fs.unlinkSync(`${sender.id}_trigger.jpg`)
				limitAdd(serial)
		})
		} else if (quotedMsg && quotedMsg.type == 'video' || quotedMsg && quotedMsg.mimetype == 'image/gif') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
				canvas.Canvas.trigger(mediaData)
				.then(async (buffer) => {
				canvas.write(buffer, `${sender.id}_trigger.jpg`)
				await aruga.sendImageAsSticker(from, `${sender.id}_trigger.jpg`, { author: authorr, pack: pack })
				fs.unlinkSync(`${sender.id}_trigger.jpg`)
				limitAdd(serial)
				})
		} else {
			aruga.reply(from, 'Message format is wrong', id)
		}
		break
		/*case prefix+'wanted':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                const wantedd = body.slice(8)
                try {
                    if (isMedia && isImage || isQuotedImage) {
                        var encryptMedia = isQuotedImage ? quotedMsg : message
                        var ppRaww = await decryptMedia(encryptMedia, uaOverride)
                        canvas.Canvas.wanted(ppRaww)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_wanted.png`)
                                await aruga.sendFile(from, `${sender.id}_wanted.png`, `${sender.id}_wanted.png`, '', id)
                                fs.unlinkSync(`${sender.id}_wanted.png`)
                            })
                    } else if (wantedd == "me"){
                        var ppRaww = await aruga.getProfilePicFromServer(sender.id)
						if (ppRaww == undefined) {
							aruga.reply(from, 'Photo does not exist or may be private', id)
						} else {	
                        canvas.Canvas.wanted(ppRaww)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_wanted.png`)
                                await aruga.sendFile(from, `${sender.id}_wanted.png`, `${sender.id}_wanted.png`, '', id)
                                fs.unlinkSync(`${sender.id}_wanted.png`)
                            })
						}
					} else if (args[0] === 'nih') {
						var qmbans = quotedMsgObj.sender.id
						var jss = await aruga.getProfilePicFromServer(qmbans)
						if (jss == undefined) {
							aruga.reply(from, 'Blank profile photo / private', id)
						}
						else {
							canvas.Canvas.wanted(jss)
							.then(async (buffer) => {
								canvas.write(buffer, `${sender.id}_wanted.png`)
								await aruga.sendFile(from, `${sender.id}_wanted.png`, `${sender.id}_wanted.png`, '', id)
								fs.unlinkSync(`${sender.id}_wanted.png`)
							})
					}
					} else {
                        var texnugmm = body.slice(8)
                        var getnomberr =  await aruga.checkNumberStatus(texnugmm)
                        var useriqq = getnomberr.id.replace('@','') + '@c.us'
                        var jnck = await aruga.getProfilePicFromServer(useriqq)
                        if (jnck == undefined){
                            aruga.reply(from,'Blank or private profile photo', id)
                        }
                        else{
                        canvas.Canvas.wanted(jnck)
                            .then(async (buffer) => {
                                canvas.write(buffer, `${sender.id}_wanted.png`)
                                await aruga.sendFile(from, `${sender.id}_wanted.png`, `${sender.id}_wanted.png`, '', id)
                                fs.unlinkSync(`${sender.id}_wanted.png`)
                            })
                    }}
					limitAdd(serial)
                } catch (err) {
                    console.log(err)
                    await aruga.reply(from, 'Error!', id)
                }
				break*/
		
		
		case prefix+'googleimg':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
		if (args.length == 0) return aruga.reply(from, `Send orders ${prefix}googleimg aesthetic|number`, id)
		const searchimage = q.split('|')[0]
		const jumlahimage = q.split('|')[1]
		if (jumlahimage > 10) return aruga.reply(from, 'Maximum 10', id)
		aruga.reply(from, mess.wait, id)
		try {
			axios.get(`https://api.zeks.me/api/gimg?apikey=dc4x8bqxoKDYOGMAwlnOyOnvidk&q=${searchimage}`).then(res => {
			for (let i = 0; i < jumlahimage; i++) {
				 aruga.sendFileFromUrl(from, res.data.data[i], '', '', id)
			}
				limitAdd(serial)
			
			})
		} catch (err) {
			console.log(color('[ERROR]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
			aruga.reply(from, 'The image you are looking for does not exist', id)
		}
		break
		case prefix+'simg':
		case prefix+'searchimg':
				if (isImage || isQuotedImage) {
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
					limitAdd(serial)
					const shimgoh = isQuotedImage ? quotedMsg : message
					const mediaData = await decryptMedia(shimgoh, uaOverride)
					await aruga.reply(from, mess.wait, id)
					const sImgUp = await uploadImages(mediaData, false)
					const sbrowser = await puppeteer.launch(options)
					const spage = await sbrowser.newPage()
					await spage.goto('https://www.google.com/searchbyimage?image_url=' + encodeURIComponent(sImgUp))
					const simages = await spage.evaluate(() => { return Array.from(document.body.querySelectorAll('div div a h3')).slice(2).map(e => e.parentNode).map(el => ({ url: el.href, title: el.querySelector('h3').innerHTML })) })
					await sbrowser.close()
					var titleS = `🔎 「 Google Images Search 」 🔎\n\n`
					for (let i = 1; i < simages.length; i++) { titleS += `${simages[i].title}\n${simages[i].url}\n\n══════════════════════════════\n\n` }
					await aruga.reply(from, titleS, id).catch(async () => { await aruga.reply(from, `The server denied the photo upload. Try to try it in a few minutes.`, id) })
				} else return await aruga.reply(from, `Command of that kind can be used only for images, another media can be a problem.`, id)
				break
		case prefix+'fsticker':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
		if (args.length == 0) return aruga.reply(from, `Send orders ${prefix}fsticekr aesthetic|number`, id)
		const searchimagee = q.split('|')[0]
		const jumlahimagee = q.split('|')[1]
		if (jumlahimagee > 10) return aruga.reply(from, 'Maximum 10', id)
		aruga.reply(from, mess.wait, id)
		try {
			axios.get(`https://api.zeks.me/api/gimg?apikey=dc4x8bqxoKDYOGMAwlnOyOnvidk&q=${searchimagee}`).then(res => {
			for (let i = 0; i < jumlahimagee; i++) {
				 aruga.sendStickerfromUrl(from, res.data.data[i], '', {author: authorr, pack: pack, keepScale: true }, id)
			}
				limitAdd(serial)
			})
		} catch (err) {
			console.log(color('[ERROR]', 'crimson'), color(`→ I got errors in the command .`, 'gold'))
			aruga.reply(from, 'Error!!', id)
		}
		break
		case prefix+'death':
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a *name*`, id)
				const predea = await axios.get(`https://api.agify.io/?name=${encodeURIComponent(args[0])}`)
				if (predea.data.age == null) return await aruga.reply(from, `You entered an invalid name, be sure to enter one without accents, emojis, numbers and similar.`, id)
				await aruga.reply(from, `People with this name "${predea.data.name}" will be die at ${predea.data.age} age.`, id)
				break
		case prefix+'gender':
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a *name*`, id)
				const seanl = await axios.get(`https://api.genderize.io/?name=${encodeURIComponent(args[0])}`)
				if (seanl.data.gender == null) return await aruga.reply(from, `You entered an invalid name, be sure to enter one without accents, emojis, numbers and similar.`, id)
				await aruga.reply(from, `The name "${seanl.data.name}" is more used for ${seanl.data.gender}`, id)
				break
		case prefix+'qr':
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert a number/word`, id)
				await aruga.sendFileFromUrl(from, `http://api.qrserver.com/v1/create-qr-code/?data=${body.slice(4)}`, '', `And...maked! But do'nt forgot to pay me grr!`, id)
				break
		case prefix+'readqr':
				if (isImage || isQuotedImage) {
					const qrCode = isQuotedImage ? quotedMsg : message
					const downQr = await decryptMedia(qrCode, uaOverride)
					const upQrCode = await uploadImages(downQr, false)
					const getQrText = await axios.get(`http://api.qrserver.com/v1/read-qr-code/?fileurl=${upQrCode}`)
					const theQRText = getQrText.data[0].symbol[0].data
					if (theQRText == null) return await aruga.reply(from, 'Not a QR - Not a QR.\n\nOr error - Or error.', id)
					await aruga.reply(from, `→ ${theQRText}`, id).catch(async () => { await aruga.reply(from, `The server denied the photo upload. Try to try it in a few minutes.`, id) })
				} else return await aruga.reply(from, `Command of that kind can be used only for images, another media can be a problem.` + '\nQR-Code!', id)
				break
        case prefix+'bot':
            if (args.length == 0) return await aruga.reply(from, chatBotR, id)
				try {
					if (args[0].toLowerCase() == '-g') {
						await exec(`cd lib/config/Utilidades && bash -c 'grep -i "${args[1]}" reply.txt | shuf -n 1'`, async (error, stdout, stderr) => {
							if (error || stderr || stdout == null || stdout == '') {
								await aruga.reply(from, chatBotR, id)
							} else return await aruga.reply(from, stdout, id)
						})
					} else {
						const iris = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURIComponent(body.slice(7))}&lc=en`)
						if (iris.data.success == 'Limit 50 queries per hour.' || iris.data.success == '' || iris.data.success == null) {
							await aruga.reply(from, chatBotR, id)
						} else {
							if (iris.data.success == 'Do nothing ;)') return await aruga.reply(from, 'Hi you hottie, how are you?', id)
							await aruga.reply(from, iris.data.success, id)
							await fs.appendFile('./lib/config/Utilidades/reply.txt', `\n${iris.data.success}`)
						}
					}
				} catch (error) { 
					await aruga.reply(from, chatBotR, id)
					console.log(color('[AKEN]', 'crimson'), color(`→ I got errors in the command. `, 'gold'))
				}
				break
		case prefix+'akeno':
		case prefix+'Akeno':
				if (args.length == 0) return await aruga.reply(from, chatBotR, id)
				try {
					if (args[0].toLowerCase() == '-g') {
						await exec(`cd lib/config/Utilidades && bash -c 'grep -i "${args[1]}" reply.txt | shuf -n 1'`, async (error, stdout, stderr) => {
							if (error || stderr || stdout == null || stdout == '') {
								await aruga.reply(from, chatBotR, id)
							} else return await aruga.reply(from, stdout, id)
						})
					} else {
						const iris = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURIComponent(body.slice(7))}&lc=en`)
						if (iris.data.success == 'Limit 50 queries per hour.' || iris.data.success == '' || iris.data.success == null) {
							await aruga.reply(from, chatBotR, id)
						} else {
							if (iris.data.success == 'Do nothing ;)') return await aruga.reply(from, 'Hi you hottie, how are you?', id)
							await aruga.reply(from, iris.data.success, id)
							await fs.appendFile('./lib/config/Utilidades/reply.txt', `\n${iris.data.success}`)
						}
					}
				} catch (error) { 
					await aruga.reply(from, chatBotR, id)
					console.log(color('[AKEN]', 'crimson'), color(`→ I got errors in the command. `, 'gold'))
				}
				break
				case prefix+'roll':
				const dice = Math.floor(Math.random() * 6) + 1
				await aruga.sendStickerfromUrl(from, 'https://www.random.org/dice/dice' + dice + '.png', { method: 'get' }, { author: authorr, pack: pack, keepScale: true })
				break
				
				case prefix+'flip':
				const side = Math.floor(Math.random() * 2) + 1
				if (side == 1) {
				   aruga.sendStickerfromUrl(from, 'https://i.ibb.co/LJjkVK5/heads.png')
				} else {
				   aruga.sendStickerfromUrl(from, 'https://i.ibb.co/wNnZ4QD/tails.png')
				}
				break
        case prefix+'ship':
			if (args.length == 0) return aruga.reply(from, `Tag two people whom you want to ship..`, id)
            const per = Math.floor(Math.random() * 100)
			if (per < 25) { 
			var sentence = `${per}% Worse than average ♦️`
			} else if (per < 50) {
			var sentence = `${per}% I don't know how I feel about it ❇️` 
			} else if (per < 75) {
			var sentence = `${per}% Good, I guess... ⭐️` 
			} else if (per < 90) {
			var sentence = `${per}% Sugoii! Go for it!🤩️` 
			} else {
			var sentence = `${per}% Incredible! You two will be an amazing couple 😍️` 
			}

			var shiptext = `❣️ *Matchmaking...*

			---------------------------------
				*${args[0]}  x  ${args[1]}*
			---------------------------------

			${sentence}`
        await aruga.sendTextWithMentions(from, shiptext)
        break
	
	case prefix+'burn':
	if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
	if (args.length == 0) return aruga.reply(from, `Where is the text?`, id)
	const initextnya = body.slice(6)
	await aruga.sendFileFromUrl(from, `http://zekais-api.herokuapp.com/sbburn?text=${initextnya}&apikey=U7jLmHKe`, '', '', id)
	limitAdd(serial)
	break
	
	case prefix+'wiki':
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (args.length == 0) return await aruga.reply(from, `This command needs something to work, for it to work insert words/numbers`, id)
				const wikip = await wiki.search(`${body.slice(6)}`)
				const wikis = await axios.get(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip[0].pageid}`)
				const getData = Object.keys(wikis.data.query.pages)
				await aruga.reply(from, wikis.data.query.pages[getData].extract, id).catch(async () => { await aruga.reply(from, `Ugh...sorry, no results for that command... :C`, id) })
				limitAdd(serial)
				break
				
	
	case prefix+'oedotensei00000000000000000000000000':
		var qmes = quotedMsgObj.sender.id
		if (!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
		if (!isGroupAdmins && !isOwnerB) return aruga.reply(from, 'Fitur ini hanya bisa digunakan oleh Admin Grup!', id)
		if (!isBotGroupAdmins) return aruga.reply(from, 'This feature can only be used when Bot is Admin', id)
		try {
		if (ownerNumber.includes(qmes)) return aruga.reply(from, 'Siapa lu mau ngekick Owner gua?', id)
		if (botNumber.includes(qmes)) return aruga.reply(from, 'mau ngekick gua kah? akwoakwoa', id)
		await aruga.removeParticipant(groupId, qmes)
		await sleep(1000)
		await aruga.addParticipant(from, qmes)
		} catch {
			aruga.reply(from, 'Maaf, terjadi kesalahan', id)
		}
		break
        case prefix+'edotensei0000000000000000000000000':
            if (!isGroupMsg) return aruga.reply(from, 'This feature can only be used in groups', id)
            if (!isGroupAdmins) return aruga.reply(from, 'This command can only be used by the Admin group', id)
            if (!isBotGroupAdmins) return aruga.reply(from, 'This command can only be used when bot becoms admin', id)
            if (mentionedJidList.length === 0) return aruga.reply(from, 'Fitur untuk menghapus member lalu menambahkan member kembali,Send orders ${prefix}edotensei @tagmember', id)
            for (let i = 0; i < mentionedJidList.length; i++) {
                if (groupAdmins.includes(mentionedJidList[i])) return aruga.reply(from, mess.error.Ki, id)
                if (ownerNumber.includes(mentionedJidList[i])) return aruga.reply(from, 'Tidak bisa mengeluarkan owner Bot')
                await aruga.removeParticipant(groupId, mentionedJidList[i])
                await sleep(1000)
                await aruga.addParticipant(from,`${mentionedJidList}`)
            } 
            break
        case prefix+'infoall':
        case prefix+'everyone':
	case prefix+'tagall':
            if (!isGroupMsg) return aruga.reply(from, 'Sorry, this command can only be used within groups!', id)
            if (!isGroupAdmins & !isOwnerB) return aruga.reply(from, 'Failed, this command can only be used by group admins. Members please be quite!!', id)
            const textInfo = body.slice(8)
            const namagcnih = name
            const memchu = chat.groupMetadata.participants.length
            const groupMem = await aruga.getGroupMembers(groupId)
            let hehex = `Name Group : *${namagcnih}*\n\nTotal Members : *${memchu}*\n\n╔══✪〘 Mention All 〙✪══\n╠\n`
            for (let i = 0; i < groupMem.length; i++) {
                hehex += `╠➥`
                hehex += ` @${groupMem[i].id.replace(/@c.us/g, '')}\n`
            }
            hehex += '╠\n╚═〘 *A K E N O  B O T* 〙'
            await aruga.sendTextWithMentions(from, `Tagged by : @${sender.id.replace(/@c.us/g, '')}\n` +textInfo+ '\n' +hehex)
            break
		case prefix+'group':
			if (!isGroupMsg) return aruga.reply(from, 'Sorry, this command can only be used within groups!', id)
            if (!isGroupAdmins) return aruga.reply(from, 'Failed, this command can only be used by group admins!', id)
			if (!isBotGroupAdmins) return aruga.reply(from, 'Failed, if you want to use this feature, make me admin', id)
			if (args.length !== 1) return aruga.reply(from, `To change the group chat settings so that only the admin can chat\n\nUse:\n${prefix}group close\n${prefix}group open`, id)
            if (args[0] == 'close') {
				aruga.setGroupToAdminsOnly(groupId, true).then(() => aruga.sendText(from, 'Successfully changed so that only admins can chat!'))
			} else if (args[0] == 'open') {
				aruga.setGroupToAdminsOnly(groupId, false).then(() => aruga.sendText(from, 'Successfully changed so that all members can chat!'))
			} else {
				aruga.reply(from, `To change the group chat settings so that only the admin can chat\n\nUse:\n${prefix}group close\n${prefix}group open`, id)
			}
			break
		case prefix+'seticon':
			if (!isGroupMsg) return aruga.reply(from, 'Sorry, this command can only be used within groups!', id)
            if (!isGroupAdmins) return aruga.reply(from, 'Failed, this command can only be used by group admins!', id)
			if (!isBotGroupAdmins) return aruga.reply(from, 'Failed, if you want to use this feature, make me admin', id)
			if (isMedia && type == 'image' || isQuotedImage) {
				const dataMedia = isQuotedImage ? quotedMsg : message
				const _mimetype = dataMedia.mimetype
				const mediaData = await decryptMedia(dataMedia, uaOverride)
				const imageBase64 = `data:${_mimetype};base64,${mediaData.toString('base64')}`
				await aruga.setGroupIcon(groupId, imageBase64)
			} else if (args.length === 1) {
				if (!isUrl(url)) { await aruga.reply(from, 'Sorry, the link you submitted is invalid.', id) }
				aruga.setGroupIconByUrl(groupId, url).then((r) => (!r && r !== undefined)
				? aruga.reply(from, 'Sorry, the link you sent does not contain an image.', id)
				: aruga.reply(from, 'Successfully changed the group profile', id))
			} else {
				aruga.reply(from, `This command is used to change the icon/profile of group chat\n\n\nUse:\n1. Reply or post image with caption ${prefix}seticon\n\n2. Please type ${prefix}setprofile linkImage`)
			}
			break
			
        //Owner Group
        case prefix+'kickall': //mengeluarkan semua member
        if (!isGroupMsg) return aruga.reply(from, 'Sorry, this command can only be used within groups!', id)
		let isOwnerGroup = sender.id === chat.groupMetadata.owner
        if (!isOwnerGroup) return aruga.reply(from, 'Sorry, this command can only be used by the Group Owner!', id)
		if (!isBotGroupAdmins) return aruga.reply(from, 'Failed, if you want to use this feature, make me admin', id)
            const allMem = await aruga.getGroupMembers(groupId)
            for (let i = 0; i < allMem.length; i++) {
                if (groupAdmins.includes(allMem[i].id)) {

                } else {
                    await aruga.removeParticipant(groupId, allMem[i].id)
                }
            }
            aruga.reply(from, 'Success kick all member', id)
        break

        //Owner Bot	
	case prefix+'oblock':
		if (!isOwnerB) return aruga.reply(from, 'Sorry, this command can only be used by the bot owner!', id)
			var qmblock = quotedMsgObj.sender.id
				aruga.contactBlock(qmblock)
				aruga.reply(from, 'Berhasil blokir kontak', id)
				break
	 case prefix+'oaddprem':
            var qmbann = quotedMsgObj.sender.id
            if (!isOwnerB) return aruga.reply(from, 'This command is for Owner bot only!', id)
                try {
                prem.push(qmbann)
                fs.writeFileSync('./lib/database/prem.json', JSON.stringify(prem))
                aruga.reply(from, 'Success add member to Premium user!', id)
            } catch {
                aruga.reply(from, 'Maaf, terjadi kesalan', id)
                }
                break
	case prefix+'unblock':
		if (!isOwnerB) return aruga.reply(from, 'This command can only be used by the Bot owner!', id)
		var qmunblok = quotedMsgObj.sender.id
		aruga.contactUnblock(qmunblok)
		aruga.reply(from, 'Berhasil unblock kontak', id)
		break
	case prefix+'unblocked':
			if (!isOwnerB) return aruga.reply(from, 'This command can only be used by the Bot owner!', id)
				aruga.contactUnblock(args[0]+'@c.us')
				aruga.reply(from, 'Berhasil unblock kontak', id)
				break
	case prefix+'odelprem':
            var qmban2 = quotedMsgObj.sender.id
            if (!isOwnerB) return aruga.reply(from, 'This feature can only be used by Owner Bot!', id)
            try {
                let xnxx = prem.indexOf(qmban2)
                prem.splice(xnxx,1)
                fs.writeFileSync('./lib/database/prem.json', JSON.stringify(prem))
                aruga.reply(from, 'Success delete Premium member!', id)
            } catch {
                aruga.reply(from, 'Maaf, terjadi kesalahan saat membanned member', id)
            } 
            break
		case prefix+'block':
			if (!isOwnerB) return aruga.reply(from, 'Sorry, this command can only be used by the bot owner!', id)
			aruga.contactBlock(args[0]+'@c.us')
			aruga.reply(from, 'Berhasil memblokir kontak', id)
			break
        case prefix+'addprem':
            if (!isOwnerB) return aruga.reply(from, 'This command can only be used by the Bot owner!', id)
            if (args.length == 0) return aruga.reply(from, `Untuk menambah seseorang menjadi member premium`, id)
            prem.push(args[0]+'@c.us')
            fs.writeFileSync('./lib/database/prem.json', JSON.stringify(prem))
            aruga.reply(from, 'success add', id)
            break
		case prefix+'trash':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
		if (isMedia || isImage || isQuotedImage) {
			await aruga.reply(from, mess.wait, id)
			const encryptMedia = isQuotedImage ? quotedMsg : message
			const mediaData = await decryptMedia(encryptMedia, uaOverride)
			const uploadImagex = await uploadImages(mediaData, `${sender.id}_img`)
			aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/canvas/trash?img=${uploadImagex}&apikey=1QM9kTIM1WUkJ57`, '', '', id)
			limitAdd(serial)
		} else {
			aruga.reply(from, 'Message format is wrong', id)
		}
		break
		case prefix+'addcecan':
		if (!isOwnerB) return aruga.reply(from, 'Sorry, this feature can only be used by Owner Bot!', id)
		if (isMedia && isImage || isQuotedImage) {
			await aruga.reply(from, mess.wait, id)
			const encryptMedia2 = isQuotedImage ? quotedMsg : message
			const medta2 = await decryptMedia(encryptMedia2, uaOverride)
			const linkpic2 = await uploadImages(medta2, `${sender.id}_img`)
			const linknyes = linkpic2
			cecann.push(linknyes)
			fs.writeFileSync('./lib/helper/cecan.json', JSON.stringify(cecann))
			aruga.reply(from, 'Foto berhasil disimpan didalam database!', id)
		} else {
			aruga.reply(from, 'Terjadi kesalahan saat menambahkan foto ke database', id)
		}
		break
		case prefix+'addcogan':
		if (!isOwnerB) return aruga.reply(from, 'Sorry, this feature can only be used by Owner Bot!', id)
					if (isMedia && isImage || isQuotedImage) {
						await aruga.reply(from, mess.wait, id)
						const encrypt = isQuotedImage ? quotedMsg : message
						const medta = await decryptMedia(encrypt, uaOverride)
						const linkpic = await uploadImages(medta, `${sender.id}_img`)
						const linkah = linkpic
						cogann.push(linkah)
						fs.writeFileSync('./lib/helper/cogan.json', JSON.stringify(cogann))
						aruga.reply(from, 'Foto berhasil disimpan ke dalam database', id)
					} else {
						aruga.reply(from, 'Terjadi kesalahan saat menambahkan foto ke database!', id)
					}
					break
	 case prefix+'pban':
            if (!isOwnerB) return aruga.reply(from, 'This command is for Owner bot only!', id)
            if (args.length == 0) return aruga.reply(from, `Untuk banned seseorang agar tidak bisa menggunakan commands\n\nCaranya ketik: \n${prefix}ban add 628xx --untuk mengaktifkan\n${prefix}ban del 628xx --untuk nonaktifkan\n\ncara cepat ban banyak digrup ketik:\n${prefix}ban @tag @tag @tag`, id)
            try {
                banned.push(args+'@c.us')
                fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
                aruga.reply(from, 'Go to BAN! huehuehue...', id)
            } catch {
		aruga.reply(from, 'There is an error', id)
		}
		break
	case prefix+'punban':
		if (!isOwnerB) return aruga.reply(from, 'Fitur ini hanya bisa digunakan oleh Owner bot & Member Premium', id)
            	try {
                let xnxx = banned.indexOf(args+'@c.us')
                banned.splice(xnxx,1)
                fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
                aruga.reply(from, 'Not banned anymore....', id)
            } catch {
		aruga.reply(from, 'There is an error', id)
		}
            break
	case prefix+'afk000000000000000000000':
              if (!isGroupMsg) return await aruga.reply(from, 'Sorry, This feature can only be used within Groups!', id)
                if (isAfkOn) return await aruga.reply(from, `${pushname} sekarang sedang *AFK (AWAY FROM KEYBOARD)*\n\nReason: ${reason}`, id)
                addAfk(sender.id, time, reason)
		aruga.sendTextWithMentions(from, `*@${sender.id.replace(/@c.us/g, '')} SEKARANG SEDANG AFK! (AWAY FROM KEYBOARD)*\n\n*Alasan: ${reason}*`)
		break
	case prefix+'left':
		if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa digunakan didalam Grup!', id)
        if (!isGroupAdmins) return aruga.reply(from, 'This command can only be used by Group Admins!', id)
        if (args.length === 0) return aruga.reply(from, 'on or off', id)
		if (args[0].toLowerCase() === 'on') {
                left.push(chat.id)
                fs.writeFileSync('./lib/database/left.json', JSON.stringify(left))
                aruga.reply(from, 'The left feature has been successfully activated in this group!', id)
            } else if (args[0].toLowerCase() === 'off') {
				var thisgc = left.indexOf(groupId)
                left.splice(thisgc, 1)
                fs.writeFileSync('./lib/database/left.json', JSON.stringify(left))
                aruga.reply(from, 'The left feature has been successfully deactivated in this group!', id)
            } else {
                aruga.reply(from, 'Enable or Disable!', id)
            }
            break
			case prefix+'deleteall':
    if (!isOwnerB) return aruga.reply(from, 'This command can only be used by the Bot owner!', id)
		let iindexx = left.includes(chats)
	let walccm = welkom.includes(chats)
		{
		welkom.splice(walccm)
		left.splice(iindexx)
		fs.writeFileSync('./settings/nsfw.json', JSON.stringify(left))
		fs.writeFileSync('./settings/anime.json', JSON.stringify(left))
		fs.writeFileSync('./lib/database/left.json', JSON.stringify(left))
		fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(welkom))
		aruga.reply(from, 'successfully deleted all group ids ', id)
		}
		break
			case prefix+'deletensfw':
    if (!isOwnerB) return aruga.reply(from, 'This command can only be used by the Bot owner!', id)
		let indexx = left.includes(chats)
		left.splice(indexx)
		fs.writeFileSync('./settings/nsfw.json', JSON.stringify(left))
		aruga.reply(from, 'successfully deleted all group ids in the nsfw.json database', id)
		break
		case prefix+'deleteani':
    if (!isOwnerB) return aruga.reply(from, 'This command can only be used by the Bot owner!', id)
		let inndex = left.includes(chats)
		left.splice(inndex)
		fs.writeFileSync('./settings/anime.json', JSON.stringify(left))
		aruga.reply(from, 'successfully deleted all group ids in the anime.json database', id)
		break
	case prefix+'deleteleft':
    if (!isOwnerB) return aruga.reply(from, 'This command can only be used by the Bot owner!', id)
		let index = left.includes(chats)
		left.splice(index)
		fs.writeFileSync('./lib/database/left.json', JSON.stringify(left))
		aruga.reply(from, 'successfully deleted all group ids in the left.json database', id)
		break
	case prefix+'deleteban':
	if (!isOwnerB) return aruga.reply(from, 'This command can only be used by the Bot owner!', id)
	let delban = banned.includes(chats)
	banned.splice(delban)
	fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
	aruga.reply(from, 'Successfully deleted all banned users', id)
	break
	case prefix+'deletewelcome':
	if (!isOwnerB) return aruga.reply(from, 'This command can only be used by the Bot owner!', id)
		let walcm = welkom.includes(chats)
		welkom.splice(walcm)
		fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(welkom))
		aruga.reply(from, 'berhasil mendelete semua id didalam database welcome.json', id)
		break
	 case prefix+'welcome':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used within the group!', id)
            if (!isGroupAdmins) return aruga.reply(from, 'This command can only be used by Group Admins!', id)
            if (args.length === 0) return aruga.reply(from, 'on or off', id)
            if (args[0].toLowerCase() === 'on') {
                welkom.push(chat.id)
                fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(welkom))
                aruga.reply(from, 'The welcome feature has been successfully activated in this group!', id)
            } else if (args[0].toLowerCase() === 'off') {
				var thisgc = welkom.indexOf(groupId)
                welkom.splice(thisgc, 1)
                fs.writeFileSync('./lib/database/welcome.json', JSON.stringify(welkom))
                aruga.reply(from, 'The welcome feature has been successfully deactivated in this group!', id)
            } else {
                aruga.reply(from, 'Enable or Disable!', id)
            }
            break
        case prefix+'ban':
            if (!isOwnerB) return aruga.reply(from, 'This command is for Owner bot only!', id)
			var qmban = quotedMsgObj.sender.id
	    try {
                banned.push(qmban)
                fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
                aruga.reply(from, 'Got ot BAN! huehuehue...', id)
            } catch {
		aruga.reply(from, 'Sorry, there was an error when you banned a member', id)
		}
		break
	case prefix+'unban':
	    case 'prefix+odelprem':
            var qmban2 = quotedMsgObj.sender.id
            if (!isOwnerB) return aruga.reply(from, 'This feature can only be used by Owner Bot!', id)
            try {
                let xnxx = banned.indexOf(qmban2)
                banned.splice(xnxx,1)
                fs.writeFileSync('./settings/banned.json', JSON.stringify(banned))
                aruga.reply(from, 'Unbanned now...', id)
            } catch {
                aruga.reply(from, 'Sorry, there was an error when you banned a member!', id)
            } 
            break
            case prefix+'delprem':
                if (!isOwnerB) return aruga.reply(from, 'This command can only be used by the Bot owner!', id)
            if (args.length == 0) return aruga.reply(from, `To delete someone to become a regular member`, id)
            let prsl = prem.indexOf(args[0]+'@c.us')
            prem.splice(prsl, 1)
            fs.writeFileSync('./lib/database/prem.json', JSON.stringify(prem))
            aruga.reply(from, 'Success delete prem member', id)
            break
            case prefix+'google':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                const googleQuery = body.slice(8)
                if(googleQuery == undefined || googleQuery == ' ') return aruga.reply(from, `*Search result : ${googleQuery}* not found`, id)
                google({ 'query': googleQuery }).then(results => {
                let vars = `_*Search result : ${googleQuery}*_\n`
                for (let i = 0; i < results.length; i++) {
                    vars +=  `\n═════════════════\n\n*Title* : ${results[i].title}\n\n*Discription* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
                }
                    aruga.reply(from, vars, id);
					limitAdd(serial)
                }).catch(e => {
                    console.log(e)
                    aruga.sendText(ownerNumber, 'Google Error : ' + e);
                })
                break
				
				case prefix+'kiss':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				const kisses = kissgifs[Math.floor(Math.random() * (kissgifs.length))]
				aruga.sendVideoAsGif(from, kisses, 'kiss.mp4', `@${sender.id.replace('@c.us','')} kissed @${qmid2.replace('@c.us','')}`, id)
				limitAdd(serial)
				}
				else {
				const kisss = body.slice(6)
				const kisses = kissgifs[Math.floor(Math.random() * (kissgifs.length))]
				aruga.sendVideoAsGif(from, kisses, 'kiss.mp4', `@${sender.id.replace('@c.us','')} kissed ${body.slice(6)}`, id)
				limitAdd(serial)}
				break
				case prefix+'wink':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				const winkess = winkk[Math.floor(Math.random() * (winkk.length))]
				aruga.sendVideoAsGif(from, winkess, 'wink.mp4', `@${sender.id.replace('@c.us','')} winked @${qmid2.replace('@c.us','')}`, id)
				limitAdd(serial)
				}
				else {
				const winkss = body.slice(6)
				const winkess = winkk[Math.floor(Math.random() * (winkk.length))]
				aruga.sendVideoAsGif(from, winkess, 'wink.mp4', `@${sender.id.replace('@c.us','')} winked ${body.slice(6)}`, id)
				limitAdd(serial)}
				break
				case prefix+'slap':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
			if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				const slapess = slapp[Math.floor(Math.random() * (slapp.length))]
				aruga.sendVideoAsGif(from, slapess, 'slap.mp4', `@${sender.id.replace('@c.us','')} slapped @${qmid2.replace('@c.us','')}`, id)
				limitAdd(serial)
				}
			else {
				const slapss = body.slice(6)
				const slapess = slapp[Math.floor(Math.random() * (slapp.length))]
				aruga.sendVideoAsGif(from, slapess, 'slap.mp4', `@${sender.id.replace('@c.us','')} slapped ${body.slice(6)}`, id)
				limitAdd(serial)
				}
				break
				case prefix+'zee5':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)	
			    const Zee55 = Zee5[Math.floor(Math.random() * (Zee5.length))]
			    await aruga.sendText(from, `*${Zee55}* \n\nDont Change the Password`, id)
                break
			
				case prefix+'hug':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				const hugess = hugg[Math.floor(Math.random() * (hugg.length))]
				aruga.sendVideoAsGif(from, hugess, 'hug.mp4', `@${sender.id.replace('@c.us','')} hugged @${qmid2.replace('@c.us','')}`, id)
				limitAdd(serial)
				}
				else {
				const hugss = body.slice(5)
				const hugess = hugg[Math.floor(Math.random() * (hugg.length))]
				aruga.sendVideoAsGif(from, hugess, 'hug.mp4', `@${sender.id.replace('@c.us','')} hugged ${body.slice(5)}`, id)
				limitAdd(serial)}
				break
				case prefix+'holdhand':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				const handess = handd[Math.floor(Math.random() * (handd.length))]
				aruga.sendVideoAsGif(from, handess, 'hand.mp4', `@${sender.id.replace('@c.us','')} held hands with @${qmid2.replace('@c.us','')}`, id)
				limitAdd(serial)}
			else {
				const handss = body.slice(10)
				const handess = handd[Math.floor(Math.random() * (handd.length))]
				aruga.sendVideoAsGif(from, handess, 'hand.mp4', `@${sender.id.replace('@c.us','')} held hands with ${body.slice(10)}`, id)
			limitAdd(serial)}
				break
				case prefix+'spank':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				const spankess = spankk[Math.floor(Math.random() * (spankk.length))]
				aruga.sendVideoAsGif(from, spankess, 'spank.mp4', `@${sender.id.replace('@c.us','')} spanked @${qmid2.replace('@c.us','')}`, id)
				limitAdd(serial)}
			else {
				const spankss = body.slice(7)
				const spankess = spankk[Math.floor(Math.random() * (spankk.length))]
				aruga.sendVideoAsGif(from, spankess, 'spank.mp4', `@${sender.id.replace('@c.us','')} spanked ${body.slice(7)}`, id)
			limitAdd(serial)}
				break
				case prefix+'middlef':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				const midess = fingerr[Math.floor(Math.random() * (fingerr.length))]
				aruga.sendVideoAsGif(from, midess, 'mid.mp4', `@${sender.id.replace('@c.us','')} says 🖕you @${qmid2.replace('@c.us','')}`, id)
				limitAdd(serial)}
			else {
				const midss = body.slice(9)
				const midess = fingerr[Math.floor(Math.random() * (fingerr.length))]
				aruga.sendVideoAsGif(from, midess, 'mid.mp4', `@${sender.id.replace('@c.us','')} says 🖕you ${body.slice(9)}`, id)
			limitAdd(serial)}
				break
				case prefix+'kill':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				const killess = killl[Math.floor(Math.random() * (killl.length))]
				aruga.sendVideoAsGif(from, killess, 'mid.mp4', `@${sender.id.replace('@c.us','')} killed @${qmid2.replace('@c.us','')}`, id)
				limitAdd(serial)}
			else {
				const killss = body.slice(6)
				const killess = killl[Math.floor(Math.random() * (killl.length))]
				aruga.sendVideoAsGif(from, killess, 'mid.mp4', `@${sender.id.replace('@c.us','')} killed ${body.slice(6)}`, id)
			limitAdd(serial)}
				break
				case prefix+'kick':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				const kickess = kickk[Math.floor(Math.random() * (kickk.length))]
				aruga.sendVideoAsGif(from, kickess, 'mid.mp4', `@${sender.id.replace('@c.us','')} kicked @${qmid2.replace('@c.us','')}`, id)
				limitAdd(serial)}
			else {
				const kickss = body.slice(6)
				const kickess = kickk[Math.floor(Math.random() * (kickk.length))]
				aruga.sendVideoAsGif(from, kickess, 'mid.mp4', `@${sender.id.replace('@c.us','')} kicked ${body.slice(6)}`, id)
			limitAdd(serial)}
				break
             
			 
			case prefix+'random':
                if (args.length == 0) return aruga.reply(from, `Send orders ${prefix}random query\n\n*Available Queries:-*\nhug, kiss, pat, cuddle, slap, poke, feed, tickle, baka, neko, cry, lick, smug, bully, bonk, yeet, blush, handhold, highfive, smile, wave, nom, bite, glomp, kill, kick, happy, wink, dance, cringe`, id)
                if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				if (isGroupMsg) {
                    await aruga.reply(from, mess.wait, id)
                    try {
                        if (args[0] === 'hug') {
                                    axios.get(`https://api.waifu.pics/sfw/hug `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending hug gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'kiss') {
                                    axios.get(`https://api.waifu.pics/sfw/kiss `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending kiss gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'pat') {
                                    axios.get(`https://api.waifu.pics/sfw/pat `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending pat gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'cuddle') {
                                    axios.get(`https://api.waifu.pics/sfw/cuddle `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending cuddle gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'slap') {
                                    axios.get(`https://api.waifu.pics/sfw/slap `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending slap gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'poke') {
                                    axios.get(`https://api.waifu.pics/sfw/poke `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending poke gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'feed') {
                                    axios.get(`https://nekos.life/api/v2/img/feed `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending feed gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'tickle') {
                                    axios.get(`https://nekos.life/api/v2/img/tickle `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending tickle gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'baka') {
                                    axios.get(`https://nekos.life/api/v2/img/baka `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending baka gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'neko') {
                                    axios.get(`https://nekos.life/api/v2/img/neko `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending neko gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'cry') {
                                    axios.get(`https://api.waifu.pics/sfw/cry `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending cry gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'lick') {
                                    axios.get(`https://api.waifu.pics/sfw/lick `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending lick gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'smug') {
                                    axios.get(`https://api.waifu.pics/sfw/smug `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending smug gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'bully') {
                                    axios.get(`https://api.waifu.pics/sfw/bully `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending bully gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'bonk') {
                                    axios.get(`https://api.waifu.pics/sfw/bonk `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending bonk gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'yeet') {
                                    axios.get(`https://api.waifu.pics/sfw/yeet `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending yeet gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'blush') {
                                    axios.get(`https://api.waifu.pics/sfw/blush `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending blush gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'smile') {
                                    axios.get(`https://api.waifu.pics/sfw/smile `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending smile gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'wave') {
                                    axios.get(`https://api.waifu.pics/sfw/wave `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending wave gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'highfive') {
                                    axios.get(`https://api.waifu.pics/sfw/highfive `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending highfive gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'handhold') {
                                    axios.get(`https://api.waifu.pics/sfw/handhold `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending handhold gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'nom') {
                                    axios.get(`https://api.waifu.pics/sfw/nom `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending nom gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'bite') {
                                    axios.get(`https://api.waifu.pics/sfw/bite `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending bite gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'glomp') {
                                    axios.get(`https://api.waifu.pics/sfw/glomp `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending glomp gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'kill') {
                                    axios.get(`https://api.waifu.pics/sfw/kill `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending kill gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'kick') {
                                    axios.get(`https://api.waifu.pics/sfw/kick `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending kick gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'happy') {
                                    axios.get(`https://api.waifu.pics/sfw/happy `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending happy gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'wink') {
                                    axios.get(`https://api.waifu.pics/sfw/wink `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending wink gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'dance') {
                                    axios.get(`https://api.waifu.pics/sfw/dance `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending dance gif!'))
									limitAdd(serial)
									})
                                })
                        } else if (args[0] === 'cringe') {
                                    axios.get(`https://api.waifu.pics/sfw/cringe `).then(res => {
									axios.get(`http://zekais-api.herokuapp.com/webptomp4?url=${res.data.url}&apikey=U7jLmHKe `).then(tes => {
                                    aruga.sendVideoAsGif(from, tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending cringe gif!'))
									limitAdd(serial)
									})
                                })
                        }
						else {
                            await aruga.reply(from, 'Tag not found.', id)
                        }
                    } catch (err) {
                        console.error(err)
                        await aruga.reply(from, 'Error', id)
                    }
                } 
				break
				
				
				
				
				
				
				case prefix+'qqqq':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				axios.get(`https://api.waifu.pics/sfw/kiss `).then(tes => {
				const filee = 'res.data.url';
// Path at which image will get downloaded
				const fileePath = `./lib/media/gif`;
  
fs.writeFile(`${sender.id.replace('@c.us', '')}${lvpc}.gif`, downloadd(filee,fileePath))
.then(() => {
    console.log('Download Completed');
				})})
				break
				
				
				
				
				
				
				
				
				
				
				/*
				case prefix+'hug':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				axios.get(`https://api.waifu.pics/sfw/hug `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} hugged @${qmid2.replace('@c.us','')}`,  id)})
				limitAdd(serial)})}
			else {
				axios.get(`https://api.waifu.pics/sfw/hug `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} hugged ${body.slice(5)}`,  id)})
			limitAdd(serial)})}
				break
				
				case prefix+'kiss':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				axios.get(`https://api.waifu.pics/sfw/kiss `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} kissed @${qmid2.replace('@c.us','')}`,  id)})
				limitAdd(serial)})}
			else {
				axios.get(`https://api.waifu.pics/sfw/kiss `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} kissed ${body.slice(6)}`,  id)})
			limitAdd(serial)})}
				break
				
				case prefix+'pat':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				axios.get(`https://api.waifu.pics/sfw/pat `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} patting @${qmid2.replace('@c.us','')}`,  id)})
				limitAdd(serial)})}
			else {
				axios.get(`https://api.waifu.pics/sfw/pat `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} patting ${body.slice(5)}`,  id)})
			limitAdd(serial)})}
				break
				
				case prefix+'cuddle':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				axios.get(`https://api.waifu.pics/sfw/cuddle `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} cuddling with @${qmid2.replace('@c.us','')}`,  id)})
				limitAdd(serial)})}
			else {
				axios.get(`https://api.waifu.pics/sfw/cuddle `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} cuddling with ${body.slice(8)}`,  id)})
			limitAdd(serial)})}
				break
				
				case prefix+'slap':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				axios.get(`https://api.waifu.pics/sfw/slap `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} slapped @${qmid2.replace('@c.us','')}`,  id)})
				limitAdd(serial)})}
			else {
				axios.get(`https://api.waifu.pics/sfw/slap `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} slapped ${body.slice(6)}`,  id)})
			limitAdd(serial)})}
				break
				
				case prefix+'poke':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				axios.get(`https://api.waifu.pics/sfw/poke `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} poking @${qmid2.replace('@c.us','')}`,  id)})
				limitAdd(serial)})}
			else {
				axios.get(`https://api.waifu.pics/sfw/poke `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} poking ${body.slice(5)}`,  id)})
			limitAdd(serial)})}
				break
				
				case prefix+'tickle':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				axios.get(`https://nekos.life/api/v2/img/tickle `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} tickling @${qmid2.replace('@c.us','')}`,  id)})
				limitAdd(serial)})}
			else {
				axios.get(`https://nekos.life/api/v2/img/tickle `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} tickling ${body.slice(8)}`,  id)})
			limitAdd(serial)})}
				break
				
				case prefix+'wave':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				axios.get(`https://api.waifu.pics/sfw/wave `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} waved at @${qmid2.replace('@c.us','')}`,  id)})
				limitAdd(serial)})}
			else {
				axios.get(`https://api.waifu.pics/sfw/wave `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} waved at ${body.slice(6)}`,  id)})
			limitAdd(serial)})}
				break
				
				case prefix+'bully':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				axios.get(`https://api.waifu.pics/sfw/bully `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} bullying @${qmid2.replace('@c.us','')}`,  id)})
				limitAdd(serial)})}
			else {
				axios.get(`https://api.waifu.pics/sfw/bully `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} bullying ${body.slice(7)}`,  id)})
			limitAdd(serial)})}
				break
				
				case prefix+'bonk':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				axios.get(`https://api.waifu.pics/sfw/bonk `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} bonked @${qmid2.replace('@c.us','')}`,  id)})
				limitAdd(serial)})}
			else {
				axios.get(`https://api.waifu.pics/sfw/bonk `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} bonked ${body.slice(6)}`,  id)})
			limitAdd(serial)})}
				break
				
				case prefix+'yeet':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				axios.get(`https://api.waifu.pics/sfw/yeet `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} yeeted @${qmid2.replace('@c.us','')}`,  id)})
				limitAdd(serial)})}
			else {
				axios.get(`https://api.waifu.pics/sfw/yeet `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} yeeted ${body.slice(6)}`,  id)})
			limitAdd(serial)})}
				break
				
				case prefix+'highfive':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				axios.get(`https://api.waifu.pics/sfw/highfive `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} highfive @${qmid2.replace('@c.us','')}`,  id)})
				limitAdd(serial)})}
			else {
				axios.get(`https://api.waifu.pics/sfw/highfive `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} highfive ${body.slice(10)}`,  id)})
			limitAdd(serial)})}
				break
				
				case prefix+'handhold':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				axios.get(`https://api.waifu.pics/sfw/handhold `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} held hands with @${qmid2.replace('@c.us','')}`,  id)})
				limitAdd(serial)})}
			else {
				axios.get(`https://api.waifu.pics/sfw/handhold `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} held hands with ${body.slice(10)}`,  id)})
			limitAdd(serial)})}
				break
				
				case prefix+'kill':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				axios.get(`https://api.waifu.pics/sfw/kill `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from, `https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`, 'randm.gif', `@${sender.id.replace('@c.us','')} killed @${qmid2.replace('@c.us','')}`,  id)})
				limitAdd(serial)})}
			else {
				axios.get(`https://api.waifu.pics/sfw/kill `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} killed ${body.slice(6)}`,  id)})
			limitAdd(serial)})}
				break
				
				case prefix+'kick':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				axios.get(`https://api.waifu.pics/sfw/kick `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} kicked @${qmid2.replace('@c.us','')}`,  id)})
				limitAdd(serial)})}
			else {
				axios.get(`https://api.waifu.pics/sfw/kick `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} kicked ${body.slice(6)}`,  id)})
			limitAdd(serial)})}
				break
				
				case prefix+'wink':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				axios.get(`https://api.waifu.pics/sfw/wink `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} winked at @${qmid2.replace('@c.us','')}`,  id)})
				limitAdd(serial)})}
			else {
				axios.get(`https://api.waifu.pics/sfw/wink `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} winked at ${body.slice(5)}`,  id)})
			limitAdd(serial)})}
				break
				
				case prefix+'spank':
				if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (quotedMsg){
				var qmid2 = quotedMsgObj.sender.id
				axios.get(`https://nekos.life/api/v2/img/spank `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} spanked @${qmid2.replace('@c.us','')}`,  id)})
				limitAdd(serial)})}
			else {
				axios.get(`https://nekos.life/api/v2/img/spank `).then(res => {
				axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', `@${sender.id.replace('@c.us','')} spanked ${body.slice(7)}`,  id)})
				limitAdd(serial)})}
				break
				
				*/
				
				case prefix+'random0':
                if (args.length == 0) return aruga.reply(from, `Send orders ${prefix}random query\n\n*Available Queries:-*\nhug, kiss, pat, cuddle, slap, poke, feed, tickle, baka, neko, cry, lick, smug, bully, bonk, yeet, blush, handhold, highfive, smile, wave, nom, bite, glomp, kill, kick, happy, wink, dance, cringe`, id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				if (isGroupMsg) {
                    await aruga.reply(from, mess.wait, id)
                    try {
                        if (args[0] === 'hug') {
                                    axios.get(`https://api.waifu.pics/sfw/hug `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending hug gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'kiss') {
                                    axios.get(`https://api.waifu.pics/sfw/kiss `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending kiss gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'pat') {
                                    axios.get(`https://api.waifu.pics/sfw/pat `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending pat gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'cuddle') {
                                    axios.get(`https://api.waifu.pics/sfw/cuddle `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending cuddle gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'slap') {
                                    axios.get(`https://api.waifu.pics/sfw/slap `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending slap gif!'))
									limitAdd(serial)
									})})
                                
						} else if (args[0] === 'spank') {
                                    axios.get(`https://nekos.life/api/v2/img/spank `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending slap gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'poke') {
                                    axios.get(`https://api.waifu.pics/sfw/poke `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending poke gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'feed') {
                                    axios.get(`https://nekos.life/api/v2/img/feed `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending feed gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'tickle') {
                                    axios.get(`https://nekos.life/api/v2/img/tickle `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending tickle gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'baka') {
                                    axios.get(`https://nekos.life/api/v2/img/baka `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending baka gif!'))
									limitAdd(serial)
									})})
      
                        } else if (args[0] === 'cry') {
                                    axios.get(`https://api.waifu.pics/sfw/cry `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending cry gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'lick') {
                                    axios.get(`https://api.waifu.pics/sfw/lick `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending lick gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'smug') {
                                    axios.get(`https://api.waifu.pics/sfw/smug `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending smug gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'bully') {
                                    axios.get(`https://api.waifu.pics/sfw/bully `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending bully gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'bonk') {
                                    axios.get(`https://api.waifu.pics/sfw/bonk `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending bonk gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'yeet') {
                                    axios.get(`https://api.waifu.pics/sfw/yeet `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending yeet gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'blush') {
                                    axios.get(`https://api.waifu.pics/sfw/blush `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending blush gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'smile') {
                                    axios.get(`https://api.waifu.pics/sfw/smile `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending smile gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'wave') {
                                    axios.get(`https://api.waifu.pics/sfw/wave `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending wave gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'highfive') {
                                    axios.get(`https://api.waifu.pics/sfw/highfive `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending highfive gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'handhold') {
                                    axios.get(`https://api.waifu.pics/sfw/handhold `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending handhold gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'nom') {
                                    axios.get(`https://api.waifu.pics/sfw/nom `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending nom gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'bite') {
                                    axios.get(`https://api.waifu.pics/sfw/bite `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending bite gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'glomp') {
                                    axios.get(`https://api.waifu.pics/sfw/glomp `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending glomp gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'kill') {
                                    axios.get(`https://api.waifu.pics/sfw/kill `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending kill gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'kick') {
                                    axios.get(`https://api.waifu.pics/sfw/kick `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending kick gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'happy') {
                                    axios.get(`https://api.waifu.pics/sfw/happy `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending happy gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'wink') {
                                    axios.get(`https://api.waifu.pics/sfw/wink `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending wink gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'dance') {
                                    axios.get(`https://api.waifu.pics/sfw/dance `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending dance gif!'))
									limitAdd(serial)
									})})
                                
                        } else if (args[0] === 'cringe') {
                                    axios.get(`https://api.waifu.pics/sfw/cringe `).then(res => {
									axios.get(`https://hardianto-chan.herokuapp.com/api/tools/webptomp4?url=${res.data.url}&apikey=hardianto`).then(tes => {
                                    aruga.sendVideoAsGif(from,  tes.data.result, 'randm.gif', '', id)
                                        .then(() => console.log('Success sending dance gif!'))
									limitAdd(serial)
									})})
                                
                        } else {
                            await aruga.reply(from, 'Tag not found.', id)
                        }
                    } catch (err) {
                        console.error(err)
                        await aruga.reply(from, 'Error!', id)
                    }
                }
            break
			case prefix+'randomcry':
            if (!isGroupMsg) return aruga.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            if (isLimit(serial)) return aruga.reply(from, `Maaf ${pushname}, Kuota Limit Kamu Sudah Habis, Ketik ${prefix}limit Untuk Mengecek Kuota Limit Kamu`, id)
            const scry = await axios.get('https://tobz-api.herokuapp.com/api/cry?apikey=hJaKEXHQgBpDMZ1zMKzr')
            const rcry = scry.data
            
			aruga.sendStickerfromUrl(from, rcry.result)
            await limitAdd(serial)
            break
		
		case prefix+'trapnime':
		if (!isGroupMsg) return aruga.reply(from, `This feature can only be used in groups`, id)
			//if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
					   if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
			aruga.reply(from, mess.wait, id)
			axios.get('https://nekos.life/api/v2/img/trap').then(res => {
			aruga.sendFileFromUrl(from, res.data.url, 'img.jpg', '', id)
			limitAdd(serial)
			})
			break
		
		case prefix+'randomhentai':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://meme-api.herokuapp.com/gimme/hentai`).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ',`${res.data.title}`, id)
			limitAdd(serial)
            })
            break
			case prefix+'nsfwneko':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://nekos.life/api/v2/img/lewd `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ','Nyaa~~', id)
			limitAdd(serial)
            })
            break
			case prefix+'nsfwneko2':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://api.waifu.pics/nsfw/neko `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ','Nyaa~~', id)
			limitAdd(serial)
            })
            break
			case prefix+'nsfwneko3':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/nsfw/nsfwneko?apikey=1QM9kTIM1WUkJ57`, ' ','Nyaa~~', id)
			limitAdd(serial)
            break
			case prefix+'nsfwavatar':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/nsfw/nsfwavatar?apikey=1QM9kTIM1WUkJ57`, ' ','Nyaa~~', id)
			limitAdd(serial)
            break
			case prefix+'nsfwyuri':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/nsfw/nsfwyuri?apikey=1QM9kTIM1WUkJ57`, ' ','', id)
			limitAdd(serial)
            break
			case prefix+'tits':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/nsfw/nsfwtits?apikey=1QM9kTIM1WUkJ57`, ' ','', id)
			limitAdd(serial)
            break
			case prefix+'nsfwsolo':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/nsfw/nsfwgirlsolo?apikey=1QM9kTIM1WUkJ57`, ' ','', id)
			limitAdd(serial)
            break
			case prefix+'pussyart':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/nsfw/nsfwpussyart?apikey=1QM9kTIM1WUkJ57`, ' ','', id)
			limitAdd(serial)
            break
			case prefix+'nsfwkemonomimi':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/nsfw/nsfwkemonomimi?apikey=1QM9kTIM1WUkJ57`, ' ','', id)
			limitAdd(serial)
            break
			case prefix+'nsfwkitsune':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/nsfw/nsfwkitsune?apikey=1QM9kTIM1WUkJ57`, ' ','', id)
			limitAdd(serial)
            break
			case prefix+'nsfwketa':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/nsfw/nsfwketa?apikey=1QM9kTIM1WUkJ57`, ' ','', id)
			limitAdd(serial)
            break
			case prefix+'nsfwfemdom':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/nsfw/nsfwfemdom?apikey=1QM9kTIM1WUkJ57`, ' ','', id)
			limitAdd(serial)
            break
			case prefix+'nsfwerokitsune':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/nsfw/nsfwerokitsune?apikey=1QM9kTIM1WUkJ57`, ' ','', id)
			limitAdd(serial)
            break
			case prefix+'nsfweroyuri':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/nsfw/nsfweroyuri?apikey=1QM9kTIM1WUkJ57`, ' ','', id)
			limitAdd(serial)
            break
			case prefix+'nsfwcumart':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/nsfw/nsfwcumarts?apikey=1QM9kTIM1WUkJ57`, ' ','', id)
			limitAdd(serial)
            break
			case prefix+'nsfwbj2':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            aruga.sendFileFromUrl(from, `https://api.dapuhy.ga/api/nsfw/nsfwblowjob?apikey=1QM9kTIM1WUkJ57`, ' ','', id)
			limitAdd(serial)
            break
			case prefix+'nsfwwaifu':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://api.waifu.pics/nsfw/waifu `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ','', id)
			limitAdd(serial)
            })
            break
			case prefix+'nsfwbj':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://nekos.life/api/v2/img/blowjob `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ','', id)
			limitAdd(serial)
            })
            break
			case prefix+'booty':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://meme-api.herokuapp.com/gimme/animebooty `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ','jiggle jiggle~~~~', id)
			limitAdd(serial)
            })
            break
			case prefix+'glasses':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://akaneko-api.herokuapp.com/api/glasses `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ','', id)
			limitAdd(serial)
            })
            break
			case prefix+'school':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://akaneko-api.herokuapp.com/api/school `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ','', id)
			limitAdd(serial)
            })
            break
			case prefix+'maid':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://akaneko-api.herokuapp.com/api/maid `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ','', id)
			limitAdd(serial)
            })
            break
			case prefix+'panties':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://akaneko-api.herokuapp.com/api/panties `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ','', id)
			limitAdd(serial)
            })
            break
			case prefix+'wallnsfw':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://akaneko-api.herokuapp.com/api/nsfwwallpapers `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ','', id)
			limitAdd(serial)
            })
            break
			case prefix+'thighs':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://meme-api.herokuapp.com/gimme/thighdeology `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ',`${res.data.title}`, id)
			limitAdd(serial)
            })
            break
			case prefix+'selfie':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://meme-api.herokuapp.com/gimme/waifusgonewild `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ',`${res.data.title}`, id)
			limitAdd(serial)
            })
            break
			case prefix+'armpits':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://meme-api.herokuapp.com/gimme/animearmpits `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ',' ', id)
			limitAdd(serial)
            })
            break
			case prefix+'feets':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://akaneko-api.herokuapp.com/api/feet `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ',' ', id)
			limitAdd(serial)
            })
            break
			case prefix+'sideoppai':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://meme-api.herokuapp.com/gimme/sideoppai `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ',' ', id)
			limitAdd(serial)
            })
            break
			case prefix+'nsfwdva':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				   if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://meme-api.herokuapp.com/gimme/dvansfw `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ',' ', id)
			limitAdd(serial)
            })
            break
			case prefix+'ahegao':  
				if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)            
			const ahegao = fs.readFileSync('./lib/ahegao.json')
            const ahegaoJson = JSON.parse(ahegao)
            const ahegaoIndex = Math.floor(Math.random() * ahegaoJson.length)
            const ahegaoKey = ahegaoJson[ahegaoIndex]
            aruga.sendFileFromUrl(from, ahegaoKey.image, 'ahegao.jpg','', id)
			limitAdd(serial)
            break
			case prefix+'yuri':
        if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
            const yurichan = fs.readFileSync('./lib/yurichan.json')
            const yurichanJson = JSON.parse(yurichan)
            const yurichanIndex = Math.floor(Math.random() * yurichanJson.length)
            const yurichanKey = yurichanJson[yurichanIndex]
            aruga.sendFileFromUrl(from, yurichanKey.image, 'yurichan.jpg','', id)
			limitAdd(serial)
            break
			case prefix+'takagi': 
			if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
            const takagi = fs.readFileSync('./lib/takagi.json')
            const takagiJson = JSON.parse(takagi)
            const takagiIndex = Math.floor(Math.random() * takagiJson.length)
            const takagiKey = takagiJson[takagiIndex]
            aruga.sendFileFromUrl(from, takagiKey.image, 'takagi.jpg','', id)
			limitAdd(serial)
            break
			
			case prefix+'milf':  
				if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
            const milf = fs.readFileSync('./lib/milf.json')
            const milfJson = JSON.parse(milf)
            const milfIndex = Math.floor(Math.random() * milfJson.length)
            const milfKey = milfJson[milfIndex]
            aruga.sendFileFromUrl(from, milfKey.image, 'milf.jpg','', id)
			limitAdd(serial)
            break
			case prefix+'mecha':
				if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
            const mecha = fs.readFileSync('./lib/mecha.json')
            const mechaJson = JSON.parse(mecha)
            const mechaIndex = Math.floor(Math.random() * mechaJson.length)
            const mechaKey = mechaJson[mechaIndex]
            aruga.sendFileFromUrl(from, mechaKey.image, 'mecha.jpg', mechaKey.teks)
			limitAdd(serial)
            break
			case prefix+'loli': 
			if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
            const loli = fs.readFileSync('./lib/loli.json')
            const loliJson = JSON.parse(loli)
            const loliIndex = Math.floor(Math.random() * loliJson.length)
            const loliKey = loliJson[loliIndex]
            aruga.sendFileFromUrl(from, loliKey.image, 'loli.jpg','', id)
			limitAdd(serial)
            break
			case prefix+'lewd':
				if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
				if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)  
            const lewd = fs.readFileSync('./lib/lewd.json') 
            const lewdJson = JSON.parse(lewd)
            const lewdIndex = Math.floor(Math.random() * lewdJson.length)
            const lewdKey = lewdJson[lewdIndex]
            aruga.sendFileFromUrl(from, lewdKey.image, 'Lewd.jpg','', id)
			limitAdd(serial)
            break
			case prefix+'husbu':
			if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
            const diti = fs.readFileSync('./lib/husbu.json')
            const ditiJsin = JSON.parse(diti)
            const rindIndix = Math.floor(Math.random() * ditiJsin.length)
            const rindKiy = ditiJsin[rindIndix]
            aruga.sendFileFromUrl(from, rindKiy.image, 'Husbu.jpg','', id)
			limitAdd(serial)
            break
			case prefix+'cosplay': 
				if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
				if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)  
			const cosplay = fs.readFileSync('./lib/cosplay.json')
            const cosplayJson = JSON.parse(cosplay)
            const cosplayIndex = Math.floor(Math.random() * cosplayJson.length)
            const cosplayKey = cosplayJson[cosplayIndex]
            aruga.sendFileFromUrl(from, cosplayKey.image, 'cosplay.jpg','', id)
			limitAdd(serial)
            break
			case prefix+'quote': 
            const takagii = fs.readFileSync('./lib/quote2.json')
            const takagiiJson = JSON.parse(takagii)
            const takagiiIndex = Math.floor(Math.random() * takagiiJson.length)
            const takagiiKey = takagiiJson[takagiiIndex]
			aruga.reply(from, `Quote:- *${takagiiKey.quote}*\nBy:- *${takagiiKey.by}*`, id)
			limitAdd(serial)
            break
			case prefix+'nudes':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
						aruga.sendText(from, mess.wait);
            const tag = ['realgirls','gonewild','petitegonewild','nsfw_snapchat','legalteens','holdthemoan','BustyPetite','adorableporn','AsiansGoneWild','collegesluts','Amateur','ass','OnOff','pussy','juicyasians','GodPussy','palegirls','AsianHotties','18_19','thick','TinyTits','Stacked','bodyperfection','rearpussy','ginger','redheads','fitgirls','theratio','CuteLittleButts','boobs','altgonewild','Gonewild18','xsmallgirls','suicidegirls','latinas','simps','Nude_Selfie','GoneMild','HighResNSFW','Nudes','SnowWhites','GroupOfNudeGirls','Slut','FitNakedGirls','PetiteGirls','TwitchGoneWild','classysexy','youngporn','AdultNeeds','Just18','SexyButNotPorn','JustHotWomen','sexygirls','booty','funsized','RealPublicNudity']
			const randTag = tag[Math.floor(Math.random() * tag.length)]
			console.log(`Searching lewd from ${randTag} subreddit...`)
            axios.get(`https://meme-api.herokuapp.com/gimme/${randTag} `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ', `${res.data.title}` , id)
			limitAdd(serial)
            })
            break
			case prefix+'petite':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
            aruga.sendText(from, mess.wait);
			const tagg = ['petitegonewild','bustypetite','tinytits','cutelittlebutts','xsmallgirls','funsized','bootypetite','petitegirls']
			const randTaag = tagg[Math.floor(Math.random() * tagg.length)]
			console.log(`Searching lewd from ${randTaag} subreddit...`)
            axios.get(`https://meme-api.herokuapp.com/gimme/${randTaag} `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ', `${res.data.title}` , id)
			limitAdd(serial)
            })
            break
			case prefix+'snapchat':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://meme-api.herokuapp.com/gimme/nsfw_snapchat `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ', `${res.data.title}` , id)
			limitAdd(serial)
            })
            break
			case prefix+'rule34':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://meme-api.herokuapp.com/gimme/rule34 `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ', `${res.data.title}` , id)
			limitAdd(serial)
            })
            break
			case prefix+'legalteen':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
            aruga.sendText(from, mess.wait);
			const taag = ['legalteens','18_19','gonewild18','just18']
			const randdTaag = taag[Math.floor(Math.random() * taag.length)]
			console.log(`Searching lewd from ${randdTaag} subreddit...`)
            axios.get(`https://meme-api.herokuapp.com/gimme/${randdTaag} `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ', `${res.data.title}` , id)
			limitAdd(serial)
            })
            break
			case prefix+'nsfwcosplay':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
            aruga.sendText(from, mess.wait);
			const ttag = ['nsfwcosplay','cosplaybutts']
			const randdTaagg = ttag[Math.floor(Math.random() * ttag.length)]
			console.log(`Searching lewd from ${randdTaagg} subreddit...`)
            axios.get(`https://meme-api.herokuapp.com/gimme/${randdTaagg} `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ', `${res.data.title}` , id)
			limitAdd(serial)
            })
            break
			case prefix+'indian':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
            aruga.sendText(from, mess.wait);
			const ttaag = ['indianbabes','indiansgonewild','indianteens']
			const randTTag = ttaag[Math.floor(Math.random() * ttaag.length)]
			console.log(`Searching lewd from ${randTTag} subreddit...`)
            axios.get(`https://meme-api.herokuapp.com/gimme/${randTTag} `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ', `${res.data.title}` , id)
			limitAdd(serial)
            })
            break
			case prefix+'asian':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
				if (!isNsfw) return await aruga.reply(from, '*Turn on NSFW mode please...*', id)
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
            aruga.sendText(from, mess.wait);
			const ttaagg = ['asiansgonewild','juicyasians','asianhotties','realasians','asiannsfw','asiancuties','nsfw_china','nsfw_japan']
			const raanddTaagg = ttaagg[Math.floor(Math.random() * ttaagg.length)]
			console.log(`Searching lewd from ${raanddTaagg} subreddit...`)
            axios.get(`https://meme-api.herokuapp.com/gimme/${raanddTaagg} `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ', `${res.data.title}` , id)
			limitAdd(serial)
            })
            break
			case prefix+'meme':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://meme-api.herokuapp.com/gimme/ `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ', `${res.data.title}` , id)
			limitAdd(serial)
            })
            break
			case prefix+'dankmeme':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://meme-api.herokuapp.com/gimme/dankmemes `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ', `${res.data.title}` , id)
			limitAdd(serial)
            })
            break
			case prefix+'darkjoke':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            axios.get(`https://v2.jokeapi.dev/joke/Dark?type=twopart `).then(res => {
            aruga.sendText(from, `*${res.data.setup}*`,'',``, id)
			setTimeout( () => {aruga.sendText(from, `*"${res.data.delivery}"*`,'',``, id)}, 10000)
			limitAdd(serial)
            })
            break
			case prefix+'joke':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            axios.get(`https://v2.jokeapi.dev/joke/Any?safe-mode?type=twopart `).then(res => {
            aruga.sendText(from, `*${res.data.setup}*`,'',``, id)
			setTimeout( () => {aruga.sendText(from, `*"${res.data.delivery}"*`,'',``, id)}, 10000)
			limitAdd(serial)
            })
            break
			case prefix+'aww':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
            //if (!isPrem) return aruga.reply(from, mess.prem, id)
            aruga.sendText(from, mess.wait);
            axios.get(`https://meme-api.herokuapp.com/gimme/aww `).then(res => {
            aruga.sendFileFromUrl(from, res.data.url, ' ', `${res.data.title}` , id)
			limitAdd(serial)
            })
            break
			
			
			case prefix+'limit':
            var found = false
            const limidat = JSON.parse(fs.readFileSync('./settings/limit.json'))
            for(let lmt of limidat){
                if(lmt.id === pengirim){
                    let limitCounts = limitCount-lmt.limit
                    if(limitCounts <= 0) return aruga.reply(from, `Your request limit has run out. Come back tomorrow..\n*(Daily limit reset at 12:00am IST)*`, id)
                    aruga.reply(from, `The rest of your request limit remains : *${limitCounts}*`, id)
                    found = true
                }
            }
            if (found === false){
                let obj = {id: `${pengirim}`, limit:0};
                limit.push(obj);
                fs.writeFileSync('./settings/limit.json',JSON.stringify(limit, 1));
                aruga.reply(from, `The rest of your request limit remains : *${limitCount}*`, id)
            }
            break
			case prefix+'resetlimit':
                if (!isOwnerBot) return aruga.reply(from, `Bot Owner Only` , id) 
	     {
                limit.splice(chat.id)
                fs.writeFileSync('./settings/limit.json', JSON.stringify(limit))
                await aruga.reply(from, `Already bro` , id)
            }
			case prefix+'reset':
                if (!isOwner) return await aruga.reply(from, `Bot Owner Only` , id)
                const reset = []
                _limit = reset
                console.log('Hang tight, it\'s time to reset usage limits...')
                fs.writeFileSync('./settings/limit.json', JSON.stringify(_limit))
                await aruga.reply(from, 'Success!', id)
                console.log('Success!')
            break
break
case prefix+'setlimit':
					if (args.length < 1) return
					if (!isOwnerBot) return aruga.reply(from, `Bot Owner Only` , id) 
					limitt = args[0]
					aruga.reply(`Limit changed to : ${limitt}`)
					break 
			
            case prefix+'ptl':
			if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                    if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
                    const pptl = ["https://i.pinimg.com/564x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/236x/98/08/1c/98081c4dffde1c89c444db4dc1912d2d.jpg","https://i.pinimg.com/236x/a7/e2/fe/a7e2fee8b0abef9d9ecc8885557a4e91.jpg","https://i.pinimg.com/236x/ee/ae/76/eeae769648dfaa18cac66f1d0be8c160.jpg","https://i.pinimg.com/236x/b2/84/55/b2845599d303a4f8fc4f7d2a576799fa.jpg","https://i.pinimg.com/564x/78/7c/49/787c4924083a9424a900e8f1f4fdf05f.jpg","https://i.pinimg.com/236x/eb/05/dc/eb05dc1c306f69dd43b7cae7cbe03d27.jpg","https://i.pinimg.com/236x/d0/1b/40/d01b40691c68b84489f938b939a13871.jpg","https://i.pinimg.com/236x/31/f3/06/31f3065fa218856d7650e84b000d98ab.jpg","https://i.pinimg.com/236x/4a/e5/06/4ae5061a5c594d3fdf193544697ba081.jpg","https://i.pinimg.com/236x/56/45/dc/5645dc4a4a60ac5b2320ce63c8233d6a.jpg","https://i.pinimg.com/236x/7f/ad/82/7fad82eec0fa64a41728c9868a608e73.jpg","https://i.pinimg.com/236x/ce/f8/aa/cef8aa0c963170540a96406b6e54991c.jpg","https://i.pinimg.com/236x/77/02/34/77023447b040aef001b971e0defc73e3.jpg","https://i.pinimg.com/236x/4a/5c/38/4a5c38d39687f76004a097011ae44c7d.jpg","https://i.pinimg.com/236x/41/72/af/4172af2053e54ec6de5e221e884ab91b.jpg","https://i.pinimg.com/236x/26/63/ef/2663ef4d4ecfc935a6a2b51364f80c2b.jpg","https://i.pinimg.com/236x/2b/cb/48/2bcb487b6d398e8030814c7a6c5a641d.jpg","https://i.pinimg.com/236x/62/da/23/62da234d941080696428e6d4deec6d73.jpg","https://i.pinimg.com/236x/d4/f3/40/d4f340e614cc4f69bf9a31036e3d03c5.jpg","https://i.pinimg.com/236x/d4/97/dd/d497dd29ca202be46111f1d9e62ffa65.jpg","https://i.pinimg.com/564x/52/35/66/523566d43058e26bf23150ac064cfdaa.jpg","https://i.pinimg.com/236x/36/e5/27/36e52782f8d10e4f97ec4dbbc97b7e67.jpg","https://i.pinimg.com/236x/02/a0/33/02a033625cb51e0c878e6df2d8d00643.jpg","https://i.pinimg.com/236x/30/9b/04/309b04d4a498addc6e4dd9d9cdfa57a9.jpg","https://i.pinimg.com/236x/9e/1d/ef/9e1def3b7ce4084b7c64693f15b8bea9.jpg","https://i.pinimg.com/236x/e1/8f/a2/e18fa21af74c28e439f1eb4c60e5858a.jpg","https://i.pinimg.com/236x/22/d9/22/22d9220de8619001fe1b27a2211d477e.jpg","https://i.pinimg.com/236x/af/ac/4d/afac4d11679184f557d9294c2270552d.jpg","https://i.pinimg.com/564x/52/be/c9/52bec924b5bdc0d761cfb1160865b5a1.jpg","https://i.pinimg.com/236x/1a/5a/3c/1a5a3cffd0d936cd4969028668530a15.jpg"]
                    let pep = pptl[Math.floor(Math.random() * pptl.length)]
                    aruga.sendFileFromUrl(from, pep, 'pptl.jpg', 'nihh ngab', id)
					limitAdd(serial)
                    break
			case prefix+'groupicon':
			case prefix+'gcicon':
					if (!isGroupMsg) return aruga.reply(from, `This command can only be used within the group!`, id)
					var groupic = await aruga.getProfilePicFromServer(chat.id)
					if (groupic == undefined) {
						var pfp = 'https://i.redd.it/so6f5cvkswe31.jpg'
					} else {
						var pfp = groupic
					}
					await aruga.sendFileFromUrl(from, pfp, 'group.jpg', '', id)
					break
            case prefix+'groupinfo0' :
            case prefix+'gcinfo0' :
                    if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
                    var totalMem = chat.groupMetadata.participants.length
                    var desc = chat.groupMetadata.desc
                    var groupname = name
                    var timestp = chat.groupMetadata.creation
                    var date = moment(timestp * 1000).format('dddd, DD MMMM YYYY')
                    var timeh = moment(timestp * 1000).format('HH:mm:ss')
                    var ownerwoi = chat.groupMetadata.owner
                    var grplink = antilink.includes(chat.id)
                    var botadmin = isBotGroupAdmins ? 'Admin' : 'Member'
                    var grouppic = await aruga.getProfilePicFromServer(chat.id)
                    if (grouppic == undefined) {
                         var pfp = errorurl
                    } else {
                         var pfp = grouppic 
                    }
                    await aruga.sendFileFromUrl(from, pfp, 'group.png', `*「 GROUP INFO 」*
*➸ Name : ${groupname}*

This group was founded *${date}* *${timeh}* by @${ownerwoi.replace('@c.us','')}


*➸ Members : ${totalMem}*
*➸ Antilink Status : ${grplink ? 'On' : 'Off'}*
*➸ Bot Group Status : ${botadmin}*
*➸ Group Description* 
${desc}
₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋₋
_Desc di update oleh : @${chat.groupMetadata.descOwner.replace('@c.us','')} pada *${moment(chat.groupMetadata.descTime * 1000).format('dddd, DD MMMM YYYY')}* pukul ${moment(chat.groupMetadata.descTime * 1000).format('HH:mm:ss')}_`)

                    break
                    case prefix+'grupbot':
                        const ch = `https://chat.whatsapp.com/HUPrOw9W2wvFG3iy7d8qmb\n\nSkuyy joinn`
                        await aruga.sendLinkWithAutoPreview(from, ch)
                        break
					case prefix+'tiktokaudio':
					if (args.length == 0) return aruga.reply(from, `Fitur untuk mengkonversi Video menjadi Audio!\nSend orders ${prefix}tiktokaudio link tiktok`, id)
					const linktk = body.slice(13)
					aruga.reply(from, mess.wait, id)
					axios.get(`http://docs-jojo.herokuapp.com/api/tiktok_audio?url=${linktk}`)
					.then(async(res) => {
						await aruga.sendFileFromUrl(from, res.data.result, '', '', id)
						.catch(() => {
							aruga.reply(from, 'error', id)
						})
					})
					.catch((err) => {
						console.log(err)
					})
					break
                    
                    case prefix+'screen': {
                        if (!isOwnerB) return await aruga.reply(from, 'Fitur ini hanya dapat digunakan oleh admin bot')
                        const snap = await aruga.getSnapshot()
                        aruga.sendImage(from, snap, 'snapshot.png', 'Session Snapshot')
                    }
                        break
                        case prefix+'listbacot':
                            const bacul = dbcot
                            let bacotanmu = `╔══✪〘 *List Bacot!* 〙✪══\n`
                            for (let i = 0; i < bacul.length; i++) {
                                bacotanmu += '╠➥'
                                bacotanmu += ` ${bacul[i]}\n`
                            }
                            bacotanmu += '╚═〘 *A K E N O  B O T* 〙'
                            await aruga.reply(from, bacotanmu, id)
                            break
                        case prefix+'premlist':
                            const premlist = prem
                            let kuntul =  `╔══✪〘 *Prem Member!* 〙✪══\n╠➥Total Premium user : ${prem.length}\n`
                            for (let i = 0; i < premlist.length; i++) {
                                kuntul += `╠➥`
                                kuntul += `${premlist[i].replace(/@c.us/g, '')}\n`
                            }
                            kuntul += '╚═〘 *A K E N O  B O T* 〙'
                            await aruga.reply(from, kuntul, id)
                            break
						case prefix+'listcecan':
						const ccn = cecann
						let xoxi = `List Foto Cecan\n\n`
						for (let i = 0; i < ccn.length; i++) {
							xoxi += '-'
							xoxi += `${ccn[i]}\n`
						}
						await aruga.reply(from, xoxi, id)
						break
						case prefix+'listcogan00000000000000':
						const cgn = cogann
						let xoxo = `List Foto Cogan\n\n`
						for (let i = 0; i < cgn.length; i++) {
							xoxo += '-'
							xoxo += `${cgn[i]}\n`
						}
						await aruga.reply(from, xoxo, id)
						break
						case prefix+'listleft':
						if (!isOwnerB) return aruga.reply(from, 'This feature can only be used by Owner Bot!', id)
						const lefting = left
						let lefs = `List ID Grup\n\n`
						for (let i = 0; i < lefting.length; i++) {
							lefs += '-'
							lefs += `${lefting[i]}\n`
						}
						await aruga.reply(from, lefs, id)
						break
						case prefix+'listwelcome':
						if (!isOwnerB) return aruga.reply(from, 'This feature can only be used by Owner Bot!', id)
						const wulcum = welkom
						let wels = `List ID Grup\n\n`
						for (let i = 0; i < wulcum.length; i++) {
							wels += '-'
							wels += `${wulcum[i]}\n`
						}
						await aruga.reply(from, wels, id)
						break
						case prefix+'listimg':
							const imagick = listimg
							let kemtull = `╔══✪〘 *List Image!* 〙✪══\n`
							for (let i = 0; i < imagick.length; i++) {
								kemtull += '╠➥'
								kemtull += `${imagick[i]}\n`
							}
							kemtull += '╚═〘 *A K E N O  B O T* 〙'
							await aruga.reply(from, kemtull, id)
							break
						case prefix+'listvn':
							const vnlist = listvn
							let kemtul = `╔══✪〘 *List VN!* 〙✪══\n`
							for (let i = 0; i < vnlist.length; i++) {
								kemtul += '╠➥'
								kemtul += `${vnlist[i]}\n`
							}
							kemtul += '╚═〘 *A K E N O  B O T* 〙'
							await aruga.reply(from, kemtul, id)
							break
						case prefix+'liststiker':
							const stiklist = liststicker
							let kumtul = `╔══✪〘 *List Sticker!* 〙✪══\n`
							for (let i = 0; i < stiklist.length; i++) {
								kumtul += '╠➥'
								kumtul += `${stiklist[i]}\n`
							}
							kumtul += '╚═〘 *A K E N O  B O T* 〙'
							await aruga.reply(from, kumtul, id)
							break
                        case prefix+'saylist':
                            const saylest = dsay
                            let kimtil = `╔══✪〘 *Say List!* 〙✪══\n`
                            for (let i = 0; i < saylest.length; i++) {
                                kimtil += '╠➥'
                                kimtil += `${saylest[i]}\n`
                            }
                            kimtil += '╚═〘 *A K E N O  B O T* 〙'
                            await aruga.sendText(from, kimtil)
                            break
                        case prefix+'addsay':{
                            if (!args.length >= 1) return aruga.reply(from, 'Kalimatnya manaa?', id)
                            const say = body.slice(8)
                                dsay.push(say)
                                fs.writeFileSync('./lib/database/say.json' , JSON.stringify(dsay))
                                aruga.reply(from, `Done add say ke database\nTotal add say : *${dsay.length - 1}* ,` , id)
                        }
                        break
                        case prefix+'addbacot':{
                            if (!args.length >= 1) return aruga.reply(from, 'BACOTAN NYA MANA ANJING?? DASAR BODOH!', id)  
                                const bacot = body.slice(10)
                                dbcot.push(bacot)
                                fs.writeFileSync('./lib/database/bacot.json', JSON.stringify(dbcot))
                                aruga.reply(from, `Sukses menambahkan Kata bacot ke database\nTotal data bacot sekarang : *${dbcot.length - 1}*`, id)
                            }
                            break
                        case prefix+'delbacot':
                                if (!isGroupMsg) return aruga.reply(from, `This command can only be used within the group!`, id)
                                    const delbd = dbcot.indexOf(body.slice(12))
                                    dbcot.splice(delbd, 1)
                                    fs.writeFileSync('./lib/database/bacot.json', JSON.stringify(dbcot))
                                    aruga.reply(from, `Success Menghapus Bacot!`, id)
                                break
                case prefix+'bacot':
                    if(args.length == 1) {
                        const no = args[0]
                        const cekdb = dbcot.length
                        if(cekdb <= no) return await aruga.reply(from, `Total data saat ini hanya sampai *${cekdb - 1}*`, id)
                        const res =  dbcot[Math.floor(Math.random() * (dbcot.length))]
                        aruga.sendreply(from, res, id)
                        } else {
                            const kata = dbcot[Math.floor(Math.random() * (dbcot.length))];
                            aruga.reply(from, kata, id)
                        }
                    break  
                case prefix+'say':
                    if(args.length == 1){
                        const wuh = args[0]
                        const sayur = dsay.length
                        if(sayur <= wuh) return await aruga.reply(from, `Total database saat ini hanya sampe *${sayur - 1}` , id)
                        const lahs = dsay[wuh]
                        aruga.sendText(from, lahs)
                    } else {
                        const kata = dsay[Math.floor(Math.random() * (dsay.length))];
                        aruga.reply(from, kata, id)
                    }
                    break
                    case prefix+'delprem':
                        if (!isOwnerB) return aruga.reply(from, `Perintah ini hanya bisa digunakan oleh Owner Bot`, id)
                        const delprem = prem.indexOf(body.slice(9)+'@c.us')
                        prem.splice(delprem, 1)
                        fs.writeFileSync('./lib/database/prem.json', JSON.stringify(prem))
                        aruga.reply(from, `Success delete premium member`, id)
                        break
                    case prefix+'delsay':
                        if (!isGroupMsg) return aruga.reply(from, `This command can only be used within the group!`, id)
                            const delsay = dsay.indexOf(body.slice(8))
                            dsay.splice(delsay, 1)
                            fs.writeFileSync('./lib/database/say.json', JSON.stringify(dsay))
                            aruga.reply(from, `Success Menghapus Say!`, id)
                        break
                        case prefix+'iplocation':
                            if (args.length == 0) return aruga.reply(from, `Tidak ada ip Address, silahkan masuk ip address anda\nExample: ${prefix}iplocation 180.242.215.107`, id)
                            axios.get(`https://ipapi.co/${body.slice(12)}/json/`)
                            .then(async(res) => {
                                const addr = `• *Ip :* ${res.data.ip}\n• *Ip Version :* ${res.data.version}\n• *Negara :* ${res.data.country_name}\n• *Kode Negara :* ${res.data.country_code}\n• *Ibu Kota :* ${res.data.country_capital}\n• *Wilayah :* ${res.data.region}\n• *Kode Wilayah :* ${res.data.region_code}\n• *Postal :* ${res.data.postal}\n• *Latitude :* ${res.data.latitude}\n• *Longitude :* ${res.data.longitude}\n• *Timezone :* ${res.data.timezone}\n• *Utc Offset :* ${res.data.utc_offset}\n• *Kode Panggilan Negara :* ${res.data.country_calling_code}\n• *Mata Uang :* ${res.data.currency_name}\n• *Kode Mata Uang :* ${res.data.currency}\n• *Bahasa :* ${res.data.languages}\n• *Jumlah Wilayah :* ${res.data.country_area}\n• *Populasi Negara :* ${res.data.country_population}\n• *ASN :* ${res.data.asn}\n• *Provider :* ${res.data.org}`
                                aruga.reply(from, addr, id)
                            })
                            break
                        case prefix+'matauang':
                            const matung = `List Currency : btc, usd, eur, gbp, aud, cad, chf, cny, jpy, sgd, nzd, pkr, hkd, krw, mxn, nok, egp, clp, ngn, brl, rub, uah, thb, pln, inr, eth, xmr, dash, doge, ltc, str, xrp`
                            aruga.reply(from, matung, id)
                            break
                case prefix+'nyenye':
                    if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
                    if (args.length = 0) return aruga.reply(from, `kirim ${prefix}nyenye kalimat\ncontoh: ${prefix}nyenye nisa cantik', id`)
                    const teksnya = body.slice(8)
					const uwoyis = await axios.get(`https://api.i-tech.id/tools/hilih?key=qTOfqt-6mDbIq-8lJHaR-Q09mTR-D6pAtD&kata=${teksnya}`).then(res => {
					const ihih = `${res.data.result}`
                    aruga.reply(from, ihih, id)
                })
                    break
                    case prefix+'convertduit':
                        if (args.length == 0) return aruga.reply(from, `Untuk mengkonversi uang dari negara luar menjadi IDR\nExample: ${prefix}convertduit usd|2000\n\nDan untuk mengecek mata uang bisa gunakan ${prefix}matauang`, id)
                        const duit1 = arg.split('|')[0]
                        const duit2 = arg.split('|')[1]
                        await axios.get('https://api.terhambar.com/r='+duit1+'&bal='+duit2).then(res => {
                            const duitnya = `Konversi mata uang ${res.data.result.currency} dari ${duit2}\n\nBalance Currency : *${res.data.result.balanceCurrency}*\n\nHasil Dirupiahkan : *${res.data.result.resultConvert}*`
                            aruga.reply(from, duitnya, id)
                        })
                        break
                    case prefix+'translate':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                        if (args.length == 0) return aruga.reply(from, `Untuk translate kata gunakan ${prefix}translate [kode bahasa]|Kata kata\n\nExample: ${prefix}translate en|Bagaimana kabarmu?`, id)
                            const suway1 = arg.split('|')[0]
							const suway2 = arg.split('|')[1]
                            await axios.get(`https://amm-api-translate.herokuapp.com/translate?engine=google&text=${suway2}&to=${suway1}`).then(res => {
			    const texttr = res.data.data.result
                            aruga.reply(from, texttr, id)
							limitAdd(serial)
                        })
                        break
                case prefix+'santet': //work
                    if (!isGroupMsg) return aruga.reply(from, 'Sorry, this command can only be used within groups!', id)
                    if (mentionedJidList.length === 0) return aruga.reply(from, 'Tag member yang mau disantet, Example: /santet @wahyu | karena dia gay', id)
                    if (args.length === 1) return aruga.reply(from, 'Masukkan alasan kenapa menyantet dia!!', id)
                        const target = arg.split('|')[0]
                        const alasan = arg.split('|')[1]
                        await aruga.sendTextWithMentions(from, `Santet terkirim ke ${target}, Dengan alasan : ${alasan}`)
                            break
                    case prefix+'doggo':
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                            const list = ["https://cdn.shibe.online/shibes/247d0ac978c9de9d9b66d72dbdc65f2dac64781d.jpg","https://cdn.shibe.online/shibes/1cf322acb7d74308995b04ea5eae7b520e0eae76.jpg","https://cdn.shibe.online/shibes/1ce955c3e49ae437dab68c09cf45297d68773adf.jpg","https://cdn.shibe.online/shibes/ec02bee661a797518d37098ab9ad0c02da0b05c3.jpg","https://cdn.shibe.online/shibes/1e6102253b51fbc116b887e3d3cde7b5c5083542.jpg","https://cdn.shibe.online/shibes/f0c07a7205d95577861eee382b4c8899ac620351.jpg","https://cdn.shibe.online/shibes/3eaf3b7427e2d375f09fc883f94fa8a6d4178a0a.jpg","https://cdn.shibe.online/shibes/c8b9fcfde23aee8d179c4c6f34d34fa41dfaffbf.jpg","https://cdn.shibe.online/shibes/55f298bc16017ed0aeae952031f0972b31c959cb.jpg","https://cdn.shibe.online/shibes/2d5dfe2b0170d5de6c8bc8a24b8ad72449fbf6f6.jpg","https://cdn.shibe.online/shibes/e9437de45e7cddd7d6c13299255e06f0f1d40918.jpg","https://cdn.shibe.online/shibes/6c32141a0d5d089971d99e51fd74207ff10751e7.jpg","https://cdn.shibe.online/shibes/028056c9f23ff40bc749a95cc7da7a4bb734e908.jpg","https://cdn.shibe.online/shibes/4fb0c8b74dbc7653e75ec1da597f0e7ac95fe788.jpg","https://cdn.shibe.online/shibes/125563d2ab4e520aaf27214483e765db9147dcb3.jpg","https://cdn.shibe.online/shibes/ea5258fad62cebe1fedcd8ec95776d6a9447698c.jpg","https://cdn.shibe.online/shibes/5ef2c83c2917e2f944910cb4a9a9b441d135f875.jpg","https://cdn.shibe.online/shibes/6d124364f02944300ae4f927b181733390edf64e.jpg","https://cdn.shibe.online/shibes/92213f0c406787acd4be252edb5e27c7e4f7a430.jpg","https://cdn.shibe.online/shibes/40fda0fd3d329be0d92dd7e436faa80db13c5017.jpg","https://cdn.shibe.online/shibes/e5c085fc427528fee7d4c3935ff4cd79af834a82.jpg","https://cdn.shibe.online/shibes/f83fa32c0da893163321b5cccab024172ddbade1.jpg","https://cdn.shibe.online/shibes/4aa2459b7f411919bf8df1991fa114e47b802957.jpg","https://cdn.shibe.online/shibes/2ef54e174f13e6aa21bb8be3c7aec2fdac6a442f.jpg","https://cdn.shibe.online/shibes/fa97547e670f23440608f333f8ec382a75ba5d94.jpg","https://cdn.shibe.online/shibes/fb1b7150ed8eb4ffa3b0e61ba47546dd6ee7d0dc.jpg","https://cdn.shibe.online/shibes/abf9fb41d914140a75d8bf8e05e4049e0a966c68.jpg","https://cdn.shibe.online/shibes/f63e3abe54c71cc0d0c567ebe8bce198589ae145.jpg","https://cdn.shibe.online/shibes/4c27b7b2395a5d051b00691cc4195ef286abf9e1.jpg","https://cdn.shibe.online/shibes/00df02e302eac0676bb03f41f4adf2b32418bac8.jpg","https://cdn.shibe.online/shibes/4deaac9baec39e8a93889a84257338ebb89eca50.jpg","https://cdn.shibe.online/shibes/199f8513d34901b0b20a33758e6ee2d768634ebb.jpg","https://cdn.shibe.online/shibes/f3efbf7a77e5797a72997869e8e2eaa9efcdceb5.jpg","https://cdn.shibe.online/shibes/39a20ccc9cdc17ea27f08643b019734453016e68.jpg","https://cdn.shibe.online/shibes/e67dea458b62cf3daa4b1e2b53a25405760af478.jpg","https://cdn.shibe.online/shibes/0a892f6554c18c8bcdab4ef7adec1387c76c6812.jpg","https://cdn.shibe.online/shibes/1b479987674c9b503f32e96e3a6aeca350a07ade.jpg","https://cdn.shibe.online/shibes/0c80fc00d82e09d593669d7cce9e273024ba7db9.jpg","https://cdn.shibe.online/shibes/bbc066183e87457b3143f71121fc9eebc40bf054.jpg","https://cdn.shibe.online/shibes/0932bf77f115057c7308ef70c3de1de7f8e7c646.jpg","https://cdn.shibe.online/shibes/9c87e6bb0f3dc938ce4c453eee176f24636440e0.jpg","https://cdn.shibe.online/shibes/0af1bcb0b13edf5e9b773e34e54dfceec8fa5849.jpg","https://cdn.shibe.online/shibes/32cf3f6eac4673d2e00f7360753c3f48ed53c650.jpg","https://cdn.shibe.online/shibes/af94d8eeb0f06a0fa06f090f404e3bbe86967949.jpg","https://cdn.shibe.online/shibes/4b55e826553b173c04c6f17aca8b0d2042d309fb.jpg","https://cdn.shibe.online/shibes/a0e53593393b6c724956f9abe0abb112f7506b7b.jpg","https://cdn.shibe.online/shibes/7eba25846f69b01ec04de1cae9fed4b45c203e87.jpg","https://cdn.shibe.online/shibes/fec6620d74bcb17b210e2cedca72547a332030d0.jpg","https://cdn.shibe.online/shibes/26cf6be03456a2609963d8fcf52cc3746fcb222c.jpg","https://cdn.shibe.online/shibes/c41b5da03ad74b08b7919afc6caf2dd345b3e591.jpg","https://cdn.shibe.online/shibes/7a9997f817ccdabac11d1f51fac563242658d654.jpg","https://cdn.shibe.online/shibes/7221241bad7da783c3c4d84cfedbeb21b9e4deea.jpg","https://cdn.shibe.online/shibes/283829584e6425421059c57d001c91b9dc86f33b.jpg","https://cdn.shibe.online/shibes/5145c9d3c3603c9e626585cce8cffdfcac081b31.jpg","https://cdn.shibe.online/shibes/b359c891e39994af83cf45738b28e499cb8ffe74.jpg","https://cdn.shibe.online/shibes/0b77f74a5d9afaa4b5094b28a6f3ee60efcb3874.jpg","https://cdn.shibe.online/shibes/adccfdf7d4d3332186c62ed8eb254a49b889c6f9.jpg","https://cdn.shibe.online/shibes/3aac69180f777512d5dabd33b09f531b7a845331.jpg","https://cdn.shibe.online/shibes/1d25e4f592db83039585fa480676687861498db8.jpg","https://cdn.shibe.online/shibes/d8349a2436420cf5a89a0010e91bf8dfbdd9d1cc.jpg","https://cdn.shibe.online/shibes/eb465ef1906dccd215e7a243b146c19e1af66c67.jpg","https://cdn.shibe.online/shibes/3d14e3c32863195869e7a8ba22229f457780008b.jpg","https://cdn.shibe.online/shibes/79cedc1a08302056f9819f39dcdf8eb4209551a3.jpg","https://cdn.shibe.online/shibes/4440aa827f88c04baa9c946f72fc688a34173581.jpg","https://cdn.shibe.online/shibes/94ea4a2d4b9cb852e9c1ff599f6a4acfa41a0c55.jpg","https://cdn.shibe.online/shibes/f4478196e441aef0ada61bbebe96ac9a573b2e5d.jpg","https://cdn.shibe.online/shibes/96d4db7c073526a35c626fc7518800586fd4ce67.jpg","https://cdn.shibe.online/shibes/196f3ed10ee98557328c7b5db98ac4a539224927.jpg","https://cdn.shibe.online/shibes/d12b07349029ca015d555849bcbd564d8b69fdbf.jpg","https://cdn.shibe.online/shibes/80fba84353000476400a9849da045611a590c79f.jpg","https://cdn.shibe.online/shibes/94cb90933e179375608c5c58b3d8658ef136ad3c.jpg","https://cdn.shibe.online/shibes/8447e67b5d622ef0593485316b0c87940a0ef435.jpg","https://cdn.shibe.online/shibes/c39a1d83ad44d2427fc8090298c1062d1d849f7e.jpg","https://cdn.shibe.online/shibes/6f38b9b5b8dbf187f6e3313d6e7583ec3b942472.jpg","https://cdn.shibe.online/shibes/81a2cbb9a91c6b1d55dcc702cd3f9cfd9a111cae.jpg","https://cdn.shibe.online/shibes/f1f6ed56c814bd939645138b8e195ff392dfd799.jpg","https://cdn.shibe.online/shibes/204a4c43cfad1cdc1b76cccb4b9a6dcb4a5246d8.jpg","https://cdn.shibe.online/shibes/9f34919b6154a88afc7d001c9d5f79b2e465806f.jpg","https://cdn.shibe.online/shibes/6f556a64a4885186331747c432c4ef4820620d14.jpg","https://cdn.shibe.online/shibes/bbd18ae7aaf976f745bc3dff46b49641313c26a9.jpg","https://cdn.shibe.online/shibes/6a2b286a28183267fca2200d7c677eba73b1217d.jpg","https://cdn.shibe.online/shibes/06767701966ed64fa7eff2d8d9e018e9f10487ee.jpg","https://cdn.shibe.online/shibes/7aafa4880b15b8f75d916b31485458b4a8d96815.jpg","https://cdn.shibe.online/shibes/b501169755bcf5c1eca874ab116a2802b6e51a2e.jpg","https://cdn.shibe.online/shibes/a8989bad101f35cf94213f17968c33c3031c16fc.jpg","https://cdn.shibe.online/shibes/f5d78feb3baa0835056f15ff9ced8e3c32bb07e8.jpg","https://cdn.shibe.online/shibes/75db0c76e86fbcf81d3946104c619a7950e62783.jpg","https://cdn.shibe.online/shibes/8ac387d1b252595bbd0723a1995f17405386b794.jpg","https://cdn.shibe.online/shibes/4379491ef4662faa178f791cc592b52653fb24b3.jpg","https://cdn.shibe.online/shibes/4caeee5f80add8c3db9990663a356e4eec12fc0a.jpg","https://cdn.shibe.online/shibes/99ef30ea8bb6064129da36e5673649e957cc76c0.jpg","https://cdn.shibe.online/shibes/aeac6a5b0a07a00fba0ba953af27734d2361fc10.jpg","https://cdn.shibe.online/shibes/9a217cfa377cc50dd8465d251731be05559b2142.jpg","https://cdn.shibe.online/shibes/65f6047d8e1d247af353532db018b08a928fd62a.jpg","https://cdn.shibe.online/shibes/fcead395cbf330b02978f9463ac125074ac87ab4.jpg","https://cdn.shibe.online/shibes/79451dc808a3a73f99c339f485c2bde833380af0.jpg","https://cdn.shibe.online/shibes/bedf90869797983017f764165a5d97a630b7054b.jpg","https://cdn.shibe.online/shibes/dd20e5801badd797513729a3645c502ae4629247.jpg","https://cdn.shibe.online/shibes/88361ee50b544cb1623cb259bcf07b9850183e65.jpg","https://cdn.shibe.online/shibes/0ebcfd98e8aa61c048968cb37f66a2b5d9d54d4b.jpg"]
                            let kya = list[Math.floor(Math.random() * list.length)]
                            aruga.sendFileFromUrl(from, kya, 'Dog.jpeg', 'Doggo sparkles', id)
							limitAdd(serial)
                        break
					case prefix+'neko':  
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)					
						q2 = Math.floor(Math.random() * 900) + 300;
						q3 = Math.floor(Math.random() * 900) + 300;
						aruga.sendFileFromUrl(from, 'http://placekitten.com/'+q3+'/'+q2, 'neko.png','Neko 🌠️', id)
						limitAdd(serial)
						break
							case prefix+'wpanime':
							if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
							if (!isAnime) return await aruga.reply(from, '*Turn on Anime mode please...*', id)
                aruga.reply(from, mess.wait, id);
                axios.get('https://nekos.life/api/v2/img/wallpaper ').then(res => {
                    aruga.sendFileFromUrl(from, res.data.url, 'Wallpaper.jpg', 'Enjoy :>', id);
					limitAdd(serial)
                });
                break
                    case prefix+'aiquote' :
					if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
                            const aiquote = await axios.get("http://inspirobot.me/api?generate=true")
                            await aruga.sendFileFromUrl(from, aiquote.data, 'quote.jpg', ' ', id )
							limitAdd(serial)
                        break
                case prefix+'ttp':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
		if (args.length == 0) return aruga.reply(from, 'Where is the text?', id)
		const txtxx = body.slice(5)
		const beaattp = await axios.get(`https://api.xteam.xyz/ttp?text=${txtxx}`)
		const beeresult = beaattp.data.result
		aruga.sendImageAsSticker(from, beeresult, {author: authorr, pack: pack }, id)
		limitAdd(serial)
		break
		case prefix+'ttp2':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
		if (args.length == 0) return aruga.reply(from, 'Where is the text?', id)
		const txxttxx = body.slice(5)
		aruga.sendImageAsSticker(from, `https://api.dapuhy.ga/api/maker/ttp?text=${txxttxx}&apikey=1QM9kTIM1WUkJ57`, {author: authorr, pack: pack }, id)
		limitAdd(serial)
		break
		case prefix+'attp2':
		if (isLimit(serial)) return aruga.reply(from, `_Hello ${pushname} Your request limit has reached the limit. Please come back tomorrow!_\n*(Daily limit reset at 12:00am IST)*`, id)
		if (args.length == 0) return aruga.reply(from, 'Where is the text?', id)
		const txttxx = body.slice(7)
		const beeaattp = await axios.get(`http://zekais-api.herokuapp.com/attg?text=${txttxx}`)
		aruga.sendStickerfromUrl(from, beeaattp, {author: authorr, pack: pack }, id)
		limitAdd(serial)
		break
                 
			case prefix+'listmuted':
			case prefix+'listmute':
			if (!isOwnerB) return aruga.reply(from, 'This command is for Owner bot only', id)
			let inmuted = `This is list of Muted grup\nTotal : ${muted.length}\n`
			for (let i of muted) {
				inmuted += `-\n`
			}
			await aruga.reply(from, inmuted, id)
			break
            case prefix+ 'listban':
			if (!isOwnerB) return aruga.reply(from, 'This command is for Owner bot only', id)
                let bened = `This is list of banned number\nTotal : ${banned.length}\n`
                for (let i of banned) {
                    bened += `➸ ${i.replace(/@c.us/g,'')}\n`
                }
                await aruga.reply(from, bened, id)
                break
            case prefix+'me':
                if(!isGroupMsg) return aruga.reply(from, 'This feature can only be used within Groups!', id)
                if (isBanned) return false
                if (isGroupMsg) {
                    if (!quotedMsg) {
                    var pic = await aruga.getProfilePicFromServer(author)
                    var namae = pushname
                    var sts = await aruga.getStatus(author)
                    var adm = isGroupAdmins
                    const { status } = sts
                    if (pic == undefined) {
                    var pfp = errorurl
                    } else {
                        var pfp = pic
                    } 
                    await aruga.sendFileFromUrl(from, pfp, 'pfp.jpg', `*User Profile* ✨️ \n\n➸ *Username: ${namae}*\n\n➸ *User Info: ${status}*\n\n➸ *Admin Group: ${adm}*\n\n`)
                 } else if (quotedMsg) {
                 var qmid = quotedMsgObj.sender.id
                 var pic = await aruga.getProfilePicFromServer(qmid)
                 var namae = quotedMsgObj.sender.name
                 var sts = await aruga.getStatus(qmid)
                 var adm = isGroupAdmins
                 const { status } = sts
                  if (pic == undefined) {
                  var pfp = errorurl
                  } else {
                  var pfp = pic
                  } 
                  await aruga.sendFileFromUrl(from, pfp, 'pfp.jpg', `*User Profile* ✨️ \n\n➸ *Username: ${namae}*\n\n➸ *User Info: ${status}*\n\n➸ *Admin Group: ${adm}*\n\n`)
                 }
                }
                break
        case prefix+'listblock':
		if (!isOwnerB) return aruga.reply(from, 'This command is for Owner bot only', id)
            let hih = `This is list of blocked number\nTotal : ${blockNumber.length}\n`
            for (let i of blockNumber) {
                hih += `➸ ${i.replace(/@c.us/g,'')}\n`
            }
            await aruga.reply(from, hih, id)
            break
        case prefix+'bc':
            if (!isOwnerB) return aruga.reply(from, `Perintah ini hanya untuk Owner Urbae`, id)
                bctxt = body.slice(4)
                txtbc = `〘 *A K E N O  B O T* 〙\n\n${bctxt}`
                const semuagrup = await aruga.getAllChatIds();
                if(quotedMsg && quotedMsg.type == 'image'){
                    const mediaData = await decryptMedia(quotedMsg)
                    const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                    for(let grupnya of semuagrup){
                        var cekgrup = await aruga.getChatById(grupnya)
                        if(!cekgrup.isReadOnly) aruga.sendImage(grupnya, imageBase64, 'gambar.jpeg', txtbc)
                    }
                    aruga.reply('Broadcast sukses!')
                }else if(quotedMsg && quotedMsg.type == 'audio' || quotedMsg && quotedMsg.type == 'ptt') {
					const mediaData = await decryptMedia(quotedMsg)
					const audiobase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
					for (let grupnya of semuagrup) {
						var cekgrup = await aruga.getChatById(grupnya)
						if(!cekgrup.isReadOnly) aruga.sendPtt(grupnya, audiobase64, 'audio.mp3')
					}
				aruga.reply(from, 'Broadcast audio sukses', id)
				}else if (quotedMsg && quotedMsg.type == 'sticker') {
					const mediaData = await decryptMedia(quotedMsg)
					const stickbase = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
					for (let grupnya of semuagrup) {
						var cekgrup = await aruga.getChatById(grupnya)
						if(!cekgrup.isReadOnly) aruga.sendImageAsSticker(grupnya, stickbase, StickerMetadata)
					}
				aruga.reply(from, 'Broadcast stiker berhasil', id)
				} else {
                    for(let grupnya of semuagrup){
                        var cekgrup = await aruga.getChatById(grupnya)
                        if(!cekgrup.isReadOnly && isMuted(grupnya)) aruga.sendText(grupnya, txtbc)
                    }
                            aruga.reply('Broadcast Success!')
                }
                break
				case prefix+'bcgrup': 
            if (!isOwnerBot) return aruga.reply(from, 'Perintah ini hanya untuk Owner bot', id)
            const allGrouppz = await aruga.getAllGroups()
            for (let gclistt of allGrouppz) {
	    await aruga.sendText(gclistt.contact.id , `${q}`) 
            }
            aruga.reply(from, 'Succes Bc all group!', id)
            break
            case prefix+'leaveall': //mengeluarkan bot dari semua group serta menghapus chatnya
            if (!isOwnerB) return aruga.reply(from, 'This command is for Owner bot only', id)
            const allChatso = await aruga.getAllChatIds()
            const loadedx = await aruga.getAmountOfLoadedMessages()
            const allGroupq = await aruga.getAllGroups()
            for (let gclist of allGroupq) {
                await aruga.sendText(gclist.contact.id, `Sorry BOT is DEAD..\nGoodBye!`)
				sleep(1000)
                setTimeout( () => {aruga.leaveGroup(gclist.contact.id)}, 15000)
            }
            aruga.reply(from, 'Success leave all group!', id)
            break
        case prefix+'clearall': //menghapus seluruh pesan diakun bot
            if (!isOwnerBot) return aruga.reply(from, 'This command is for Owner bot only', id)
            const allChatx = await aruga.getAllChats()
            for (let dchat of allChatx) {
                await aruga.deleteChat(dchat.id)
            }
            aruga.reply(from, 'Success clear all chat!', id)
            break
        
        
        case prefix+'adminlist':
            if (!isGroupMsg) return aruga.reply(from, 'This command can only be used in groups!', id)
            let mimin = `*LIST ADMIN FROM ${name}*\n`
            for (let admon of groupAdmins) {
                mimin += `➸ @${admon.replace(/@c.us/g, '')}\n` 
            }
            await aruga.sendTextWithMentions(from, mimin, id)
            break
        case prefix+'howmuch':
            if (!isGroupMsg) return aruga.reply(from, 'Get the total no. of members in group')
            const tulul = name
            const yaelah = chat.groupMetadata.participants.length
                await aruga.sendText(from, `Total Member in *${tulul}* is : *${yaelah}*` )
                break
        case prefix+'ownergc':
            await aruga.sendLinkWithAutoPreview(from, `Owner Group : https://chat.whatsapp.com/JUg5BJA305WYSxl`,'','', id)
            break
		case prefix+'nsfwgc':
            await aruga.sendLinkWithAutoPreview(from, `Owner NSFW Group : https://chat.whatsapp.com/DeZYQf5sX670j8jlW`,'','', id)
            break
        }
		
		// Simi-simi function
		if ((!isCmd && isGroupMsg && isSimi) && message.type === 'chat') {
			axios.get(`https://arugaz.herokuapp.com/api/simisimi?kata=${encodeURIComponent(message.body)}&apikey=${apiSimi}`)
			.then((res) => {
				if (res.data.status == 403) return aruga.sendText(ownerNumber, `${res.data.result}\n\n${res.data.pesan}`)
				aruga.reply(from, `Simi berkata: ${res.data.result}`, id)
			})
			.catch((err) => {
				aruga.reply(from, `${err}`, id)
			})
		}
    }
    } catch (err) {
		await aruga.reply(from, `[❗]Sorry, An error occurred..`, id)
		console.log(err)
		//await aruga.sendText(ownerNumberr, `_\n_I failed at command execution of_\n\n*${prefix}${body.slice(1)}*\n\n${err}`, id)
}
	}
