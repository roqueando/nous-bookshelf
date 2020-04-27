"use strict";
const { Service } = require('@roqueando/nous');
const Repository = require('../repositories/Repository');
const {books} = require('../config/Database');

class BookService extends Service {
    getAllBooks() {
        const repo = new Repository(books);
        return repo.all();
    }
}
module.exports = BookService;
