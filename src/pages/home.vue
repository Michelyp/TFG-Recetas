<template>
  <main>
    <h1>Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h1>
    <Steper2 />
  </main>
</template>

<script>
import Steper2 from '@/components/Steper2'

export default {
  comoponents: {
    Steper2
  },
  layout: 'home'
}
</script>

<style scoped lang="postcss">
    main {
        @apply px-6 break-all;
        height: 400vh;
    }

    @screen lg {
        @apply pr-0;
    }
</style>
