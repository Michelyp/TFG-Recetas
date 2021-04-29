<template>
  <header>
    <nav>
      <img class="profile-img" src="/images/gatito-serio.png" alt="Imagen de perfil">
      <ul>
        <li>
          <a href="#"><img src="/icons/heart.svg" alt="Ícono de corazón"></a>
        </li>
        <li>
          <a href="#"><img src="/icons/home.svg" alt="Ícono de casa"></a>
        </li>
        <li>
          <a href="#"><img src="/icons/file.svg" alt="Ícono de archivo"></a>
        </li>
      </ul>
      <div class="buscar">
        <img src="/icons/search.svg" alt="Buscar">
        <input type="search" placeholder="Buscar en Yam Yam">
      </div>
      <img class="logo" src="/images/yamyam.png" alt="Logo de Yam Yam">
    </nav>
  </header>
</template>

<style scoped lang="postcss">
    header {
        @apply sticky top-0 grid items-center w-full py-3 mb-12 bg-white border-b border-dark;
        height: 100px;
    }

    nav {
        @apply grid items-center px-6 justify-items-center;
        grid-template-columns: 1fr 2fr 1fr;
        max-width: 928px;
    }

    .logo {
        @apply w-12;
        justify-self: right;
    }

    .buscar {
        @apply items-center hidden w-full rounded;
        border: 1px solid #D2CACA;
        background: #FDF8F8;
    }

    ul {
        @apply grid p-0 gap-x-6;
        grid-template-columns: repeat(3, 24px);
    }

    li img {
        @apply h-6;
    }

    .profile-img {
        @apply w-12 rounded-full;
        justify-self: left;
    }

    @screen md {
        nav {
            @apply mx-auto;
            grid-template-columns: 1fr 2fr 2fr 1fr;
        }

        .buscar {
            @apply grid px-4 py-1;
            max-width: 240px;
            grid-template-columns: 20px auto;
        }

        .buscar img {
            @apply w-5;
        }

        .buscar input {
            @apply w-full pl-2 outline-none;
        }

        ul {
            justify-self: left;
        }
    }
</style>
