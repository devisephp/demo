<template>
  <div class="flex flex-col md:flex-row items-center relative">
    <div class="absolute pin-t pin-l cursor-pointer uppercase text-blue-dark text-xs flex items-center" @click="goToIndex()">
      <i class="ion-ios-arrow-back text-base mr-1"></i>
      Back
    </div>
    <div class="w-full md:w-1/2 pt-8 md:pr-8 mb-8 md:mb-0">
      <h3 class="text-blue-dark mb-4">{{ experience.title.text }}</h3>
      <p>{{ experience.longDescription.text }}</p>
      <div class="flex justify-between mt-8">
        <div>
          <h6 class="text-grey-dark uppercase text-xs">Previous</h6>
          <h6 class="text-blue-dark uppercase cursor-pointer text-sm" @click="goToPrevious">{{ previous.name.text }}</h6>
        </div>
        <div>
          <h6 class="text-grey-dark uppercase text-xs">Next</h6>
          <h6 class="text-blue-dark uppercase cursor-pointer text-sm" @click="goToNext">{{ next.name.text }}</h6>
        </div>
      </div>
    </div>
    <div v-html="experience.html.text" class="w-full md:w-1/2 md:pl-8"></div>
  </div>
</template>

<script>
  export default {
    name: 'Experience',
    methods: {
      goToIndex () {
        this.$router.push({name: 'index'})
      },
      goToPrevious () {
        this.$router.push({name: 'experience', params: {experiencename: this.previous.name.text.toLowerCase()}})
      },
      goToNext () {
        this.$router.push({name: 'experience', params: {experiencename: this.next.name.text.toLowerCase()}})
      }
    },
    computed: {
      experiences () {
        return this.getCollectionData(this.dvs.slices, 'Experience')
      },
      experience () {
        let self = this

        return this.experiences.find(experience => {
          return experience.name.text.toLowerCase() === self.$route.params.experiencename
        })
      },
      previous () {
        let index = this.experiences.indexOf(this.experience)
        if (index > 0) {
          return this.experiences[index - 1]
        }

        return this.experiences[this.experiences.length - 1]
      },
      next () {
        let index = this.experiences.indexOf(this.experience)
        if (index < this.experiences.length - 1) {
          return this.experiences[index + 1]
        }

        return this.experiences[0]
      }
    },
    props: ['dvs']
  }
</script>
