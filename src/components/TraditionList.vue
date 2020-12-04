<template>
<div class="wrapper">
  <div class="traditions">
    <div class="item" v-for="(tradition, index) in traditions" :key="tradition.id">
      <div class="traditionInfo">
        <h3>{{tradition.name}}, Years: {{tradition.years}}</h3>
        <h4>Tradition:</h4>
        <p>{{tradition.tradition}}</p>
      </div>
      <div class="buttons">
        <button @click="updateItem(tradition)" class="auto">Update</button>
        <button @click="removeFromList(tradition)" class="auto">Remove From List</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'TraditionList',
  props: {
    traditions: Array
  },
  methods: {
      removeFromList(item) {
        try {
          this.$parent.deleteItem(item);
          return true;
        } catch (error) {
          console.log(error);
        }
      },
      updateItem(item) {
        try {
          this.$parent.update(item);
          return true;
        } catch (error) {
          console.log(error);
        }
      },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.traditions {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
}

.item {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px;
  width: 400px;
  background-color: lightgray;
  border: solid;
}

.personInfo {
  display: flex;
  flex-direction: column;
  width: 200px;
  text-align: center;

}

.traditionInfo {
  display: flex;
  flex-direction: column;
  width: 200px;
  text-align: center;
}

.buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

button {
  height: 50px;
  width: 150px;
  background: #AFAFAF;
  color: black;
  border: none;
  margin: auto;
}

.auto {
  margin-left: auto;
}

@media only screen and (min-width: 600px) {
  .item {
    width: 600px
  }
}
</style>
