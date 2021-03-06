import {Condition} from './../Condition';
import {Match} from './../Match';

class DrowCondition extends Condition {

    public run(match: Match) {
        return this.getBet(match.isDrow(), match.koefDrow, match);
    }

}

export {DrowCondition};
