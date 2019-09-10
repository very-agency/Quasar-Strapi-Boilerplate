<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-negative text-white calorease_heading">
      <q-toolbar>
        <q-toolbar-title>Calorease</q-toolbar-title>
        <div>Hello, Very</div>
      </q-toolbar>
    </q-header>
    <q-page-container class="bg-white">
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-negative text-white">
          <q-tabs>
    <q-tab icon="menu" />
    <q-tab icon="local_grocery_store" />
    <q-tab icon="local_post_office" />
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
