<template>
    <div class="col-lg-6 col-12 p-0 table-responsive">
        <div>
            <button class="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#registerSpecies"
                    aria-expanded="false" aria-controls="registerSpecies">
                სახეობების რეესტრი (რეგისტრაცია)
            </button>
        </div>

        <div class="collapse mt-3" id="registerSpecies">
            <div class="d-flex flex-md-row flex-column gap-3 ">
                <select
                    v-model="tree_type"
                    class="form-select"
                    id="tree_type"
                >
                    <option>აირჩიეთ</option>

                    <option
                        v-for="item in getTreeType"
                        :key="item.id"
                    >
                        {{ item.name }}
                    </option>
                </select>

                <button
                    type="button"
                    class="btn btn-success"
                    @click="registerSpecies"
                >
                    დამატება
                </button>
            </div>
        </div>

        <table class="table table-bordered table-dark mt-3">
            <thead>
            <tr>
                <th>#</th>
                <th>სახეობა</th>
                <th>დიამეტრი</th>
                <th>კატეგორია</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th></th>

                <td>
                    <select
                        v-model="registered_tree"
                        class="form-select"
                        id="test"
                    >
                        <option>აირჩიეთ</option>

                        <option
                            v-for="item in registeredTreesData"
                            :key="item.id"
                        >
                            {{ item.name }}
                        </option>
                    </select>
                </td>

                <td>
                    <select
                        v-model="diameter"
                        class="form-select"
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
                </td>

                <td>
                    <select
                        v-model="category"
                        class="form-select"
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
                </td>
            </tr>
            </tbody>
        </table>

        <div>
            <button
                type="button"
                class="btn btn-success btn-sm"
                @click="addTree"
            >
                დამატება
            </button>
        </div>

        <table v-if="addedTreesData" class="table table-bordered table-dark table-striped mt-3">
            <thead>
            <tr>
                <th>#</th>
                <th>სახეობა</th>
                <th>დიამეტრი</th>
                <th>კატეგორია</th>
                <th>მოქმედებები</th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="item in addedTreesData"
                :key="item.id"
            >
                <th>{{ item.id }}</th>

                <td>
                    {{ item.registered_tree }}
                </td>

                <td>
                    {{ item.diameter }}
                </td>

                <td>
                    {{ item.category }}
                </td>

                <td>
                    <EditAddedTreeModal :item="item" />

                    <div class="d-flex gap-3">
                        <button
                            type="button"
                            class="btn btn-warning d-flex align-items-center justify-content-center gap-2 w-100"
                            data-bs-toggle="modal"
                            :data-bs-target="'#editAddedTreeItem'+item.id"
                        >
                            <img src="@/assets/images/edit-icon.svg" width="15" alt="">
                            <span>რედაქტირება</span>
                        </button>

                        <button
                            type="button"
                            class="btn btn-danger d-flex align-items-center justify-content-center gap-2 w-100"
                            @click="removeAddedTree(item.id)"
                        >
                            <img src="@/assets/images/trash-solid.svg" width="15" alt="">
                            <span>წაშლა</span>
                        </button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import {mapGetters} from "vuex";
import EditAddedTreeModal from "@/components/modals/EditAddedTreeModal.vue";

export default {
    name: "GrowTreeFieldAccounting",

    components: {
        EditAddedTreeModal
    },

    data() {
        return {
            tree_type: '',
            registered_tree: '',
            diameter: '',
            category: '',
            arr: [],
            addedTrees: [],
        }
    },

    methods: {
        registerSpecies() {
            this.arr = this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.getLiterWS_ID)).sampleAreaArr
                .find(item => item.id === parseInt(this.$route.params.id))

            let registerSpeciesObj = {
                id: this.arr.registerSpeciesArr && this.arr.registerSpeciesArr.length ? this.arr.registerSpeciesArr.length + 1 : 1,
                name: this.tree_type
            }

            if (!this.arr.registerSpeciesArr) {
                this.arr.registerSpeciesArr = [registerSpeciesObj];
            } else {
                this.arr.registerSpeciesArr.push(registerSpeciesObj)
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)
        },

        addTree() {
            this.arr = this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.getLiterWS_ID)).sampleAreaArr
                .find(item => item.id === parseInt(this.$route.params.id))

            let addedTreesObj = {
                id: this.arr.gaoAddedTreesArr && this.arr.gaoAddedTreesArr.length ? this.arr.gaoAddedTreesArr.length + 1 : 1,
                registered_tree: this.registered_tree,
                diameter: this.diameter,
                category: this.category,
            }

            if (!this.arr.gaoAddedTreesArr) {
                this.arr.gaoAddedTreesArr = [addedTreesObj];
            } else {
                this.arr.gaoAddedTreesArr.push(addedTreesObj)
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)

            this.registered_tree = ''
            this.diameter = ''
            this.category = ''
        },

        removeAddedTree(id) {
            const index = this.addedTreesData.findIndex(product => product.id === parseInt(id));

            if (index !== -1) {
                this.addedTreesData.splice(index, 1);
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)
        },
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getWorkSpaceID',
            'getForestryWS_ID',
            'getQuarterWS_ID',
            'getLiterWS_ID',
            'getSampleAreaID',
            'getTreeType',
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
    },
}
</script>


<style scoped lang="scss">

</style>