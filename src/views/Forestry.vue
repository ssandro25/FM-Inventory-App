<template>
    <AddNewForestry />

    <div class="container-fluid p-md-5 p-3 mt-md-0 mt-5">
        <h1 class="text-white mb-3">სატყეო</h1>
        <div class="row row-cols-md-3 row-cols-1 gy-4">
            <div class="col">
                <div
                    data-bs-toggle="modal"
                    data-bs-target="#addNewForestryModal"
                    class="add_new__btn rounded d-flex align-items-center justify-content-center p-3"
                >
                    <div class="d-flex align-items-center gap-2">
                        <img src="@/assets/images/plus-solid.svg" width="20" alt="">

                        <span>
                            დაამატე ახალი
                        </span>
                    </div>
                </div>
            </div>

            <div
                v-for="item in forestry"
                :key="item.id"
                class="col"
            >
                <router-link
                    :to="'/forest-district/'+this.$route.params.id+'/forestry/'+item.id"
                    class="item rounded d-flex align-items-center justify-content-center text-decoration-none text-white p-3"
                >
                    {{ item.title }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import AddNewForestry from "@/components/modals/add-new-modals/AddNewForestry.vue";

export default {
    name: "FMForestry",

    components: {
        AddNewForestry
    },

    data() {
        return {
            forestry: []
        }
    },

    methods: {
        setForestAreaID() {
            this.$store.dispatch('setForestAreaID', this.$route.params.id)
        }
    },

    computed: {
        ...mapGetters([
            'getForestArea'
        ])
    },

    mounted() {
        this.setForestAreaID()

        // this.forestry = this.getForestArea.filter(item => item.id === parseInt(this.$route.params.id))[0].items;
        this.forestry = this.getForestArea
            .filter(item => item.id === parseInt(this.$route.params.id))
            .map(item => item.forestry)[0]

        // console.log(this.forestry)
    }
}
</script>