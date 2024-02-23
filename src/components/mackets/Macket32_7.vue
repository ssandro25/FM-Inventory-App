<template>
    <MacketModal32_7 :params="params"/>

    <button
        type="button"
        class="btn rounded-0 rounded-top btn-light w-100"
        data-bs-toggle="modal"
        data-bs-target="#macket32_7"
    >
        32. ქვეტყე
    </button>

    <div
        v-for="(item, index) in macket"
        :key="index"
        class="item d-flex flex-column gap-2 rounded-bottom p-3 border-top-0"
    >
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

</template>

<script>
import { mapGetters } from "vuex";
import MacketModal32_7 from "@/components/modals/mackets-modals/MacketModal32_7.vue";
export default {
    name: "FMMacket32_7",

    components: {
        MacketModal32_7,
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
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[6] || []
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