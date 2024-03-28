<template>
    <AddNewTaxCard />

    <div
        data-bs-toggle="modal"
        data-bs-target="#addNewTaxCard"
        class="add_new__btn rounded d-flex align-items-center justify-content-center p-3 mt-4"
    >
        <div class="d-flex align-items-center gap-2">
            <img src="@/assets/images/plus-solid.svg" width="20" alt="">

            <span>
                დაამატე ახალი
            </span>
        </div>
    </div>

    <div
        v-for="item in taxCard"
        :key="item.id"
        class="d-flex align-items-center gap-2 mt-4"
        :class="{
                'mb-5' : item.without_sample_area
            }"
    >
        <div class="form-check">
            <input class="form-check-input" type="checkbox">
        </div>

        <router-link
            :to="/work-space/+this.getWorkSpaceID+/forestry/+this.getForestryWS_ID+/quarter/+this.getQuarterWS_ID+/liter/+this.$route.params.id+/macket/+item.id"
            class="item rounded d-flex align-items-center justify-content-center text-decoration-none text-white p-3 flex-grow-1"
            :class="{
                'position-relative' : item.without_sample_area
            }"
        >
            {{ item.title }} {{ item.id }}

            <button
                v-if="item.without_sample_area"
                type="button"
                class="btn p-0 position-absolute end-0 me-3"
                @click.prevent="removeTaxCard(item.id)"
            >
                <img src="@/assets/images/trash-solid.svg"  width="15" alt="">
            </button>
        </router-link>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddNewTaxCard from "@/components/modals/add-new-modals/AddNewTaxCard.vue";

export default {
    name: "TaxCardList",

    components: {
        AddNewTaxCard
    },

    methods: {
        removeTaxCard(id) {
            const index = this.taxCard.findIndex(product => product.id === parseInt(id));

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

</style>