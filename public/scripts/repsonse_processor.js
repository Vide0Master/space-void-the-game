socket.onmessage = async function (event) {
    const s_message = JSON.parse(event.data)

    const cmd = document.querySelector('.output-area')
    switch(s_message.type){
        case 'message':{
            const line = document.createElement('div')
            cmd.appendChild(line)
            await write_line(s_message.message,line)
        };break;
        case 'connection':{

            if(s_message.result=='ok'){
                cmd_print_check('Состояние подключения','ПОДКЛЮЧЕНО',{r:0,g:200,b:0})
            }else{
                cmd_print_check('Состояние подключения','ОШИБКА',{r:200,g:0,b:0})
            }
        }
    }
    
};