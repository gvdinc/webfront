<template>
  <tr>
    <th>{{shotData.x}}</th>
    <th>{{shotData.y}}</th>
    <th>{{shotData.R}}</th>
    <th>{{shotData.hit}}</th>
    <th>{{shotData.datetime}}</th>
    <th>{{shotData.process_time}}</th>
  </tr>
</template>

<script>

export default {
  name: "ShotList",
  props: {
    shotData: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>