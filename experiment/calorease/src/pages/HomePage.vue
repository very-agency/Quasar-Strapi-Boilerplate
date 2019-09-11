<template>
  <q-page>
  <HeaderHome />
  <HeroHome />
  <HomeTab />
</q-page>
</template>


<style lang="stylus" scoped>
.custom-caption
  text-align center
  padding 12px
  color white
  background-color rgba(0, 0, 0, .3)
</style>

<script>
import HeaderHome from 'components/HeaderHome'
import HeroHome from 'components/HeroHome'
import HomeTab from 'components/HomeTab'

export default {
  components: {
    HeaderHome,
    HeroHome,
    HomeTab,
  },
  data () {
      return {
        slide: 'first'
      }
    }
}
</script>
