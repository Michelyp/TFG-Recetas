<template>
  <button
    :class="{ 'custom-primary': primary, 'custom-secondary': secondary }"
    @click.prevent="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    primary: Boolean,
    secondary: Boolean
  }
}
</script>

<style scoped lang="postcss">
  button {
    @apply px-24 py-4 text-lg rounded;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  button:active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  button:focus {
    @apply outline-none;
  }

  .custom-primary {
    @apply text-white bg-primary;
  }

  .custom-secondary {
    @apply bg-white text-primary;
  }

  @supports (-webkit-text-stroke: 1px black) {
    .custom-primary {
      -webkit-text-stroke: 1px rgba(255, 253, 253, 0.5);
    }
    .custom-secondary {
      -webkit-text-stroke: 2px rgba(109, 42, 42, 0.5);
    }
  }
</style>
