<template>
  <q-page padding class="bg-brown-2">
    <HeroHome />
    <HomeTab />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-page>

</template>

<script>
import HeroHome from "components/HeroHome.vue"
import HomeTab from "components/HomeTab.vue"

export default {
  name: 'HomeLayout',

  components: {
    HeroHome,
    HomeTab,
  },

  data () {
    return {}
  }
}
</script>

<style>
</style>
