<template>
    <div
        class="modal fade"
        id="macket42_14"
        tabindex="-1"
        aria-labelledby="macket42_14Label"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket42_14Label">
                        ახალი ლიტერის დამატება
                    </h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="nests">
                                40.1. დაზიანების კლასი
                            </label>

                            <input
                                v-model="nests"
                                type="number"
                                class="form-control"
                                id="nests"
                            >
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="overgrown_trees">
                                42.2. გადაბერებული ხეები ფუღუროთი
                            </label>

                            <input
                                v-model="overgrown_trees"
                                type="number"
                                class="form-control"
                                id="overgrown_trees"
                            >
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="ant_nests">
                                42.3. ჭიანჭველების ბუდეები -
                            </label>

                            <input
                                v-model="ant_nests"
                                type="number"
                                class="form-control"
                                id="ant_nests"
                            >
                        </div>

                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="location">
                                42.4. ადგილსამყოფელი
                            </label>

                            <input
                                v-model="location"
                                type="number"
                                class="form-control"
                                id="location"
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
    name: "MacketModal42_14",

    data() {
        return {
            arr: null,
            nests: null,
            overgrown_trees: null,
            ant_nests: null,
            location: null
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
                id: 42,
                nests: this.nests,
                overgrown_trees: this.overgrown_trees,
                ant_nests: this.ant_nests,
                location: this.location
            }

            if (!this.arr.mackets || !this.arr.mackets[13]) {
                this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[13] = [macketObj]
            } else {
                this.arr.mackets[13] = [macketObj]
            }

            this.$store.dispatch('setForestArea', this.getForestArea)
        },
    },

}
</script>

<style scoped lang="scss">

</style>