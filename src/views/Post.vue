<template>
  <Timeline>
    <div class="Post" v-if="post && post._id">
      <div class="post-overlay" @click="close"></div>
      <button class="btn-close-post" @click="close">&times;</button>
      <div class="post-wrapper">
        <SinglePost :post="post" />
      </div>
    </div>
  </Timeline>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';

.Post {
  @include fullFixed();
  padding: 0 10px;
  z-index: 10;
  overflow-x: hidden;
  overflow-y: auto;

  @media (min-width: $lg) and (max-width: 1074px) {
    .post-wrapper {
      margin-top: 50px !important;
    }
  }
  @media (max-width: $lg - 1) {
    .post-wrapper {
      margin-top: 70px !important;
    }
    .btn-close-post {
      font-size: 36px !important;
      color: #fff !important;
    }
  }

  .post-overlay {
    @include fullFixed();
    z-index: -1;
    background: rgba(0,0,0,.5);
  }

  .btn-close-post {
    position: absolute;
    top: 10px;
    right: 20px;
    padding: 5px 10px;
    font-size: 18px;
    font-weight: bold;
    color: #ccc;
    background: none;
    outline: none;
    border: none;
    box-shadow: none;
    cursor: pointer;
    transition: color .2s;

    &:hover, &:focus {
      color: #fff;
    }
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
