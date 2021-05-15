<template>
  <article>
    <div class="cover" :style="imgCover ? { backgroundImage: 'url(data:image/' + imgType + ';base64,' + imgCover + ')' } : { backgroundImage: 'url(/images/cake.png);' }">
      <div class="info">
        {{ cookingTime > 1 ? cookingTime + ' mins' : cookingTime + 'min' }} | {{ rations }} personas
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
    imgCover: { type: String },
    imgType: { type: String },
    cookingTime: {
      type: Number,
      default: 34
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
