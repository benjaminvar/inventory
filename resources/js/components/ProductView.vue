<template>
  <!-- Begin Page Content -->
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <h1 class="h3 mb-4 text-gray-800">Products</h1>
      </div>
      <div>
        <a class="btn btn-success" href="#" @click.prevent="showAddForm">
          <i class="fas fa-plus"></i> Add Product
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h6 class="m-0 font-weight-bold">Products list</h6>
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
                    <th>Code</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Stock Min</th>
                    <th>Provider</th>
                    <th>Actions</th>
                  </tr>
                  <tr v-for="product in products.data" :key="product.id">
                    <td>{{product.id}}</td>
                    <td>{{product.code}}</td>
                    <td><img :src="`storage/${product.image}`" width="80" height="80"/></td>
                    <td>{{product.name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.stock}}</td>
                    <td>{{product.min_stock}}</td>
                    <td>{{getProvider(product.provider_id).name}}</td>
                    <td>
                      <a
                        href="#"
                        class="btn btn-primary btn-circle"
                        title="Edit"
                        @click.prevent="showEditForm(product.id)"
                      >
                        <i class="fas fa-edit"></i>
                      </a>
                      <a
                        href="#"
                        class="btn btn-danger btn-circle"
                        title="Delete"
                        @click.prevent="showDeleteConfirmation(product.id)"
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
    <b-modal ref="modal" title="BootstrapVue" size="lg" hide-footer>
      <ProductAddOrEdit :csrf="this.csrf" :mode="formMode" :parent="$refs.modal" :itemId="itemId"  @updatedata="search"></ProductAddOrEdit>
    </b-modal>
  </div>
  <!-- /.container-fluid -->
</template>
<script>
import ProductAddOrEdit from "./ProductAddOrEdit";
import queryString from "query-string";
import Swal from "sweetalert2";
import SearchableMixin from '../Mixins/SearchableMixin';
import CrudMixin from '../Mixins/CrudMixin';
export default {
  mixins: [SearchableMixin,CrudMixin],
  components: {
    ProductAddOrEdit
  },
  data() {
    return {
      products: {
        data: [],
        total: 0,
        per_page: 25
      },
      providers:[]
    };
  },
  computed: {
    count() {
      return Math.ceil(this.products.total / this.products.per_page);
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
          url: `ajax/products/${id}/delete`,
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
    getProvider(id)
    {
        return this.providers.filter(provider => provider.id === id)[0]
    },
    async loadData() {
      let { keyword, page } = this;
      let responseProducts = await this.$http.get(
        "ajax/products?" + queryString.stringify({ keyword, page })
      );
       let responseProviders = await this.$http.get(
        "ajax/providers/raw"
      );
      this.products = responseProducts.data;
      this.providers = responseProviders.data;
    }
  }
};
</script>