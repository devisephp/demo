let { mix } = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix
  .setPublicPath(path.normalize('public/devise-assets/devise'))
  .js('resources/assets/js/app.js', 'js')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./resources/assets/js/devise-dev/tailwind/tailwind.js') ],
  })
  .copy('node_modules/font-awesome/fonts', 'public/fonts');
