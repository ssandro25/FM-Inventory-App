<template>
    <div
        class="modal fade"
        id="macket1_WS"
        tabindex="-1"
        aria-labelledby="macket1_WSLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket1_WSLabel">
                        1. მიწის ზოგადი
                    </h1>
                    <button type="button" id="close-btn1-ws" class="btn-close btn-close-white" data-bs-dismiss="modal"
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
    name: "MacketModal1_WS",

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
            area: '',

            acceptClear: false
        }
    },

    props: {
        params: Object
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getSoilCategory',
            'getLongTermUseLease',
            'getGfdu',
            'getExposition',
            'getInclination',
            'getElevation',
            'getErosionType',
            'getErosionDegree'
        ]),

        macket() {
            return this.getWorkSpace
                .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[0][0] || []
        },

        disabledClearBtn() {
            return (
                this.soil_category === '' &&
                this.long_term_use_lease === '' &&
                this.gfdu === '' &&
                this.exposition === '' &&
                this.inclination === '' &&
                this.elevation === '' &&
                this.erosion_type === '' &&
                this.erosion_degree === '' &&
                this.area === ''
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

            if (!this.arr.mackets || !this.arr.mackets[0]) {
                this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[0] = [macketObj]
            } else {
                this.arr.mackets[0] = [macketObj]
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)

            document.querySelector('#close-btn1-ws').click()
        },

        clear() {
            this.soil_category = ''
            this.long_term_use_lease = ''
            this.gfdu = ''
            this.exposition = ''
            this.inclination = ''
            this.elevation = ''
            this.erosion_type = ''
            this.erosion_degree = ''
            this.area = ''

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

        if (!this.arr.mackets || !this.arr.mackets[0]) {
            this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
        }

        let currentArr = this.getWorkSpace
            .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
            .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
            .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
            .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
            .find(item => item.id === parseInt(this.$route.params.id)).mackets[0]

        if (!(currentArr && currentArr[0] && (
            currentArr[0].soil_category !== '' ||
            currentArr[0].long_term_use_lease !== '' ||
            currentArr[0].gfdu !== '' ||
            currentArr[0].exposition !== '' ||
            currentArr[0].inclination !== '' ||
            currentArr[0].elevation !== '' ||
            currentArr[0].erosion_type !== '' ||
            currentArr[0].erosion_degree !== '' ||
            currentArr[0].area !== ''
        ))) {
            this.add()
        }

        if (this.macket.soil_category) {
            this.soil_category = this.macket.soil_category
        }
        if (this.macket.long_term_use_lease) {
            this.long_term_use_lease = this.macket.long_term_use_lease
        }
        if (this.macket.gfdu) {
            this.gfdu = this.macket.gfdu
        }
        if (this.macket.exposition) {
            this.exposition = this.macket.exposition
        }
        if (this.macket.inclination) {
            this.inclination = this.macket.inclination
        }
        if (this.macket.elevation) {
            this.elevation = this.macket.elevation
        }
        if (this.macket.erosion_type) {
            this.erosion_type = this.macket.erosion_type
        }
        if (this.macket.erosion_degree) {
            this.erosion_degree = this.macket.erosion_degree
        }
        if (this.macket.area) {
            this.area = this.macket.area
        }
    }
}
</script>

<style scoped lang="scss">

</style>