<template>
  <v-app dark>
    <Nuxt />
    <Footer v-if="showsFooter" />
  </v-app>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  components: { Footer },
  computed: {
    showsFooter () {
      return this.$route.path !== '/login'
    }
  }
}
</script>
