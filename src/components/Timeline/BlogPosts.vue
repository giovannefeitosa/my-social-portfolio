<template>
<div class="NodeBlogPosts">
  <div class="nbp-error" v-if="error">{{ error }}</div>
  
  <BoxWrapper
    v-for="post in posts"
    :key="post._id">
    {{ post }}
  </BoxWrapper>
</div>
</template>

<script>
import BoxWrapper from '@/components/Box/BoxWrapper'

export default {
  data() {
    return {
      //
    }
  },
  computed: {
    error() {
      return this.$store.state['node-blog-api'].error
    },
    posts() {
      return this.$store.state['node-blog-api'].posts
    }
  },
  components: { BoxWrapper }
}
</script>
