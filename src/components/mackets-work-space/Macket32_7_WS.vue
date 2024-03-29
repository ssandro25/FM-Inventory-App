<template>
    <MacketModal32_7_WS :params="params"/>

    <button
        type="button"
        class="btn rounded-0 rounded-top btn-light w-100"
        data-bs-toggle="modal"
        data-bs-target="#macket32_7_WS"
    >
        32. ქვეტყე
    </button>

    <div
        v-for="(item, index) in macket"
        :key="index"
        class="item d-flex flex-column gap-2 rounded-bottom p-3 border-top-0 macket__item fs-12"
    >
        <div class="row m-0">
            <div class="col-md-6 d-flex flex-column gap-2">
                <p class="mb-0">
                    განფენილობა - {{ item.distribution }}
                </p>

                <p class="mb-0">
                    დაფ. % - {{ item.distribution_percent }}
                </p>

                <p class="mb-0">
                    სახეობა 1 - {{ item.tree_type1 }}
                </p>
            </div>

            <div class="col-md-6 d-flex flex-column gap-2">
                <p class="mb-0">
                    სახეობა 2 - {{ item.tree_type2 }}
                </p>

                <p class="mb-0">
                    სახეობა 3 - {{ item.tree_type3 }}
                </p>

                <p class="mb-0">
                    სიმაღლე - {{ item.tree_height }}
                </p>
            </div>
        </div>
    </div>

</template>

<script>
import { mapGetters } from "vuex";
import MacketModal32_7_WS from "@/components/modals/mackets-modals-sample-area/MacketModal32_7_WS.vue";
export default {
    name: "Macket32_7_WS",

    components: {
        MacketModal32_7_WS,
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
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[6] || []
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