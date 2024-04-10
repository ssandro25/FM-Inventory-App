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

                <div
                    v-if="acceptClear"
                    class="mx-3 ms-auto border p-2 rounded bg-secondary-subtle"
                    style="width: max-content;"
                >
                    <p class="text-dark mb-0">
                        ნამდვილად გსურთ მაკეტის გასუფთავება? მონაცემები წაიშალება!
                    </p>

                    <div class="d-flex align-content-center justify-content-center gap-2 mt-2">
                        <button
                            type="button"
                            class="btn btn-secondary btn-sm"
                            @click="acceptClear = false"
                        >
                            გაუქმება
                        </button>

                        <button
                            type="button"
                            class="btn btn-danger btn-sm"
                            @click="clear()"
                        >
                            გასუფთავება
                        </button>
                    </div>
                </div>

                <div class="modal-footer border-0 justify-content-center">
                    <button
                        type="button"
                        class="btn btn-success col-lg-6 col-12"
                        @click="add()"
                    >
                        შენახვა
                    </button>

                    <button
                        :disabled="disabledClearBtn"
                        type="button"
                        class="btn btn-danger"
                        @click="acceptClear = true"
                    >
                        გასუფთავება
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
            accessible: '',

            acceptClear: false
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
        ]),

        macket() {
            return this.getWorkSpace
                .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[14][0] || []
        },

        disabledClearBtn() {
            return (
                this.raw_material_category === '' &&
                this.woody_species === '' &&
                this.year === null &&
                this.height === null &&
                this.unit === '' &&
                this.yield_accuracy === null &&
                this.unit === ''
            );
        }
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
                this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[14] = [macketObj]
            } else {
                this.arr.mackets[14] = [macketObj]
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)

            document.querySelector('#close-btn16').click()
        },

        clear() {
            this.raw_material_category = ''
            this.woody_species = ''
            this.year = null
            this.height = null
            this.unit = ''
            this.yield_accuracy = null
            this.accessible = ''

            this.acceptClear = false
            this.add()
        }
    },

    mounted() {
        this.arr = this.getWorkSpace
            .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
            .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
            .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
            .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
            .find(item => item.id === parseInt(this.$route.params.id))

        if (!this.arr.mackets || !this.arr.mackets[14]) {
            this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
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

        if (this.macket.raw_material_category) {
            this.raw_material_category = this.macket.raw_material_category
        }
        if (this.macket.woody_species) {
            this.woody_species = this.macket.woody_species
        }
        if (this.macket.year) {
            this.year = this.macket.year
        }
        if (this.macket.height) {
            this.height = this.macket.height
        }
        if (this.macket.unit) {
            this.unit = this.macket.unit
        }
        if (this.macket.yield_accuracy) {
            this.yield_accuracy = this.macket.yield_accuracy
        }
        if (this.macket.accessible) {
            this.accessible = this.macket.accessible
        }
    }

}
</script>

<style scoped lang="scss">

</style>