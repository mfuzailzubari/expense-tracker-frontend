<template>
  <section id="container">
    <top-bar></top-bar>

    <side-bar></side-bar>

    <!--main content start-->
    <section id="main-content">
      <section class="wrapper site-min-height">
        <h3>
          <i class="fa fa-angle-right"></i> Expense
        </h3>
        <div class="row mt">
          <div class="col-lg-12">
            <div class="white-panel">
              <div class="panel-heading">
                <div class="pull-left">
                  <h5>
                    <i class="fa fa-tasks"></i> Add Expense
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
                          v-model="note"
                          required
                          placeholder="Note"
                          autofocus
                        >
                        <br>
                        <input
                          type="amount"
                          class="form-control"
                          v-model="amount"
                          required
                          placeholder="Amount"
                          autofocus
                        >
                        <br>
                        <input
                          type="date"
                          class="form-control"
                          v-model="date"
                          required
                          placeholder="Date"
                          autofocus
                        >
                        <br>
                        <select v-model="category_id" required class="form-control">
                          <!-- <option v-bind:value="category.id" selected>{{ category.name }}</option> -->
                          <option
                            v-for="category in categories"
                            :value="category.id"
                            :key="category.name"
                          >{{ category.name }}</option>
                        </select>
                        <br>

                        <button class="btn btn-theme btn-block" type="submit" @click="handleSubmit">
                          <i class="fa fa-lock"></i> Add Expense
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
  name: "AddExpense",
  data() {
    return {
      note: "",
      date: "",
      amount: "",
      category_id: "",
      categories: []
    };
  },
  created() {
    console.log(this.$baseUrl);
    this.fetchCategories(this.$baseUrl);
  },
  methods: {
    fetchCategories(page_url) {
      let vm = this;
      page_url = page_url + "categories";
      this.$http
        .get(page_url, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
            Accept: "application/json"
          }
        })
        .then(result => {
          this.categories = result.body;
        })
        .catch(err => console.log(err));
    },
    handleSubmit(e) {
      console.log(this.category_id);
      e.preventDefault();
      if (this.note.length > 0) {
        // console.log("click");
        this.$http.headers.common["Accept"] = "application/json";
        this.$http
          .post(
            this.$baseUrl + "expenses",
            {
              note: this.note,
              amount: this.amount,
              date: this.date,
              category_id: this.category_id
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
            this.$router.push("expenses");
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
