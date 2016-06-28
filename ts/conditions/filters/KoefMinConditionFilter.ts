import {ConditionFilter} from './../../ConditionFilter';
import {Match} from './../../Match';

class KoefMinConditionFilter extends ConditionFilter {

    constructor(
        public koefMin: number
    ) {
        super();
    }

    public run(match: Match, koef: number) {
        return koef > this.koefMin;
    }

}

export {KoefMinConditionFilter};
