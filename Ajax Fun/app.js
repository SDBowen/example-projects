const http = new easyHTTP();

// Get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, response) {
// if (err) {
// console.log(err);
// } else {
// console.log(response);
// }
// });

// Create data for POST
const data = {
  title: 'Custom Post',
  body: 'A custom post for testing'
};

// Create POST request
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(
//   err,
//   response
// ) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// Update
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(
// err,
// response
// ) {
// if (err) {
// consolse.log(err);
// } else {
// console.log(response);
// }
// });

// Delete
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
