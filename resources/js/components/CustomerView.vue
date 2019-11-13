<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h1 class="h3 mb-4 text-gray-800">Customers</h1>
      </div>
      <div>
        <a class="btn btn-success" href="#" @click.prevent="showAddForm">
          <i class="fas fa-plus"></i> Add Customer
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h6 class="m-0 font-weight-bold">Customers list</h6>
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
                    <th>Last Name</th>
                    <th>Document Id</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Actions</th>
                  </tr>
                  <tr v-for="customer in customers.data" :key="customer.id">
                    <td>{{customer.id}}</td>
                    <td>{{customer.name}}</td>
                    <td>{{customer.last_name}}</td>
                    <td>{{customer.doc_id}}</td>
                    <td>{{customer.phone_number}}</td>
                    <td>{{customer.address}}</td>
                    <td>
                      <a
                        href="#"
                        class="btn btn-primary btn-circle"
                        title="Edit"
                        @click.prevent="showEditForm(customer.id)"
                      >
                        <i class="fas fa-edit"></i>
                      </a>
                      <a
                        href="#"
                        class="btn btn-danger btn-circle"
                        title="Delete"
                        @click.prevent="showDeleteConfirmation(customer.id)"
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
      <CustomerAddOrEdit :csrf="this.csrf" :mode="formMode" :parent="$refs.modal" :itemId="itemId"  @updatedata="search"></CustomerAddOrEdit>
    </b-modal>
  </div>
  <!-- /.container-fluid -->
</template>
<script>
import CustomerAddOrEdit from "./CustomerAddOrEdit";
import queryString from "query-string";
import Swal from "sweetalert2";
import SearchableMixin from '../Mixins/SearchableMixin';
import CrudMixin from '../Mixins/CrudMixin';
export default {
  mixins: [SearchableMixin,CrudMixin],
  components: {
    CustomerAddOrEdit
  },
  data() {
    return {
      customers: {
        data: [],
        total: 0,
        per_page: 25
      },
    };
  },
  computed: {
    count() {
      return Math.ceil(this.customers.total / this.customers.per_page);
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
          url: `ajax/customers/${id}/delete`,
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
        "ajax/customers?" + queryString.stringify({ keyword, page })
      );
      this.customers = response.data;
    }
  }
};
</script>