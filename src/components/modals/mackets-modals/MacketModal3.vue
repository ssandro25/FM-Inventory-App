<template>
    <div
        class="modal fade"
        id="macket3"
        tabindex="-1"
        aria-labelledby="macket3Label"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket3Label">
                        ახალი ლიტერის დამატება
                    </h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="dominant_species">
                                3.1 გაბატონებული სახეობა
                            </label>

                            <select
                                v-model="dominant_species"
                                class="form-select"
                                id="dominant_species"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getDominantSpecies"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="site_index">
                                3.2 ბონიტეტი
                            </label>

                            <select
                                v-model="site_index"
                                class="form-select"
                                id="site_index"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getSiteIndex"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="site_index_type">
                                3.3 ბონიტეტის სახეობა
                            </label>

                            <select
                                v-model="site_index_type"
                                class="form-select"
                                id="site_index_type"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getSiteIndexType"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="forest_type">
                                3.4 ტყის ტიპი
                            </label>

                            <select
                                v-model="forest_type"
                                class="form-select"
                                id="forest_type"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getForestType"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="location_type">
                                3.5 ადგილსამყოფელის ტიპი
                            </label>

                            <select
                                v-model="location_type"
                                class="form-select"
                                id="location_type"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getLocationType"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="cutting_year">
                                3.6 ჭრის წელი
                            </label>

                            <input
                                v-model="cutting_year"
                                type="number"
                                class="form-control"
                                id="cutting_year"
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
    name: "MacketModal3",

    data() {
        return {
            arr: null,
            dominant_species: '',
            site_index: '',
            site_index_type: '',
            forest_type: '',
            location_type: '',
            cutting_year: null
        }
    },

    props: {
        params: Object
    },

    computed: {
        ...mapGetters([
            'getForestArea',
            'getDominantSpecies',
            'getSiteIndex',
            'getSiteIndexType',
            'getForestType',
            'getLocationType',
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
                id: 3,
                dominant_species: this.dominant_species,
                site_index: this.site_index,
                site_index_type: this.site_index_type,
                forest_type: this.forest_type,
                location_type: this.location_type,
                cutting_year: this.cutting_year
            }

            if (!this.arr.mackets || !this.arr.mackets[2]) {
                this.arr.mackets = [[], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[2] = [macketObj]
            } else {
                this.arr.mackets[2] = [macketObj]
            }

            this.$store.dispatch('setForestArea', this.getForestArea)
        }

        // add() {
        //     const { forestAreaID, quarterID, literID, macketID } = this.params;
        //     const id = parseInt(macketID);
        //
        //     const forestArea = this.getForestArea.find(item => item.id === parseInt(forestAreaID));
        //     const forestry = forestArea?.forestry.find(item => item.id === parseInt(quarterID));
        //     const quarters = forestry?.quarters.find(item => item.id === parseInt(literID));
        //     const liters = quarters?.liters.find(item => item.id === id);
        //
        //     if (!liters) return;
        //
        //     let macketObj = {
        //         id: 3,
        //         dominant_species: this.dominant_species,
        //         site_index: this.site_index,
        //         site_index_type: this.site_index_type,
        //         forest_type: this.forest_type,
        //         location_type: this.location_type,
        //         cutting_year: this.cutting_year
        //     };
        //
        //     // if (!liters.mackets || liters.mackets.length < 3) {
        //     //     liters.mackets = [[], [], []];
        //     // }
        //     if (!liters.mackets) {
        //         liters.mackets = [];
        //     }
        //
        //     liters.mackets[2] = macketObj;
        //
        //     this.$store.dispatch('setForestArea', this.getForestArea);
        // }
    },

}
</script>

<style scoped lang="scss">

</style>