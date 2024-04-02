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
            <td>{{ item.key }}</td>
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
                    @click="saveTree(item.key, item.treeSmall.diameter, item.treeSmall.height)"
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
            <td>{{ item.key }}</td>
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
                    @click="saveTree(item.key, item.treeLarge.diameter, item.treeLarge.height)"
                >
                    შენახვა
                </button>
            </td>
        </tr>
        </tbody>
    </table>

    <table v-if="groupTreesDataWithGivenHeight" class="table table-bordered table-dark table-striped mt-lg-3 mb-0" style="width: max-content;">
        <thead>
        <tr>
            <th>სახეობა</th>
            <th>დიამეტრი</th>
            <th>სიმაღლე</th>
        </tr>
        </thead>

        <tbody>
        <tr
            v-for="(item, index) in groupTreesDataWithGivenHeight"
             :key="index"
        >
            <td>{{ item.name }}</td>
            <td>{{ item.diameter }}</td>
            <td>{{ item.height }}</td>
        </tr>
        </tbody>
    </table>

</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "GaoTreesSetHeightTab",

    data() {
        return {
            groupTreesDataWithGivenHeightArr: [],
            test: [
                {name: 'sandro', age: 27, color: 'blue'},
                {name: 'irakli', age: 25, color: 'green'},
                {name: 'giorgi', age: 28, color: 'black'},
            ]
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
        ]),

        groupTreesDataWithHeight() {
            return this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.getLiterWS_ID)).sampleAreaArr
                .find(item => item.id === parseInt(this.$route.params.id)).groupTreesDataWithHeight
        },

        groupTreesDataWithGivenHeight() {
            return this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.getLiterWS_ID)).sampleAreaArr
                .find(item => item.id === parseInt(this.$route.params.id)).groupTreesDataWithGivenHeight
        },
    },

    methods: {
        saveTree(name, diameter, height) {
            this.arr = this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.getLiterWS_ID)).sampleAreaArr
                .find(item => item.id === parseInt(this.$route.params.id))

            let obj = {
                name: name,
                diameter: diameter,
                height: height,
            }

            this.groupTreesDataWithGivenHeightArr.push(obj)

            this.arr.groupTreesDataWithGivenHeight = this.groupTreesDataWithGivenHeightArr

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)
        },
    }
}
</script>

<style scoped lang="scss">

</style>