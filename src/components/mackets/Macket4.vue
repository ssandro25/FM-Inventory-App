<template>
    <MacketModal4 :params="params"/>
    <button
        type="button"
        class="btn rounded-0 rounded-top btn-light w-100"
        data-bs-toggle="modal"
        data-bs-target="#macket4"
    >
        4. ჩახერგილობა
    </button>

    <div
        v-for="(item, index) in macket"
        :key="index"
        class="item d-flex flex-column gap-2 rounded-bottom p-3 border-top-0"
    >
        <p class="mb-0">
            4.1 ჩახერგილობა საერთოა - {{ item.deed_wood }}
        </p>

        <p class="mb-0">
            4.2 ჩახერგილობა ლიკვიდი - {{ item.deed_wood_liquid }}
        </p>

        <p class="mb-0">
            4.3 ძველი ზეხმელის ჩახერგილობა - {{ item.old_deadwood }}
        </p>
    </div>

</template>

<script>
import { mapGetters } from "vuex";
import MacketModal4 from "@/components/modals/mackets-modals/MacketModal4.vue";
export default {
    name: "FMMacket4",

    components: {
        MacketModal4
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
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[3] || []
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