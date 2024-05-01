<template>
    <div
        class="add_new__btn rounded d-flex align-items-center justify-content-center p-3 my-4"
        @click="addNewSampleArea()"
    >
        <span class="d-flex align-items-center gap-2">
            <img src="@/assets/images/plus-solid.svg" width="20" alt="">

            <span>
                დაამატე ახალი
            </span>
        </span>
    </div>

    <div class="sample_area__list rounded p-3">
        <div
            v-for="item in filteredSampleAreas"
            :key="item.id"
            class="mt-4"
        >
            <div
                v-if="item.without_sample_area"
                class="item rounded text-center text-white p-3 without_sample_area mb-5 d-flex align-items-center justify-content-center gap-1"
            >
                <svg width="14" height="14" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3.93 4.43L18.07 18.57M21 11.5C21 17.0228 16.5228 21.5 11 21.5C5.47715 21.5 1 17.0228 1 11.5C1 5.97715 5.47715 1.5 11 1.5C16.5228 1.5 21 5.97715 21 11.5Z"
                        stroke="#991B1B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                {{ item.title }}
            </div>

            <router-link
                v-else
                :to="/work-space/+this.getWorkSpaceID+/forestry/+this.getForestryWS_ID+/quarter/+this.getQuarterWS_ID+/liter/+this.$route.params.id+/sample-area/+item.id"
                class="item rounded d-flex align-items-center justify-content-center text-decoration-none text-white p-3 position-relative"
                :class="{
                 'border border-5 rounded border-success' : item.chosen
            }"
            >
                {{ item.title }} {{ item.id }}

                <button
                    type="button"
                    class="btn p-0 position-absolute end-0 me-3"
                    @click.prevent="removeSampleArea(item.id)"
                >
                    <img src="@/assets/images/trash-solid.svg" width="15" alt="">
                </button>
            </router-link>
        </div>
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
                chosen: false
            }

            if (!this.arr.sampleAreaArr) {
                this.arr.sampleAreaArr = [sampleArea_Obj];
            } else {
                this.arr.sampleAreaArr.push(sampleArea_Obj)
            }

            let taxCard_Obj = {
                id: this.arr.taxCardArr && this.arr.taxCardArr.length ? this.arr.taxCardArr.length + 1 : 1,
                title: 'ტაქსაციის ბარათი #',
                chosen: false
            }

            if (!this.arr.taxCardArr) {
                this.arr.taxCardArr = [taxCard_Obj];
            } else {
                this.arr.taxCardArr.push(taxCard_Obj)
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)
        },

        removeSampleArea(id) {
            const index = this.sampleAreas.findIndex(product => product.id === parseInt(id));

            if (index !== -1) {
                this.sampleAreas.splice(index, 1);
                this.taxCard.splice(index, 1);
            }

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)
        },
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

        filteredSampleAreas() {
            let sampleAreas = [...this.sampleAreas];

            const chosenIndex = sampleAreas.findIndex(item => item.chosen === true);
            if (chosenIndex !== -1) {
                const chosenItem = sampleAreas[chosenIndex];
                sampleAreas.splice(chosenIndex, 1);
                sampleAreas.unshift(chosenItem);
            }

            return sampleAreas;
        },

        taxCard() {
            const workSpaceID = parseInt(this.params.workSpaceID);
            const forestryWS_ID = parseInt(this.params.forestryWS_ID);
            const quarterWS_ID = parseInt(this.params.quarterWS_ID);
            const literWS_ID = parseInt(this.params.literWS_ID);

            const workSpace = this.getWorkSpace.find(item => item.id === workSpaceID);
            const forestryWS = workSpace ? workSpace.forestryWS.find(item => item.id === forestryWS_ID) : [];
            const quarterWS = forestryWS ? forestryWS.quarterWS.find(item => item.id === quarterWS_ID) : [];
            const literWS = quarterWS ? quarterWS.literWS.find(item => item.id === literWS_ID) : [];
            const taxCard = literWS ? literWS.taxCardArr : [];

            return taxCard ? taxCard : [];
        },

        params() {
            return {
                workSpaceID: this.getWorkSpaceID,
                forestryWS_ID: this.getForestryWS_ID,
                quarterWS_ID: this.getQuarterWS_ID,
                literWS_ID: this.$route.params.id,
            }
        }
    },

    mounted() {
        this.$store.dispatch('setSampleAreaID', this.$route.params.id)
    }
}
</script>

<style scoped lang="scss">
.sample_area__list {
    background-color: #222F2A;
}

.item.without_sample_area {
    background: #FEE2E2 !important;
    color: #991B1B !important;
    font-size: 14px;
    position: relative;
}

.item.without_sample_area::after {
    content: "";
    position: absolute;
    width: 213%;
    height: 2px;
    background-color: #5e6873;
    bottom: -25px;
    left: -111%;
}
</style>