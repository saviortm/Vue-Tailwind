<template>
<div>
  <router-view :user="user"/>
</div>
</template>
<script>
import axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      user: null
    }
  },
  async created() {
    const response = await axios.get('/api/users/2');
    this.user = response.data;
  }
}
</script>
<style>
@import "./output.css";
@import "./styles.css";
</style>
