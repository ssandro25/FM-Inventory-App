<template>
    <MacketModal31_6 :params="params"/>

    <button
        type="button"
        class="btn rounded-0 rounded-top btn-light w-100"
        data-bs-toggle="modal"
        data-bs-target="#macket31_6"
    >
        31. მოზარდი
    </button>

<!--    <button-->
<!--        class="btn btn-primary btn-lg"-->
<!--        @click="downloadCSV"-->
<!--    >-->
<!--        გადმოწერა-->
<!--    </button>-->

    <div
        v-for="(item, index) in macket"
        :key="index"
        class="item d-flex flex-column gap-2 rounded-bottom p-3 border-top-0"
    >
        <p class="mb-0">
            31.1 რაოდენობა - {{ item.quantity }}
        </p>

        <p class="mb-0">
            31.2 სიმაღლე - {{ item.height }}
        </p>

        <p class="mb-0">
            31.3 ასაკი - {{ item.age }}
        </p>

        <p class="mb-0">
            კოეფ. 1 - {{ item.coefficient1 }}
        </p>

        <p class="mb-0">
            სახეობა 1 - {{ item.growing_trees_species }}
        </p>

    </div>

</template>

<script>
import { mapGetters } from "vuex";
import MacketModal31_6 from "@/components/modals/mackets-modals/MacketModal31_6.vue";
export default {
    name: "FMMacket31_6",

    components: {
        MacketModal31_6,
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
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[5] || []
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
        downloadCSV() {
            // Convert data to CSV format
            const csvContent = this.convertToCSV(this.macket);

            // Create a temporary anchor element
            const a = document.createElement('a');
            a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
            a.download = 'data.csv';

            // Append anchor to body and click it to trigger download
            document.body.appendChild(a);
            a.click();

            // Cleanup
            document.body.removeChild(a);
        },
        convertToCSV(data) {
            const header = Object.keys(data[0]).join(',') + '\n';
            const rows = data.map(obj => Object.values(obj).join(','));
            return header + rows.join('\n');
        }
    }
}
</script>

<style scoped lang="scss">

</style>