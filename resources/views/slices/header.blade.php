@section('template')
  <div class="flex flex-col justify-center items-stretch w-full">
    <div class="pin-l pin-r pin-t z-20" id="headroom">
      <ul class="desktop-nav hidden md:flex list-reset font-normal uppercase text-sm justify-end p-8">
        <slices :devise="devise"/>
      </ul>
      <ul class="mobile-nav flex md:hidden flex-col bg-white list-reset font-normal uppercase text-sm justify-end p-8">
        <slices :devise="devise"/>
      </ul>
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
