<template>
    <MacketModal1 :params="params"/>

    <button
        type="button"
        class="btn rounded-0 rounded-top btn-light w-100"
        data-bs-toggle="modal"
        data-bs-target="#macket1"
    >
        1. მიწის ზოგადი
    </button>

    <div
        v-for="(item, index) in macket"
        :key="index"
        class="item d-flex flex-column gap-2 rounded-bottom p-3 border-top-0"
    >
        <p class="mb-0">
            1.1 მიწის კატეგორია - {{ item.soil_category }}
        </p>

        <p class="mb-0">
            1.2 ხს - {{ item.long_term_use_lease }}
        </p>

        <p class="mb-0">
            1.3 გ.ფ.დ.უ. - {{ item.gfdu }}
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

        <p class="mb-0">
            1.7 ეროზიის სახე - {{ item.erosion_type }}
        </p>

        <p class="mb-0">
            1.8 ეროზიის ხარისხი - {{ item.erosion_degree }}
        </p>

        <p class="mb-0">
            1.9 ფართობი - {{ item.area }} ჰა
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

    // mounted() {
    //     let checkMacket = this.getForestArea
    //         .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
    //         .find(item => item.id === parseInt(this.params.quarterID)).quarters
    //         .find(item => item.id === parseInt(this.params.literID)).liters
    //         .find(item => item.id === parseInt(this.$route.params.id)).mackets || false
    //
    //     console.log(Array.isArray(checkMacket), checkMacket)
    //
    //     if (Array.isArray(checkMacket)) {
    //         checkMacket.mackets[0] = []
    //     }
    // }
}
</script>

<style scoped lang="scss">

</style>