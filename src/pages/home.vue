<template>
  <div class="contenedor">
    <div v-if="openModal" class="overlay">
      <div v-click-outside="closeOptions" class="options">
        <span @click="editOption">Editar</span>
        <span @click="deleteOption">Borrar</span>
      </div>
    </div>
    <main v-if="recipes" class="with-recipes">
      <Card
        v-for="(recipe, index) in recipes"
        :key="index"
        :name="nombre"
        :username="username"
        :description="recipe.description"
        :img-recipe="recipe.imgSrc"
        :img-type="recipe.imgType"
        @openOptions="openOptions"
      />
    </main>
    <main v-else class="tw-text-center">
      No haz publicado recetas
    </main>
    <Asidebar />
  </div>
</template>

<script>
export default {
  layout: 'home',
  data: () => ({
    recipes: null,
    nombre: null,
    username: null,
    openModal: false
  }),
  head () {
    return {
      htmlAttrs: {
        class: this.openModal ? 'tw-overflow-hidden' : ''
      }
    }
  },
  async mounted () {
    const { uid, nombre, username } = JSON.parse(sessionStorage.getItem('user'))
    const snapshot = await this.$fire.firestore.collection('user').doc(uid).collection('recipes').get()
    this.recipes = snapshot.docs.map(doc => doc.data())
    this.nombre = nombre
    this.username = username
  },
  methods: {
    openOptions () {
      this.openModal = true
    },
    closeOptions () {
      this.openModal = false
    },
    editOption () {
      console.log('Método editar')
    },
    deleteOption () {
      console.log('Método eliminar')
    }
  }
}
</script>

<style scoped lang="postcss">
    .contenedor {
        @apply grid max-w-5xl grid-cols-1 px-4 mx-auto;
    }

    .overlay {
        @apply absolute top-0 left-0 z-40 grid w-screen h-screen place-items-center;
        background: rgba(0,0,0,0.65);
    }

    .options {
        @apply grid w-3/4 max-w-md grid-cols-1 text-center bg-white rounded cursor-pointer;
    }

    .options span {
        @apply block py-3 border-b;
        border-color: #DBDBDB;
    }

    .options>span:nth-child(2) {
        @apply font-bold text-red-600 border-none;
    }

    .with-recipes {
        @apply grid gap-12 pb-6;
    }

    @screen lg {
        .contenedor {
            grid-template-columns: 2fr 1fr;
        }
    }
</style>
