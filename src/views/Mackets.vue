<template>
    <div class="container-fluid p-5">
        <div class="d-flex align-items-center gap-3 mb-4">
            <GoBackBtn />

            <h1 class="text-white mb-0"> {{ macketTitle }}</h1>
        </div>

        <div class="row gy-4">
            <div class="col-6">
                <Macket1 />
            </div>

            <div class="col-6">
                <button class="btn btn-light w-100">
                    2. დაპროექტებული ღონისძიებები
                </button>
            </div>

            <div class="col-4">
                <button class="btn btn-light w-100">
                    3. ტყის ზოგადი მახასიათებლები
                </button>
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
import Macket1 from "@/components/modals/mackets/Macket1.vue";
import GoBackBtn from "@/components/GoBackBtn.vue";

export default {
    name: "FMMackets",

    components: {
        GoBackBtn,
        Macket1
    },

    computed: {
        ...mapGetters([
            'getForestAreaID',
            'getQuarterID',
            'getForestArea',
            'getLiterID'
        ]),

        macketTitle() {
            return this.getForestArea
                .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
                .find(item => item.id === parseInt(this.params.quarterID)).quarters
                .find(item => item.id === parseInt(this.params.literID)).liters
                .find(item => item.id === parseInt(this.$route.params.id)).title
        },

        params() {
            return {
                forestAreaID: this.getForestAreaID,
                quarterID: this.getQuarterID,
                literID: this.getLiterID,
                macketID: this.$route.params.id
            }
        }
    }

}
</script>


<style scoped lang="scss">

</style>