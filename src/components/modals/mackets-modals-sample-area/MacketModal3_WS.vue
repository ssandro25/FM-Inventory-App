<template>
    <div
        class="modal fade"
        id="macket3_WS"
        tabindex="-1"
        aria-labelledby="macket3_WSLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket3_WSLabel">
                        3. ტყის ზოგადი მახასიათებლები
                    </h1>
                    <button type="button" id="close-btn3" class="btn-close btn-close-white" data-bs-dismiss="modal"
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
    name: "MacketModal3_WS",

    data() {
        return {
            arr: null,
            dominant_species: '',
            site_index: '',
            site_index_type: '',
            forest_type: '',
            location_type: '',
            cutting_year: ''
        }
    },

    props: {
        params: Object
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getDominantSpecies',
            'getSiteIndex',
            'getSiteIndexType',
            'getForestType',
            'getLocationType',
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
                id: 3,
                dominant_species: this.dominant_species,
                site_index: this.site_index,
                site_index_type: this.site_index_type,
                forest_type: this.forest_type,
                location_type: this.location_type,
                cutting_year: this.cutting_year
            }

            if (!this.arr.mackets || !this.arr.mackets[2]) {
                this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[2] = [macketObj]
            } else {
                this.arr.mackets[2] = [macketObj]
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)

            document.querySelector('#close-btn3').click()
        }
    },

    mounted() {
        this.arr = this.getWorkSpace
            .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
            .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
            .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
            .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
            .find(item => item.id === parseInt(this.$route.params.id))

        if (!this.arr.mackets || !this.arr.mackets[2]) {
            this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
        }

        let currentArr = this.getWorkSpace
            .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
            .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
            .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
            .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
            .find(item => item.id === parseInt(this.$route.params.id)).mackets[2]

        if (!(currentArr && currentArr[0] && (
            currentArr[0].dominant_species !== '' ||
            currentArr[0].site_index !== '' ||
            currentArr[0].site_index_type !== '' ||
            currentArr[0].forest_type !== '' ||
            currentArr[0].location_type !== '' ||
            currentArr[0].cutting_year !== null
        ))) {
            this.add()
        }
    }

}
</script>

<style scoped lang="scss">

</style>