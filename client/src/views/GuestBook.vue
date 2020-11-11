<template>
  <div class="guest-book">
    <top-nav />
    <div class="core">
      <div class="left">
        <div class="content" v-html="content"></div>
        <comment :comments="comments" :style="{ marginBottom: '30px' }" />
        <post-comments :id="-2" />
      </div>
      <right-nav />
    </div>
     <bottom />
  </div>
</template>


<style scoped>
.guest-book {
  min-height: 100%;
  padding-top: 80px;
  background-image: url(../assets/bg.jpg);
  box-sizing: border-box;
}

.guest-book > .core {
  width: 1140px;
  margin: 0 auto 40px;
  display: flex;
  justify-content: space-between;
}

.guest-book > .core > .left > .content {
  box-sizing: border-box;
  width: 750px;
  padding: 15px 15px 20px;
  box-shadow: 1px 1px 5px rgba(97, 97, 97, 0.48);
  border-radius: 5px;
  margin-bottom: 50px;
  background-color: #f5f5f5;
  font-size: 14px;

}
</style>

<script>
import axios from "axios";
import TopNav from "@/components/nav.vue";
import RightNav from "@/components/rightNav.vue";
import Comment from "@/components/comment.vue";
import PostComments from "@/components/postComments.vue";
import Bottom from "@/components/bottom.vue";
export default {
  components: {
    TopNav,
    RightNav,
    Comment,
    PostComments,
    Bottom
  },
  data() {
    return {
      comments: [],
      content: "",
    };
  },
  methods: {
    async setData() {
      let content = await axios.get("http://localhost:8081/api/getGuestBook");
      this.content = content.content;

      let data = await axios.get("http://localhost:8081/api/getBlog?id=-2");
      this.comments = data.comments;
    },
  },
  mounted() {
    this.setData();
  },
};
</script>


