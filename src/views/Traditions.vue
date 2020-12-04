<template>
  <div class="list">
    <h1>Add Your Tradition!</h1>
    <div class="form">
      <div class="data">
        <div class="side">
          <input v-model="newName" placeholder="Name">
          <p></p>
          <input v-model="newYears" placeholder="Years with tradition">
          <p></p>
        </div>
        <div class="side">
          <textarea v-model="newTradition" placeholder="Tradition Description" />
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
          <input v-model="updateYears" placeholder="Years with tradition">
          <p></p>
        </div>
        <div class="side">
          <textarea v-model="updateTradition" placeholder="Tradition Description" />
          <p></p>
        </div>
      </div>
      <button @click="editItem()">Update</button>
    </div>
    <TraditionList :traditions="traditions" />
  </div>
</template>

<script>
import axios from 'axios';

import TraditionList from "../components/TraditionList.vue"
export default {
  name: 'Traditions',
  components: {
    TraditionList
  },
  data() {
    return {
      items: [],
      searchText: '',
      newName: '',
      newYears: '',
      newTradition: '',
      updateName: '',
      updateYears: '',
      updateTradition: '',
      updateItem: null,
    }
  },
  computed: {
    traditions() {
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
      let r1 = await axios.post('/api/traditions', {
        name: this.newName,
        years: this.newYears,
        tradition: this.newTradition
      });
      this.getItems();
    } catch (error) {
      console.log(error);
    }
  },
  update(item) {
    this.updateItem = item;
    this.updateName = item.name;
    this.updateYears = item.years;
    this.updateTradition = item.tradition;
  },
  async getItems() {
    try {
      let response = await axios.get("/api/traditions");
      this.items = response.data;
      return true;
    } catch (error) {
      console.log(error);
    }
  },
  async deleteItem(item) {
    try {
      await axios.delete("/api/traditions/" + item._id);
      this.getItems();
      return true;
    } catch (error) {
      console.log(error);
    }
  },
  async editItem() {
    try {
      await axios.put("/api/traditions/" + this.updateItem._id, {
        name: this.updateName,
        years: this.updateYears,
        tradition: this.updateTradition,
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

textarea {
  width: 300px;
  height: 100px;
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
