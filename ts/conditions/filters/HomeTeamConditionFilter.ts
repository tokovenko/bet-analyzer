import {ConditionFilter} from './../../ConditionFilter';
import {Match} from './../../Match';

class HomeTeamConditionFilter extends ConditionFilter {

    constructor(
        public teamsNames: Array<string>
    ) {
        super();
    }

    public run(match: Match, koef: number) {
        return this.teamsNames.indexOf(match.homeTeam)>-1;
    }

}

export {HomeTeamConditionFilter};
