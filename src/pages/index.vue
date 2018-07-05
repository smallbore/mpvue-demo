<template>
  <view class="wx-pages">
    <swiper class="slider-wrap" 
    autoplay
    indicator-dots
    circular
    indicator-color="rgba(255, 255, 255, .3)"
    indicator-active-color="rgba(210, 34, 34, .7)">
      <swiper-item v-for="slide of slides" :key="slide.title">
        <view class="slider-item">
          <view class="slider-title">{{slide.title}}</view>
          <img :src="slide.image" mode="aspectFill" />
        </view>
      </swiper-item>
    </swiper>
    <newsItem v-for="item in news" :news="item" :key="item.newsid" ></newsItem>
  </view>
</template>

<script>
import api from '@/api/api'
import xml2json from 'xmlstring2json'
import { formatSlideList, formatNewsList } from '@/utils'
import newsItem from '@/components/news-item'

export default {
  components: {
    newsItem
  },
  data() {
    return{
      slides:"",
      news:"",
    }
  },
  methods:{
    async getSlides(){
      let that = this
      let res = await api.getSlides()
      if(res.errMsg == "request:ok"){
        const parsedSlides = xml2json(res.data).rss.channel.item
        const filtedSlides = parsedSlides.filter(
          slide => slide.opentype['#text'] === '1'
        )
        const formatedSlides = filtedSlides.map(formatSlideList)
        that.slides = formatedSlides
      }
    },
    async getNewsList(){
      let that = this 
      let res = await api.getNewsList();
      if(res.errMsg == "request:ok"){
        let newslist = res.data.newslist
        const formatedNews = newslist.map(formatNewsList)
        // console.log(formatedNews)
        that.news = formatedNews
      }
    }
  },
  created() {
   this.getSlides()
   this.getNewsList()
  }
}
</script>

<style lang="less">
.slider-wrap {
  width: 100%;
  height: 200px;
}
.slider-item {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.slider-title {
  max-width: 90vw;
  position: absolute;
  top: 10px;
  right: 0;
  background-color: rgba(0, 0, 0, .3);
  color: #fff;
  padding: 2px 6px;
  font-size: 18px;
}
.slider-img {
  width: 100%;
  height: 100%;
}

.news-wrap {
  padding: 0 10px;
}

.nomore {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
  color: #ddd;
}
</style>
