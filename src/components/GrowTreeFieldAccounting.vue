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
                            v-for="item in getRegisteredTreesData"
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

        <table v-if="getAddedTreesData.length" class="table table-bordered table-dark mt-3">
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
                v-for="(item, index) in getAddedTreesData"
                :key="index"
            >
                <th>{{ index + 1 }}</th>

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
                    <button
                        type="button"
                        class="btn btn-danger"
                    >
                        წაშლა
                    </button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
    name: "GrowTreeFieldAccounting",

    data() {
        return {
            tree_type: '',
            registered_tree: '',
            diameter: '',
            category: '',
            addedTrees: []
        }
    },

    methods: {
        registerSpecies() {
            let registerSpeciesObj = {
                'id' : this.getRegisteredTreesData.length + 1,
                'name' : this.tree_type,
            }

            this.$store.dispatch('setRegisteredTreesData', registerSpeciesObj)
        },

        addTree() {
            let addedTreesObj = {
                'registered_tree' : this.registered_tree,
                'diameter' : this.diameter,
                'category' : this.category,
            }

            this.$store.dispatch('setAddedTreesData', addedTreesObj)
        }
    },

    computed: {
        ...mapGetters([
            'getTreeType',
            'getRegisteredTreesData',
            'getDiameterData',
            'getCategoryData',
            'getAddedTreesData'
        ])
    },

    mounted() {

    }
}
</script>


<style scoped lang="scss">

</style>