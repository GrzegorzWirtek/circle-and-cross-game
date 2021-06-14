import { data } from './Data.js';
import { game } from './Game.js';

class State{
    checkState(actualSign){
        data.counter++;
        for(let i=0; i<data.winningConfigurations.length; i++){
            if(
                data.elementsData[data.winningConfigurations[i][0]].status === actualSign &&
                data.elementsData[data.winningConfigurations[i][1]].status === actualSign &&
                data.elementsData[data.winningConfigurations[i][2]].status === actualSign
            ) {
                game.viewResults(actualSign);
                data.isGameEnd = true;
            };
        };
        if(data.counter === data.elementsData.length && !data.isGameEnd){
            game.viewResults(false);
        }
    }
}

export const state = new State();