<template>
  <div>
    <Navbar />
    <Asidebar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Asidebar from '@/components/Asidebar'

export default {
  components: { Navbar, Asidebar }
}
</script>

<style scoped lang="postcss">
    div {
        @apply relative min-h-screen;
        background: #FAFAFA;
    }
</style>
