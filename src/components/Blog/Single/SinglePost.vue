<template>
  <article class="SinglePost" ref="post">
    <div class="post-cover" :style="coverStyle"></div>
    <div class="post-content-wrapper">
      
      <header class="post-header">
        <h1 class="post-title">{{ post.title }}</h1>
        <div class="post-metadata">
          <div class="post-author">
            <span class="post-author-thumbnail"></span>
            <router-link to="/about">Giovanne Feitosa</router-link>
          </div>

          <div class="post-timestamp">
            {{ $formatDate(post.created_at) }}
          </div>
        </div>
      </header>

      <div class="post-content" v-html="post.body"></div>

      <div class="fb-like-wrapper">
        <FBLike />
      </div>

      <div class="fb-comments-wrapper">
        <FBComments />
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/scss/mixins.scss';

.SinglePost {
  position: relative;
  .post-cover {
    @include bgCover();
    background-position: center;
    width: 100%;
    height: 300px;
  }

  .post-content-wrapper {
    margin: 50px auto;
    padding: 0 10px;
    max-width: 700px;
  }
  .post-header {
    margin-bottom: 40px;

    .post-title {
      display: block;
      margin-bottom: 20px;
      font-size: 40px;
      font-weight: bold;
    }

    .post-metadata {
      line-height: 30px;
      font-size: 15px;
      // text-transform: uppercase;

      .post-author, .post-timestamp {
        display: inline-block;
        vertical-align: top;
      }

      .post-author {
        margin-right: 20px;
        .post-author-thumbnail {
          @include bgCover();
          display: inline-block;
          vertical-align: top;
          margin-right: 10px;
          margin-top: 3px;
          width: 24px;
          height: 24px;
          border-radius: 100%;
          background-color: #ccc;
          background-image: url('../../../assets/img/profile/photo.jpg');
        }
      }
    }
  }

  .post-content {
    line-height: 1.4em;

    h1,h2,h3,h4,h5,h6 {
      margin-bottom: 15px;
    }

    p {
      margin-bottom: 30px;
    }
  }

  .fb-like-wrapper, .fb-comments-wrapper {
    max-width: 100%;
    width: 100%;
    overflow: hidden;
  }

  .fb-like-wrapper {
    margin-top: 70px;
    padding: 15px;
    background: #ddd;
  }

  .fb-comments-wrapper {
    margin: auto;
    padding-top: 30px;
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
    },
  },

  mounted() {
    if(window.FB) {
      window.FB.XFBML.parse(this.$refs['post'])
    }
  },

  components: { }
}
</script>

