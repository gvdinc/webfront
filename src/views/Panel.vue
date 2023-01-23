<template>
  <div>
    <screen />
    <input-panel />
  </div>
  <hr>
  <data-table v-bind:shotMass="shotMass"/>
  <form @submit.prevent="getTableData()">
    <button type="submit">Получить</button>
  </form>

</template>

<script>
import Screen from "@/components/Screen";
import InputPanel from "@/components/InputPanel";
import DataTable from "@/components/DataTable";
export default {
  name: "Panel",
  components: {Screen, DataTable, InputPanel},

  data(){
    return {
      shotMass: [
        {x: 1, y: 2, R: 3, hit: true, datetime: '22.01.23 14:00', process_time: 1.3},
        {x: 1, y: 2, R: 3, hit: true, datetime: '22.01.23 14:00', process_time: 1.3},
        {x: 1, y: 2, R: 3, hit: true, datetime: '22.01.23 14:00', process_time: 1.3},
      ]
    }
  },

  methods: {
    getTableData() {
      fetch('/shots', {
        method: 'POST',
      }).then(response => response.json()).then(json => {this.shotMass = json})
          .catch(error => {
            console.log(error);
          });
    },
  }

}
</script>

<style scoped>

</style>