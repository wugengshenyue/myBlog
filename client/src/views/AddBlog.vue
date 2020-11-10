<template>
  <div>
    <top-nav />
    <div class="core">
      <div class="add-blog">
        <div class="tit">发布博客</div>
        <div class="top">
          <div class="title">
            <span>标题：</span><input v-model="title" type="text" />
          </div>
          <div class="tags">
            <span>标签：</span><input v-model="tags" type="text" />
          </div>
          <button @click="addBlog">发布文章</button>
        </div>
        <div id="blog-content"></div>
      </div>

      <div class="add-everyday">
        <div class="tit">
          <button @click="addEveryDay">发布每日一句</button>
        </div>
        <div id="everyday-content"></div>
      </div>

      <div class="add-everyday">
        <div class="tit">
          <button @click="addAbout">发布关于信息</button>
        </div>
        <div id="about-content"></div>
      </div>

      <div class="add-everyday">
        <div class="tit">
          <button @click="addGuestBook">发布留言信息</button>
        </div>
        <div id="guestbook-content"></div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.core {
  width: 1400px;
  padding-top: 100px;
  margin: 0 auto;
}

.core > .add-blog {
  box-sizing: border-box;
  padding: 10px;
  box-shadow: 1px 1px 5px rgba(97, 97, 97, 0.48);
  border-radius: 5px;
}

.core > .add-blog > .tit {
  font-weight: 700;
  color: #444;
}

.core > .add-blog > .top {
  height: 50px;
  display: flex;
  justify-content: center;
}

.core > .add-blog > .top > .tags {
  margin-left: 10px;
}

.core > .add-blog > .top input {
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

.core > .add-blog > .top button {
  margin-left: 10px;
  cursor: pointer;
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 5px 15px;
  border-radius: 4px;
  outline: none;
  transition: all 0.3s;
  height: 32px;
}

.core > .add-blog > .top button:hover {
  background-color: #eee;
}

.core > .add-everyday {
  margin-top: 30px;
  box-sizing: border-box;
  padding: 10px;
  box-shadow: 1px 1px 5px rgba(97, 97, 97, 0.48);
  border-radius: 5px;
}

.core > .add-everyday > .tit {
  margin-bottom: 15px;
}

.core > .add-everyday > .tit > button {
  cursor: pointer;
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 5px 15px;
  border-radius: 4px;
  outline: none;
  transition: all 0.3s;
  height: 32px;
}

.core > .add-everyday > .tit > button:hover {
  background-color: #eee;
}
</style>


<script>
import axios from "axios";
import TopNav from "@/components/nav.vue";
import E from "wangeditor";

export default {
  components: {
    TopNav,
  },
  data() {
    return {
      editorBlog: "",
      editorEveryday: "",
      title: "",
      tags: "",
    };
  },
  methods: {
    async addBlog() {
      let data = await axios.post("http://localhost:8081/api/addBlog", {
        title: this.title,
        contentHtml: this.editorBlog.txt.html(),
        contentText: this.editorBlog.txt.text(),
        tags: this.tags,
      });

      this.title = "";
      this.tags = "";
      this.editorBlog.txt.clear();
      alert(data.msg);
    },

    async addEveryDay() {
      let data = await axios.post("http://localhost:8081/api/addEveryDay", {
        content: this.editorEveryday.txt.html(),
      });

      this.editorEveryday.txt.clear();
      alert(data.msg);
    },

    async addAbout() {
      let data = await axios.post("http://localhost:8081/api/addAbout", {
        content: this.editorAbout.txt.html(),
      });

      this.editorAbout.txt.clear();
      alert(data.msg);
    },

    async addGuestBook() {


      let data = await axios.post("http://localhost:8081/api/addGuestBook", {
        content: this.editorGuestBook.txt.html(),
      });



      this.editorGuestBook.txt.clear();
      alert(data.msg);
    },





  },
  mounted() {
    this.editorBlog = new E("#blog-content");
    this.editorBlog.create();

    this.editorEveryday = new E("#everyday-content");
    this.editorEveryday.create();

    this.editorAbout = new E("#about-content");
    this.editorAbout.create();

    this.editorGuestBook = new E("#guestbook-content");
    this.editorGuestBook.create();
  },
};
</script>