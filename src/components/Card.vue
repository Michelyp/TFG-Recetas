<template>
  <article>
    <div class="cover" :style="`background-image: url(${imgCover});`">
      <div class="info">
        {{ cookingTime }} | {{ rations }} personas
      </div>
    </div>
    <div class="title">
      <span>{{ title }}</span>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    imgCover: {
      type: String,
      default: '/images/cake.png'
    },
    cookingTime: {
      type: String,
      default: '34 min'
    },
    rations: {
      type: Number,
      default: 3
    },
    title: {
      type: String,
      default: 'Tarta de queso'
    }
  }
}
</script>

<style scoped lang="postcss">
    article {
        @apply grid w-full grid-rows-2;
        grid-template-rows: fit-content(100%) fit-content(100%);
        max-width: 452px;
    }

    .cover {
        @apply relative bg-center bg-cover;
        height: 380px;
    }

    .info {
        @apply absolute bottom-0 w-full py-6 text-lg text-center text-white;
        background: rgba(109, 42, 42, 0.35);
    }

    .title {
        @apply text-2xl text-center;
    }

    .title span {
        @apply  pt-8;
    }
</style>
