<template>
  <header>
    <nav>
      <img class="profile-img" src="/images/gatito-serio.png" alt="Imagen de perfil">
      <ul>
        <li>
          <img src="/icons/heart.svg" alt="Ícono de corazón">
        </li>
        <li>
          <img src="/icons/home.svg" alt="Ícono de casa">
        </li>
        <li>
          <img src="/icons/file.svg" alt="Ícono de archivo">
        </li>
      </ul>
      <div class="buscar">
        <img class="tw-h-5" src="/icons/search.svg" alt="Buscar">
        <input type="search" placeholder="Buscar en Yum Yum">
      </div>
      <img class="logo" src="/images/logo.png" alt="Logo de Yum Yum">
    </nav>
  </header>
</template>

<style scoped lang="postcss">
    header {
        @apply tw-flex tw-items-center tw-justify-center tw-px-12;
        height: 205px;
        border-bottom: 1px solid #D2CACA;
    }

    nav {
        @apply tw-grid tw-w-full tw-items-center tw-justify-items-center;
        grid-template-columns: 1fr 2fr 4fr 1fr;
    }

    .profile-img {
        @apply tw-rounded-full;
        height: 125px;
    }

    ul {
        @apply tw-grid tw-grid-cols-3 tw-gap-x-6 tw-justify-items-center;
        grid-template-columns: repeat(3, minmax(0, 36px));
        grid-template-rows: auto;
    }

    .buscar {
        @apply tw-flex tw-flex-no-wrap tw-rounded tw-justify-center tw-items-center tw-w-full;
        max-width: 480px;
        border: 1px solid #D2CACA;
        background: #FDF8F8;
    }

    input {
        @apply tw-py-4 tw-outline-none tw-ml-6;
    }

    .logo {
        height: 138px;
    }
</style>
