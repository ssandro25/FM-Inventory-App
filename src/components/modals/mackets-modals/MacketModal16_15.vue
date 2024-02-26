<template>
    <div
        class="modal fade"
        id="macket16_15"
        tabindex="-1"
        aria-labelledby="macket16_15Label"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket16_15Label">
                        ახალი ლიტერის დამატება
                    </h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="raw_material_category">
                                ნედლეულის კატეგორია
                            </label>

                            <select
                                v-model="raw_material_category"
                                class="form-select"
                                id="raw_material_category"
                            >
                                <option>აირჩიეთ</option>

                                <option
                                    v-for="item in getRawMaterialCategory"
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
    name: "MacketModal16_15",

    data() {
        return {
            arr: null,
            raw_material_category: ''
        }
    },

    props: {
        params: Object
    },

    computed: {
        ...mapGetters([
            'getForestArea',
            'getRawMaterialCategory'
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
                id: 16,
                raw_material_category: this.raw_material_category
            }

            if (!this.arr.mackets || !this.arr.mackets[14]) {
                this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[14] = [macketObj]
            } else {
                this.arr.mackets[14] = [macketObj]
            }

            this.$store.dispatch('setForestArea', this.getForestArea)
        },
    },

}
</script>

<style scoped lang="scss">

</style>