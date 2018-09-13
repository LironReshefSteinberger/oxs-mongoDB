<template>
    <section class="tenant-details flex justify-center align-center" v-if="currTenant">
        <h1>this is details cmp</h1>
        <div class="text-container flex column capitalize">
            <div class="detail-item" label="Type">{{currTenant.name}}</div>
            <div class="detail-item" label="Category">{{currTenant.phoneNumber}}</div>
            <div class="detail-item" label="Condition">{{currTenant.address}}</div>
            <div class="detail-item" label="Condition">{{currTenant.debtAmount}}</div>
        </div>
        <button @click="backToList">Back</button>
    </section>

</template>
<script>

import TenantService from "@/services/TenantService.js";

export default {
  name: "TenantDetails",
  data() {
    return {
      currTenant: null,
    }
  },
  created() {
    // var filterBy = JSON.parse(JSON.stringify(this.filterBy));
    // this.$store.commit({ type: "setFilter", filterBy });
    this.loadTenant();
  },  
  methods: {
    loadTenant() {
      console.log('this.$route.params.tenantId', this.$route.params.tenantId);
      
      this.$store
        .dispatch({ type: "loadTenant", tenantId: this.$route.params.tenantId })
        .then(tenant => {
          console.log('tenant:', tenant);
          this.currTenant = tenant;
        });
    },
    backToList() {
        this.$router.push("/tenant");
    }
  },
  components: {

  }
};
</script>


