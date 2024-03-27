<template>
    <MacketModal28_12 :params="params"/>

    <button
        type="button"
        class="btn rounded-0 rounded-top btn-light w-100 text-truncate"
        data-bs-toggle="modal"
        data-bs-target="#macket28_12"
    >
        28. გზით უზრუნველყოფა
    </button>

    <div
        v-for="(item, index) in macket"
        :key="index"
        class="item d-flex flex-column gap-2 rounded-bottom p-3 border-top-0 macket__item fs-12"
    >
        <p class="mb-0">
            28.1. - {{ item.accessibility_category }}
        </p>

        <p class="mb-0">
            28.2. - {{ item.transport_type }}
        </p>

        <p class="mb-0">
            28.3. - {{ item.road_away }}
        </p>
    </div>

</template>

<script>
import { mapGetters } from "vuex";
import MacketModal28_12 from "@/components/modals/mackets-modals/MacketModal28_12.vue";
export default {
    name: "FMMacket28_12",

    components: {
        MacketModal28_12,
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
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[11] || []
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
}
</script>

<style scoped lang="scss">

</style>