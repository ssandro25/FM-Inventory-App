<template>
    <MacketModal14_16 :params="params"/>

    <button
        type="button"
        class="btn rounded-0 rounded-top btn-light w-100 text-truncate"
        data-bs-toggle="modal"
        data-bs-target="#macket14_16"
    >
        14. ბალახეული მცენარეები და კენკროვნები
    </button>

    <div
        v-for="(item, index) in macket"
        :key="index"
        class="item d-flex flex-column gap-2 rounded-bottom p-3 border-top-0"
    >
        <p class="mb-0">
            აღრიცხვის კატეგორია - {{ item.accounting_category }}
        </p>

        <p class="mb-0">
            მცენარეთა სახეობა - {{ item.plants_type }}
        </p>

        <p class="mb-0">
            დაფარვის % - {{ item.coverage_percent }}
        </p>
    </div>

</template>

<script>
import { mapGetters } from "vuex";
import MacketModal14_16 from "@/components/modals/mackets-modals/MacketModal14_16.vue";
export default {
    name: "FMMacket14_16",

    components: {
        MacketModal14_16,
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
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[15] || []
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