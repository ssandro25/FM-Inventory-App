<template>
    <AddNewQuarter_WS :params="params"/>

    <div class="container-fluid p-lg-5 p-3">
        <div class="d-flex flex-md-row flex-column align-items-md-center gap-3 mb-4">
            <GoBackBtn />

            <h1 class="text-white pt-md-0 pt-5 mb-0">კვარტლები</h1>

            <div class="flex-grow-1 input-group">
                <span class="input-group-text bg-white">
                    <img src="@/assets/images/search-icon.svg" width="14" alt="">
                </span>

                <input
                    v-model="search"
                    type="search"
                    class="form-control"
                    placeholder="შეიყვანეთ კვარტლის სახელი"
                >
            </div>
        </div>

        <div v-if="filteredQuarterWS.length">
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
                    v-for="item in filteredQuarterWS"
                    :key="item.id"
                    class="col"
                >
                    <router-link
                        :to="/work-space/+this.getWorkSpaceID+/forestry/+this.$route.params.id+/quarter/+item.id"
                        class="item rounded d-flex flex-column justify-content-between gap-2 fs-12 text-decoration-none text-white p-3 position-relative"
                    >
                        <p class="fw-bold fs-1 text-success text-end mb-0">{{ item.title }}</p>

                        <p class="mb-0">
                            ლიტერები:
                        </p>

                        <!--                            <button -->
                        <!--                                type="button"-->
                        <!--                                class="btn p-0 border-0 position-absolute top-0 end-0 lh-1 m-2"-->
                        <!--                                @click.prevent="showQuarterInfo(item.id)"-->
                        <!--                            >-->
                        <!--                                <img src="@/assets/images/circle-info-solid.svg" width="15" alt="">-->
                        <!--                            </button>-->
                    </router-link>
                </div>
            </div>
        </div>

        <p v-else class="mb-0 text-center fs-4">
            კვარტალი არ მოიძებნა...
        </p>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import GoBackBtn from "@/components/GoBackBtn.vue";
import AddNewQuarter_WS from "@/components/modals/add-new-modals/AddNewQuarter_WS.vue";

export default {
    name: "Forestry_WS",

    components: {
        AddNewQuarter_WS,
        GoBackBtn,
    },

    data() {
        return {
            quarter: '',
            search: ''
        }
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
        },

        filteredQuarterWS() {
            return [...this.quarterWS].filter(item => item.title.toLowerCase().includes(this.search.toLowerCase()))
        },
    },

    // methods: {
    //     showQuarterInfo(id) {
    //         this.quarter = this.quarterWS.find(item => item.id === id).literWS
    //     }
    // },

    mounted() {
        this.$store.dispatch('setForestryWS_ID', this.$route.params.id)
    }
}
</script>

<style scoped lang="scss">

</style>