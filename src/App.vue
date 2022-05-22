<template>
  <div>
    
  <Sidebar />
  <ConsultarAtos />
  
  </div>
  <!-- End demo content -->
</template>
<script>
import Sidebar from './components/Sidebar.vue';
import ConsultarAtos from './pages/ConsultarAtos.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
    ConsultarAtos
  }
}

</script>