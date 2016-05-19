let page = require('page');
let empty = require('empty-element');

let template = require('./template');

let main = document.getElementById('main-container');

page('/signin', (ctx, next) => {
  empty(main).appendChild(template);
});
