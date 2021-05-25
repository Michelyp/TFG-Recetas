<template>
  <header>
    <nav>
      <div class="info">
        <img class="profile-img" src="/images/default-user.png" alt="Imagen de perfil">
        <ul>
          <li>
            <a href="#"><img src="/icons/heart.svg" alt="Ícono de corazón"></a>
          </li>
          <li>
            <Link to="/home">
              <img src="/icons/home.svg" alt="Ícono de casa">
            </Link>
          </li>
          <li>
            <Link to="/nueva-receta">
              <img src="/icons/file.svg" alt="Ícono de archivo">
            </Link>
          </li>
        </ul>
      </div>
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
        @apply sticky top-0 grid items-center w-full py-2 mb-12 bg-white border-b border-dark;
    }

    nav {
        @apply grid items-center w-full max-w-5xl grid-cols-2 px-4 mx-auto justify-items-center;
    }

    .info {
        @apply grid gap-6 justify-self-start;
        grid-template-columns: 40px auto;
    }

    .logo {
        @apply w-12;
        justify-self: right;
    }

    .buscar {
        @apply items-center hidden w-full max-w-md rounded-xl;
        border: 1px solid #D2CACA;
        background: #FDF8F8;
    }

    ul {
        @apply grid items-center gap-6 p-0;
        grid-template-columns: repeat(3, 24px);
    }

    li img {
        @apply h-6;
    }

    .profile-img {
        @apply w-12 rounded-full;
        justify-self: left;
    }

    @screen lg {
        nav {
            grid-template-columns: 1fr 2fr 1fr;
        }

        .buscar {
            @apply grid px-4 py-1;
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
