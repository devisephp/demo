@section('template')
  <hero :devise="devise"></hero>
@endsection

@section('component')
  <script>
    let module = {
      name: 'HeroSlice',
      config: {
        title: {
          type: 'wysiwyg',
          label: 'title'
        }
      }
    }
  </script>
@endsection
