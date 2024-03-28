<template>
    <div
        class="modal fade"
        id="macket2_WS"
        tabindex="-1"
        aria-labelledby="macket2_WSLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket2_WSLabel">
                        2. დაპროექტებული ღონისძიებები
                    </h1>
                    <button type="button" id="close-btn2" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="activity1">
                                2.1 ღონისძიება I
                            </label>

                            <select
                                v-model="activity1"
                                class="form-select"
                                id="activity1"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getActivity"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="activity_percent">
                                2.2 %
                            </label>

                            <input
                                v-model="activity_percent"
                                type="number"
                                class="form-control"
                                id="activity_percent"
                            >
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="activity2">
                                2.3 ღონისძიება II
                            </label>

                            <select
                                v-model="activity2"
                                class="form-select"
                                id="activity2"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getActivity"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="activity3">
                                2.3 ღონისძიება III
                            </label>

                            <select
                                v-model="activity3"
                                class="form-select"
                                id="activity3"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getActivity"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="target_species">
                                2.5 მიზნობრივი სახეობა
                            </label>

                            <select
                                v-model="target_species"
                                class="form-select"
                                id="target_species"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getTargetSpecies"
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
    name: "MacketModal2",

    data() {
        return {
            arr: null,
            activity1: '',
            activity2: '',
            activity3: '',
            activity_percent: null,
            target_species: ''
        }
    },

    props: {
        params: Object
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getActivity',
            'getTargetSpecies'
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
                id: 2,
                activity1: this.activity1,
                activity2: this.activity2,
                activity3: this.activity3,
                activity_percent: this.activity_percent,
                target_species: this.target_species
            }

            if (!this.arr.mackets || !this.arr.mackets[1]) {
                this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[1] = [macketObj]
            } else {
                this.arr.mackets[1] = [macketObj]
            }

            this.$store.dispatch('setForestArea', this.getForestArea)

            document.querySelector('#close-btn2').click()
        }
    },

    mounted() {
        this.arr = this.getWorkSpace
            .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
            .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
            .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
            .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
            .find(item => item.id === parseInt(this.$route.params.id))

        if (!this.arr.mackets || !this.arr.mackets[1]) {
            this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
        }

        let currentArr = this.getWorkSpace
            .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
            .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
            .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
            .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
            .find(item => item.id === parseInt(this.$route.params.id)).mackets[1]

        if (!(currentArr && currentArr[0] && (
            currentArr[0].activity1 !== '' ||
            currentArr[0].activity2 !== '' ||
            currentArr[0].activity3 !== '' ||
            currentArr[0].activity_percent !== null ||
            currentArr[0].target_species !== ''
        ))) {
            this.add()
        }
    }

}
</script>

<style scoped lang="scss">

</style>