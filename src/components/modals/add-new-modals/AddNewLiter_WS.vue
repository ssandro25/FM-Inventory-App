<template>
    <div
        class="modal fade"
        id="addNewLiter_WS"
        tabindex="-1"
        aria-labelledby="addNewLiter_WSLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="addNewLiter_WSLabel">
                        ლიტერის დამატება
                    </h1>
                    <button type="button" id="add_liter_wc" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
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
                            v-model="new_liter_ws"
                            type="text"
                            class="form-control"
                            id="new_folder"
                        >
                    </div>
                </div>

                <div class="modal-footer border-0 justify-content-center">
                    <button
                        :disabled="!new_liter_ws"
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
    name: "AddNewLiter_WS",

    data() {
        return {
            arr: null,
            new_liter_ws: '',
        }
    },

    props: {
        params: Object
    },

    methods: {
        add() {
            this.arr = this.getWorkSpace
                .find(item => item.id === parseInt(this.params.workSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.params.forestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.params.quarterWS_ID))

            let literWS_Obj = {
                id: this.arr.literWS && this.arr.literWS.length ? this.arr.literWS.length + 1 : 1,
                title: this.new_liter_ws,
                dropdown: false
            }

            if (!this.arr.literWS) {
                this.arr.literWS = [literWS_Obj];
            } else {
                this.arr.literWS.push(literWS_Obj)
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)
            this.new_liter_ws = ''

            document.querySelector('#add_liter_wc').click()
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