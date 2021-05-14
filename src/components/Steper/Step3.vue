<template>
  <section>
    <div class="header">
      <img src="/icons/footsteps.svg" alt="Pasos">
      <p>
        Si para elaborar tu receta necestas más de un método de preparación, que se prepara por separado,
        es decir una salsa o una mezcla. Lo puedes hacer agregando un componente adicional.
      </p>
    </div>

    <div class="body">
      <div class="ingredients">
        <input v-model="ingredientValue" type="text" placeholder="Ingrediente">
        <Button primary class="slim" @click="addIngredient">
          Agregar ingrediente
        </Button>

        <p v-for="(ingredient, index) in ingredients" :key="index">
          {{ ingredient }}
        </p>
      </div>

      <div class="steps-builder">
        <div class="content">
          <textarea v-model="stepValue" placeholder="Paso 1" />
          <Button primary class="slim" @click="addStep">
            Agregar paso
          </Button>

          <p v-for="(step, index) in steps" :key="index">
            Paso {{ index + 1 }}: {{ step }}
          </p>
        </div>
        <div class="buttons">
          <Button primary>
            Continuar
          </Button>
          <Button>
            Cancelar
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    ingredientValue: '',
    stepValue: '',
    ingredients: [],
    steps: []
  }),
  methods: {
    addIngredient () {
      if (this.ingredientValue) {
        this.ingredients.push(this.ingredientValue)
        this.ingredientValue = ''
      }
    },
    addStep () {
      if (this.stepValue) {
        this.steps.push(this.stepValue)
        this.stepValue = ''
      }
    }
  }
}
</script>

<style scoped lang="postcss">
    section {
        @apply px-4 py-8 rounded-b;
        border: 1px solid #A29595;
        box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .header {
        @apply grid items-center justify-center pb-8 gap-x-6;
        color: #370606;
        grid-template-columns: repeat(2, fit-content(100%));
    }

    .header img {
        @apply h-16;
    }

    .header p {
        @apply my-8 leading-tight;
    }

    .body p {
        @apply justify-self-start;
    }

    .ingredients {
        @apply grid grid-cols-1 pb-8 gap-y-4 justify-items-center;
    }

    input, textarea {
        @apply w-full px-4 py-2 border border-solid rounded outline-none border-primary;
    }

    input::placeholder,
    textarea::placeholder {
        color: #6A6767;
    }

    .steps-builder {
        @apply grid gap-y-8;
    }

    .content {
        @apply grid grid-cols-1 pb-8 gap-y-4 justify-items-center;
    }

    textarea {
        @apply h-32 resize-none;
    }

    .buttons {
        @apply grid w-full place-items-center gap-y-4;
    }

    button.slim {
        @apply py-2 text-sm font-light max-w-none;
    }

    @screen lg {
        section {
            @apply px-16;
        }

        .header {
            @apply justify-items-center;
            grid-template-columns: 0.5fr 1.5fr;
        }

        .body {
            @apply grid grid-cols-2 gap-x-32;
            grid-template-rows: fit-content(100%);
        }

        .ingredients {
            grid-template-rows: repeat(2, fit-content(100%));
        }

        .steps-builder {
            @apply content-between h-full;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(2, fit-content(100%));
        }

        .content {
            @apply pb-0;
            grid-template-rows: repeat(2, fit-content(100%));
        }

        .buttons {
            @apply grid-cols-2 gap-x-6;
        }
    }
</style>
