let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://restcountries.com/v3.1/all');

xhr.onload = function () {
    let data = JSON.parse(xhr.responseText);
    let users = JSON.parse(xhr.responseText);
    let dataFlags = [];
    let userNames = [];

    for (let country of data) {
        dataFlags.push(country.flags.svg
        );
    }
      
    for (let user of users) {
        let countryName = user.name.common;
        let region = user.region;
        let subRegion = user.subregion;
        let population = user.population;
    
        userNames.push({ countryName, region, subRegion, population });
    }

console.log(dataFlags);

console.log(userNames);

};

xhr.send();