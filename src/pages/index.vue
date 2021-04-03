<template>
  <div class="re-container">
    <div class="left-column" />
    <div class="right-column">
      <div>
        <img src="/images/yamyam.png" title="Logo" alt="Logo">
        <h1>Crea y descubre nuevas recetas</h1>
        <p>Únete a Yam Yam ahora mismo.</p>
        <div class="botones">
          <Link to="/register" class="mx-auto mb-8" btn-primary>
            Regístrate
          </Link>
          <Link to="/login" class="mx-auto" btn-secondary>
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Link from '@/components/Link'

export default {
  components: { Link }
}
</script>

<style scoped lang="postcss">
.re-container {
  @apply flex flex-col-reverse flex-no-wrap w-screen mx-auto;
}

.left-column {
  @apply w-full bg-center bg-no-repeat bg-cover;
  background-image: url("/images/inicio.png");
  height: calc(100vh - 6rem);
}

.left-column img {
  @apply w-full;
}

.right-column {
  @apply w-full px-12 pt-6 pb-12 text-center;
}

.right-column img {
  @apply w-32 mx-auto;
}

.botones {
  @apply flex flex-col max-w-xs mx-auto;
}

h1 {
  @apply mb-2 text-4xl font-bold;
  line-height: 1.2;
  color: #370606;
}

p {
  @apply mb-4 text-xl;
  color: #370606;
}

@screen sm {
  .right-column {
    @apply pt-12 pb-24;
  }
}

@screen lg {
  .re-container {
    @apply flex-row;
    height: calc(100vh - 6rem);
  }

  h1 {
    @apply px-12 text-6xl;
  }

  p {
    @apply px-12 mb-16 text-4xl;
  }

  .left-column {
    @apply w-2/5 h-auto;
  }

  .right-column {
    @apply grid w-3/5 px-0 place-items-center;
  }

  .right-column img {
    @apply w-48;
  }
}
</style>
