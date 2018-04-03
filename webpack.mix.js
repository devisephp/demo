let mix = require('laravel-mix');
var tailwindcss = require('tailwindcss');

require('./vendor/devisephp/cms/mix/DeviseMix');

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


// mix.webpackConfig({
//     output: {
//         chunkFilename: 'js/[name].[chunkhash].js',
//     },
// });

mix
  .sass('resources/assets/sass/app.scss', 'public/css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.js') ],
  })
  .deviseMix()
  .js('resources/assets/js/app.js', 'public/js');
