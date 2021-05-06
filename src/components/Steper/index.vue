<template>
  <article>
    <section class="header">
      <div class="step">
        {{ currentStep }}
      </div>
      <span class="title">
        {{ steps[currentStep - 1].name }}
      </span>
      <hr class="line">
    </section>
    <Step1 v-if="currentStep === 1" />
    <Step2 v-else-if="currentStep === 2" />
    <Step3 v-else-if="currentStep === 3" />
  </article>
</template>

<script>
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

export default {
  components: { Step1, Step2, Step3 },
  data: () => ({
    currentStep: 1,
    lastStep: 4,
    steps: [
      { name: 'Nombre de tu receta' },
      { name: 'Información de la receta' },
      { name: 'Ingrediente y pasos de la receta' },
      { name: 'Complete' }
    ],
    valid: false,
    stepForm: []
  }),
  methods: { }
}
</script>

<style scoped lang="postcss">
    article {
        @apply w-full max-w-screen-lg px-5 py-16 mx-auto;
    }

    .header {
        @apply grid px-6 rounded-t gap-x-4;
        grid-template-columns: 50px 1fr;
        border: 1px solid #A29595;
        box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .step {
        @apply grid self-center w-8 h-8 text-center text-white rounded-full place-items-center bg-primary justify-self-center;
    }

    .title {
        @apply block py-5 text-lg font-normal leading-5 text-left;
        align-self: left;
    }

    .line {
        @apply hidden;
    }
</style>
