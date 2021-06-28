const faker = require('faker');
const moment = require('moment');
const { v4: uuidv4 } = require("uuid");

moment.locale('ru');
faker.locale = 'ru';

module.exports = class Faker {
    constructor() {
        this.fakeData = {
            status: 'ok',
            timestamp: `${moment().format("L")} ${moment().format("LT")}`,
            messages: []
        };
    }

    create() {
        return {
            id: uuidv4(),
            from: faker.internet.email(),
            subject: faker.lorem.sentence(),
            text: faker.lorem.sentences(),
            timestamp: `${moment().format("L")} ${moment().format("LT")}`,
        }
    }

    init() {
        setTimeout(() => {
            this.fakeData.messages.push(this.create());
        }, 5000)
    }

    sendData() {
        return this.fakeData;
    }
}