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

    mix.js('resources/assets/js/app.js', 'public/js')
    // When building out demo
    // mix.sass('resources/assets/sass/app.scss', 'public/css')
    // .options({
    //   processCssUrls: false,
    //   postCss: [ tailwindcss('./tailwind.js') ],
    // })
    // .copy('node_modules/font-awesome/fonts', 'public/fonts');
    // When working on Devise
    .options({
      processCssUrls: false,
      postCss: [ tailwindcss('./resources/assets/js/devise-dev/tailwind/tailwind.js') ],
    });
