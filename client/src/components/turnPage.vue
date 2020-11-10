<template>
  <div class="turn-page" v-if="pageCount > 0">
    <button
      v-if="current > displaySize"
      @click="$emit('click', 1)"
      class="first-page"
    >
      首页
    </button>

    <button v-if="current > 1" @click="$emit('click', current - 1)">
      上一页
    </button>

    <button
      v-show="
        current - displaySize + index > 0 &&
        current - displaySize + index <= pageCount
      "
      v-for="(data, index) in displaypage"
      :key="data"
      :class="{ activ: current - displaySize + index == current }"
      @click="$emit('click', current - displaySize + index)"
    >
      {{ current - displaySize + index }}
    </button>

    <button v-if="current < pageCount" @click="$emit('click', current + 1)">
      下一页
    </button>

    <button
      v-if="pageCount - current > displaySize"
      @click="$emit('click', pageCount)"
      class="last-page"
    >
      尾页
    </button>
  </div>
</template>

<script>
export default {
  props: ["current", "pagesize", "total", "displaypage"],

  computed: {
    pageCount() {
      return Math.ceil(this.total / this.pagesize);
    },
    displaySize() {
      return Math.floor(this.displaypage / 2);
    },
  },
};
</script>





<style scoped>
.turn-page {
  display: flex;
}

.turn-page > button {
  cursor: pointer;
  color: #1f1f1f;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 6px 12px;
  outline: none;
  transition: all 0.3s;
  margin-right: 1px;
}

.turn-page > button:hover {
  background-color: #eee;
}

.turn-page > button.activ {
  background-color: #1f1f1f;
  color: #fff;
  cursor: auto;
}

.turn-page > .first-page {
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
}

.turn-page > .last-page {
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
}
</style>