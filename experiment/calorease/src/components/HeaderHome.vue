<template>
  <q-header elevated class="bg-white text-black">
    <q-toolbar>
      <q-toolbar-title>CALOREASE</q-toolbar-title>
      <q-btn flat @click="drawerRight = !drawerRight" round dense icon="menu" />
    </q-toolbar>
  <q-drawer
        side="right"
        v-model="drawerRight"
        show-if-above
        bordered
        :width="200"
        :breakpoint="500"
      >
        <q-scroll-area class="fit">
          <div class="q-pa-sm">
            <div v-for="n in 50" :key="n">Drawer {{ n }} / 50</div>
          </div>
        </q-scroll-area>
      </q-drawer>
          </q-header>
</template>

<script>
export default {
  data () {
    return {
      drawerRight: false
    }
  }
}
</script>

<style>
</style>
