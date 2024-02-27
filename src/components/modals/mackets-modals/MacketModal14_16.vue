<template>
    <div
        class="modal fade"
        id="macket14_16"
        tabindex="-1"
        aria-labelledby="macket14_16Label"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket14_16Label">
                        ახალი ლიტერის დამატება
                    </h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="accounting_category">
                                აღრიცხვის კატეგორია
                            </label>

                            <select
                                v-model="accounting_category"
                                class="form-select"
                                id="accounting_category"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getAccountingCategory"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="plants_type">
                                აღრიცხვის კატეგორია
                            </label>

                            <select
                                v-model="plants_type"
                                class="form-select"
                                id="plants_type"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getPlantsType"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="coverage_percent">
                                5.1 გამოსავლიანობის პროცენტი
                            </label>

                            <input
                                v-model="coverage_percent"
                                type="number"
                                class="form-control"
                                id="coverage_percent"
                            >
                        </div>
                    </div>

                </div>

                <div class="modal-footer border-0 justify-content-center">
                    <button
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
    name: "MacketModal14_16",

    data() {
        return {
            arr: null,
            accounting_category: '',
            plants_type: '',
            coverage_percent: null
        }
    },

    props: {
        params: Object
    },

    computed: {
        ...mapGetters([
            'getForestArea',
            'getAccountingCategory',
            'getPlantsType'
        ])
    },

    methods: {
        add() {
            this.arr = this.getForestArea
                .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
                .find(item => item.id === parseInt(this.params.quarterID)).quarters
                .find(item => item.id === parseInt(this.params.literID)).liters
                .find(item => item.id === parseInt(this.params.macketID))

            let macketObj = {
                id: 14,
                accounting_category: this.accounting_category,
                plants_type: this.plants_type,
                coverage_percent: this.coverage_percent
            }

            if (!this.arr.mackets || !this.arr.mackets[15]) {
                this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[15] = [macketObj]
            } else {
                this.arr.mackets[15] = [macketObj]
            }

            this.$store.dispatch('setForestArea', this.getForestArea)
        },
    },

}
</script>

<style scoped lang="scss">

</style>