<template>
  <section id="container">
    <top-bar></top-bar>

    <side-bar></side-bar>

    <!--main content start-->
    <section id="main-content">
      <section class="wrapper site-min-height">
        <h3>
          <i class="fa fa-angle-right"></i> View Expenses
        </h3>
        <div class="row mt">
          <div class="col-lg-12">
            <table class="table table-bordered table-striped table-condensed">
              <thead>
                <tr>
                  <th class="numeric">Note</th>
                  <th class="numeric">Date</th>
                  <th class="numeric">Amount</th>
                  <th class="numeric">Category</th>
                  <th class="numeric">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="expense in expenses" :key="expense.id">
                  <td>{{ expense.note }}</td>
                  <td>{{ expense.date }}</td>
                  <td class="numeric">{{ expense.amount }}</td>
                  <td>{{ expense.category.name }}</td>
                  <td>
                    <button @click="edit(expense)">edit</button>
                  </td>
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
  name: "ViewExpense",
  data() {
    return {
      expenses: [],
      article: {
        id: "",
        title: "",
        body: ""
      },
      article_id: "",
      pagination: {},
    };
  },

  created() {
    console.log(this.$baseUrl);
    this.fetchExpenses(this.$baseUrl);
  },
  methods: {
    edit(expense) {
      // open the modal using the refs
      this.$router.push({
        name: "EditExpense",
        params: { data: expense }
      });
    },
    fetchExpenses(page_url) {
      let vm = this;
      page_url = page_url + "expenses";
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
          this.expenses = result.body;
          console.log(this.expenses);
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
