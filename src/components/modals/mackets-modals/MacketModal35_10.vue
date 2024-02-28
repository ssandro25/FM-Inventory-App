<template>
    <div
        class="modal fade"
        id="macket35_10"
        tabindex="-1"
        aria-labelledby="macket35_10Label"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket35_10Label">
                        ახალი ლიტერის დამატება
                    </h1>
                    <button type="button" id="close-btn35" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="latitude_x">
                                35.1. გრძედი (X)
                            </label>

                            <input
                                v-model="latitude_x"
                                type="number"
                                class="form-control"
                                id="latitude_x"
                            >
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="latitude_y">
                                35.2. განედი (Y)
                            </label>

                            <input
                                v-model="latitude_y"
                                type="number"
                                class="form-control"
                                id="latitude_y"
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
    name: "MacketModal35_10",

    data() {
        return {
            arr: null,
            latitude_x: null,
            latitude_y: null
        }
    },

    props: {
        params: Object
    },

    computed: {
        ...mapGetters([
            'getForestArea',
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
                id: 35,
                latitude_x: this.latitude_x,
                latitude_y: this.latitude_y
            }

            if (!this.arr.mackets || !this.arr.mackets[9]) {
                this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[9] = [macketObj]
            } else {
                this.arr.mackets[9] = [macketObj]
            }

            this.$store.dispatch('setForestArea', this.getForestArea)

            document.querySelector('#close-btn35').click()
        },
    },

}
</script>

<style scoped lang="scss">

</style>