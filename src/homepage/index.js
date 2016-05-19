let page = require('page');
let empty = require('empty-element');
let title = require('title');

let template = require('./template');

let main = document.getElementById('main-container');

page('/', (ctx, next) => {
  title('Instagram Clone');
  empty(main).appendChild(template);
});
