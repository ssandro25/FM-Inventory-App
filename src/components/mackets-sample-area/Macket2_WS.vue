<template>
    <MacketModal2_WS :params="params"/>

    <button
        type="button"
        class="btn rounded-0 rounded-top btn-light w-100"
        data-bs-toggle="modal"
        data-bs-target="#macket2_WS"
    >
        2. დაპროექტებული ღონისძიებები
    </button>

<!--    <button-->
<!--        type="button"-->
<!--        class="btn rounded-0 rounded-top btn-light w-100"-->
<!--        @click="setInfo"-->
<!--    >-->
<!--        2. დაპროექტებული ღონისძიებები-->
<!--    </button>-->

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
import MacketModal2_WS from "@/components/modals/mackets-modals-sample-area/MacketModal2_WS.vue";

export default {
    name: "Macket2_WS",

    components: {
        MacketModal2_WS
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getWorkSpaceID',
            'getForestryWS_ID',
            'getQuarterWS_ID',
            'getLiterWS_ID',
        ]),

        macket() {
            return this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.getLiterWS_ID)).taxCardArr
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[1] || []
        },

        params() {
            return {
                workSpaceID: this.getWorkSpaceID,
                forestryWS_ID: this.getForestryWS_ID,
                quarterWS_ID: this.getQuarterWS_ID,
                literWS_ID: this.getLiterWS_ID,
                macketID: this.$route.params.id
            }
        }
    },

    // methods: {
    //     setInfo() {
    //         let arr = [this.macket[0].activity1, this.macket[0].activity2, this.macket[0].activity3, this.macket[0].activity_percent, this.macket[0].target_species]
    //         this.$store.dispatch('setInfoOnRightSideBar', arr)
    //         this.$store.dispatch('setMacketID', '#macket2')
    //     }
    // }
}
</script>

<style scoped lang="scss">

</style>