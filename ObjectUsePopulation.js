let myCountry = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'Finnish',
    population: 6000000,
    neighbours: 3,
    summary: function () {
        return `${this.country} has ${this.population} ${this.language} speaking people, ${this.neighbours} neighbouring countries and a capital city called ${this.capital}`;
    },
    increasePop: function () {
        let incNum = Number(prompt(`By how much you wish to increase the population`));
        this.population = this.population + incNum;
        return this.population;
    },

    decreasePop: function () {
        let decNum = Number(prompt(`By how much you wish  to decrease the population`));
        this.population = this.population - decNum;
        return this.population;
    }
}

console.log(myCountry.summary());
console.log(myCountry.increasePop());
console.log(myCountry.decreasePop());
