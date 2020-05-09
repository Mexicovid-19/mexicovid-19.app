import { sitemapBuilder as buildSitemap } from 'react-router-sitemap';
import routes from './routes';
import path from 'path'; // add path which will be needed for file write
import fs from 'fs'; // import file system object

// use your website root address here. Optimally you can
// include dev and production enviorenments with variables
const hostname = 'https://mexicovid19.app'; 

// define our destination folder and sitemap file name
const dest = path.resolve('./public', 'sitemap.xml');

const sitemap = buildSitemap(hostname, routes);

// write sitemap.xml file in /public folder
// Access the sitemap content by converting it with .toString() method
fs.writeFileSync(dest, sitemap.toString())
