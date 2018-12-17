
<template>
  <!-- **********************************************************************************************************************************************************
      MAIN SIDEBAR MENU
  ***********************************************************************************************************************************************************-->
  <!--sidebar start-->
  <aside>
    <div id="sidebar" class="nav-collapse">
      <!-- sidebar menu start-->
      <ul class="sidebar-menu" id="nav-accordion">
        <p class="centered">
          <a href="profile.html">
            <img src="../../static/img/ui-sam.jpg" class="img-circle" width="60">
          </a>
        </p>
        <h5 class="centered">Marcel Newman</h5>

        <li class="mt">
          <router-link to="/dashboard">
            <i class="fa fa-dashboard"></i>
            <span>Dashboard</span>
          </router-link>
        </li>

        <li class="sub-menu">
          <a href="#">
            <i class="fa fa-desktop"></i>
            <span>Expenses</span>
          </a>
          <ul class="sub">
            <li>
              <router-link to="/expenses">Expense List</router-link>
            </li>
            <li>
              <router-link to="/expenses">Create Expense</router-link>
            </li>
          </ul>
        </li>

        <li class="sub-menu">
          <a href="#">
            <i class="fa fa-desktop"></i>
            <span>Categories</span>
          </a>
          <ul class="sub">
            <li>
              <router-link to="/categories">Category List</router-link>
            </li>
            <li>
              <router-link to="/expenses">Create Category</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <!-- sidebar menu end-->
    </div>
  </aside>
  <!--sidebar end-->
</template>

<script>
export default {
  name: "SideBar",
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
