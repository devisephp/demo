<template>
  <div v-cloak class="w-full relative z-10 bg-blue-dark" id="hero">
    <div class="min-h-1024 text-blue-lighter w-full" :style="{backgroundColor: devise.backgroundColor.color, color: devise.color.color}">

      <div class="absolute pin bg-cover flex justify-center items-center flex-col">
        <div class="max-w-container p-8">
          <div class="relative z-10 text-center sm:bg-green md:bg-blue md:text-yellow lg:bg-red xl:bg-orange">
            <i class="ion-help-buoy" style="font-size:100px;"></i>
            <h1 class="text-white uppercase font-thin text-shadow mb-4" v-html="devise.title.text"></h1>
            <div v-if="devise.subTitle.enabled">
              <h4 class="font-light uppercase text-white" v-html="devise.subTitle.text"></h4>
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
