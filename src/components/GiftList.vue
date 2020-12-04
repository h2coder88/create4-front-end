<template>
<div class="wrapper">
  <div class="list">
    <div class="item" v-for="(gift, index) in list" :key="gift.id">
      <div class="personInfo">
        <h1>{{gift.name}}</h1>
        <p>Age: {{gift.age}}</p>
      </div>
      <div class="giftInfo">
        <h1>{{gift.gift}}</h1>
        <p>Price: {{gift.price}}</p>
      </div>
      <div class="buttons">
        <button @click="updateItem(gift)" class="auto">Update</button>
        <button @click="removeFromList(gift)" class="auto">Remove From List</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GiftList',
  props: {
    list: Array
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

.list {
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

.giftInfo {
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
    width: 600px;
  }
}
</style>
