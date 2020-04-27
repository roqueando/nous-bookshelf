const { Service } = require('@roqueando/nous');
const router = require('../router');

class WebService extends Service {
    constructor(port) {
        super(8000, router);
        this.type = this.HTTP;
    }
}
module.exports = WebService;
