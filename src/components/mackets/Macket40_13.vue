<template>
    <MacketModal40_13 :params="params"/>

    <button
        type="button"
        class="btn rounded-0 rounded-top btn-light w-100 text-truncate"
        data-bs-toggle="modal"
        data-bs-target="#macket40_13"
    >
        40. შეფასება
    </button>

    <div
        v-for="(item, index) in macket"
        :key="index"
        class="item d-flex flex-column gap-2 rounded-bottom p-3 border-top-0"
    >
        <p class="mb-0">
            40.1. ტიპი - {{ item.disaster_type }}
        </p>

        <p class="mb-0">
            40.1. მდგრადობა - {{ item.sustainability }}
        </p>

        <p class="mb-0">
            40.3. ხანძრის საშიშროების კლასი - {{ item.fire_hazard_class }}
        </p>

        <p class="mb-0">
            40.4. დაზიანების კლასი - {{ item.damage_class }}
        </p>
    </div>

</template>

<script>
import { mapGetters } from "vuex";
import MacketModal40_13 from "@/components/modals/mackets-modals/MacketModal40_13.vue";
export default {
    name: "FMMacket40_13",

    components: {
        MacketModal40_13,
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
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[12] || []
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