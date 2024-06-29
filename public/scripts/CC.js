const socket = new WebSocket(`ws://${window.location.href.replace(/^https?:\/\//, '')}`);

socket.onclose = function (event) {
    if (event.wasClean) {
        console.log('Соединение с сервером закрыто чисто');
    } else {
        console.error('Соединение с сервером закрыто с ошибкой:', event.code, event.reason);
    }
    cmd_print("Связь с звёдзным диспетчером, утеряна, повторите попытку позже!")
};

function ukey_check() {
    const key_length = 30
    const ukey = localStorage.getItem('ukey')

    if (!ukey || ukey == '' || ukey.length != key_length) {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz0123456789".split('')

        let key = ''

        for (let i = 0; i < key_length; i++) {
            key += alphabet[Math.floor(Math.random() * alphabet.length)]
        }

        localStorage.setItem('ukey', key)
    }
}

ukey_check()

function set_cmd_id(id) {
    sessionStorage.setItem('cmd_id', id)
    document.querySelector('.screen-id').innerHTML = `CMD-${id}`
    document.querySelector('title').innerHTML = `CMD-${id}`
}

set_cmd_id(1)