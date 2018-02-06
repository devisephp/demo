@section('template')
  <div class="p-8 md:p-12 lg:p-12 mt-10 sm:mt-0 bg-grey-lightest flex flex-col items-center">
    <div class="max-w-container">
      <div class="flex justify-between items-stretch flex-col sm:flex-row card shadow-lg rounded-lg bg-white">
        <div class="w-full sm:w-3/5 mb-10 sm:mb-0 sm:mr-10 p-12">
          <h3 class="text-blue-dark mb-4 font-light">
            @{{ devise.fields.header.text }}
          </h3>
          <div v-html="devise.fields.paragraph.text"></div>
        </div>
        <div class="min-w-xs w-3/5 md:w-3/5 lg:w-3/5 xl:w-2/5 xxl:w-1/5 sm:ml-8 bg-cover rounded-r-lg" :style="{ backgroundImage: 'url(' + devise.fields.image.url + ')'}"></div>
      </div>
    </div>
  </div>
@endsection

@section('component')
  <script>
    let module = {
      name: 'LeftSideWithCard',
      config: {
        title: {
          type: 'text',
          label: 'Header',
          maxlength: 120
        },
        paragraph: {
          type: 'wysiwyg',
          label: 'Paragraph below the title',
        },
        image: {
          type: 'image',
          label: 'Image to the right of the title',
        }
      }
    }
  </script>
@endsection
