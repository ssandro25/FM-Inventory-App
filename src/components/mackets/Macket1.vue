<template>
    <MacketModal1 :params="params"/>

<!--    <button-->
<!--        type="button"-->
<!--        class="btn rounded-0 rounded-top btn-light w-100"-->
<!--        data-bs-toggle="modal"-->
<!--        data-bs-target="#macket1"-->
<!--    >-->
<!--        1. მიწის ზოგადი-->
<!--    </button>-->

    <button
        type="button"
        class="btn rounded-0 rounded-top btn-light w-100"
        @click="setInfo"
    >
        1. მიწის ზოგადი
    </button>

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
import MacketModal1 from "@/components/modals/mackets-modals/MacketModal1.vue";

export default {
    name: "FMMacket1",

    components: {
        MacketModal1
    },

    computed: {
        ...mapGetters([
            'getForestAreaID',
            'getQuarterID',
            'getForestArea',
            'getLiterID'
        ]),

        macket() {
           return this.getForestArea
                .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
                .find(item => item.id === parseInt(this.params.quarterID)).quarters
                .find(item => item.id === parseInt(this.params.literID)).liters
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[0] || []
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
        setInfo() {
            let arr = [this.macket[0].soil_category, this.macket[0].long_term_use_lease, this.macket[0].gfdu, this.macket[0].exposition, this.macket[0].inclination, this.macket[0].elevation, this.macket[0].erosion_type, this.macket[0].erosion_degree, this.macket[0].area]
            this.$store.dispatch('setInfoOnRightSideBar', arr)
            this.$store.dispatch('setMacketID', '#macket1')
        }
    }
}
</script>

<style scoped lang="scss">

</style>