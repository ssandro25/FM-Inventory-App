<template>
    <div
        class="modal fade"
        id="macket32_7_WS"
        tabindex="-1"
        aria-labelledby="macket32_7_WSLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket32_7_WSLabel">
                        32. ქვეტყე
                    </h1>
                    <button type="button" id="close-btn32" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="distribution">
                                განფენილობა
                            </label>

                            <select
                                v-model="distribution"
                                class="form-select"
                                id="distribution"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getDistribution"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="distribution_percent">
                                დაფ. %
                            </label>

                            <select
                                v-model="distribution_percent"
                                class="form-select"
                                id="distribution_percent"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getDistributionPercent"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="tree_type1">
                                სახეობა 1
                            </label>

                            <select
                                v-model="tree_type1"
                                class="form-select"
                                id="tree_type1"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getTreeType"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="tree_type2">
                                სახეობა 2
                            </label>

                            <select
                                v-model="tree_type2"
                                class="form-select"
                                id="tree_type2"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getTreeType"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="tree_type3">
                                სახეობა 3
                            </label>

                            <select
                                v-model="tree_type3"
                                class="form-select"
                                id="tree_type3"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getTreeType"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="tree_height">
                                სიმაღლე 3
                            </label>

                            <select
                                v-model="tree_height"
                                class="form-select"
                                id="tree_height"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getTreeHeight"
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
    name: "MacketModal32_7_WS",

    data() {
        return {
            arr: null,
            distribution: '',
            distribution_percent: '',
            tree_type1: '',
            tree_type2: '',
            tree_type3: '',
            tree_height: '',

            acceptClear: false
        }
    },

    props: {
        params: Object
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getDistribution',
            'getDistributionPercent',
            'getTreeType',
            'getTreeHeight'
        ]),

        macket() {
            return this.getWorkSpace
                .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[6][0] || []
        },

        disabledClearBtn() {
            return (
                this.distribution === '' &&
                this.distribution_percent === '' &&
                this.tree_type1 === '' &&
                this.tree_type2 === '' &&
                this.tree_type3 === '' &&
                this.tree_height === ''
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
                id: 32,
                distribution: this.distribution,
                distribution_percent: this.distribution_percent,
                tree_type1: this.tree_type1,
                tree_type2: this.tree_type2,
                tree_type3: this.tree_type3,
                tree_height: this.tree_height
            }

            if (!this.arr.mackets || !this.arr.mackets[6]) {
                  this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[6] = [macketObj]
            } else {
                this.arr.mackets[6] = [macketObj]
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)

            document.querySelector('#close-btn32').click()
        },

        clear() {
            this.distribution = ''
            this.distribution_percent = ''
            this.tree_type1 = ''
            this.tree_type2 = ''
            this.tree_type3 = ''
            this.tree_height = ''

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

        if (!this.arr.mackets || !this.arr.mackets[6]) {
              this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
        }

        let currentArr = this.getWorkSpace
            .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
            .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
            .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
            .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
            .find(item => item.id === parseInt(this.$route.params.id)).mackets[6]

        if (!(currentArr && currentArr[0] && (
            currentArr[0].distribution !== '' ||
            currentArr[0].distribution_percent !== '' ||
            currentArr[0].tree_type1 !== '' ||
            currentArr[0].tree_type2 !== '' ||
            currentArr[0].tree_type3 !== '' ||
            currentArr[0].tree_height !== ''
        ))) {
            this.add()
        }

        if (this.macket.distribution) {
            this.distribution = this.macket.distribution
        }
        if (this.macket.distribution_percent) {
            this.distribution_percent = this.macket.distribution_percent
        }
        if (this.macket.tree_type1) {
            this.tree_type1 = this.macket.tree_type1
        }
        if (this.macket.tree_type2) {
            this.tree_type2 = this.macket.tree_type2
        }
        if (this.macket.tree_type3) {
            this.tree_type3 = this.macket.tree_type3
        }
        if (this.macket.tree_height) {
            this.tree_height = this.macket.tree_height
        }
    }

}
</script>

<style scoped lang="scss">

</style>