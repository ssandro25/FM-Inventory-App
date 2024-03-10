<template>
    <div
        class="modal fade"
        id="addNewTaxCard"
        tabindex="-1"
        aria-labelledby="addNewTaxCardLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="addNewTaxCardLabel">
                        ახალი საქაღალდის დამატება
                    </h1>
                    <button type="button" id="add_new_tax_card" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex align-items-lg-center flex-lg-row flex-column gap-2">
                        <label
                            for="new_tax_card"
                            class="form-label modal__label"
                        >
                            ჩაწერეთ სახელი
                        </label>

                        <input
                            v-model="new_tax_card"
                            type="text"
                            class="form-control"
                            id="new_folder"
                        >
                    </div>
                </div>

                <div class="modal-footer border-0 justify-content-center">
                    <button
                        :disabled="!new_tax_card"
                        type="button"
                        class="btn btn-success col-lg-6 col-12"
                        @click="add"
                    >
                        დამატება
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "AddNewTaxCard",

    data() {
        return {
            new_tax_card: '',
            arr: null
        }
    },

    methods: {
        add() {
            this.arr = this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.$route.params.id))

            let taxCardObj = {
                id: this.arr.sampleAreaArr && this.arr.sampleAreaArr.length ? this.arr.sampleAreaArr.length + 1 : 1,
                title: 'სანიმუშო ფართობის გარეშე',
                without_sample_area: true
            }

            if (!this.arr.sampleAreaArr) {
                this.arr.sampleAreaArr = [taxCardObj];
            } else {
                this.arr.sampleAreaArr.unshift(taxCardObj)
            }

            let taxCard_Obj = {
                id: this.arr.taxCardArr && this.arr.taxCardArr.length ? this.arr.taxCardArr.length + 1 : 1,
                title: this.new_tax_card,
                without_sample_area: true
            }

            if (!this.arr.taxCardArr) {
                this.arr.taxCardArr = [taxCard_Obj];
            } else {
                this.arr.taxCardArr.unshift(taxCard_Obj)
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)

            document.querySelector('#add_new_tax_card').click()
        }
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getWorkSpaceID',
            'getForestryWS_ID',
            'getQuarterWS_ID'
        ])
    }
}
</script>

<style scoped lang="scss">
.modal__label {
    min-width: 200px;
}
</style>