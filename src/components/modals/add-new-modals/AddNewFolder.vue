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
                            საქაღალდის სახელი
                        </label>

                        <input
                            v-model="new_folder"
                            type="text"
                            class="form-control"
                            id="new_folder"
                        >
                    </div>

                    <div class="d-flex align-items-lg-center flex-lg-row flex-column gap-2 mt-3">
                        <label
                            for="new_forestry_ws"
                            class="form-label modal__label"
                        >
                            სეტყეოს სახელი
                        </label>

                        <input
                            v-model="new_forestry_ws"
                            type="text"
                            class="form-control"
                            id="new_forestry_ws"
                        >
                    </div>

                    <div class="d-flex align-items-lg-center flex-lg-row flex-column gap-2 mt-3">
                        <label
                            for="new_quarter_ws1"
                            class="form-label modal__label"
                        >
                            კვარტლი 1-ის სახელი
                        </label>

                        <input
                            v-model="new_quarter_ws1"
                            type="text"
                            class="form-control"
                            id="new_quarter_ws1"
                        >
                    </div>

                    <div v-if="new_quarter_ws1" class="d-flex align-items-lg-center flex-lg-row flex-column gap-2 mt-3">
                        <label
                            for="new_quarter_ws2"
                            class="form-label modal__label"
                        >
                            კვარტლი 2-ის სახელი
                        </label>

                        <input
                            v-model="new_quarter_ws2"
                            type="text"
                            class="form-control"
                            id="new_quarter_ws2"
                        >
                    </div>

                    <div v-if="new_quarter_ws2" class="d-flex align-items-lg-center flex-lg-row flex-column gap-2 mt-3">
                        <label
                            for="new_quarter_ws3"
                            class="form-label modal__label"
                        >
                            კვარტლი 3-ის სახელი
                        </label>

                        <input
                            v-model="new_quarter_ws3"
                            type="text"
                            class="form-control"
                            id="new_quarter_ws3"
                        >
                    </div>

                    <div v-if="new_quarter_ws3" class="d-flex align-items-lg-center flex-lg-row flex-column gap-2 mt-3">
                        <label
                            for="new_quarter_ws4"
                            class="form-label modal__label"
                        >
                            კვარტლი 4-ის სახელი
                        </label>

                        <input
                            v-model="new_quarter_ws4"
                            type="text"
                            class="form-control"
                            id="new_quarter_ws4"
                        >
                    </div>

                    <div v-if="new_quarter_ws4" class="d-flex align-items-lg-center flex-lg-row flex-column gap-2 mt-3">
                        <label
                            for="new_quarter_ws5"
                            class="form-label modal__label"
                        >
                            კვარტლი 5-ის სახელი
                        </label>

                        <input
                            v-model="new_quarter_ws5"
                            type="text"
                            class="form-control"
                            id="new_quarter_ws5"
                        >
                    </div>
                </div>

                <div class="modal-footer border-0 justify-content-center">
                    <button
                        :disabled="!new_folder || !new_forestry_ws || !new_quarter_ws1"
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
            currentDate: '',
            new_forestry_ws: '',
            new_quarter_ws1: '',
            new_quarter_ws2: '',
            new_quarter_ws3: '',
            new_quarter_ws4: '',
            new_quarter_ws5: ''
        }
    },

    methods: {
        add() {
            const now = new Date();
            const day = ('0' + now.getDate()).slice(-2);
            const month = ('0' + (now.getMonth() + 1)).slice(-2);
            const year = now.getFullYear();
            this.currentDate = `${day}/${month}/${year}`;

            let workspaceItem = this.getWorkSpace.find(item => item.id === parseInt(this.$route.params.id));

            if (!workspaceItem) {
                workspaceItem = {
                    id: this.getWorkSpace.length + 1,
                    title: this.currentDate + ' - ' + this.new_folder,
                    date: this.currentDate,
                    dropdown: false,
                    forestryWS: []
                };
                this.getWorkSpace.push(workspaceItem);
            }

            let forestryWS_Obj = {
                id: workspaceItem.forestryWS.length ? workspaceItem.forestryWS.length + 1 : 1,
                title: this.new_forestry_ws,
                dropdown: false,
                quarterWS: [
                    {
                        id: 1,
                        title: this.new_quarter_ws1,
                        dropdown: false
                    }
                ]
            }

            if (this.new_quarter_ws2) {
                forestryWS_Obj.quarterWS.push({
                    id: 2,
                    title: this.new_quarter_ws2,
                    dropdown: false
                });
            }

            if (this.new_quarter_ws3) {
                forestryWS_Obj.quarterWS.push({
                    id: 3,
                    title: this.new_quarter_ws3,
                    dropdown: false
                });
            }

            if (this.new_quarter_ws4) {
                forestryWS_Obj.quarterWS.push({
                    id: 4,
                    title: this.new_quarter_ws4,
                    dropdown: false
                });
            }

            if (this.new_quarter_ws5) {
                forestryWS_Obj.quarterWS.push({
                    id: 5,
                    title: this.new_quarter_ws5,
                    dropdown: false
                });
            }

            workspaceItem.forestryWS.push(forestryWS_Obj);

            // this.$store.dispatch('setNewWorkSpace', obj)
            this.$store.dispatch('setWorkSpace', this.getWorkSpace)

            document.querySelector('#add_new_folder').click()
        },
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