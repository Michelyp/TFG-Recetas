<template>
  <div class="recipe">
    <div class="contenedor">
      <section class="featured">
        <article>
          <h1>{{ recipe.name }}</h1>
          <article class="metadata">
            <span>Dificultad: {{ recipe.difficulty }}</span>
            <span>Comensales: {{ recipe.rations }}</span>
          </article>
        </article>
        <img
          class="img-preview"
          :src="recipe.imgSrc ? 'data:image/' + recipe.imgType + ';base64,' + recipe.imgSrc : '/images/no-imagen.jpg'"
          alt="Preview de la receta"
        >
      </section>
      <section class="info">
        <article>
          <h3>Descripción:</h3>
          <p>
            {{ recipe.description }}
          </p>
        </article>
        <article>
          <h3>Ingredientes:</h3>
          <ul>
            <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
              {{ index + 1 }}. {{ ingredient }}
            </li>
          </ul>
        </article>
        <article class="setup">
          <h3>Preparación:</h3>
          <ul>
            <li v-for="(step, index) in recipe.steps" :key="index">
              {{ index + 1 }}. {{ step }}
            </li>
          </ul>
        </article>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'recipe',
  data: () => ({
    recipe: {
      imgSrc: null,
      imgType: null,
      name: null,
      description: null,
      rations: null,
      category: null,
      gastronomy: null,
      setUpTime: null,
      difficulty: null,
      cookTime: null,
      ingredients: [],
      steps: []
    }
  }),
  mounted () {
    const FULL_RECIPE = sessionStorage.getItem('FULL_RECIPE')
    if (FULL_RECIPE) {
      this.recipe = JSON.parse(FULL_RECIPE)
    } else {
      this.$nuxt.$router.push('/home')
    }
  },
  destroyed () {
    sessionStorage.removeItem('FULL_RECIPE')
  }
}
</script>

<style scoped lang="postcss">
    .recipe {
        @apply pb-16;
    }

    .contenedor {
        @apply grid max-w-5xl grid-cols-1 gap-8 px-4 mx-auto;
        grid-template-rows: repeat(2, fit-content(100%));
    }

    .featured {
        @apply grid gap-4 text-center;
        grid-template-rows: repeat(2, fit-content(100%));
    }

    h1 {
        @apply text-4xl font-semibold leading-tight;
    }

    .metadata {
        @apply grid justify-center gap-2;
        grid-template-columns: repeat(2, fit-content(100%));
    }

    .info {
        @apply grid gap-4;
        grid-template-rows: repeat(3, fit-content(100%));
    }

    .info article {
        @apply grid gap-1;
        grid-template-rows: repeat(2, fit-content(100%));
    }

    .info h3 {
        @apply text-lg font-medium;
    }

    .setup ul {
        @apply grid gap-4 leading-tight;
        grid-auto-rows: fit-content(100%);
    }

    @screen lg {
        .contenedor {
            @apply grid-rows-1;
            grid-template-columns: repeat(2, fit-content(100%));
        }

        .featured {
            @apply text-left;
        }

        .metadata {
            @apply justify-start;
        }
    }
</style>
