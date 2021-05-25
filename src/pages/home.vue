<template>
  <div class="contenedor">
    <v-overlay :value="openModal">
      <div v-click-outside="closeOptions" class="options">
        <span @click="editOption">Editar</span>
        <span @click="deleteOption">Borrar</span>
      </div>
    </v-overlay>
    <main v-if="recipes" class="with-recipes">
      <Card
        v-for="(recipe, index) in recipes"
        :key="index"
        :recipe-data="recipe"
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
    userUID: null,
    username: null,
    openModal: false,
    selectedRecipe: null
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
    this.recipes = snapshot.docs.map(doc => ({ id: doc.id, completeName: nombre, username, imgProfile: 'images/gatito-serio.png', ...doc.data() }))
    this.userUID = uid
  },
  methods: {
    openOptions (event) {
      this.openModal = true
      this.selectedRecipe = event
    },
    closeOptions () {
      this.openModal = false
    },
    editOption () {
      sessionStorage.setItem('RECIPE_ID', JSON.stringify(this.selectedRecipe.id))
      sessionStorage.setItem('DATA_STEP_1', JSON.stringify({
        name: this.selectedRecipe.name,
        imgSrc: this.selectedRecipe.imgSrc,
        imgName: this.selectedRecipe.imgName,
        imgType: this.selectedRecipe.imgType,
        description: this.selectedRecipe.description
      }))
      sessionStorage.setItem('DATA_STEP_2', JSON.stringify({
        rations: this.selectedRecipe.rations,
        category: this.selectedRecipe.category,
        gastronomy: this.selectedRecipe.gastronomy,
        setUpTime: this.selectedRecipe.setUpTime,
        difficulty: this.selectedRecipe.difficulty,
        cookTime: this.selectedRecipe.cookTime
      }))
      sessionStorage.setItem('DATA_STEP_3', JSON.stringify({
        ingredients: this.selectedRecipe.ingredients,
        steps: this.selectedRecipe.steps
      }))
      this.$nuxt.$router.push('/editar-receta')
    },
    deleteOption () {
      this.$fire.firestore.collection('user')
        .doc(this.userUID)
        .collection('recipes')
        .doc(this.selectedRecipe.id)
        .delete()
        .then(() => {
          console.log('Se borró la receta')
          const { uid, nombre, username } = JSON.parse(sessionStorage.getItem('user'))
          this.$fire.firestore.collection('user')
            .doc(uid)
            .collection('recipes').get()
            .then((snapshot) => {
              this.recipes = snapshot.docs.map(doc => ({ id: doc.id, completeName: nombre, username, imgProfile: 'images/gatito-serio.png', ...doc.data() }))
            })
        })
        .catch((error) => {
          console.log('No se borró la receta: ', error)
        })
      this.openModal = false
    }
  }
}
</script>

<style scoped lang="postcss">
    .contenedor {
        @apply grid max-w-5xl grid-cols-1 px-4 mx-auto;
    }

    .options {
        @apply grid w-full max-w-md grid-cols-1 text-center bg-white cursor-pointer rounded-xl;
    }

    .options span {
        @apply block py-3 text-black border-b;
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
