export default {
    data() {
        return {
            keyword: null,
            page: 1,
        }
    },
    mounted() {
        this.search();
    },
    methods: {
        async search() {
            this.page = 1;
            this.loadData();
        },
        async loadData() {
            //Code for loading data
        }
    }

}