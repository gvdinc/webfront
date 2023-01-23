<template>

  <div>
    <table>
      <thead>
        <tr>
          <th>x</th>
          <th>y</th>
          <th>R</th>
          <th>hit</th>
          <th>datetime</th>
          <th>process_time</th>
        </tr>
      </thead>
      <tbody>
        <ShotList v-for="shotData of shotMass" v-bind:shotData="shotData"/>
      </tbody>
    </table>
  </div>
</template>

<script>
import ShotList from '@/components/ShotList'
export default {
  name: "DataTable",
  props:['shotMass'],
  components: {ShotList},

}
</script>

<style scoped lang="css">
  @import "../assets/css/tablestyle.css";
</style>