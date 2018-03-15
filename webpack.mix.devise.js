let { mix } = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix
  .setPublicPath(path.normalize('public/assets/devise'))
  .js('resources/assets/js/app.js', 'public/js')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./resources/assets/js/devise-dev/tailwind/tailwind.js') ],
  });
