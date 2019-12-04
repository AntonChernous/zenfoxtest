<template src="./Home.html"></template>

<script>
// @ is an alias to /src
import UserList from '@/components/UserList/UserList.vue'

export default {
  name: 'home',
  components: {
    UserList
  }
}
</script>

<style scoped>
    #home{
        max-width: 900px;
        margin: auto;
    }
</style>