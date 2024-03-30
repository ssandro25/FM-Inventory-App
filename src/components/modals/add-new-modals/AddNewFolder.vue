<template>
    <div
        class="modal fade"
        id="addNewFolder"
        tabindex="-1"
        aria-labelledby="addNewFolderLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="addNewFolderLabel">
                        საქაღალდის დამატება
                    </h1>
                    <button type="button" id="add_new_folder" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
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
                            v-model="new_folder"
                            type="text"
                            class="form-control"
                            id="new_folder"
                        >
                    </div>
                </div>

                <div class="modal-footer border-0 justify-content-center">
                    <button
                        :disabled="!new_folder"
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
    name: "AddNewFolder",

    data() {
        return {
            new_folder: '',
            currentDate: ''
        }
    },

    methods: {
        add() {
            const now = new Date();
            const day = ('0' + now.getDate()).slice(-2);
            const month = ('0' + (now.getMonth() + 1)).slice(-2);
            const year = now.getFullYear();
            this.currentDate = `${day}/${month}/${year}`;

            let obj = {
                id: this.getWorkSpace.length + 1,
                title: this.currentDate + ' - ' + this.new_folder,
                date: this.currentDate
            }
            this.$store.dispatch('setNewWorkSpace', obj)

            document.querySelector('#add_new_folder').click()
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