const Repository = require('./Repository');
const customers = require('../models/customers.model');
class CustomerRepository extends Repository{
    constructor() {
        super(customers);
    }
}

module.exports = CustomerRepository;
