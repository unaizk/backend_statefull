import { games } from "./store";
import { startInterval } from "./logger";

startInterval();


setInterval(() =>{
    games.push({
        id : Math.random().toString(),
        whitePlayerName : "Unais",
        blackPlayerName : "Jinas",
        moves : []
    })
},5000)

