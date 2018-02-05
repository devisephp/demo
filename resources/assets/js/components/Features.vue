<template>
  <div>
    <h2 class="text-blue-dark text-center font-light mb-8">{{ devise.title.text }}</h2>
    <ul class="flex list-reset flex-wrap align-stretch justify-stretch">
       <li v-for="feature in features" class="w-full md:w-1/3 p-8 text-center">
         <h6 class="uppercase text-blue-dark mb-1">{{ feature.name }}</h6>
         <p class="text-sm my-4">{{ feature.description }}</p>
         <i class="ion-android-search text-blue-dark text-2xl cursor-pointer" @click="goToFeature(feature)"></i>
       </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ExperiencesSlice',
    data () {
      return {
        devise: {}
      }
    },
    methods: {
      goToFeature (feature) {
        this.$router.push({name: 'feature', params: {featurename: feature.name.toLowerCase()}})
      }
    },
    props: ['features']
  }
</script>
