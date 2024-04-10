<template>
    <div
        class="modal fade"
        id="macket4_WS"
        tabindex="-1"
        aria-labelledby="macket4_WSLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket4_WSLabel">
                        4. ჩახერგილობა
                    </h1>
                    <button type="button" id="close-btn4" class="btn-close btn-close-white" data-bs-dismiss="modal"
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
    name: "MacketModal4_WS",

    data() {
        return {
            arr: null,
            deed_wood: null,
            deed_wood_liquid: null,
            old_deadwood: null,

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
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[3][0] || []
        },

        disabledClearBtn() {
            return (
                this.deed_wood === null &&
                this.deed_wood_liquid === null &&
                this.old_deadwood === null
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
                id: 4,
                deed_wood: this.deed_wood,
                deed_wood_liquid: this.deed_wood_liquid,
                old_deadwood: this.old_deadwood
            }

            if (!this.arr.mackets || !this.arr.mackets[3]) {
                 this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[3] = [macketObj]
            } else {
                this.arr.mackets[3] = [macketObj]
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)

            document.querySelector('#close-btn4').click()
        },

        clear() {
            this.deed_wood = null
            this.deed_wood_liquid = null
            this.old_deadwood = null

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

        if (!this.arr.mackets || !this.arr.mackets[3]) {
             this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
        }

        let currentArr = this.getWorkSpace
            .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
            .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
            .find(item => item.id === parseInt(this.params.quarterWS_ID)).literWS
            .find(item => item.id === parseInt(this.params.literWS_ID)).taxCardArr
            .find(item => item.id === parseInt(this.$route.params.id)).mackets[3]

        if (!(currentArr && currentArr[0] && (
            currentArr[0].deed_wood !== null ||
            currentArr[0].deed_wood_liquid !== null ||
            currentArr[0].old_deadwood !== null
        ))) {
            this.add()
        }

        if (this.macket.deed_wood) {
            this.deed_wood = this.macket.deed_wood
        }
        if (this.macket.deed_wood_liquid) {
            this.deed_wood_liquid = this.macket.deed_wood_liquid
        }
        if (this.macket.old_deadwood) {
            this.old_deadwood = this.macket.old_deadwood
        }
    }

}
</script>

<style scoped lang="scss">

</style>