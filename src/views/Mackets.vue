<template>
    <div class="container-fluid p-5">
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
import Macket1 from "@/components/modals/mackets/Macket1.vue";

export default {
    name: "FMMackets",
    components: {Macket1},

}
</script>


<style scoped lang="scss">

</style>