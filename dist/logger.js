"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startInterval = void 0;
const store_1 = require("./store");
function startInterval() {
    setInterval(() => {
        store_1.gameManager.log();
    }, 5000);
}
exports.startInterval = startInterval;
