<template>
    <div
        class="modal fade"
        id="macket16_15_WS"
        tabindex="-1"
        aria-labelledby="macket16_15_WSLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket16_15_WSLabel">
                        16. არამერქნული ნედლელი
                    </h1>
                    <button type="button" id="close-btn16" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="raw_material_category">
                                ნედლეულის კატეგორია
                            </label>

                            <select
                                v-model="raw_material_category"
                                class="form-select"
                                id="raw_material_category"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getRawMaterialCategory"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="woody_species">
                                ნედლეულის კატეგორია
                            </label>

                            <select
                                v-model="woody_species"
                                class="form-select"
                                id="woody_species"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getWoodySpecies"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="year">
                                ხნოვანება, წელი
                            </label>

                            <input
                                v-model="year"
                                type="number"
                                class="form-control"
                                id="year"
                            >
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="height">
                                სიმაღლე, 0,1მ სიზუსტით
                            </label>

                            <input
                                v-model="height"
                                type="number"
                                class="form-control"
                                id="height"
                            >
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="unit">
                                ზომის ერთეული
                            </label>

                            <select
                                v-model="unit"
                                class="form-select"
                                id="unit"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getUnit"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="yield">
                                მოსავლიანობა 1 ჰა-ზე სიზუსტით 0,1-მდე
                            </label>

                            <input
                                v-model="yield_accuracy"
                                type="number"
                                class="form-control"
                                id="yield"
                            >
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="accessible">
                                მისადგომი შეგროვებისათვის
                            </label>

                            <select
                                v-model="accessible"
                                class="form-select"
                                id="accessible"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getAccessible"
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
    name: "MacketModal16_15_WS",

    data() {
        return {
            arr: null,
            raw_material_category: '',
            woody_species: '',
            year: null,
            height: null,
            unit: '',
            yield_accuracy: null,
            accessible: ''
        }
    },

    props: {
        params: Object
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getRawMaterialCategory',
            'getWoodySpecies',
            'getUnit',
            'getAccessible'
        ])
    },

    methods: {
        add() {
            this.arr = this.getWorkSpace
                .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
                .find(item => item.id === parseInt(this.$route.params.id))

            let macketObj = {
                id: 16,
                raw_material_category: this.raw_material_category,
                woody_species: this.woody_species,
                year: this.year,
                height: this.height,
                unit: this.unit,
                yield_accuracy: this.yield_accuracy,
                accessible: this.accessible
            }

            if (!this.arr.mackets || !this.arr.mackets[14]) {
                this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[14] = [macketObj]
            } else {
                this.arr.mackets[14] = [macketObj]
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)

            document.querySelector('#close-btn16').click()
        },
    },

    mounted() {
        this.arr = this.getWorkSpace
            .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
            .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
            .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
            .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
            .find(item => item.id === parseInt(this.$route.params.id))

        if (!this.arr.mackets || !this.arr.mackets[14]) {
            this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
        }

        let currentArr = this.getWorkSpace
            .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
            .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
            .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
            .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
            .find(item => item.id === parseInt(this.$route.params.id)).mackets[14]

        if (!(currentArr && currentArr[0] && (
            currentArr[0].raw_material_category !== '' ||
            currentArr[0].woody_species !== '' ||
            currentArr[0].year !== null ||
            currentArr[0].height !== null ||
            currentArr[0].unit !== '' ||
            currentArr[0].yield_accuracy !== null ||
            currentArr[0].accessible !== ''
        ))) {
            this.add()
        }
    }

}
</script>

<style scoped lang="scss">

</style>