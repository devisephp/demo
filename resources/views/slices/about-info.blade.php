@section('template')
  <div class="mb-8 mr-4">
    <h5 class="text-blue-dark mb-4">@{{ devise.fields.title.text }}</h5>
    <div class="text-grey-dark leading-normal" v-html="devise.fields.description.text"></div>
  </div>
@endsection

@section('component')
  <script>
    let module = {
      config: {
        title: {
          type: 'text',
          label: 'Header',
          maxlength: 120
        },
        description: {
          type: 'wysiwyg',
          label: 'Paragraph below the title',
        }
      }
    }
  </script>
@endsection
