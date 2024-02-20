<template>
    <div
        class="modal fade"
        id="macket1"
        tabindex="-1"
        aria-labelledby="macket1Label"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket1Label">
                        ახალი ლიტერის დამატება
                    </h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="soil_category">
                                1.1 მიწის კატეგორია
                            </label>

                            <select
                                v-model="soil_category"
                                class="form-select" id="soil_category"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getSoilCategory"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="long_term_use_lease">
                                1.2 ხს
                            </label>

                            <select
                                v-model="long_term_use_lease"
                                class="form-select" id="long_term_use_lease"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getLongTermUseLease"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="gfdu">
                                1.3 გ.ფ.დ.უ.
                            </label>

                            <select
                                v-model="gfdu"
                                class="form-select" id="gfdu"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getGfdu"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="exposition">
                                1.4 ექსპოზიცია
                            </label>

                            <select
                                v-model="exposition"
                                class="form-select" id="soil_category"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getExposition"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="exposition">
                                1.5 დაქანება
                            </label>

                            <select
                                v-model="inclination"
                                class="form-select" id="soil_category"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getInclination"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="exposition">
                                1.6 ს.ზ.დ.
                            </label>

                            <select
                                v-model="elevation"
                                class="form-select" id="soil_category"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getElevation"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="erosion_type">
                                1.7 ეროზიის სახე
                            </label>

                            <select
                                v-model="erosion_type"
                                class="form-select" id="erosion_type"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getErosionType"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="erosion_degree">
                                1.8 ეროზიის ხარისხი
                            </label>

                            <select
                                v-model="erosion_degree"
                                class="form-select" id="erosion_type"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getErosionDegree"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="area">
                                1.9 ფართობი
                            </label>

                            <input
                                v-model="area"
                                type="number"
                                class="form-control"
                                id="area"
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
    name: "MacketModal1",

    data() {
        return {
            arr: null,
            soil_category: '',
            long_term_use_lease: '',
            gfdu: '',
            exposition: '',
            inclination: '',
            elevation: '',
            erosion_type: '',
            erosion_degree: '',
            area: ''
        }
    },

    props: {
        params: Object
    },

    computed: {
        ...mapGetters([
            'getForestArea',
            'getSoilCategory',
            'getLongTermUseLease',
            'getGfdu',
            'getExposition',
            'getInclination',
            'getElevation',
            'getErosionType',
            'getErosionDegree'
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
                id: 1,
                soil_category: this.soil_category,
                long_term_use_lease: this.long_term_use_lease,
                exposition : this.exposition,
                inclination: this.inclination,
                elevation: this.elevation,
                gfdu: this.gfdu,
                erosion_type: this.erosion_type,
                erosion_degree: this.erosion_degree,
                area: this.area
            }

            if (!this.arr.mackets) {
                this.arr.mackets[0] = [macketObj];
            } else {
                this.arr.mackets[0] = [macketObj]
            }

            this.$store.dispatch('setForestArea', this.getForestArea)
        }
    },

}
</script>

<style scoped lang="scss">

</style>