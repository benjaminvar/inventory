<template>
<ValidationObserver tag="form" @submit.prevent v-slot="{ invalid }">
    <div class="form-group">
      <ValidationProvider rules="required" name="Name" v-slot="{ errors }">
        <label for>Name</label>
        <input type="text" class="form-control" v-model="provider.name" />
        <div class="text-danger mt-2"><span>{{ errors[0] }}</span></div>
      </ValidationProvider>
    </div>
    <div class="form-group">
      <ValidationProvider rules="required|email" name="Email" v-slot="{ errors }">
        <label for>Email</label>
        <input type="text" class="form-control" v-model="provider.email" />
        <div class="text-danger mt-2"><span>{{ errors[0] }}</span></div>
      </ValidationProvider>
    </div>
    <div class="form-group">
      <ValidationProvider :rules="{ regex , 'required': {}}" name="Phone Number" v-slot="{ errors }">
        <label for>Phone Number</label>
        <input type="text" class="form-control" v-model="provider.phone_number" />
        <div class="text-danger mt-2"><span>{{ errors[0] }}</span></div>
      </ValidationProvider>
    </div>
    <div class="form-group">
      <ValidationProvider rules="required" name="Address" v-slot="{ errors }">
        <label for>Address</label>
        <input type="text" class="form-control" v-model="provider.address" />
        <div class="text-danger mt-2"><span>{{ errors[0] }}</span></div>
      </ValidationProvider>
    </div>
    <div class="form-group">
      <button class="btn btn-success" @click="add" v-if="mode === 'add'" :disabled="invalid">Add New Provider</button>
      <button class="btn btn-success" @click="update" v-else :disabled="invalid">Update provider</button>
    </div>
  </ValidationObserver>
</template>
<script>
import { extend } from "vee-validate";
import { required, email, regex } from "vee-validate/dist/rules";
import Swal from 'sweetalert2'
const rules = {
  required,
  email,
  regex
}
//registering all rules
const rulesNames = Object.keys(rules);
for(let ruleName of rulesNames)
{
extend(ruleName, {
  ...rules[key]
});
}


export default {
  data() {
    return {
      provider: {
        name: "",
        email: "",
        phone_number: "",
        address: ""
      },
      regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
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
      let response = await this.$http.get(`ajax/providers/${this.itemId}`);
      this.provider = response.data;
    },
    async add() {
      await this.$http({
        method: "post",
        data: this.provider,
        url: "ajax/providers/add",
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
        data: this.provider,
        url: `ajax/providers/${this.itemId}/update`,
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