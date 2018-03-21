@section('template')
  <div class="p-8 md:p-12 mt-10 sm:mt-0 w-full flex flex-col items-center text-center bg-grey-lightest" id="event-list">
    <div class="max-w-full md:max-w-container">
      <h2 class="mb-8 text-blue-dark font-light">Always something to do.</h2>
      <p>There is always things happening on Devise Cruises. Check out some of the events that will be happening in the upcoming weeks.</p>

      <div class="md:px-12">
        <carousel :navigationEnabled="true" :perPage="1" :perPageCustom="[[480, 1], [768, 3]]">
          <slide v-for="(event, key) in devise.slices" :key="key" class="py-6">
            <div class="bg-white rounded-sm shadow-lg p-8 mx-4 border-t-2 border-blue-dark">
              <h5 class="font-bold">@{{ event.name }}</h5>
              <p>@{{ event.date }}</p>
              <p>@{{ event.description }}</p>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
@endsection

@section('component')
  <script>
    let module = {
      config: {}
    }
  </script>
@endsection
