<template>
    <div
        class="modal fade"
        id="macket4"
        tabindex="-1"
        aria-labelledby="macket4Label"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket4Label">
                        ახალი ლიტერის დამატება
                    </h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="deed_wood">
                                4.1 ჩახერგილობა საერთო
                            </label>

                            <input
                                v-model="deed_wood"
                                type="number"
                                class="form-control"
                                id="deed_wood"
                            >
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="deed_wood_liquid">
                                4.2 ჩახერგილობა ლიკვიდი
                            </label>

                            <input
                                v-model="deed_wood_liquid"
                                type="number"
                                class="form-control"
                                id="deed_wood_liquid"
                            >
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="old_deadwood">
                                4.3 ძველი ზეხმელის ჩახერგილობა
                            </label>

                            <input
                                v-model="old_deadwood"
                                type="number"
                                class="form-control"
                                id="old_deadwood"
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
    name: "MacketModal4",

    data() {
        return {
            arr: null,
            deed_wood: null,
            deed_wood_liquid: null,
            old_deadwood: null
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
                id: 4,
                deed_wood: this.deed_wood,
                deed_wood_liquid: this.deed_wood_liquid,
                old_deadwood: this.old_deadwood
            }

            if (!this.arr.mackets || !this.arr.mackets[3]) {
                this.arr.mackets = [[], [], [], [], [], [], [], [], []]
                this.arr.mackets[3] = [macketObj]
            } else {
                this.arr.mackets[3] = [macketObj]
            }

            this.$store.dispatch('setForestArea', this.getForestArea)
        },
    },

}
</script>

<style scoped lang="scss">

</style>