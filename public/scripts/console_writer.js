(()=>{
    const input_row = document.querySelector('.input-row')
    input_row.style.pointerEvents = 'none';

    const input_field = input_row.querySelector('.input-area')
    input_field.placeholder='Ожидание запуска...'
})()

function check_cmd_items() {
    const cmd = document.querySelector('.output-area')
    const childElements = cmd.children;
    if (childElements.length > 60) {
        while (childElements.length > 60) {
            cmd.removeChild(childElements[0]);
        }
    }
}

async function wait(ms) {
    return new Promise(resolve => {
        setTimeout(() => { resolve() }, ms)
    })
}

async function write_line(line,elm){
    for (const symb of line.split('')) {
        elm.innerHTML += symb
        await wait(10)
    }
}

async function cmd_init() {
    const cmd_lines = [
        'Анализ состояния процессора',
        'Диагностика оперативной памяти',
        'Проверка системы питания',
        'Тестирование дисплея',
        'Оптимизация работы процессора',
        'Тонкая настройка памяти',
        'Корректировка параметров дисплея',
        'Сканирование модуля связи',
        'Проверка системы охлаждения',
        'Настройка системы охлаждения',
        'Диагностика звуковой карты',
        'Настройка звуковой карты',
        'Проверка сетевого соединения',
        'Конфигурация сетевого адаптера',
        'Анализ работы сетевого адаптера',
        'Проверка клавиатурного ввода',
        'Настройка клавиатуры',
        'Проверка мыши',
        'Регулировка параметров мыши',
        'Сканирование сенсорных датчиков',
        'Настройка сенсорных систем',
        'Проверка графического процессора',
        'Оптимизация графического процессора',
        'Диагностика твердотельного накопителя',
        'Настройка параметров накопителя',
        'Проверка блока питания',
        'Настройка блока питания',
        'Аудит системы безопасности',
        'Настройка системы безопасности',
        'Диагностика операционной системы',
        'Обновление операционной системы',
        'Анализ системных журналов',
        'Очистка системных журналов',
        'Проверка антивирусной защиты',
        'Обновление антивирусных баз',
        'Аудит системы резервного копирования',
        'Настройка резервного копирования',
        `Настройка модуля связи по адресу [${window.location.href.replace(/^https?:\/\//, '')}]`,
        'Калибровка модуля связи',
        'Запуск системы "Звёздный правитель"'
    ];    
    
    const cmd = document.querySelector('.output-area')
    for (const line of cmd_lines) {
        await cmd_print_check(line,'OK',{r:0,g:200,b:0})
    }
    const ln = document.createElement('div')
    cmd.appendChild(ln)
    await write_line('Попытка подключения к "Звёздному диспетчеру"...',ln)
    request('connection')
    const input_row = document.querySelector('.input-row')
    input_row.style.pointerEvents = 'auto';

    const input_field = input_row.querySelector('.input-area')
    input_field.placeholder='Ожидание ввода...'
}

document.querySelector('.screen-id').addEventListener('animationend', () => {
    cmd_init()
})

async function cmd_print(text) {
    const cmd = document.querySelector('.output-area')

    const line = document.createElement('div')
    cmd.appendChild(line)
    await write_line(text,line)
    check_cmd_items()
}

async function cmd_print_check(text,status,color,elm){
    if(!elm){
        const cmd = document.querySelector('.output-area')
        elm = document.createElement('div')
        cmd.appendChild(elm)
    }

    await write_line(text,elm)
    elm.innerHTML+=` [<div style="color:rgb(${color.r}, ${color.g}, ${color.b}); display: inline-block; text-shadow: 0 0 5px rgb(${color.r*0.75}, ${color.g*0.75}, ${color.b*0.75});">${status}</div>]`

    check_cmd_items()
}