const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['62895388290404'] //ur owner number
global.ownernomer = "62895388290404" //ur owner number2
global.ownername = "𝕲𝖗𝖊𝖌𝖔𝖗𝖎𝖚𝖘" //ur owner name
global.ytname = "youtube.com/@GREGOR1US" //ur yt chanel name
global.socialm = "GitHub: NotGGs" //ur github or insta name
global.location = "Indonesia, Jatim, Madura" //ur location

//new
global.botname = "𝕲𝖗𝖊𝖌𝖔𝖗𝖎𝖚𝖘-𝕭𝖔𝖙"
global.ownernumber = '62895388290404'
global.ownername = '𝕲𝖗𝖊𝖌𝖔𝖗𝖎𝖚𝖘'
global.ownerNumber = ["62895388290404@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@GREGOR1US"
global.websitex = "https://youtu.be/"
global.wagc = "https://chat.whatsapp.com/Lfg4UKGryV6IDBrEKaZlQg"
global.themeemoji = '🪀'
global.wm = "𝕲𝖗𝖊𝖌𝖔𝖗𝖎𝖚𝖘-𝕭𝖔𝖙"
global.botscript = 'youtube.com/@GREGOR1US' //script link
global.packname = "Sticker By"
global.author = "𝕲𝖗𝖊𝖌𝖔𝖗𝖎𝖚𝖘"
global.creator = "62895388290404@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
