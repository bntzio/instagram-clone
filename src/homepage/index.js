let page = require('page');

let main = document.getElementById('main-container');

page('/', (ctx, next) => {
  main.innerHTML = '<a href="/signup">Signup</a>';
});

