<template>
    <MacketModal3 :params="params"/>
    <button
        type="button"
        class="btn rounded-0 rounded-top btn-light w-100"
        data-bs-toggle="modal"
        data-bs-target="#macket3"
    >
        3. ტყის ზოგადი მახასიათებლები
    </button>

    <div
        v-for="(item, index) in macket"
        :key="index"
        class="item d-flex flex-column gap-2 rounded-bottom p-3 border-top-0"
    >
        <p class="mb-0">
            3.1 გაბატონებული სახეობა - {{ item.dominant_species }}
        </p>

        <p class="mb-0">
            3.2 ბონიტეტი - {{ item.site_index }}
        </p>

        <p class="mb-0">
            3.3 ბონიტეტის სახეობა - {{ item.site_index_type }}
        </p>

        <p class="mb-0">
            3.4 ტყის ტიპი - {{ item.forest_type }}
        </p>

        <p class="mb-0">
            3.5 ადგილსამყოფელის ტიპი - {{ item.location_type }}
        </p>

        <p class="mb-0">
            3.6 ჭრის წელი - {{ item.cutting_year }}
        </p>
    </div>

</template>

<script>
import { mapGetters } from "vuex";
import MacketModal3 from "@/components/modals/mackets-modals/MacketModal3.vue";

export default {
    name: "FMMacket3",

    components: {
        MacketModal3
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
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[2] || []
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