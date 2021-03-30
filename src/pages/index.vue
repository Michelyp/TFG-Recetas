<template>
  <div class="container">
    <div>
      <Steper />
      <Button class="my-4" primary>
        Regístrate
      </Button>
      <Button class="my-4" secondary>
        Iniciar Sesión
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
import Steper from '@/components/Steper'

export default {
  components: {
    Button,
    Steper
  }
}
</script>

<style scoped lang="postcss">
  .container {
    @apply flex items-center justify-center min-h-screen mx-auto my-0 text-center;
  }

  .title {
    @apply block font-normal text-black font-roboto;
    font-size: 100px;
    letter-spacing: 1px;
  }

  .subtitle {
    @apply pb-4 text-4xl font-normal text-black;
    word-spacing: 5px;
  }

  .links {
    @apply pt-4;
  }
</style>
