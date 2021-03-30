<template>
  <div class="container">
    <div>
      <Steper />
      <Button class="my-4" primary>
        Regístrate
      </Button>
      <Button class="my-4" secondary>
        Iniciar Sesión
      </Button>
    </div>
  </div>
</template>

<script>
  import Button from '@/components/Button';
  import Steper from '@/components/Steper';

  export default {
    components: { 
      Button,
      Steper 
    },
    methods: {
      consoleLog(message) {
        console.log(message);
      },
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
