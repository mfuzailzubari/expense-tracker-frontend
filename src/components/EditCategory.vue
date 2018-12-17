<template>
  <section id="container">
    <top-bar></top-bar>

    <side-bar></side-bar>

    <!--main content start-->
    <section id="main-content">
      <section class="wrapper site-min-height">
        <h3>
          <i class="fa fa-angle-right"></i> Category
        </h3>
        <div class="row mt">
          <div class="col-lg-12">
            <div class="white-panel pn">
              <div class="panel-heading">
                <div class="pull-left">
                  <h5>
                    <i class="fa fa-tasks"></i> Edit Category
                  </h5>
                </div>
                <br>
              </div>
              <div class="custom-check goleft mt">
                <div class="row">
                  <div class="col-md-2"></div>
                  <div class="col-md-4">
                    <form class>
                      <div class="login-wrap">
                        <input
                          type="text"
                          class="form-control"
                          v-model="name"
                          required
                          placeholder="Name"
                          autofocus
                        >
                        <br>

                        <button class="btn btn-theme btn-block" type="submit" @click="handleSubmit">
                          <i class="fa fa-lock"></i> Edit Category
                        </button>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-6"></div>
                </div>
              </div>
              <!-- /table-responsive -->
            </div>
            <!--/ White-panel -->
          </div>
        </div>
      </section>
      <!--/wrapper -->
    </section>
    <!-- /MAIN CONTENT -->
    <bottom></bottom>
  </section>
</template>

<script>
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import Bottom from "./Bottom";

export default {
  name: "EditCategory",
  data() {
    return {
      name: "",
      id: ""
    };
  },
  created() {
    let data = this.$route.params.data;
    this.name = data.name;
    this.id = data.id;
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (this.name.length > 0) {
        // console.log("click");
        this.$http.headers.common["Accept"] = "application/json";
        this.$http
          .put(
            this.$baseUrl + "categories/" + this.id,
            {
              name: this.name
            },
            {
              headers: {
                Authorization: "Bearer " + localStorage.getItem("jwt"),
                Accept: "application/json"
              }
            }
          )
          .then(response => {
            console.log(response.body);
            this.$router.push("categories");
          })
          .catch(function(error) {
            console.error(error);
            this.errormsg = error;
          });
      }
    }
  },
  components: {
    TopBar,
    SideBar,
    Bottom
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
