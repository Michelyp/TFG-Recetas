<template>
  <v-footer padless>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} —
      <strong>Yam Yam Designed by N & E</strong>
    </v-col>
  </v-footer>
</template>
<!--<template>
  <footer>
     {{ new Date().getFullYear() }} —  <Strong>Yam Yam Designed by N & E</Strong>
  </footer>
</template>-->

<style scoped lang="postcss">
  footer {
    display: grid;
    place-items: center;
    height: 6rem;
    background: url('/images/footer.png') no-repeat;
    background-size: 100% 100%;
  }

  .text-center {
    @apply text-white;
  }
</style>
