export const FREE = 'free';
export const CIRCLE = 'circle';
export const CROSS = 'cross';
export const BOARDS_ELEMENTS_CLASS = '.game__item';
export const GAME_ACTUAL_MOVE_ELEMENT_CLASS= '.game__move-image';
export const ITEM_HOVER = 'game__item--hover';
export const RESULTS_TEXT_ELEMENT_CLASS = '.game__results-text';
export const BUTTON_PLAY_AGAIN_CLASS = '.game__play-again';
export const HIDDEN = 'hidden'

class Data{
    constructor(){
        this.actualSign = CIRCLE;
        this.isGameEnd = false;
        this.counter = 0;
        this.elementsData = [
            {number: 0, status: FREE},
            {number: 1, status: FREE},
            {number: 2, status: FREE},
            {number: 3, status: FREE},
            {number: 4, status: FREE},
            {number: 5, status: FREE},
            {number: 6, status: FREE},
            {number: 7, status: FREE},
            {number: 8, status: FREE}
        ];
        this.winningConfigurations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
    }
}

export const data = new Data();