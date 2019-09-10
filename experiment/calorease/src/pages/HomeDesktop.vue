<template>
  <q-page padding>
    <HeaderHome />
    <DesktopTab />
    <HeroDesktop />
  </q-page>
</template>

<script>
import HeaderHome from 'components/HeaderHome'
import DesktopTab from 'components/DesktopTab'
import HeroDesktop from 'components/HeroDesktop'

export default {
  components: {
    HeaderHome,
    DesktopTab,
    HeroDesktop,
  }
}
</script>

<style>
</style>
