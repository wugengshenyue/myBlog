<template>
  <div class="every-day">
    <p class="title">
      <span>每日一句</span>
      <span class="iconfont">&#xe646;</span>
    </p>
    <p class="content" v-html="content"></p>
  </div>
</template>

<script>
export default {
  props: ["content", "time"],
};
</script>


<style scoped>
@font-face {
  font-family: "iconfont";
  src: url("../assets/font/iconfont.eot");
  src: url("../assets/font/iconfont.eot?#iefix") format("embedded-opentype"),
    url("../assets/font/iconfont.woff2") format("woff2"),
    url("../assets/font/iconfont.woff") format("woff"),
    url("../assets/font/iconfont.ttf") format("truetype"),
    url("../assets/font/iconfont.svg#iconfont") format("svg");
}

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

.iconfont {
  font-family: "iconfont" !important;
  font-size: 12px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-left: 1px;
  transform: translateY(1px);
}

.every-day {
  width: 750px;
  box-shadow: 1px 1px 10px #5f5f5f;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 15px 15px;
  background-color: #f5f5f5;
}

.every-day > p {
  margin: 0;
  padding: 0;
}

.every-day > .title {
  font-size: 12px;
  animation: textColor 20s both infinite alternate;
  margin-bottom: 10px;
  display: flex ;
  align-items: center;
}

.every-day > .content {
  margin: 0;
  padding: 0;
  line-height: 20px;
  font-size: 14px;
}
</style>