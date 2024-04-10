<template>
    <div
        class="modal fade"
        id="macket14_16_WS"
        tabindex="-1"
        aria-labelledby="macket14_16_WSLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket14_16_WSLabel">
                        14. ბალახეული მცენარეები და კენკროვნები
                    </h1>
                    <button type="button" id="close-btn14" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="accounting_category">
                                აღრიცხვის კატეგორია
                            </label>

                            <select
                                v-model="accounting_category"
                                class="form-select"
                                id="accounting_category"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getAccountingCategory"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="plants_type">
                                აღრიცხვის კატეგორია
                            </label>

                            <select
                                v-model="plants_type"
                                class="form-select"
                                id="plants_type"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getPlantsType"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="coverage_percent">
                                5.1 გამოსავლიანობის პროცენტი
                            </label>

                            <input
                                v-model="coverage_percent"
                                type="number"
                                class="form-control"
                                id="coverage_percent"
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
    name: "MacketModal14_16_WS",

    data() {
        return {
            arr: null,
            accounting_category: '',
            plants_type: '',
            coverage_percent: null,

            acceptClear: false
        }
    },

    props: {
        params: Object
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getAccountingCategory',
            'getPlantsType'
        ]),

        macket() {
            return this.getWorkSpace
                .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[15][0] || []
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
                id: 14,
                accounting_category: this.accounting_category,
                plants_type: this.plants_type,
                coverage_percent: this.coverage_percent
            }

            if (!this.arr.mackets || !this.arr.mackets[15]) {
               this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[15] = [macketObj]
            } else {
                this.arr.mackets[15] = [macketObj]
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)

            document.querySelector('#close-btn14').click()
        },

        clear() {
            this.accounting_category = ''
            this.plants_type = ''
            this.coverage_percent = ''

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

        if (!this.arr.mackets || !this.arr.mackets[15]) {
           this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
        }

        let currentArr = this.getWorkSpace
            .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
            .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
            .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
            .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
            .find(item => item.id === parseInt(this.$route.params.id)).mackets[15]

        if (!(currentArr && currentArr[0] && (
            currentArr[0].accounting_category !== '' ||
            currentArr[0].plants_type !== '' ||
            currentArr[0].coverage_percent !== null
        ))) {
            this.add()
        }

        if (this.macket.accounting_category) {
            this.accounting_category = this.macket.accounting_category
        }
        if (this.macket.plants_type) {
            this.plants_type = this.macket.plants_type
        }
        if (this.macket.coverage_percent) {
            this.coverage_percent = this.macket.coverage_percent
        }
    }

}
</script>

<style scoped lang="scss">

</style>