<template>
    <section>
        <!-- <h1>This is an gallery page</h1> -->
        <tenant-filter></tenant-filter>
            <tenant-list class="list-container" :tenants="allTenants" @remove="removeTenant"></tenant-list>
    </section>
</template>

<script>
import TenantList from "@/components/TenantList.vue";
import TenantFilter from "@/components/TenantFilter.vue";

export default {
  name: 'Gallery',
  components: {
    TenantList,
    TenantFilter,
  },
  data() {
    return {
    };
  },
  created() {
    console.log('in created at gallery cmp');
    
    this.loadTenants();
  },
  computed: {
    allTenants() {
      return this.$store.getters.allTenants;
    },
  },
  methods: {
    loadTenants() {
      this.$store
        .dispatch({ type: "loadTenants" })
        .then(tenants => {})
        .catch(err => {
          console.log("err", err);
        });
    },
    removeTenant(tenantId) {
        console.log('remove tenantId...', tenantId);
        this.$store.dispatch({type: 'removeTenant', tenantId })
            .then(() =>{
                console.log('removed from tenant back from server'); 
            })
    },
  }
};
</script>

<style scoped lang="scss">
  .list-container {
    // width: 800px;
  }

</style>
    


