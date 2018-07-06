<template>
<div class="topic-item">
    <img class="topic-headimg" src="/static/images/avatar_default.png" />
    <img class="topic-headimg" :src="topic.author.headimg">
    <div class="topic-title">{{topic.tag}} {{topic.title}}</div>
    <div class="topic-info">
        <div class="topic-info-item">{{topic.author.nickname}}</div>
        <div class="topic-info-item">{{topic.type}}</div>
        <div class="topic-info-item">
            <img src="/static/images/quan_hit.png" class="topic-info-icon" />
            <span class="topic-info-text">{{topic.viewcount}}</span>
        </div>
        <div class="topic-info-item">
            <img src="/static/images/quan_comment.png" class="topic-info-icon" />
            <span class="topic-info-text">{{topic.replycount}}</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: ['topic'],
  methods: {
    turn () {
      const { id, title, author, viewcount } = this.topic
      this.$router.push({
        path: '/pages/quanzi/detail',
        query: {
          id,
          title,
          author,
          vc: viewcount
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.topic-item {
  padding: 10px 10px 10px 60px;
  border-bottom: 1px solid #eee;
  position: relative;
}
.topic-headimg {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  left: 10px;
  top: 15px;
}
.topic-title {
  font-size: 16px;
}
.topic-info {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
}
.topic-info-item {
  margin-left: 10px;
  font-size: 12px;
  color: #aaa;
  display: flex;
  align-items: center;
}
.topic-info-icon {
  width: 15px;
  height: 15px;
  margin-right: 4px;
}
</style>
