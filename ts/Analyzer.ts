import {Season} from './Season';
import {Strategy} from './Strategy';
import {Condition} from './Condition';
import {ConditionFilter} from './ConditionFilter';

class Analyzer {

    public season: Season;
    public strategy: Strategy;
    public condition: Condition;

    public setSeason(season: Season) {
        this.season = season;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setCondition(condition: Condition) {
        this.condition = condition;
    }

    public addConditionFilter(conditionFilter: ConditionFilter) {
        this.condition.addFilter(conditionFilter);
    }

    public clearConditionsFilters() {
        this.condition.clearFilters();
    }

    public run() {
        var promise = new Promise<Strategy>((resolve, reject) => {
            this.season.loadMatches().then(matches => {
                matches.map(match => {
                    let bet = this.condition.run(match);
                    if(bet) {
                        if(bet.isBetWin) {
                            this.strategy.winBet(bet);
                        } else {
                            this.strategy.loseBet(bet);
                        }
                    }
                });
                resolve(this.strategy);
            });
        });

        return promise;
    }

}


export {Analyzer};
