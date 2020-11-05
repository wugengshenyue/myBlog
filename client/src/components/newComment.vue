<template>
  <div class="newcomment">
    <h3>最新评论</h3>
    <ul>
        
      <li>
        <div></div>
      </li>

    </ul>
  </div>
</template>



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
  margin-left: 500px;
  margin-top: 500px;
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
  height: 200px;
  padding-left: 15px;
  border-bottom: 1px solid #292929;
}

.newcomment ul li:last-of-type {
  border: none;
}

.newcomment ul li a {
  color: floralwhite;
  transition: all 0.5s;
}

.newcomment ul li a:hover {
  color: #337ab7;
}
</style>