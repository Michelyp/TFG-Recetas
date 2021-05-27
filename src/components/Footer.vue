<template>
  <v-footer padless>
    <v-col class="tw-text-center tw-text-white" cols="12">
      {{ year }} — <span>Yam Yam Designed by N <small>&</small> E</span>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      year: null
    }
  },
  /* Obtiene el año actual */
  mounted () {
    this.$nextTick(function () {
      this.year = new Date().getFullYear()
    })
  }
}
</script>

<style scoped lang="postcss">
footer {
  @apply grid h-24 bg-center bg-no-repeat bg-cover place-items-center;
  background-image: url("/images/footer.png");
}

span {
    @apply font-medium;
}
</style>
