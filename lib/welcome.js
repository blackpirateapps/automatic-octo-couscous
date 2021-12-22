const fs = require('fs-extra')
	
module.exports = welcome = async (aruga, event) => {
	const welkom = JSON.parse(fs.readFileSync('./lib/database/welcome.json'))
	const isWelkom = welkom.includes(event.chat)
    try {
        if (event.action == 'add' && isWelkom) {
            const gChat = await aruga.getChatById(event.chat)
            const pChat = await aruga.getContact(event.who)
            const { contact, groupMetadata, name } = gChat
            const pepe = await aruga.getProfilePicFromServer(event.who)
            const capt = `Hello @${event.who.replace('@c.us', '')} 👋\nWelcome to *Group ${name}*\n═══════════════════\nEnjoy Your Stay!!.\n═══════════════════\n`
            if (pepe == '' || pepe == undefined) {
		var pfp = 'https://kicksdigitalmarketing.com/wp-content/uploads/2019/09/iStock-1142986365.jpg'
	} else {
		var pfp = pepe
	     }
                await aruga.sendFileFromUrl(event.chat, pfp, 'profile.jpg', capt)
            }
        } catch (err) {
            console.log(err)
        }
        }