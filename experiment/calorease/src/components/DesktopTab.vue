
  <template>
    <q-footer>
      <div>
          <q-tab-panels class="q-pa-lg" v-model="tab" animated>

            <q-tab-panel class="text-center q-pa-lg" name="mails">
              <q-img style="max-height: 500px;max-width:500px" src="./statics/fatgo_transparent.png" /><br><br>
              <q-btn color="indigo-9" label="View More" style="height: 50px;width: 150px;" />
            </q-tab-panel>

            <q-tab-panel class="text-center q-pa-lg" name="alarms">
              <q-img style="max-height: 500px;max-width:500px" src="./statics/carbo_transparent.png" /><br><br>
              <q-btn color="orange" label="View More" style="height: 50px;width: 150px;" />
            </q-tab-panel>

            <q-tab-panel class="text-center q-pa-lg" name="movies">
              <q-img style="max-height: 500px;max-width:500px" src="./statics/Appressant_transparent.png" /><br><br>
              <q-btn color="purple" label="View More" style="height: 50px;width: 150px;" />
            </q-tab-panel>

          </q-tab-panels>

          <q-tabs
            v-model="tab"
            dense
            align="justify"
            z-index="99"
            class="row-12"
          >
            <q-tab class="col-4 bg-indigo-9" style="height: 50px" name="mails" label="FATGO" />

            <q-tab class="col-4 bg-orange" style="height: 50px" name="alarms" label="CARBO" />

            <q-tab class="col-4 bg-purple" style="height: 50px" name="movies" label="APPRESSANT" />

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

<style lang="stylus" scoped>
.desktop_tab
  max-width 35%
  position: left

</style>
