import {Match} from './Match';

class Bet {
    public bankBefore: number;
    public bankAfter: number;
    public betSum: number;

    constructor(
        public isBetWin: boolean,
        public koef: number,
        public match: Match
    ) {
    }
}

export {Bet};
