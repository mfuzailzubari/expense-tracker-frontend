<template>
  <section id="container">
    <top-bar></top-bar>

    <side-bar></side-bar>

    <!--main content start-->
    <section id="main-content">
      <section class="wrapper site-min-height">
        <h3>
          <i class="fa fa-angle-right"></i> View Categories
        </h3>
        <div class="row mt">
          <div class="col-lg-12">
            <table class="table table-bordered table-striped table-condensed">
              <thead>
                <tr>
                  <th class="numeric">Name</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="category in categories" :key="category.id">
                  <td>{{ category.name }}</td>
</tr>
              </tbody>
            </table>
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
  name: "ViewCategory",
  data() {
    return {
      categories: [],
    };
  },

  created() {
    console.log(this.$baseUrl);
    this.fetchExpenses(this.$baseUrl);
  },
  methods: {
    fetchExpenses(page_url) {
      let vm = this;
      page_url = page_url + "categories";
      // this.$http.headers.common["Accept"] = "application/json";
      this.$http
        .get(page_url, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("jwt"),
            Accept: "application/json"
          }
        })
        // .then(res => res.json())
        .then(result => {
          this.categories = result.body;
          // vm.makePagination(res.meta, res.links);
        })
        .catch(err => console.log(err));
    }
    // makePagination(meta, links) {
    //   let pagination = {
    //     current_page: meta.current_page,
    //     last_page: meta.last_page,
    //     next_page_url: links.next,
    //     prev_page_url: links.prev
    //   };
    //   this.pagination = pagination;
    // },
    // deleteArticle(id) {
    //   if (confirm('Are You Sure?')) {
    //     fetch(`api/article/${id}`, {
    //       method: 'delete'
    //     })
    //       .then(res => res.json())
    //       .then(data => {
    //         alert('Article Removed');
    //         this.fetchExpenses();
    //       })
    //       .catch(err => console.log(err));
    //   }
    // },
    // addArticle() {
    //   if (this.edit === false) {
    //     // Add
    //     fetch('api/article', {
    //       method: 'post',
    //       body: JSON.stringify(this.article),
    //       headers: {
    //         'content-type': 'application/json'
    //       }
    //     })
    //       .then(res => res.json())
    //       .then(data => {
    //         this.clearForm();
    //         alert('Article Added');
    //         this.fetchExpenses();
    //       })
    //       .catch(err => console.log(err));
    //   } else {
    //     // Update
    //     fetch('api/article', {
    //       method: 'put',
    //       body: JSON.stringify(this.article),
    //       headers: {
    //         'content-type': 'application/json'
    //       }
    //     })
    //       .then(res => res.json())
    //       .then(data => {
    //         this.clearForm();
    //         alert('Article Updated');
    //         this.fetchExpenses();
    //       })
    //       .catch(err => console.log(err));
    //   }
    // },
    // editArticle(article) {
    //   this.edit = true;
    //   this.article.id = article.id;
    //   this.article.article_id = article.id;
    //   this.article.title = article.title;
    //   this.article.body = article.body;
    // },
    // clearForm() {
    //   this.edit = false;
    //   this.article.id = null;
    //   this.article.article_id = null;
    //   this.article.title = '';
    //   this.article.body = '';
    // }
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
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
