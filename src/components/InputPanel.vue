<template>
  <logout/>
<form class="panel-form" id="input_panel" @submit.prevent="createPost()">
  <label for="x_in" >input coordinate x</label>
  <input class="cord-input" id="x_in" v-model="x">

  <label for="y_in" >input coordinate y</label>
  <input class="cord-input" id="y_in"  v-model="y">

  <label for="R_in" >input radius R</label>
  <input class="cord-input" id="R_in" v-model="R">

  <button name="button" type="submit" class="submit-button auto-disable">CHECK</button>
</form>
</template>

<script>
import Logout from "@/components/Logout";
export default {
  name: "InputPanel",
  components: {Logout},
  data(){
      return{
        x: '',
        y: '',
        R: '',
      }
  },

  methods: {
    createPost() {
      if (!this.verifyData()) {
        return
      }
      fetch('/shot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          x: this.x,
          y: this.y,
          R: this.R
        }),
      }).then(response => {
        console.log(response);
      })
          .catch(error => {
            console.log(error);
          });
    },

    verifyData(){
      return (this.x.length > 0 && this.y.length > 0 && this.R.length > 0)
    }
  }
}
</script>

<style scoped>

</style>