<template>
  <div class="home">
    <top-nav/>
    <HotBlog/>
  </div>
</template>


<style scoped>



</style>


<script>
import TopNav from '@/components/nav.vue'
import HotBlog from '@/components/newComment.vue'


export default {
  name: 'Home',
  components: {
    TopNav,
    HotBlog
  }
}


</script>
