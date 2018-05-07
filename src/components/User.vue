<template>
  <div class="mycard">
    <div class="avatar">
      <img src="https://randomuser.me/api/portraits/men/69.jpg">
    </div>
    <div class="box__wrapper">Alexander Myzuka<span class="box__wrapper__text">text</span></div>
    <div class="box__wrapper">Alexander Myzuka<span class="box__wrapper__text">text</span></div>
    <div class="box__wrapper value">112<span class="box__wrapper__text">text</span></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style scoped lang="stylus">
.mycard
  max-width 1064px
  padding 1rem 0
  margin auto
  font-family: 'Arvo', serif;
  border-radius 11px
  box-shadow 0px 2px 10px rgba(green, .4)
  background-color #fff
  color rgba(#000, .9)
  text-decoration none
  display flex
  flex-flow row wrap
  align-items center
  justify-content space-around
  font-size 2rem
  .value
    border-radius 31px
    border 1px solid #eee
    padding 0 2rem
  .avatar
    border 1px solid #333
  .box__wrapper
    position relative
    &__text
      position absolute
      top 0
      left 50%
      transform translate(-50%, -100%)
  .red
    background-color red + 50%
  .green
    background-color green + 50%
  .blue
    background-color blue + 50%
</style>
