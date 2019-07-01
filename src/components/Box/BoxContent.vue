<template>
<div class="BoxContent">
  <slot />
</div>
</template>

<style lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';

.BoxContent {
  @media (min-width: $sm+1) {
    padding: 30px;
  }

  @media (max-width: $sm) {
    padding: 15px;
  }
}
</style>

