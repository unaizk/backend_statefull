import { games } from "./store";


export function startInterval(){
    setInterval(() =>{
        console.log(games); 
    },5000)
}
