<template>
  <!-- **********************************************************************************************************************************************************
      MAIN CONTENT
  ***********************************************************************************************************************************************************-->
  <div id="login-page">
    <div class="container">
      <form class="form-login">
        <h2 class="form-login-heading">register now</h2>
        <div class="login-wrap">
          <p>{{ errormsg }}</p>

          <input
            type="text"
            class="form-control"
            v-model="name"
            required
            placeholder="First Name"
            autofocus
          >
          <br>
          <input
            type="text"
            class="form-control"
            v-model="last_name"
            required
            placeholder="Last Name"
            autofocus
          >
          <br>
          <input
            type="text"
            class="form-control"
            v-model="username"
            required
            placeholder="Username"
            autofocus
          >
          <br>
          <input
            type="text"
            class="form-control"
            v-model="email"
            required
            placeholder="Email"
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
          <br>
          <input
            type="date"
            v-model="dob"
            required
            class="form-control"
            placeholder="Date of Birth (1990-12-14)"
          >
          <br>
          <select v-model="gender" required class="form-control">
            <option value="m" selected>Male</option>
            <option value="f">Female</option>
            <option value="n">Unspecified</option>
          </select>
          <br>
          <button class="btn btn-theme btn-block" type="submit" @click="handleSubmit">
            <i class="fa fa-user"></i> Register
          </button>
          <hr>
          <div class="registration">Already have an account?
            <br>
            <router-link to="/">Sign In</router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: '',
      last_name: '',
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      dob: '',
      gender: '',
      errormsg: ""
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (this.password.length > 0) {
        // console.log("click");
        this.$http.headers.common["Accept"] = "application/json";
        this.$http
          .post(this.$baseUrl + "register", {
            name: this.name,
            last_name: this.last_name,
            username: this.username,
            email: this.email,
            password: this.password,
            password_confirmation: this.password,
            date_of_birth: this.dob,
            gender: this.gender
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
            this.errormsg = error;
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