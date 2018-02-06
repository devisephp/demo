@section('template')
@endsection

@section('component')
  <script>
    let module = {
      config: {
        name: {
          type: 'text',
          label: 'Name'
        },
        title: {
          type: 'text',
          label: 'Title'
        },
        description: {
          type: 'textarea',
          label: 'Description'
        },
        longDescription: {
          type: 'wysiwyg',
          label: 'Long Description'
        },
        html: {
          type: 'wysiwyg',
          label: 'HTML on right side'
        }
      }
    }
  </script>
@endsection
