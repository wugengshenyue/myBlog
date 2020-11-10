<template>
  <div class="blog">
    <top-nav />
    <div class="core">
      <div class="left">
        <blog-content v-bind="blog" />
      </div>
      <right-nav />
    </div>
  </div>
</template>




<script>
import axios from "axios";
import TopNav from "@/components/nav.vue";
import RightNav from "@/components/rightNav.vue";
import BlogContent from "@/components/blogContent.vue";

export default {
  components: {
    TopNav,
    RightNav,
    BlogContent,
  },
  data() {
    return {
      blog: {},
    };
  },
  computed: {
    blogId() {
      return this.$route.params.id;
    },
  },
  methods: {
    async getBlog() {
      this.blog = await axios.get(
        `http://localhost:8081/api/getBlog?id=${this.blogId}`
      );
    },
  },
  mounted() {
    this.getBlog();
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.getBlog();
  },
};
</script>

<style scoped>
.blog {
  padding-top: 80px;
  background-image: url(../assets/bg.jpg);
  min-height: 100%;
  box-sizing: border-box;
}

.blog .core {
  width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
</style>