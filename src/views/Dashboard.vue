<template>
  <v-container>
    <v-layout justify-center align-center>
      <v-flex xs3 class="text-xs-center mt-3">
        <v-btn dark color="green" @click="reset">reset</v-btn>
      </v-flex>
    </v-layout>
    <v-layout justify-space-around class="wrapper">
      <v-flex xs10 sm6 lg3>
        <h2>{{ category.toUpperCase() }}</h2>
        <v-select
          :items="['perne', 'lenjerie', 'fete']"
          v-model.lazy="category"
          color="green"
        />
      </v-flex>
      <v-flex xs10 sm6 lg3>
        <h2>Manager</h2>
        <v-select
          :items="managerList"
          v-model.lazy="selectedManager"
          color="green"
        />
      </v-flex>
      <v-flex xs10 sm6 lg3>
        <h2>Sort by</h2>
        <v-select
          :items="['low', 'high']"
          v-model.lazy="sortBy"
          color="green"
        />
      </v-flex>
    </v-layout>
    <v-layout column>
      <transition-group
        name="company"
        mode="out-in"
        tag="div"
      >
        <v-flex v-for="user in filtered" :key="user.id">
          <User
            :name="user.fullname"
            :manager="user.manager"
            :photo="user.photo"
            :percent="percent"
            :value="user[category]"
            @click.native="openDialog(user)"
          />
        </v-flex>
      </transition-group>
    </v-layout>
    <v-dialog
      v-model="dialog"
      max-width="500"
    >
      <Card
        :name="user.fullname"
        :manager="user.manager"
        :photo="user.photo"
        :perne="user.perne"
        :lenjerie="user.lenjerie"
        :fete="user.fete"
        :percent="percent"
        :bonuses="user.bonuses"
      />
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import User from '@/components/User.vue';
import Card from '@/components/Card.vue';
import Generator from '@/utils/fakeGenerator';

interface IUser {
  fullname: string;
  manager: string;
  photo: string;
  perne: number;
  lenjerie: number;
  fete: number;
  id: number;
  bonuses: number;
  [key: string]: number | string;
}

export default Vue.extend({
  components: { User, Card },
  data: () => ({
    gen: {},
    Users: [] as IUser[],
    category: 'perne',
    sortBy: 'low',
    percent: 66,
    selectedManager: 'All',
    dialog: false,
    user: {
      fullname: '',
      manager: '',
      photo: '',
      perne: 0,
      lenjerie: 0,
      fete: 0,
      bonuses: 0,
    } as IUser,
  }),
  computed: {
    filtered(): IUser[] {
      let users = null;
      let filtered = null;
      if (this.selectedManager === 'All') {
        users = this.Users;
      } else {
        users = this.Users.filter(user => user.manager === this.selectedManager);
      }
      filtered = users
        .filter((user: IUser) => user[this.category])
        .sort((a: IUser, b: IUser) =>
          (a[this.category] as number) - (b[this.category] as number));
      if (this.sortBy !== 'low') {
        filtered = filtered.slice().reverse();
      }
      return filtered;
    },
    managerList(): string[] {
      return ['All', ...new Set(this.Users.map(user => user.manager))];
    },
  },
  created() {
    this.Users = new Array(40).fill(0).reduce((acc, next) => {
      acc.push(new Generator());
      return acc;
    }, []);
  },
  methods: {
    openDialog(User: IUser) {
      this.dialog = true;
      this.user = User;
    },
    reset() {
      this.sortBy = 'low';
      this.selectedManager = 'All';
      this.category = 'perne';
    },
  },
});
</script>

<style lang="stylus" scoped>
.wrapper
  max-width 1064px
  margin 0 auto
  h2
    margin 1rem 0


.company {
  position: relative;
  width: calc(100% / 2 - 1rem);
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 0 0 1px #c5d0d1;
  backface-visibility: hidden;
  transform-origin: 10% 50%;
  z-index: 1;

  @media (min-width: 800px) {
    width: calc(100% / 3 - 1rem);
  }

  &-move {
    transition: all 600ms ease-in-out 50ms;
  }

  &-enter-active {
    transition: all 300ms ease-out;
  }

  &-leave-active {
    transition: all 200ms ease-in;
    position: absolute;
    z-index: 0;
  }

  &-enter, &-leave-to {
    opacity: 0;
  }

  &-enter {
    transform: scale(0.9);
  }

  &__data {
    line-height: 1.3;
  }

  &__label {
    font-size: 0.8rem;
  }

  &__rating {
    text-align: center;
  }

  &__info {
    padding: 0 0.75rem;
    text-align: center;
  }

  &__logo {
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
  }

  &__name {
    height: 2.5rem;
    margin: 0.75rem 0;
    font-size: 1.3rem;
    font-weight: 200;
    text-align: center;
  }

  &__slogan {
    height: 2rem;
    text-align: center;
    font-weight: 400;
    text-transform: capitalize;
  }

  &__details {
    display: flex;
    justify-content: space-between;
    margin-top: 1.5rem;
    padding: 0.5rem 0.75rem;
    background-color: rgba(#c5d0d1, 0.1);
    border-top: 1px solid #c5d0d1;
  }

  &__country:hover {
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
