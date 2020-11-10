<template>
  <div class="hotblog">
    <h3>最近热门</h3>
    <ul>
      <li v-for="data in blogs" :key="data.id">
        <router-link :to="'/blog/' + data.id">{{ data.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["blogs"],
};
</script>


<style scoped>
@keyframes textColor {
  0% {
    color: aquamarine;
  }
  25% {
    color: brown;
  }
  50% {
    color: cornflowerblue;
  }
  75% {
    color: darkkhaki;
  }
  100% {
    color: indianred;
  }
}

.hotblog {
  width: 360px;
  background-color: #1f1f1f;
  border-radius: 3px;
  overflow: hidden;
}

.hotblog h3 {
  box-sizing: border-box;
  font-size: 14px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 0;
  padding: 0;
  padding-left: 15px;
  background-color: #191818;
  font-weight: normal;
  animation: textColor 20s both infinite alternate;
}

.hotblog ul li {
  box-sizing: border-box;
  font-size: 14px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 15px;
  border-bottom: 1px solid #292929;
}

.hotblog ul li:last-of-type {
  border: none;
}

.hotblog ul li a {
  color: floralwhite;
  transition: all 0.5s;
}

.hotblog ul li a:hover {
  color: #337ab7;
}
</style>