import {Match} from './Match';
import {Bet} from './Bet';

abstract class Strategy {

    public bank: number;
    public bets: Array<Bet> = [];
    public winBets: Array<Bet> = [];
    public loseBets: Array<Bet> = [];

    constructor(
        public startBank: number
    ) {
        this.bank = this.startBank
    }

    public winBet(bet: Bet) {
        this.addBet('win', bet);
    }

    public loseBet(bet: Bet) {
        this.addBet('lose', bet);
    }

    public addBet(type: string, bet: Bet) {
        bet.betSum = this.getBetSum();
        bet.bankBefore = this.bank;
        if(type=='win') {
            this.addMoneyToBank(bet.koef);
        } else {
            this.takeMoneyFromBank();
        }
        bet.bankAfter = this.bank;
        this.bets.push(bet);
        if(type=='win') {
            this.winBets.push(bet);
        } else {
            this.loseBets.push(bet);
        }
    }

    public addMoneyToBank(koef: number) {
        this.bank = this.bank + this.getBetSum() * koef;
    }

    public takeMoneyFromBank() {
        this.bank = this.bank - this.getBetSum();
    }

    abstract getBetSum()
}

export {Strategy}
