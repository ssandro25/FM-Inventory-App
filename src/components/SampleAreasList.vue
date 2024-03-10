<template>
    <div
        class="add_new__btn rounded d-flex align-items-center justify-content-center p-3 mt-4"
        @click="addNewSampleArea()"
    >
                    <span class="d-flex align-items-center gap-2">
                        <img src="@/assets/images/plus-solid.svg" width="20" alt="">

                        <span>
                            დაამატე ახალი
                        </span>
                    </span>
    </div>

    <div
        v-for="item in sampleAreas"
        :key="item.id"
        class="mt-4"
    >
        <div
            v-if="item.without_sample_area"
            class="item rounded text-center text-white p-3 without_sample_area"
        >
            {{ item.title }}
        </div>

        <router-link
            v-else
            to="/"
            class="item rounded d-flex align-items-center justify-content-center text-decoration-none text-white p-3"
        >
            {{ item.title }} {{ item.id }}
        </router-link>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "SampleAreasList",

    data() {
        return {
            arr: []
        }
    },

    methods: {
        addNewSampleArea() {
            this.arr = this.getWorkSpace
                .find(item => item.id === parseInt(this.getWorkSpaceID)).forestryWS
                .find(item => item.id === parseInt(this.getForestryWS_ID)).quarterWS
                .find(item => item.id === parseInt(this.getQuarterWS_ID)).literWS
                .find(item => item.id === parseInt(this.$route.params.id))

            let sampleArea_Obj = {
                id: this.arr.sampleAreaArr && this.arr.sampleAreaArr.length ? this.arr.sampleAreaArr.length + 1 : 1,
                title: 'სანიმუშო ფართობი #',
            }

            if (!this.arr.sampleAreaArr) {
                this.arr.sampleAreaArr = [sampleArea_Obj];
            } else {
                this.arr.sampleAreaArr.push(sampleArea_Obj)
            }

            let taxCard_Obj = {
                id: this.arr.taxCardArr && this.arr.taxCardArr.length ? this.arr.taxCardArr.length + 1 : 1,
                title: 'ტაქსაციის ბარათი #',
            }

            if (!this.arr.taxCardArr) {
                this.arr.taxCardArr = [taxCard_Obj];
            } else {
                this.arr.taxCardArr.push(taxCard_Obj)
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)
        }
    },

    computed: {
        ...mapGetters([
            'getWorkSpace',
            'getWorkSpaceID',
            'getForestryWS_ID',
            'getQuarterWS_ID'
        ]),

        sampleAreas() {
            const workSpaceID = parseInt(this.params.workSpaceID);
            const forestryWS_ID = parseInt(this.params.forestryWS_ID);
            const quarterWS_ID = parseInt(this.params.quarterWS_ID);
            const literWS_ID = parseInt(this.params.literWS_ID);

            const workSpace = this.getWorkSpace.find(item => item.id === workSpaceID);
            const forestryWS = workSpace ? workSpace.forestryWS.find(item => item.id === forestryWS_ID) : [];
            const quarterWS = forestryWS ? forestryWS.quarterWS.find(item => item.id === quarterWS_ID) : [];
            const literWS = quarterWS ? quarterWS.literWS.find(item => item.id === literWS_ID) : [];
            const sampleAreas = literWS ? literWS.sampleAreaArr : [];

            return sampleAreas ? sampleAreas : [];
        },

        params() {
            return {
                workSpaceID: this.getWorkSpaceID,
                forestryWS_ID: this.getForestryWS_ID,
                quarterWS_ID: this.getQuarterWS_ID,
                literWS_ID: this.$route.params.id,
            }
        }
    }
}
</script>

<style scoped lang="scss">
.item.without_sample_area {
    background: #cc7d7d !important;
    color: #10142b !important;
    font-weight: bold;
}
</style>