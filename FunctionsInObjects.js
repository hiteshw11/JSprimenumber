let JonasLife2 = {
    firstName: 'Jonas',
    lastName: 'Smith',
    birthYear: 1991,
    dirversLicense: true,
    calcAgeNow: function () {
        this.ageNow = 2037 - this.birthYear;
        return this.ageNow;
    },
    getSummary: function () {
        this.calcAgeNow();
        //this.calcOwnsLicesne();
        this.dirversLicense == true ? console.log(`${this.firstName} is ${this.ageNow} years old and has driving license`) : console.log(`${this.firstName} is ${this.ageNow} years old and does not has driving license`);
    }
}

JonasLife2.getSummary();
