<template>
    <div
        class="modal fade"
        id="addNewForestryWS"
        tabindex="-1"
        aria-labelledby="addNewForestryWSLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="addNewForestryWSLabel">
                        სატყეოს დამატება
                    </h1>
                    <button type="button" id="add_forestry_wc" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
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
                            v-model="new_forestry_wc"
                            type="text"
                            class="form-control"
                            id="new_folder"
                        >
                    </div>
                </div>

                <div class="modal-footer border-0 justify-content-center">
                    <button
                        :disabled="!new_forestry_wc"
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
    name: "AddNewForestryWS",

    data() {
        return {
            new_forestry_wc: '',
            arr: null,
        }
    },

    props: {
        params: Object
    },

    methods: {
        add() {
            this.arr = this.getWorkSpace
                .find(item => item.id === parseInt(this.params.workSpaceID))

            let forestryWS_Obj = {
                id: this.arr.forestryWS && this.arr.forestryWS.length ? this.arr.forestryWS.length + 1 : 1,
                title: this.new_forestry_wc
            }

            if (!this.arr.forestryWS) {
                this.arr.forestryWS = [forestryWS_Obj];
            } else {
                this.arr.forestryWS.push(forestryWS_Obj)
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)
            this.new_forestry_wc = ''

            document.querySelector('#add_forestry_wc').click()

            // console.log(typeof this.arr, this.arr.forestryWS)
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