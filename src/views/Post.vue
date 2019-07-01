<template>
  <Timeline>
    <div class="Post">
      <div class="post-overlay" @click="close"></div>
      <div class="post-wrapper">
        <SinglePost :post="post" />
      </div>
    </div>
  </Timeline>
</template>

<style lang="scss">
@import '@/assets/scss/mixins.scss';

.Post {
  @include fullFixed();
  padding: 0 10px;
  z-index: 10;
  overflow-x: hidden;
  overflow-y: auto;

  .post-overlay {
    @include fullFixed();
    z-index: -1;
    background: rgba(0,0,0,.5);
  }

  .post-wrapper {
    position: relative;
    margin: 35px auto;
    z-index: 10;
    max-width: 1170px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
  }
}
</style>


<script>
import Timeline from './Timeline'
import SinglePost from '@/components/Blog/Single/SinglePost'

export default {
  computed: {
    post() {
      return this.$store.getters['node-blog-api/current_post']
    }
  },

  created() {
    this.$store.dispatch('scroll_lock', true)
    this.$store.commit('node-blog-api/current_post_id', this.$route.params.id)
  },
  destroyed() {
    this.$store.dispatch('scroll_lock', false)
  },
  
  methods: {
    close() {
      this.$router.push({ name: 'Timeline' })
    }
  },

  components: { Timeline, SinglePost }
}
</script>
