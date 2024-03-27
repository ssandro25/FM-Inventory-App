<template>
    <div
        class="modal fade"
        id="macket24_9"
        tabindex="-1"
        aria-labelledby="macket24_9Label"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket24_9Label">
                        ახალი ლიტერის დამატება
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
    name: "MacketModal24_9",

    data() {
        return {
            arr: null,
            soil_character: '',
            soil_mechanical_composition: '',
            moisture_degree: '',
            chords_quality: '',
            soil_density: '',
            mother_rock_coverage: ''
        }
    },

    props: {
        params: Object
    },

    computed: {
        ...mapGetters([
            'getForestArea',
            'getSoilCharacter',
            'getSoilMechanicalComposition',
            'getMoistureDegree',
            'getChordsQuality',
            'getSoilDensity'
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
                id: 24,
                soil_character: this.soil_character,
                soil_mechanical_composition: this.soil_mechanical_composition,
                moisture_degree: this.moisture_degree,
                chords_quality: this.chords_quality,
                soil_density: this.soil_density,
                mother_rock_coverage: this.mother_rock_coverage
            }

            if (!this.arr.mackets || !this.arr.mackets[8]) {
                this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[8] = [macketObj]
            } else {
                this.arr.mackets[8] = [macketObj]
            }

            this.$store.dispatch('setForestArea', this.getForestArea)

            document.querySelector('#close-btn24').click()
        },
    },

    mounted() {
        this.arr = this.getForestArea
            .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
            .find(item => item.id === parseInt(this.params.quarterID)).quarters
            .find(item => item.id === parseInt(this.params.literID)).liters
            .find(item => item.id === parseInt(this.params.macketID))

        if (!this.arr.mackets || !this.arr.mackets[8]) {
            this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
        }

        let currentArr = this.getForestArea
            .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
            .find(item => item.id === parseInt(this.params.quarterID)).quarters
            .find(item => item.id === parseInt(this.params.literID)).liters
            .find(item => item.id === parseInt(this.params.macketID)).mackets[8]

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
    }

}
</script>

<style scoped lang="scss">

</style>