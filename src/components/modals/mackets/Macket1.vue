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
        class="border rounded p-3 border-top-0"
    >
        <p class="mb-0">
            1.1 მიწის კატეგორია - {{ item.soil_category }}
        </p>

        <p class="mb-0">
            1.2 ხს - {{ item.long_term_use_lease }}
        </p>

        <p class="mb-0">
            1.4 ექსპოზიცია - {{ item.exposition }}
        </p>

        <p class="mb-0">
            1.5 დაქანება - {{ item.inclination }}
        </p>

        <p class="mb-0">
            1.6 ს.ზ.დ. - {{ item.elevation }}
        </p>

<!--        {{ item }}-->
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
}
</script>

<style scoped lang="scss">

</style>