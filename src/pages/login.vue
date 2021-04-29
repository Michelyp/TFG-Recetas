<template>
  <section class="tw-container">
    <div class="head">
      <img src="/images/yamyam.png" title="Logo" alt="Logo">
      <p>
        Iniciar sesión
      </p>
    </div>
    <v-form ref="form" v-model="formValid">
      <div class="login-inputs">
        <v-text-field v-model="email" label="Correo" :rules="emailRules" required />
        <v-text-field v-model="password" type="password" :rules="passRules" label="Contraseña" required />
      </div>
      <Button primary @click="validate">
        Iniciar sesión
      </Button>
      <Button secondary>
        Registrate
      </Button>
      <small>¿Olvidaste tu contraseña?</small>
      <v-snackbar
        v-model="snackbar"
        :timeout="4000"
        absolute
        bottom
        center
      >
        {{ snackbarText }}
      </v-snackbar>
    </v-form>
  </section>
</template>

<script>
import Button from '@/components/Button'

export default {
  components: {
    Button
  },
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
      this.$fire.auth.signInWithEmailAndPassword(this.email, this.password)
        .catch(function (error) {
          this.snackbarText = error.message
          this.snackbar = true
        }).then((user) => {
        // we are signed in
          this.$fire.firestore.collection('user').doc(user.user.uid).get()
            .then((doc) => {
              if (doc.exists) {
                console.log('Document data:', doc.data())
                sessionStorage.setItem('user', JSON.stringify(doc.data()))
              } else {
                // doc.data() will be undefined in this case
                console.log('No such document!')
              }
              this.$nuxt.$router.push('/home')
              console.log(user)
              return this.$refs.form.validate()
            }).catch((error) => {
              console.log('Error getting document:', error)
            })
        })
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
section {
  @apply max-w-screen-sm min-h-screen;
}

img {
  @apply w-32 mx-auto;
}

.head {
  @apply mb-8 text-center;
}

p {
  @apply text-4xl font-bold;
}

form {
  @apply flex flex-col flex-no-wrap text-center;
}

.login-inputs {
  @apply mb-4;
}

button {
  @apply mx-auto mb-6;
}

small {
  @apply opacity-75;
}
</style>
