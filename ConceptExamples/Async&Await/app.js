async function getUsers() {
  // await fetch call response
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // Proceed when above promise is resolved
  const data = await response.json();
  // Proceed when second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));


