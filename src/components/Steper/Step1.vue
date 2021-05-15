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
        <img :src="!dataStep1.image ? '/icons/upload.svg' : '/icons/check.svg'" alt="Upload icon">
        <span>{{ dataStep1.imageName ? dataStep1.imageName : 'Selecciona una imagen' }}</span>
        <input ref="fileInput" type="file" accept="image/*" @change="onFilePicked($event)">
      </div>
    </div>

    <div class="right">
      <input v-model="dataStep1.recipeName" type="text" placeholder="Nombre de la receta">

      <textarea v-model="dataStep1.recipeDesc" placeholder="Descripción" />

      <div class="buttons">
        <Button primary @click="onSubmit">
          Continuar
        </Button>
        <Button>
          Cancelar
        </Button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    dataStep1: {
      image: null,
      imageName: null,
      imageType: '',
      recipeName: '',
      recipeDesc: ''
    }
  }),
  mounted () {
    const DATA_STEP_1 = JSON.parse(sessionStorage.getItem('DATA_STEP_1'))
    if (DATA_STEP_1) {
      this.dataStep1 = DATA_STEP_1
    }
  },
  methods: {
    clickInputFile () {
      this.$refs.fileInput.click()
    },
    onFilePicked (event) {
      const inputElement = event.target
      const file = inputElement.files[0]
      const mimeType = file?.type
      const fileType = mimeType.split('/')[1]

      if (file && (mimeType.includes('image'))) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.dataStep1.image = reader.result.toString().split(',')[1]
          this.dataStep1.imageName = file.name
          this.dataStep1.imageType = fileType
        }
      } else {
        this.dataStep1.image = null
        this.dataStep1.imageName = null
        alert('Solo se permiten imágenes')
      }
    },
    onSubmit () {
      if (!this.dataStep1.image) {
        alert('Es necesaria una imagen')
      } else if (!this.dataStep1.recipeName) {
        alert('Es necesario un nombre para la receta')
      } else if (!this.dataStep1.recipeDesc) {
        alert('Es necesario una descripción para la receta')
      } else {
        sessionStorage.setItem('DATA_STEP_1', JSON.stringify(this.dataStep1))
        this.$emit('moveStep', 2)
      }
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
        @apply relative grid py-6 border rounded cursor-pointer select-none border-primary justify-items-center gap-y-2;
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

        button {
            @apply py-0;
        }
    }
</style>
