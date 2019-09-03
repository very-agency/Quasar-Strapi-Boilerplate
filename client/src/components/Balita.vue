<template>
  <div>
    <q-card
          class="my-card text-white bg-negative"
          >
          <q-card-section>
            <div class="text-h6">Baby Planet</div>
            <div class="text-subtitle2">Cheers and Jump</div>
          </q-card-section>

          <q-card-section>
            <q-img class="q=pa-md" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLd0jBsyNqXHijTryiKzrTeMeHIS6yIGAWrEl_awJ0PzhE_XO" />
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
