<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="false"
      :clipped="true"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <div>

      </div>
      <div class="barRightDiv">
        <template v-if="!token">
          <span>
            <v-icon>mdi-account</v-icon>
            {{ $t('buttons.sign_in') }}
          </span>
          <span>
            <v-icon>mdi-account-card-details-outline</v-icon>
            {{ $t('buttons.sign_up') }}
          </span>
        </template>
        <template v-else>
          <span>
            <v-icon>mdi-account</v-icon>
            {{ info.name }}
          </span>
          <span @click="logout">
            <v-icon>mdi-account-off</v-icon>
            {{ $t('buttons.sign_out') }}
          </span>
        </template>
      </div>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      title: 'Toys'
    }
  },
  computed: {
    ...mapGetters('user', { token: 'TOKEN', info: 'INFO' })
  },
  mounted() {
    console.log(this)
  },
  methods: {
    ...mapActions('user', { logout: 'LOGOUT' })
  }
}
</script>
<style lang="scss" scoped>
.barRightDiv {
  & span {
    cursor: pointer;
  }
  & span:last-child {
    margin-left: 10px;
  }
}
</style>
