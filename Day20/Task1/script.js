class CarBrandsApp {
    constructor() {
        this.apiUrl = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';
        this.carBrandsList = document.getElementById('carBrandsList');
    }

    // Fetch car brands from the API using async/await
    async fetchCarBrands() {
        try {
            const response = await fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw error;
        }
    }

    // Render car brands on the webpage
    renderCarBrands(carBrands) {
        const fragment = document.createDocumentFragment();
        carBrands.forEach(brand => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = `${brand.nome} (${brand.codigo})`;
            fragment.appendChild(listItem);
        });
        this.carBrandsList.innerHTML = ''; // Clear previous content
        this.carBrandsList.appendChild(fragment);
    }

    // Handle errors and display a message
    handleFetchError(error) {
        console.error('Error fetching data:', error);
        this.carBrandsList.innerHTML = '<li class="list-group-item text-danger">Error fetching data. Please try again later.</li>';
    }

    // Initialize the application
    async init() {
        try {
            const carBrands = await this.fetchCarBrands();
            this.renderCarBrands(carBrands);
        } catch (error) {
            this.handleFetchError(error);
        }
    }
}

// Create an instance of the CarBrandsApp and initialize
const carBrandsApp = new CarBrandsApp();
document.addEventListener('DOMContentLoaded', () => {
    carBrandsApp.init();
});
