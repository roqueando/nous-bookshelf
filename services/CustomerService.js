"use strict";
const { Service } = require('@roqueando/nous');
const CustomerRepository = require('../repositories/customer.repository');

const repo = new CustomerRepository();
class CustomerService extends Service {
    getAllCustomers() {
        return repo.all();
    }
    createCustomer(customer) {
        const obj = repo.save(customer);
        return obj;
    }
    updateCustomer(id, data) {
        const customer = repo.show(id);
        const updated = Object.assign(customer, data)
        const obj = repo.update(updated);
        return obj;
    }
    showCustomer(id) {
        const obj = repo.show(id);
        return obj;
    }
    deleteCustomer(id) {
        return repo.delete(id);
    }

}
module.exports = CustomerService;
