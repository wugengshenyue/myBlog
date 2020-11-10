<template>
  <div class="nav">
    <div class="core">
      <div class="left">
        <router-link to="/">个人博客 | 技术博客</router-link>
        <ul>
          <li><router-link to="/">首页</router-link></li>
          <li><router-link to="/sitemap">地图</router-link></li>
          <li><router-link to="/about">关于</router-link></li>
          <li><router-link to="/guestbook">留言</router-link></li>
        </ul>
      </div>

      <div class="right">
        <div class="search">
          <input v-model="keyword" type="text" placeholder="输入关键词查找" />
          <button @click="search">搜索</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    search() {
      this.$router.push({ path: "/", query: { s: this.keyword } });
    },
  },
};
</script>




<style scoped>
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #191818;
}

.nav > .core {
  display: flex;
  width: 1140px;
  height: 100%;
  margin: 0 auto;
  justify-content: space-between;
}

.nav .core .left {
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
}

.nav .core .left a {
  color: #eee;
  transition: color 0.3s;
}

.nav .core .left a:hover {
  color: #999;
}

.nav .core .left ul {
  height: 100%;
  display: flex;
  align-items: center;
}

.nav .core .left ul li {
  margin-left: 30px;
  font-size: 14px;
}

.nav .core .right {
  height: 100%;
}

.nav .core .right .search {
  height: 100%;
  display: flex;
  align-items: center;
}

.nav .core .right .search input {
  width: 180px;
  height: 26px;
  border-radius: 3px;
  border: 1px solid oldlace;
  outline: none;
  padding: 2px 10px;
  color: #555;
  background-color: #fff;
}

.nav .core .right .search button {
  cursor: pointer;
  margin-left: 5px;
  border-radius: 3px;
  width: 55px;
  height: 32px;
  border: 1px solid oldlace;
  outline: none;
  color: #333;
  background-color: #fff;
  transition: all 0.2s;
}

.nav .core .right .search button:hover {
  background-color: #eee;
}
</style>
