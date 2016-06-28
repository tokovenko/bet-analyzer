class Match {

    constructor(
        public homeTeam: string,
        public guestTeam: string,
        public result: Array<any>,
        public koefWinHomeTeam: number,
        public koefDrow: number,
        public koefWinGuestTeam: number
    ) {
    }

    public isWinHomeTeam() {
        return this.result[0] > this.result[1];
    }

    public isWinGuestTeam() {
        return this.result[0] < this.result[1];
    }

    public isDrow() {
        return this.result[0] == this.result[1];
    }

    public isTotalBigger(total: number) {
        return (this.result[0] + this.result[1]) > total;
    }

}

export {Match};
