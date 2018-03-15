let { mix } = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix
  .setPublicPath(path.normalize('public/assets/website'))
  .sass('resources/assets/sass/app.scss', 'public/css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.js') ],
  })
  .copy('node_modules/font-awesome/fonts', 'public/fonts');
