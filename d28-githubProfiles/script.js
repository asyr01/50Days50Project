// Our root url /username/repos will be concatenated to this.
const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getUser('asyr01');

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    console.log(data);
    createUserCard(data);
  } catch (err) {
    // If a user not found then call createErrorCard
    if (err.response.status == 404) {
      createErrorCard('No profile with that user name');
    }
  }
}

function createUserCard(user) {
  const cardHTML = `<div class="card">
    <div>
      <img
        src="${user.avatar_url}"
        alt="${user.name}"
        class="avatar"
      />
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>
      ${user.bio}
      </p>
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repositories</strong></li>
      </ul>
      <div id="repos"></div>
    </div>
  </div>`;

  main.innerHTML = cardHTML;
}

// Shows an error to user when user not found
function createErrorCard(msg) {
  const cardHTML = `
     <div class="card">
       <h1>${msg}</h1>
     </div> 
    `;
  main.innerHTML = cardHTML;
}

// It could be a keydown or change event but this will make a request every time
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = search.value;
  // if there is a user -text inside the box- make request
  if (user) {
    getUser(user);
    search.value = '';
  }
});
