import {ConditionFilter} from './ConditionFilter';
import {Bet} from './Bet';
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

    public getBet(result: boolean, koef: number, match: Match) {
        let bet = new Bet(result, koef, match);
        this.filters.map(filter => {
            if(bet && !filter.run(match, koef)) {
                bet = null;
            }
        });

        return bet;
    }
}

export {Condition};
