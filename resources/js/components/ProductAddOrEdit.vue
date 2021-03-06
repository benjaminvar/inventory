<template>
    <ValidationObserver tag="form" @submit.prevent v-slot="{ invalid }">
        <div class="row">
            <div class="col-md-7">
                <div class="form-group">
                    <ValidationProvider
                        rules="required"
                        name="Code"
                        v-slot="{ errors }"
                    >
                        <label for>Code</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="product.code"
                        />
                        <div class="text-danger mt-2">
                            <span>{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>
                </div>
                <div class="form-group">
                    <ValidationProvider
                        rules="required"
                        name="Name"
                        v-slot="{ errors }"
                    >
                        <label for>Name</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="product.name"
                        />
                        <div class="text-danger mt-2">
                            <span>{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>
                </div>
                <div class="form-group">
                    <ValidationProvider
                        rules="required"
                        name="Price"
                        v-slot="{ errors }"
                    >
                        <label for>Price</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="product.price"
                        />
                        <div class="text-danger mt-2">
                            <span>{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>
                </div>
                <div class="form-group">
                    <ValidationProvider
                        rules="required"
                        name="Stock"
                        v-slot="{ errors }"
                    >
                        <label for>Stock</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="product.stock"
                        />
                        <div class="text-danger mt-2">
                            <span>{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>
                </div>
                <div class="form-group">
                    <ValidationProvider
                        rules="required"
                        name="Min Stock"
                        v-slot="{ errors }"
                    >
                        <label for>Min. Stock</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="product.min_stock"
                        />
                        <div class="text-danger mt-2">
                            <span>{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>
                </div>
                <div class="form-group">
                    <ValidationProvider
                        rules="required"
                        name="Provider"
                        v-slot="{ errors }"
                    >
                        <label for>Provider</label>
                        <select
                            class="form-control"
                            v-model="product.provider_id"
                        >
                            <option :value="null">Select the provider</option>
                            <option
                                v-for="provider in providers"
                                :key="provider.id"
                                :value="provider.id"
                                >{{ provider.name }}</option
                            >
                        </select>

                        <div class="text-danger mt-2">
                            <span>{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>
                </div>
               
            </div>
            <div class="col-md-5">
                <div class="form-group">
                    <label >Barcode</label>
                    <barcode :value="product.code"><h6 class="text-center">Here will appear the barcode.</h6></barcode>
                </div>
                
                <div class="form-group">
                    <ValidationProvider
                        rules="required"
                        name="Image"
                        v-slot="{ errors }"
                    >
                        <label for>Image</label>
                        <input
                            type="file"
                            class="form-control"
                            @change="
                                [assignFile($event), generatePreview($event)]
                            "
                        />
                        <div class="text-danger mt-2">
                            <span>{{ errors[0] }}</span>
                        </div>
                    </ValidationProvider>
                </div>
                <div class="form-group" v-if="imagePreview">
                    <img :src="imagePreview" alt="" width="100%" />
                </div>
            </div>
            <div class="col-sm-12">
                <div class="form-group">
                    <button
                        class="btn btn-success"
                        @click="add"
                        v-if="mode === 'add'"
                        :disabled="invalid"
                    >
                        Add New Product
                    </button>
                    <button
                        class="btn btn-success"
                        @click="update"
                        v-else
                        :disabled="invalid"
                    >
                        Update Product
                    </button>
                </div>
            </div>
        </div>
    </ValidationObserver>
</template>
<script>
import { extend } from "vee-validate";
import { required, email, regex } from "vee-validate/dist/rules";
import Swal from "sweetalert2";
const rules = {
    required,
    email,
    regex
};
//registering all rules
const rulesNames = Object.keys(rules);
for (let ruleName of rulesNames) {
    extend(ruleName, {
        ...rules[ruleName]
    });
}

export default {
    data() {
        return {
            product: {
                code: "",
                name: "",
                price: 0,
                stock: 0,
                min_stock: 0,
                provider_id: null,
                image: null
            },
            providers: [],
            imagePreview: null,
            imageFile: null
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
    computed: {
        imagePath() {
            return `storage/${this.product.image}`;
        }
    },
    async mounted() {
        if (this.mode == "edit") {
            await this.loadData();
            this.imagePreview = this.imagePath;
        }
        await this.loadProviders();
    },
    methods: {
        async loadData() {
            let responseProduct = await this.$http.get(
                `ajax/products/${this.itemId}`
            );
            this.product = responseProduct.data;
        },
        async loadProviders() {
            let responseProviders = await this.$http.get(`ajax/providers/raw`);
            this.providers = responseProviders.data;
        },
        generatePreview($event) {
            if ($event.target.files[0]) {
                this.imagePreview = window.URL.createObjectURL(
                    $event.target.files[0]
                );
            } else {
                //Restore original image on no file on edit mode
                if (this.mode === "edit") {
                    this.imagePreview = this.imagePath;
                } else {
                    this.imagePreview = null;
                }
            }
        },
        assignFile($event) {
            if ($event.target.files[0]) {
                this.imageFile = $event.target.files[0];
            } else {
                this.imageFile = null;
            }
        },
        async add() {
            let image = await this.UploadImage();
            this.product.image = image;
            await this.$http({
                method: "post",
                data: this.product,
                url: "ajax/products/add",
                headers: {
                    "X-CSRF-TOKEN": this.csrf
                }
            });
            this.$emit("updatedata");
            this.parent.hide();
            this.showNotification("Added Successfully.");
        },
        async update() {
            if (this.imageFile !== null) {
                let image = await this.UploadImage();
                this.product.image = image;
            }
            await this.$http({
                method: "put",
                data: this.product,
                url: `ajax/products/${this.itemId}/update`,
                headers: {
                    "X-CSRF-TOKEN": this.csrf
                }
            });
            this.$emit("updatedata");
            this.parent.hide();
            this.showNotification("Updated Successfully.");
        },
        async UploadImage() {
            let image = new FormData();
            image.append("image", this.imageFile);
            let response = await this.$http({
                method: "post",
                data: image,
                url: "ajax/products/image/add",
                headers: {
                    "X-CSRF-TOKEN": this.csrf
                }
            });
            return response.data;
        },
        showNotification(text = "", icon = "success") {
            Swal.fire({
                position: "top-end",
                text: text,
                icon: icon,
                showConfirmButton: false
            });
        }
    }
};
</script>
