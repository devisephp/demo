let { mix } = require('laravel-mix');
let tailwindcss = require('tailwindcss');
require('laravel-mix-auto-extract');

mix.webpackConfig({
    output: {
        publicPath: '/',
        chunkFilename: 'js/[name].[chunkhash].js',
    }
});

mix
  .setPublicPath(path.normalize('public/devise'))
  .js('resources/assets/js/app.js', 'js')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('./resources/assets/js/devise-dev/src/tailwind/tailwind.js') ],
  })
  .autoExtract()
  .copy('node_modules/font-awesome/fonts', 'public/fonts')
  .version()
