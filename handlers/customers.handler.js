const {Client} = require('@roqueando/nous');
const client = new Client();
const querystring = require('querystring');

module.exports = {
    async index(req, res) {
        // send to customersService
        const allCustomers = await client.send("CustomerService", {action: "getAllCustomers", parameters: []});
        res.writeHead(200, {"Content-Type": "application/json"});
        res.write(JSON.stringify(allCustomers));
        return res.end();
    },

    async create(req, res) {
        req.on('data', async data => {
            const {username, password} = querystring.parse(data.toString());
            console.log('test');
            console.log(username);
            const customer = await client.send("CustomerService", {
                action: "createCustomer",
                parameters: [
                    {
                        name: username,
                        password
                    }
                ]
            });
            res.writeHead(200, {"Content-Type": "application/json"});
            res.write(JSON.stringify(customer));
            return res.end();
        })
        
    }
}
