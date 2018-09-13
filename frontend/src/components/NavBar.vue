<template>
    <div class="nav-bar">
        <router-link class="nav-link" exact to="/">Home</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
        <router-link class="nav-link" to="/tenant">Tenants</router-link>
    </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>

<style scoped lang="scss">
// @import "../assets/scss/style.scss";
    .nav-link {
        color: $main-color;
        padding: 10px;
        font-size: 18px;
        text-decoration: none;
    }
    .nav-link:hover, .router-link-exact-active {
        color: $secondary-color;
    }

</style>
