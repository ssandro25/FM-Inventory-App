<template>
    <div class="container-fluid p-3 h-100">
        <div class="row h-100">
            <div class="col-lg-9">
                <div class="d-flex align-items-md-center justify-content-md-between flex-md-row flex-column gap-3 mb-4 mt-md-0 mt-5">
                    <div class="d-flex align-items-center gap-3 ">
                        <GoBackBtn />

                        <h1 class="text-white pt-md-0 pt-5 mb-0 fs-4"> {{ macketTitle }}</h1>
                    </div>

                    <div
                        v-for="(item,index) in macket"
                        :key="index"
                    >
                        <p class="mb-0">
                            <strong>ექსპოზიცია:</strong> {{ item.exposition ? item.exposition : '-' }}
                        </p>


                        <p class="mb-0">
                            <strong>ს.ზ.დ:</strong> {{ item.elevation ? item.elevation : '-' }}
                        </p>

                        <p class="mb-0">
                            <strong>დაქანება:</strong> {{ item.inclination ? item.inclination : '-' }}
                        </p>

                        <p class="mb-0">
                            <strong>K:</strong> 1
                        </p>

                    </div>
                </div>

                <div class="row gy-4">
                    <div class="col-md-6">
                        <Macket1 />
                    </div>

                    <div class="col-md-6">
                        <Macket2 />
                    </div>

                    <div class="col-md-4">
                        <Macket3 />
                    </div>

                    <div class="col-md-4">
                        <Macket4 />
                    </div>

                    <div class="col-md-4">
                        <Macket5 />
                    </div>

                    <div class="col-md-12">
                        <button class="btn btn-light w-100">
                            10. ტაქსაციური დახასიათება
                        </button>
                    </div>

                    <div class="col-md-6">
                        <Macket31_6 />
                    </div>

                    <div class="col-md-6">
                        <Macket32_7 />
                    </div>

                    <div class="col-12">
                        <Macket23_8 />
                    </div>
                </div>

                <div class="row row-cols-lg-6 row-cols-1 gy-4 mt-3 border-top">
                    <div class="col">
                        <Macket24_9 />
                    </div>

                    <div class="col">
                        <Macket35_10 />
                    </div>

                    <div class="col">
                        <Macket37_11 />
                    </div>

                    <div class="col">
                        <button class="btn btn-light w-100 text-truncate">
                            22. ბაღები,პლანტაციები
                        </button>
                    </div>

                    <div class="col">
                        <button class="btn btn-light w-100 text-truncate">
                            36. წყლები
                        </button>
                    </div>

                    <div class="col">
                        <Macket28_12 />
                    </div>

                    <div class="col">
                        <Macket40_13 />
                    </div>

                    <div class="col">
                        <button class="btn btn-light w-100 text-truncate">
                            33. ბიომრავალფეროვნება
                        </button>
                    </div>

                    <div class="col">
                        <Macket42_14 />
                    </div>

                    <div class="col">
                        <Macket16_15 />
                    </div>

                    <div class="col">
                        <button class="btn btn-light w-100 text-truncate">
                            17. სასოფლო-სამეურნეო სავარგულები
                        </button>
                    </div>

                    <div class="col">
                        <Macket14_16 />
                    </div>
                </div>
            </div>
            
            <div class="col-lg-3 border-sm-top border-start border-start-sm-0 mt-lg-0 mt-4 pt-lg-0 pt-4">
                <div class="d-flex flex-column justify-content-between gap-4 right__side_bar">
                    <div>
                        <p class="text-forest mb-0">
                            <strong>მეტყევე : </strong>

                            <router-link to="/options" class="text-forest">
                                {{ foresterName ? foresterName : 'შეიყვანეთ სახელი' }}
                            </router-link>

                        </p>
                    </div>

                    <div v-if="getRightSideBar.length" class="d-flex flex-column gap-2">
                        <p
                            v-for="(item, index) in getRightSideBar"
                            :key="index"
                            class="fs-12  mb-0"
                        >
                            <span v-if="item" class="d-block border-bottom pb-2">
                                {{ item }}
                            </span>
                        </p>

                        <div class="d-flex gap-2 mt-3">
                            <button
                                type="button"
                                class="btn btn-warning flex-grow-1"
                                data-bs-toggle="modal"
                                :data-bs-target="getMacketID"
                            >
                                რედაქტირება
                            </button>


                            <button
                                type="button"
                                class="btn btn-danger flex-grow-1"
                            >
                                გასუფთავება
                            </button>
                        </div>
                    </div>

                    <div class="d-flex flex-column gap-3 w-100">
                        <button
                            :disabled="!dataCSV.length"
                            class="btn btn-primary w-100"
                            @click="downloadCSV"
                        >
                            გადმოწერა
                        </button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Macket1 from "@/components/mackets/Macket1.vue";
import Macket2 from "@/components/mackets/Macket2.vue";
import Macket3 from "@/components/mackets/Macket3.vue";
import Macket4 from "@/components/mackets/Macket4.vue";
import Macket5 from "@/components/mackets/Macket5.vue";
import Macket31_6 from "@/components/mackets/Macket31_6.vue";
import Macket32_7 from "@/components/mackets/Macket32_7.vue";
import Macket23_8 from "@/components/mackets/Macket23_8.vue";
import Macket24_9 from "@/components/mackets/Macket24_9.vue";
import Macket35_10 from "@/components/mackets/Macket35_10.vue";
import Macket37_11 from "@/components/mackets/Macket37_11.vue";
import Macket28_12 from "@/components/mackets/Macket28_12.vue";
import Macket40_13 from "@/components/mackets/Macket40_13.vue";
import Macket42_14 from "@/components/mackets/Macket42_14.vue";
import Macket16_15 from "@/components/mackets/Macket16_15.vue";
import Macket14_16 from "@/components/mackets/Macket14_16.vue";
import GoBackBtn from "@/components/GoBackBtn.vue";

export default {
    name: "FMMackets",

    components: {
        GoBackBtn,
        Macket1,
        Macket2,
        Macket3,
        Macket4,
        Macket5,
        Macket31_6,
        Macket32_7,
        Macket23_8,
        Macket24_9,
        Macket35_10,
        Macket37_11,
        Macket28_12,
        Macket40_13,
        Macket42_14,
        Macket16_15,
        Macket14_16
    },

    data() {
        return {
            foresterName: ''
        }
    },

    computed: {
        ...mapGetters([
            'getForestAreaID',
            'getQuarterID',
            'getForestArea',
            'getLiterID',
            'getForesterName',

            'getRightSideBar',
            'getMacketID'
        ]),

        macketTitle() {
            let forestArea = this.getForestArea.find(item => item.id === parseInt(this.params.forestAreaID)).title

            let forestry = this.getForestArea
                .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
                .find(item => item.id === parseInt(this.params.quarterID)).title

            let quarter = this.getForestArea
                .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
                .find(item => item.id === parseInt(this.params.quarterID)).quarters
                .find(item => item.id === parseInt(this.params.literID)).title

            let macket = this.getForestArea
                .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
                .find(item => item.id === parseInt(this.params.quarterID)).quarters
                .find(item => item.id === parseInt(this.params.literID)).liters
                .find(item => item.id === parseInt(this.$route.params.id)).title

            return forestArea + ' / ' + forestry + ' / ' + quarter + ' / ' + macket
        },

        macket() {
            return this.getForestArea
                .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
                .find(item => item.id === parseInt(this.params.quarterID)).quarters
                .find(item => item.id === parseInt(this.params.literID)).liters
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[0] || []

        },

        dataCSV() {
            return this.getForestArea
                .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
                .find(item => item.id === parseInt(this.params.quarterID)).quarters
                .find(item => item.id === parseInt(this.params.literID)).liters
                .find(item => item.id === parseInt(this.$route.params.id)).mackets || []
        },

        params() {
            return {
                forestAreaID: this.getForestAreaID,
                quarterID: this.getQuarterID,
                literID: this.getLiterID,
                macketID: this.$route.params.id
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