<template>
    <MacketModal2 :params="params"/>

    <button
        type="button"
        class="btn rounded-0 rounded-top btn-light w-100"
        data-bs-toggle="modal"
        data-bs-target="#macket2"
    >
        2. დაპროექტებული ღონისძიებები
    </button>

    <div
        v-for="(item, index) in macket"
        :key="index"
        class="item d-flex flex-column gap-2 rounded-bottom p-3 border-top-0 macket__item fs-12"
    >
        <p class="mb-0">
            2.1 ღონისძიება I - {{ item.activity1 }}
        </p>

        <p class="mb-0">
            2.2 % - {{ item.activity_percent }} %
        </p>

        <p class="mb-0">
            2.3 ღონისძიება II - {{ item.activity2 }}
        </p>

        <p class="mb-0">
            2.3 ღონისძიება III - {{ item.activity3 }}
        </p>

        <p class="mb-0">
            2.5 მიზნობრივი სახეობა - {{ item.target_species }}
        </p>

    </div>

</template>

<script>
import { mapGetters } from "vuex";
import MacketModal2 from "@/components/modals/mackets-modals/MacketModal2.vue";

export default {
    name: "FMMacket2",

    components: {
        MacketModal2
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
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[1] || []
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