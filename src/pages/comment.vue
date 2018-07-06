<template>
<view class="container">
    <view class="comment-wrap">
        <comment-item v-for="comment of comments" :key="comment.id" :comment="comment"></comment-item>
    </view>
    <view class="">数据混乱，无法显示</view>
</view>
</template>

<script>
import api from '@/api/api'
import { formatComment } from '@/utils'
import commentItem from '@/components/comment-item'

export default {
  components: {
    commentItem
  },
  data () {
    return {
      id: null,
      comments: []
    }
  },
  mounted () {
    Object.assign(this.$data, this.$options.data())
    this.id = this.$route.query.id
    this.getComments()
  },
  methods: {
    async getComments () {
      let { id } = this
      const comments = await api.getNewsComments(id)
      console.log(comments)
      if (!comments) return
      const parsedComments = JSON.parse(comments.data.match(/showcomment\((.*)\)/)[1])
      this.comments = parsedComments.map(comment => {
        comment.M.C = unescape(comment.M.C)
        comment.M.N = unescape(comment.M.N)
        return formatComment(comment)
      })
    }
  }
}
</script>

<style lang="less">

</style>
