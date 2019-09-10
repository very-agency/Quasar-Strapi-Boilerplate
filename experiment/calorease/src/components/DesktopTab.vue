
  <template>
    <q-footer>
    <div>
        <q-tabs
          v-model="tab"
          dense
          class=""
          align="justify"
          class="row"
        >
          <q-tab class="col-6 bg-indigo-9" style="height: 100px" name="mails">
            <div class="text-h4">FATGO</div>
          <p>Lorem Ipsum dolor sit amet</p></q-tab>

          <q-tab class="col-6 bg-orange" style="height: 100px" name="alarms">
            <div class="text-h4">CARBO</div><p>Lorem Ipsum dolor sit amet</p></q-tab>

          <q-tab class="col-6 bg-purple" style="height: 100px" name="movies">
            <div class="text-h4">Appressant</div><p>Lorem Ipsum dolor sit amet</p></q-tab>
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
