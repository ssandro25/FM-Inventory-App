<template>
    <div class="container-fluid p-3 h-100">
        <div class="row h-100">
            <div class="col-lg-9">
                <div class="d-flex align-items-md-center justify-content-md-between flex-md-row flex-column gap-3 mb-4 mt-md-0 mt-5">
                    <div class="d-flex align-items-center gap-3 ">
                        <GoBackBtn />

                        <h1 class="text-white pt-md-0 pt-5 mb-0 fs-4"> {{ macketTitle }}</h1>
<!--                        <h1 class="text-white pt-md-0 pt-5 mb-0 fs-4">{{ this.$route.params }}</h1>-->
                    </div>

<!--                    <div-->
<!--                        v-for="(item,index) in macket"-->
<!--                        :key="index"-->
<!--                    >-->
<!--                        <p class="mb-0">-->
<!--                            <strong>ექსპოზიცია:</strong> {{ item.exposition ? item.exposition : '-' }}-->
<!--                        </p>-->


<!--                        <p class="mb-0">-->
<!--                            <strong>ს.ზ.დ:</strong> {{ item.elevation ? item.elevation : '-' }}-->
<!--                        </p>-->

<!--                        <p class="mb-0">-->
<!--                            <strong>დაქანება:</strong> {{ item.inclination ? item.inclination : '-' }}-->
<!--                        </p>-->

<!--                        <p class="mb-0">-->
<!--                            <strong>K:</strong> 1-->
<!--                        </p>-->

<!--                    </div>-->
                </div>

                <div class="row gy-4">
                    <div class="col-md-6">
                        <Macket1_WS />
                    </div>

                    <div class="col-md-6">
                        <Macket2_WS />
                    </div>

                    <div class="col-md-4">
                        <Macket3_WS />
                    </div>

                    <div class="col-md-4">
                        <Macket4_WS />
                    </div>

                    <div class="col-md-4">
                        <Macket5_WS />
                    </div>

                    <div class="col-md-12">
                       <Macket10_17_WS />
                    </div>

                    <div class="col-md-6">
                        <Macket31_6_WS />
                    </div>

                    <div class="col-md-6">
                        <Macket32_7_WS />
                    </div>

                    <div class="col-12">
                        <Macket23_8_WS />
                    </div>
                </div>

                <div class="row row-cols-lg-6 row-cols-1 gy-4 mt-3 border-top">
                    <div class="col">
                        <Macket24_9_WS />
                    </div>

                    <div class="col">
                        <Macket35_10_WS />
                    </div>

                    <div class="col">
                        <Macket37_11_WS />
                    </div>

                    <div class="col">
                        <Macket22_18_WS />
                    </div>

                    <div class="col">
                       <Macket36_19_WS />
                    </div>

                    <div class="col">
                        <Macket28_12_WS/>
                    </div>

                    <div class="col">
                        <Macket40_13_WS />
                    </div>

                    <div class="col">
                        <Macket33_20_WS />
                    </div>

                    <div class="col">
                        <Macket42_14_WS />
                    </div>

                    <div class="col">
                        <Macket16_15_WS/>
                    </div>

                    <div class="col">
                        <button class="btn btn-light w-100 text-truncate">
                            17. სასოფლო-სამეურნეო სავარგულები
                        </button>
                    </div>

                    <div class="col">
                        <Macket14_16_WS />
                    </div>
                </div>
            </div>

<!--            <div class="col-lg-3 border-sm-top border-start border-start-sm-0 mt-lg-0 mt-4 pt-lg-0 pt-4">-->
<!--                <div class="d-flex flex-column justify-content-between gap-4 right__side_bar">-->
<!--                    <div>-->
<!--                        <p class="text-forest mb-0">-->
<!--                            <strong>მეტყევე : </strong>-->

<!--                            <router-link to="/options" class="text-forest">-->
<!--                                {{ foresterName ? foresterName : 'შეიყვანეთ სახელი' }}-->
<!--                            </router-link>-->

<!--                        </p>-->
<!--                    </div>-->

<!--                    <div v-if="getRightSideBar.length" class="d-flex flex-column gap-2">-->
<!--                        <p-->
<!--                            v-for="(item, index) in getRightSideBar"-->
<!--                            :key="index"-->
<!--                            class="fs-12  mb-0"-->
<!--                        >-->
<!--                            <span v-if="item" class="d-block border-bottom pb-2">-->
<!--                                {{ item }}-->
<!--                            </span>-->
<!--                        </p>-->

<!--                        <div class="d-flex gap-2 mt-3">-->
<!--                            <button-->
<!--                                type="button"-->
<!--                                class="btn btn-warning flex-grow-1"-->
<!--                                data-bs-toggle="modal"-->
<!--                                :data-bs-target="getMacketID"-->
<!--                            >-->
<!--                                რედაქტირება-->
<!--                            </button>-->


<!--                            <button-->
<!--                                type="button"-->
<!--                                class="btn btn-danger flex-grow-1"-->
<!--                            >-->
<!--                                გასუფთავება-->
<!--                            </button>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <div class="d-flex flex-column gap-3 w-100">-->
<!--                        <button-->
<!--                            :disabled="!dataCSV.length"-->
<!--                            class="btn btn-primary w-100"-->
<!--                            @click="downloadCSV"-->
<!--                        >-->
<!--                            გადმოწერა-->
<!--                        </button>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
        </div>

    </div>
</template>

<script>
import { mapGetters } from "vuex";

import GoBackBtn from "@/components/GoBackBtn.vue";
import Macket1_WS from "@/components/mackets-work-space/Macket1_WS.vue";
import Macket2_WS from "@/components/mackets-work-space/Macket2_WS.vue";
import Macket3_WS from "@/components/mackets-work-space/Macket3_WS.vue";
import Macket4_WS from "@/components/mackets-work-space/Macket4_WS.vue";
import Macket5_WS from "@/components/mackets-work-space/Macket5_WS.vue";
import Macket31_6_WS from "@/components/mackets-work-space/Macket31_6_WS.vue";
import Macket32_7_WS from "@/components/mackets-work-space/Macket32_7_WS.vue";
import Macket23_8_WS from "@/components/mackets-work-space/Macket23_8_WS.vue";
import Macket24_9_WS from "@/components/mackets-work-space/Macket24_9_WS.vue";
import Macket35_10_WS from "@/components/mackets-work-space/Macket35_10_WS.vue";
import Macket28_12_WS from "@/components/mackets-work-space/Macket28_12_WS.vue";
import Macket37_11_WS from "@/components/mackets-work-space/Macket37_11_WS.vue";
import Macket40_13_WS from "@/components/mackets-work-space/Macket40_13_WS.vue";
import Macket42_14_WS from "@/components/mackets-work-space/Macket42_14_WS.vue";
import Macket16_15_WS from "@/components/mackets-work-space/Macket16_15_WS.vue";
import Macket14_16_WS from "@/components/mackets-work-space/Macket14_16_WS.vue";
import Macket10_17_WS from "@/components/mackets-work-space/Macket10_17_WS.vue";
import Macket22_18_WS from "@/components/mackets-work-space/Macket22_18_WS.vue";
import Macket36_19_WS from "@/components/mackets-work-space/Macket36_19_WS.vue";
import Macket33_20_WS from "@/components/mackets-work-space/Macket33_20_WS.vue";

export default {
    name: "FMMackets",

    components: {
        Macket33_20_WS,
        Macket36_19_WS,
        Macket22_18_WS,
        Macket10_17_WS,
        Macket14_16_WS,
        Macket16_15_WS,
        Macket42_14_WS,
        Macket40_13_WS,
        Macket37_11_WS,
        Macket28_12_WS,
        Macket35_10_WS,
        Macket24_9_WS,
        Macket23_8_WS,
        Macket32_7_WS,
        Macket31_6_WS,
        Macket5_WS,
        Macket4_WS,
        Macket3_WS,
        Macket2_WS,
        Macket1_WS,
        GoBackBtn,

    },

    data() {
        return {
            foresterName: ''
        }
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getWorkSpaceID',
            'getForestryWS_ID',
            'getQuarterWS_ID',
            'getLiterWS_ID'
        ]),

        macketTitle() {
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
                .find(item => item.id === parseInt(this.getLiterWS_ID)).title

            let taxCardTitle = this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.getLiterWS_ID)).taxCardArr
                .find(item => item.id === parseInt(this.$route.params.id)).title

            let taxCardID = this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.getLiterWS_ID)).taxCardArr
                .find(item => item.id === parseInt(this.$route.params.id)).id

            return workSpace + ' / ' + forestry + ' / ' + quarter + ' / ' + liter + ' / ' + taxCardTitle + ' ' + taxCardID
        },

        // macket() {
        //     return this.getForestArea
        //         .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
        //         .find(item => item.id === parseInt(this.params.quarterID)).quarters
        //         .find(item => item.id === parseInt(this.params.literID)).liters
        //         .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[0] || []
        //
        // },

        // dataCSV() {
        //     return this.getForestArea
        //         .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
        //         .find(item => item.id === parseInt(this.params.quarterID)).quarters
        //         .find(item => item.id === parseInt(this.params.literID)).liters
        //         .find(item => item.id === parseInt(this.$route.params.id)).mackets || []
        // },

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
        downloadCSV() {
            // Flatten the dataArray into a single array
            const flattenedArray = this.dataCSV.reduce((acc, curr) => acc.concat(curr), []);

            // Convert flattened array to CSV format
            const csvContent = this.convertToCSV(flattenedArray);

            // Create a temporary anchor element
            const a = document.createElement('a');
            a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
            a.download = `${this.macketTitle}.csv`;

            // Append anchor to body and click it to trigger download
            document.body.appendChild(a);
            a.click();

            // Cleanup
            document.body.removeChild(a);
        },
        convertToCSV(dataArray) {
            const row = dataArray.map(obj => Object.values(obj).join(',')).join(',');
            return row;
        }
    },

    mounted() {
        this.foresterName = this.getForesterName
    }

}
</script>


<style scoped lang="scss">
.text-forest {
    color: rgb(57 145 112);
}
@media screen and (min-width: 992px){
    .right__side_bar {
        position: sticky;
        top: 16px;
        z-index: 1000;
        height: calc(100vh - 30px);
    }
}
@media screen and (max-width: 991px){
    .border-start-sm-0 {
        border-left: unset !important;
    }

    .border-sm-top {
        border-top: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
    }
}
</style>