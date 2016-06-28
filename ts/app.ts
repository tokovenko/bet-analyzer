import {Analyzer} from './Analyzer';
import {DogonStrategyWithLimit} from './strategies/DogonStrategyWithLimit';
import {Championship} from './Championship'
import {Season} from './Season';
import {WinGuestCondition} from './conditions/WinGuestCondition';
import {GuestTeamConditionFilter} from './conditions/filters/GuestTeamConditionFilter';
import {KoefMaxConditionFilter} from './conditions/filters/KoefMaxConditionFilter';

var analyzer = new Analyzer;

var strategy = new DogonStrategyWithLimit(2000);
strategy.setBetPercent(20);
strategy.setBetMaximum(700);
analyzer.setStrategy(strategy);

analyzer.setSeason(new Season('2011-2012', new Championship('england')));

var condition = new WinGuestCondition;
analyzer.setCondition(condition);
analyzer.addConditionFilter(new GuestTeamConditionFilter(['Arsenal']));
//analizer.addConditionFilter(new KoefMaxConditionFilter(2.1));
//analizer.clearConditionsFilters();

analyzer.run().then(strategy => {
    strategy.bets.map(bet => {
        console.log(
            bet.isBetWin,
            bet.match.homeTeam + ' - ' + bet.match.guestTeam,
            bet.match.result,
            'bet: ' + bet.betSum,
            'before: ' + bet.bankBefore,
            'after: ' + bet.bankAfter
        )
    })
});
