<template>
  <v-app>
    <Toolbar />
    <v-content>
      <v-container fill-height fluid>
        <transition name="collapse" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Toolbar from '@/components/Toolbar.vue';

export default Vue.extend({
  components: { Toolbar },
});
</script>


<style lang="stylus">
.container
  padding 0

.collapse-enter-active
  transition all .4s ease
.collapse-leave-active
  transition all .5s linear

.collaps-enter, .collapse-leave-to
  transform: translateX(20px)
  opacity 0
</style>
