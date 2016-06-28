import {Condition} from './../Condition';
import {Match} from './../Match';

class WinGuestCondition extends Condition {

    public run(match: Match) {
        return this.getBetResult(match.isWinGuestTeam(), match.koefWinGuestTeam, match);
    }

}

export {WinGuestCondition};
