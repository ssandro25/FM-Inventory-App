<template>
    <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="speciesRegister" aria-labelledby="speciesRegisterLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title text-white" id="speciesRegisterLabel"> სახეობების რეესტრი</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="text-white" v-if="registeredTreesData">
                <p class="mb-3">დამატებულია შემდეგი სახეობები:</p>
                <ul
                    v-for="(item, index) in registeredTreesData"
                    :key="index"
                >
                    <li>{{ item.name }}</li>
                </ul>
            </div>

            <div class="text-white mb-3" v-else>
                არც ერთი სახოება არ არის რეგისტრირებული. აირჩიეთ ქვემოდან.
            </div>

            <Multiselect
                v-model="tree_type"
                :options="getTreeTypeGao"
                mode="tags"
                :searchable="true"
                :closeOnSelect="false"
                noResultsText="ხე არ მოიძებნა"
            />

            <button
                type="button"
                class="btn btn-success w-100 mt-3"
                @click="registerSpecies"
            >
                დამატება
            </button>
        </div>
    </div>

    <div class="col-lg-7 col-12 p-0 table-responsive">
        <div>
            <button
                type="button"
                class="btn btn-warning species__register_btn"
                data-bs-toggle="offcanvas"
                data-bs-target="#speciesRegister"
                aria-controls="speciesRegister"
            >
                <span class="d-none d-lg-block">სახეობების რეესტრი (რეგისტრაცია)</span>

                <img
                    src="@/assets/images/options.svg"
                    width="16"
                    alt=""
                    class="d-block d-lg-none"
                >
            </button>
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
                :disabled="!registered_tree && !diameter && !category"
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
import Multiselect from '@vueform/multiselect'

export default {
    name: "GrowTreeFieldAccounting",

    components: {
        EditAddedTreeModal,
        Multiselect
    },

    data() {
        return {
            tree_type: null,
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

            // let registerSpeciesObj = {
            //     id: this.arr.registerSpeciesArr && this.arr.registerSpeciesArr.length ? this.arr.registerSpeciesArr.length + 1 : 1,
            //     name: this.tree_type
            // }
            //
            //
            // if (!this.arr.registerSpeciesArr) {
            //     this.arr.registerSpeciesArr = [registerSpeciesObj];
            // } else {
            //     this.arr.registerSpeciesArr.push(registerSpeciesObj)
            // }

            let registerSpeciesArr = this.tree_type.map((item, index) => {
                return {
                    id: index + 1,
                    name: item
                };
            })

            if (!this.arr.registerSpeciesArr) {
                this.arr.registerSpeciesArr = registerSpeciesArr;
            } else {
                this.arr.registerSpeciesArr.push(...registerSpeciesArr);
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)
            console.log(this.tree_type)
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

            'getTreeTypeGao'
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

    mounted() {
        console.log(this.registered_tree)
    }
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss">
.multiselect-option {
    color: #000 !important;
}

@media screen and (max-width: 991px){
    .species__register_btn {
        position: fixed;
        top: 10px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50% !important;
        display: flex !important;
        align-items: center;
        justify-content: center;
    }
}

</style>