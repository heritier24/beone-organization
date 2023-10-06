<template>
<SideMenuAdmin />
  <MainContentClientsTrusted />
</template>
<script>
import SideMenuAdmin from '../components/SideMenuAdmin.vue'
import MainContentClientsTrusted from '../components/MainContentClientsTrusted.vue'
export default {
  components: {
    SideMenuAdmin,
    MainContentClientsTrusted
  }
}
</script>
