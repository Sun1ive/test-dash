<template>
  <v-container>
    <v-layout column>
      <v-flex v-for="user in Users" :key="user.name">
        <User
          :name="user.name"
          :manager="user.manager"
          :photo="user.photo"
          :percent="33"
          :value="user[category]"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import User from '@/components/User.vue';
import Users from '@/db/Users.json';

export default Vue.extend({
  components: { User },
  data: () => ({
    Users,
    category: 'perne',
  }),
});
</script>
