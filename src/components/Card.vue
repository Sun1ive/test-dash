<template>
  <v-card>
    <v-avatar size="150px">
      <img :src="photo" alt="">
    </v-avatar>
    <v-card-title>Name: <strong class="title">{{ name }}</strong></v-card-title>
    <v-card-title>Manager: <strong class="title">{{ manager }}</strong></v-card-title>
    <v-card-title>Perne: <strong class="title">{{ perne }} %</strong></v-card-title>
    <v-card-title>Lenjerie: <strong class="title">{{ lenjerie }} %</strong></v-card-title>
    <v-card-title>Fete: <strong class="title">{{ fete }} %</strong></v-card-title>
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
  text-align center
  border-radius 11px
  padding 1rem
  &__title
    padding .5rem
  .title
    margin-left 1rem
    font-weight bold
</style>

