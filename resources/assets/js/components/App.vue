<template>
  <div v-cloak class="w-full">
    <transition name="slide" mode="out-in">
      <router-view :key="key" :dvs="devise"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'ExperiencesContainer',
    data () {
      return {
      }
    },
    computed: {
      key () {
        return this.$route.name + '-' + this.$route.params.featurename
      }
    }
  }
</script>
