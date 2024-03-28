<template>
    <div
        class="modal fade"
        id="macket28_12"
        tabindex="-1"
        aria-labelledby="macket28_12Label"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket28_12Label">
                        28. გზით უზრუნველყოფა
                    </h1>
                    <button type="button" id="close-btn28" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="accessibility_category">
                                28.1. მისადგომლობის კატეგორია
                            </label>

                            <select
                                v-model="accessibility_category"
                                class="form-select"
                                id="accessibility_category"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getAccessibilityCategory"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="transport_type">
                                28.2. ტრანსპორტის სახე
                            </label>

                            <select
                                v-model="transport_type"
                                class="form-select"
                                id="transport_type"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getTransportType"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="road_away">
                                28.3. გზიდან დაშორება
                            </label>

                            <input
                                v-model="road_away"
                                type="number"
                                class="form-control"
                                id="road_away"
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
    name: "MacketModal28_12",

    data() {
        return {
            arr: null,
            accessibility_category: '',
            transport_type: '',
            road_away: null
        }
    },

    props: {
        params: Object
    },

    computed: {
        ...mapGetters([
            'getForestArea',
            'getAccessibilityCategory',
            'getTransportType'
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
                id: 28,
                accessibility_category: this.accessibility_category,
                transport_type: this.transport_type,
                road_away: this.road_away
            }

            if (!this.arr.mackets || !this.arr.mackets[11]) {
                this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[11] = [macketObj]
            } else {
                this.arr.mackets[11] = [macketObj]
            }

            this.$store.dispatch('setForestArea', this.getForestArea)

            document.querySelector('#close-btn28').click()
        },
    },

    mounted() {
        this.arr = this.getForestArea
            .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
            .find(item => item.id === parseInt(this.params.quarterID)).quarters
            .find(item => item.id === parseInt(this.params.literID)).liters
            .find(item => item.id === parseInt(this.params.macketID))

        if (!this.arr.mackets || !this.arr.mackets[11]) {
            this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
        }

        let currentArr = this.getForestArea
            .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
            .find(item => item.id === parseInt(this.params.quarterID)).quarters
            .find(item => item.id === parseInt(this.params.literID)).liters
            .find(item => item.id === parseInt(this.params.macketID)).mackets[11]

        if (!(currentArr && currentArr[0] && (
            currentArr[0].accessibility_category !== '' ||
            currentArr[0].transport_type !== '' ||
            currentArr[0].road_away !== null
        ))) {
            this.add()
        }
    }
}
</script>

<style scoped lang="scss">

</style>