<template>
    <div
        class="modal fade"
        id="macket2"
        tabindex="-1"
        aria-labelledby="macket2Label"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket2Label">
                        ახალი ლიტერის დამატება
                    </h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="activity1">
                                2.1 ღონისძიება I
                            </label>

                            <select
                                v-model="activity1"
                                class="form-select"
                                id="activity1"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getActivity"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="activity_percent">
                                2.2 %
                            </label>

                            <input
                                v-model="activity_percent"
                                type="number"
                                class="form-control"
                                id="activity_percent"
                            >
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="activity2">
                                2.3 ღონისძიება II
                            </label>

                            <select
                                v-model="activity2"
                                class="form-select"
                                id="activity2"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getActivity"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="activity3">
                                2.3 ღონისძიება III
                            </label>

                            <select
                                v-model="activity3"
                                class="form-select"
                                id="activity3"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getActivity"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="target_species">
                                2.5 მიზნობრივი სახეობა
                            </label>

                            <select
                                v-model="target_species"
                                class="form-select"
                                id="target_species"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getTargetSpecies"
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
    name: "MacketModal2",

    data() {
        return {
            arr: null,
            activity1: '',
            activity2: '',
            activity3: '',
            activity_percent: null,
            target_species: ''
        }
    },

    props: {
        params: Object
    },

    computed: {
        ...mapGetters([
            'getForestArea',
            'getActivity',
            'getTargetSpecies'
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
                id: 2,
                activity1: this.activity1,
                activity2: this.activity2,
                activity3: this.activity3,
                activity_percent: this.activity_percent,
                target_species: this.target_species
            }

            if (!this.arr.mackets) {
                this.arr.mackets[1] = [macketObj];
            } else {
                this.arr.mackets[1] = [macketObj]
            }

            this.$store.dispatch('setForestArea', this.getForestArea)
        }
    },

}
</script>

<style scoped lang="scss">

</style>