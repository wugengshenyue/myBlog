<template>
  <div class="random-tag">
    <h3>随机标签云</h3>
    <ul>
      <li v-for="data in tags" :key="data.id">
        <router-link
          :to="'/tag/' + data.name"
          :style="{
            fontSize: getRandom(14, 18) + 'px',
            color:
              'rgb(' +
              getRandom(0, 255) +
              ',' +
              getRandom(0, 255) +
              ',' +
              getRandom(0, 255) +
              ')',
          }"
          >{{ data.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import getRandom from "../util/getRandom.js";

export default {
  props: ["tags"],
  methods: {
    getRandom,
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

.random-tag {
  width: 360px;
  height: 290px;
  background-color: #1f1f1f;
  border-radius: 3px;
  overflow: hidden;
}

.random-tag h3 {
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

.random-tag ul {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 15px;
  vertical-align: text-bottom;
}

.random-tag ul li {
  /* float: left; */
  vertical-align: text-bottom;
}
</style>