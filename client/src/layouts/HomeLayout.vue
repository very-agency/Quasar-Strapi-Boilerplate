<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-negative text-white">
      <q-toolbar>
        <q-toolbar-title>Fambam</q-toolbar-title>
        <div>Hello, Very</div>
      </q-toolbar>
    </q-header>
    <q-page-container class="bg-pink-2">
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-negative text-white">
          <q-tabs>
    <q-tab icon="menu" />
    <q-tab icon="query_builder" />
    <q-tab icon="account_balance_wallet" />
    <q-tab icon="account_box" />
        </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      right: false
    }
  }
}
</script>
