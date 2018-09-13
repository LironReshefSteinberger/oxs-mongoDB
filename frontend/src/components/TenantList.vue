<template>
  <div class="tenant-list flex justify-center align-center align-item">
      <router-link class="btn btn-add" tag="button" to="/tenant/edit/">Add</router-link>
        <ul class="tenant-cards-container flex justify-center" v-if="tenants">
          <div class="tenant tenant-preview clean-list" v-for="tenant in tenants" :key="tenant._id">
              <tenant-preview :tenant="tenant" @remove="$emit('remove', tenant._id)"></tenant-preview>
          </div>
        </ul>
  </div>
</template>

<script>
import TenantPreview from "@/components/TenantPreview.vue";

export default {
  name: "TenantList",
  props: ["tenants"],
  components: {
    TenantPreview
  },
  methods: {
    removeTenant(tenantId) {
        $emit('remove', tenant._id)
    },
  }
};
</script>

<style scoped lang="scss">
  .tenant-list {
    width: 100%;
  }
  .btn-add {
    background-color: rgb(209, 207, 207);
    border: 0;
    color: $secondary-color;
    padding: 5px;
  }
  
</style>
