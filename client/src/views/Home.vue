<template>
  <div class="home">
    <top-nav />
    <div class="core">
      <div class="left">
        <every-day v-bind="everyday" :style="{ marginBottom: '20px' }" />

        <blog
          :style="{ marginBottom: '20px' }"
          v-for="data in blogs"
          :key="data.id"
          v-bind="data"
        />

        <turn-page
          :current="current"
          :pagesize="pageSize"
          :total="total"
          :displaypage="displayPage"
          @click="hanlePageChange"
        />

        <span v-if="!total">Sorry, 还没有文章发布。</span>
      </div>

      <right-nav />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TopNav from "@/components/nav.vue";
import RightNav from "@/components/rightNav.vue";
import EveryDay from "@/components/everyDay.vue";
import Blog from "@/components/blog.vue";
import TurnPage from "@/components/turnPage.vue";

export default {
  name: "Home",
  components: {
    TopNav,
    RightNav,
    EveryDay,
    Blog,
    TurnPage,
  },
  data() {
    return {
      pageSize: 10,
      total: 0,
      displayPage: 7,
      blogs: [],
      everyday: {},
    };
  },
  methods: {
    hanlePageChange(newPage) {
      if (this.tag) {
        this.$router.push({
          path: `/tag/${this.tag}`,
          query: { page: newPage },
        });
      } else {
        this.$router.push({
          path: "/",
          query: { s: this.keyword, page: newPage },
        });
      }
    },
    async setBlogs() {
      let data;
      if (this.tag) {
        data = await axios.get(
          `http://localhost:8081/api/getTagBlogAll?tag=${this.tag}&page=${this.current}&size=${this.pageSize}`
        );
      } else {
        data = await axios.get(
          `http://localhost:8081/api/getBlogAll?page=${this.current}&size=${this.pageSize}&keyword=${this.keyword}`
        );
      }

      if (data) {
        this.total = data.count;
        this.blogs = data.rows;
      }
    },
    async setEveryDay() {
      this.everyday = await axios.get("http://localhost:8081/api/getEveryDay");
    },
  },
  mounted() {
    this.setBlogs();
    this.setEveryDay();
  },
  watch: {
    $route: function () {
      this.setBlogs();
      this.setEveryDay();
    },
  },
  computed: {
    keyword() {
      let { s: keyword } = this.$route.query;
      if (keyword === undefined) {
        keyword = "";
      }
      return keyword;
    },
    current() {
      let { page } = this.$route.query;

      if (page === undefined) {
        page = 1;
      }
      return parseInt(page);
    },
    tag() {
      let { id: tag } = this.$route.params;

      if (tag === undefined) {
        tag = "";
      }

      return tag;
    },
  },
};
</script>


<style scoped>
.home {
  min-height: 100%;
  padding-top: 80px;
  background-image: url(../assets/bg.jpg);
  box-sizing: border-box;
}

.home .core {
  width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
</style>