<template>
    <AddNewQuarter :params="params"/>

    <div class="container-fluid p-5">

        <div class="d-flex align-items-center gap-3 mb-4">
            <GoBackBtn />

            <h1 class="text-white mb-0">კვარტალები</h1>
        </div>


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
import GoBackBtn from "@/components/GoBackBtn.vue";

export default {
    name: "FMQuarter",

    components: {
        GoBackBtn,
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

        quarters1() {
            return this.getForestArea
                .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
                .find(item => item.id === parseInt(this.params.quarterID)).quarters
        },

        quarters() {
            const forestAreaID = parseInt(this.params.forestAreaID);
            const quarterID = parseInt(this.params.quarterID);

            const forestArea = this.getForestArea.find(item => item.id === forestAreaID);
            const forestry = forestArea ? forestArea.forestry : [];
            const quarter = forestry.find(item => item.id === quarterID);

            return quarter ? quarter.quarters : [];
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
    }
}
</script>
