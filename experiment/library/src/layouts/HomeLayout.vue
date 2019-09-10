<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->
<HeaderHome />
    <q-page-container class="bg-white">
      <router-view />
    </q-page-container>
  </q-layout>

</template>

<script>
import HeaderHome from 'components/HeaderHome.vue'

export default {
  name: 'HomeLayout',

  components: {
    HeaderHome,
  },

  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>
