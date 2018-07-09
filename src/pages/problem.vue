<template>
<div class="container">
    <div class="topic-wrap">
        <topicItem v-for="topic of topics" :topic="topic" :key="topic.id" ></topicItem>
    </div>
</div>
</template>

<script>
import api from '@/api/api'
import { formatTopicList } from '@/utils'
import topicItem from '@/components/topic-item'

export default {
    data(){
        return{
            topics:null
        }
    },
  components: {
    topicItem
  },
  created () {
    this.getTopics(false)
  },
   onPullDownRefresh () {
    this.refresh()
  },
  onReachBottom () {
    this.loadmore()
  },
  methods: {
    async getTopics(init){
        let that = this
        let replytime = Date.now()
        if (init) {
            const lastTopic = that.topics[that.topics.length - 1]
            replytime = lastTopic.replytime.replace(/[^0-9]/ig, '')
        }
        let res = await api.getTopics({
            query: {
                categoryid: 0,
                type: 0,
                orderTime: replytime,
                visistCount: '',
                pageLength: ''
            }
        })
        if(res.errMsg == "request:ok"){
            let rlt = res.data
            let topic = rlt.map(formatTopicList)
            if(init){
                that.topics = that.topics.concat(topic)
            }else{
                that.topics = topic
            }
            // console.log(topic, '2222')
        }
    },
    async refresh(){
        let replytime = Date.now()
        await this.getTopics(replytime)
        wx.stopPullDownRefresh()
    },
    loadmore(){
        this.getTopics(true)
    },
  }
}
</script>

<style lang="less">
.container {
width:100%;
min-height:100vh;
display:flex;
flex-direction:column;
// align-items:center;
// justify-content:flex-start;
// box-sizing:border-box;
}
</style>
