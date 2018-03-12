@section('template')
  <li class="relative z-20"><a href="{{ devise.url }}" class="no-underline mx-8">{{ devise.name }}</a></li>
@endsection

@section('component')
  <script>
    let module = {
      config: {}
    }
  </script>
@endsection
