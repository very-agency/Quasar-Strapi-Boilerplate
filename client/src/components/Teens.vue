<template>
  <div>
    <q-card
          class="my-card text-white bg-negative"
          >
          <q-card-section>
            <div class="text-h6">Playground</div>
            <div class="text-subtitle2">Smile and Sound</div>
          </q-card-section>

          <q-card-section>
            <q-img class="q-pa-md" src="http://physicalactivityteens.weebly.com/uploads/2/7/5/9/27594241/882933_orig.jpg" />
          </q-card-section>
        </q-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style lang="stylus" scoped>
.my-card
  width 100%
  height 100%
  max-width 3500px
  height 13em
</style>
