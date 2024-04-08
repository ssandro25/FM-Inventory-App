<template>
    <MacketModal42_14_WS :params="params"/>

    <button
        type="button"
        class="btn rounded-0 rounded-top btn-light w-100 text-truncate"
        data-bs-toggle="modal"
        data-bs-target="#macket42_14_WS"
    >
        42. ცხოველთა სამყარო
    </button>

    <div
        v-for="(item, index) in macket"
        :key="index"
        class="item rounded-bottom p-3 border-top-0 macket__item fs-12"
    >
        <div class="d-flex flex-wrap gap-1">
            <p class="mb-0">
                {{ item.nests }} /
            </p>

            <p class="mb-0">
                {{ item.overgrown_trees }} /
            </p>

            <p class="mb-0">
                {{ item.ant_nests }} /
            </p>

            <p class="mb-0">
                {{ item.location }}
            </p>
        </div>
    </div>

</template>

<script>
import { mapGetters } from "vuex";
import MacketModal42_14_WS from "@/components/modals/mackets-modals-sample-area/MacketModal42_14_WS.vue";
export default {
    name: "Macket42_14_WS",

    components: {
        MacketModal42_14_WS,
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
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[13] || []
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