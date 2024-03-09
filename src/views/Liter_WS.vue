<template>
    <AddNewLiter_WS :params="params"/>

    <div class="container-fluid p-md-5 p-3">
        <div class="d-flex align-items-center gap-3 mb-4">
            <GoBackBtn/>

            <h1 class="text-white pt-md-0 pt-5 mb-0 fs-4">
                {{ literWSTitle }}
            </h1>
        </div>

        <div class="row">
            <div class="col-lg-6">
                <p class="fs-3 mb-0">
                    ტაქსაციის ბარათი
                </p>


                <div
                    data-bs-toggle="modal"
                    data-bs-target="#addNewLiter_WS"
                    class="add_new__btn rounded d-flex align-items-center justify-content-center p-3 mt-4"
                >
                    <div class="d-flex align-items-center gap-2">
                        <img src="@/assets/images/plus-solid.svg" width="20" alt="">

                        <span>
                            დაამატე ახალი
                        </span>
                    </div>
                </div>

                <div
                    v-for="item in taxCard"
                    :key="item.id"
                    class="mt-4"
                >
                    <router-link
                        to="/"
                        class="item rounded d-flex align-items-center justify-content-center text-decoration-none text-white p-3"
                    >
                        {{ item.title }} {{ item.id }}
                    </router-link>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="d-flex align-items-center gap-3">
                    <div class="form-check form-switch mb-0">
                        <input
                            v-model="sampleAreaCheck"
                            class="form-check-input"
                            type="checkbox"
                            role="switch"
                        >
                    </div>

                    <p class="fs-3 mb-0">
                        სანიმუშო ფართობი
                    </p>
                </div>

                <button
                    :disabled="!sampleAreaCheck"
                    class="add_new__btn w-100 text-white rounded d-flex align-items-center justify-content-center p-3 mt-4"
                    @click="addNewSampleArea()"
                >
                    <span class="d-flex align-items-center gap-2">
                        <img src="@/assets/images/plus-solid.svg" width="20" alt="">

                        <span>
                            დაამატე ახალი
                        </span>
                    </span>
                </button>

                <div
                    v-for="item in sampleAreas"
                    :key="item.id"
                    class="mt-4"
                >
                    <router-link
                        to="/"
                        class="item rounded d-flex align-items-center justify-content-center text-decoration-none text-white p-3"
                    >
                        {{ item.title }} {{ item.id }}
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import GoBackBtn from "@/components/GoBackBtn.vue";
import AddNewLiter_WS from "@/components/modals/add-new-modals/AddNewLiter_WS.vue";

export default {
    name: "Liter_WS",

    components: {
        AddNewLiter_WS,
        GoBackBtn,
    },

    data() {
        return {
            sampleAreaCheck: false,
            arr: []
        }
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getWorkSpaceID',
            'getForestryWS_ID',
            'getQuarterWS_ID'
        ]),

        literWSTitle() {
            let workSpace = this.getWorkSpace.find(item => item.id === parseInt(this.getWorkSpaceID)).title

            let forestry = this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).title

            let quarter = this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).title

            let liter = this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.$route.params.id)).title

            return workSpace + ' / ' + forestry + ' / ' + quarter + ' / ' + liter
        },

        sampleAreas() {
            const workSpaceID = parseInt(this.params.workSpaceID);
            const forestryWS_ID = parseInt(this.params.forestryWS_ID);
            const quarterWS_ID = parseInt(this.params.quarterWS_ID);
            const literWS_ID = parseInt(this.params.literWS_ID);

            const workSpace = this.getWorkSpace.find(item => item.id === workSpaceID);
            const forestryWS = workSpace ? workSpace.forestryWS.find(item => item.id === forestryWS_ID) : [];
            const quarterWS = forestryWS ? forestryWS.quarterWS.find(item => item.id === quarterWS_ID) : [];
            const literWS = quarterWS ? quarterWS.literWS.find(item => item.id === literWS_ID) : [];
            const sampleAreas = literWS ? literWS.sampleAreaArr : [];

            return sampleAreas ? sampleAreas : [];
        },

        taxCard() {
            const workSpaceID = parseInt(this.params.workSpaceID);
            const forestryWS_ID = parseInt(this.params.forestryWS_ID);
            const quarterWS_ID = parseInt(this.params.quarterWS_ID);
            const literWS_ID = parseInt(this.params.literWS_ID);

            const workSpace = this.getWorkSpace.find(item => item.id === workSpaceID);
            const forestryWS = workSpace ? workSpace.forestryWS.find(item => item.id === forestryWS_ID) : [];
            const quarterWS = forestryWS ? forestryWS.quarterWS.find(item => item.id === quarterWS_ID) : [];
            const literWS = quarterWS ? quarterWS.literWS.find(item => item.id === literWS_ID) : [];
            const taxCard = literWS ? literWS.taxCardArr : [];

            return taxCard ? taxCard : [];
        },

        params() {
            return {
                workSpaceID: this.getWorkSpaceID,
                forestryWS_ID: this.getForestryWS_ID,
                quarterWS_ID: this.getQuarterWS_ID,
                literWS_ID: this.$route.params.id,
            }
        }
    },

    methods: {
        addNewSampleArea() {
            this.arr = this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.$route.params.id))

            let sampleArea_Obj = {
                id: this.arr.sampleAreaArr && this.arr.sampleAreaArr.length ? this.arr.sampleAreaArr.length + 1 : 1,
                title: 'სანიმუშო ფართობი #',
            }

            if (!this.arr.sampleAreaArr) {
                this.arr.sampleAreaArr = [sampleArea_Obj];
            } else {
                this.arr.sampleAreaArr.push(sampleArea_Obj)
            }

            let taxCard_Obj = {
                id: this.arr.taxCardArr && this.arr.taxCardArr.length ? this.arr.taxCardArr.length + 1 : 1,
                title: 'ტაქსაციის ბარათი #',
            }

            if (!this.arr.taxCardArr) {
                this.arr.taxCardArr = [taxCard_Obj];
            } else {
                this.arr.taxCardArr.push(taxCard_Obj)
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)
        }
    },
}
</script>

<style scoped lang="scss">
button:disabled {
   opacity: 0.4;
    cursor: unset !important;
}
</style>