<template>
  <q-footer>
        <q-tab-panels v-model="tab" animated>

          <q-tab-panel name="mails">
            <q-img src="./statics/fatgo_transparent.png" />
            <div class="text-center">
            <q-btn class="text-center" color="indigo-9" label="View More" />
          </div>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <q-img src="./statics/carbo_transparent.png" />
            <div class="text-center">
            <q-btn class="text-center" color="orange" label="View More" />
          </div>
          </q-tab-panel>

          <q-tab-panel name="movies">
            <q-img src="./statics/Appressant_transparent.png" />
            <div class="text-center">
            <q-btn class="text-center" color="purple-7" label="View More" />
          </div>
          </q-tab-panel>

        </q-tab-panels>

        <q-tabs
          v-model="tab"
          dense
          align="justify"
          class="row-12"
        >
          <q-tab class="col-4 bg-indigo-9" style="height: 100px" name="mails" label="FATGO" />

          <q-tab class="col-4 bg-orange" style="height: 100px" name="alarms" label="CARBO" />

          <q-tab class="col-4 bg-purple" style="height: 100px" name="movies" label="APPRESSANT" />

        </q-tabs>
  </q-footer>
</template>


<script>
export default {
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>

<style>
</style>
