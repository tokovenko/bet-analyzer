import {Analizer} from './Analizer';
import {DogonStrategyWithLimit} from './strategies/DogonStrategyWithLimit';
import {Championship} from './Championship'
import {Season} from './Season';
import {WinGuestCondition} from './conditions/WinGuestCondition';
import {GuestTeamConditionFilter} from './conditions/filters/GuestTeamConditionFilter';
import {KoefMaxConditionFilter} from './conditions/filters/KoefMaxConditionFilter';

var analizer = new Analizer;


//win home
var strategy = new DogonStrategyWithLimit(2000);
strategy.setBetPercent(20);
strategy.setBetMaximum(700);
analizer.setStrategy(strategy);

analizer.setSeason(new Season('2011-2012', new Championship('england')));

var condition = new WinGuestCondition
analizer.setCondition(condition);
analizer.addConditionFilter(new GuestTeamConditionFilter(['Arsenal']));
//analizer.addConditionFilter(new KoefMaxConditionFilter(2.1));
//analizer.clearConditionsFilters();
analizer.run().then(strategy => {
    strategy.matches.map(BetResult => {
        console.log(
            BetResult.isBetWin,
            BetResult.match.homeTeam + ' - ' + BetResult.match.guestTeam,
            BetResult.match.result,
            'bet: ' + BetResult.betSum,
            'before: ' + BetResult.bankBefore,
            'after: ' + BetResult.bankAfter
        )
    })
});

//
// // Win home by name and another strategy
// var strategy = new DogonStrategyWithLimit(500);
// strategy.setBetPercent(10);
// strategy.setBetMaximum(500);
// analizer.setStrategy(strategy);
//
// var conditionFilter = new HomeTeamConditionFilter(['Arsenal'])
// analizer.addConditionFilter(conditionFilter);
//
// var result = analizer.run();
//





// var result = analizer.run();
// result.season;
// result.startBank;
// result.finishBank;
// result.matches;
// result.winMatches;
// result.loseMatches;
