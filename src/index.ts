import { gameManager } from "./store";
import { startInterval } from "./logger";

startInterval();


setInterval(() =>{
    gameManager.addGame(Math.random().toString())
},5000)

