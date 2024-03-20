<template>
    <div
        class="modal fade"
        :id="'editAddedTreeItem'+item.id"
        tabindex="-1"
        aria-labelledby="editAddedTreeItemLabel"
        aria-hidden="true"
    >
        <div class="modal-dialog modal-fullscreen-sm-down">
            <div class="modal-content bg-dark">
                <div class="modal-header border-0">
                    <h1 class="modal-title fs-5" id="editAddedTreeItemLabel">
                        {{ item.registered_tree }} - რედაქტირება
                    </h1>
                    <button type="button" id="edit_added_tree" class="btn-close btn-close-white" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    <select
                        v-model="registered_tree_edit"
                        class="form-select"
                        id="diameter"
                    >
                        <option>აირჩიეთ</option>

                        <option
                            v-for="item in registeredTreesData"
                            :key="item.id"
                        >
                            {{ item.name }}
                        </option>
                    </select>

                    <select
                        v-model="diameter_edit"
                        class="form-select mt-3"
                        id="diameter"
                    >
                        <option>აირჩიეთ</option>

                        <option
                            v-for="item in getDiameterData"
                            :key="item.id"
                        >
                            {{ item.name }}
                        </option>
                    </select>

                    <select
                        v-model="category_edit"
                        class="form-select mt-3"
                        id="diameter"
                    >
                        <option>აირჩიეთ</option>

                        <option
                            v-for="item in getCategoryData"
                            :key="item.id"
                        >
                            {{ item.name }}
                        </option>
                    </select>
                </div>

                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-success"
                        @click="editAddedTree(item.id)"
                    >
                        ცვლილებების შენახვა
                    </button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "EditAddedTreeModal",

    props: {
        item: Object
    },

    data() {
        return {
            registered_tree_edit: '',
            diameter_edit: '',
            category_edit: '',
        }
    },

    methods: {
        editAddedTree(id) {
            const item = this.addedTreesData.find(product => product.id === parseInt(id));

            item.registered_tree = this.registered_tree_edit;
            item.diameter = this.diameter_edit;
            item.category = this.category_edit;

            this.$store.dispatch('setWorkSpace', this.getWorkSpace);

            this.registered_tree_edit = '';
            this.diameter_edit = '';
            this.category_edit = '';

            document.querySelector('#edit_added_tree').click()
        }
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getWorkSpaceID',
            'getForestryWS_ID',
            'getQuarterWS_ID',
            'getLiterWS_ID',
            'getDiameterData',
            'getCategoryData',
        ]),

        registeredTreesData() {
            return this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.getLiterWS_ID)).sampleAreaArr
                .find(item => item.id === parseInt(this.$route.params.id)).registerSpeciesArr
        },

        addedTreesData() {
            return this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.getLiterWS_ID)).sampleAreaArr
                .find(item => item.id === parseInt(this.$route.params.id)).gaoAddedTreesArr
        }
    }
}
</script>



<style scoped lang="scss">

</style>