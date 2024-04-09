<template>
    <div
        class="modal fade"
        id="macket42_14_WS"
        tabindex="-1"
        aria-labelledby="macket42_14_WSLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket42_14_WSLabel">
                        42. ცხოველთა სამყარო
                    </h1>
                    <button type="button" id="close-btn42" class="btn-close btn-close-white" data-bs-dismiss="modal"
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
    name: "MacketModal42_14_WS",

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
            'getWorkSpace',
        ]),

        macket() {
            return this.getWorkSpace
                .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[13][0] || []
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
                id: 42,
                nests: this.nests,
                overgrown_trees: this.overgrown_trees,
                ant_nests: this.ant_nests,
                location: this.location
            }

            if (!this.arr.mackets || !this.arr.mackets[13]) {
                this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[13] = [macketObj]
            } else {
                this.arr.mackets[13] = [macketObj]
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)

            document.querySelector('#close-btn42').click()
        },
    },

    mounted() {
        this.arr = this.getWorkSpace
            .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
            .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
            .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
            .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
            .find(item => item.id === parseInt(this.$route.params.id))

        if (!this.arr.mackets || !this.arr.mackets[13]) {
            this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
        }

        let currentArr = this.getWorkSpace
            .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
            .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
            .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
            .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
            .find(item => item.id === parseInt(this.$route.params.id)).mackets[13]

        if (!(currentArr && currentArr[0] && (
            currentArr[0].nests !== null ||
            currentArr[0].overgrown_trees !== null ||
            currentArr[0].ant_nests !== null ||
            currentArr[0].location !== null
        ))) {
            this.add()
        }

        if (this.macket.nests) {
            this.nests = this.macket.nests
        }
        if (this.macket.overgrown_trees) {
            this.overgrown_trees = this.macket.overgrown_trees
        }
        if (this.macket.ant_nests) {
            this.ant_nests = this.macket.ant_nests
        }
        if (this.macket.location) {
            this.location = this.macket.location
        }
    }

}
</script>

<style scoped lang="scss">

</style>