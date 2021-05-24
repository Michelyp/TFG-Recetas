<template>
  <article>
    <header>
      <div class="info">
        <img class="img-profile" :src="imgProfile" :alt="name">
        <span class="name">{{ name }}</span>
        <span class="username">@{{ username }}</span>
      </div>
      <img class="tw-cursor-pointer" src="icons/ellipsis.svg" alt="Opciones" @click="toggle">
    </header>
    <p>
      {{ description }}
    </p>
    <img :src="imgRecipe ? 'data:image/' + imgType + ';base64,' + imgRecipe : '/images/no-imagen.jpg'" alt="Foto de la receta">
  </article>
</template>

<script>
export default {
  props: {
    imgProfile: {
      type: String,
      default: 'images/gatito-serio.png'
    },
    name: {
      type: String,
      default: 'Sin usuario'
    },
    username: {
      type: String,
      default: 'sinusuario'
    },
    description: {
      type: String,
      default: 'Sin descripción'
    },
    imgRecipe: String,
    imgType: String
  },
  methods: {
    toggle () {
      this.$emit('openOptions', 'SE CLICKEÓ EN OPCIONES')
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
