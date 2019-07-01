<template>
  <div class="FBComments">
    <div class="fb-comments"
      :data-href="the_url"
      data-width="1200px"
      data-numposts="5"></div>
  </div>
</template>

<script>
export default {
  props: ['url'],
  computed: {
    the_url() {
      return this.url || this.currentUrl
    },
    currentUrl() {
      return this.$url(
        this.$route.fullPath
      )
    }
  },
}
</script>
