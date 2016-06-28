import {Strategy} from './../Strategy';

class DogonStrategy extends Strategy {

    public title: 'Dogon Strategy';

    public betPercent: number = 10;

    public setBetPercent(percent: number) {
        this.betPercent = percent;
    }

    public getBetSum() {
        return this.bank * (this.betPercent/100);
    }
}

export {DogonStrategy};
