
import {Championship} from './Championship'
import {Match} from './Match'

type MatchesList = Array<Match>;

class Season {
    public matches: Array<Match> = [];

    constructor(
        public name: string,
        public championship: Championship) {
    }

    public loadMatches() {

        var promise = new Promise<MatchesList>((resolve, reject) => {
            var xmlhttp = new XMLHttpRequest();
            var url = `matches/${this.championship.name.toLowerCase()}/${this.name}.json`;

            xmlhttp.onreadystatechange = () => {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    let matches: Array<Match> = [];
                    let list = JSON.parse(xmlhttp.responseText);
                    list.map(match => {
                        matches.push(new Match(
                            match.teams[0],
                            match.teams[1],
                            match.score,
                            match.koef.w1,
                            match.koef.x,
                            match.koef.w2
                        ));
                    });
                    resolve(matches);
                }
            };

            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        })

        return promise;
    }
}

export {Season};
