const result = document.getElementById('result');
const filter = document.getElementById('filter');

// Data we fetched will be stored in that array
const listItems = [];

getData();

// Get data from randomuser.me api and insert data to DOM
async function getData() {
  const res = await fetch('https://randomuser.me/api/?results=50');
  const { results } = await res.json();

  // Clear results
  result.innerHTML = '';
  // results which came from api, destructuring applied at the above
  results.forEach((user) => {
    let country = user.location.country;
    let countryCAP = country.toUpperCase();
    const li = document.createElement('li');
    listItems.push(li);
    li.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info">
     <h4>${user.name.first} ${user.name.last}</h4>
     <p>${user.location.city}, ${countryCAP}</p>
     </div>
    `;
    result.appendChild(li);
  });
}
