import {Condition} from './../Condition';
import {Match} from './../Match';

class WinHomeCondition extends Condition {

    public run(match: Match) {
        return this.getBet(match.isWinHomeTeam(), match.koefWinHomeTeam, match);
    }

}

export {WinHomeCondition};
