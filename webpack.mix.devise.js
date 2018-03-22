let { mix } = require('laravel-mix');
let tailwindcss = require('tailwindcss');

mix
  // .setPublicPath(path.normalize('public/devise'))
  .js('resources/assets/js/app.js', 'js')
  // .sass('resources/assets/js/devise-dev/src/sass/devise.scss', 'css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./resources/assets/js/devise-dev/src/tailwind/tailwind.js') ],
  })
  .version()
  .copy('node_modules/font-awesome/fonts', 'public/fonts');
