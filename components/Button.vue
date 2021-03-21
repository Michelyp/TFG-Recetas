<template>
  <button
    :class="{ primary, secondary }"
    @click.prevent="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    props: {
      primary: Boolean,
      secondary: Boolean,
    },
  };
</script>

<style lang="postcss">
  button {
    @apply py-4 px-16 text-2xl rounded;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  button:active {
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  button:focus {
    @apply outline-none;
  }

  .primary {
    @apply text-white bg-primary;
  }

  .secondary {
    @apply text-primary bg-white;
  }
</style>
