<!doctype html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    {{-- Turn the following on when / if you are working on the styles of the demo site --}}
    {{-- <link rel="stylesheet" href="{{ mix('/css/app.css') }}"> --}}
    
    {{-- Turn the following on for production / working on Vue Devise --}}
    <link rel="stylesheet" href="/css/app.css">

    <title>Welcome to Trade</title>
    <script>
      <?= Devise::pageData($page) ?>
      <?= Devise::components() ?>
    </script>
  </head>
  <body>
    <div class="flex flex-col justify-center items-stretch w-full">
      <div class="fixed pin-l pin-r pin-t z-20" id="headroom">
        <ul class="flex list-reset font-normal uppercase text-sm justify-end p-8">
          <li class="relative z-20"><a href="#hero" class="no-underline mx-8">Home</a></li>
          <li class="relative z-20"><a href="#experience" class="no-underline mx-8">Experiences</a></li>
          <li class="relative z-20"><a href="#about" class="no-underline mx-8">About</a></li>
          <li class="relative z-20"><a href="#purchase" class="no-underline mx-8">Purchase</a></li>
          <li class="relative z-20"><a href="/admin/login" class="no-underline mx-8">Login</a></li>
        </ul>
      </div>

      <div id="app">
        <devise></devise>
      </div>
    </div>

    <script src="{{ mix('/js/app.js') }}"></script>

  </body>
</html>
