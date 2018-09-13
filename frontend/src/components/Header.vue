<template>
  <section>
    <div>
        <div>
            <img class="img-logo" src="img/oxs.png">
        </div>
        <nav-bar></nav-bar>
    </div>
  </section>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: 'Header',
  components: {
    NavBar,
  }
};
</script>

<style scoped lang="scss">
    .img-logo {
        width: 500px;
        padding-bottom: 30px;
    }


</style>