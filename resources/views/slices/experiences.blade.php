@section('template')
  <div class="p-8 md:p-12 lg:p-15 mt-10 sm:mt-0 flex flex-col items-center" id="experience">
    <div class="max-w-container flex justify-between items-center flex-col sm:flex-row w-full">
      <experiences-app :devise="devise"></experiences-app>
    </div>
  </div>
@endsection

@section('component')
  <script>
    let module = {
      name: 'ExperiencesSlice',
      config: {
        title: {
          type: 'wysiwyg',
          label: 'title'
        }
      }
    }
  </script>
@endsection
