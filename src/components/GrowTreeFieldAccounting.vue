<template>
    <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="speciesRegister" aria-labelledby="speciesRegisterLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title text-white" id="speciesRegisterLabel"> სახეობების რეესტრი</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div class="text-white" v-if="registeredTreesData">
                <p class="mb-3">დამატებულია შემდეგი სახეობები:</p>
                <ul class="d-flex flex-column gap-3 p-0">
                    <li
                        v-for="item in registeredTreesData"
                        :key="item.id"
                        class="d-flex align-items-center justify-content-between gap-2"
                    >
                        <span>{{ item.name }}</span>
                        <button
                            type="button"
                            class="btn btn-danger btn-sm d-flex align-items-center justify-content-center gap-2"
                            @click="removeRegisteredData(item.id)"
                        >
                            <img src="@/assets/images/trash-solid.svg" width="15" alt="">
                            <span>წაშლა</span>
                        </button>
                    </li>
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
                რეგისტრაცია
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

        <div class="add_tree__block mt-lg-3">
            <table class="table table-bordered table-dark mb-0">
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

            <div class="mt-lg-3 text-center py-lg-0 py-2">
                <p v-if="disabledAddTree" class="text-danger fs-12 my-lg-3 mb-2">
                    შეიყვანეთ ყველა მონაცემი
                </p>

                <button
                    type="button"
                    class="btn btn-success w-75"
                    @click="addTree"
                >
                    დამატება
                </button>
            </div>
        </div>

        <table v-if="addedTreesData" class="table table-bordered table-dark table-striped mt-lg-3 added_trees__list">
            <thead>
            <tr>
                <th class="fs-12" style="width: 50px;">#</th>
                <th class="fs-12">სახეობა</th>
                <th class="fs-12 d-none d-md-table-cell">დიამეტრი</th>
                <th class="fs-12 d-none d-md-table-cell">კატეგორია</th>
                <th class="fs-12" style="width: 115px;">მოქმედებები</th>
            </tr>
            </thead>
            <tbody>
            <tr
                v-for="(item, index) in addedTreesData"
                :key="item.id"
            >
                <th>{{ index + 1 }}</th>

                <td>
                    <div class="fs-14">
                        <p class="mb-0">{{ item.registered_tree }} <span class="d-inline d-md-none">- {{ item.diameter }}</span></p>
                        <p class="d-block d-md-none mt-3 mb-0">{{ item.category }}</p>
                    </div>

                </td>

                <td class="d-none d-md-table-cell">{{ item.diameter }}</td>

                <td class="d-none d-md-table-cell">{{ item.category }}</td>

                <td class="align-content-center">
                    <EditAddedTreeModal :item="item" />

                    <div class="d-flex justify-content-center gap-3">
                        <button
                            type="button"
                            class="btn btn-warning btn-sm"
                            data-bs-toggle="modal"
                            :data-bs-target="'#editAddedTreeItem'+item.id"
                        >
                            <img src="@/assets/images/edit-icon.svg" width="15" alt="">
                        </button>

                        <button
                            type="button"
                            class="btn btn-danger btn-sm"
                            @click="removeAddedTree(item.id)"
                        >
                            <img src="@/assets/images/trash-solid.svg" width="15" alt="">
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
            disabledAddTree: false,

            gaoTable: [],
            gaoTableWithTier: []
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
        },

        addTree() {
            if (!this.registered_tree || !this.diameter || !this.category) {
                this.disabledAddTree = true
            } else {
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

                // groupTreesData start
                // if (this.addedTreesData) {
                //     // Группировка по registered_tree
                //     const groupedByTree = this.addedTreesData.reduce((acc, tree) => {
                //         const key = tree.registered_tree;
                //         if (!acc[key]) {
                //             acc[key] = [];
                //         }
                //         acc[key].push(tree);
                //         return acc;
                //     }, {});
                //
                //     // Группировка по диаметру внутри каждой группы по имени
                //     for (const treeName in groupedByTree) {
                //         groupedByTree[treeName] = groupedByTree[treeName].reduce((acc, tree) => {
                //             const key = tree.diameter;
                //             if (!acc[key]) {
                //                 acc[key] = {count: 0, trees: []};
                //             }
                //             acc[key].count++; // Увеличиваем счетчик количества деревьев с данным диаметром
                //             acc[key].trees.push(tree);
                //             return acc;
                //         }, {});
                //     }
                //
                //
                //     // Подсчет категорий внутри каждой группы по имени и диаметру
                //     for (const treeName in groupedByTree) {
                //         for (const diameter in groupedByTree[treeName]) {
                //             const categoriesCount = groupedByTree[treeName][diameter].trees.reduce((acc, tree) => {
                //                 const category = tree.category;
                //                 acc[category] = (acc[category] || 0) + 1;
                //                 return acc;
                //             }, {});
                //             groupedByTree[treeName][diameter].categories = categoriesCount;
                //         }
                //     }
                //
                //     // Функция для замены грузинских символов на латинские и замены пробелов на "_"
                //     const normalizeString = (str) => {
                //         return str.replace(/ა/g, "a")
                //             .replace(/ბ/g, "b")
                //             .replace(/გ/g, "g")
                //             .replace(/დ/g, "d")
                //             .replace(/ე/g, "e")
                //             .replace(/ვ/g, "v")
                //             .replace(/ზ/g, "z")
                //             .replace(/თ/g, "t")
                //             .replace(/ი/g, "i")
                //             .replace(/კ/g, "k")
                //             .replace(/ლ/g, "l")
                //             .replace(/მ/g, "m")
                //             .replace(/ნ/g, "n")
                //             .replace(/ო/g, "o")
                //             .replace(/პ/g, "p")
                //             .replace(/ჟ/g, "zh")
                //             .replace(/რ/g, "r")
                //             .replace(/ს/g, "s")
                //             .replace(/ტ/g, "t")
                //             .replace(/უ/g, "u")
                //             .replace(/ფ/g, "p")
                //             .replace(/ქ/g, "k")
                //             .replace(/ღ/g, "gh")
                //             .replace(/ყ/g, "q")
                //             .replace(/შ/g, "sh")
                //             .replace(/ჩ/g, "ch")
                //             .replace(/ც/g, "ts")
                //             .replace(/ძ/g, "dz")
                //             .replace(/წ/g, "ts")
                //             .replace(/ჭ/g, "ch")
                //             .replace(/ხ/g, "kh")
                //             .replace(/ჯ/g, "j")
                //             .replace(/ჰ/g, "h")
                //             .replace(/ /g, "_")
                //             .replace(/-/g, "_");
                //     }
                //
                //     // Преобразование объекта groupedByTree в массив объектов key: option
                //     this.gaoTable = Object.entries(groupedByTree).map(([treeName, treeOptions]) => {
                //         const optionsArray = Object.entries(treeOptions).map(([diameter, data]) => {
                //             const normalizedCategories = Object.keys(data.categories).reduce((acc, category) => {
                //                 acc[normalizeString(category)] = data.categories[category];
                //                 return acc;
                //             }, {});
                //             return {diameter: diameter, count: data.count, categories: normalizedCategories};
                //         });
                //         return {key: treeName, option: optionsArray};
                //     });
                //
                //     this.gaoTable.forEach(item => {
                //         const categoryCountMap = {};
                //         item.option.forEach(option => {
                //             Object.entries(option.categories).forEach(([category, count]) => {
                //                 categoryCountMap[category] = (categoryCountMap[category] || 0) + count;
                //             });
                //         });
                //         item.categoryCountMap = categoryCountMap;
                //     });
                //
                //     this.arr.groupTreesData = this.gaoTable
                // }
                // groupTreesData end

                // groupTreesDataWithTier start
                if (this.addedTreesData) {
                    const groupedByTree = {};

                    // Группировка по registered_tree и диаметру
                    this.addedTreesData.forEach(tree => {
                        const key = tree.registered_tree;
                        if (!groupedByTree[key]) {
                            groupedByTree[key] = [];
                        }
                        groupedByTree[key].push(tree);
                    });

                    // Группировка по диаметру внутри каждой группы по имени
                    for (const treeName in groupedByTree) {
                        groupedByTree[treeName] = groupedByTree[treeName].reduce((acc, tree) => {
                            const key = tree.diameter;
                            if (!acc[key]) {
                                acc[key] = { count: 0, trees: [] };
                            }
                            acc[key].count++; // Увеличиваем счетчик количества деревьев с данным диаметром
                            acc[key].trees.push(tree);
                            return acc;
                        }, {});
                    }

                    // Подсчет категорий внутри каждой группы по имени и диаметру
                    for (const treeName in groupedByTree) {
                        for (const diameter in groupedByTree[treeName]) {
                            const categoriesCount = groupedByTree[treeName][diameter].trees.reduce((acc, tree) => {
                                const category = tree.category;
                                acc[category] = (acc[category] || 0) + 1;
                                return acc;
                            }, {});
                            groupedByTree[treeName][diameter].categories = categoriesCount;
                        }
                    }

                    // Функция для замены грузинских символов на латинские и замены пробелов на "_"
                    const normalizeString = (str) => {
                        return str.replace(/ა/g, "a")
                            .replace(/ბ/g, "b")
                            .replace(/გ/g, "g")
                            .replace(/დ/g, "d")
                            .replace(/ე/g, "e")
                            .replace(/ვ/g, "v")
                            .replace(/ზ/g, "z")
                            .replace(/თ/g, "t")
                            .replace(/ი/g, "i")
                            .replace(/კ/g, "k")
                            .replace(/ლ/g, "l")
                            .replace(/მ/g, "m")
                            .replace(/ნ/g, "n")
                            .replace(/ო/g, "o")
                            .replace(/პ/g, "p")
                            .replace(/ჟ/g, "zh")
                            .replace(/რ/g, "r")
                            .replace(/ს/g, "s")
                            .replace(/ტ/g, "t")
                            .replace(/უ/g, "u")
                            .replace(/ფ/g, "p")
                            .replace(/ქ/g, "k")
                            .replace(/ღ/g, "gh")
                            .replace(/ყ/g, "q")
                            .replace(/შ/g, "sh")
                            .replace(/ჩ/g, "ch")
                            .replace(/ც/g, "ts")
                            .replace(/ძ/g, "dz")
                            .replace(/წ/g, "ts")
                            .replace(/ჭ/g, "ch")
                            .replace(/ხ/g, "kh")
                            .replace(/ჯ/g, "j")
                            .replace(/ჰ/g, "h")
                            .replace(/ /g, "_")
                            .replace(/-/g, "_");
                    }

                    // Преобразование объекта groupedByTree в массив объектов key: option
                    this.gaoTableWithTier = Object.entries(groupedByTree).map(([treeName, trees]) => {
                        const options = Object.entries(trees).map(([diameter, data]) => {
                            const normalizedCategories = data.categories ? Object.keys(data.categories).reduce((acc, category) => {
                                acc[normalizeString(category)] = data.categories[category];
                                return acc;
                            }, {}) : {};

                            return { diameter: diameter, count: data.count, categories: normalizedCategories };
                        });

                        const smallDiameterTrees = options.filter(option => option.diameter <= 40);
                        const largeDiameterTrees = options.filter(option => option.diameter > 40);

                        return { key: treeName, option: { small: smallDiameterTrees, large: largeDiameterTrees } };
                    });

                    // Подсчет категорий для каждого элемента в this.gaoTableWithTier для small
                    this.gaoTableWithTier.forEach(item => {
                        const categoryCountMapSmall = {};
                        item.option.small.forEach(option => {
                            Object.entries(option.categories).forEach(([category, count]) => {
                                categoryCountMapSmall[category] = (categoryCountMapSmall[category] || 0) + count;
                            });
                        });
                        item.categoryCountMapSmall = categoryCountMapSmall;
                    });

                    // Подсчет категорий для каждого элемента в this.gaoTableWithTier для large
                    this.gaoTableWithTier.forEach(item => {
                        const categoryCountMapLarge = {};
                        item.option.large.forEach(option => {
                            Object.entries(option.categories).forEach(([category, count]) => {
                                categoryCountMapLarge[category] = (categoryCountMapLarge[category] || 0) + count;
                            });
                        });
                        item.categoryCountMapLarge = categoryCountMapLarge;
                    });

                    // Пример присваивания переменной this.arr.groupTreesData
                    this.arr.groupTreesDataWithTier = this.gaoTableWithTier;
                }
                // groupTreesDataWithTier end

                this.$store.dispatch('setWorkSpace', this.getWorkSpace)

                this.registered_tree = ''
                this.diameter = ''
                this.category = ''
                this.disabledAddTree = false
            }

        },

        removeAddedTree(id) {
            const index = this.addedTreesData.findIndex(product => product.id === parseInt(id));

            if (index !== -1) {
                this.addedTreesData.splice(index, 1);
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)
        },

        removeRegisteredData(id) {
            const index = this.registeredTreesData.findIndex(product => product.id === parseInt(id));

            if (index !== -1) {
                this.registeredTreesData.splice(index, 1);
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)
        }
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
}
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss">
.multiselect-option {
    color: #000 !important;
}
.added_trees__list {
    width: max-content !important;
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
        z-index: 10;
    }
}

@media screen and (max-width: 760px){
    .added_trees__list {
        max-width: 100%;
    }
    .add_tree__block {
        position: fixed;
        left: 0;
        bottom: 72px;
        width: 100%;
        background-color: #1e393f;
        z-index: 10;

        table td, table th {
            background-color: #1e393f !important;
        }

        button {
            background-color: #399170 !important;
        }
    }

   .added_trees__list {
       margin-bottom: 145px !important;
   }
}

</style>