<template>
    <MacketModal1_WS :params="params"/>

    <button
        type="button"
        class="btn rounded-0 rounded-top btn-light w-100"
        data-bs-toggle="modal"
        data-bs-target="#macket1_WS"
    >
        1. მიწის ზოგადი
    </button>

<!--    <button-->
<!--        type="button"-->
<!--        class="btn rounded-0 rounded-top btn-light w-100"-->
<!--        @click="setInfo"-->
<!--    >-->
<!--        1. მიწის ზოგადი-->
<!--    </button>-->

    <div
        v-for="(item, index) in macket"
        :key="index"
        class="item rounded-bottom p-3 border-top-0 macket__item fs-12"
    >
        <div class="d-flex flex-wrap gap-1">
            <p class="mb-0">
                {{ item.soil_category }} /
            </p>

            <p class="mb-0">
                {{ item.long_term_use_lease }} /
            </p>

            <p class="mb-0">
                {{ item.gfdu }} /
            </p>

            <p class="mb-0">
                {{ item.exposition }} /
            </p>

            <p class="mb-0">
                {{ item.inclination }} /
            </p>

            <p class="mb-0">
                {{ item.elevation }} /
            </p>

            <p class="mb-0">
                {{ item.erosion_type }} /
            </p>

            <p class="mb-0">
                {{ item.erosion_degree }} /
            </p>

            <p class="mb-0">
                {{ item.area }} ჰა
            </p>
        </div>
    </div>

</template>

<script>
import { mapGetters } from "vuex";
import MacketModal1_WS from "@/components/modals/mackets-modals-sample-area/MacketModal1_WS.vue";

export default {
    name: "Macket1_WS",

    components: {
        MacketModal1_WS
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getWorkSpaceID',
            'getForestryWS_ID',
            'getQuarterWS_ID',
            'getLiterWS_ID',
        ]),

        macket() {
            return this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.getLiterWS_ID)).taxCardArr
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[0] || []
        },

        params() {
            return {
                workSpaceID: this.getWorkSpaceID,
                forestryWS_ID: this.getForestryWS_ID,
                quarterWS_ID: this.getQuarterWS_ID,
                literWS_ID: this.getLiterWS_ID,
                macketID: this.$route.params.id
            }
        }
    },

    // methods: {
    //     setInfo() {
    //         let arr = [this.macket[0].soil_category, this.macket[0].long_term_use_lease, this.macket[0].gfdu, this.macket[0].exposition, this.macket[0].inclination, this.macket[0].elevation, this.macket[0].erosion_type, this.macket[0].erosion_degree, this.macket[0].area]
    //         this.$store.dispatch('setInfoOnRightSideBar', arr)
    //         this.$store.dispatch('setMacketID', '#macket1')
    //     }
    // }
}
</script>

<style scoped lang="scss">

</style>