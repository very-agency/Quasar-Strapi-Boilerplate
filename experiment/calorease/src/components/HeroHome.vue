<template>
  <div>
    <q-carousel
          arrows
          animated
          v-model="slide"
          infinite
          autoplay
          transition-prev="slide-right"
          transition-next="slide-left"
          style="height: 200px"
        >
  <q-carousel-slide :name="1" style="full-height"><q-video src="./statics/video1.mp4" />
    </q-carousel-slide>
  <q-carousel-slide :name="2" img-src="./statics/HERO.jpg">
      </q-carousel-slide>
  <q-carousel-slide :name="3" img-src="https://myrepublica.nagariknetwork.com/uploads/media/2018/December/Activelife-opinion.jpg">
  <div class="absolute-bottom custom-caption text-white">
        <div class="text-h3 text-uppercase calorease_heading">No Worries</div>
          <div class="subtitle">for better life</div>
      </div>
      </q-carousel-slide>
</q-carousel>
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
