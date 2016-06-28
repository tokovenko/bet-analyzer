import {ConditionFilter} from './ConditionFilter';
import {BetResult} from './BetResult';
import {Match} from './Match';

abstract class Condition {

    public filters: Array<ConditionFilter> = [];

    abstract run(match: Match);

    public addFilter(filter: ConditionFilter) {
        this.filters.push(filter);
    }

    public clearFilters() {
        this.filters = [];
    }

    public getBetResult(result: boolean, koef: number, match: Match) {
        let betResult = new BetResult(result, koef, match);
        this.filters.map(filter => {
            if(betResult && !filter.run(match, koef)) {
                betResult = null;
            }
        });

        return betResult;
    }
}

export {Condition};
