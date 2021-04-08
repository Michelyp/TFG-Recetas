<template>
  <div class="re-container">
    <div class="left-column" />
    <div class="right-column">
      <div>
        <img src="/images/yamyam.png" title="Logo" alt="Logo">
        <h1>Crea y descubre nuevas recetas</h1>
        <p>Únete a Yam Yam ahora mismo.</p>
        <div class="botones">
          <Link to="/login" class="mx-auto mb-8" btn-primary>
            Iniciar Sesión
          </Link>
          <template>
        <v-row justify="space-around">
          <v-col cols="auto">
          <v-dialog
          transition="dialog-bottom-transition"
         max-width="600"
        >
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="mx-auto" btn-secondary v-bind="attrs"
            v-on="on">
            Regístrate
          </v-btn>

        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="primary"
              dark
            >Logo debe de ir aqui con el color primario de fondo</v-toolbar>
            <v-card-text>
              <v-form ref="form" v-model="formValid">
                <div class="login-inputs">
                  <v-text-field v-model="nombreUsuario" label="Nombre de usuario" :rules="emailRules" required />
                  <v-text-field v-model="nombre" label="Nombre y Apellidos" :rules="emailRules" required />                  
                  <v-text-field v-model="email" label="Correo" :rules="emailRules" required />
                  <v-text-field v-model="password" type="password" :rules="passRules" label="Contraseña" required />
                      <v-checkbox
                        v-model="checkbox"
                        :error-messages="checkboxErrors"
                        label="Acepta los terminos y condiciones"
                        required
                        @change="$v.checkbox.$touch()"
                        @blur="$v.checkbox.$touch()"
                      ></v-checkbox>
                  <Button primary>
                    Registrate
                  </Button>                  
                </div>  
              </v-form>            
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
      </v-row>

    </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Link from '@/components/Link'
import Button from '@/components/Button'


export default {
  components: { Link,
  Button },
  data: () => ({
    formValid: false,
    email: '',
    password: '',
    snackbar: false,
    snackbarText: 'No error message',
    emailRules: [
      value => !!value || 'El correo es requerido',
      value => /^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/.test(value) || 'Ingrese un correo válido'
    ],
    passRules: [
      value => !!value || 'La contraseña es requerida'
    ]
  }),
  methods: {
    validate () {
     
    },
    getData () {
      if (this.validate()) {
        return {
          email: this.email,
          password: this.password
        }
      } else {
        return null
      }
    }

  }
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
    height: calc(58rem - 6rem);
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
  
  button {
    @apply mx-auto mb-6;
  }
  .right-column {
    @apply grid w-3/5 px-0 place-items-center;
  } 

  .login-inputs {
  @apply mb-4;
}
  .right-column img {
    @apply w-48;
  }
}
</style>
