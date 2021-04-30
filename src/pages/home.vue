<template>
  <main>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </main>
</template>

<script>
import Card from '@/components/Card'

export default {
  comoponents: {
    Card
  },
  layout: 'home'
}
</script>

<style scoped lang="postcss">
    main {
        @apply grid grid-cols-1 px-6 break-all justify-items-center;
        height: 400vh;
    }

    @screen lg {
        @apply pr-0;
    }

    @screen xl {
        main {
            @apply grid-cols-2 gap-6;
            grid-template-rows: repeat(4, minmax(0, 520px));
        }
    }

    @screen 2xl {
        main {
            @apply gap-0;
        }
    }
</style>
