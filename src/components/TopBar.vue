
<template>
  <!-- **********************************************************************************************************************************************************
      TOP BAR CONTENT & NOTIFICATIONS
  ***********************************************************************************************************************************************************-->
  <!--header start-->
  <header class="header black-bg">
    <div class="sidebar-toggle-box">
      <div
        class="fa fa-bars tooltips"
        data-placement="right"
        data-original-title="Toggle Navigation"
      ></div>
    </div>
    <!--logo start-->
    <router-link to="/dashboard" class="logo">
      <b>PRICEOYE</b>
    </router-link>

    <!--logo end-->
    <div class="top-menu">
      <ul class="nav pull-right top-menu">
        <li>
          <a class="logout" v-on:click="logout" style="cursor: pointer;">Logout</a>
        </li>
      </ul>
    </div>
  </header>
  <!--header end-->
</template>

<script>
export default {
  name: "TopBar",
  // data() {
  //   return {
  //     msg: "Dashboard"
  //   };
  // },
  methods: {
    logout: function(event) {
      // `this` inside methods point to the Vue instance
      localStorage.removeItem("jwt");
      this.$router.push("/");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
