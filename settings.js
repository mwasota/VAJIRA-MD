const fs = require('fs');
const chalk = require('chalk');

// Website Api
global.APIs = {
    xfarr: 'https://api.xfarr.com',
};

// Apikey Website Api
global.APIKeys = {
    'https://api.xfarr.com': 'Uc3LRsLE2d',
};

// Set your URL and API key here
global.APIs = {
    xfarr: {
        baseURL: 'https://api.xfarr.com',
        Key: 'Uc3LRsLE2d'
    }
};
 

// Other
global.apikey = 'bf2d2cf29b3edc604b447983';
global.ownername = 'ᴠᴀᴊɪʀᴀ ʀᴀᴛʜɴᴀʏᴀᴋᴀ';
global.owner = ['255688930205'];
global.premium = ['255688930205'];
global.packname = '𝚜𝚝𝚒𝚌𝚔𝚎𝚛 𝚋𝚢';
global.author = 'Xhriss 𝙈d';
global.caption = ' 👨‍💻 Xhriss tz 👨‍💻';
global.sessionName = 'session';
global.prefa = ['!', '.'];
global.sp = '✪';
global.mess = {
    banned: '`You are *Banned* fron using commands!`',
    bangc: '`This Group is *Banned* from using Commands!`',
    success: '`✓ Success`',
    admin: '`This feature is only for group admins`',
    botAdmin: '`I am not an admin!`',
    owner: '`You are not my owner`',
    group: '`You can use this command only in groups ❌`',
    private: '`Feature is used only for private chats!`',
    bot: '`Bot number user special features`',
    wait: '*Processing Your request*',
    endLimit: '`Your daily limit has expired, the limit will be reset every 12 hours`',
};
global.link = 'https://youtube.com/'
global.linkGroup = 'https://chat.whatsapp.com/L7W9mOrPQH3LyRWmYV8dDj'  
global.logo = process.env.LOGO || "https://telegra.ph/file/2912dd1d0665285ffc931.jpg",        
global.ANTI_BOT = process.env.ANTI_BOT || "true",        
global.typemenu = 'v1' // 'v1' => 'v5'
global.onlygroup = false // onlygroup
global.onlypc = false
global.AUTO_ABOUT = true
global.limitawal = {
    premium: 'Infinity',
    free: 10
};

// Add anticall option
global.config = {
    options: {
        antiCall: true, // Set to true for anticall functionality, false otherwise
    },
};

// Ensure config object is defined before using it
if (config && config.options && config.options.antiCall) {
    let file = require.resolve(__filename);
    fs.watchFile(file, () => {
        fs.unwatchFile(file);
        console.log(chalk.redBright(`Update'${__filename}'`));
        delete require.cache[file];
        require(file);
    });
}
