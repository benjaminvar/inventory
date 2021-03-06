<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
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
                  placeholder="Start typing to search..."
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
      <template v-slot:modal-title><span></span></template>
      <CategoryAddOrEdit :csrf="this.csrf" :mode="formMode" :parent="$refs.modal" :itemId="itemId"  @updatedata="search"></CategoryAddOrEdit>
    </b-modal>
  </div>
  <!-- /.container-fluid -->
</template>
<script>
import CategoryAddOrEdit from "./CategoryAddOrEdit";
import queryString from "query-string";
import Swal from "sweetalert2";
import SearchableMixin from '../Mixins/SearchableMixin';
import CrudMixin from '../Mixins/CrudMixin';
export default {
  mixins: [SearchableMixin,CrudMixin],
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
  methods: {
   
    async showDeleteConfirmationNotification(id)
    {
      let response = await Swal.fire({
        text: 'Are you sure?',
        showCancelButton: true,
      });
      return response.value;
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
        this.search();
        Swal.fire({
          position: 'top-end',
          text: 'Deleted sucessfully',
          icon: 'success',
          showConfirmButton: false
        })
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