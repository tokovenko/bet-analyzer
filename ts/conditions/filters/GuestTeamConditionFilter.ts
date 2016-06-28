import {ConditionFilter} from './../../ConditionFilter';
import {Match} from './../../Match';

class GuestTeamConditionFilter extends ConditionFilter {

    constructor(
        public teamsNames: Array<string>
    ) {
        super();
    }

    public run(match: Match, koef: number) {
        return this.teamsNames.indexOf(match.guestTeam)>-1
    }

}

export {GuestTeamConditionFilter};
