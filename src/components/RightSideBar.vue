<template>
    <div class="d-flex flex-column justify-content-between gap-4 right__side_bar">
        <div>
            <p class="text-forest mb-0">
                <strong>მეტყევე : </strong>

                <router-link to="/options" class="text-forest">
                    {{ foresterName ? foresterName : 'შეიყვანეთ სახელი' }}
                </router-link>

            </p>
        </div>

        <div>

            <div class="d-flex gap-2">
                <button
                    type="button"
                    class="btn btn-warning flex-grow-1"
                >
                    რედაქტირება
                </button>


                <button
                    type="button"
                    class="btn btn-danger flex-grow-1"
                >
                    გასუფთავება
                </button>
            </div>
        </div>

        <div class="d-flex flex-column gap-3 w-100">
            <button
                :disabled="!dataCSV.length"
                class="btn btn-primary w-100"
                @click="downloadCSV"
            >
                გადმოწერა
            </button>

            <button
                :disabled="!dataCSV.length"
                class="btn btn-primary w-100"
                @click="downloadCSV1"
            >
                გადმოწერა (ერთ ხაზზში)
            </button>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "RightSideBar",

    data() {
        return {
            foresterName: ''
        }
    },

    computed: {
        ...mapGetters([
            'getForesterName'
        ]),

        dataCSV() {
            return this.getForestArea
                .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
                .find(item => item.id === parseInt(this.params.quarterID)).quarters
                .find(item => item.id === parseInt(this.params.literID)).liters
                .find(item => item.id === parseInt(this.$route.params.id)).mackets || []
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
            const csvContent = this.convertToCSV(this.dataCSV);

            // Create a temporary anchor element
            const a = document.createElement('a');
            a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
            a.download = `${this.macketTitle}.csv`;
            // a.download = 'data.csv';

            // Append anchor to body and click it to trigger download
            document.body.appendChild(a);
            a.click();

            // Cleanup
            document.body.removeChild(a);
        },
        convertToCSV(dataArray) {
            let csvContent = '';

            // Loop through the dataArray
            dataArray.forEach(innerArray => {
                // Convert each inner array of objects to CSV format
                const rows = innerArray.map(obj => Object.values(obj).join(','));
                // Add the rows to the CSV content
                csvContent += rows.join('\n') + '\n';
            });

            return csvContent;
        },

        downloadCSV1() {
            // Flatten the dataArray into a single array
            const flattenedArray = this.dataCSV.reduce((acc, curr) => acc.concat(curr), []);

            // Convert flattened array to CSV format
            const csvContent = this.convertToCSV1(flattenedArray);

            // Create a temporary anchor element
            const a = document.createElement('a');
            a.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
            a.download = `${this.macketTitle}.csv`;

            // Append anchor to body and click it to trigger download
            document.body.appendChild(a);
            a.click();

            // Cleanup
            document.body.removeChild(a);
        },
        convertToCSV1(dataArray) {
            const row = dataArray.map(obj => Object.values(obj).join(',')).join(',');
            return row;
        }
    },

    mounted() {
        this.foresterName = this.getForesterName
    },


}
</script>

<style scoped lang="scss">
.text-forest {
    color: rgb(57 145 112);
}
@media screen and (min-width: 992px){
    .right__side_bar {
        position: sticky;
        top: 16px;
        z-index: 1000;
        height: calc(100vh - 30px);
    }
}
</style>