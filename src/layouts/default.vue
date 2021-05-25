<template>
  <v-app dark>
    <Nuxt class="app-router" />
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

<style lang="postcss">
.app-router {
  min-height: calc(100vh - 96px);
}

.btn {
  @apply w-full py-2 text-lg rounded-xl max-w-2xs;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.btn:active {
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.btn:focus {
  @apply outline-none;
}

.re-primary {
  @apply text-white bg-primary;
}

.re-secondary {
  @apply bg-white text-primary;
}

@supports (-webkit-text-stroke: 1px black) {
  .re-primary {
    -webkit-text-stroke: 1px rgba(255, 253, 253, 0.5);
  }
  .re-secondary {
    -webkit-text-stroke: 2px rgba(109, 42, 42, 0.5);
  }
}

@screen lg {
  .btn {
    @apply py-4 text-lg rounded-xl;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .btn:active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .btn:focus {
    @apply outline-none;
  }

  .re-primary {
    @apply bg-primary;
    color: white !important;
  }

  .re-secondary {
    @apply bg-white;
    color: #6D2A2A !important;
  }
}
</style>
