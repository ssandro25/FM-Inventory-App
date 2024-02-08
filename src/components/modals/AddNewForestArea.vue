<template>
    <div
        class="modal fade"
        id="addNewForestAreaModal"
        tabindex="-1"
        aria-labelledby="addNewForestAreaModalLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="addNewModalLabel">
                        ახალი სატყეო უბნის დამატება
                    </h1>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <div class="d-flex align-items-lg-center flex-lg-row flex-column gap-2">
                        <label
                            for="new_forest_area"
                            class="form-label modal__label"
                        >
                            სატყეო უბანი
                        </label>

                        <input
                            v-model="new_forest_area"
                            type="text"
                            class="form-control"
                            id="new_forest_area"
                        >
                    </div>
                </div>

                <div class="modal-footer border-0 justify-content-center">
                    <button
                        :disabled="!new_forest_area"
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
    name: "AddNewForestArea",

    data() {
        return {
            new_forest_area: ''
        }
    },

    methods: {
        add() {
            let obj = {
                id: this.getForestArea.length + 1,
                title: this.new_forest_area
            }
            this.$store.dispatch('setForestArea', obj)
        }
    },

    computed: {
        ...mapGetters([
            'getForestArea'
        ])
    }
}
</script>

<style scoped lang="scss">
.modal__label {
    min-width: 200px;
}
</style>