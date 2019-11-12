<template>
  <!-- Begin Page Content -->
  <div class="container-fluid" @update-data="search">
    <div class="row">
      <div class="col">
        <h1 class="h3 mb-4 text-gray-800">Categories</h1>
      </div>
      <div>
        <a class="btn btn-success" href="#" @click.prevent="showAddForm">
          <i class="fas fa-plus"></i> Add category
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h6 class="m-0 font-weight-bold">Categories list</h6>
          </div>
          <div class="card-body">
            <form class="mb-3">
              <div class="input-group">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Staer typing to searhc"
                  v-model="keyword"
                  @input="search"
                />
                <div class="input-group-append">
                  <button class="btn btn-primary">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
            <div class="table-responsive bg-white">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Actions</th>
                  </tr>
                  <tr v-for="category in categories.data" :key="category.id">
                    <td>{{category.id}}</td>
                    <td>{{category.name}}</td>
                    <td>
                      <a
                        href="#"
                        class="btn btn-primary btn-circle"
                        title="Edit"
                        @click.prevent="showEditForm(category.id)"
                      >
                        <i class="fas fa-edit"></i>
                      </a>
                      <a
                        href="#"
                        class="btn btn-danger btn-circle"
                        title="Delete"
                        @click.prevent="showDeleteConfirmation(category.id)"
                      >
                        <i class="fas fa-trash"></i>
                      </a>
                    </td>
                  </tr>
                </thead>
              </table>
            </div>
            <nav aria-label="Page navigation">
              <paginate
                v-model="page"
                :click-handler="loadData"
                :page-count="count"
                :prev-text="'Previous'"
                :next-text="'Next'"
                :container-class="'pagination justify-content-center'"
                :page-class="'page-item'"
                :page-link-class="'page-link'"
                :prev-class="'page-item'"
                :next-class="'page-item'"
                :prev-link-class="'page-link'"
                :next-link-class="'page-link'"
              ></paginate>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <b-modal ref="modal" title="BootstrapVue" hide-footer>
      <CategoryAddOrEdit :csrf="this.csrf" :mode="formMode" :parent="$refs.modal" :itemId="itemId"></CategoryAddOrEdit>
    </b-modal>
  </div>
  <!-- /.container-fluid -->
</template>
<script>
import CategoryAddOrEdit from "./CategoryAddOrEdit";
import queryString from "query-string";
import Swal from "sweetalert2";
export default {
  components: {
    CategoryAddOrEdit
  },
  data() {
    return {
      categories: {
        data: [],
        total: 0,
        per_page: 25
      },
      keyword: null,
      page: 1,
      formMode: null,
      itemId: null
    };
  },
  computed: {
    count() {
      return Math.ceil(this.categories.total / this.categories.per_page);
    }
  },
  props: {
    csrf: {
      type: String,
      default: null
    }
  },
  mounted() {
    this.search();
  },
  methods: {
    showAddForm() {
      this.formMode = "add";
      this.$refs.modal.show();
    },
    showEditForm(id) {
      this.itemId = id;
      this.formMode = "edit";
      this.$refs.modal.show();
    },
    async showDeleteConfirmation(id) {
      
      let response = await Swal.fire({
        text: 'Are you sure?',
        showCancelButton: true,
      });
      if(response.value)
      {
        this.delete(id);
      }
    },
    async delete(id)
    {
        await this.$http({
          method: 'delete',
          url: `ajax/categories/${id}/delete`,
          headers:{
            'X-CSRF-Token': this.csrf
          }
        });
        Swal.fire({
          position: 'top-end',
          text: 'Deleted sucessfully',
          icon: 'success',
          showConfirmButton: false
        })
    },
    async search() {
      this.page = 1;
      this.loadData();
    },
    async loadData() {
      let { keyword, page } = this;
      let response = await this.$http.get(
        "ajax/categories?" + queryString.stringify({ keyword, page })
      );
      this.categories = response.data;
    }
  }
};
</script>