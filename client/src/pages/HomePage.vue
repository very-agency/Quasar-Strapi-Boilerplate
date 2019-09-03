<template>
  <q-page>

    <div class="q-pa-sm">
      <q-carousel
            rounded-borders
            arrows
            animated
            v-model="slide"
            height="350px"
            infinite
            autoplay
            transition-prev="slide-right"
            transition-next="slide-left"
          >
    <q-carousel-slide :name="1" img-src="https://www.crossfit.com/wp-content/uploads/2019/07/17162046/CFKidsCourse_Workouts1-1024x753.jpg">
    <div class="absolute-bottom custom-caption text-white">
          <div class="text-h2">First Step
          </div>
          <div class="text-subtitle1">Have fun with sport
          </div>
        </div>
      </q-carousel-slide>
    <q-carousel-slide :name="2" img-src="https://content.thriveglobal.com/wp-content/uploads/2018/05/Lf13-Sept-Kids-Fitness-pic-1.jpg">
    <div class="absolute-bottom custom-caption text-white">
          <div class="text-h2">Plug and play
          </div>
          <div class="text-subtitle1">Easiest way to express your move
          </div>
        </div>
        </q-carousel-slide>
    <q-carousel-slide :name="3" img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSePyUoQStT1-wsIuHH_onYQ4O6UmQQqFup082bxlcuXMjSy3Rv">
    <div class="absolute-bottom custom-caption text-white">
          <div class="text-h2">Radiant!
          </div>
          <div class="text-subtitle1">Brains are muscles
          </div>
        </div>
        </q-carousel-slide>
    <q-carousel-slide :name="4" img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxKXqknzQbGUy2fvMFbBwTwddfSSt0rZuTrH_KH5lEtEOc23sg">
    <div class="absolute-bottom custom-caption">
          <div class="text-h2">Next Move</div>
          <div class="text-subtitle1">Reach higher level!</div>
        </div>
      </q-carousel-slide>
  </q-carousel>
</div>


<div class="text-center q-pa-sm">
  <Launcher />
</div>

<div class="row">
<div class="col text-center q-pa-sm">
  <Teens />
</div>

<div class="col text-center q-pa-sm">
  <Balita />
</div>
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
import Teens from 'components/Teens'
import Balita from 'components/Balita'


export default {
  components: {
    Launcher,
    Teens,
    Balita,
  },
  data () {
      return {
        slide: 'first'
      }
    }
}
</script>
