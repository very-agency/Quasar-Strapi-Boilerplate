<template>
  <q-page>


<div class="text-center">
  <HeroHome />
</div>

<div class="text-center">
  <Launcher />
</div>


<div class="text-center">
  <CardOne />
</div>

<div class="text-center">
  <CardTwo />
</div>

<div class="text-center">
  <CardThree />
</div>


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
import Launcher from 'components/Launcher'
import CardOne from 'components/CardOne'
import CardTwo from 'components/CardTwo'
import CardThree from 'components/CardThree'
import HeroHome from 'components/HeroHome'

export default {
  components: {
    Launcher,
    CardOne,
    CardTwo,
    CardThree,
    HeroHome,
  },
  data () {
      return {
        slide: 'first'
      }
    }
}
</script>
