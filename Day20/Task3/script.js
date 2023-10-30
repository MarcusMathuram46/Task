// Define the constants and elements
const input = document.getElementById('input');
const button = document.getElementById('button');
const details = document.getElementById('details');

// Create a function to update the country details in the DOM
function countryDetail(data) {
  // Create elements for displaying the details
  const countryName = document.createElement('h2');
  countryName.innerText = `Country Name : ${data[0].name.common.toUpperCase()}`;

  const countryImage = document.createElement('img');
  countryImage.alt = `${data[0].flags.alt}`;
  countryImage.src = `${data[0].flags.png}`;

  const CountryCapital = document.createElement('p');
  CountryCapital.innerText = `Capital  : ${data[0].capital}`;

  const region = document.createElement("p");
  region.innerText = `Region  : ${data[0].region}`;

  const subRegion = document.createElement("p");
  subRegion.innerText = `Sub-Region  : ${data[0].subregion}`;

  const Population = document.createElement("p");
  Population.innerText = `Population  : ${data[0].population}`;

  // Append the elements to the 'details' container
  details.innerHTML = '';
  details.append(countryName, countryImage, CountryCapital, region, subRegion, Population);
}

// Create a function to fetch data from the API
function fetchData() {
  let data = input.value;
  input.value = '';
  fetch(`https://restcountries.com/v3.1/name/${data}`)
    .then((response) => response.json())
    .then((data) => {
      countryDetail(data);
    })
    .catch((error) => {
      alert('The data entered is not a valid country name');
    });
}

// Add an event listener to the button for fetching data
button.addEventListener('click', fetchData);
