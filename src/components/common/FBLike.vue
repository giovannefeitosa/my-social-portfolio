<template>
  <div class="FBLike" :style="wrapperStyle">
    <div class="fb-like"
      :data-href="the_url"
      data-width=""
      :data-layout="layout"
      data-action="recommend"
      data-size="small"
      :data-show-faces="show_faces"
      data-share="false"></div>
  </div>
</template>

<script>
const like_breakpoint = 483

export default {
  props: ['url'],
  computed: {
    the_url() {
      return this.url || this.current_url
    },
    current_url() {
      return this.$url(
        this.$route.fullPath
      )
    },
    small_screen() {
      return window.innerWidth <= like_breakpoint
    },
    layout() {
      return this.small_screen ? 'button_count' : 'standard'
    },
    show_faces() {
      return this.small_screen ? 'false' : 'true'
    },
    wrapperStyle() {
      if(this.small_screen) {
        return {
          'text-align': 'right'
        }
      } else {
        return null
      }
    }
  },
}
</script>
