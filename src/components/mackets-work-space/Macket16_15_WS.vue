<template>
    <MacketModal16_15_WS :params="params"/>

    <button
        type="button"
        class="btn rounded-0 rounded-top btn-light w-100 text-truncate"
        data-bs-toggle="modal"
        data-bs-target="#macket16_15_WS"
    >
        16. არამერქნული ნედლელი
    </button>

    <div
        v-for="(item, index) in macket"
        :key="index"
        class="item d-flex flex-column gap-2 rounded-bottom p-3 border-top-0 macket__item fs-12"
    >
        <p class="mb-0">
            {{ item.raw_material_category }}
        </p>

        <p class="mb-0">
            {{ item.woody_species }}
        </p>

        <p class="mb-0">
           {{ item.year }}
        </p>

        <p class="mb-0">
            {{ item.height }}
        </p>

        <p class="mb-0">
            {{ item.unit }}
        </p>

        <p class="mb-0">
            {{ item.yield_accuracy }}
        </p>

        <p class="mb-0">
            {{ item.accessible }}
        </p>
    </div>

</template>

<script>
import { mapGetters } from "vuex";
import MacketModal16_15_WS from "@/components/modals/mackets-modals-sample-area/MacketModal16_15_WS.vue";
export default {
    name: "Macket16_15_WS",

    components: {
        MacketModal16_15_WS,
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
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[14] || []
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
}
</script>

<style scoped lang="scss">

</style>