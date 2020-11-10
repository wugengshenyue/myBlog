<template>
  <div class="about">
    <top-nav />
    <div class="core">
      <div class="left">
        <div class="content" v-html="content"></div>
        <comment :comments="comments" :style="{ marginBottom: '10px' }" />
        <post-comments :id="-1" />
      </div>
      <right-nav />
    </div>
  </div>
</template>


<script>
import axios from "axios";
import TopNav from "@/components/nav.vue";
import RightNav from "@/components/rightNav.vue";
import Comment from "@/components/comment.vue";
import PostComments from "@/components/postComments.vue";
export default {
  data() {
    return {
      comments: [],
      content: "",
    };
  },
  components: {
    TopNav,
    RightNav,
    Comment,
    PostComments,
  },
  methods: {
    async setData() {
      let content = await axios.get("http://localhost:8081/api/getAbout");
      this.content = content.content;

      let data = await axios.get("http://localhost:8081/api/getBlog?id=-1");
      this.comments = data.comments;
    },
  },
  mounted() {
    this.setData();
  },
};
</script>



<style scoped>
.about {
  min-height: 100%;
  padding-top: 80px;
  background-image: url(../assets/bg.jpg);
  box-sizing: border-box;
}

.about > .core {
  width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.about > .core > .left > .content {
  box-sizing: border-box;
  width: 750px;
  padding: 10px 15px 20px;
  box-shadow: 1px 1px 5px rgba(97, 97, 97, 0.48);
  border-radius: 5px;
  margin-bottom: 50px;
  background-color: #f5f5f5;
  font-size: 14px;
}
</style>