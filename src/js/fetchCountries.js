const BASE_URL = 'https://restcountries.com/v2/name';

function fetchCountries(searchQuery) {
  return fetch(`${BASE_URL}/${searchQuery}`).then(response => {
    return response.json();
  });
}
export default { fetchCountries };
