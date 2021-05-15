<template>
  <main v-if="recipes" class="with-recipes">
    <Card
      v-for="(recipe, index) in recipes"
      :key="index"
      :img-cover="recipe.imgSrc"
      :img-type="recipe.imgType"
      :rations="parseInt(recipe.rations)"
      :cooking-time="parseInt(recipe.cookTime)"
      :title="recipe.name"
    />
  </main>
  <main v-else class="tw-text-center">
    No haz publicado recetas
  </main>
</template>

<script>
import Card from '@/components/Card'

export default {
  comoponents: { Card },
  layout: 'home',
  data: () => ({
    recipes: null
  }),
  async beforeCreate () {
    const { uid } = JSON.parse(sessionStorage.getItem('user'))
    const snapshot = await this.$fire.firestore.collection('user').doc(uid).collection('recipes').get()
    this.recipes = snapshot.docs.map(doc => doc.data())
  }
}
</script>

<style scoped lang="postcss">
    main.with-recipes {
        @apply grid grid-cols-1 px-6 break-all justify-items-center;
        min-height: calc(100vh - 111px);
    }

    @screen lg {
        @apply pr-0;
    }

    @screen xl {
        main.with-recipes {
            @apply grid-cols-2 gap-6;
        }
    }

    @screen 2xl {
        main.with-recipes {
            @apply gap-0;
        }
    }
</style>
