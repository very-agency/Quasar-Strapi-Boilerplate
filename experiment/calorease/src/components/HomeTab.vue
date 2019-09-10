
  <template>
    <q-footer>
    <div>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="mails">
            <q-img src="./statics/fatgo_transparent.png" />
            <div class="text-center q-pa-lg">
            <q-btn class="text-center q-pa-md" color="indigo-9 q-pa-md" label="View More" />
          </div>
          </q-tab-panel>

          <q-tab-panel name="alarms">
            <q-img src="./statics/carbo_transparent.png" />
            <div class="text-center q-pa-lg">
            <q-btn class="text-center q-pa-md" color="orange" label="View More" />
          </div>
          </q-tab-panel>

          <q-tab-panel name="movies">
            <q-img src="./statics/Appressant_transparent.png" />
            <div class="text-center q-pa-lg">
            <q-btn class="text-center q-pa-md" color="purple" label="View More" />
          </div>
          </q-tab-panel>
        </q-tab-panels>

        <q-tabs
          v-model="tab"
          dense
          align="justify"
          z-index="99"
          class="row home_tab"
        >
          <q-tab class="col-6 bg-indigo-9" style="height: 100px" name="mails" label="FATGO" />

          <q-tab class="col-6 bg-orange" style="height: 100px" name="alarms" label="CARBO" />

          <q-tab class="col-6 bg-purple" style="height: 100px" name="movies" label="APPRESSANT" />

        </q-tabs>
    </div>
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
.home_tab {
}
</style>
