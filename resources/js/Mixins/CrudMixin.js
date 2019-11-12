export default {
    data(){
        return {
            formMode: null,
            itemId: null
        }
    },
    methods:{
        //These methods assume you have a component reference by modal for adding or editing
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
            
            let value = await this.showDeleteConfirmationNotification();
            if(value)
            {
              this.delete(id);
            }
          },
          async showDeleteConfirmationNotification(id) {
              //Should return a promise that resolves into a boolean value
            throw new Exception ('Method showDeleteConfirmationNotification not implemented');
          },
          async delete(id)
          {
              // Here you should perform your delete api calls
          },
    }
}