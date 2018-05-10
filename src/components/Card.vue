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
        <div class="value__wrapper"><span
          :class="setClass(perne, percent)"
          :style="{ width: perne + '%'}"
          class="progress"
        >Perne: {{ perne }} %</span></div>
        <div class="value__wrapper"><span
          :class="setClass(lenjerie, percent)"
          :style="{ width: lenjerie + '%'}"
          class="progress"
        >Lenjerie: {{ lenjerie }} %</span></div>
        <div class="value__wrapper"><span
          :class="setClass(fete, percent)"
          :style="{ width: fete + '%'}"
          class="progress"
        >{{ fete }} %</span></div>
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
      margin .6rem 0
      font-size 1.2rem
      border 1px solid rgba(black, .3)
      position relative
  .progress
    padding .4rem
    display block
  .blue
    background-color lightblue + 20% !important
  .red
    background-color red + 80% !important
  .green
    background-color green + 80% !important

.myAvatar
  border 1px solid #333
</style>

