<template lang="html">
  <div>
    <el-row :gutter="20">
      <div id="contain">
      <el-col :span="2" v-for="food in allfood"  id="bingkai" >
        <img :src="food.img_url" style="width: 210px;" @click="addToCart(food)">
        <h4><center>{{ food.name }}</center></h4>
      </el-col>
    </div>
    </el-row>
    <hr>
    <center>
    <h1>Orders</h1>
    <table>
      <thead>
        <tr>
          <th style="text-align: left"><h3>Item Name</h3></th>
          <th><h3>Price</h3></th>
          <th><h3>Quantity</h3></th>
          <th><h3>SubTotal</h3></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="food in cart" id="details">
          <td width="250px">{{ food.name }}</td>
          <td width="100px"><center>Rp {{ food.price }},-</center></td>
          <td><input type="number" min=0 v-model="food.quantity" @click="getTotal"></td>
          <td width="100px"><center>Rp {{food.price * food.quantity}},-</center></td>
        </tr>
      </tbody>
    </table>
    <h1>Total: Rp {{total}},-</h1>
    <h3>Terbilang: {{say}}</h3>
    <el-button type="danger" size="large" @click="checkout()" id="checkoutButton">Checkout</el-button>
  </center>
  </div>
</template>

<script>
import axios from 'axios'
import convertToText from 'number-to-words-rupiah'
import { Notification } from 'element-ui';

export default {
  data() {
    return {
      allfood: [],
      cart: [],
      transactions: [],
      total: 0,
      say: ''
    }
  },
  methods: {
    getAllFood: function () {
      let self = this;
      axios.get('http://localhost:3000/foods')
      .then(function (response) {
        console.log(response);
        response.data.map(function(food) {
          food.quantity = 1;
          food.checked = false;
          self.allfood.push(food)
        })
      })
      .catch(function(error) {
        console.log(error);
      })
    },
    addToCart(food){
      var idx = this.cart.indexOf(food)
      console.log(idx);
      if(idx == -1) {
        this.cart.push(food)
      } else {
        this.cart[idx].quantity = parseInt(this.cart[idx].quantity)
        this.cart[idx].quantity += 1
      }
      this.getTotal()
      this.terbilang()
    },
    getTotal(){
      this.total = 0
      for(let i = 0; i < this.cart.length; i++){
        this.total += this.cart[i].quantity * this.cart[i].price
      }
      return this.total
    },
    checkout() {
      let self = this
      for(let i = 0; i < this.cart.length; i++){
        self.transactions.push({quantity: this.cart[i].quantity, food: this.cart[i]._id})
      }
      console.log(self.getTotal());
      axios.post('http://localhost:3000/transactions', {food_list: self.transactions, total: self.getTotal()})
      .then(function(response){
        console.log(response);
        Notification.success({
          title: 'Success',
          message: 'Transactions added to database',
          offset: 500
        });
      })
      .catch(function(err){
        console.log(err)
      })
    },
    terbilang() {
      this.say = convertToText(this.total)
    }
  },
  mounted() {
    this.getAllFood()
  }
}
</script>

<style lang="css">
#bingkai {
  padding-top: 10px;
  border: 1px solid;
  height: 230px;
  margin: 5px;
  width: 230px;
}

#contain {
  margin-left: 30px;
}

#details td {
  font-size: 15pt;
}

tr:nth-child(even) {
  background-color: #f2f2f2
}

#checkoutButton {
  margin-bottom: 50px;
}
</style>
