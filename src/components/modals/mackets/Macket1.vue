<template>
    <MacketModal1 :params="params"/>

    <button
        type="button"
        class="btn btn-light w-100"
        data-bs-toggle="modal"
        data-bs-target="#macket1"
    >
        1. მიწის ზოგადი
    </button>

    <div
        v-for="(item, index) in macket"
        :key="index"
    >
        {{ item }}
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
                .find(item => item.id === parseInt(this.$route.params.id)).mackets

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

    mounted() {
        // console.log(this.getForestArea)
        // console.log(this.macket)
    }
}
</script>

<style scoped lang="scss">

</style>