@section('template')
  <div class="p-8 md:p-12 lg:p-15 mt-10 sm:mt-0 w-full bg-grey-lightest flex flex-col items-center" id="about">
    <div class="max-w-container text-left">
      <h2 class="mb-8 text-blue-dark">About Devise Sea Cruises</h2>

      <p class="w-4/5 text-blue-grey">@{{ devise.fields.paragraph.text }}</p>

      <div class="mt-10 flex flex-col md:flex-row">
        <slice v-for="(s, key) in devise.slices" :key="key" :slice="s" class="md:pr-8 mb-8 w-full md:w-1/3"/>
      </div>
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
