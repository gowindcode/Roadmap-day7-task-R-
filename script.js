console.log("Rest countries data details");

 //this is for common check purpose, just getting and compare details of results

let country = new XMLHttpRequest();
country.open("GET", "https://restcountries.com/v3.1/all");
country.send();
console.log(country);
country.onload = function(){
    const data = JSON.parse(country.response);
    // console.log(data);
};
console.log("-----------------------------------------------------------------------------------------------");
console.log("-----------------------------------------------------------------------------------------------");
console.log("-----------------------------------------------------------------------------------------------");

// Fetch the data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {

       // a. Get all the countries from Asia continent/region using Filter function
       const asiaCountries = data.filter(country => country.region === 'Asia');

       // Sort asiaCountries by country name
       asiaCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
   
       // c. Print the following details name, capital, flag, using forEach function
       console.log("Details of countries from Asia continent total =", asiaCountries.length, "(sorted by country name)");
       asiaCountries.forEach(country => {
         console.log(`Asian continental Countries Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}`);
       });

    console.log("-----------------------------------------------------------------------------------------------");

    // b. Get all the countries with a population of less than or equal to 2 lakhs using Filter function
    const lowPopulationCountries = data.filter(country => country.population <= 200000);

    // Sort lowPopulationCountries by country name
    lowPopulationCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));

    // c. Print the following details name, capital, flag, using forEach function
    console.log('Details of countries with population less than or equal to 2 lakhs (sorted by country name):');
    lowPopulationCountries.forEach(country => {
      console.log(`Country Name: ${country.name.common} <~~~~~> Capital: ${country.capital} <~~~~~> Total Population: ${country.population}`);
    });

    
    console.log("-----------------------------------------------------------------------------------------------");
    // c. Print the following details name, capital, flag, using forEach function
    console.log('Following details Country name, capital, flag, using forEach functions:');
    data.forEach(country => {
      console.log(`Country Name: ${country.name.common} <==> Capital: ${country.capital} <==> Flag: ${country.flags.svg}`);
    });

    console.log("-----------------------------------------------------------------------------------------------");

    // d. Print the total population of countries using reduce function
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log('All countries Total Population is:', totalPopulation);

    console.log("-----------------------------------------------------------------------------------------------");

     // e. Print the country that uses US dollars as currency
     const usDollarCountries = data.filter(country => country.currencies && country.currencies.USD || country.currencies === "United States dollar");

     // Print details of countries using US Dollars as currency
     console.log('Details of countries that use US Dollars as currency:');
     usDollarCountries.forEach(country => {
     console.log(`Country Name: ${country.name.common}, Currency: $ - United States dollar`);
    });


  })
  .catch(error => console.error('Error fetching data: The following errors may be happen while code, please check your code once again...', error));

 
