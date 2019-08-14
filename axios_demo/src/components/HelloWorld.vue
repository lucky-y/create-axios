<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
import { apiAddress } from '../api/api'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    apiAddress.two({type: 0, code: 1}).then( res => {
      this.$toast(res)
    }).catch(
      this.$toast('请求失败')
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
