<template>
  <div class="about">
    <h1>This is an about page</h1>
    <label for="userId">User Id: </label><input id="userId" type="text" v-model="userId"><br>
    <label for="userName">User Name: </label><input type="text" id="userName" v-model="userName"><br>
    <label for="message">Message: </label><input type="text" id="message" v-model="message"><br>
    <button @click="gotoUser">Click to User Page</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: '',
      userName: '',
      message: ''
    }
  },
  methods: {
    gotoUser() {
      this.$router.push({
        name: 'User',
        params: {
          id: this.userId,
          message: this.message
        },
        query: {
          userName: this.userName
        }
      });
    }
  }
}
</script>