import { data, FREE, GAME_ACTUAL_MOVE_ELEMENT_CLASS, BOARDS_ELEMENTS_CLASS, RESULTS_TEXT_ELEMENT_CLASS, ITEM_HOVER, BUTTON_PLAY_AGAIN_CLASS, HIDDEN } from './Data.js';
import { Select } from './Select.js';

class Game{
    constructor(){
        this.actualMoveElement = document.querySelector(GAME_ACTUAL_MOVE_ELEMENT_CLASS);
        this.resultsTextElement = document.querySelector(RESULTS_TEXT_ELEMENT_CLASS);
        this.playAgainButton = document.querySelector(BUTTON_PLAY_AGAIN_CLASS);
        this.items = document.querySelectorAll(BOARDS_ELEMENTS_CLASS);
        this.selectItem();
    };

    selectItem(){
        this.items.forEach((element, index)=>{
            element.addEventListener('click', () => new Select(element, index));
        });
    };

    viewResults(actualSign){
        if(actualSign){
            this.resultsTextElement.textContent = `A ${actualSign} won!`;
            this.items.forEach(item => this.removeHoverClass(item));
        } else{
            this.resultsTextElement.textContent = `Is a draw!`;
        }
        this.removeHiddenClass(this.playAgainButton);
        this.playAgain();
    }

    removeHoverClass(element){ 
        element.classList.remove(ITEM_HOVER);
    }

    addHoverClass(element){ 
        element.classList.add(ITEM_HOVER);
    }

    removeHiddenClass(element){
        element.classList.remove(HIDDEN);
    }

    addHiddenClass(element){
        element.classList.add(HIDDEN);
    }

    playAgain(){
        this.playAgainButton.addEventListener('click', () => this.resetGame());
    }

    changeActualMoveImage(){
        this.actualMoveElement.style.backgroundImage = `url('assets/${data.actualSign}.jpg')`;   
    }

    resetGame(){
        this.addHiddenClass(this.playAgainButton);
        this.resultsTextElement.textContent = '';
        this.items.forEach(item => {
            item.style.backgroundImage = 'none';
            this.addHoverClass(item);
        });
        data.isGameEnd = false;
        data.elementsData.forEach(item => item.status = FREE);
        data.counter = 0;
    }
};

export const game = new Game();
