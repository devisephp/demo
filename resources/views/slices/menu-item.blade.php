@section('template')
  <li class="mb-2 md:mb-0 relative z-20"><a :href="devise.url" class="no-underline mx-8">@{{ devise.name }}</a></li>
@endsection

@section('component')
  <script>
    let module = {
      config: {}
    }
  </script>
@endsection
