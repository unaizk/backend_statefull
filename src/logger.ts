import { gameManager } from "./store";


export function startInterval(){
    setInterval(() =>{
        gameManager.log()
    },5000)
}
