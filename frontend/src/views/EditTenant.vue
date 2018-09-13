<template>
    <section class="edit-tenant-container">
        <!-- <h1>this is edit cmp</h1> -->
    <h3 class="edit-title" >{{this.$route.params.tenantId? 'Edit your tenant!': 'Add your tenant!'}}</h3>
        <div class="edit-tenant no-margin flex" v-if="tenantCopy">
          <form class="form-container no-margin" @submit.native.prevent="saveTenant">
            <div class="detail flex">
                <h3 class="detail-header">Name:</h3>
                <input class="input-name" v-model="tenantCopy.name"/>
            </div>
            <div class="flex">
                <h3>Phone number:</h3>
                <input class="input-phone-number" v-model="tenantCopy.phoneNumber"/>
            </div>
            <div class="flex">
                <h3>Address:</h3>
                <input class="input-address" v-model="tenantCopy.address"/>
            </div>
            <div class="flex">
                <h3>Debt amount:</h3>
                <input class="input-debtAmount" v-model="tenantCopy.debtAmount"/>
            </div>
            <div class="btns-container flex justify-center align-center">
              <button class="btn-save" type="primary" @click="saveTenant">Save</button>
              <button class="btn-cancel" @click="cancel">Cancel</button>
            </div>
          </form>
        </div>
    </section>
</template>

<script>
import TenantService from "@/services/TenantService.js";

export default {
  name: "editTenant",
  data() {
    return {
      currTenant: null,
      tenantCopy: null
    };
  },
  created() {
    this.loadTenant();
  },
  methods: {
    loadTenant() {
      // console.log("this.$route.params in edit cmp", this.$route.params.tenantId);
      if (this.$route.params.tenantId) {
        this.$store
          .dispatch({
            type: "loadTenant",
            tenantId: this.$route.params.tenantId
          })
          .then(tenant => {
            this.currTenant = tenant;
            // console.log("this.currTenant in edit cmp", this.currTenant);
            this.tenantCopy = JSON.parse(JSON.stringify(this.currTenant));
            // console.log("this.tenantCopy new in edit cmp", this.tenantCopy);
          });
      } else {
          console.log("has No params!! user>>", this.$route.params.userId);
          this.tenantCopy = TenantService.createEmptyTenant(
          this.$route.params.userId
          );
      }
    },
    saveTenant() {
      this.tenantCopy.debtAmount = +this.tenantCopy.debtAmount;
      this.$store.dispatch({ type: 'saveTenant', savedTenant: this.tenantCopy })
        .then(tenant => {
          console.log('saveTenant back from server');
          this.$router.push("/tenant");
      });
    },
    cancel() {
      this.$router.push("/tenant");
    }
  }
};
</script>

<style scoped lang="scss">
// @import '~@/assets/scss/style.scss';
// .detail{
//     width: 500px;
// }

// .detail-header {
//     width: 150px;
// }
  .btns-container {
    margin-top: 20px;
  }

  .btn-save, .btn-cancel {
    background-color: rgb(209, 207, 207);
    border: 0;
    color: $secondary-color;
    padding: 5px;
    margin: 10px;
  }
</style>


