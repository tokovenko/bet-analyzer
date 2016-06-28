import {Match} from './Match';
import {BetResult} from './BetResult';

abstract class Strategy {

    public bank: number;
    public matches: Array<BetResult> = [];
    public winMatches: Array<BetResult> = [];
    public loseMatches: Array<BetResult> = [];

    constructor(
        public startBank: number
    ) {
        this.bank = this.startBank
    }

    public winBet(betResult: BetResult) {
        betResult.betSum = this.getBetSum();
        betResult.bankBefore = this.bank;
        this.addMoneyToBank(betResult.koef);
        betResult.bankAfter = this.bank;
        this.matches.push(betResult);
        this.winMatches.push(betResult);
    }

    public loseBet(betResult: BetResult) {
        betResult.betSum = this.getBetSum();
        betResult.bankBefore = this.bank;
        this.takeMoneyFromBank();
        betResult.bankAfter = this.bank;
        this.matches.push(betResult);
        this.loseMatches.push(betResult);
    }

    abstract addMoneyToBank(koef: number)

    abstract takeMoneyFromBank()

    abstract getBetSum()
}

export {Strategy}
