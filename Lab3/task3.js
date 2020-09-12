class Tour{
    peoplesCount
    daysCount
    countryTariff
    totalTripCoast

    constructor(peoplesCount, daysCount, countryTariff){
        this.peoplesCount = peoplesCount
        this.daysCount = daysCount
        this.countryTariff = countryTariff
        this.totalTripCoast = this.getTripCost()
    }

    getTripCost = () => this.peoplesCount*this.daysCount*this.countryTariff
}

let turkeyTour = new Tour(3,7,10)
console.log(turkeyTour);