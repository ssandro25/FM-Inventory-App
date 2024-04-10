<template>
    <div
        class="modal fade"
        id="macket35_10_WS"
        tabindex="-1"
        aria-labelledby="macket35_10_WSLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket35_10_WSLabel">
                        35. კოორდინატები
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
    name: "MacketModal35_10_WS",

    data() {
        return {
            arr: null,
            latitude_x: null,
            latitude_y: null,

            acceptClear: false
        }
    },

    props: {
        params: Object
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
        ]),

        macket() {
            return this.getWorkSpace
                .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[9][0] || []
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
                id: 35,
                latitude_x: this.latitude_x,
                latitude_y: this.latitude_y
            }

            if (!this.arr.mackets || !this.arr.mackets[9]) {
               this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[9] = [macketObj]
            } else {
                this.arr.mackets[9] = [macketObj]
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)

            document.querySelector('#close-btn35').click()
        },

        clear() {
            this.latitude_x = ''
            this.latitude_y = ''

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

        if (!this.arr.mackets || !this.arr.mackets[9]) {
           this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
        }

        let currentArr = this.getWorkSpace
            .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
            .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
            .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
            .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
            .find(item => item.id === parseInt(this.$route.params.id)).mackets[9]

        if (!(currentArr && currentArr[0] && (
            currentArr[0].latitude_x !== null ||
            currentArr[0].latitude_y !== null
        ))) {
            this.add()
        }

        if (this.macket.latitude_x) {
            this.latitude_x = this.macket.latitude_x
        }
        if (this.macket.latitude_y) {
            this.latitude_y = this.macket.latitude_y
        }
    }

}
</script>

<style scoped lang="scss">

</style>