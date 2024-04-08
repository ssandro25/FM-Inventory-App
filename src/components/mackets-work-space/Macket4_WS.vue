<template>
    <MacketModal4_WS :params="params"/>

    <button
        type="button"
        class="btn rounded-0 rounded-top btn-light w-100"
        data-bs-toggle="modal"
        data-bs-target="#macket4_WS"
    >
        4. ჩახერგილობა
    </button>

    <div
        v-for="(item, index) in macket"
        :key="index"
        class="item d-flex flex-column gap-2 rounded-bottom p-3 border-top-0 macket__item fs-12"
    >
        <div class="d-flex flex-wrap gap-1">
            <p class="mb-0">
                {{ item.deed_wood }} /
            </p>

            <p class="mb-0">
                {{ item.deed_wood_liquid }} /
            </p>

            <p class="mb-0">
                {{ item.old_deadwood }}
            </p>
        </div>
    </div>

</template>

<script>
import { mapGetters } from "vuex";
import MacketModal4_WS from "@/components/modals/mackets-modals-sample-area/MacketModal4_WS.vue.vue";
export default {
    name: "Macket4_WS",

    components: {
        MacketModal4_WS
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
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[3] || []
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