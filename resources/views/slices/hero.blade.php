@section('template')
  <hero :devise="devise"></hero>
@endsection

@section('component')
  <script>
    let module = {
      config: {
        title: {
          type: 'wysiwyg',
          label: 'title'
        }
      },
      methods: {
        awesome: function() {

        }
      }
    }
  </script>
@endsection
