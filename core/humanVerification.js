class RandomTextGenerator {
    constructor() {
        this.basicChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        this.upsideDownMap = this.createUpsideDownMap();
    }

    // Создаем карту символов для переворачивания текста
    createUpsideDownMap() {
        const normal = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const upsideDown = 'ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz∀qƆᗡƎℲ⅁HIſʞ⅃WNOԀᴚS⊥∩ΛMX⅄Z0ƖᄅƐㄣϛ9ㄥ86';
        const map = {};

        for (let i = 0; i < normal.length; i++) {
            map[normal[i]] = upsideDown[i];
        }

        return map;
    }

    // Генерация случайного текста и перевернутого текста
    generateTextAndFlipped(length) {
        let text = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * this.basicChars.length);
            text += this.basicChars[randomIndex];
        }

        let flippedText = '';
        for (let char of text) {
            flippedText = (this.upsideDownMap[char] || char) + flippedText;
        }

        return { originalText: text, flippedText: flippedText };
    }

    // Проверка совпадения ввода пользователя с оригинальным текстом
    checkUserInput(userInput, originalText) {
        return userInput === originalText;
    }
}

// Экспортируем класс
module.exports = RandomTextGenerator;
