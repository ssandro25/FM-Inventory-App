<template>
    <div
        class="modal fade"
        id="macket37_11_WS"
        tabindex="-1"
        aria-labelledby="macket37_11_WSLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket37_11_WSLabel">
                        37. ანთროპოგენული ტრანსფორმაციის ტიპი
                    </h1>
                    <button type="button" id="close-btn37" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="anthropogenic_transformation_type">
                                37.1. ანტროპოგენული ტრანსფორმაციის ტიპი
                            </label>

                            <select
                                v-model="anthropogenic_transformation_type"
                                class="form-select"
                                id="anthropogenic_transformation_type"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getAnthropogenicTransformationType"
                                    :key="item.id"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="anthropogenic_transformation_quality">
                                37.2. ანტროპოგენული ტრანსფორმაციის ხარისხი
                            </label>

                            <select
                                v-model="anthropogenic_transformation_quality"
                                class="form-select"
                                id="anthropogenic_transformation_quality"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getAnthropogenicTransformationQuality"
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
    name: "MacketModal37_11_WS",

    data() {
        return {
            arr: null,
            anthropogenic_transformation_type: '',
            anthropogenic_transformation_quality: ''
        }
    },

    props: {
        params: Object
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getAnthropogenicTransformationType',
            'getAnthropogenicTransformationQuality'
        ]),

        macket() {
            return this.getWorkSpace
                .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[10][0] || []
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
                id: 37,
                anthropogenic_transformation_type: this.anthropogenic_transformation_type,
                anthropogenic_transformation_quality: this.anthropogenic_transformation_quality
            }

            if (!this.arr.mackets || !this.arr.mackets[10]) {
                 this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[10] = [macketObj]
            } else {
                this.arr.mackets[10] = [macketObj]
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)

            document.querySelector('#close-btn37').click()
        },
    },

    mounted() {
        this.arr = this.getWorkSpace
            .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
            .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
            .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
            .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
            .find(item => item.id === parseInt(this.$route.params.id))

        if (!this.arr.mackets || !this.arr.mackets[10]) {
             this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
        }

        let currentArr = this.getWorkSpace
            .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
            .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
            .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
            .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
            .find(item => item.id === parseInt(this.$route.params.id)).mackets[10]

        if (!(currentArr && currentArr[0] && (
            currentArr[0].anthropogenic_transformation_type !== '' ||
            currentArr[0].anthropogenic_transformation_quality !== ''
        ))) {
            this.add()
        }

        if (this.macket.anthropogenic_transformation_type) {
            this.anthropogenic_transformation_type = this.macket.anthropogenic_transformation_type
        }
        if (this.macket.anthropogenic_transformation_quality) {
            this.anthropogenic_transformation_quality = this.macket.anthropogenic_transformation_quality
        }
    }

}
</script>

<style scoped lang="scss">

</style>