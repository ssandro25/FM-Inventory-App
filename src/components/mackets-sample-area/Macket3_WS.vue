<template>
    <MacketModal3_WS :params="params"/>

    <button
        type="button"
        class="btn rounded-0 rounded-top btn-light w-100"
        data-bs-toggle="modal"
        data-bs-target="#macket3_WS"
    >
        3. ტყის ზოგადი მახასიათებლები
    </button>

    <div
        v-for="(item, index) in macket"
        :key="index"
        class="item d-flex flex-column gap-2 rounded-bottom p-3 border-top-0 macket__item fs-12"
    >
        <div class="row m-0">
            <div class="col-md-6 d-flex flex-column gap-2">
                <p class="mb-0">
                    3.1 - {{ item.dominant_species }}
                </p>

                <p class="mb-0">
                    3.2 - {{ item.site_index }}
                </p>

                <p class="mb-0">
                    3.3 - {{ item.site_index_type }}
                </p>
            </div>

            <div class="col-md-6 d-flex flex-column gap-2">
                <p class="mb-0">
                    3.4 - {{ item.forest_type }}
                </p>

                <p class="mb-0">
                    3.5 - {{ item.location_type }}
                </p>

                <p class="mb-0">
                    3.6 - {{ item.cutting_year }}
                </p>
            </div>
        </div>
    </div>

</template>

<script>
import { mapGetters } from "vuex";
import MacketModal3_WS from "@/components/modals/mackets-modals-sample-area/MacketModal3_WS.vue";

export default {
    name: "Macket3_WS",

    components: {
        MacketModal3_WS
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
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[2] || []
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