const db = require('../config/Database');
const books = db.addCollection('books');
module.exports = books;
