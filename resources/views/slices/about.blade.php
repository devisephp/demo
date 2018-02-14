@section('template')
  <div class="p-8 md:p-12 lg:p-15 mt-10 sm:mt-0 w-full bg-grey-lightest flex flex-col items-center" id="about">
    <div class="max-w-container text-left">
      <h2 class="mb-8 text-blue-dark">@{{ devise.fields.title.text }}</h2>

      <div class="w-4/5 text-grey-dark leading-normal" v-html="devise.fields.paragraph.text"></div>

      <slices class="mt-10 flex flex-col md:flex-row" :devise="devise"/>
    </div>
  </div>
@endsection

@section('component')
  <script>
    let module = {
      config: {
        title: {
          type: 'text',
          label: 'Header',
          maxlength: 120,
        },
        paragraph: {
          type: 'wysiwyg',
          label: 'Paragraph below the title'
        },
        hideParagraph: {
          type: 'checkbox'
        }
      }
    }
  </script>
@endsection
