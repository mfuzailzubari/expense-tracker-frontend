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
          <i class="fa fa-angle-right"></i> Dashboard
        </h3>
        <div class="row mt">
          <div class="col-lg-12">
            <div class="content-panel">
              <h4>
                <i class="fa fa-angle-right"></i> Expense By Category
              </h4>
              <div class="panel-body text-center">
                <canvas id="pie" height="300" width="400" ref="pie_canvas"></canvas>
              </div>
            </div>
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
  },
  mounted() {
    console.log(this.$refs.pie_canvas);

    let url = this.$baseUrl + "categories-expense";
    this.$http
      .get(url, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
          Accept: "application/json"
        }
      })
      .then(result => {
        let pieColors = [
          {
            color: "#1abc9c"
          },
          {
            color: "#16a085"
          },
          {
            color: "#27ae60"
          }
        ];

        let pieData = [];
        // let labels = [];
        for (let index = 0; index < result.data.length; index++) {

          // labels.push(result.data[index].name);
          pieData.push({
            value: result.data[index].category_total,
            color: pieColors[index].color
          });

          if (index >= pieColors.length) break;
        }

        // let data = { labels: labels, datasets: pieData };
        new Chart(this.$refs.pie_canvas.getContext("2d")).Pie(pieData);
      })
      .catch(err => console.log(err));
  }
};

import "./../../static/js/chart-master/Chart.js";
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
