const {Router} = require('@roqueando/nous');
const fs = require('fs');
const customerHandler = require('./handlers/customers.handler');

const router = new Router();

router.register("GET", "/", (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    const file = fs.readFileSync("./home.html", "utf8");
    res.write(file);
    res.end()
});

router.register("POST", "/customer", customerHandler.create);
router.register("GET", "/customers", customerHandler.index);

module.exports = router;
