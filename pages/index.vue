<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">TFG-Recetas</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <button @click="writeToRealtimeDb()">Haz me click</button>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      async writeToRealtimeDb() {
        const messageRef = this.$fire.database.ref('message');
        try {
          await messageRef.set({
            message: 'Nuxt-Fire with Firebase Realtime Database rocks!',
          });
        } catch (e) {
          alert(e);
          return;
        }
        alert('Success.');
      },
    },
  };
</script>

<style lang="postcss">
  .container {
    @apply my-0 mx-auto min-h-screen flex justify-center items-center text-center;
  }

  .title {
    @apply text-black font-roboto block font-normal;
    font-size: 100px;
    letter-spacing: 1px;
  }

  .subtitle {
    @apply font-normal text-4xl text-black pb-4;
    word-spacing: 5px;
  }

  .links {
    @apply pt-4;
  }
</style>
