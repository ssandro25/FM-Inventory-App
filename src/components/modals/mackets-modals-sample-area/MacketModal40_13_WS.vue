<template>
    <div
        class="modal fade"
        id="macket40_13_WS"
        tabindex="-1"
        aria-labelledby="macket40_13_WSLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket40_13_WSLabel">
                        40. შეფასება
                    </h1>
                    <button type="button" id="close-btn40" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="disaster_type">
                                40.1. ტიპი
                            </label>

                            <select
                                v-model="disaster_type"
                                class="form-select"
                                id="disaster_type"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getDisasterType"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="sustainability">
                                40.1. მდგრადობა
                            </label>

                            <select
                                v-model="sustainability"
                                class="form-select"
                                id="sustainability"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getSustainability"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="fire_hazard_class">
                                40.3. ხანძრის საშიშროების კლასი
                            </label>

                            <input
                                v-model="fire_hazard_class"
                                type="number"
                                class="form-control"
                                id="fire_hazard_class"
                            >
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="damage_class">
                                40.4. დაზიანების კლასი
                            </label>

                            <input
                                v-model="damage_class"
                                type="number"
                                class="form-control"
                                id="damage_class"
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
    name: "MacketModal40_13_WS",

    data() {
        return {
            arr: null,
            disaster_type: '',
            sustainability: '',
            fire_hazard_class: null,
            damage_class: null
        }
    },

    props: {
        params: Object
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getDisasterType',
            'getSustainability'
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
                id: 40,
                disaster_type: this.disaster_type,
                sustainability: this.sustainability,
                fire_hazard_class: this.fire_hazard_class,
                damage_class: this.damage_class
            }

            if (!this.arr.mackets || !this.arr.mackets[12]) {
                 this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[12] = [macketObj]
            } else {
                this.arr.mackets[12] = [macketObj]
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)

            document.querySelector('#close-btn40').click()
        },
    },

    mounted() {
        this.arr = this.getWorkSpace
            .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
            .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
            .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
            .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
            .find(item => item.id === parseInt(this.$route.params.id))

        if (!this.arr.mackets || !this.arr.mackets[12]) {
             this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
        }

        let currentArr = this.getWorkSpace
            .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
            .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
            .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
            .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
            .find(item => item.id === parseInt(this.$route.params.id)).mackets[12]

        if (!(currentArr && currentArr[0] && (
            currentArr[0].disaster_type !== '' ||
            currentArr[0].sustainability !== '' ||
            currentArr[0].fire_hazard_class !== null ||
            currentArr[0].damage_class !== null
        ))) {
            this.add()
        }
    }

}
</script>

<style scoped lang="scss">

</style>