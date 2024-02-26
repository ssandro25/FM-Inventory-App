<template>
    <div class="container-fluid p-md-5 p-3">
        <div class="d-flex align-items-md-center justify-content-md-between flex-md-row flex-column gap-3 mb-4 mt-md-0 mt-5">
            <div class="d-flex align-items-center gap-3 ">
                <GoBackBtn />

                <h1 class="text-white mb-0 fs-4"> {{ macketTitle }}</h1>
            </div>

            <div
                v-for="(item,index) in macket"
                :key="index"
            >
                <p class="mb-0">
                    <strong>ექსპოზიცია:</strong> {{ item.exposition ? item.exposition : '-' }}
                </p>


                <p class="mb-0">
                    <strong>ს.ზ.დ:</strong> {{ item.elevation ? item.elevation : '-' }}
                </p>

                <p class="mb-0">
                    <strong>დაქანება:</strong> {{ item.inclination ? item.inclination : '-' }}
                </p>

                <p class="mb-0">
                    <strong>K:</strong> 1
                </p>

            </div>
        </div>

        <div class="row gy-4">
            <div class="col-md-6">
                <Macket1 />
            </div>

            <div class="col-md-6">
               <Macket2 />
            </div>

            <div class="col-md-4">
                <Macket3 />
            </div>

            <div class="col-md-4">
                <Macket4 />
            </div>

            <div class="col-md-4">
                <Macket5 />
            </div>

            <div class="col-md-12">
                <button class="btn btn-light w-100">
                    10. ტაქსაციური დახასიათება
                </button>
            </div>

            <div class="col-md-6">
                <Macket31_6 />
            </div>

            <div class="col-md-6">
                <Macket32_7 />
            </div>

            <div class="col-12">
               <Macket23_8 />
            </div>
        </div>

        <div class="row row-cols-lg-6 row-cols-1 gy-4 mt-3 border-top">
            <div class="col">
                <Macket24_9 />
            </div>

            <div class="col">
               <Macket35_10 />
            </div>

            <div class="col">
               <Macket37_11 />
            </div>

            <div class="col">
                <button class="btn btn-light w-100 text-truncate">
                    22. ბაღები,პლანტაციები
                </button>
            </div>

            <div class="col">
                <button class="btn btn-light w-100 text-truncate">
                    36. წყლები
                </button>
            </div>

            <div class="col">
                <Macket28_12 />
            </div>

            <div class="col">
                <button class="btn btn-light w-100 text-truncate">
                    40. შეფასება
                </button>
            </div>

            <div class="col">
                <button class="btn btn-light w-100 text-truncate">
                    33. ბიომრავალფეროვნება
                </button>
            </div>

            <div class="col">
                <button class="btn btn-light w-100 text-truncate">
                    42. ცხოველთა სამყარო
                </button>
            </div>

            <div class="col">
                <button class="btn btn-light w-100 text-truncate">
                    16. არამერქნული ნედლელი
                </button>
            </div>

            <div class="col">
                <button class="btn btn-light w-100 text-truncate">
                    17. სასოფლო-სამეურნეო სავარგულები
                </button>
            </div>

            <div class="col">
                <button class="btn btn-light w-100 text-truncate">
                    14. ბალახეული მცენარეები და კენკროვნები
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Macket1 from "@/components/mackets/Macket1.vue";
import Macket2 from "@/components/mackets/Macket2.vue";
import Macket3 from "@/components/mackets/Macket3.vue";
import Macket4 from "@/components/mackets/Macket4.vue";
import Macket5 from "@/components/mackets/Macket5.vue";
import Macket31_6 from "@/components/mackets/Macket31_6.vue";
import Macket32_7 from "@/components/mackets/Macket32_7.vue";
import Macket23_8 from "@/components/mackets/Macket23_8.vue";
import Macket24_9 from "@/components/mackets/Macket24_9.vue";
import Macket35_10 from "@/components/mackets/Macket35_10.vue";
import Macket37_11 from "@/components/mackets/Macket37_11.vue";
import Macket28_12 from "@/components/mackets/Macket28_12.vue";
import GoBackBtn from "@/components/GoBackBtn.vue";



export default {
    name: "FMMackets",

    components: {
        GoBackBtn,
        Macket1,
        Macket2,
        Macket3,
        Macket4,
        Macket5,
        Macket31_6,
        Macket32_7,
        Macket23_8,
        Macket24_9,
        Macket35_10,
        Macket37_11,
        Macket28_12
    },

    computed: {
        ...mapGetters([
            'getForestAreaID',
            'getQuarterID',
            'getForestArea',
            'getLiterID'
        ]),

        macketTitle() {
            let forestArea = this.getForestArea.find(item => item.id === parseInt(this.params.forestAreaID)).title

            let forestry = this.getForestArea
                .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
                .find(item => item.id === parseInt(this.params.quarterID)).title

            let quarter = this.getForestArea
                .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
                .find(item => item.id === parseInt(this.params.quarterID)).quarters
                .find(item => item.id === parseInt(this.params.literID)).title

            let macket = this.getForestArea
                .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
                .find(item => item.id === parseInt(this.params.quarterID)).quarters
                .find(item => item.id === parseInt(this.params.literID)).liters
                .find(item => item.id === parseInt(this.$route.params.id)).title

            return forestArea + ' / ' + forestry + ' / ' + quarter + ' / ' + macket
        },

        macket() {
            return this.getForestArea
                .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
                .find(item => item.id === parseInt(this.params.quarterID)).quarters
                .find(item => item.id === parseInt(this.params.literID)).liters
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[0] || []

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

    // mounted() {
    //     let checkMacket = this.getForestArea
    //         .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
    //         .find(item => item.id === parseInt(this.params.quarterID)).quarters
    //         .find(item => item.id === parseInt(this.params.literID)).liters
    //         .find(item => item.id === parseInt(this.$route.params.id)).mackets || []
    //
    //     // console.log(Array.isArray(checkMacket), checkMacket)
    //
    //     if (checkMacket.length < 3) {
    //         console.log(false)
    //         checkMacket.push([], [], []);
    //         console.log(checkMacket)
    //
    //         this.$store.dispatch('setForestArea', this.getForestArea)
    //     } else {
    //         console.log(true)
    //     }
    // }
}
</script>


<style scoped lang="scss">

</style>