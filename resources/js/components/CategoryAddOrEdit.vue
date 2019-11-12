<template>
<ValidationObserver tag="form" @submit.prevent v-slot="{ invalid }">
    <div class="form-group">
      <ValidationProvider rules="required" name="Name" v-slot="{ errors }">
        <label for>Name</label>
        <input type="text" class="form-control" v-model="category.name" />
        <div class="text-danger mt-2"><span>{{ errors[0] }}</span></div>
      </ValidationProvider>
    </div>
    <div class="form-group">
      <button class="btn btn-success" @click="add" v-if="mode === 'add'" :disabled="invalid">Add New Category</button>
      <button class="btn btn-success" @click="update" v-else :disabled="invalid">Update category</button>
    </div>
  </ValidationObserver>
</template>
<script>
import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
import Swal from 'sweetalert2'
extend("required", {
  ...required
});
export default {
  data() {
    return {
      category: {
        name: ""
      }
    };
  },
  props: {
    itemId: {
      type: Number,
      default: null
    },
    csrf: {
      type: String,
      default: null
    },
    mode: {
      type: String,
      default: "add"
    },
    parent: {
      type: Object,
      default: null
    }
  },
  mounted() {
    if (this.mode == "edit") {
      this.loadData();
    }
  },
  methods: {
    async loadData() {
      let response = await this.$http.get(`ajax/categories/${this.itemId}`);
      this.category = response.data;
    },
    async add() {
      await this.$http({
        method: "post",
        data: this.category,
        url: "ajax/categories/add",
        headers: {
          "X-CSRF-TOKEN": this.csrf
        }
      });
      this.$emit("updatedata");
      this.parent.hide();
      this.showNotification('Added Successfully.');
    },
    async update() {
      await this.$http({
        method: "put",
        data: this.category,
        url: `ajax/categories/${this.itemId}/update`,
        headers: {
          "X-CSRF-TOKEN": this.csrf
        }
      });
      this.$emit("updatedata");
      this.parent.hide();
      this.showNotification('Updated Successfully.');
    },
    showNotification(text='',icon = 'success')
    {
      Swal.fire({
          position: 'top-end',
          text: text,
          icon: icon,
          showConfirmButton: false
        });
    }
  }
};
</script>