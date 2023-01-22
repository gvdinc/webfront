<template>
  <div id="register-container">
    <form class="RegisterForm" id="new_user" method="post" @submit.prevent="createPostLog">
      <label for="reg_user_login">Username or email</label>
      <input id="reg_user_login" type="text" v-model="formData.login">

      <label for="reg_user_password">Password</label>
      <input id="reg_user_password" type="text" v-model="formData.password">

      <label for="repeat_password">Password</label>
      <input id="repeat_password" type="text" v-model="formData.password_repeat">

      <p class="gl-field-error hidden">This field is required.</p>

      <button class="submit-button" type="submit" id="regButton">Register</button>
      <RouterLink to="/">Login</RouterLink>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegistrationInputForm",

  data() {
    return {
      formData: {
        login: '',
        password: '',
        password_repeat: ''
      }
    }
  },

  methods: {
    createPostLog() {
      if (!this.verifyData()) {return}
      fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: this.formData.login,
          password: this.formData.password,
        }),
      }).then(response => {
        console.log(response);
      })
          .catch(error => {
            console.log(error);
          });
    },

    verifyData(){
      return (22 >= this.formData.login.length >= 8 && 22 >= this.formData.password.length >= 8 &&
          this.formData.password_repeat === this.formData.password);
    }
  }
}
</script>

<style scoped>

</style>