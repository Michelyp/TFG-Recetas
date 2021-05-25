<template>
  <section>
    <div class="header">
      <img src="/icons/alarm-clock.svg" alt="Alarma">
      <p>
        Se recomienda poner un tiempo apróximado para la preparación de la receta
      </p>
    </div>

    <div class="specs">
      <div class="spec rations">
        <label for="rations">Número de raciones:</label>
        <input id="rations" v-model="dataStep2.rations" type="number" placeholder="Número de raciones">
      </div>

      <div class="spec setup-time">
        <label for="setup-time">Tiempo de preparación:</label>
        <input id="setup-time" v-model="dataStep2.setUpTime" type="number" placeholder="Tiempo en minutos">
      </div>

      <div class="spec category">
        <label for="category">Escoge una categoría:</label>
        <select id="category" v-model="dataStep2.category">
          <option value="">
            Selecciona
          </option>
          <option v-for="(category, index) in allCategories" :key="index" :value="category">
            {{ category }}
          </option>
        </select>
      </div>

      <div class="spec difficulty">
        <label for="difficulty">Dificultad:</label>
        <select id="difficulty" v-model="dataStep2.difficulty">
          <option value="">
            Selecciona
          </option>
          <option v-for="(difficulty, index) in allDifficulties" :key="index" :value="difficulty">
            {{ difficulty }}
          </option>
        </select>
      </div>

      <div class="spec gastronomy">
        <label for="gastronomy">Gastronomía:</label>
        <select id="gastronomy" v-model="dataStep2.gastronomy">
          <option value="">
            Selecciona
          </option>
          <option v-for="(gastronomy, index) in allGastronomies" :key="index" :value="gastronomy">
            {{ gastronomy }}
          </option>
        </select>
      </div>

      <div class="spec cook-time">
        <label for="cook-time">Tiempo de cocina:</label>
        <input id="cook-time" v-model="dataStep2.cookTime" type="number" placeholder="Tiempo en minutos">
      </div>

      <div class="buttons">
        <Button primary @click="onSubmit">
          Continuar
        </Button>
        <Button @click="previous">
          Retroceder
        </Button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    allDifficulties: ['fácil', 'moderado', 'difícil'],
    allGastronomies: ['macrobiótica', 'frugívora', 'naturista', 'vegetariana'],
    allCategories: ['acompañamientos', 'bebidas', 'ensaladas', 'entrantes', 'postres y desayunos', 'primeros', 'segundos', 'salsas y bases'],
    dataStep2: {
      rations: null,
      category: '',
      gastronomy: '',
      setUpTime: null,
      difficulty: '',
      cookTime: null
    }
  }),
  mounted () {
    const DATA_STEP_2 = JSON.parse(sessionStorage.getItem('DATA_STEP_2'))
    if (DATA_STEP_2) {
      this.dataStep2 = DATA_STEP_2
    }
  },
  methods: {
    onSubmit () {
      if (!this.dataStep2.rations) {
        alert('Es necesario el número de raciones')
      } else if (!this.dataStep2.category) {
        alert('Es necesario asignar una categoría')
      } else if (!this.dataStep2.gastronomy) {
        alert('Es necesario asignar una gastronomía')
      } else if (!this.dataStep2.setUpTime) {
        alert('Es necesario el tiempo de preparación')
      } else if (!this.dataStep2.difficulty) {
        alert('Es necesario asignar una dificultad')
      } else if (!this.dataStep2.cookTime) {
        alert('Es necesario el tiempo de cocinado')
      } else {
        sessionStorage.setItem('DATA_STEP_2', JSON.stringify(this.dataStep2))
        this.$emit('moveStep', 3)
      }
    },
    previous () {
      sessionStorage.setItem('DATA_STEP_2', JSON.stringify(this.dataStep2))
      this.$emit('moveStep', 1)
    }
  }
}
</script>

<style scoped lang="postcss">
    section {
        @apply px-4 py-8 rounded-b-xl;
        border: 1px solid #A29595;
        box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .header {
        @apply grid items-center justify-center pb-8 gap-x-6;
        color: #370606;
        grid-template-columns: repeat(2, fit-content(100%));
    }

    .header img {
        @apply h-16;
    }

    .header p {
        @apply my-8 leading-tight;
    }

    .specs {
        @apply grid grid-cols-1 gap-y-4;
    }

    .spec {
        @apply grid;
        grid-template-rows: repeat(2, fit-content(100%));
    }

    .spec label {
        @apply text-black;
    }

    .spec select {
        @apply capitalize;
        background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='isolation:isolate' viewBox='0 0 124 68' width='124pt' height='68pt'%3E%3Cdefs%3E%3CclipPath id='_clipPath_cPi1n772FBrvzOYLSmwUJQ9ETHuaPaSX'%3E%3Crect width='124' height='68'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url(%23_clipPath_cPi1n772FBrvzOYLSmwUJQ9ETHuaPaSX)'%3E%3CclipPath id='_clipPath_GtCziRMeIOtCvs9WFEpczL4deinf64zo'%3E%3Crect x='0' y='0' width='124' height='68' transform='matrix(1,0,0,1,0,0)' fill='rgb(255,255,255)'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23_clipPath_GtCziRMeIOtCvs9WFEpczL4deinf64zo)'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d=' M 1.779 10.2 L 57.779 66.2 C 60.079 68.5 63.879 68.5 66.18 66.2 L 122.18 10.2 C 125.98 6.399 123.28 0 117.98 0 L 5.98 0 C 0.679 0 -2.021 6.399 1.779 10.2 Z ' fill='rgb(146, 146, 146)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: right calc(.375em + .1875rem) center;
        background-size: calc(.75em + .375rem) calc(.75em + .375rem);
    }

    .spec option {
        @apply capitalize;
    }

    .spec input,
    .spec select {
        @apply px-4 py-2 border border-solid outline-none rounded-xl border-primary;
    }

    .spec input::placeholder {
        color: #6A6767;
    }

    .buttons {
        @apply grid grid-rows-2 mt-6 justify-items-center gap-y-4;
    }

    @screen lg {
        section {
            @apply px-16;
        }

        .header {
            grid-template-columns: 0.5fr 1.5fr;
        }

        .header img {
            @apply justify-self-center;
        }

        .specs {
            @apply grid-cols-2 gap-y-4 gap-x-16;
            grid-template-areas: "rations setup-time"
                                "category difficulty"
                                "gastronomy cook-time"
                                "empty buttons";
        }

        .rations {
            grid-area: rations;
        }

        .setup-time {
            grid-area: setup-time;
        }

        .category {
            grid-area: category;
        }

        .difficulty {
            grid-area: difficulty;
        }

        .gastronomy {
            grid-area: gastronomy;
        }

        .cook-time {
            grid-area: cook-time;
        }

        .buttons {
            grid-area: buttons;
            @apply grid-cols-2 grid-rows-1 gap-x-6;
        }
    }
</style>
