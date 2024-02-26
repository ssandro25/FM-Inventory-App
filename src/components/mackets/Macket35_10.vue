<template>
    <MacketModal35_10 :params="params"/>

    <button
        type="button"
        class="btn rounded-0 rounded-top btn-light w-100 text-truncate"
        data-bs-toggle="modal"
        data-bs-target="#macket35_10"
    >
        35. კოორდინატები
    </button>

    <div
        v-for="(item, index) in macket"
        :key="index"
        class="item d-flex flex-column gap-2 rounded-bottom p-3 border-top-0"
    >
        <p class="mb-0">
            35.1. გრძედი (X) - {{ item.latitude_x }}
        </p>

        <p class="mb-0">
            35.2. განედი (Y) - {{ item.latitude_y }}
        </p>
    </div>

</template>

<script>
import { mapGetters } from "vuex";
import MacketModal35_10 from "@/components/modals/mackets-modals/MacketModal35_10.vue";
export default {
    name: "FMMacket35_10",

    components: {
        MacketModal35_10,
    },

    computed: {
        ...mapGetters([
            'getForestAreaID',
            'getQuarterID',
            'getForestArea',
            'getLiterID'
        ]),

        macket() {
           return this.getForestArea
                .find(item => item.id === parseInt(this.params.forestAreaID)).forestry
                .find(item => item.id === parseInt(this.params.quarterID)).quarters
                .find(item => item.id === parseInt(this.params.literID)).liters
                .find(item => item.id === parseInt(this.$route.params.id))?.mackets?.[9] || []
        },

        params() {
            return {
                forestAreaID: this.getForestAreaID,
                quarterID: this.getQuarterID,
                literID: this.getLiterID,
                macketID: this.$route.params.id
            }
        }
    },
}
</script>

<style scoped lang="scss">

</style>