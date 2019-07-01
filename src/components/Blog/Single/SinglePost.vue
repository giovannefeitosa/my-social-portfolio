<template>
  <div class="SinglePost">
    <div class="post-cover" :style="coverStyle"></div>
    {{ post }}
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/mixins.scss';

.SinglePost {
  .post-cover {
    @include bgCover();
    background-position: center;
    width: 100%;
    height: 300px;
  }
}
</style>


<script>
export default {
  props: [ 'post' ],

  computed: {
    coverStyle() {
      let img = this.post.image

      return {
        'background-image': `url('${img}')`
      }
    }
  },

  components: { }
}
</script>

