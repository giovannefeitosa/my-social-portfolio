<template>
  <BoxWrapper class="BlogPostItem">
    <router-link to="/about" class="post-header">
      <span class="user-photo"></span>
      <span class="post-data">
        <span class="user-name">Giovanne Feitosa</span>
        <span class="post-timestamp">{{ post.created_at }}</span>
      </span>
      <span class="clearfix"></span>
    </router-link>

    <div class="post-excerpt">{{ post.excerpt }}</div>

    <a href="#" class="post-image">
      <img :src="post.image" :alt="post.title">
    </a>

    <div class="below-image">
      <a href="#" class="post-title">
        {{ post.title }}
      </a>

      <div class="post-like-stats">
        <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-width="" data-layout="standard" data-action="recommend" data-size="small" data-show-faces="true" data-share="false"></div>
      </div>
    </div>

    <!-- <pre style="font-size:11px;">{{ post }}</pre> -->
  </BoxWrapper>
</template>

<style lang="scss">
@import '@/assets/scss/mixins.scss';

.BlogPostItem {
  overflow: hidden;
  margin-bottom: 15px;
  
  a {
    text-decoration: none;
    outline: none;
  }
  
  .post-header {
    display: block;
    padding: 10px;

    &:hover, &:focus {
      .user-name {
        text-decoration: underline;
      }
    }

    .user-photo {
      @include bgCover();
      display: block;
      float: left;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background-image: url('../../../assets/img/profile/photo.jpg');
    }

    .post-data {
      display: block;
      padding-left: 50px;

      .user-name {
        display: block;
        color: #385898;
        font-weight: bold;
      }
      .post-timestamp {
        font-size: 14px;
        color: #666;
      }
    }
  }

  .post-excerpt {
    padding: 10px;
  }

  .post-image {
    display: block;
    > img {
      display: block;
      width: 100%;
      margin: 0;
    }
  }

  .post-title {
    display: block;
    padding: 20px 10px;
    font-size: 16px;
    font-weight: bold;
    color: #1d2129;
    // border-bottom: 1px solid #dddfe2;
    background: #eaeaed;
    transition: background-color .2s;

    &:hover {
      background: darken(#eaeaed, 4%);
    }
  }

  .post-like-stats {
    padding: 10px;
  }

}
</style>


<script>
export default {
  props: [ 'post' ],
}
</script>
