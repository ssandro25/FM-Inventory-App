<template>
    <AddNewLiter_WS :params="params"/>

    <div class="container-fluid p-lg-5 p-3">
        <div class="d-flex flex-md-row flex-column align-items-md-center gap-3 mb-4">
            <GoBackBtn />

            <h1 class="text-white pt-md-0 pt-5 mb-0">ლიტერები</h1>

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

        <div v-if="filteredLiterWS.length">
            <div class="row row-cols-md-3 row-cols-1 gy-4 items__list_row">
                <div class="col">
                    <div
                        data-bs-toggle="modal"
                        data-bs-target="#addNewLiter_WS"
                        class="add_new__btn rounded d-flex align-items-center justify-content-center p-3"
                    >
                        <div class="d-flex align-items-center gap-2">
                            <img src="../../assets/images/plus-solid.svg" width="20" alt="">

                            <span>
                            დაამატე ლიტერი
                        </span>
                        </div>
                    </div>
                </div>

                <div
                    v-for="item in filteredLiterWS"
                    :key="item.id"
                    class="col"
                >
                    <router-link
                        :to="/work-space/+this.getWorkSpaceID+/forestry/+this.getForestryWS_ID+/quarter/+this.$route.params.id+/liter/+item.id"
                        class="item rounded d-flex flex-column justify-content-between gap-2 fs-12 text-decoration-none text-white p-3"
                    >
                        <p class="fw-bold fs-1 text-success text-end mb-0">{{ item.title }}</p>

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

        <p v-else class="d-flex align-items-center justify-content-center gap-2 mb-0 text-center fs-4">
            ლიტერი არ მოიძებნა...

            <span
                v-if="!literWS.length"
                class="cursor-pointer text-success text-decoration-underline"
                data-bs-toggle="modal"
                data-bs-target="#addNewLiter_WS"
            >
                დაამატე ლიტერი
            </span>
        </p>
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

    data() {
        return {
            search: ''
        }
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
        },

        filteredLiterWS() {
            return [...this.literWS].filter(item => item.title.toLowerCase().includes(this.search.toLowerCase()))
        },
    },

    mounted() {
        this.$store.dispatch('setQuarterWS_ID', this.$route.params.id)
    }
}
</script>

<style scoped lang="scss">

</style>