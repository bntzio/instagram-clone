let page = require('page');
let title = require('title');

let main = document.getElementById('main-container');

page('/', (ctx, next) => {
  title('Instagram Clone');
  main.innerHTML = '<a href="/signup">Signup</a>';
});
