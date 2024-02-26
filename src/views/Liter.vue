<template>
    <AddNewLiter :params="params"/>

    <div class="container-fluid p-md-5 p-3 mt-md-0 mt-5">
        <div class="d-flex align-items-center gap-3 mb-4">
            <GoBackBtn />

            <h1 class="text-white mb-0">ლიტერები</h1>
        </div>

        <button
            class="btn btn-primary btn-lg"
            @click="downloadCSV"
        >

        </button>

        <div class="row row-cols-md-3 row-cols-1 gy-4">
            <div class="col">
                <div
                    data-bs-toggle="modal"
                    data-bs-target="#addNewLiter"
                    class="add_new__btn rounded d-flex align-items-center justify-content-center p-3"
                >
                    <div class="d-flex align-items-center gap-2">
                        <img src="@/assets/images/plus-solid.svg" width="20" alt="">

                        <span>
                            დაამატე ახალი
                        </span>
                    </div>
                </div>
            </div>

            <div
                v-for="item in liters"
                :key="item.id"
                class="col"
            >
                <router-link
                    :to="'/forest-district/'+this.$route.params.id+'/forestry/'+this.$route.params.id+'/quarter/'+this.$route.params.id+'/macket/'+item.id"
                    class="item rounded d-flex align-items-center justify-content-center text-decoration-none text-white p-3"
                >
                    {{ item.title }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddNewLiter from "@/components/modals/add-new-modals/AddNewLiter.vue";
import GoBackBtn from "@/components/GoBackBtn.vue";

export default {
    name: "FMLiter",

    components: {
        GoBackBtn,
        AddNewLiter
    },

    data() {
        return {
            // liters: []
        }
    },

    computed: {
        ...mapGetters([
            'getForestAreaID',
            'getQuarterID',
            'getForestArea'
        ]),

        liters() {
            // let forestArea = JSON.parse(localStorage.getItem('forestArea')) || [];
            //
            // return forestArea
            //     .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
            //     .find(item => item.id === parseInt(this.params.quarterID)).quarters
            //     .find(item => item.id === parseInt(this.params.literID)).liters

            return this.getForestArea
                .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
                .find(item => item.id === parseInt(this.params.quarterID)).quarters
                .find(item => item.id === parseInt(this.params.literID)).liters
        },

        params() {
            return {
                forestAreaID: this.getForestAreaID,
                quarterID: this.getQuarterID,
                literID: this.$route.params.id
            }
        }
    },

    methods: {
        downloadCSV1() {
            // Sample data
            // const data = [
            //     { name: 'John', age: 30, city: 'New York' },
            //     { name: 'Jane', age: 25, city: 'Los Angeles' },
            //     { name: 'Doe', age: 40, city: 'Chicago' }
            // ];

            // Convert data to CSV format
            const csvContent = this.convertToCSV(this.liters);

            // Create a Blob object
            const blob = new Blob([csvContent], { type: 'text/csv' });

            // Create a temporary anchor element
            const a = document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = 'data.csv';

            // Append anchor to body and click it to trigger download
            document.body.appendChild(a);
            a.click();

            // Cleanup
            window.URL.revokeObjectURL(a.href);
            document.body.removeChild(a);
        },
        convertToCSV1(data) {
            const header = Object.keys(data[0]).join(',') + '\n';
            const rows = data.map(obj => Object.values(obj).join(','));
            return header + rows.join('\n');
        },



        downloadCSV() {
            // Sample data
            const data = [
                { name: 'John', age: 30, city: 'New York' },
                { name: 'Jane', age: 25, city: 'Los Angeles' },
                { name: 'Doe', age: 40, city: 'Chicago' }
            ];

            // Convert data to CSV format
            const csvContent = this.convertToCSV(data);

            // Create a temporary anchor element
            const a = document.createElement('a');
            a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
            a.download = 'data.csv';

            // Append anchor to body and click it to trigger download
            document.body.appendChild(a);
            a.click();

            // Cleanup
            document.body.removeChild(a);
        },
        convertToCSV(data) {
            const header = Object.keys(data[0]).join(',') + '\n';
            const rows = data.map(obj => Object.values(obj).join(','));
            return header + rows.join('\n');
        }
    },


    mounted() {
        this.$store.dispatch('setLiterID', this.$route.params.id)

        console.log(Array.isArray(this.liters), this.liters)

        // this.liters = this.getForestArea
        //     .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
        //     .find(item => item.id === parseInt(this.params.quarterID)).quarters
        //     .find(item => item.id === parseInt(this.params.literID)).liters
        // console.log(this.getForestArea)
    }
}
</script>