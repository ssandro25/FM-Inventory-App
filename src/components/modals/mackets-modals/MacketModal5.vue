<template>
    <div
        class="modal fade"
        id="macket5"
        tabindex="-1"
        aria-labelledby="macket5Label"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="macket5Label">
                        5. გამოსავლიანობის პროცენტი
                    </h1>
                    <button type="button" id="close-btn5" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex flex-column gap-3">
                        <div class="d-flex align-items-center gap-2">
                            <label class="form-label text-truncate w-100 mb-0" for="yield_percent">
                                5.1 გამოსავლიანობის პროცენტი
                            </label>

                            <input
                                v-model="yield_percent"
                                type="number"
                                class="form-control"
                                id="yield_percent"
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
    name: "MacketModal5",

    data() {
        return {
            arr: null,
            yield_percent: null
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
                id: 5,
                yield_percent: this.yield_percent
            }

            if (!this.arr.mackets || !this.arr.mackets[4]) {
                this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
                this.arr.mackets[4] = [macketObj]
            } else {
                this.arr.mackets[4] = [macketObj]
            }

            this.$store.dispatch('setForestArea', this.getForestArea)

            document.querySelector('#close-btn5').click()
        },
    },

    mounted() {
        this.arr = this.getForestArea
            .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
            .find(item => item.id === parseInt(this.params.quarterID)).quarters
            .find(item => item.id === parseInt(this.params.literID)).liters
            .find(item => item.id === parseInt(this.params.macketID))

        if (!this.arr.mackets || !this.arr.mackets[4]) {
            this.arr.mackets = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
        }

        let currentArr = this.getForestArea
            .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
            .find(item => item.id === parseInt(this.params.quarterID)).quarters
            .find(item => item.id === parseInt(this.params.literID)).liters
            .find(item => item.id === parseInt(this.params.macketID)).mackets[4]

        if (!(currentArr && currentArr[0] && (currentArr[0].yield_percent !== null))) {
            this.add()
        }
    }

}
</script>

<style scoped lang="scss">

</style>