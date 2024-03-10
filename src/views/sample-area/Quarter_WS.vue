<template>
    <AddNewLiter_WS :params="params"/>

    <div class="container-fluid p-md-5 p-3">
        <div class="d-flex align-items-center gap-3 mb-4">
            <GoBackBtn />

            <h1 class="text-white pt-md-0 pt-5 mb-0">ლიტერები</h1>
        </div>

        <div class="row row-cols-md-3 row-cols-1 gy-4">
            <div class="col">
                <div
                    data-bs-toggle="modal"
                    data-bs-target="#addNewLiter_WS"
                    class="add_new__btn rounded d-flex align-items-center justify-content-center p-3"
                >
                    <div class="d-flex align-items-center gap-2">
                        <img src="../../assets/images/plus-solid.svg" width="20" alt="">

                        <span>
                            დაამატე ახალი
                        </span>
                    </div>
                </div>
            </div>

            <div
                v-for="item in literWS"
                :key="item.id"
                class="col"
            >
                <router-link
                    :to="/work-space/+this.getWorkSpaceID+/forestry/+this.getForestryWS_ID+/quarter/+this.$route.params.id+/liter/+item.id"
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
import GoBackBtn from "@/components/GoBackBtn.vue";
import AddNewLiter_WS from "@/components/modals/add-new-modals/AddNewLiter_WS.vue";

export default {
    name: "Quarter_WS",

    components: {
        AddNewLiter_WS,
        GoBackBtn,
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getWorkSpaceID',
            'getForestryWS_ID'
        ]),

        literWS() {
            const workSpaceID = parseInt(this.params.workSpaceID);
            const forestryWS_ID = parseInt(this.params.forestryWS_ID);
            const quarterWS_ID = parseInt(this.params.quarterWS_ID);

            const workSpace = this.getWorkSpace.find(item => item.id === workSpaceID);
            const forestryWS = workSpace ? workSpace.forestryWS.find(item => item.id === forestryWS_ID) : [];
            const quarterWS = forestryWS ? forestryWS.quarterWS.find(item => item.id === quarterWS_ID) : [];
            const literWS = quarterWS ? quarterWS.literWS : [];

            return literWS ? literWS : [];
        },

        params() {
            return {
                workSpaceID: this.getWorkSpaceID,
                forestryWS_ID: this.getForestryWS_ID,
                quarterWS_ID: this.$route.params.id
            }
        }
    },

    mounted() {
        this.$store.dispatch('setQuarterWS_ID', this.$route.params.id)
    }
}
</script>

<style scoped lang="scss">

</style>