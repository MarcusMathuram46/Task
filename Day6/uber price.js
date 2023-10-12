class UberCalculator {
    constructor(baseFare, costPerKm, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerKm = costPerKm;
      this.costPerMinute = costPerMinute;
    }
  
    calculatePrice(distanceInKm, timeInMinutes) {
      const distanceCost = this.costPerKm * distanceInKm;
      const timeCost = this.costPerMinute * timeInMinutes;
      const totalCost = this.baseFare + distanceCost + timeCost;
      return totalCost;
    }
  }
  
  // Create an instance of the UberCalculator class

  const uberCalculator = new UberCalculator(20, 10, 5);
  
  // Calculate the Uber price for a 20 km distance and 40 minutes

  const distance = 20; // in km
  const time = 40; // in Minutes
  const price = uberCalculator.calculatePrice(distance, time);
  
  console.log(`Uber Price: Rs${price.toFixed(2)}`);
  