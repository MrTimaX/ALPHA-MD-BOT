

const fs = require('fs');
const chalk = require('chalk');
if (fs.existsSync('settings.env')) require('dotenv').settings({ path: './settings.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `\n\n*🖲️ᴀʟᴘʜᴀ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ🖲️*\n*ʜᴇʏ ᴛʜᴇʀᴇ ɪ'ᴍ ᴏɴʟɪɴᴇ ɴᴏᴡ*\n\n*◉ᴠᴇʀꜱɪᴏɴ :► 1.5.1 (ᴘʀɪᴠᴀᴛᴇ ʀᴇᴀʟɪꜱᴇ)*\n*◉ᴀʙᴏᴜᴛ :► ᴀʟᴘʜᴀ ʙᴏᴛ ɪꜱ ꜱʀɪ ʟᴀɴᴋᴀɴ ʙᴇꜱᴛ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ᴜꜱᴇʀ ʙᴏᴛ*\n*◉ᴅᴇᴠᴇʟᴏᴘᴇʀ  :► ᴍʀ.ᴛɪᴍᴀ*\n\nᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ᴀʟᴘʜᴀ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ💞\n\n©ᴀʟᴘʜᴀ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ` //Costomize Alive Message (type your message in `` )

global.owner = ['+94715264791'] //Owner number in aive msg
global.premium = ['+94715264791'] //Owner Number info
global.ownernomer = '+94715264791' //Owner Number <<<
global.alive_logo = 'https://telegra.ph/file/8e40c1953aae06eb8960e.jpg'
global.ownername = 'MR.TIMA' 
global.botname = 'ᴀʟᴘʜᴀ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ' 

global.button = 'ᴀʟᴘʜᴀ'
global.myweb = 'github.com/'
global.sc = 'https://github.com/'
global.script = 'https://github.com/'
global.btnurl = 'https://github.com' 

global.region = 'India, South India, Kerala'
global.language = 'en'
global.packname = 'TIMA'
global.author = 'TIMA' 
global.prefa = ['','!','.','😂','❤','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session'
global.sp = '⭔'
ALIVEMSG = 'default'

global.ig = 'https://github.com/Queen-Alexa'
global.footer = 'ᴀʟᴘʜᴀ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ' // DO NOT CHANGE!
CAPTIONS: process.env.CAPTIONS === undefined ? 'ᴀʟᴘʜᴀ ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ ʙᴏᴛ' : process.env.CAPTIONS,
global.mess = { // Don't change
    success: 'Done ✅',
    admin: 'Only Admins can use it!😉',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉👈Pleas Wait...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = 'https://raw.githubusercontent.com/ChamodKeshan/Alexa-New/main/Alexa-New/media/main.jpg?token=GHSAT0AAAAAABXCNRVWU72ZQMJRKQ2Z5522YX3YTSA'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
