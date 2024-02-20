<template>
    <div class="container-fluid p-5">
        <div class="d-flex align-items-center justify-content-between mb-4">
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
            <div class="col-6">
                <Macket1 />
            </div>

            <div class="col-6">
               <Macket2 />
            </div>

            <div class="col-4">
                <Macket3 />
            </div>

            <div class="col-4">
                <button class="btn btn-light w-100">
                    4. ჩახერგილობა
                </button>
            </div>

            <div class="col-4">
                <button class="btn btn-light w-100">
                    5. გამოსავლიანობის პროცენტი
                </button>
            </div>

            <div class="col-12">
                <button class="btn btn-light w-100">
                    10. ტაქსაციური დახასიათება
                </button>
            </div>

            <div class="col-6">
                <button class="btn btn-light w-100">
                    31. მოზარდი
                </button>
            </div>

            <div class="col-6">
                <button class="btn btn-light w-100">
                    32. ქვეტყე
                </button>
            </div>

            <div class="col-12">
                <button class="btn btn-light w-100">
                    23. უბნის თავისებურება (დამატებითი ინფორმაცია)
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
import GoBackBtn from "@/components/GoBackBtn.vue";

export default {
    name: "FMMackets",

    components: {
        GoBackBtn,
        Macket1,
        Macket2,
        Macket3
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
}
</script>


<style scoped lang="scss">

</style>