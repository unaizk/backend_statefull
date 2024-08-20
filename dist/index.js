"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const logger_1 = require("./logger");
(0, logger_1.startInterval)();
setInterval(() => {
    store_1.games.push({
        id: Math.random.toString(),
        whitePlayerName: "Unais",
        blackPlayerName: "Jinas",
        moves: []
    });
}, 5000);
console.log(Math.random().toString());
