<template>
    <div
        class="modal fade"
        id="macket32_7"
        tabindex="-1"
        aria-labelledby="macket32_7Label"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket32_7Label">
                        ახალი ლიტერის დამატება
                    </h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="distribution">
                                განფენილობა
                            </label>

                            <select
                                v-model="distribution"
                                class="form-select"
                                id="distribution"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getDistribution"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="distribution_percent">
                                დაფ. %
                            </label>

                            <select
                                v-model="distribution_percent"
                                class="form-select"
                                id="distribution_percent"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getDistributionPercent"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="tree_type1">
                                სახეობა 1
                            </label>

                            <select
                                v-model="tree_type1"
                                class="form-select"
                                id="tree_type1"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getTreeType"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
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
    name: "MacketModal32_7",

    data() {
        return {
            arr: null,
            distribution: '',
            distribution_percent: '',
            tree_type1: ''
        }
    },

    props: {
        params: Object
    },

    computed: {
        ...mapGetters([
            'getForestArea',
            'getDistribution',
            'getDistributionPercent',
            'getTreeType'
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
                id: 32,
                distribution: this.distribution,
                distribution_percent: this.distribution_percent,
                tree_type1: this.tree_type1
            }

            if (!this.arr.mackets || !this.arr.mackets[6]) {
                this.arr.mackets = [[], [], [], [], [], [], []]
                this.arr.mackets[6] = [macketObj]
            } else {
                this.arr.mackets[6] = [macketObj]
            }

            this.$store.dispatch('setForestArea', this.getForestArea)
        },
    },

}
</script>

<style scoped lang="scss">

</style>