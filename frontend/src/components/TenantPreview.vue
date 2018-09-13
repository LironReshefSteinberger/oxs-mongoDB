<template>
    <div class="tenant-preview flex clean-list justify-center align-center" v-if="tenant">
        <!-- <h1> this is tenant-preview cmp</h1> -->
        <ul class="tenant-preview-container flex align-center clean-list space-between">
            <li class="detail capitalize">{{tenant.name}}</li>
            <li class="detail margin-right capitalize">{{tenant.debtAmount}}</li>
        </ul>
        <router-link class="detail btn btn-more-details" :to="`/tenant/${tenant._id}/`">More details</router-link>
        <router-link class="detail btn btn-edit" :to="`/tenant/edit/${tenant._id}/`">Edit</router-link>
        <button class="detail btn btn-remove" @click.stop="$emit('remove', tenant._id)">X</button>
    </div>
</template>
<script>

export default {
  name: "TenantPreview",
  components: {},
  props: ["tenant"],
  data() {
    return {
    };
  },


  methods: {
  
  },
  computed: {

  }
};
</script>


<style scoped lang="scss">
@import "../assets/scss/style.scss";
    .tenant-preview {
        width: 100%;
    }
    .tenant-preview-container {
        width: 200px;
    }

    .detail {
        padding: 10px;
    }

    .margin-right {
        margin-left: 30px;
    }

    .btn-more-details, .btn-edit {
        color: $third-color;
        &:hover {
            color: $secondary-color;
        }
    }

    .btn-remove {
        background-color: transparent;
        border: 0;
        color: $secondary-color;
    }



</style>
