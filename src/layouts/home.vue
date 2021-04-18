<template>
  <v-app dark>
    <Navbar />
    <Nuxt />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: { Navbar }
}
</script>
