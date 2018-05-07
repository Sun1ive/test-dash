<template>
  <div class="mycard">
    <div class="avatar">
      <img :src="photo">
    </div>
    <div
      class="box__wrapper">{{ name }}<span class="box__wrapper__text">Name</span></div>
    <div
      class="box__wrapper">{{ manager }}<span class="box__wrapper__text">Manager</span></div>
    <div
      :class="setClass(value)"
      class="box__wrapper value">{{ value }}<span class="box__wrapper__text">Value</span></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    percent: {
      type: Number,
      default: () => 100,
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
    setClass(value: number) {
      if (value > 100) {
        return 'blue';
      } else if (value > this.percent) {
        return 'green';
      }
      return 'red';
    },
  },
});
</script>

<style scoped lang="stylus">
.mycard
  max-width 1064px
  padding 1rem 0
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
  margin 1rem auto
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
      font-size 1.2rem
  .red
    background-color red + 70% !important
  .green
    background-color green + 70% !important
  .blue
    background-color blue + 70% !important
</style>
