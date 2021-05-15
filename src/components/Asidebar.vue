<template>
  <aside>
    <section class="user">
      <img class="profile-img" src="images/gatito-serio.png" alt="Gatito serio">
      <article>
        <div>
          <span class="name">{{ nombre }} {{ apellidos }}</span>
          <span class="alias">@{{ username }}</span>
        </div>
      </article>
    </section>

    <section class="options">
      <ul>
        <li>
          <img src="/icons/person.svg" alt="Perfil">
          <span>Perfil</span>
        </li>
        <li>
          <img src="/icons/message.svg" alt="Perfil">
          <span>Mensajes</span>
        </li>
        <Link to="/nueva-receta" class="enlace">
          <img src="/icons/alarm.svg" alt="Agregar receta">
          <span>Agregar receta</span>
        </Link>
        <li>
          <img src="/icons/more-options.svg" alt="Más opciones">
          <span>Más opciones</span>
        </li>
      </ul>
    </section>
  </aside>
</template>

<script>
import Link from '@/components/Link'

export default {
  components: { Link },
  data: () => ({
    nombre: '',
    apellidos: '',
    username: ''
  }),
  mounted () {
    const userInfo = JSON.parse(sessionStorage.getItem('user'))
    this.nombre = userInfo.nombre
    this.apellidos = userInfo.apellidos
    this.username = userInfo.username
  }
}
</script>

<style scoped lang="postcss">
    aside {
        @apply sticky hidden float-right pl-12;
        max-width: 520px;
        top: 180px;
    }

    .user {
        @apply grid mb-8 gap-x-8 font-poppins;
        grid-template-columns: 1fr 2fr;
    }

    .user article {
        @apply grid items-center;
    }

    .user .name {
        @apply block text-xl font-bold;
    }

    .user .alias {
        @apply block text-lg;
    }

    .profile-img {
        @apply rounded-full;
        justify-self: center;
    }

    ul {
        @apply grid gap-y-8 font-poppins;
        grid-template-rows: repeat(4, minmax(0, fit-content(100%)));
    }

    ul li, .enlace {
        @apply grid gap-x-4;
        grid-template-columns: 24px auto;
    }

     ul li {
        @apply grid gap-x-4;
        grid-template-columns: 24px auto;
    }

    ul img {
        @apply inline w-6;
    }

    ul span {
        @apply self-center inline;
    }

    @screen lg {
        aside {
            @apply block;
        }
    }
</style>
