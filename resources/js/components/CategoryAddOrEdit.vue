<template>
  <form action @submit.prevent>
    <div class="form-group">
      <label for>Name</label>
      <input type="text" class="form-control" v-model="category.name" />
    </div>
    <div class="form-group">
      <button class="btn btn-success" @click="add" v-if="mode === 'add'">Add New Category</button>
      <button class="btn btn-success" @click="update" v-else>Update category</button>
    </div>
  </form>
</template>
<script>
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
      this.$root.$emit("update-data");
      this.parent.hide();
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
      this.$root.$emit("update-data");
      this.parent.hide();
    }
  }
};
</script>