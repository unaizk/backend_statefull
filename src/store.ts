interface Game  {
    id : string,
    blackPlayerName : string,
    whitePlayerName : string,
    moves : string[]
}

export class GameManager {
    games : Game[] = [];
    private static instance : GameManager

    private constructor(){
        this.games = []
    }

    static getInstance(){
        if(GameManager.instance){
            return GameManager.instance
        }

        GameManager.instance = new GameManager();
        return GameManager.instance
    }

    addMove(gameId : string,move : string){
        const game = this.games.find((game) => game.id === gameId);
        game?.moves.push(move)
    }

    addGame(gameId : string){
        const game = {
            id : gameId,
            whitePlayerName : "unais",
            blackPlayerName : "jinas",
            moves : []
        }

        this.games.push(game)
    }
    log(){
        console.log(this.games);
        
    }

}

export const gameManager = GameManager.getInstance();