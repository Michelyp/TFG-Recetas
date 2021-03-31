<template>
  <div class="custainer">
    <div class="w-2/5">
      <img src="/images/inicio.png">
    </div>
    <div class="rigth-column">
      <div>
        <img class="h-32 px-12" src="/images/yamyam.png">
        <h2>
          <strong> Crea y descubre nuevas recetas</strong>
        </h2>
        <p>
          <strong>Únete a Yam Yam ahora mismo.</strong>
        </p>
        <div class="botones">
          <Button class="my-4" primary>
            Regístrate
          </Button>
          <Button class="my-4" secondary>
            Iniciar Sesión
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  components: {
    Button
  }
}
</script>

<style scoped lang="postcss">
  .custainer {
    @apply flex flex-no-wrap w-screen min-h-screen mx-auto;
  }

  .rigth-column {
    @apply grid w-3/5 place-items-center font-poppins;
  }

  .botones {
    @apply flex flex-col max-w-xs mx-auto;
  }

  h2 {
    @apply px-12 text-6xl;
    line-height: 1.2;
    color: #370606;
  }

  p {
    @apply px-12 pt-12 text-4xl;
    color: #370606;
  }
</style>
