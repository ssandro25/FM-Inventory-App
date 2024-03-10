<template>
    <div class="container-fluid p-md-5 p-3 h-100">
        <div class="row row-cols-md-2 row-cols-1 gy-4 h-100">
            <div class="col">
                <router-link
                    :to="/work-space/+this.getWorkSpaceID+/forestry/+this.getForestryWS_ID+/quarter/+this.getQuarterWS_ID+/liter/+this.getLiterWS_ID+/sample-area/+this.getSampleAreaID+/gao-trees-account/+this.$route.params.id"
                    class="item rounded d-flex align-items-center justify-content-center text-decoration-none text-white p-3 fs-3 text-center h-100"
                >
                    ზრდადი და ზეხმელი ხეების აღრიცხვის უწყისი
                </router-link>
            </div>

            <div class="col">
                <router-link
                    :to="/work-space/+this.getWorkSpaceID+/forestry/+this.getForestryWS_ID+/quarter/+this.getQuarterWS_ID+/liter/+this.getLiterWS_ID+/sample-area/+this.getSampleAreaID+/lying-dead-account/+this.$route.params.id"
                    class="item rounded d-flex align-items-center justify-content-center text-decoration-none text-white p-3 fs-3 text-center h-100"
                >
                    ძირნაყარის აღრიცხვის უწყისი
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "SampleArea",

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getWorkSpaceID',
            'getForestryWS_ID',
            'getQuarterWS_ID',
            'getLiterWS_ID',
            'getSampleAreaID'
        ])
    }
}
</script>

<style scoped lang="scss">

</style>