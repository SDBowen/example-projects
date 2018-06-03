const URL = 'https://randomuser.me/api/';
const profileImg = document.getElementById('avatar');
const fullName = document.getElementById('fullname');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const city = document.getElementById('city');

const button = document.getElementById('btn');

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.status);
  }
  return response;
}

function parseJSON(response) {
  return response.json().then(data => data.results[0]);
}

function updatedProfile(profileData) {
  const joinNames = `${profileData.name.first} ${profileData.name.last}`
  fullName.innerHTML = joinNames;
  profileImg.src = profileData.picture.medium;
  email.innerHTML = profileData.email;
  city.innerHTML = profileData.location.city;
  userName.innerHTML = profileData.login.username;
}

function printErrors(errorText) {
  console.log(errorText);
}

function getUserDetail() {
  fetch(URL)
    .then(handleErrors)
    .then(parseJSON)
    .then(updatedProfile)
    .catch(printErrors);
}

button.addEventListener('click', getUserDetail);
