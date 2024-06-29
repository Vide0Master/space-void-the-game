function prep_connection() {
    const rw = document.querySelector('.input-row')

    const command_line = rw.querySelector('.input-area')
    const send_button = rw.querySelector('.send-button')

    function request() {
        const cmd_id = sessionStorage.getItem('cmd_id')
        const uid = localStorage.getItem('ukey')
        process_command({ uid, cmd_id, request: command_line.value })
        command_line.value=''
    }

    command_line.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') request()
    })
    send_button.addEventListener('click', () => {
        request()
    })
}

prep_connection()

function request(type, req) {
    socket.send(JSON.stringify({ req: type, user: localStorage.getItem('ukey'), args: req }))
}
