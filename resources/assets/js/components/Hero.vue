<template>
  <div v-cloak class="w-full relative z-10 bg-blue-dark">
    <div class="min-h-1024 hero-grad text-blue-lighter w-full">

      <div class="absolute pin bg-cover flex justify-center items-center flex-col" style="background-image:url('/imgs/placeholder-scenery-2.jpg')">
        <div class="max-w-container p-8">
          <div class="relative p-12">
            <div class="bg-black opacity-50 absolute pin rounded-lg"></div>
            <div class="relative z-10 text-center">
              <h1 class="text-white uppercase font-thin text-shadow mb-4" v-html="devise.data.title.text"></h1>
              <div>
                <h4 class="font-light uppercase text-white">New England Like You've Never Seen It</h4>
                <p>Visit Boston, New York, and Maine in style</p>
                <div class="relative min-h-200 mt-8">
                  <div class="absolute absolute-center w-32 h-32 rounded-full border-2 border-white">

                    <div class="absolute w-2 h-2 rounded-full bg-white" style="top:9px;left:18px"></div>
                    <div class="absolute text-white" style="top:2px;left:-40px">
                      Boston
                    </div>

                    <div class="absolute w-2 h-2 rounded-full bg-white" style="bottom:-5px;left:50px"></div>
                    <div class="absolute text-white" style="bottom:-30px;left:20px">
                      New York
                    </div>

                    <div class="absolute w-2 h-2 rounded-full bg-white" style="top:9px;right:18px"></div>
                    <div class="absolute text-white" style="top:2px;right:-35px">
                      Maine
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Hero'
  }
</script>
