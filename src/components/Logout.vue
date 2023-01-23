<template>
<form @submit="logoutPOST();" action="/">
  <button type="submit" id="logout_button" />
</form>
</template>

<script>
export default {
  name: "Logout",

  methods: {
    logoutPOST(){
      fetch('/register', {
        method: 'POST',
      }).then(response => {
        console.log(response);
      })
          .catch(error => {
            console.log(error);
          });
    },
  }
}
</script>

<style scoped>

</style>