<template>
  <v-card>
    <v-avatar size="150px">
      <img :src="photo" class="myAvatar" alt="">
    </v-avatar>
    <v-card-title primary-title>
      <h2>Name: {{ name }}</h2>
      <h3>Manager: {{ manager }}</h3>
    </v-card-title>
    <chart
      :options="bar"
      :initOptions="initOptions"
      auto-resize
      class="bar"
    />
    <chart
      :options="pie"
      :initOptions="initOptions"
      auto-resize
      class="bar"
    />
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
  data: () => ({
    initOptions: {
      renderer: 'svg',
    },
    bar: {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      xAxis: {
        data: [] as string[],
      },
      yAxis: {
        axisLabel: {
          show: true,
        },
      },
      series: [
        {
          type: 'bar',
          data: [] as number[],
        },
      ],
      animationDuration: 2000,
    },
    pie: {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      xAxis: {
        data: [] as string[],
      },
      yAxis: {
        axisLabel: {
          show: true,
        },
      },
      series: [
        {
          type: 'bar',
          data: [] as number[],
        },
      ],
      animationDuration: 2000,
    },
  }),
  beforeMount() {
    this.bar.series[0].data.push(this.perne, this.lenjerie, this.fete);
    this.bar.xAxis.data.push('Perne', 'Lenjerie', 'Fete');
    this.pie.series[0].data.push(this.bonuses, Math.ceil(this.bonuses / 31));
    this.pie.xAxis.data.push('Total bonuses', 'Daily bonuses');
  },
  methods: {
    setClass,
  },
});
</script>

<style lang="stylus" scoped>
.bar
  width 100%

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
