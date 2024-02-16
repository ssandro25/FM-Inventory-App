<template>
    <div
        class="modal fade"
        id="addNewQuarter"
        tabindex="-1"
        aria-labelledby="addNewQuarterLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="addNewQuarterLabel">
                        ახალი კვარტლის დამატება
                    </h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex align-items-lg-center flex-lg-row flex-column gap-2">
                        <label
                            for="new_quarter"
                            class="form-label modal__label"
                        >
                            კვარტალი:
                        </label>

                        <input
                            v-model="new_quarter"
                            type="text"
                            class="form-control"
                            id="new_quarter"
                        >
                    </div>
                </div>

                <div class="modal-footer border-0 justify-content-center">
                    <button
                        :disabled="!new_quarter"
                        type="button"
                        class="btn btn-success col-lg-6 col-12"
                        @click="add()"
                    >
                        დამატება
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import {mapGetters} from "vuex";

export default {
    name: "AddNewQuarter",

    data() {
        return {
            new_quarter: '',
            arr: null
        }
    },

    props: {
        params: Object
    },

    methods: {
        // add() {
        //     this.arr = this.getForestArea
        //         .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
        //         .find(item => item.id === parseInt(this.params.quarterID))
        //
        //     let quarterObj = {
        //         id: this.arr.quarters && this.arr.quarters.length ? this.arr.quarters.length + 1 : 1,
        //         title: this.new_quarter
        //     }
        //
        //     if (!this.arr.quarters) {
        //         this.arr.quarters = [quarterObj];
        //     } else {
        //         this.arr.quarters.push(quarterObj)
        //     }
        //
        //     this.$store.dispatch('setForestArea', this.getForestArea)
        //     this.new_quarter = ''
        //     // console.log(typeof this.arr, this.arr.quarters)
        // },


        add() {
            let forestArea = JSON.parse(localStorage.getItem('forestArea'));

            let forestly = forestArea.find(item => item.id === parseInt(this.params.forestAreaID)).forestry
                .find(item => item.id === parseInt(this.params.quarterID));

            let newQuarter = {
                id: forestly.quarters && forestly.quarters.length ? forestly.quarters.length + 1 : 1,
                title: this.new_quarter
            };

            if (!forestly.quarters) {
                forestly.quarters = [newQuarter];
            } else {
                forestly.quarters.push(newQuarter);
            }

            // Обновляем данные в localStorage
            localStorage.setItem('forestArea', JSON.stringify(forestArea));

            // Очищаем поле ввода
            this.new_quarter = '';

            // Обновляем список кварталов
            this.updateQuarters();
        },


        updateQuarters() {
            let forestArea = JSON.parse(localStorage.getItem('forestArea'));
            let forestly = forestArea.find(item => item.id === parseInt(this.params.forestAreaID)).forestry
                .find(item => item.id === parseInt(this.params.quarterID));

            this.quartersList = forestly?.quarters || [];
        }
    },

    computed: {
        ...mapGetters([
            'getForestArea'
        ])
    },

    // mounted() {
    //     this.add()
    // }

}
</script>


<style scoped lang="scss">

</style>