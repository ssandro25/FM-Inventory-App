<template>
    <MacketModal24_9 :params="params"/>

    <button
        type="button"
        class="btn rounded-0 rounded-top btn-light w-100 text-truncate"
        data-bs-toggle="modal"
        data-bs-target="#macket24_9"
    >
        24. ნიადაგის დახასიათება
    </button>

    <div
        v-for="(item, index) in macket"
        :key="index"
        class="item d-flex flex-column gap-2 rounded-bottom p-3 border-top-0"
    >
        <p class="mb-0">
            24.1. ნიადაგის ჯგუფი - {{ item.soil_character }}
        </p>

        <p class="mb-0">
            24.2. ნიადაგის მექანიკური შემადგენლობა - {{ item.soil_mechanical_composition }}
        </p>

        <p class="mb-0">
            24.3. სინესტის ხარისხი - {{ item.moisture_degree }}
        </p>

        <p class="mb-0">
            24.4. დაკორდების ხარისხი - {{ item.chords_quality }}
        </p>

        <p class="mb-0">
            24.5. ნიადაგის სიმკვრივე - {{ item.soil_density }}
        </p>


        <p class="mb-0">
            24.6. დედაქანის დაფარულობის % (ეროზირებული და ჩამორეცხილი ნიადაგის აღწერის დროს 5-100%) - {{ item.mother_rock_coverage }}
        </p>

    </div>

</template>

<script>
import { mapGetters } from "vuex";
import MacketModal24_9 from "@/components/modals/mackets-modals/MacketModal24_9.vue";
export default {
    name: "FMMacket24_9",

    components: {
        MacketModal24_9,
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
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[8] || []
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