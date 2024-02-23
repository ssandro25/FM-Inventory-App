<template>
    <div
        class="modal fade"
        id="macket31_6"
        tabindex="-1"
        aria-labelledby="macket31_6Label"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket31_6Label">
                        ახალი ლიტერის დამატება
                    </h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="quantity">
                                31.1 რაოდენობა
                            </label>

                            <input
                                v-model="quantity"
                                type="number"
                                class="form-control"
                                id="quantity"
                            >
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="height">
                                31.2 სიმაღლე
                            </label>

                            <select
                                v-model="height"
                                class="form-select"
                                id="height"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getHeight"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="age">
                                31.3 ასაკი
                            </label>

                            <select
                                v-model="age"
                                class="form-select"
                                id="age"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getAge"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="coefficient1">
                                კოეფ. 1
                            </label>

                            <input
                                v-model="coefficient1"
                                type="number"
                                class="form-control"
                                id="coefficient1"
                            >
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="growing_trees_species">
                                სახეობა 1
                            </label>

                            <select
                                v-model="growing_trees_species"
                                class="form-select"
                                id="growing_trees_species"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getGrowingTreesSpecies"
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
    name: "MacketModal31_6",

    data() {
        return {
            arr: null,
            quantity: null,
            height: '',
            age: '',
            coefficient1: null,
            growing_trees_species: ''
        }
    },

    props: {
        params: Object
    },

    computed: {
        ...mapGetters([
            'getForestArea',
            'getHeight',
            'getAge',
            'getGrowingTreesSpecies'
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
                id: 31,
                quantity: this.quantity,
                height: this.height,
                age: this.age,
                coefficient1: this.coefficient1,
                growing_trees_species: this.growing_trees_species
            }

            if (!this.arr.mackets || !this.arr.mackets[5]) {
                this.arr.mackets = [[], [], [], [], [], [], []]
                this.arr.mackets[5] = [macketObj]
            } else {
                this.arr.mackets[5] = [macketObj]
            }

            this.$store.dispatch('setForestArea', this.getForestArea)
        },
    },

}
</script>

<style scoped lang="scss">

</style>