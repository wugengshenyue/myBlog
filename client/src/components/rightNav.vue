<template>
  <div class="right-nav">
    <random-tag :tags="tags" :style="{ marginBottom: '20px' }" />
    <hot-blog :blogs="blogs" :style="{ marginBottom: '20px' }" />
    <new-comment :comments="comments" :style="{ marginBottom: '20px' }" />
  </div>
</template>


<script>
import axios from "axios";
import RandomTag from "@/components/randomTag.vue";
import HotBlog from "@/components/hotBlog.vue";
import NewComment from "@/components/newComment.vue";

export default {
  components: {
    RandomTag,
    HotBlog,
    NewComment,
  },
  data() {
    return {
      hotBlogSize: 5,
      newCommentSize: 10,
      tagsSize: 5,
      blogs: [],
      comments: [],
      tags: [],
    };
  },
  methods: {
    async setData() {
      let tagsData = await axios.get(
        `http://localhost:8081/api/getRandomTag?size=${this.tagsSize}`
      );

      let getHotBlogData = await axios.get(
        `http://localhost:8081/api/getHotBlog?size=${this.hotBlogSize}`
      );

      let getNewCommentData = await axios.get(
        `http://localhost:8081/api/getNewComment?size=${this.newCommentSize}`
      );

      this.blogs = getHotBlogData;
      this.comments = getNewCommentData;
      this.tags = tagsData;
    },
  },
  mounted() {
    this.setData();
  },
};
</script>