
//* console logger от VideoMaster

module.exports = function (text) {
    const w_data = text.split('/')
    const line = w_data[1]
    const type = w_data[0]
    let currentdate = new Date();
    let datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    datetime = `\x1b[46m${datetime}\x1b[0m `

    let result = ""
    switch (type) {
        default: {
            result = `${datetime}\x1b[0m${line}\x1b[0m`
        }; break;
        case "e": {
            result = `${datetime}\x1b[41m\x1b[37mERROR\x1b[0m ${line}`
        }; break;
        case "s": {
            result = `${datetime}\x1b[42m\x1b[37mSUCCES\x1b[0m ${line}`
        }; break;
        case "w": {
            result = `${datetime}\x1b[43m\x1b[37mWARNING\x1b[0m ${line}`
        }; break;
        case "i": {
            result = `${datetime}\x1b[44m\x1b[37mINFO\x1b[0m ${line}`
        }; break;
        case "uwu": {
            result = `${datetime}\x1b[45m\x1b[37mUwU\x1b[0m ${line}`
        }; break;
        case "owo": {
            result = `${datetime}\x1b[45m\x1b[37mOWO\x1b[0m ${line}`
        }; break;
    }
    console.log(result);
};