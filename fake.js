const faker = require('faker');
const moment = require('moment');
const { v4: uuidv4 } = require("uuid");

moment.locale('ru');
faker.locale = 'ru';

module.exports = class Faker {
    constructor() {
        this.data = {
            status: 'ok',
            timestamp: `${moment().format("L")} ${moment().format("LT")}`,
            messages: []
        };
    }
    create() {
        const index = Math.round(1 - 0.5 + Math.random() * (4 - 1 + 1));
        for (let i = 0; i < index; i += 1) {
            this.data.messages.push({
                id: uuidv4(),
                from: faker.internet.email(),
                subject: faker.lorem.sentence(),
                text: faker.lorem.sentences(),
                timestamp: `${moment().format("L")} ${moment().format("LT")}`,
            });
        }
    }

    init() {
        setInterval(() => {
            this.create();
        }, 20000)
    }

    sendData() {
        return this.data;
    }
}