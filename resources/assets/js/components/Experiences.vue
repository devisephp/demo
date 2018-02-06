<template>
  <div>
    <h2 class="text-blue-dark text-center font-light mb-8">{{ dvs.fields.title.text }}</h2>
    <ul class="flex list-reset flex-wrap align-stretch justify-stretch">
       <li v-for="experience in this.getCollection(dvs.slices, 'DeviseExperience')" class="w-full md:w-1/3 p-8 text-center">
         <h6 class="uppercase text-blue-dark mb-1">{{ experience.fields.name.text }}</h6>
         <p class="text-sm my-4">{{ experience.fields.description.text }}</p>
         <i class="ion-android-search text-blue-dark text-2xl cursor-pointer" @click="goToExperience(experience)"></i>
       </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Experiences',
    methods: {
      goToExperience (experience) {
        this.$router.push({name: 'experience', params: {experiencename: experience.fields.name.text.toLowerCase()}})
      }
    },
    props: ['dvs']
  }
</script>
