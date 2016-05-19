let page = require('page');
let empty = require('empty-element');
let title = require('title');

let template = require('./template');

let main = document.getElementById('main-container');

page('/signin', (ctx, next) => {
  title('Instagram Clone - Signin');
  empty(main).appendChild(template);
});
