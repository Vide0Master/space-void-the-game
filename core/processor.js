const print = require('../modules/consoleLogger')
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./space.db');
const user_verify = require('./humanVerification')


module.exports = (ws, acive_clients) => {
    ws.on('message', (message) => {
        const rqst = JSON.parse(message)
        const type = rqst.req
        const arguments = rqst.args
        const user = rqst.user

        console.log(rqst)

        function respond(data, rtype='') {
            ws.send(JSON.stringify({ type: rtype ? rtype : type, ...data }))
        }

        if(type=='connection'){
            respond({ result: 'ok' })
            return
        }

        if(type=='register'){
            if(acive_clients[user]){
                respond({ message:'Вы уже авторизованы в звёздном диспетчере!' })
                return
            }
            const u_data = require('./userdata_template.json')
            for(const pos in arguments){
                u_data.user_data[pos]=arguments[pos]
            }
            if(u_data.user_data.name==''){u_data.user_data.name=u_data.user_data.login}
            acive_clients[user]=u_data
            console.log(acive_clients)
        }

        if(!acive_clients[user]){
            respond({message:'Вы не зарегестрированы! Введите /register для регистрации в "Звёздном диспетчере"'}, 'message')
            return
        }

        switch (type) {
            case '': {

            }; break
        }
    })
}