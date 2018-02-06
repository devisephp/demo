@section('template')
  <div>
    <h5 class="text-blue-dark mb-4">@{{ devise.fields.title.text }}</h5>
    <p>@{{ devise.fields.description.text }}</p>
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
        paragraph: {
          type: 'wysiwyg',
          label: 'Paragraph below the title',
        }
      }
    }
  </script>
@endsection
