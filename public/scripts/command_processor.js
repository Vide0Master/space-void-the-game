function process_command(comm) {
    function parseCommand(input) {
        const parts = input.trim().split('/');
        parts.shift()
        const args = parts.map(arg => arg.trim())

        const command = args.shift()

        return {
            command: command,
            args: args
        };
    }


    const req = parseCommand(comm.request)
    console.log(req)
    switch (req.command) {
        case 'register': {
            if (req.args.length < 2) {
                cmd_print("Ошибка, введено недостаточно аргументов, пример исполнения комманды:")
                cmd_print("[/register /логин* /пароль* /отображаемое имя]")
            }
            request('register', { login: req.args[0], password: req.args[1], name: req.args[2] })
        }; break;

        default: {
            cmd_print('Ошибка: нет комманды')
        }; break;
    }
}