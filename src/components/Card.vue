<template>
  <v-card>
    <v-avatar size="150px">
      <img :src="photo" alt="">
    </v-avatar>
    <v-card-title primary-title>
      <h2>Name: {{ name }}</h2>
      <h3>Manager: {{ manager }}</h3>
    </v-card-title>
    <v-card-text>
      <div class="text-xs-left values">
        <div class="value__wrapper">Perne: <span class="progress red">{{ perne }} %</span></div>
        <div class="value__wrapper">Lenjerie: <span class="progress blue">{{ lenjerie }} %</span></div>
        <div class="value__wrapper">Fete: <span class="progress green">{{ fete }} %</span></div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    name: { type: String, required: true },
    manager: { type: String, required: true },
    photo: { type: String, required: true },
    perne: { type: Number, required: true },
    lenjerie: { type: Number, required: true },
    fete: { type: Number, required: true },
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
      display flex
      align-items center
      font-size 1.4rem
      justify-content space-between
      border-bottom 1px solid rgba(black, .1)
  .progress
    padding .4rem
    text-align center
    width 200px
    border 1px solid #333
    border-radius 8px
  .blue
    background-color lightblue + 20% !important
  .red
    background-color red + 80% !important
  .green
    background-color green + 80% !important
</style>

