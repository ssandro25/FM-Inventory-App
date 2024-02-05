<template>

    <div class="container-fluid">
        <GoBackBtn />

        <div class="container">
            <div
                v-for="(item, index) in data"
                :key="index"
                class="border-bottom border-dark py-3"
            >
                <div>
                    <strong>სატყეო უბანი:</strong>
                    {{ item.forest_area }}
                </div>

                <div>
                    <strong>სატყეო</strong>
                    {{ item.forest }}
                </div>

                <div>
                    <strong>კვარტალი</strong>
                    {{ item.quarter }}
                </div>

                <div>
                    <strong>სატაქსაციო უბანი</strong>
                    {{ item.tax_area }}
                </div>

                <div>
                    <strong>შევსების დაწყების თარიღი</strong>
                    {{ item.date }}
                </div>

                <div>
                    <strong>საველე აღწერის მეთოდი</strong>
                    {{ item.description_method }}
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { mapGetters } from "vuex";
import GoBackBtn from "@/components/GoBackBtn.vue";

export default {
    name: "TaxCard",

    components: {
        GoBackBtn
    },

    data() {
        return {
            data: []
        }
    },

    computed: {
        ...mapGetters([
            'getTaxCard'
        ])
    },

    mounted() {
        this.data = this.getTaxCard
        console.log(this.data)
    }
}
</script>

<style scoped lang="scss">

</style>