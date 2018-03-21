@section('template')
  <slide>
    <div class="bg-white rounded-sm shadow-lg p-8 mx-4 border-t-2 border-blue-dark">
      <h5>@{{ devise.name }}</h5>
      <p>@{{ devise.date }}</p>
      <p>@{{ devise.description }}</p>
    </div>
  </slide>
@endsection

@section('component')
  <script>
    let module = {
      config: {}
    }
  </script>
@endsection
