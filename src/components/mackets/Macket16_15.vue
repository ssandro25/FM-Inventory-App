<template>
    <MacketModal16_15 :params="params"/>

    <button
        type="button"
        class="btn rounded-0 rounded-top btn-light w-100 text-truncate"
        data-bs-toggle="modal"
        data-bs-target="#macket16_15"
    >
        16. არამერქნული ნედლელი
    </button>

    <div
        v-for="(item, index) in macket"
        :key="index"
        class="item d-flex flex-column gap-2 rounded-bottom p-3 border-top-0"
    >
        <p class="mb-0">
            ნედლეულის კატეგორია - {{ item.raw_material_category }}
        </p>

        <p class="mb-0">
            მერქნიანი სახეობა - {{ item.woody_species }}
        </p>

        <p class="mb-0">
            ხნოვანება, წელი - {{ item.year }}
        </p>

        <p class="mb-0">
            სიმაღლე, 0,1მ სიზუსტით - {{ item.height }}
        </p>

        <p class="mb-0">
            ზომის ერთეული - {{ item.unit }}
        </p>

        <p class="mb-0">
            მოსავლიანობა 1 ჰა-ზე სიზუსტით 0,1-მდე - {{ item.yield_accuracy }}
        </p>

        <p class="mb-0">
            მისადგომი შეგროვებისათვის - {{ item.accessible }}
        </p>
    </div>

</template>

<script>
import { mapGetters } from "vuex";
import MacketModal16_15 from "@/components/modals/mackets-modals/MacketModal16_15.vue";
export default {
    name: "FMMacket42_14",

    components: {
        MacketModal16_15,
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
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[14] || []
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