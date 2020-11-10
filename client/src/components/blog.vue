<template>
  <div class="blog">
    <div class="top">
      <h3>
        <router-link :to="'/blog/' + id">{{ title }}</router-link>
      </h3>
      <p>{{ content }}</p>
    </div>
    <div class="bottom">
      <span class="time">发布于{{ time | releaseTime }}</span>
      <span class="separate"></span>
      <span class="pageviews">浏览：{{ pageviews }}</span>
      <span class="separate"></span>
      <span class="tags">Tags：{{ tags }}</span>
    </div>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: ["id", "title", "content", "tags", "pageviews", "time"],
  filters: {
    releaseTime(data) {
      return new Date(data).toLocaleDateString();
    },
  },
};
</script>


<style scoped>
.blog {
  box-sizing: border-box;
  width: 750px;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;
}

.blog > .top {
  padding: 30px 15px;
}

.blog > .top > h3 {
  margin: 0;
  padding: 0;
}

.blog > .top > h3 > a {
  font-size: 20px;
  color: #13102b;
  font-weight: normal;
  transition: all 0.3s;
}

.blog > .top > h3 > a:hover {
  color: #337ab7;
}

.blog > .top > p {
  margin: 0;
  padding: 10px 0 0 0;
  font-size: 14px;
  color: #333;
  line-height: 20px;
  max-height: 80px;
  overflow: hidden;
}

.blog > .bottom {
  box-sizing: border-box;
  padding-left: 15px;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  align-items: center;
  background-color: #1f1f1f;
  color: #eee;
  font-size: 14px;
}

.blog > .bottom > .separate {
  margin: 0 5px;
  height: 50%;
  width: 1px;
  background-color: #eee;
}
</style>