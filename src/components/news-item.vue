<template>
<view class="news-item"
  @click="turn"
  v-if="!news.lapinid">
  <img :src="news.image" class="news-img" mode="aspectFill" />
  <view class="news-text">
    <view class="new-title">
      {{news.title}}
    </view>
    <view class="news-info">
      <text>{{news.postdate}}</text>
      <text v-if="news.commentcount">{{news.commentcount}}评</text>
    </view>
  </view>
</view>
</template>

<script>
export default {
  props: ['news'],
  methods: {
    turn () {
      const { link } = this.news
      this.$router.push(link)
    }
  },
  created(){
    console.log(this.news)
  }
}
</script>

<style lang="less" scoped>
.news-item {
  display: flex;
  height: 90px;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.news-img {
  width: 100px;
  height: 75px;
  margin-right: 10px;
}
.news-text {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.news-title {
  font-size: 15px;
}
.news-info {
  color: #aaa;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  text:last-child{
    padding-right:10px;
  }
}
</style>
