import { data, FREE, CIRCLE, CROSS } from './Data.js';
import { state } from './State.js';
import { game } from './Game.js';

export class Select{
    constructor(element, index){
        this.element = element;
        this.index = index;
        this.actualSign = data.actualSign;
        this.selectItem();
    }
    selectItem(){
        if(data.isGameEnd){
            return;
        }
        if(data.elementsData[this.index].status === FREE){
            data.elementsData[this.index].status = this.actualSign; 
            this.changeImage();
            game.removeHoverClass(this.element);
            state.checkState(this.actualSign);  
        }
    }

    changeImage(){
        this.element.style.backgroundImage = `url('assets/${this.actualSign}.jpg')`;
        data.actualSign === CROSS?
            data.actualSign = CIRCLE
            : data.actualSign = CROSS;
        game.changeActualMoveImage();
    }
}
