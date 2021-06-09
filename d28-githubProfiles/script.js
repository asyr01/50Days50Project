// Our root url /username/repos will be concatenated to this.
const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);
    console.log(data);
  } catch (err) {
    console.log('user not found');
  }
}

getUser('asyr01');

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
