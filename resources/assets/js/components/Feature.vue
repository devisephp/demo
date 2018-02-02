<template>
  <div class="flex flex-col md:flex-row items-center relative">
    <div class="absolute pin-t pin-l cursor-pointer uppercase text-blue-dark text-xs flex items-center" @click="goToIndex()">
      <i class="ion-ios-arrow-back text-base mr-1"></i>
      Back
    </div>
    <div class="w-full md:w-1/2 pt-8 md:pr-8 mb-8 md:mb-0">
      <h3 class="text-blue-dark mb-4">{{ feature.title }}</h3>
      <p>{{ feature.longDescription }}</p>
      <div class="flex justify-between mt-8">
        <div>
          <h6 class="text-grey-dark uppercase text-xs">Previous</h6>
          <h6 class="text-blue-dark uppercase cursor-pointer text-sm" @click="goToPrevious">{{ previous.name }}</h6>
        </div>
        <div>
          <h6 class="text-grey-dark uppercase text-xs">Next</h6>
          <h6 class="text-blue-dark uppercase cursor-pointer text-sm" @click="goToNext">{{ next.name }}</h6>
        </div>
      </div>
    </div>
    <div v-html="feature.html" class="w-full md:w-1/2 md:pl-8"></div>
  </div>
</template>

<script>
  export default {
    methods: {
      goToIndex () {
        this.$router.push({name: 'index'})
      },
      goToPrevious () {
        this.$router.push({name: 'feature', params: {featurename: this.previous.name.toLowerCase()}})
      },
      goToNext () {
        this.$router.push({name: 'feature', params: {featurename: this.next.name.toLowerCase()}})
      }
    },
    computed: {
      feature () {
        let self = this

        return this.features.find(feature => {
          return feature.name.toLowerCase() === self.$route.params.featurename
        })
      },
      previous () {
        let index = this.features.indexOf(this.feature)
        if (index > 0) {
          return this.features[index - 1]
        }

        return this.features[this.features.length - 1]
      },
      next () {
        let index = this.features.indexOf(this.feature)
        if (index < this.features.length - 1) {
          return this.features[index + 1]
        }

        return this.features[0]
      }
    },
    props: ['features']
  }
</script>
