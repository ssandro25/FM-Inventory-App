<template>
    <MacketModal2 :params="params"/>

<!--    <button-->
<!--        type="button"-->
<!--        class="btn rounded-0 rounded-top btn-light w-100"-->
<!--        data-bs-toggle="modal"-->
<!--        data-bs-target="#macket2"-->
<!--    >-->
<!--        2. დაპროექტებული ღონისძიებები-->
<!--    </button>-->

    <button
        type="button"
        class="btn rounded-0 rounded-top btn-light w-100"
        @click="setInfo"
    >
        2. დაპროექტებული ღონისძიებები
    </button>

    <div
        v-for="(item, index) in macket"
        :key="index"
        class="item rounded-bottom p-3 border-top-0 macket__item fs-12"
    >
        <div class="d-flex flex-wrap gap-1">
            <p class="mb-0">
               {{ item.activity1 }} /
            </p>

            <p class="mb-0">
                {{ item.activity_percent }} % /
            </p>

            <p class="mb-0">
                {{ item.activity2 }} /
            </p>

            <p class="mb-0">
                {{ item.activity3 }} /
            </p>

            <p class="mb-0">
                {{ item.target_species }} /
            </p>

        </div>
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

    methods: {
        setInfo() {
            let arr = [this.macket[0].activity1, this.macket[0].activity2, this.macket[0].activity3, this.macket[0].activity_percent, this.macket[0].target_species]
            this.$store.dispatch('setInfoOnRightSideBar', arr)
            this.$store.dispatch('setMacketID', '#macket2')
        }
    }
}
</script>

<style scoped lang="scss">

</style>