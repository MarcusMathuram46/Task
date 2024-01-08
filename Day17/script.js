let container = document.createElement('div');
container.className = 'container';

let innerCont = document.createElement('div');
innerCont.className = 'row';
innerCont.id = 'innerCont';

container.appendChild(innerCont);
document.body.appendChild(container);

document.addEventListener("DOMContentLoaded", function () {
    let inCont = document.getElementById('innerCont');
    fetch("https://restcountries.com/v3.1/all")
        .then(resp => resp.json())
        .then(data => {
            data.forEach(country => {
                let card = document.createElement('div');
                card.classList.add('col-lg-4', 'col-sm-12', 'card-group', 'mt-4');

                let cardBody = document.createElement('div');
                cardBody.classList.add('bg-info', 'card', 'card-header', 'card-body');

                card.appendChild(cardBody);
                inCont.appendChild(card);

                let countryName = country.name.common;
                let capital = country.capital ? country.capital[0] : 'NA';
                let region = country.region;
                let countryCode = country.cca2;
                let flag = country.flags.png;

                cardBody.innerHTML = `
                    <h1 class="card-head d-flex justify-content-center mt-2">${countryName}</h1>
                    <img src="${flag}" class="card-img">
                    <h3 class="card-text d-flex justify-content-center mt-3"> Capital: ${capital}</h3>
                    <h3 class="card-text d-flex justify-content-center mt-2"> Region : ${region}</h3>
                    <h3 class="card-text d-flex justify-content-center mt-2"> Country Code : ${countryCode}</h3>
                    <button class="btn btn-success rounded-5 mt-3 btn btn-outline-warning btn btn-primary btn-lg" id="btn">Weather Information</button>
                    <div class='mt-3 d-flex justify-content-center' id='res'></div>`;

                let btn = cardBody.querySelector('#btn');
                let res = cardBody.querySelector('#res');

                btn.addEventListener('click', () => {
                    const apiKey = "52cec576c37b154af74cc701da1bd04d";

                    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`)
                        .then(resp => resp.json())
                        .then(data => {
                            let temperature = data.main.temp;
                            res.innerHTML = `<h1 card-text>Temeperature : ${temperature}℃ </h1>`;
                        })
                        .catch(error => {
                            res.innerHTML = `<h3 card-text>Temperature : No Data Found</h3>`;
                        });
                });
            });
        })
        .catch((error) => {
            console.log('Error : ', error);
        });
});
