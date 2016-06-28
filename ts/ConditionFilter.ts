import {Match} from './Match';

abstract class ConditionFilter {

    abstract run(match: Match, koef: number)

}

export {ConditionFilter};
