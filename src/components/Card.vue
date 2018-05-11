<template>
  <v-card>
    <v-avatar size="150px">
      <img :src="photo" class="myAvatar" alt="">
    </v-avatar>
    <v-card-title primary-title>
      <h2>Name: {{ name }}</h2>
      <h3>Manager: {{ manager }}</h3>
    </v-card-title>
    <v-card-text>
      <div class="text-xs-left values">
        <div class="value__wrapper">
          <div class="value__wrapper__title">Perne</div>
          <span
            :class="setClass(perne, percent)"
            :style="{ width: perne + '%'}"
            class="progress"
        >{{ perne }} %</span></div>
        <div class="value__wrapper">
          <div class="value__wrapper__title">Lenjerie</div>
          <span
            :class="setClass(lenjerie, percent)"
            :style="{ width: lenjerie + '%'}"
            class="progress"
        >{{ lenjerie }} %</span></div>
        <div class="value__wrapper">
          <div class="value__wrapper__title">Fete</div>
          <span
            :class="setClass(fete, percent)"
            :style="{ width: fete + '%'}"
            class="progress"
        >{{ fete }} %</span></div>
        <div class="bonuses">Bonuses: {{ bonuses }}</div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import setClass from '@/utils/setClass.ts';

export default Vue.extend({
  props: {
    name: { type: String, required: true },
    manager: { type: String, required: true },
    photo: { type: String, required: true },
    perne: { type: Number, required: true },
    lenjerie: { type: Number, required: true },
    fete: { type: Number, required: true },
    percent: { type: Number, required: true },
    bonuses: { type: Number, required: true },
  },
  methods: {
    setClass,
  },
});
</script>

<style lang="stylus" scoped>
.card
  border-radius 11px
  padding 2rem
  text-align center
  position relative
  &__title
    flex-flow column wrap
  .values
    .value__wrapper
      margin 2rem 0
      font-size 1rem
      border 1px solid rgba(black, .3)
      position relative
      border-radius 8px
      &__title
        position absolute
        top -25px
        left 0
  .progress
    padding .25rem
    display block
    max-width 100%
    min-width 35px
    border-radius 7px
  .blue
    background-color lightblue !important
  .red
    background-color red + 80% !important
  .green
    background-color green + 80% !important

.myAvatar
  border 1px solid #333
.bonuses
  font-size 1.7rem
  font-weight 500
  color lightblue - 30%
</style>

