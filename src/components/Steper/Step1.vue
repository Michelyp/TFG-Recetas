<template>
  <section>
    <div class="left">
      <div class="notice">
        <div class="header">
          <img src="/images/cookbook.png" alt="Libro de cocina">
          <span>Nombre</span>
        </div>

        <p>
          El nombre será visible por todos tus contactos
          <br>
          Así que escoge un buen nombre :D
        </p>
      </div>

      <div class="upload" @click="clickInputFile">
        <img src="/icons/upload.svg" alt="Upload icon">
        <span>{{ imageName }}</span>
        <input ref="fileInput" type="file" accept="image/*" @change="onFilePicked">
      </div>
    </div>

    <div class="right">
      <input type="text" placeholder="Nombre de la receta">

      <textarea placeholder="Descripción" />

      <div class="buttons">
        <Button primary class="continuar">
          Continuar
        </Button>
        <Button class="cancelar">
          Cancelar
        </Button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    image: null,
    imageName: 'Selecciona una imagen'
  }),
  methods: {
    clickInputFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const files = event.target.files
      this.imageName = files[0].name
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    }
  }
}
</script>

<style scoped lang="postcss">
    section {
        @apply grid px-4 py-8 rounded-b gap-y-16;
        border: 1px solid #A29595;
        box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .left .header {
        @apply grid items-center justify-center text-2xl font-bold gap-x-6;
        color: #370606;
        grid-template-columns: repeat(2, fit-content(100%));
    }

    .notice p {
        @apply my-8 leading-tight;
    }

    .upload {
        @apply relative grid py-6 border rounded cursor-pointer border-primary justify-items-center gap-y-2;
    }

    .upload img {
        @apply h-6;
    }

    .upload span {
        @apply text-primary;
    }

    .upload input {
        @apply absolute hidden;
        height: 1px;
    }

    .right {
        @apply grid gap-y-8;
    }

    .right input {
        @apply px-4 py-2 border border-solid rounded outline-none border-primary;
    }

    .right input::placeholder {
        color: #6A6767;
    }

    .right textarea {
        @apply w-full h-32 px-4 py-2 border border-solid rounded outline-none resize-none border-primary;
    }

    .right textarea::placeholder {
        color: #6A6767;
    }

    .right .buttons {
        @apply grid w-full justify-items-center gap-y-4;
    }

    @screen lg {
        section {
            @apply grid-cols-2 px-8 gap-y-0 gap-x-8;
        }

        .left {
            @apply px-16;
        }

        .right {
            @apply px-16 gap-y-4;
        }

        .right input {
            @apply py-0;
        }

        .right textarea {
            @apply pt-4;
        }

        .buttons {
            @apply grid-cols-2 gap-y-0 gap-x-4;
        }

        .continuar {
            @apply py-0;
        }

        .cancelar {
            @apply py-0;
        }
    }
</style>
