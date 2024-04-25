<template>
    <AddNewTaxCard/>

    <div
        data-bs-toggle="modal"
        data-bs-target="#addNewTaxCard"
        class="add_new__btn rounded d-flex align-items-center justify-content-center p-3 my-4"
    >
        <div class="d-flex align-items-center gap-2">
            <img src="@/assets/images/plus-solid.svg" width="20" alt="">

            <span>
                დაამატე ახალი
            </span>
        </div>
    </div>

    <div class="tax_card__list rounded p-3">
        <div
            v-for="item in filteredTaxCard"
            :key="item.id"
            class="d-flex align-items-center gap-2 mt-4"
            :class="{
                'mb-5' : item.without_sample_area,
            }"
        >
            <button
                type="button"
                class="btn"
                :class="{
                'btn-outline-success' : !item.chosen,
                'btn-success' : item.chosen
            }"
                @click="chooseTaxCard(item.id)"

            >
                {{ item.chosen ? 'არჩეულია' : 'არჩევა' }}
            </button>

            <router-link
                :to="/work-space/+this.getWorkSpaceID+/forestry/+this.getForestryWS_ID+/quarter/+this.getQuarterWS_ID+/liter/+this.$route.params.id+/macket/+item.id"
                class="item rounded d-flex align-items-center justify-content-center text-decoration-none text-white p-3 flex-grow-1"
                :class="{
                'position-relative' : item.without_sample_area,
                'border border-5 rounded border-success' : item.chosen
            }"
            >
                {{ item.title }} {{ item.id }}

                <button
                    v-if="item.without_sample_area"
                    type="button"
                    class="btn p-0 position-absolute end-0 me-3"
                    @click.prevent="removeTaxCard(item.id)"
                >
                    <img src="@/assets/images/trash-solid.svg" width="15" alt="">
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import AddNewTaxCard from "@/components/modals/add-new-modals/AddNewTaxCard.vue";

export default {
    name: "TaxCardList",

    components: {
        AddNewTaxCard
    },

    methods: {
        chooseTaxCard(id) {
            const previouslyChosenTaxCardItem = this.taxCard.find(e => e.chosen);
            const previouslyChosenSampleAreaItem = this.sampleAreas.find(e => e.chosen);

            if (previouslyChosenTaxCardItem) {
                previouslyChosenTaxCardItem.chosen = false;
            }
            if (previouslyChosenSampleAreaItem) {
                previouslyChosenSampleAreaItem.chosen = false;
            }

            const taxCardItem = this.taxCard.find(e => e.id === parseInt(id));
            const sampleAreaItem = this.sampleAreas.find(e => e.id === parseInt(id));

            const workSpace = this.getWorkSpace.find(item => item.id ===  parseInt(this.params.workSpaceID));
            const forestryWS = workSpace ? workSpace.forestryWS.find(item => item.id === parseInt(this.params.forestryWS_ID)) : [];
            const quarterWS = forestryWS ? forestryWS.quarterWS.find(item => item.id === parseInt(this.params.quarterWS_ID)) : [];
            const literWS = quarterWS ? quarterWS.literWS.find(item => item.id === parseInt(this.params.literWS_ID)) : [];

            literWS.chosen = true
            taxCardItem.chosen = true
            sampleAreaItem.chosen = true

            this.$store.dispatch('setWorkSpace', this.getWorkSpace)
        },

        removeTaxCard(id) {
            const index = this.taxCard.findIndex(e => e.id === parseInt(id));

            if (index !== -1) {
                this.sampleAreas.splice(index, 1);
                this.taxCard.splice(index, 1);
            }
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

        filteredTaxCard() {
            let taxCard = [...this.taxCard];

            const chosenIndex = taxCard.findIndex(item => item.chosen === true);
            if (chosenIndex !== -1) {
                const chosenItem = taxCard[chosenIndex];
                taxCard.splice(chosenIndex, 1);
                taxCard.unshift(chosenItem);
            }

            return taxCard;
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
    },
}
</script>

<style scoped lang="scss">
.tax_card__list {
    background-color: #222F2A;
}
</style>