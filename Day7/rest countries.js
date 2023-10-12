// Fetch the data from the REST API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // Get all the countries from Asia continent using filter
    const countriesInAsia = data.filter(country => country.region === 'Asia');
    
    // Get all the countries with a population of less than 2 lakhs using filter
    const countriesWithLowPopulation = data.filter(country => country.population < 200000);

    // Print the following details for each country using forEach
    countriesInAsia.forEach(country => {
      console.log(`Name: ${country.name.common}`);
      console.log(`Capital: ${country.capital}`);
      console.log(`Flag: ${country.flags.png}`);
    });

    // Print the total population of countries using reduce
    const totalPopulation = data.reduce((accumulator, country) => accumulator + country.population, 0);
    console.log(`Total Population: ${totalPopulation}`);

    // Find the country which uses US Dollars as currency
    const countryWithUSD = data.find(country => country.currencies && country.currencies.USD);
    if (countryWithUSD) {
      console.log(`Country using US Dollars as currency: ${countryWithUSD.name.common}`);
    } else {
      console.log("No country uses US Dollars as currency.");
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

