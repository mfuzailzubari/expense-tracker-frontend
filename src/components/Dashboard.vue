<template>
  <section id="container">
    <top-bar></top-bar>

    <side-bar></side-bar>
    <!-- **********************************************************************************************************************************************************
      MAIN CONTENT
    ***********************************************************************************************************************************************************-->
    <!--main content start-->
    <section id="main-content">
      <section class="wrapper site-min-height">
        <h3>
          <i class="fa fa-angle-right"></i> Blank Page
        </h3>
        <div class="row mt">
          <div class="col-lg-12">
            <p>Place your content here.</p>
          </div>
        </div>
      </section>
      <!--/wrapper -->
    </section>
    <!-- /MAIN CONTENT -->
    <!--main content end-->
    <bottom></bottom>
  </section>
</template>

<script>
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import Bottom from "./Bottom";

export default {
  name: "Dashboard",
  data() {
    return {
      msg: "Dashboard"
    };
  },
  components: {
    TopBar,
    SideBar,
    Bottom
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
