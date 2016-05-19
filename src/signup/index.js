let page = require('page');
let empty = require('empty-element');

let template = require('./template');

let main = document.getElementById('main-container');

page('/signup', (ctx, next) => {
  empty(main).appendChild(template);
});

