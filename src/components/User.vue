<template>
  <div class="mycard">
    <div class="myavatar">
      <img :src="photo">
    </div>
    <div class="box__wrapper box__title">{{ name }}<span class="box__wrapper__text">Name</span></div>
    <div class="box__wrapper box__title">{{ manager }}<span class="box__wrapper__text">Manager</span></div>
    <div
      :class="setClass(value, percent)"
      class="box__wrapper value">{{ value }} %<span class="box__wrapper__text">Value</span></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import setClass from '@/utils/setClass.ts';

export default Vue.extend({
  props: {
    percent: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
      default: () => 'https://randomuser.me/api/portraits/men/69.jpg',
    },
    name: {
      type: String,
      default: () => 'Alexander Myzuka',
    },
    manager: {
      type: String,
      default: () => 'Alexander Myzuka',
    },
    value: {
      type: Number,
      required: true,
    },
  },
  methods: {
    setClass,
  },
});
</script>

<style scoped lang="stylus">
.mycard
  max-width 1064px
  padding 1rem
  font-family: 'PT Sans', serif;
  border-radius 11px
  box-shadow 0px 2px 10px rgba(green, .1)
  background-color #fff
  color rgba(#000, .9)
  text-decoration none
  display grid
  font-size 2rem
  margin 1rem auto
  cursor pointer
  grid-template-columns 75px 1fr 1fr 150px
  grid-gap 20px
  align-content center
  .value
    border-radius 31px
    border 1px solid #eee
    padding 0 2rem
  .myavatar
    border 1px solid #333
    justify-self center
    border-radius 50%
    width 70px
    height 70px
    overflow hidden
    img
      width 100%
      height 100%
  .box__wrapper
    position relative
    text-align center
    align-self center
    justify-self center
    &__text
      position absolute
      top 0
      left 50%
      transform translate(-50%, -100%)
      font-size 1.2rem
  .red
    background-color red + 70% !important
  .green
    background-color green + 70% !important
  .blue
    background-color blue + 70% !important
</style>
