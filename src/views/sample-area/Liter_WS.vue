<template>
    <div class="container-fluid p-md-5 p-3">
        <div class="d-flex align-items-center gap-3 mb-4">
            <GoBackBtn/>

            <h1 class="text-white pt-md-0 pt-5 mb-0 fs-4">
                {{ literWSTitle }}
            </h1>
        </div>

        <div class="row">
            <div class="col-lg-6">
                <p class="fs-3 mb-0">
                    ტაქსაციის ბარათი
                </p>

                <TaxCardList />
            </div>

            <div class="col-lg-6 mt-lg-0 mt-4">
                <p class="fs-3 mb-0">
                    სანიმუშო ფართობი
                </p>

                <SampleAreasList />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import GoBackBtn from "@/components/GoBackBtn.vue";
import TaxCardList from "@/components/TaxCardList.vue";
import SampleAreasList from "@/components/SampleAreasList.vue";

export default {
    name: "Liter_WS",

    components: {
        SampleAreasList,
        TaxCardList,
        GoBackBtn,
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getWorkSpaceID',
            'getForestryWS_ID',
            'getQuarterWS_ID'
        ]),

        literWSTitle() {
            let workSpace = this.getWorkSpace.find(item => item.id === parseInt(this.getWorkSpaceID)).title

            let forestry = this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).title

            let quarter = this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).title

            let liter = this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.$route.params.id)).title

            return workSpace + ' / ' + forestry + ' / ' + quarter + ' / ' + liter
        },
    },

    mounted() {
        this.$store.dispatch('setLiterWS_ID', this.$route.params.id)
    }
}
</script>

<style scoped lang="scss">

</style>