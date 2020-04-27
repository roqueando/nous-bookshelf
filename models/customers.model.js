const db = require('../config/Database');
const customers = db.addCollection('customers');

module.exports = customers;
