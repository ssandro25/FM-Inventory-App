<template>
    <table class="table table-bordered table-dark table-striped mt-lg-3 mb-0" style="width: max-content;">
        <thead>
        <tr>
            <th>სახეობა</th>
            <th>დიამეტრი</th>
            <th>სიმაღლე</th>
            <th>შენახვა</th>
        </tr>
        </thead>

        <tbody
            v-for="item in groupTreesDataWithHeight"
            :key="item.id"
        >
        <tr v-if="item.treeSmall">
            <td>{{ item.key }} {{ item.treeSmall.id }}</td>
            <td>{{ item.treeSmall.diameter }}</td>
            <td>
                <input
                    type="number"
                    v-model="item.treeSmall.height"
                    class="form-control form-control-sm"
                >
            </td>
            <td>
                <button
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="saveTreeHeight(item.treeSmall.id, item.treeSmall.height )"
                >
                    შენახვა
                </button>
            </td>
        </tr>
        </tbody>

        <tbody
            v-for="item in groupTreesDataWithHeight"
            :key="item.id"
        >
        <tr v-if="item.treeLarge">
            <td>{{ item.key }} {{ item.treeLarge.id }}</td>
            <td>{{ item.treeLarge.diameter }}</td>
            <td>
                <input
                    type="number"
                    v-model="item.treeLarge.height"
                    class="form-control form-control-sm"
                >
            </td>
            <td>
                <button
                    type="button"
                    class="btn btn-success btn-sm"
                    @click="saveTreeHeight(item.treeLarge.id, item.treeLarge.height)"
                >
                    შენახვა
                </button>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "GaoTreesSetHeightTab",

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getWorkSpaceID',
            'getForestryWS_ID',
            'getQuarterWS_ID',
            'getLiterWS_ID',
            'getSampleAreaID',
        ]),

        groupTreesDataWithHeight() {
            return this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.getLiterWS_ID)).sampleAreaArr
                .find(item => item.id === parseInt(this.$route.params.id)).groupTreesDataWithHeight
        },

        groupTreesDataWithTier() {
            return this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.getLiterWS_ID)).sampleAreaArr
                .find(item => item.id === parseInt(this.$route.params.id)).groupTreesDataWithTier
        },

    },

    methods: {
        saveTreeHeight(treeId, height) {
            // Преобразуем treeId в число
            treeId = parseInt(treeId);

            let updated = false;

            // Поиск дерева по его id в массиве groupTreesDataWithTier
            for (const item of this.groupTreesDataWithTier) {
                // Проверяем наличие опций и внутри них ищем дерево по ID
                if (item.option?.small) {
                    const treeToUpdate = item.option.small.find(tree => tree.id === treeId);
                    if (treeToUpdate) {
                        // Обновляем высоту дерева
                        item.averageHeightSmall = parseFloat(height);
                        updated = true;
                        break; // Прерываем цикл, если дерево найдено
                    }
                }
                if (item.option?.large) {
                    const treeToUpdate = item.option.large.find(tree => tree.id === treeId);
                    if (treeToUpdate) {
                        // Обновляем высоту дерева
                        item.averageHeightLarge = parseFloat(height);
                        updated = true;
                        break; // Прерываем цикл, если дерево найдено
                    }
                }
            }

            // Если дерево не было найдено, можно сделать какие-то дополнительные действия
            if (!updated) {
                console.warn(`Дерево с ID ${treeId} не найдено`);
                return;
            }

            // Диспетчеризация только если дерево было обновлено
            this.$store.dispatch('setWorkSpace', this.getWorkSpace);
        }

    }
}
</script>

<style scoped lang="scss">

</style>