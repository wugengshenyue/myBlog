<template>
  <div class="blog-content">
    <div class="content">
      <div class="top">
        <span>当前位置：</span>
        <router-link to="/">博客首页</router-link>
        <span>&nbsp;/&nbsp;</span>
        <span>阅读正文</span>
      </div>
      <div class="title">{{ title }}</div>
      <div class="information">
        <span class="time">发布于:{{ new Date(time).toLocaleString() }}</span>
        <span class="pageviews">浏览:{{ pageviews }}</span>
        <span v-if="comments" class="comment">评论({{ comments.length }})</span>
      </div>
      <div class="separate"></div>
      <div class="text" v-html="content"></div>
    </div>
    <comment :comments="comments" :style="{ marginBottom: '50px' }" />
    <post-comments :id="id" :style="{ marginBottom: '20px' }" />
  </div>
</template>


<script>
import Comment from "@/components/comment.vue";
import PostComments from "@/components/postComments.vue";
export default {
  components: {
    Comment,
    PostComments,
  },
  props: ["id", "title", "content", "pageviews", "time", "comments"],
};
</script>

<style >
.blog-content > .content {
  box-sizing: border-box;
  width: 750px;
  padding: 15px 15px 30px;
  box-shadow: 1px 1px 5px rgba(97, 97, 97, 0.48);
  border-radius: 5px;
  margin-bottom: 50px;
  background-color: #f5f5f5;
}

.blog-content > .content > .top {
  line-height: 20px;
  font-size: 14px;
  margin-bottom: 15px;
}

.blog-content > .content > .top > a {
  color: #337ab7;
}

.blog-content > .content > .title {
  color: #13102b;
  font-size: 20px;
  margin-bottom: 10px;
}

.blog-content > .content > .information {
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #333;
}

.blog-content > .content > .information > span {
  margin-right: 8px;
}

.blog-content > .content > .separate {
  margin: 15px 0;
  width: 100%;
  height: 1px;
  background-color: #b9b9b9;
}

.blog-content > .content > .text img{
  max-width: 100%;
}

</style>