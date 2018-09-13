<template>
    <div class="filter-gallery-container flex flex-start">
        <form @submit.prevent="setFilter" class="search-in-gallery flex">
            <input class="search-input" type="text" v-model="filterBy.name" placeholder="Search for tenants" autofocus/>
            <button class="btn search-btn" type="primary" @click="setFilter">Search</button>
        </form>
        <label><input type="radio" value="all" v-model="filterBy.type" @change="setFilter"/>All</label>
        <label><input type="radio" value="has" v-model="filterBy.type" @change="setFilter"/>Has debt</label>
        <label><input type="radio" value="no" v-model="filterBy.type" @change="setFilter"/>Has no debt</label>
    </div>
</template>

<script>
import debounce from "lodash.debounce";
import TenantService from "@/services/TenantService.js";

export default {
  components: {},
  data() {
    return {
      filterBy: {
        name: "",
        type: ""
      }
    };
  },
  created() {
    this.filterBy = JSON.parse(
      JSON.stringify(this.$store.state.filterBy)
    );
    this.$store.dispatch({
      type: "setFilter",
      filterBy: this.$store.state.filterBy
    });
  },
  methods: {
    setFilter: debounce(function() {
      this.filterBy.name = this.filterBy.name.toLowerCase();
      console.log("this.filterBy", this.filterBy);
      var filterBy = JSON.parse(JSON.stringify(this.filterBy));
      console.log("var filterBy", filterBy);
      this.$store.dispatch({ type: "setFilter", filterBy }).then(tenabts => {});
    }, 500),
  }
};
</script>

<style scoped lang="scss">
  .filter-gallery-container, .search-in-gallery {
    margin-bottom: 10px;
  }

  .search-in-gallery {
    margin-top: 10px;
    padding: 10px;
    // height: 50px;
  }

</style>