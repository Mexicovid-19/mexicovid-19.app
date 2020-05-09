require('babel-register');
 
const router = require('./Router').default;
const Sitemap = require('../').default;
 
(
    new Sitemap(router)
        .build('https://mexicovid19.app')
        .save('./sitemap.xml')
);