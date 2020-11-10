<template>
  <div class="post-comment">
    <div class="title">发布评论</div>
    <div class="name">
      <input v-model="name" type="text" placeholder="昵称" />
    </div>
    <div class="content">
      <textarea v-model="content" placeholder="请输入评论内容">啊啊啊</textarea>
    </div>

    <div class="captcha">
      <input v-model="captcha" type="text" placeholder="请输入验证码" />
      <img @click="changeCaptcha" :src="captchaUrl" />
    </div>

    <div class="button">
      <button @click="addComment" class="add">发表评论</button>
      <button @click="reset" class="reset">重置</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["id"],
  data() {
    return {
      captchaUrl: "http://localhost:8081/captcha?s=" + new Date().getTime(),
      name: "",
      content: "",
      captcha: "",
    };
  },
  methods: {
    changeCaptcha() {
      this.captchaUrl =
        "http://localhost:8081/captcha?s=" + new Date().getTime();
    },
    async addComment() {
      if (this.name.trim() === "") {
        alert("昵称不能为空!");
        return;
      }

      if (this.content.trim() === "") {
        alert("评论内容不能为空!");
        return;
      }

      if (this.captcha.trim() === "") {
        alert("验证码不能为空!");
        return;
      } else if (this.captcha.length !== 6) {
        alert("验证码必须为六位数字!");
        return;
      }

      try {
        let data = await axios.post(`http://localhost:8081/api/addComment`, {
          id: this.id,
          name: this.name,
          content: this.content,
          captcha: this.captcha,
        });

        this.reset();
        this.changeCaptcha();
        alert(data.msg);
      } catch (err) {
        this.reset();
        this.changeCaptcha();
        alert(err.msg);
      }
      
    },
    reset() {
      (this.name = ""), (this.content = ""), (this.captcha = "");
    },
  },
};
</script>


<style scoped>
.post-comment {
  box-sizing: border-box;
  width: 750px;
  padding: 25px 15px 15px;
  box-shadow: 1px 1px 5px rgba(97, 97, 97, 0.48);
  border-radius: 5px;
  background-color: #f5f5f5;
}

.post-comment > .title {
  font-size: 16px;
  margin-bottom: 10px;
}

.post-comment > .name {
  margin-bottom: 15px;
}

.post-comment > .name > input {
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 2px 10px;
  width: 200px;
  height: 32px;
  outline: none;
  border-radius: 4px;
  color: #555;
  font-size: 14px;
}

.post-comment > .content {
  margin-bottom: 5px;
}

.post-comment > .content > textarea {
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 5px 10px;
  width: 100%;
  height: 80px;
  outline: none;
  border-radius: 4px;
  color: #555;
  font-size: 14px;
}

.post-comment > .captcha {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.post-comment > .captcha > input {
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 2px 10px;
  width: 200px;
  height: 32px;
  outline: none;
  border-radius: 4px;
  color: #555;
  font-size: 14px;
}

.post-comment > .captcha > img {
  margin-left: 15px;
  height: 45px;
}

.post-comment > .button > button {
  cursor: pointer;
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 5px 15px;
  border-radius: 4px;
  outline: none;
  transition: all 0.3s;
}

.post-comment > .button > button:hover {
  background-color: #eee;
}

.post-comment > .button > .reset {
  margin-left: 10px;
}
</style>