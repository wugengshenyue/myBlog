<template>
  <div class="comment">
    <div v-if="comments" class="size">目前有{{ comments.length }}条留言</div>
    <ul>
      <li v-for="data in comments" :key="data.id">
        <div class="user">
          <img
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3527279251,1899718430&fm=26&gp=0.jpg"
          />
          <span class="name">{{ data.name }}：</span>
          <span class="time">发表于&nbsp;{{ new Date(data.time).toLocaleString() }}</span>
        </div>
        <div class="content">{{ data.content }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["comments"],
};
</script>



<style scoped>
.comment {
  width: 750px;
}

.comment > .size {
  font-size: 14px;
  margin-bottom: 8px;
}

.comment > ul > li {
  box-sizing: border-box;
  width: 100%;
  background-color: #d9edf7;
  border: 1px dashed #7ca4c1;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
}

.comment > ul > li > .user {
  display: flex;
  align-items: center;
  margin-bottom: 4px;
}

.comment > ul > li > .user > img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-right: 8px;
}

.comment > ul > li > .user > .name {
  font-weight: 700;
  font-size: 14px;
  color: #31708f;
}

.comment > ul > li > .user > .time {
  font-size: 14px;
  color: #31708f;
}

.comment > ul > li > .content {
  font-size: 14px;
  color: #31708f;
  line-height: 20px;
}
</style>