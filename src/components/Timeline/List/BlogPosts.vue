<template>
<div class="NodeBlogPosts">
  <BoxWrapper v-if="error">
    <BoxContent>
      <p>The REST API is unavailable right now.</p>
      
      <br><br><br>

      <p>
        This list comes from a microservice that is still under development, it's called
        <a href="https://github.com/microenv/node-blog-api" target="_blank">node-blog-api</a>.
        It's a NodeJS REST API that returns posts as JSON.
      </p>
    </BoxContent>
  </BoxWrapper>
  
  <template v-if="!error">
    <BlogPostItem
      v-for="post in posts"
      :key="post._id"
      :post="post" />
  </template>
</div>
</template>

<script>
import BlogPostItem from './BlogPostItem'

export default {
  data() {
    return {
      //
    }
  },
  computed: {
    error() {
      return this.$store.state['node-blog-api'].error_message
    },
    posts() {
      return this.$store.state['node-blog-api'].posts
    }
  },
  components: { BlogPostItem }
}
</script>
