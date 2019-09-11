<template>
<div absolute-top>
  <q-img src="./statics/HERO.jpg" />
<!--    <q-carousel
          arrows
          animated
          v-model="slide"
          infinite
          autoplay
          absolute-center
          transition-prev="slide-right"
          transition-next="slide-left"
          class="q-pa-lg"
        >
  <q-carousel-slide :name="1" img-src="./statics/fatgo_transparent.png" />
  <q-carousel-slide :name="2" img-src="./statics/carbo_transparent.png" />
  <q-carousel-slide :name="3" img-src="./statics/Appressant_transparent.png" />
</q-carousel>
-->
</div>
</template>

<script>
export default {
  name: 'HeroHome',
  data () {
      return {
        slide: 'first'
      }
    }
}
</script>

<style lang="stylus" scoped>
.custom-caption
  text-align center
  padding 12px
  color white
  background-color rgba(0, 0, 0, .3)
</style>
