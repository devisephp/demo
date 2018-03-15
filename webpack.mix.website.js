let { mix } = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix
  .setPublicPath(path.normalize('public/assets/website'))
  .sass('resources/assets/sass/app.scss', 'public/css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./tailwind.js') ],
  })
  .browserSync('devise2-demo.test/');
