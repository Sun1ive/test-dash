<template>
  <v-container>
    <v-layout>
      <v-flex>
        <User />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import User from '@/components/User.vue';

export default Vue.extend({
  components: { User },
});
</script>
