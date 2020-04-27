const {Client} = require('@roqueando/nous');

(async () => {
    try {
        const client = new Client();
        // CREATE
        const custom = await client.send("CustomerService", {
            action: "createCustomer",
            parameters: [
                {
                    name: 'jonyzin@gmail.com',
                    password: 'senha123'
                }
            ]
        })

        // UPDATE
        const customer = await client.send("CustomerService", {
            action: "updateCustomer",
            parameters: [
                custom.$loki,
                {
                    name: 'jonytest22@gmail.com',
                    password: 'senha123'
                }
            ]
        });
        
        // READ
        const customerGet = await client.send("CustomerService", {action: "showCustomer", parameters: [custom.$loki]});
        const allCustomers = await client.send("CustomerService", {action: "getAllCustomers", parameters: []});
        console.log(`Hi there, ${custom.name}`);
        console.log(`Hi there again with mail, ${customerGet.name}`);
        console.log("CUSTOMERS ---- \n" + allCustomers.map(customer => customer.name).join('\n'));
        const deleted = await client.send("CustomerService", {action: "deleteCustomer", parameters: [custom.$loki]});

        console.log(deleted);
    } catch(err) {
        console.log(err);
    }
})()
