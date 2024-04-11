<template>
    <div
        class="modal fade"
        id="addNewQuarter_WS"
        tabindex="-1"
        aria-labelledby="addNewQuarter_WSLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="addNewQuarter_WSLabel">
                        კვარტლის დამატება
                    </h1>
                    <button type="button" id="add_quarter_wc" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex align-items-lg-center flex-lg-row flex-column gap-2">
                        <label
                            for="new_folder"
                            class="form-label modal__label"
                        >
                            ჩაწერეთ სახელი
                        </label>

                        <input
                            v-model="new_quarter_ws"
                            type="text"
                            class="form-control"
                            id="new_folder"
                        >
                    </div>
                </div>

                <div class="modal-footer border-0 justify-content-center">
                    <button
                        :disabled="!new_quarter_ws"
                        type="button"
                        class="btn btn-success col-lg-6 col-12"
                        @click="add"
                    >
                        დამატება
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "AddNewQuarter_WS",

    data() {
        return {
            arr: null,
            new_quarter_ws: '',
        }
    },

    props: {
        params: Object
    },

    methods: {
        add() {
            this.arr = this.getWorkSpace
                .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.params.forestryWS_ID))

            let quarterWS_Obj = {
                id: this.arr.quarterWS && this.arr.quarterWS.length ? this.arr.quarterWS.length + 1 : 1,
                title: this.new_quarter_ws,
                dropdown: false
            }

            if (!this.arr.quarterWS) {
                this.arr.quarterWS = [quarterWS_Obj];
            } else {
                this.arr.quarterWS.push(quarterWS_Obj)
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)
            this.new_quarter_ws = ''

            document.querySelector('#add_quarter_wc').click()
        }
    },

    computed: {
        ...mapGetters([
            'getWorkSpace'
        ])
    }
}
</script>

<style scoped lang="scss">
.modal__label {
    min-width: 200px;
}
</style>