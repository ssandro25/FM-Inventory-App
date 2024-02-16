<template>
    <AddNewQuarter :params="params"/>

    <div class="container-fluid p-5">
        <h1 class="text-white mb-3">კვარტალი</h1>

        <div class="row row-cols-md-3 row-cols-1 gy-4">
            <div class="col">
                <div
                    data-bs-toggle="modal"
                    data-bs-target="#addNewQuarter"
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
                v-for="item in quarters"
                :key="item.id"
                class="col"
            >
                <router-link
                    :to="'/forest-district/'+this.$route.params.id+'/forestry/'+this.$route.params.id+'/quarter/'+item.id"
                    class="item rounded d-flex align-items-center justify-content-center text-decoration-none text-white p-3"
                >
                    {{ item.title }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import AddNewQuarter from "@/components/modals/add-new-modals/AddNewQuarter.vue";

export default {
    name: "FMQuarter",

    components: {
        AddNewQuarter
    },

    data() {
        return {
            // quarters: [],
        }
    },

    // methods: {
    //     setQuarterID() {
    //         this.$store.dispatch('setQuarterID', this.$route.params.id)
    //     }
    // },

    computed: {
        ...mapGetters([
            'getForestAreaID',
            'getForestArea'
        ]),

        // quarters() {
        //     return this.getForestArea
        //         .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
        //         .find(item => item.id === parseInt(this.params.quarterID)).quarters
        // },

        quarters() {
            let forestArea = JSON.parse(localStorage.getItem('forestArea')) || [];

            let quarter = forestArea
                .find(item => item.id === parseInt(this.params.forestAreaID))?.forestry
                .find(item => item.id === parseInt(this.params.quarterID));

            return quarter?.quarters || [];
        },

        params() {
            return {
                forestAreaID: this.getForestAreaID,
                quarterID: this.$route.params.id
            }
        }
    },

    mounted() {
        this.$store.dispatch('setQuarterID', this.$route.params.id)

        // this.quarters = this.getForestArea
        //     .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
        //     .find(item => item.id === parseInt(this.params.quarterID)).quarters
    }
}
</script>

<style scoped lang="scss">
.add_new__btn {
    border: 1px dashed #cecece;
    background-color: rgba(68, 74, 90, 0.4);
}

.item {
    background-color: #444A5A;
}
</style>