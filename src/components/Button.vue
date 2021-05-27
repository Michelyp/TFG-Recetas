<template>
  <button
    :class="{ 'btn': true, 're-primary': primary, 're-secondary': secondary }"
    @click.prevent="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  /* Declara las propiedades */
  props: {
    primary: Boolean,
    secondary: Boolean
  }
}
</script>
