<template>
  <div id="sign-in-container">
    <form class="LoginForm" id="new_user" method="post" @submit.prevent="createPostLog">
      <label for="user_login">Username or email</label>
      <input id="user_login" type="text" v-model="formData.login">

      <label for="user_password">Password</label>
      <input id="user_password" type="password" v-model="formData.password">

      <p class="gl-field-error hidden">{{mistake_message}}</p>

      <button class="submit-button" type="submit" id="logButton">Login</button>
      <RouterLink to="/registration">Registration</RouterLink>
    </form>
  </div>
</template>

<script>
import "../scripts/hashcoder"

export default {
  name: "LoginInputForm",

  data() {
    return {
      formData: {
        login: '',
        password: ''
      },
      state: '',
      mistake_message: ''
    }
  },

  methods: {
    createPostLog() {
      if (!this.verifyData()) {return}
      fetch('/login', {
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
        this.state = response.get("login_state")
        switch (this.state){
          case "none":
            console.log("login operation dismissed");
            this.mistake_message = "";
            break;
          case "logon":
            this.mistake_message = "";
            window.location.href = '/panel';
            break;
          case "wrong_login":
            this.mistake_message = "Wrong Login";
            break;
          case "wrong_password":
            this.mistake_message = "Wrong Login";
            break;
        }

       })
          .catch(error => {
            console.log(error);
          });
    },

    verifyData(){
      return (this.formData.login.length > 0 && this.formData.password.length > 0);
    }
  }
}
</script>

<style scoped>

</style>