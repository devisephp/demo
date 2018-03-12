<!doctype html>
<html lang="{{ app()->getLocale() }}">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta name="viewport" content="width=200">

    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">

    <title>Welcome to Devise Ocean Cruises</title>
  </head>
  <body>

    <div class="flex flex-col justify-center items-stretch w-full">
      <div id="app">
        <devise></devise>
      </div>

      <div class="p-8 md:p-12 lg:p-15 mt-10 sm:mt-0 w-full flex flex-col items-center" id="pricing">
        <div class="max-w-container">
          <h2 class="mb-12 text-blue-dark font-light text-center">Pricing as relaxing as our cruises</h2>

          <div class="flex flex-col md:flex-row justify-between align-stretch mb-8">
            <div class="w-full md:w-1/2 md:pr-4 flex">
              <div class="rounded-sm bg-grey-lighter p-8 text-blue-dark w-full">
                <h4 class="mb-8 font-light text-center">7-Day Cruise</h4>
                <div class="text-center text-5xl font-bold mb-8">
                  <small class="text-xs align-top mt-4 -mr-3 inline-block">$</small>
                  800
                  <sub class="text-sm align-baseline inline-block -ml-3">/ person</sub>
                </div>
                <p>The seven day cruise guarantees that you will have to work out for at least 20 days after you return home. It's incredible. Try the quiche.</p>
              </div>
            </div>

            <div class="w-full md:w-1/2 md:pl-4 flex">
              <div class="rounded-sm bg-blue-dark text-white p-8 w-full">
                <h4 class="mb-8 font-light text-center">14-Day Cruise</h4>
                <div class="text-center text-5xl font-bold mb-8">
                  <small class="text-xs align-top mt-4 -mr-3 inline-block">$</small>
                  1,800
                  <sub class="text-sm align-baseline inline-block -ml-3">/ person</sub>
                </div>
                <p class="text-white">Someone is not coming home alive. Have you seen that movie 47 meters down? *Spoilers* Yeah, that one girl totally get's it from the shark. </p>
              </div>
            </div>
          </div>

          <div class="flex justify-between">
            <div class="w-full md:w-1/2 text-center">
              <a href="#" class="btn">Let's Get Started</a>
            </div>
            <div class="w-1/2 text-center hidden md:block">
              <a href="#" class="btn">I'm So In</a>
            </div>
          </div>
        </div>
      </div>

    </div>

    <script type="text/javascript" src="http://localhost:8080/app.js"></script>
    <script src="{{ mix('/js/app.js') }}"></script>

  </body>
</html>
