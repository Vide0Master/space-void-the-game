const express = require('express');
const { createServer } = require('http'); // Используем модуль http для создания HTTP сервера
const { Server } = require('ws');
const path = require('path');
const sassMiddleware = require('node-sass-middleware')

const app = express();
const httpServer = createServer(app); // Создаем HTTP сервер с помощью Express приложения

// Настройка маршрута для статических файлов (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    debug: false,
    outputStyle: 'compressed',
    prefix: '/',
    response: true,
    force: true,
}));

// Создание WebSocket сервера поверх HTTP сервера
const wss = new Server({ server: httpServer });

const acive_clients = {}

wss.on('connection', (ws) => {
    const process = require(`./core/processor`)
    process(ws, acive_clients)
});

// Запуск HTTP сервера на порту 3000
httpServer.listen(3000, () => {
    console.log('HTTP и WS сервер запущен на порту 3000');
});
