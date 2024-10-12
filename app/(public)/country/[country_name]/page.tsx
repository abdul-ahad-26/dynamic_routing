function CountryName({ params }: { params: { country_name: string } }) {
  let name: string = "";
  let capital: string = "";
  let population: number = 0;

  const countries = [
    {
      name: "Pakistan",
      capital: "Islamabad",
      population: 30000000,
    },
    {
      name: "India",
      capital: "New Delhi",
      population: 1300000000,
    },
    {
      name: "China",
      capital: "Beijing",
      population: 1400000000,
    },
    {
      name: "Afghanistan",
      capital: "Kabul",
      population: 40000000,
    },
    {
      name: "Iran",
      capital: "Tehran",
      population: 80000000,
    },
  ];
  const country = countries.find(
    (country) => country.name.toLocaleLowerCase() === params.country_name
  );

  if (country) {
    name = country.name;
    capital = country.capital;
    population = country.population;
    return (
      <div>
        <ul>
          <li>
            <b>Country Name</b>: {name}
          </li>
          <br />
          <li>
            <b>Capital</b>: {capital}
          </li>
          <br />
          <li>
            <b>Population</b>: {population}
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <p>country not found</p>
      </div>
    );
  }
}

export default CountryName;
