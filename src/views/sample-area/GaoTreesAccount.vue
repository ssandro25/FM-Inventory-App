<template>
    <div class="container-fluid p-lg-5 p-3">
        <div class="d-flex align-items-center gap-3 mb-4">
            <GoBackBtn/>

            <h1 class="text-white pt-md-0 pt-5 mb-0 fs-4">
                {{ sampleAreaTitle }} | ზრდადი და ზეხმელი ხეების აღრიცხვის უწყისი
            </h1>
        </div>

        <nav class="mt-4">
            <div class="nav nav-tabs gap-1 border-0" id="nav-tab" role="tablist">
                <button
                    class="nav-link active"
                    id="nav-one-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-one"
                    type="button"
                    role="tab"
                    aria-controls="nav-one"
                    aria-selected="true"
                >
                    1.საველე აღრიცხვა
                </button>

                <button
                    class="nav-link"
                    id="nav-two-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-two"
                    type="button"
                    role="tab"
                    aria-controls="nav-two"
                    aria-selected="false"
                >
                    2. აღრიცხვის უწყისი
                </button>

                <button
                    class="nav-link"
                    id="nav-three-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-three"
                    type="button"
                    role="tab"
                    aria-controls="nav-three"
                    aria-selected="false"
                >
                    3. კამერალური დამუშავება
                </button>

                <button
                    class="nav-link"
                    id="nav-four-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-four"
                    type="button"
                    role="tab"
                    aria-controls="nav-four"
                    aria-selected="false"
                >
                    4. შედეგები
                </button>
            </div>
        </nav>

        <div class="tab-content mt-5" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-one" role="tabpanel" aria-labelledby="nav-one-tab" tabindex="0">
                <GrowTreeFieldAccounting />
            </div>

            <div class="tab-pane fade" id="nav-two" role="tabpanel" aria-labelledby="nav-two-tab" tabindex="0">
                <GaoTreesAccountingTab />
            </div>

            <div class="tab-pane fade" id="nav-three" role="tabpanel" aria-labelledby="nav-three-tab" tabindex="0">
                <GaoTreesAccountProcessing />
            </div>

            <div class="tab-pane fade" id="nav-four" role="tabpanel" aria-labelledby="nav-four-tab" tabindex="0">
                4. შედეგები
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import GoBackBtn from "@/components/GoBackBtn.vue";
import GrowTreeFieldAccounting from "@/components/GrowTreeFieldAccounting.vue";
import GaoTreesAccountingTab from "@/components/GaoTreesAccountingTab.vue";
import GaoTreesAccountProcessing from "@/components/GaoTreesAccountProcessing.vue";


export default {
    name: "GaoTreesAccount",

    components: {
        GaoTreesAccountProcessing,
        GaoTreesAccountingTab,
        GrowTreeFieldAccounting,
        GoBackBtn
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getWorkSpaceID',
            'getForestryWS_ID',
            'getQuarterWS_ID',
            'getLiterWS_ID',
            'getSampleAreaID'
        ]),

        sampleAreaTitle() {
            let sampleAreaName = this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.getLiterWS_ID)).sampleAreaArr
                .find(item => item.id === parseInt(this.$route.params.id)).title

            let sampleAreaID = this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.getLiterWS_ID)).sampleAreaArr
                .find(item => item.id === parseInt(this.$route.params.id)).id

            return sampleAreaName + sampleAreaID
        },
    },
}
</script>

<style scoped lang="scss">
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
    color: #fff;
    background-color: rgb(57, 145, 112);
    border-color: rgb(57, 145, 112);
}

.nav-tabs .nav-link:hover {
    color: #fff;
    background-color: rgb(57, 145, 112);
    border-color: rgb(57, 145, 112);
}

.nav-tabs .nav-link {
    color: #fff;
    background-color: #1e393f;
    border-color: #1e393f;
}
</style>