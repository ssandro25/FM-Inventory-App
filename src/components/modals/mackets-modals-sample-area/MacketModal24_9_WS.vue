<template>
    <div
        class="modal fade"
        id="macket24_9_WS"
        tabindex="-1"
        aria-labelledby="macket24_9_WSLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket24_9_WSLabel">
                        24. ნიადაგის დახასიათება
                    </h1>
                    <button type="button" id="close-btn24" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="soil_character">
                                24.1. ნიადაგის ჯგუფი
                            </label>

                            <select
                                v-model="soil_character"
                                class="form-select"
                                id="soil_character"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getSoilCharacter"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="soil_mechanical_composition">
                                24.2. ნიადაგის მექანიკური შემადგენლობა
                            </label>

                            <select
                                v-model="soil_mechanical_composition"
                                class="form-select"
                                id="soil_mechanical_composition"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getSoilMechanicalComposition"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="moisture_degree">
                                24.3. სინესტის ხარისხი
                            </label>

                            <select
                                v-model="moisture_degree"
                                class="form-select"
                                id="moisture_degree"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getMoistureDegree"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="chords_quality">
                                24.4. დაკორდების ხარისხი
                            </label>

                            <select
                                v-model="chords_quality"
                                class="form-select"
                                id="chords_quality"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getChordsQuality"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="soil_density">
                                24.5. ნიადაგის სიმკვრივე
                            </label>

                            <select
                                v-model="soil_density"
                                class="form-select"
                                id="soil_density"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getSoilDensity"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="mother_rock_coverage">
                                24.6. დედაქანის დაფარულობის %
                            </label>

                            <input
                                v-model="mother_rock_coverage"
                                type="number"
                                class="form-control"
                                id="mother_rock_coverage"
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
    name: "MacketModal24_9_WS",

    data() {
        return {
            arr: null,
            soil_character: '',
            soil_mechanical_composition: '',
            moisture_degree: '',
            chords_quality: '',
            soil_density: '',
            mother_rock_coverage: '',

            acceptClear: false
        }
    },

    props: {
        params: Object
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getSoilCharacter',
            'getSoilMechanicalComposition',
            'getMoistureDegree',
            'getChordsQuality',
            'getSoilDensity'
        ]),

        macket() {
            return this.getWorkSpace
                .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[8][0] || []
        },

        disabledClearBtn() {
            return (
                this.soil_character === '' &&
                this.soil_mechanical_composition === '' &&
                this.moisture_degree === '' &&
                this.chords_quality === '' &&
                this.soil_density === '' &&
                this.mother_rock_coverage === ''
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
                id: 24,
                soil_character: this.soil_character,
                soil_mechanical_composition: this.soil_mechanical_composition,
                moisture_degree: this.moisture_degree,
                chords_quality: this.chords_quality,
                soil_density: this.soil_density,
                mother_rock_coverage: this.mother_rock_coverage
            }

            if (!this.arr.mackets || !this.arr.mackets[8]) {
                 this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[8] = [macketObj]
            } else {
                this.arr.mackets[8] = [macketObj]
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)

            document.querySelector('#close-btn24').click()
        },

        clear() {
            this.soil_character = ''
            this.soil_mechanical_composition = ''
            this.moisture_degree = ''
            this.chords_quality = ''
            this.soil_density = ''
            this.mother_rock_coverage = ''

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

        if (!this.arr.mackets || !this.arr.mackets[8]) {
             this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
        }

        let currentArr = this.getWorkSpace
            .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
            .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
            .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
            .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
            .find(item => item.id === parseInt(this.$route.params.id)).mackets[8]

        if (!(currentArr && currentArr[0] && (
            currentArr[0].soil_character !== '' ||
            currentArr[0].soil_mechanical_composition !== '' ||
            currentArr[0].moisture_degree !== '' ||
            currentArr[0].chords_quality !== '' ||
            currentArr[0].soil_density !== '' ||
            currentArr[0].mother_rock_coverage !== ''
        ))) {
            this.add()
        }

        if (this.macket.soil_character) {
            this.soil_character = this.macket.soil_character
        }
        if (this.macket.soil_mechanical_composition) {
            this.soil_mechanical_composition = this.macket.soil_mechanical_composition
        }
        if (this.macket.moisture_degree) {
            this.moisture_degree = this.macket.moisture_degree
        }
        if (this.macket.chords_quality) {
            this.chords_quality = this.macket.chords_quality
        }
        if (this.macket.soil_density) {
            this.soil_density = this.macket.soil_density
        }
        if (this.macket.mother_rock_coverage) {
            this.mother_rock_coverage = this.macket.mother_rock_coverage
        }
    }

}
</script>

<style scoped lang="scss">

</style>