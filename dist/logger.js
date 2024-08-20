"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startInterval = void 0;
const store_1 = require("./store");
function startInterval() {
    setInterval(() => {
        console.log(store_1.games);
    }, 5000);
}
exports.startInterval = startInterval;
