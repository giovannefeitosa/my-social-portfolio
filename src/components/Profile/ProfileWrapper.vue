<template>
<div class="ProfileWrapper">
  <slot />
</div>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.ProfileWrapper {
  margin: auto;
  padding-bottom: 30px;

  @media (min-width: $lg) {
    max-width: $page_max_width;
  }
}
</style>
