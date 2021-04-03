<template>
  <a
    v-if="external"
    :class="{ 'btn re-primary': btnPrimary, 'btn re-secondary': btnSecondary }"
    rel="noopener noreferrer"
    target="_blank"
    :href="to"
  >
    <slot />
  </a>

  <NuxtLink v-else :class="{ 'btn re-primary': btnPrimary, 'btn re-secondary': btnSecondary }" :to="to">
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    external: {
      type: Boolean,
      default: false
    },
    to: {
      type: String,
      default: '/'
    },
    btnPrimary: Boolean,
    btnSecondary: Boolean
  }
}
</script>
