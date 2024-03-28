<template>
    <AddNewQuarter_WS :params="params"/>

    <div class="container-fluid p-3 h-100">
        <div class="row gy-4 h-100">
            <div class="col-lg-9">
                <div class="d-flex align-items-center gap-3 mb-4">
                    <GoBackBtn />

                    <h1 class="text-white pt-md-0 pt-5 mb-0">კვარტლები</h1>
                </div>

                <div class="row row-cols-md-3 row-cols-1 gy-4 items__list_row">
                    <div class="col">
                        <div
                            data-bs-toggle="modal"
                            data-bs-target="#addNewQuarter_WS"
                            class="add_new__btn rounded d-flex align-items-center justify-content-center p-3"
                        >
                            <div class="d-flex align-items-center gap-2">
                                <img src="../../assets/images/plus-solid.svg" width="20" alt="">

                                <span>
                            დაამატე კვარტალი
                        </span>
                            </div>
                        </div>
                    </div>

                    <div
                        v-for="item in quarterWS"
                        :key="item.id"
                        class="col"
                    >
                        <router-link
                            :to="/work-space/+this.getWorkSpaceID+/forestry/+this.$route.params.id+/quarter/+item.id"
                            class="item rounded d-flex flex-column justify-content-between gap-2 fs-12 text-decoration-none text-white p-3"
                        >
                            <p class="mb-0">{{ item.title }}</p>

                            <p class="mb-0">
                                ლიტერები:
                            </p>

                            <p class="mb-0">
                                სანიმუშო ფართობები:
                            </p>

                            <p class="mb-0">
                                სატაქსაციო ბარათები:
                            </p>
                        </router-link>
                    </div>
                </div>
            </div>

            <div class="col-lg-3 border-sm-top border-start border-start-sm-0">
                <Forestry_WS_SideBar />
            </div>
        </div>

    </div>
</template>

<script>
import {mapGetters} from "vuex";
import GoBackBtn from "@/components/GoBackBtn.vue";
import AddNewQuarter_WS from "@/components/modals/add-new-modals/AddNewQuarter_WS.vue";
import Forestry_WS_SideBar from "@/components/right_side_bars/Forestry_WS_SideBar.vue";

export default {
    name: "Forestry_WS",

    components: {
        Forestry_WS_SideBar,
        AddNewQuarter_WS,
        GoBackBtn,
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getWorkSpaceID'
        ]),

        quarterWS() {
            const workSpaceID = parseInt(this.params.workSpaceID);
            const forestryWS_ID = parseInt(this.params.forestryWS_ID);

            const workSpace = this.getWorkSpace.find(item => item.id === workSpaceID);
            const forestryWS = workSpace ? workSpace.forestryWS.find(item => item.id === forestryWS_ID) : [];
            const quarterWS = forestryWS ? forestryWS.quarterWS : [];

            return quarterWS ? quarterWS : [];
        },

        params() {
            return {
                workSpaceID: this.getWorkSpaceID,
                forestryWS_ID: this.$route.params.id
            }
        }
    },

    mounted() {
        this.$store.dispatch('setForestryWS_ID', this.$route.params.id)
    }
}
</script>

<style scoped lang="scss">

</style>