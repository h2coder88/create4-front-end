<template>
  <div class="home">
    <h1>Welcome to Your Christmas Organization Tool</h1>
    <img src="../assets/gift.png" />
    <h3>To get started, visit the "List" tab or the "Traditions" tab!</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>

  img {
    width: 300px;
  }
</style>
