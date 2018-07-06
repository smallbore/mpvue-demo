<template>
<div class="contanier">
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
    let replytime = Date.now()
    this.getTopics(replytime)
  },
  methods: {
    async getTopics(r){
        let that = this
        let res = await api.getTopics({
            query: {
                categoryid: 0,
                type: 0,
                orderTime: r,
                visistCount: '',
                pageLength: ''
            }
        })
        if(res.errMsg == "request:ok"){
            that.topics = res.data.map(formatTopicList)
        }
    }
  }
}
</script>

<style lang="less">
</style>
