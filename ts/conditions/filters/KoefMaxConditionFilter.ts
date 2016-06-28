import {ConditionFilter} from './../../ConditionFilter';
import {Match} from './../../Match';

class KoefMaxConditionFilter extends ConditionFilter {

    constructor(
        public koefMax: number
    ) {
        super();
    }

    public run(match: Match, koef: number) {
        return koef < this.koefMax;
    }

}

export {KoefMaxConditionFilter};
