<template>
  <div class="list">
    <h1>Fill out your Christmas list!</h1>
    <div class="form">
      <div class="data">
        <div class="side">
          <input v-model="newName" placeholder="Name">
          <p></p>
          <input v-model="newAge" placeholder="Age">
          <p></p>
        </div>
        <div class="side">
          <input v-model="newGift" placeholder="Gift Name">
          <p></p>
          <input v-model="newPrice" placeholder="Gift Price">
          <p></p>
        </div>
      </div>
      <button @click="upload">Add to List</button>
    </div>
    <div class="spacer" v-if="updateItem"/>
    <div class="form" v-if="updateItem">
      <div class="data">
        <div class="side">
          <input v-model="updateName" placeholder="Name">
          <p></p>
          <input v-model="updateAge" placeholder="Age">
          <p></p>
        </div>
        <div class="side">
          <input v-model="updateGift" placeholder="Gift Name">
          <p></p>
          <input v-model="updatePrice" placeholder="Gift Price">
          <p></p>
        </div>
      </div>
      <button @click="editItem()">Update</button>
    </div>
    <GiftList :list="list" />
  </div>

</template>

<script>
import axios from 'axios';

import GiftList from "../components/GiftList.vue"
export default {
  name: 'List',
  components: {
    GiftList
  },
  data() {
    return {
      items: [],
      searchText: '',
      newName: '',
      newAge: '',
      newGift: '',
      newPrice: '',
      updateName: '',
      updateAge: '',
      updateGift: '',
      updatePrice: '',
      updateItem: null,
    }
  },
  computed: {
    list() {
      return this.items;
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    async upload() {
    try {
      console.log("upload");
      let r1 = await axios.post('/api/list', {
        name: this.newName,
        age: this.newAge,
        gift: this.newGift,
        price: this.newPrice
      });
      this.getItems();
    } catch (error) {
      console.log(error);
    }
  },
  update(item) {
    this.updateItem = item;
    this.updateName = item.name;
    this.updateAge = item.age;
    this.updateGift = item.gift;
    this.updatePrice = item.price;
  },
  async getItems() {
    try {
      let response = await axios.get("/api/list");
      this.items = response.data;
      return true;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteItem(item) {
    try {
      await axios.delete("/api/list/" + item._id);
      this.getItems();
      return true;
    } catch (error) {
      console.log(error);
    }
  },
  async editItem() {
    try {
      await axios.put("/api/list/" + this.updateItem._id, {
        name: this.updateName,
        age: this.updateAge,
        gift: this.updateGift,
        price: this.updatePrice,
      });
      this.updateItem = null;
      this.getItems();
      return true;
    } catch (error) {
      console.log(error);
    }
  },
  }
}
</script>

<style scoped>

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
}

.form {
  margin: 10px;
  margin-right: 50px;
}

.spacer {
  height: 10px;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}

/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}

button {
  margin: 10px;
}

@media only screen and (min-width: 600px) {
  .form {
    border: solid;
    width: 600px;
    margin: auto;
  }

  .data {
    display: flex;
    justify-content: space-around;
  }

  .side {
    padding: 10px;
  }
}
</style>
