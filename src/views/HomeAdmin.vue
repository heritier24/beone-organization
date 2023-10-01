<template>
<SideMenuAdmin />
  <MainContent />
</template>
<script>
import SideMenuAdmin from '../components/SideMenuAdmin.vue'
import MainContent from '../components/MainContent.vue'
export default {
  components: {
    SideMenuAdmin,
    MainContent
  }
}
</script>
