<template>
<div class="BoxWrapper">
  <slot />
</div>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';

.BoxWrapper {
  background: #fff;
  @include contentBox();

  @media (min-width: $lg) {
    margin: 15px auto 0 auto;
  }

  @media (min-width: $sm+1) {
    padding: 30px;
  }

  @media (max-width: $sm) {
    padding: 15px;
  }
}
</style>

