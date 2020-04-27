"use strict";
const { Manager } = require('@roqueando/nous');
const manager = new Manager(8080);
manager.run();

console.log('running manager on 8080');
