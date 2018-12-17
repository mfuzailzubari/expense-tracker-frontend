<template>
  <!-- **********************************************************************************************************************************************************
      MAIN CONTENT
  ***********************************************************************************************************************************************************-->
  <div id="login-page">
    <div class="container">
      <form class="form-login">
        <h2 class="form-login-heading">sign in now</h2>
        <div class="login-wrap">
          <input
            type="text"
            class="form-control"
            v-model="email"
            required
            placeholder="User ID"
            autofocus
          >
          <br>
          <input
            type="password"
            v-model="password"
            required
            class="form-control"
            placeholder="Password"
          >
          <label class="checkbox">
            <span class="pull-right">
              <a data-toggle="modal" href="login.html#myModal">Forgot Password?</a>
            </span>
          </label>
          <button class="btn btn-theme btn-block" type="submit" @click="handleSubmit">
            <i class="fa fa-lock"></i> SIGN IN
          </button>
          <hr>

          <div class="registration">Don't have an account yet?
            <br>
            <router-link to="/register">Create an account</router-link>
          </div>
        </div>

        <!-- Modal -->
        <div
          aria-hidden="true"
          aria-labelledby="myModalLabel"
          role="dialog"
          tabindex="-1"
          id="myModal"
          class="modal fade"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">Forgot Password ?</h4>
              </div>
              <div class="modal-body">
                <p>Enter your e-mail address below to reset your password.</p>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  autocomplete="off"
                  class="form-control placeholder-no-fix"
                >
              </div>
              <div class="modal-footer">
                <button data-dismiss="modal" class="btn btn-default" type="button">Cancel</button>
                <button class="btn btn-theme" type="submit" @click="handleSubmit">Submit</button>
              </div>
            </div>
          </div>
        </div>
        <!-- modal -->
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (this.password.length > 0) {
        // console.log("click");
        this.$http.headers.common["Accept"] = "application/json";
        this.$http
          .post(this.$baseUrl + "login", {
            email: this.email,
            password: this.password
          })
          .then(response => {
            console.log(response.body.success.token);
            // let is_admin = response.data.user.is_admin;
            // localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("jwt", response.body.success.token);

            if (localStorage.getItem("jwt") != null) {
              this.$emit("loggedIn");
              this.$router.push("dashboard");
            }
          })
          .catch(function(error) {
            console.error(error);
          });
      }
    }
  }
};

// import "./../../static/js/jquery.backstretch.min.js";
// $.backstretch("./../static/img/login-bg.jpg", {
//   speed: 500
// });
</script>