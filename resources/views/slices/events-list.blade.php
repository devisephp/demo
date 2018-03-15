@section('template')
  <div class="text-center py-12">
    <h2 class="mb-12 text-blue-dark font-light">Always something to do.</h2>

    <div>
      <carousel :paginationEnabled="true" :perPage="3">
        <slices :devise="devise"/>
      </carousel>
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
