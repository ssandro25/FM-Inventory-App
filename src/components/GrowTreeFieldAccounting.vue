<template>
    <div class="col-lg-6 col-12 p-0 table-responsive">
        <div>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#registerSpecies"
                    aria-expanded="false" aria-controls="registerSpecies">
                სახეობების რეესტრი (რეგისტრაცია)
            </button>
        </div>

        <div class="collapse mt-3" id="registerSpecies">
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
                        v-model="registeredTrees"
                        class="form-select"
                        id="test"
                    >
                        <option>აირჩიეთ</option>

                        <option
                            v-for="item in registeredTreesData"
                            :key="item.id"
                        >
                            {{ item }}
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
                            v-for="item in diameterData"
                            :key="item.id"
                        >
                            {{ item }}
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
                            v-for="item in categoryData"
                            :key="item.id"
                        >
                            {{ item }}
                        </option>
                    </select>
                </td>
            </tr>
            </tbody>
        </table>

        <div class="btn btn-success">
            <button
                type="button"
                class="btn btn-success btn-sm"
                @click="addTree"
            >
                დამატება
            </button>
        </div>

        <table v-if="addedTrees.length" class="table table-bordered table-dark mt-3">
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
                v-for="(item, index) in addedTrees"
                :key="index"
            >
                <th>{{ index+1 }}</th>

                <td>
                    {{ item.registered_trees }}
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
            registeredTrees: '',
            registeredTreesData: [],
            diameter: '',
            diameterData: [
                8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56,
                60, 64, 68, 72, 76, 80, 84, 88, 92, 96,
                100, 104, 108, 112, 116, 120, 124, 128, 132, 136,
                140, 144, 148, 152, 156, 160, 164, 168, 172, 176,
                180, 184, 188, 192, 196, 200
            ],
            category: '',
            categoryData: ['სამასალე', 'ნახევრად სამასალე', 'საშეშე', 'ზეხმელი-სამასალე', 'ზეხმელი-შეშა', 'ძირკვი'],
            addedTrees: []
        }
    },

    methods: {
        registerSpecies() {
            this.registeredTreesData.push(this.tree_type)
        },

        addTree() {
            let addedTreesObj = {
                'registered_trees' : this.registeredTrees,
                'diameter' : this.diameter,
                'category' : this.category,
            }
            this.addedTrees.push(addedTreesObj)
        }
    },

    computed: {
        ...mapGetters([
            'getTreeType'
        ])
    },

    mounted() {

    }
}
</script>


<style scoped lang="scss">

</style>