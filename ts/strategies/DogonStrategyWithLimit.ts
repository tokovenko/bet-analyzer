import {Strategy} from './../Strategy';

class DogonStrategyWithLimit extends Strategy {

    public title: 'Dogon Strategy with limits';

    public betPercent: number = 10;
    public betMaximum: number = 500;

    public setBetPercent(percent: number) {
        this.betPercent = percent;
    }

    public setBetMaximum(maximum: number) {
        this.betMaximum = maximum;
    }

    public getBetSum() {
        let betSum = this.bank * (this.betPercent / 100);
        return betSum>this.betMaximum ? this.betMaximum : betSum;
    }
}

export {DogonStrategyWithLimit};
