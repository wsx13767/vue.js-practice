<template>
  <div>
    <label for="number"></label>
    <input type="number" name="number" placeholder="Enter a number" v-model="number"/>
    <button @click="addNumber">Add number</button>
  </div>
</template>
<script>
import EventBus from "../EventBus.js"
import {store} from "../store.js"

export default {
  data() {
    return {
      number: 0
    }
  },
  methods: {
    addNumber() {
      EventBus.$emit('addNumber', parseInt(this.number))
      store.addNumber(this.number)
    }
  }
}
</script>