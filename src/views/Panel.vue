<template>
  <div>
    <screen />
    <input-panel />
  </div>
  <hr>
  <data-table />
</template>

<script>
import Screen from "@/components/Screen";
import InputPanel from "@/components/InputPanel";
import DataTable from "@/components/DataTable";
export default {
  name: "Panel",
  components: {Screen, DataTable, InputPanel}
}
</script>

<style scoped>

</style>