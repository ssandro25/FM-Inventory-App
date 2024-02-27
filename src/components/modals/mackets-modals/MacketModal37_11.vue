<template>
    <div
        class="modal fade"
        id="macket37_11"
        tabindex="-1"
        aria-labelledby="macket37_11Label"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket37_11Label">
                        ახალი ლიტერის დამატება
                    </h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
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
    name: "MacketModal37_11",

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
            'getForestArea',
            'getAnthropogenicTransformationType',
            'getAnthropogenicTransformationQuality'
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
                id: 37,
                anthropogenic_transformation_type: this.anthropogenic_transformation_type,
                anthropogenic_transformation_quality: this.anthropogenic_transformation_quality
            }

            if (!this.arr.mackets || !this.arr.mackets[10]) {
                this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[10] = [macketObj]
            } else {
                this.arr.mackets[10] = [macketObj]
            }

            this.$store.dispatch('setForestArea', this.getForestArea)
        },
    },

}
</script>

<style scoped lang="scss">

</style>