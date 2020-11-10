<template>
  <div class="site-map">
    <div class="title">个人博客's SiteMap</div>
    <div class="nav">
      <ul>
        <li>
          <router-link to="/">博客首页</router-link>
        </li>
        <li class="sp">/</li>
        <li>站点地图</li>
      </ul>
    </div>
    <div class="list">
      <span>最新文章</span>
      <ul>
        <li v-for="data in blogs" :key="data.id">
          <router-link :to="'/blog/' + data.id">{{ data.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      blogs: [],
    };
  },
  methods: {
    async setData() {
       let data = await axios.get(
        "http://localhost:8081/api/getBlogAll?page=1&size=50"
      );

      this.blogs = data.rows;

    },
  },
  mounted() {
    this.setData();
  },
};
</script>


<style scoped>
.site-map > .title {
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 18px;
  color: #000000;
  font-weight: 700;
}

.site-map > .title {
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 18px;
  color: #000000;
  font-weight: 700;
}

.site-map > .nav > ul {
  box-sizing: border-box;
  padding: 0px 10px;
  width: 95%;
  height: 30px;
  margin: 0 auto;
  border: 1px solid #eeeeee;
  display: flex;
  align-items: center;
}

.site-map > .nav > ul {
  width: 95%;
  height: 30px;
  margin: 0 auto;
  border: 1px solid #eeeeee;
  display: flex;
  align-items: center;
}

.site-map > .nav > ul > li {
  font-size: 14px;
  color: #333;
}

.site-map > .nav > ul > li > a {
  font-size: 14px;
  color: #333;
  font-weight: 700;
}

.site-map > .nav > ul > .sp {
  margin: 0px 4px;
}

.site-map > .list {
  box-sizing: border-box;
  padding: 20px 10px;
  width: 95%;
  margin: 10px auto 0;
  border: 1px solid #eeeeee;
}

.site-map > .list > span {
  color: #000000;
  font-size: 14px;
  font-weight: 700;
}

.site-map > .list > span {
  color: #000000;
  font-size: 14px;
  font-weight: 700;
}

.site-map > .list > ul {
  margin: 10px 0 0 25px;
}

.site-map > .list > ul > li > a {
  text-decoration: underline;
  color: #333;
  font-size: 12px;
}
</style>