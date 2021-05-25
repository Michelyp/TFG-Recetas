<template>
  <article>
    <header>
      <div class="info">
        <img class="img-profile" :src="recipeData.imgProfile" :alt="recipeData.username">
        <span class="name">{{ recipeData.completeName }}</span>
        <span class="username">@{{ recipeData.username }}</span>
      </div>
      <img class="tw-cursor-pointer" src="icons/ellipsis.svg" alt="Opciones" @click="toggle">
    </header>
    <p>
      {{ recipeData.description }}
    </p>
    <img
      class="img-preview"
      :src="recipeData.imgSrc ? 'data:image/' + recipeData.imgType + ';base64,' + recipeData.imgSrc : '/images/no-imagen.jpg'"
      alt="Foto de la receta"
    >
  </article>
</template>

<script>
export default {
  props: {
    recipeData: {
      type: Object,
      default () {
        return {
          id: String,
          category: 'Sin categoría',
          cookTime: null,
          name: 'Sin nombre',
          description: 'Sin descripción',
          difficulty: 'Sin especificar',
          gastronomy: 'Sin especificar',
          imgProfile: 'images/gatito-serio.png',
          ingredients: [],
          completeName: 'Sin nombre',
          rations: null,
          setUpTime: null,
          steps: [],
          imgSrc: String,
          imgType: String
        }
      }
    }
  },
  methods: {
    toggle () {
      this.$emit('openOptions', this.recipeData)
    }
  }
}
</script>

<style scoped lang="postcss">
    article {
        @apply grid w-full grid-cols-1 gap-4 px-6 pt-6 pb-20 mx-auto bg-white rounded-md;
        grid-template-rows: repeat(3, fit-content(100%));
        border: 1px solid #DBDBDB;
    }

    header {
        @apply grid justify-between;
        grid-template-columns: auto fit-content(100%);
    }

    .info {
        @apply grid items-center gap-2;
        grid-template-columns: 40px fit-content(100%);
    }

    .img-profile {
        @apply w-full h-full rounded-full;
    }

    .name {
        @apply hidden;
    }

    p {
        @apply leading-tight;
    }

    .img-preview {
        max-height: 350px;
    }

    @screen lg {
        .info {
            @apply gap-4;
            grid-template-columns: 40px repeat(2, fit-content(100%));
        }

        .name {
            @apply block text-lg font-bold;
        }
    }
</style>
