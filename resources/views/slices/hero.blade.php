@section('template')
  <hero :devise="devise"></hero>
@endsection

@section('component')
  <script>
    let module = {
      config: {
        title: {
          type: 'wysiwyg',
          label: 'Title'
        },
        subTitle: {
          type: 'wysiwyg',
          label: 'Sub-title'
        },
        backgroundColor: {
          type: 'color',
          label: 'Background Color'
        },
        color: {
          type: 'color',
          label: 'Text Color',
          default: '#fff'
        }
      },
      methods: {
        awesome: function() {

        }
      }
    }
  </script>
@endsection
