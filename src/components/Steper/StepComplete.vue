<template>
  <section>
    <div>
      <img :src="recipeIsOk ? '/icons/check.svg' : '/icons/x.svg'" :alt="recipeIsOk ? 'Good' : 'Bad'">
      <h2>{{ recipeIsOk ? 'Se completó correctamente' : 'Ocurrió un error' }}</h2>
      <Link to="/home" btn-primary class="text-center">
        Volver al home
      </Link>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    recipeIsOk: JSON.parse(sessionStorage.getItem('savedRecipeIsOk'))
  })
}
</script>

<style scoped lang="postcss">
    section {
        @apply grid w-full h-full place-items-center;
    }

    div {
        @apply grid justify-items-center gap-y-8;
    }

    img {
        @apply w-32 h-32 mx-auto;
    }

    h2 {
        @apply text-3xl font-bold text-center;
    }

    @screen lg {
        h2 {
            @apply text-5xl;
        }
    }
</style>
