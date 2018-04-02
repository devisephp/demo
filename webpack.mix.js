let mix = require('laravel-mix');
var tailwindcss = require('tailwindcss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 require('./vendor/devisephp/cms/mix/DeviseMix');

 mix.webpackConfig({
     output: {
         publicPath: '/',
         chunkFilename: 'js/[name].[chunkhash].js',
     }
 });

 mix
  .sass('resources/assets/sass/app.scss', 'public/css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.js') ],
  })
  .deviseMix()
  .js('resources/assets/js/app.js', 'public/js');
