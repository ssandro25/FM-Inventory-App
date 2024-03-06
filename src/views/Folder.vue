<template>
    <AddNewForestryWS :params="params"/>

    <div class="container-fluid p-md-5 p-3">
        <div class="d-flex align-items-center gap-3 mb-4">
            <GoBackBtn />

            <h1 class="text-white mb-0">საქაღალდეები</h1>
        </div>

        <div class="row row-cols-md-3 row-cols-1 gy-4">
            <div class="col">
                <div
                    data-bs-toggle="modal"
                    data-bs-target="#addNewForestryWS"
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
                v-for="item in forestryWS"
                :key="item.id"
                class="col"
            >
                <router-link
                    :to="/folder/+item.id"
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
import AddNewForestryWS from "@/components/modals/add-new-modals/AddNewForestryWS.vue";
import GoBackBtn from "@/components/GoBackBtn.vue";

export default {
    name: "FMFolder",

    components: {
        GoBackBtn,
        AddNewForestryWS
    },

    computed: {
        ...mapGetters([
            'getWorkSpace'
        ]),

        forestryWS() {
            const workSpaceID = parseInt(this.params.workSpaceID);

            const workSpace = this.getWorkSpace.find(item => item.id === workSpaceID);
            const forestryWS = workSpace ? workSpace.forestryWS : [];


            return forestryWS ? forestryWS : [];

            // return this.getWorkSpace.find(item => item.id === this.$route.params.id)
        },

        params() {
            return {
                workSpaceID: this.$route.params.id
            }
        }
    },

    mounted() {
        console.log(this.forestryWS)
        // this.$store.dispatch('setWorkSpaceID', this.$route.params.id)
    }
}
</script>

<style scoped lang="scss">

</style>