<template>
  <div class="newcomment">
    <h3>最新评论</h3>
    <ul>
      <li v-for="data in comments" :key="data.id">
        <div class="left">
          <span class="name">{{ data.name }}</span>
          <span class="content">
            <router-link :to="data.blogId | url">
              {{ data.content }}
            </router-link>
          </span>
        </div>
        <div class="right">
          <span class="time">[{{ data.time | releaseTime }}天前]</span>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
import weeksBetw from "@/util/getTime.js";

export default {
  props: ["comments"],
  filters: {
    releaseTime(data) {
      return weeksBetw(new Date().getTime(), data);
    },
    url(data) {
      if (data > 0) {
        return "/blog/" + data;
      }else if (data === -1){
        return '/about'
      }else if(data === -2){
        return '/guestbook'
      }
     
    },
  },
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

.newcomment {
  width: 360px;
  background-color: #1f1f1f;
  border-radius: 3px;
  overflow: hidden;
}

.newcomment h3 {
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

.newcomment ul li {
  box-sizing: border-box;
  font-size: 14px;
  width: 100%;
  height: 55px;
  padding: 0px 15px;
  border-bottom: 1px solid #292929;
  display: flex;
  justify-content: space-between;
}

.newcomment ul li .left {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 6px 0;
}

.newcomment ul li .right {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.newcomment ul li .left .name {
  font-weight: 700;
  color: #eee;
}

.newcomment ul li .left .content a {
  color: #777;
  transition: all 0.5s;
}

.newcomment ul li .left .content a:hover {
  color: #337ab7;
}

.newcomment ul li .right .time {
  color: #eee;
}

.newcomment ul li:last-of-type {
  border: none;
}
</style>